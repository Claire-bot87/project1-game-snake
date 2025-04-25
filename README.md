# General Assembly Project 1

### Table of Contents
* [Description](#description)
    - [Deployment Link](#deployment-link)
    - [Code Installation](#code-installation)
    - [Timeframe and Working Team](#timeframe-and-working-team)
    - [Technologies Used](#technologies-used)
    - [Brief](#brief)
* [Planning](#planning)
* [Build Process](#build-process)
* [Challenges](#challenges)
* [Wins](#wins)
* [Key Learnings](#key-learnings)
* [Future Improvements](#future-improvements)

# Description
This is my first project. I did this project in the 3rd week of the course. We were tasked with creating a game. I chose Snake. I used JavaScript, HTML and CSS.

### Deployment Link 
https://claire-bot87.github.io/project1-game-snake/

### Code Installation
Here is the GitHub repo for my project: https://github.com/Claire-bot87/project1-game-snake




### Timeframe and Working Team

This was a solo project so I worked independently on it. We had 1 week to complete the project and I completed it within that time frame.

### Technologies Used
- Visual Studio Code
- Slack
- Zoom 
- JavaScript
- HTML
- CSS


### Brief
- Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board. 
- The snake should grow longer each time it eats a piece of food.
- The game ends if the snake hits a wall or touches itself.
- The speed at which the snake moves should increase as the games progresses.

## Planning
![Wireframe 1](https://res.cloudinary.com/dpv0j8frj/image/upload/v1743000010/excalidraw_wireframe_snake_n6dd8k.png)

![Wireframe 2](https://res.cloudinary.com/dpv0j8frj/image/upload/v1742999995/claire-snake-wireframe_j4txs6.png)




## Build Process
Here are the key steps I took to build the game:
#### Adding the snake
I declared a variable at the top of my code, deciding where the snake would start:
```.js
let snakePositions = [148, 128, 108]
```
Then I used CSS classes to ‘draw in’ that snake by colouring the cells black:
```.js
function addSnake() {
    if (gameStatus === 'ended') return
    snakePositions.forEach(snakePositionIdx => {
        gridCells[snakePositionIdx].classList.add('snake')
    })
}
```
Next I made the snake move:
```.js
function moveSnake() {
    snakePositions.pop()
    snakePositions.unshift(snakePositions[0] + snakeDirection)
}
```
I set the initial snake direction as a variable at the beginning of the code, it was travelling downward, in a grid 20 cells wide:
```.js
let snakeDirection = 20
```
To make the snake change direction, I used a click event:
```.js
function changeSnakeDirection(event) {
    const pressedKey = event.code

    if (pressedKey === 'ArrowLeft') {
        snakeDirection = -1
    }
```

#### Snake eats
The snake needs to grow each time it eats, so I used a .push method to add to the snakeDirections array.
```.js
function growSnake() {
    snakePositions.push(snakePositions[snakePositions.length - 1] + snakeDirection)
}
```

#### snake hits the wall


```.jsfunction handleWallCollision() {

    if ((snakePositions[0] < gridColumns && snakeDirection === -20)) 
    {
        const delay = setTimeout(() => {
            if ((snakePositions[0] < gridColumns && snakeDirection === -20)) 
            {
                console.log("GAME OVER!")
                endGame()
                clearTimeout(delay)
            } 
        }, (timeGap / 100) * 95)
    }
}
```


This code says, if the position of the snakes head is less than 20, and it is traveling up, then we give the player a short amount of time to change direction and avert distaster (hitting the wall).

The const delay = setTimeout(() => { says that if the snake direction does not change within a certain time period, then the snake ‘hits the wall’ and dies Game over


#### snake hits itself
This code loops through each of the snake positions representing the snake’s body(because it starts at 1 , so doesn’t include the head).
It says if any of the number is the snakePositions array is equal to the head (ie snakePositions[0]) then the snake has hit itself, game over.

```.js
    for (let i = 1; i < snakePositions.length; i++) {
        if (snakePositions[i] === snakePositions[0]) {
            endGame()
   
```


## Challenges
A considerable challenge was deciding how to approach the wall collision.

I first considered having a 'border' of additional cells framing the whole perimeter of the box, but not appearing visually to the user. So that when the snake moves into this perimeter area, the game is over.
I then considered executing a function based on the absence of a key press.  (I was thinking if snakePositions < grid row and right not pressed, then ‘game over’).But I don’t think that is possible.

Finally I considered using an interval, so that when the snake reaches the edge of the box, we give her some time to change direction before 'game over'.


## Wins
Successfuly handling snakeCollision without unintended consequnces. For example:
I had enabled the snake to speed up as the game progressed, storing that speed in a variable called 'timeGap'.
However, in the 'handleCollision' function, I had hardcoded the time given for the snake's head to be at the wall without changing direction. This meant the snake, when the snake was moving faster, she 'escaped' and moved on to the next cell, reapearing at the opposting side of the box. So using the 'timeGap' variable, giving the snake 95% of that time to change direction, was a 'win' to stop the snake escaping.

## Key Learnings
- I gained a much better understanding of the concept of global scope.
- I gained a clearer perspectiuve on how to declare a function, and how that differs from calling a function.
- A got a little better at looping through an array.

## Future Improvements
- Visually, some of the imagery(gifs) could be improved, to enhance the look and feel of the game.
- I could save each score when the game ends, so that I can display the player's top score, improving the user experience.  
