const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const background = document.querySelector('body');

stopBtn.classList.add('change-color-buttons-stop');
startBtn.classList.add('change-color-buttons-start');

stopBtn.disabled = true;
let timer = null;


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    background.style.backgroundColor = getRandomHexColor();
};

function onStartBtnClick() {
    timer = setInterval(changeColor, 1000);
    stopBtn.disabled = false;
    startBtn.disabled = true;
};


function onStopBtnClick() {
    clearInterval(timer);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}


