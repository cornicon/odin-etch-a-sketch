const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridSize = 10;

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
        //divJ.innerHTML = `${i},${j}`;
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
    this.style.backgroundColor = RandomColor();
}

function RandomColor()
{
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

function RemoveAllChildren(Element)
{
    while(Element.lastChild)
    {
        Element.lastChild.remove();
    }
}

function UpdateGrid(GridSize)
{
    RemoveAllChildren(container);

    if(GridSize < 1)
        GridSize = 1;
    if(GridSize > 100)
        GridSize = 100;

    for(let i = 0; i < GridSize; i++)
    {
        let divI = document.createElement('div');
        container.appendChild(divI);

        for(let j = 0; j < GridSize; j ++)
        {
            let divJ = document.createElement('div');
            //divJ.innerHTML = `${i},${j}`;
            divI.appendChild(divJ);
        }
    }

    const divs = container.querySelectorAll('div');

    divs.forEach(div => div.addEventListener('mouseover', mouseOver, {
        capture: false,
        once: true
    }));
}