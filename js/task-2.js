const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createElement = (name) => {
    const element = document.createElement('li');
    element.textContent = name;
    return element
};

const addElementsToList = (list, array) => {
    const setOfElements = array.map(createElement);
    list.append(...setOfElements);
}

addElementsToList(ingredientsRef, ingredients );
