const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryRef = document.querySelector("#gallery");

//* 1st edition

/* const createItem = ({url, alt}) => {
  galeryRef.insertAdjacentHTML("beforeend",`<li class ="task3-item"> <img class ="task3-img" src="${url}" alt="${alt}"> </li>`);
};

const addItemsToList = (array) => array.map(createItem);

addItemsToList(images);
 */


 //* 2nd edition
const addItemsToList = (array, list) => {
    array.map(({ url, alt }) =>
        list.insertAdjacentHTML("beforeend", ` <li class ="task3-item"> <img class ="task3-img" src="${url}" alt="${alt}"> </li>`));
};

addItemsToList(images, galeryRef);

