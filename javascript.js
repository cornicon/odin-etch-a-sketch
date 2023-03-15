const container = document.querySelector('.container');
let gridSize = prompt('Enter the size of the grid in squares (1-100)');

if(gridSize < 1)
    gridSize = 1;
if(gridSize > 100)
    gridSize = 100;

for(let i = 0; i < gridSize; i++)
{
    let divI = document.createElement('div');
    container.appendChild(divI);

    for(let j = 0; j < gridSize; j ++)
    {
        let divJ = document.createElement('div');
        divJ.innerHTML = `${i},${j}`;
        divI.appendChild(divJ);
    }
}

const divs = container.querySelectorAll('div');

divs.forEach(div => div.addEventListener('mouseover', mouseOver, {
    capture: false,
    once: true
  }));

function mouseOver(e)
{
    e.stopPropagation();
    //console.log(this);
    this.style.backgroundColor = 'yellow';

}