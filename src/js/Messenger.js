import { interval, from } from 'rxjs';
import { timeConverter, wordTrimmer } from './tools';

export default class Messenger {
  constructor(el) {
    this.el = el;
    this.field = el.querySelector('.messenger_field');
    this.url = 'https://messages-kxrxll.herokuapp.com/messages/unread';
  }

  init() {
    const obs$ = interval(1000);
    obs$.subscribe(() => {
      from(fetch(this.url)).subscribe((result) => {
        Promise.resolve(result.json()).then((obj) => {
          const { messages } = obj;
          for (const message of messages) {
            this.drawMessage(message);
          }
        });
      });
    });
  }

  drawMessage(obj) {
    const newEl = document.createElement('div');
    newEl.classList.add('message');
    newEl.innerHTML = `
      <p class="from">${obj.from}</p>
      <p class="subject">${wordTrimmer(obj.subject.toString())}...</p>
      <p class="date">${timeConverter(obj.received)}</p>
    `;
    this.field.prepend(newEl);
  }
}
