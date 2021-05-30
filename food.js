import { RandomGrid } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

let food = getRandom();
const expansion_rate = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(expansion_rate);
    food = getRandom();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandom() {
  let NewFood;
  while (NewFood == null || onSnake(NewFood)) {
    NewFood = RandomGrid();
  }
  return NewFood;
}
