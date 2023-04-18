const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const listNew = ingredients.map((ingredient) => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  createItem.classList= "item";
  createItem.style.listStyle = "none";
return createItem;
  });
  ingredientsList.append(...listNew);

