
const gridSize=21;

export function RandomGrid()

{
 
return {
    x:Math.floor((Math.random()*gridSize)),
    y:Math.floor((Math.random()*gridSize))
}

}

export function outSide(position)
{
 return (position.x<1 || position.x>gridSize ||position.y<1 || position.y>gridSize)
 
}