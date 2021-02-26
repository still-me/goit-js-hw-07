//* 1st edition

/* const categoriesList = document.querySelector("#categories");
const categories = document.querySelectorAll(".item");

const counter = (list, categories) => {
    console.log(`В списке ${list.children.length} категории`);
    
    categories.forEach((element) => {
    console.log(`• Категория: ${element.firstElementChild.textContent}`);
    console.log(`• Количество элементов: ${element.lastElementChild.children.length}`);
  });
};

counter(categoriesList, categories);
 */

 //* 2nd edition 
 
const categories = document.querySelectorAll("#categories .item")
console.log(`В списке ${categories.length} категории`);

categories.forEach(item => {

  const categoryName = item.querySelector("h2");
  console.log(`• Категория: ${categoryName.textContent}`);

  const categoryItems = item.querySelectorAll("li")
  console.log(`• Количество элементов: ${categoryItems.length}`);
});
