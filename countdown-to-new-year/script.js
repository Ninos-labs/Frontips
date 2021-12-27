const daysNode = document.querySelector('.days');
const hoursNode = document.querySelector('.hours');
const minutesNode = document.querySelector('.minutes');
const secondsNode = document.querySelector('.seconds');

const nexYear = new Date().getFullYear() + 1;
const newYear = new Date(`January 01 ${nexYear}`);

const timeCountDown = () => {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysNode.innerHTML = formatTime(days);
  hoursNode.innerHTML = formatTime(hours);
  minutesNode.innerHTML = formatTime(minutes);
  secondsNode.innerHTML = formatTime(seconds);
};

const formatTime = (time) => (time > 10 ? time : `0${time}`);

timeCountDown();
setInterval(timeCountDown, 1000);
