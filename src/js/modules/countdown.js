export default () => {
  const $countdown = document.querySelector(".js-countdown");
  const targetDate = new Date($countdown.dataset.to).getTime();
  const $days = document.querySelector(".js-countdown-days");
  const $hours = document.querySelector(".js-countdown-hours");
  const $minutes = document.querySelector(".js-countdown-minutes");
  const $seconds = document.querySelector(".js-countdown-seconds");
  const $daysLabel = document.querySelector(".js-countdown-days-label");
  const $hoursLabel = document.querySelector(".js-countdown-hours-label");
  const $minutesLabel = document.querySelector(".js-countdown-minutes-label");
  const $secondsLabel = document.querySelector(".js-countdown-seconds-label");
  
  let timer = setInterval( () => {
    const now = Date.now();
    const diff = (targetDate - now)/1000;
    if (diff < 0) {
      clearInterval(timer);
      return;
    }
    let days = Math.floor(diff/3600/24);
    let hours = Math.floor(diff/3600%24);
    let minutes = Math.floor(diff/60%60);
    let seconds = Math.floor(diff%60);
    
    const daysLabel = declOfNum(days, ['День', 'Дня', 'Дней']);
    const hoursLabel = declOfNum(hours, ['Час', 'Часа', 'Часов']);
    const minutesLabel = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
    const secondsLabel = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    
    days = `${days}`;
    hours < 10 ? hours = `0${hours}` : hours = `${hours}`;
    minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`;
    seconds < 10 ? seconds = `0${seconds}` : seconds = `${seconds}`;
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = seconds;

    $daysLabel.innerHTML = daysLabel;
    $hoursLabel.innerHTML = hoursLabel;
    $minutesLabel.innerHTML = minutesLabel;
    $secondsLabel.innerHTML = secondsLabel;
  }, 1000 );

  function declOfNum(n, textForms) {  
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 == 1) { return textForms[0]; }
    return textForms[2];
  }
}