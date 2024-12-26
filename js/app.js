//-------------------------Constants-----------------------
const gridRows = 20
const gridColumns = 20
const totalCellCount = gridRows * gridColumns
const gridCells = []
let welcome

//-------------------------Variables---------------------- 

let score = 0
let snakePositions = [148, 128, 108]
let snakeDirection = 20
let currentFoodIdx = 248
let timeGap = 400
let gameStatus = 'start'



//-------------------------Elements----------------------

const gridContainer = document.querySelector('.grid')
const gridWrapper = document.querySelector('.grid-wrapper')
const scoreElement = document.querySelector('.score')
const foodElement = document.querySelector('.food')
const startButtonElement = document.querySelector('.start-game')
const playAgainElement = document.querySelector('.play-again')
//const bodyElement =  document.querySelector('.body')





//-------------------------Functions--------------------
generateWelcome()
//generateBox()
//houseWallCollision()
//startGame()


//addFood()
function generateWelcome() {
    welcome = document.createElement('div');
    welcome.classList.add('welcome')
    gridContainer.appendChild(welcome)
    
}


/*function removeWelcome(){
    gridContainer.removeChild(welcome)  

}*/

function removeWelcome() {
    if (gridContainer.contains(welcome)) {  
        gridContainer.removeChild(welcome);
    } else {
        console.log("No welcome element to remove.");
    }
}

// function removeGameOverBox() {
//     if (gridWrapper.contains(game-over)) {  
//         gridContainer.removeChild(BoxElement);
//     } else {
//         console.log("No game-over element to remove.");
//     }
// }

function generateBox() {
    for (let idx = 0; idx < totalCellCount; idx++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        /*cell.innerText = idx*/
        cell.style.width = `${100 / gridColumns}%`
        cell.style.height = `${100 / gridRows}%`
        gridContainer.appendChild(cell)
        gridCells.push(cell)
        gridContainer.style.position = "absolute";
        gridWrapper.style.position = "relative";
        //cell.style.position = absolute;
        //cell.style.position = relative;
        //cell.style.z - index = 2;
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

//endGame()

// function houseWallCollision()
// {
//     let snakeHead = gridCells[snakePositionIdx]
//     console.log('snakeHead')
//     handleWallCollision()
// }

function addSnake() {
    if (gameStatus === 'ended') return
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
        //  console.log(snakePositions)
        // console.log(snakePositions[0])
        // handleWallCollision()
        //console.log(gridCells[snakePositionIdx])

    })
}

