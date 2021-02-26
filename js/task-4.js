const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue
}

const decrement = () => {
  if (counterValue === 0){
    return
  }
  counterValue -= 1;
  valueRef.textContent = counterValue
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);