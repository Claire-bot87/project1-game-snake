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






//-------------------------Functions--------------------
generateWelcome()

function generateWelcome() {
    welcome = document.createElement('div');
    welcome.classList.add('welcome')
    gridContainer.appendChild(welcome)

}




function removeWelcome() {
    if (gridContainer.contains(welcome)) {
        gridContainer.removeChild(welcome);
    } else {
        console.log("No welcome element to remove.");
    }
}



function generateBox() {
    for (let idx = 0; idx < totalCellCount; idx++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = `${100 / gridColumns}%`
        cell.style.height = `${100 / gridRows}%`
        gridContainer.appendChild(cell)
        gridCells.push(cell)
        gridContainer.style.position = "absolute";
        gridWrapper.style.position = "relative";

    }
    addSnake()

}




function addSnake() {
    if (gameStatus === 'ended') return
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
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

}


function moveSnake() {
    snakePositions.pop()
    snakePositions.unshift(snakePositions[0] + snakeDirection)

}

function growSnake() {
    snakePositions.push(snakePositions[snakePositions.length - 1] + snakeDirection)
}

function startGame() {
    snakeDirection = 20
    removeWelcome()
    generateBox()
    addFood()
    const gameInterval = setInterval(() => {
        console.log(timeGap)

        console.log(`CONFIRMING GAME STATUS ${gameStatus}`)

        if (gameStatus === 'ended') {
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

        handleSnakeTouchesSnake()


    }, timeGap)

}


function restartGame() {
    console.log(`GAME RESTARTING${gameStatus}`)
    console.log(`CONFIRMING GAME STATUS ${gameStatus}`)

    score = 0
    scoreElement.innerHTML = score
    snakeDirection = 20
    snakePositions = [146, 126, 106]
    addFood()
    const gameInterval = setInterval(() => {

        console.log(`CONFIRMING GAME STATUS ${gameStatus}`)
        if (gameStatus === 'ended') {
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

        handleSnakeTouchesSnake()


    }, timeGap)


}




const food = document.querySelector(".food")



function handleEatFood() {
    if (gameStatus === 'ended') return

    if (gridCells[currentFoodIdx].classList.contains('snake')) {
        replaceFood()
        growSnake()
    }
}

function replaceFood() {

    removeFood()
    currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    while (gridCells[currentFoodIdx].classList.contains('snake')) {
        currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    }
    console.log(`SCORE ${score}`)
    console.log(`CURRENT FOOD IDX ${currentFoodIdx}`)
    addFood()
    incrementScore()
    timeGap = (timeGap / 100) * 95

}


function addFood() {
    while (gridCells[currentFoodIdx].classList.contains('snake')) {
        currentFoodIdx = Math.floor(Math.random() * gridCells.length)
    }
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
        const delay = setTimeout(() => {
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
        }, (timeGap / 100) * 95)


    }
}




console.log(`SNAKE HEAD IS AT ${snakePositions[0]}`)


function handleSnakeTouchesSnake() {

    for (let i = 1; i < snakePositions.length; i++) {
        if (snakePositions[i] === snakePositions[0]) {
            console.log("SNAKE TOUCHES SNAKE")
            endGame()
        }
    }
}


function endGame() {
    gameStatus = 'ended'
    console.log('endgame function has executed')
    const bodyElement = document.querySelector('.body')
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


    if (startButtonElement) {
        startButtonElement.replaceWith(playAgainElement)
    }



    playAgainElement.addEventListener('click', restartGame)

    const removeGameOver = setTimeout(() => {
        const removeGameOverBox = () => {

            if (gridWrapper.contains(boxElement)) {
                gridWrapper.removeChild(boxElement)
            } else {
                console.log("No game-over element to remove.");
            }
        }
        removeGameOverBox()
        gameStatus = 'start'

        clearSnake()
        clearFood()

        snakePositions = [149, 129, 109]


    }, 1000)
    console.log(gameStatus)


}




function clearSnake() {

    gridCells.forEach(gridCell => {
        gridCell.classList.remove('snake')
    })
}



function clearFood() {
    gridCells.forEach(gridCell => {
        gridCell.classList.remove('food')
    })

}
//--------------------------Event Listeners---------------------

document.addEventListener('keydown', changeSnakeDirection)
startButtonElement.addEventListener('click', startGame)
