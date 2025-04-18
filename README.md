# General Assembly Project 1

### Table of Contents
* [Description](#description)
    - [Deployment Link](#deployment-link)
    - [Code Installation](#code-installation)
    - [Timeframe and Working Team](#timeframe-and-working-team)
    - [Technologies Used](#technologies-used)
    - [Brief](#brief)
* [Planning](#planning)
    - [Styling](#styling)
    - [Finding a dataset](#finding-a-dataset)
* [Build Process](#build-process)
    - [Seeding the database](#seeding-the-database)
    - [Handling the data](#handling-the-data)
    - [Setting up the frontend](#setting-up-the-frontend)
    - [The browse page](#the-browse-page)
    - [Styling](#styling)
    - [Stretch Goals](#stretch-goals)
* [Challenges](#challenges)
* [Wins](#wins)
* [Key Learnings](#key-learnings)
* [Bugs](#bugs)
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
Visual Studio Code
Slack
Zoom 
Javascript
Html
giphy


### Brief
Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board. The snake should grow longer each time it eats a piece of food. The game ends if the snake hits a wall or touches itself.

## Planning
![Wireframe 1](https://res.cloudinary.com/dpv0j8frj/image/upload/v1743000010/excalidraw_wireframe_snake_n6dd8k.png)

![Wireframe 2](https://res.cloudinary.com/dpv0j8frj/image/upload/v1742999995/claire-snake-wireframe_j4txs6.png)




## Build Process
Here are the key steps I took to build the game:
### Adding the snake
I declared a variable at the top of my code, deciding where the snake would start:
```.js
let snakePositions = [148, 128, 108]
```
Then I used css classes to ‘draw in’ that snake by colouring the cells black:
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
I set the initial snake direction as a variable at the begiging fo the code, it was travelling downward, in a grid 20 cells wide:
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

###snake eats
The snake needs to grow each time it eats, so I used a .push method to add to the snakeDirections array.
```.js
function growSnake() {
    snakePositions.push(snakePositions[snakePositions.length - 1] + snakeDirection)
}
```

###snake hits the wall
This code says, if the position of the snakes head is less than 20, and it is traveling up, then we give the player a short amount of time to change direction and avert distaster (hitting the wall)
Then we use modulus

The const delay = setTimeout(() => { says that if the snake direction does not change within a certain time period, then the snake ‘hits the wall’ and dies Game over


The delay is 95% percent of the timegap. The time gap dictates the speed the snake moves at. As the game progresses the speed increases,. It had to slightly less that the time gap, or the position of the snakes head changes, causing unintended consequesnces. For example if it is one of the rightmost celss , travellign right, it mwould reapear on the left, on the next line down.

```.js
if ((snakePositions[0] < gridColumns && snakeDirection === -20)
```
then set time out, and if after the time out period
```.js
 if ((snakePositions[0] < gridColumns && snakeDirection === -20) 
```
Then it is 'game over'.

###snake hits itself
This code loops through each of the snake positions representing the snake’s body, (because it starts at 1 , so doesn’t include the head).
Its says if any of the snake positions is equal to the head (ie snakePositions[0]) then the snake has hit itself, game over.

```.js
    for (let i = 1; i < snakePositions.length; i++) {
        if (snakePositions[i] === snakePositions[0]) {
            endGame()
   
```




## Challenges
I created the moveSnake function which moved the snake with an interval, but it just moved one direction , down(+20). I then added the changeSnakeDirection function , (and included the unshift and pop movement code), which changed the direction with a keydown(left(-1)) but then the snake continued to move down.
I knew i need to use a variable instead of hardcoding the directions (-1, +20 etc).but when i tried to create a variable and replace the -1, +20, i got errors
I also needed to change the problem of the direction only changing temporarily.

I came to realise that  the changeSNakeDirection code should have the sole purpose of changinthe direction. So it should just declare the variable, it does not need to include any of the mocement code (pop, unshift)
I also realsied i need to keep the ‘+’ before the variable i was creating.


Handling wall collsion 
I first tried to execute a function on the absence of a key press. But i don’t think that is possible. (i was thinking if snake positions < grid row and right not pressed and right not pressed , then ‘game over’)
Then i considered an interval


## Wins


## Key Learnings
- I got a much better understanding of the global scope.
- Declaring a function
- Calling a function
- A little better at looping through an array.




## Future Improvements

