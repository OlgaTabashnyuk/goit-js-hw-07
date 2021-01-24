// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

//     Категория: Животные
//     Количество элементов: 4

/*
 *вариант 1  - вывести количество элементов li.item  в списке ul#categories
 */

const itemsListRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsListRef.length} категории`);

// вариант 2  - вывести количество элементов li.item  в списке ul#categories
// const itemsListRef = document.querySelector('#categories');
// console.log(`В списке ${itemsListRef.children.length} категории`);

// вариант 3
// const itemsListRef = document.querySelectorAll('h2').length;
// console.log(`В списке ${itemsListRef} категории`);

itemsListRef.forEach(item => {
  const titleRef = item.querySelector('h2').textContent;
  console.log(`Заголовок элемента: ${titleRef}`);

  const numberOfItems = item.querySelectorAll('ul > li').length;
  console.log(`Категория: ${titleRef}, Количество элементов: ${numberOfItems}`);
});
