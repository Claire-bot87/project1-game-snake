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
        //console.log(snakePositions)
        //removeFood()

        // replaceFood()
    }, 1000)

}



//console.log(randomCellIndex)
//console.log(gridCells)

// eatFood()
//gridCells[randomCellIndex].classList.add('food')

//console.log(gridCells[randomCellIndex])

// function moveFood(){
//     removeFood()
//     let randomCellIndex = Math.floor(Math.random()* gridCells.length)
//     addFood(randomCellIndex)
//     console.log(randomCellIndex)
// }


// function addFood(randomCellIndex){
//     gridCells[randomCellIndex].classList.add('food')
// }

const food = document.querySelector(".food")
//const cellElement = document.querySelector(".cell")


function handleEatFood() {
console.log(gridCells[currentFoodIdx])
console.log(gridCells[currentFoodIdx].classList.contains('snake'))
    if (gridCells[currentFoodIdx].classList.contains('snake')) {
        replaceFood()
    }
    
}
function replaceFood(){
console.log(currentFoodIdx)
    removeFood()
    currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    addFood()
    incrementScore()
console.log(currentFoodIdx)
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
// function removeFood() {

//     if (gridCells[randomCellIndex].classList.contains('snake')) {
//         food.classList.remove("food")
//     }
// }

// function addFood() {
//     gridCells[randomCellIndex].classList.add('food')
// }
//--------------------------Event Listeners---------------------

document.addEventListener('keydown', changeSnakeDirection)