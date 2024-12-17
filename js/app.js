//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns


//-------------------------Variables---------------------- 
//let currentPosition = startPosition
let score = 0
let snakePositions = [108, 128, 148]
let snakeDirection = 20

//-------------------------Elements----------------------
//const startButtonElement = document.querySelector(".start-game")
const gridContainer = document.querySelector('.grid')
const scoreElement = document.querySelector(".score")
const gridCells = []
//const snakeElement = document.querySelector('.snake')

//const allCellsElement = sdocument.querySelectorAll(".cell")
//const snakeEls = document.querySelectorAll('.cell')

generateBox()
startGame()

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
  
    addSnake()

}




function addSnake() {
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
    })
}

function removeSnake() {
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.remove('snake')
    })
}



//--------------------------Events---------------------

function changeSnakeDirection(event) {
    const pressedKey = event.code
   
     if ( pressedKey === 'ArrowLeft'){
        snakeDirection = -1
     }

     else if ( pressedKey === 'ArrowRight'){
        snakeDirection = 1
     }
     else if ( pressedKey === 'ArrowUp'){
        snakeDirection = -20
     }
     else if ( pressedKey === 'ArrowDown'){
        snakeDirection = 20
     }
}


document.addEventListener('keydown', changeSnakeDirection)


//-----------------------interval -----------------------

function moveSnake() {
    snakePositions.pop()
    snakePositions.unshift(snakePositions[0] + snakeDirection)
}

function startGame() {
    setInterval(() => {
        removeSnake()
        moveSnake()
        addSnake()
        console.log(snakePositions)
    }, 2000)
}
//-----------event listeners----------------

