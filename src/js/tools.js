export function timeConverter(timestamp) {
  const a = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = `${date} ${month} ${hour}:${min}`;
  return time;
}

export function wordTrimmer(str) {
  return str.substring(0, Math.min(str.length, 15));
}
