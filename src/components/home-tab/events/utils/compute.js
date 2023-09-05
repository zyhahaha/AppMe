/**
 *
 * @param {int} dateTim 时间戳
 */
export default function countdown(dateTim, type) {
  if (typeof dateTim !== 'number') return {};
  var days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;
  var time = seconds = (Date.now() - dateTim) / 1000;

  days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  if (type === 'hours') seconds = time;
  hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  if (type === 'minutes') seconds = time;
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  if (type === 'minutes') seconds = time;
  seconds = Math.floor(seconds);

  // 添加0
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return {
    days,
    hours,
    minutes,
    seconds
  };
}