function removeSnake() {
    if (gameStatus === 'ended') return
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

function growSnake() {
    snakePositions.push(snakePositions[snakePositions.length -1] + snakeDirection)
}

function startGame() {
    removeWelcome()
    generateBox()
    addFood()
    const gameInterval = setInterval(() => {
        console.log(timeGap)
       // handleWallCollision()
        console.log(`CONFIRMING GAME STATUS ${gameStatus}`)
        //console.log(`SPEED IS ${timeGap}`)
        if (gameStatus === 'ended'){
            clearInterval(gameInterval)
            console.log('GAME HAS ENDED')
            }

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
       handleSnakeTouchesSnake()
       //console.log('INTERVAL 1 RUNNING')
       
    }, timeGap)

}


function restartGame() {
    console.log(`GAME RESTARTING${gameStatus}`)
    console.log(`CONFIRMING GAME STATUS ${gameStatus}`)
    //console.log(`SPEED IS ${timeGap}`)
  //  generateBox()
  //  removeSnake()
 //timeGap = 400
 score = 0
 scoreElement.innerHTML = score
 snakeDirection = 20
    snakePositions = [146, 126, 106]
     addFood()
    const gameInterval = setInterval(() => {
        // console.log(`SPEED IS ${timeGap}`)
       // handleWallCollision()
        console.log(`CONFIRMING GAME STATUS ${gameStatus}`)
        if (gameStatus === 'ended'){
            clearInterval(gameInterval)
            console.log('GAME HAS ENDED')
            }
        //score = 0
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
       handleSnakeTouchesSnake()
       //console.log('INTERVAL 1 RUNNING')
       
    }, timeGap)


}




const food = document.querySelector(".food")
//const cellElement = document.querySelector(".cell")


function handleEatFood() {
    if (gameStatus === 'ended') return
    //console.log(gridCells[currentFoodIdx])
    //console.log(gridCells[currentFoodIdx].classList.contains('snake'))
    if (gridCells[currentFoodIdx].classList.contains('snake')) {
        replaceFood()
        growSnake()
        //increaseGameSpeed()
    }

}
function replaceFood() {
    //console.log(currentFoodIdx)
    removeFood()
    currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    addFood()
    incrementScore()
    timeGap = (timeGap/100)*95

    //console.log(currentFoodIdx)
}


function addFood() {
    gridCells[currentFoodIdx].classList.add('food')
}

function removeFood() {
    gridCells[currentFoodIdx].classList.remove("food")
}

function incrementScore() {
    score = score + 5
    console.log(score)
    scoreElement.innerHTML = score

}

function handleWallCollision() {




    if ((snakePositions[0] < gridColumns && snakeDirection === -20) ||
        (snakePositions[0] + gridColumns >= totalCellCount && snakeDirection === 20) ||
        (snakePositions[0] % gridColumns === 0 && snakeDirection === -1) ||
        ((snakePositions[0] + 1) % gridColumns === 0 && snakeDirection === 1)
    ) {
       const delay =  setTimeout(() => {
            if ((snakePositions[0] < gridColumns && snakeDirection === -20) ||
                (snakePositions[0] + gridColumns >= totalCellCount && snakeDirection === 20) ||
                (snakePositions[0] % gridColumns === 0 && snakeDirection === -1) ||
                ((snakePositions[0] + 1) % gridColumns === 0 && snakeDirection === 1)
            ) {
                console.log("GAME OVER!")
                endGame()
                clearTimeout(delay)
            } else {
                console.log("playing game!")
            }
        }, (timeGap/100)*95)

        // const stopDelay = setTimeOut(() =>{
        // clearTimeOut(delay)},10)
    }
}




console.log(`SNAKE HEAD IS AT ${snakePositions[0]}`)


function handleSnakeTouchesSnake(){

    for(let i = 1; i < snakePositions.length; i++){
if (snakePositions[i] === snakePositions[0]){
    console.log("SNAKE TOUCHES SNAKE")
    endGame()
    }
    }}


// function increaseGameSpeed(){
//     timeGap = timeGap - (timeGap/10)
//     console.log(`SPEED: ${timeGap}`)
// }


function endGame() {
    gameStatus = 'ended'
    console.log('endgame function has executed')
//removeSnake()
    const bodyElement =  document.querySelector('.body')
    const gridContainer = document.querySelector('.grid')
    const gridWrapper = document.querySelector('.grid-wrapper')
    const boxElement = document.createElement('div')
    boxElement.classList.add('game-over')
    boxElement.textContent = 'GAME OVER!'
    gridWrapper.appendChild(boxElement)
    const playAgainElement = document.createElement('button')
    playAgainElement.classList.add('play-again')
    playAgainElement.textContent = 'PLAY AGAIN NOW!'
    const startButtonElement = document.querySelector('.start-game')
    
  
if(startButtonElement){
    startButtonElement.replaceWith(playAgainElement)}



   playAgainElement.addEventListener('click', restartGame)
//generatePlayAgainButton()
  const removeGameOver = setTimeout(() => {
  const removeGameOverBox = ()=>{

 if (gridWrapper.contains(boxElement)) {  
     gridWrapper.removeChild(boxElement)
 } else {
     console.log("No game-over element to remove.");
}
 }
removeGameOverBox()
gameStatus = 'start'
//removeSnake()
clearSnake()
clearFood()
//generatePlayAgainButton()
  snakePositions = [149, 129 , 109]
//snakePositions = 0
 //removeSnake()
 //currentFoodIdx = 248

 }, 1000)
 console.log(gameStatus)


 }

// function generatePlayAgainButton() {
//     const playAgainElement = document.createElement('button')
//     playAgainElement.classList.add('play-again')
//     playAgainElement.textContent = 'PLAY AGAIN NOW!'
//     const startButtonElement = document.querySelector('.start-game')
    
  
// if(startButtonElement){
//     startButtonElement.replaceWith(playAgainElement)}



//    playAgainElement.addEventListener('click', restartGame)


// }


function clearSnake(){
//     if (gridCells.classList.contains('snake')){
//         gridCells.classList.remove('snake')
// }
gridCells.forEach(gridCell => {
    gridCell.classList.remove('snake')
})}



function clearFood(){
    gridCells.forEach(gridCell => {
        gridCell.classList.remove('food')
    })

}
//--------------------------Event Listeners---------------------

document.addEventListener('keydown', changeSnakeDirection)
startButtonElement.addEventListener('click', startGame)
//playAgainElement.addEventListener('click', restartGame)