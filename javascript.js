const container = document.querySelector('.container');
let gridSize = 16;

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