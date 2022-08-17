const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const creationElement = (elemnt) => {

    return elemnt.map(item => {
    const elements = document.createElement('li');
    elements.classList.add('item');
    elements.textContent = item;

    return elements;
  });
};

const newElement = creationElement(ingredients);
list.append(...newElement);



