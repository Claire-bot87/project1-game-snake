//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns
const gridCells = []

//-------------------------Variables---------------------- 

let score = 0
let snakePositions = [108, 128, 148]
let snakeDirection = 20



//-------------------------Elements----------------------

const gridContainer = document.querySelector('.grid')
const scoreElement = document.querySelector('.score')
const foodElement = document.querySelector('.food')




//-------------------------Functions--------------------

generateBox()
startGame()
// moveFood()
//addFood()
//eatFood()
// eatFood()

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
const allCellsElement = document.querySelectorAll('.cell')
let randomCellIndex = Math.floor(Math.random()* allCellsElement.length)
addFood()
//-------------------------Functions continued--------------------



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



console.log(randomCellIndex)
console.log(allCellsElement)

// eatFood()
//allCellsElement[randomCellIndex].classList.add('food')

console.log(allCellsElement[randomCellIndex])

// function moveFood(){
//     removeFood()
//     let randomCellIndex = Math.floor(Math.random()* allCellsElement.length)
//     addFood(randomCellIndex)
//     console.log(randomCellIndex)
// }


// function addFood(randomCellIndex){
//     allCellsElement[randomCellIndex].classList.add('food')
// }

const food = document.querySelector(".food")
//const cellElement = document.querySelector(".cell")

// function removeFood(){
//     if (allCellsElement[randomCellIndex].classList.contains('snake')){
//         food.classList.remove("food")
//     }}


    function addFood() {
        let randomCellIndex = Math.floor(Math.random()* allCellsElement.length)
        allCellsElement[randomCellIndex].classList.add('food')
        }
    


// function eatFood(){
//     //addFood()
//     let randomCellIndex = Math.floor(Math.random()* allCellsElement.length)
//     if (allCellsElement[randomCellIndex].classList.contains('snake')){
//     removeFood()}
// //increment score by 5

//     }


// function eatFood(){
//     addFood()
//     removeFood()
// }

//--------------------------Event Listeners---------------------

document.addEventListener('keydown', changeSnakeDirection)



