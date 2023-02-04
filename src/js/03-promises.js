import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
//const delayInputEl = document.querySelector("input[name=delay]"); - доступ до елемента через Нейм


formEl.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();

  const { elements: { delay, step, amount } } = e.currentTarget;

  let delayInput = Number(delay.value);
  const stepInput = Number(step.value);
  const amountInput = Number(amount.value);

  console.log(delayInput);
  console.log(stepInput);
  console.log(amountInput);

  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
      console.log(position);
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    delayInput = delayInput + stepInput;
  };

  //e.currentTarget.reset();
};
 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay })
      }
    reject({ position, delay })
    }, delay)
  });
};


 


