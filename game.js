import {snakeSpeed,update as updateSnake, draw as drawSnake,getSnakeHead,
snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import { outSide } from "./grid.js";



const gameBoard=document.getElementById('game-board')
let lastRenderTime=0;
let gameOver=false;

function main(currentTime)
{

if(gameOver)
{
   if(confirm("game lost,press ok to restart"))
   window.location='/'
   return;
}

    window.requestAnimationFrame(main)
    const secondsTillLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsTillLastRender<1/snakeSpeed) return;
  
    lastRenderTime=currentTime;
   console.log("rendering")
   update()
  draw()

 
}

window.requestAnimationFrame(main);

function update()
{
    updateSnake()
    updateFood()
    checkEnd()

}
function draw()
{
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkEnd()
{
    gameOver=outSide(getSnakeHead())|| snakeIntersection()

}