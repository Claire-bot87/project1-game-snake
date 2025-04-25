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
This code says, if the position of the snakes head is less than 20, and it is traveling up, then we give the player a short amount of time to change direction and avert distaster (hitting the wall).
Then we use modulus

The const delay = setTimeout(() => { says that if the snake direction does not change within a certain time period, then the snake ‘hits the wall’ and dies Game over


The delay is 95% percent of the timegap. The time gap dictates the speed the snake moves at. As the game progresses the speed increases,. It had to slightly less that the time gap, or the position of the snakes head changes, causing unintended consequesnces. For example if it is one of the rightmost celss , travellign right, it would reapear on the left, on the next line down.

```.js
if ((snakePositions[0] < gridColumns && snakeDirection === -20)
```
then set time out, and if after the time out period:
```.js
 if ((snakePositions[0] < gridColumns && snakeDirection === -20) 
```
Then it is 'game over'.

#### snake hits itself
This code loops through each of the snake positions representing the snake’s body, (because it starts at 1 , so doesn’t include the head).
It says if any of the snake positions is equal to the head (ie snakePositions[0]) then the snake has hit itself, game over.

```.js
    for (let i = 1; i < snakePositions.length; i++) {
        if (snakePositions[i] === snakePositions[0]) {
            endGame()
   
```


## Challenges
I created the moveSnake function which moved the snake with an interval, but it just moved one direction , down(+20). I then added the changeSnakeDirection function , (and included the unshift and pop movement code), which changed the direction with a keydown(left(-1)) but then the snake continued to move down.
I knew i need to use a variable instead of hardcoding the directions (-1, +20 etc).but when I tried to create a variable and replace the -1, +20, i got errors
I also needed to change the problem of the direction only changing temporarily.

I came to realise that  the changeSnakeDirection code should have the sole purpose of changinthe direction. So it should just declare the variable, it does not need to include any of the mocement code (pop, unshift)
I also realsied i need to keep the ‘+’ before the variable i was creating.


#### Handling wall collsion 
I first considered executing a function based on the absence of a key press. But I don’t think that is possible. (I was thinking if snake positions < grid row and right not pressed and right not pressed , then ‘game over’)
Then I considered an interval.


## Wins
Successfuly handlinghte snakeCollision without unintended consequnces. For example:
I had enabled the snake to spped up as the game progressed, storing that speed in a variable called 'timeGap'.
However, in the 'handleCollision' function, I had hardcoded the time given for the snake's head to be at the wall without changing direction. This meant the snake, when the snake was moving faster, she 'escaped' and moved on to the next cell, reapearing at the opposting side of the box. So using the 'timeGap' variable, giving the snake 95% of that time to change direction, was a 'win' to stop the snake escaping.

## Key Learnings
- I gained a much better understanding of the concept of global scope.
- I gained a clearer perspectiuve on how to declare a function, and how that differs from calling a function.
- A got a little better at looping through an array.

## Future Improvements
- Visually I think so of the imagery(gifs) could be improved, to enhance the look and feel of the game.
- I could save each score when the game ends, so that I can display the player's top score, improving the user experience.  
