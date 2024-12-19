//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns
const gridCells = []


//-------------------------Variables---------------------- 

let score = 0
let snakePositions = [148, 128, 108]
let snakeDirection = 20
let currentFoodIdx = 248



//-------------------------Elements----------------------

const gridContainer = document.querySelector('.grid')
const scoreElement = document.querySelector('.score')
const foodElement = document.querySelector('.food')




//-------------------------Functions--------------------

generateBox()
//houseWallCollision()
startGame()


//addFood()


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


//-------------------extraElements after page load-----------------


//let randomCellIndex = Math.floor(Math.random() * gridCells.length)
// let replacementRandomCellIndex = Math.floor(Math.random()* gridCells.length)
// let randomCellIndex = 3
//-------------------------Functions continued--------------------
//addFood()
//removeFood ()
handleEatFood()


// function houseWallCollision()
// {
//     let snakeHead = gridCells[snakePositionIdx]
//     console.log('snakeHead')
//     handleWallCollision()
// }

function addSnake() {
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
        //  console.log(snakePositions)
        // console.log(snakePositions[0])
        // handleWallCollision()
        //console.log(gridCells[snakePositionIdx])
   
    })
}


function removeSnake() {
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.remove('snake')
       
    })
}

function changeSnakeDirection(event) {
    const pressedKey = event.code

    if (pressedKey === 'ArrowLeft') {
        snakeDirection = -1
    }
    else if (pressedKey === 'ArrowRight') {
        snakeDirection = 1
    }
    else if (pressedKey === 'ArrowUp') {
        snakeDirection = -20
    }
    else if (pressedKey === 'ArrowDown') {
        snakeDirection = 20
    }
 
   // handleWallCollision()
}


function moveSnake() {
    snakePositions.pop()
    snakePositions.unshift(snakePositions[0] + snakeDirection)
  
}

function startGame() {
    addFood()
    setInterval(() => {

        removeSnake()
        moveSnake()
        addSnake()
       
        handleEatFood()
        console.log(snakePositions)
        console.log(snakePositions[0])
        console.log(snakeDirection)
        handleWallCollision()
        //removeFood()
        //handleWallCollision()
        // replaceFood()
    }, 1000)

}


const food = document.querySelector(".food")
//const cellElement = document.querySelector(".cell")


function handleEatFood() {
//console.log(gridCells[currentFoodIdx])
//console.log(gridCells[currentFoodIdx].classList.contains('snake'))
    if (gridCells[currentFoodIdx].classList.contains('snake')) {
        replaceFood()
    }
    
}
function replaceFood(){
//console.log(currentFoodIdx)
    removeFood()
    currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    addFood()
    incrementScore()

//console.log(currentFoodIdx)
}


function addFood(){
    gridCells[currentFoodIdx].classList.add('food')
}

function removeFood(){
    gridCells[currentFoodIdx].classList.remove("food")
}

function incrementScore(){
    score = score + 5
    console.log(score)
    scoreElement.innerHTML = score

}

function handleWallCollision(){
    
   

 
    if ((snakePositions[0] < gridColumns && snakeDirection === -20 ) || 
    (snakePositions[0] + gridColumns >= totalCellCount && snakeDirection === 20)||
    (snakePositions[0] % gridColumns === 0 && snakeDirection === -1)||
    ((snakePositions[0] + 1) % gridColumns === 0 && snakeDirection === 1)
        ) { 
            setInterval(() => {
                if ((snakePositions[0] < gridColumns && snakeDirection === -20) ||
                 (snakePositions[0] + gridColumns >= totalCellCount && snakeDirection === 20)||
                 (snakePositions[0] % gridColumns === 0 && snakeDirection === -1)||
                 ((snakePositions[0] + 1) % gridColumns === 0 && snakeDirection === 1)
                ){
        console.log('GAME OVER!')
    } else {
        console.log("playing game!")
    }
  }  , 800)
    }}




//     if (snakeHead = true ){
//         console.log('playing game')
//     } else {
//         console.log("GAME OVER!")
//     }
// }


//     if (gridCells[snakePositionIdx] < gridColumns) {


// setInterval(() => {
//     if (gridCells[snakePositionIdx] < gridColumns) {
// console.log("GAMEOVER!!")
// clearInterval
// }, 1000)

// }


//--------------------------Event Listeners---------------------

document.addEventListener('keydown', changeSnakeDirection)
