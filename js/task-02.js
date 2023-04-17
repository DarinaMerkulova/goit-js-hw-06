const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientsList = document.getElementById("ingredients");
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = `"${ingredient}"`;
  li.classList= "item";
  li.style.listStyle = "none";
  IngredientsList.appendChild(li);
 }




