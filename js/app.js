//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns


//-------------------------Variables---------------------- 
//let currentPosition = startPosition
let score = 0
let snakeStartPosition = 10

let snakePositions = [108, 128, 148]

//-------------------------Elements----------------------
//const startButtonElement = document.querySelector(".start-game")
const gridContainer = document.querySelector('.grid')
const scoreElement = document.querySelector(".score")
const gridCells = []
//const snakeElement = document.querySelector('.snake')

//const allCellsElement = sdocument.querySelectorAll(".cell")
//const snakeEls = document.querySelectorAll('.cell')

generateBox()

//-------------------------Functions--------------------
function generateBox() {
    for (let idx = 0; idx < totalCellCount; idx++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerText = idx
        cell.style.width = `${100 / gridColumns}%`
        cell.style.height = `${100 / gridRows}%`
        gridContainer.appendChild(cell)
        gridCells.push(cell)

    }
    moveSnake()
    addSnake()
}
//move right head +1
function moveSnake() {
    snakePositions.pop()
    snakePositions.unshift(snakePositions[0] + 1)

}


function addSnake() {
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
    })
}

function removeSnake() {

    snakePositions.pop()
}

//move up head -20
//move down + 20
//move left - head -1
//move right head +1






//--------------------------Events---------------------