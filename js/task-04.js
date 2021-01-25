// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// {/* <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>; */}
const valueRef = document.querySelector('#value');

const btnIncremRef = document.querySelector('button[data-action="increment"]');
console.log(btnIncremRef);

const btnDecremRef = document.querySelector('button[data-action="decrement"]');
console.log(btnDecremRef);
let counterValue = 0;

const increaseValue = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decreaseValue = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;

  console.log(btnDecremRef);
};
btnIncremRef.addEventListener('click', increaseValue);

btnDecremRef.addEventListener('click', decreaseValue);
