import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const clockDays = document.querySelector('[data-days]');
const clockHours = document.querySelector('[data-hours]');
const clockMinutes = document.querySelector('[data-minutes]');
const clockSeconds = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');

startBtn.disabled = true;
let timerId = null;
let selectData = null;
const addLeadingZero = value => String(value).padStart(2, 0);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
      return alert('Please choose a date in the future');
      };
      startBtn.disabled = false;
      selectData = new Date(selectedDates[0]);
    },
};

const timer = () => {
    const now = new Date();

    //if (!selectData) return;

    const timerTime = selectData.getTime() - now.getTime();
    console.log(timerTime);
    const { days, hours, minutes, seconds } = convertMs(timerTime);
    clockDays.textContent = addLeadingZero(days);
    clockHours.textContent = addLeadingZero(hours);
    clockMinutes.textContent = addLeadingZero(minutes);
    clockSeconds.textContent = addLeadingZero(seconds);

    if (
        clockDays.textContent === '00' &&
        clockHours.textContent === '00' &&
        clockMinutes.textContent === '00' &&
        clockSeconds.textContent === '00'
    ) {
        clearInterval(timerId);
    }
};

flatpickr(input, options);

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    if (timerId) {
        clearInterval(timerId);
      }
    timer();
    timerId = setInterval(timer, 1000);
    startBtn.disabled = true;
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}