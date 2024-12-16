//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns

//-------------------------Variables---------------------- 
let currentPosition = startPosition
let score = 0
//-------------------------Elements----------------------
const startButtonElement = document.querySelector("#start-game")
const gridContainer = document.querySelector('.grid')
const gridCells = []
//-------------------------Functions--------------------
function generateBox (){
    for(let idx = 0; idx < totalCellCount; idx++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerText = idx
    cell.style.width = `${100 / gridColumns}%`
    cell.style.height = `${100 / gridRows}%`
    gridContainer.appendChild(cell)
    gridCells.push(cell)
} }
//--------------------------Events-----------------------
generateBox()
