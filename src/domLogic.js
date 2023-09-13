import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
// import './gameModule.js';
import createPlayer, { playGame } from './gameModule.js';
// import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';
// import gameboardFactory from './gameboardFactory.js';

const gridContainer = document.getElementById('gameboard-grid-container');
const wrappingContainer = document.getElementById('wrapping-container');
// console.log(wrappingContainer);
const computerGridContainer = document.getElementById('gameboard-grid-container-computer');
console.log(computerGridContainer);

let gameboard = gameboardFactory();

export let playerGameboard = createPlayer('Alec', 'player');
console.log(playerGameboard);
export let computerGameboard = createPlayer('IBM', 'computer');
console.log(computerGameboard); 

let currentShip 
let currentCell
let currentShipLength
let currentShipDirection
let battleShip = ship('Battleship', 4, 'vertical');
let destroyer = ship('Destroyer', 4, 'vertical' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 5, 'vertical');
let submarine = ship('Submarine', 3, 'vertical'); 
let coordinateFromComputerBoardX
let coordinateFromComputerBoardY
// let computerArray = [battleShip, destroyer, patrolBoat, carrierBoat, submarine]; 

// initiate an array named failedCoordinates
// initate an array containing all the ships you need to eventually place
// make a loop: while there are ships in the ships array, keep looping
// inside the loop:
// generate random coordinates
// check if the coordinates are inside failCoordinates
// if they are, return
// if they aren't try to place the ship
// if ship placement work, remove the ship from the ships array and repeat the loop
// if ship placement failed, add to the failedCoordinates array and repeat the loop 

// why are only two ships being logged back, 
// why are all ships not being logged back, 


// let currentShip = computerShipArray[0];

// console.log(currentShip);

// currentComputerShip 

// how to keep the loop and cycle going. 
// without the loop, 
// 

// using recursion, 
// what am I removing from, removing one from the array each time, 
// 
// (currentComputerShip = computerShipArray[0]) - 1 

// trying to think of how to use recursion here, 
// what are we removing from? 
// removing one from the array each time, 
// computerShipArray = computerShipArray[0] - 1

// while there are still ships in the array, keep recursing until the array length is 0 

// if (computerShipArray.length === 0) { 
    // return;
    // }
    let computerShipArray = [battleShip, destroyer, patrolBoat, carrierBoat, submarine];
    
    export function placeComputerShips(currentComputerShip = computerShipArray[0]) { 
        if (computerShipArray.length === 0) { 
            return;
        } 

        let verticalDirection = 'vertical';
        let horizontalDirection = 'horizontal'; 
        let randomShipDirection = Math.random() < 0.5 ? verticalDirection : horizontalDirection;
        console.log(randomShipDirection);

        let failedCoordinates = [];
        let randomCoordinateX = Math.floor(Math.random() * 9) + 1;
        let randomCoordinateY = Math.floor(Math.random() * 9) + 1; 
        let isValidShipPlacement = computerGameboard.gameboard.placeShip(currentComputerShip, randomCoordinateX, randomCoordinateY, currentComputerShip.shipLength, randomShipDirection);
        if (failedCoordinates.includes([randomCoordinateX, randomCoordinateY])) { 
             placeComputerShips();
        } if (isValidShipPlacement) {
            computerGameboard.gameboard.placeShip(currentComputerShip, randomCoordinateX, randomCoordinateY, currentComputerShip.shipLength, randomShipDirection);
            computerShipArray.splice(currentComputerShip, 1);
            placeComputerShips();
        } else if (!isValidShipPlacement)  { 
            failedCoordinates.push([randomCoordinateX, randomCoordinateY]);
            placeComputerShips();
        }
        console.log(computerGameboard.gameboard.getGameboard());
        // let updatedComputerBoard = computerGameboard.gameboard.getGameboard();
        // return computerGameboard.gameboard.getGameboard();
    } 

placeComputerShips();

// placeComputerShips(computerArray);

// let chosenValue = Math.random() < 0.5 ? value1 : value2;

const changeShipPositionBtn = document.getElementById('change-ship-direction-btn');
const changeShipPositionBtnHorizontal = document.getElementById('change-ship-direction-btn-h');

changeShipPositionBtnHorizontal.addEventListener('click', (e) => { 
    currentShipDirection = 'horizontal';
})

changeShipPositionBtn.addEventListener('click', (e) => {  
    currentShipDirection = 'vertical';
}) 
// hover class
function findCoords(currentCell, currentShipDirection, currentShipLength) { 
    let selectedCell = currentCell;
    let selectedShipDirection = currentShipDirection;
    let selectedShipLength = currentShipLength; 

    if (selectedShipDirection === 'vertical') { 
        let updatedCoordinatesX = [];
        let currentRow = selectedCell.dataset.row;
        let currentColumn = selectedCell.dataset.column;
        let convertColumnToNumber = Number(currentColumn);
        let convertRowToNumber = Number(currentRow);
        
        for (let i = 0; i < selectedShipLength; i++) { 
            let updatedXCoordinate 
            updatedXCoordinate = convertRowToNumber + i;
            updatedCoordinatesX.push([updatedXCoordinate, convertColumnToNumber]);
        } 
        // console.log('these are updated coords for x', updatedCoordinatesX);
        useCoords(updatedCoordinatesX);
    } else if (selectedShipDirection === 'horizontal') { 
        let updatedCoordinatesY = [];
        let currentRow = selectedCell.dataset.row;
        let currentColumn = selectedCell.dataset.column;
        let convertColumnToNumber = Number(currentColumn);
        let convertRowToNumber = Number(currentRow);

        for (let i = 0; i < selectedShipLength; i++) { 
            let updatedYCoordinate 
            updatedYCoordinate = convertColumnToNumber + i;
            updatedCoordinatesY.push([convertRowToNumber, updatedYCoordinate]);
        } 
        // console.log('these are updated coords for y', updatedCoordinatesY);
        useCoords(updatedCoordinatesY);
    }
} 

// try this method too
// <div data-cords='[0, 0]'></div>
// document.querySelector('[data-cords="[0, 0]"]').classList.add(class)  



// hover class, filling in the selected cells 
function useCoords(coords) {
    let passedCoordinates = coords;
    for (let i = 0; i < passedCoordinates.length; i++) { 
        let coordinate = passedCoordinates[i];
        let row = coordinate[0];
        let column = coordinate[1];
        let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`); // find the DOM cells that correspond to the coordinates passed in,
       //  console.log(cell);
        cell.classList.toggle('battleship-hover-class');     
    } 
} 
// check if all players ships are placed
export function allPlayerShipsPlaced() { 
    let shipCount = 0;
    let currentPlayerBoard = playerGameboard.gameboard.getGameboard();
   // console.log('CB FUNCTION, CURRENT PLAYERS GAMEBOARD', currentPlayerBoard);
    for (let i = 0; i < currentPlayerBoard.length; i++) { 
        let cell = currentPlayerBoard[i]; 
        if(cell.includes(battleShip)) { 
            console.log('battleship found');
            shipCount++
            console.log(shipCount);
        } if (cell.includes(destroyer)) { 
            console.log('destroyer found');
            shipCount++
        } if (cell.includes(carrierBoat)) { 
            console.log('carrierBoat found');
            shipCount++
        } if (cell.includes(patrolBoat)) { 
            console.log('patrol boat found');
            shipCount++
        } if (cell.includes(submarine)) { 
            console.log('submarine found');
            shipCount++
        } 
    } 
    console.log(shipCount);
    if (shipCount === 18) { 
        console.log('ALL SHIPS HAVE BEEN PLACED');
        // let createStartGameBtn = document.createElement('button');
        // createStartGameBtn.id = 'start-game-btn';
        // createStartGameBtn.textContent = 'START GAME';
        let mainTitleContainer = document.getElementById('main-title-container');
        // mainTitleContainer.append(createStartGameBtn);
        let startGameBtnVisible = document.getElementById('start-game-btn');
        startGameBtnVisible.style.display = 'flex';
        // startGameBtnVisible.classList.add('start-game-btn-visable-class');
        // startGameBtnVisible.style.display = 'flex';
        // startGameBtnVisible.style.justifyContent = 'center';
    }
    // return playerGameboard.gameboard.getGameboard();
} 
// places ship on the gameboard, calls another function that uses coordiantes, position and length to fill in the appropriate cells 
function placeCurrentShip(x, y, currentShip, currentShipLength, currentShipDirection) { 
    let selectedXCoordinate = x;
    let selectedYCoordinate = y; 
    
    console.log(selectedXCoordinate);
    console.log(selectedYCoordinate);

    let selectedShip = currentShip;
    let selectedShipLength = currentShipLength;
    let selectedShipDirection = currentShipDirection;

    console.log(selectedShip);
    console.log(selectedShipLength);
    console.log(selectedShipDirection); 

    playerGameboard.gameboard.placeShip(selectedShip, selectedXCoordinate, selectedYCoordinate, selectedShipLength, selectedShipDirection);
    // console.log('here is the updated player gameboard', playerGameboard.gameboard.getGameboard());
    getShipCoordinates(selectedXCoordinate, selectedYCoordinate, selectedShipLength, selectedShipDirection);
    // here I can use a conditional to see if all 5 ships have been placed. 
    // conditional here to determine if all 5 ships have been placed, 
    // set a variable with the gameboard, 
    // loop to determine if the board includes the 5 ships objects. 
    let currentGameboard = playerGameboard.gameboard.getGameboard();
    // console.log('CURRENT PLAYER GAMEBOARD', currentGameboard);
    // if (currentGameboard.includes(battleShip) && currentGameboard.includes(destroyer) && currentGameboard.includes(carrierBoat) && currentGameboard.includes(patrolBoat) && currentGameboard.includes(submarine)) { 
    //     console.log('ALL SHIPS HAVE BEEN PLACED ON THE BOARD!!!');
    // } 
    allPlayerShipsPlaced();
} 
// determines how many cells will be filled, when ship is placed 
function getShipCoordinates(x, y, length, position) { 
    let coordianteX = x;
    let coordinateY = y; 
    let currentShipLength = length; 
    let currentShipPosition = position;

    console.log(typeof coordianteX);
    console.log(coordinateY);
    console.log(currentShipLength);
    console.log(currentShipPosition); 

    if (currentShipPosition === 'vertical') { 
        let updatedCoordinatesX = [];
        for (let i = 0; i < currentShipLength; i++) { 
            let updatedXCoordinate
            updatedXCoordinate = coordianteX + i;
            updatedCoordinatesX.push([updatedXCoordinate, coordinateY]);
            console.log(updatedCoordinatesX);
        }
        displayShipStyles(updatedCoordinatesX);
    } else if (currentShipPosition === 'horizontal') { 
     let updatedCoordinatesY = [];   
     for (let i = 0; i < currentShipLength; i++) { 
        let updatedYCoordinate
        updatedYCoordinate = coordinateY + i;
        updatedCoordinatesY.push([coordianteX, updatedYCoordinate]);
        console.log(updatedCoordinatesY);
    }
    displayShipStyles(updatedCoordinatesY);
    } 
    // displays those styles when ship is placed
    function displayShipStyles(coords) { 
        let passedCoordinates = coords;
        for (let i = 0; i < passedCoordinates.length; i++) { 
            let coordinate = passedCoordinates[i];
            let row = coordinate[0];
            let column = coordinate[1];
            let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`)
            cell.classList.toggle('battleship-hover-class'); 
        }
    }   
} 

// gameboard grid, for players board
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) { 
    let gameboardCell = document.createElement('div');
    const gameboard = gameboardFactory().getGameboard();
    // div.style.backgroundColor = 'blue';
    gameboardCell.style.border = '1px solid black';
    gameboardCell.style.height = '35px';
    gameboardCell.style.width = '35px';
    gameboardCell.dataset.row = i;
    gameboardCell.dataset.column = j;
    gridContainer.append(gameboardCell);
    gameboardCell.addEventListener('click', (e) => { 
        // click on cell, grab current ship, length and position, 
        // send to function which places that current ship on the board, 
        // console.log('LOGGING THE PLAYERS BOARD WHEN CELL IS CLICKED!', playerGameboard.gameboard.getGameboard());
        let currentPlayerBoard = playerGameboard.gameboard.getGameboard();
        // console.log('LOGGING CURRENT PLAYERS BOARD, CONNECTING THE BOARDS', currentPlayerBoard);
        // const clickedCell = gameboard[i][j]; 
        // console.log(clickedCell);
        console.log(e.target);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP', currentShip);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP LENGTH', currentShipLength);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP DIRECTION', currentShipDirection);
        let xCoordinate 
        let yCoordinate
        xCoordinate = e.target.dataset.row; 
        yCoordinate =  e.target.dataset.column;
        let numberedXCoordinate = Number(xCoordinate);
        let numberedYCoordinate = Number(yCoordinate);
        console.log(typeof numberedXCoordinate);
        console.log(typeof numberedYCoordinate); 
        placeCurrentShip(numberedXCoordinate, numberedYCoordinate, currentShip, currentShipLength, currentShipDirection);

    }) 

    gameboardCell.addEventListener('mouseenter', (e) => { 
        currentCell = e.target; 
        findCoords(currentCell, currentShipDirection, currentShipLength);
    }) 


    gameboardCell.addEventListener('mouseleave', (e) => {
        findCoords(currentCell, currentShipDirection, currentShipLength);
    }) 
    } 
}  



let startGameBtn = document.getElementById('start-game-btn');
console.log('logging start game btn', startGameBtn);
// what would happen when the user clicks, the start game btn? 
// it would hide all the ship objects, the change direction btn 
// also hide the start game btn, 
// it would also display the computers board with ship object hidden, 
// two gameboards displayed next to each other, 
// THEN THE GAME WOULD START, 
// PLAYER WOULD MAKE HIS MARK FIRST, 
// THE GAME STARTS ONCE BTN IS PRESSED, 
// IT REMOVES SHIPS, BTNS, AND DISPLAYS TWO GAMEBOARDS, 

// WHERE WOULD WE ADD THE LOGIC TO APPEND AND DISPLAY THE COMPUTERS BOARD? 
 
// creates the computers gameboard grid
function createComputerBoardDOM() { 
    // when it creates the computers board. 
    // use the DOM to move the container for players grid, 
    // access the wrapping container, move it to make space for the board, 
    // when the function is accessed/called it will apply the gap when the start game btn is pressed 

    for (let i = 0; i < 10; i++) { 
        for (let j = 0; j < 10; j++) { 
        // wrappingContainer.style.justifyContent = 'flex-start';
        wrappingContainer.style.gap = '15em';
        let gameboardCell = document.createElement('div');
        const gameboard = gameboardFactory().getGameboard();

        // div.style.backgroundColor = 'blue';
        gameboardCell.style.border = '1px solid black';
        gameboardCell.style.height = '35px';
        gameboardCell.style.width = '35px';
        gameboardCell.dataset.comprow = i;
        gameboardCell.dataset.compcolumn = j;
        computerGridContainer.append(gameboardCell);
        gameboardCell.addEventListener('click', (e) => { 
            let xCoordinate
            let yCoordinate
            xCoordinate = e.target.dataset.comprow;
            yCoordinate =  e.target.dataset.compcolumn;
            let numberedXCoordinate = Number(xCoordinate);
            let numberedYCoordinate = Number(yCoordinate);

            
            console.log('LOGGING BACK THE COMPUTERS GAMEBOARD X COORDINATE',  numberedXCoordinate);
            console.log('LOGGING BACK THE COMPUTERS GAMEBOARD Y COORDINATE',  numberedYCoordinate); 
            // coordinateFromComputerBoardX = numberedXCoordinate;
            // coordinateFromComputerBoardY = numberedYCoordinate;
            // pass these variables to the playGame function, 
            // pass variables or export them
            // 
             playGame(numberedXCoordinate, numberedYCoordinate);
        })
        // mouseover the cell, and just style it, 
        // once you click a cell, that gets passed to game module, player attack
        // attack will determine if hit or not, if hit pass to function to style vise versa 

        gameboardCell.addEventListener('mouseenter', (e) => {
        e.target.classList.toggle('battleship-hover-class');
    })

        gameboardCell.addEventListener('mouseleave', (e) => {
            e.target.classList.remove('battleship-hover-class');
        })

    }       
    } 
} 

// generates start game btn, and when clicked removes btns, and ship objects in the DOM
startGameBtn.addEventListener('click', (e) => { 
    console.log('clicked the start game btn');
    // hide the ship obj container, and the btns to change directions
    // disable the hover class too? 
    // create computer gameboard in the DOM, write a function that makes it 
    // then call that function within the listener, then the game can be started 
    // at that point we remove all the btns, and create the comps board 
    // then the game starts
    let containerForShipObj = document.getElementById('container-for-ship-objects');
    console.log(containerForShipObj);
    containerForShipObj.style.display = 'none';
    let containerForChangingShipDirection = document.getElementById('change-ship-direction-btn-container');
    containerForChangingShipDirection.style.display = 'none';
    let containerForStartGameBtn = document.getElementById('start-game-btn-container');
    containerForStartGameBtn.style.display = 'none';
    // btns are removed, hover class remains, but I think that can be removed 
    // once the playGame module is called, 
    // now create computers gameboard in the DOM and make sure both boards are next to eachother
    // then after that the game can be played 
    createComputerBoardDOM();
    // play game is called here, 
    // playGame();
}) 

// et cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`)
export function determineIfHitOrMiss(selectedUser, x, y) { 
    console.log('DETERMINE IF COORDS ARE A HIT OR MISS, CB FUNCTION FROM ATTACK FUNCTION IN GAME MODULE', x, y, selectedUser);
    // will use conditional to check if these coords that are passed in are within hitShot array. We have a system already to determine if something hit or not
    // console.log(selectedUser.gameboard.hitShots);
    let coordinateX = x;
    let coordinateY = y;
    let coordinateCheck = [coordinateX, coordinateY];
    console.log('COORDINATE CHECK VARIABLE, WILL CHECK IF INCLUDED IN HIT SHOTS ARRAY', coordinateCheck);
    let selectedCellOnGameboard = document.querySelector(`[data-comprow="${coordinateX}"][data-compcolumn="${coordinateY}"]`);
    console.log('SELECTED CELL, THAT COORESPONDS TO COMPS GAMEBOARD', selectedCellOnGameboard);
    // console.log('CONDITIONAL CHECK WITHIN DETERMINE IF HIT OR NOT FUNCTION', selectedUser.gameboard.hitShots.includes(coordinateCheck));
    // if (selectedUser.gameboard.hitShots.includes(coordinateCheck)) { 
    //     selectedCellOnGameboard.style.backgroundColor = 'red';
    // } 
    let hitShotsArray = selectedUser.gameboard.hitShots; 
    let missedShotsArray = selectedUser.gameboard.missedShots;
    console.log(missedShotsArray);
    console.log(hitShotsArray);
    // loop thru hit shots and determine if coordinate within the hit shots array === coordinate that was clicked on comps board, using stringify methods 
    for (let i = 0; i < hitShotsArray.length; i++) { 
        let selectedCoordinate = hitShotsArray[i];
        console.log(selectedCoordinate);
        console.log(JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck)));
        if (JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck))) { 
            selectedCellOnGameboard.style.backgroundColor = 'red';
        } 
    } 
    // selectedCellOnGameboard.style.backgroundColor = 'blue';
    // if (JSON.stringify(hitShotsArray) === JSON.stringify(coordinateCheck)) { 
    //     selectedCellOnGameboard.style.backgroundColor = 'red';
    // }
    //  selectedCellOnGameboard.style.backgroundColor = 'blue';
    // use the same logic for missed shot, loop thru array and determine if coordinate includes it, 
    for (let i = 0; i < missedShotsArray.length; i++) { 
        let selectedCoordinateMissedShot = missedShotsArray[i];
        console.log(selectedCoordinateMissedShot);
        if (JSON.stringify(selectedCoordinateMissedShot).includes(JSON.stringify(coordinateCheck))) { 
            selectedCellOnGameboard.style.backgroundColor = 'blue';
        } 
    }
}


    function createBattleShipDOMObj() { 
    for (let i = 0; i < 4; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const battleshipContainer = document.getElementById('container-for-battleship');
        battleshipContainer.append(div);
        battleshipContainer.dataset.shipID = JSON.stringify(battleShip);
        battleshipContainer.addEventListener('click', (e) => { 
            currentShip = battleShip;
            console.log('the current ship clicked on is..', currentShip)
            currentShipLength = battleShip.shipLength;
            currentShipDirection = battleShip.shipPosition;
            // console.log(currentShip);
            // console.log(currentShipLength);
            // console.log(currentShipDirection);
            // console.log(battleshipContainer);
            // findCoords(currentShipDirection, currentShipLength);
            // should not add the class after clicking ship obj, 
            // battleshipContainer.classList.add('battleship-hover-class');
            // console.log(e.target);
            // console.log(battleshipContainer.dataset.shipID);
            // console.log(battleShip.shipLength);
        })
    } 
} 

createBattleShipDOMObj(); 

function createDestroyerDOMObj() { 
    for (let i = 0; i < 4; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const destroyerContainer = document.getElementById('container-for-destroyer');
        destroyerContainer.append(div);
        destroyerContainer.dataset.shipID = JSON.stringify(destroyer);
        // console.log(destroyerContainer);
        destroyerContainer.addEventListener('click', (e) => { 
            currentShip = destroyer;
            console.log('the current ship clicked on is..', currentShip)
            currentShipLength = destroyer.shipLength;
            currentShipDirection = destroyer.shipPosition;
        })
    }
}

createDestroyerDOMObj();

function createPatrolBoatDOMObj() { 
    for (let i = 0; i < 2; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const patrolBoatContainer = document.getElementById('container-for-patrol-boat');
        patrolBoatContainer.append(div);
        patrolBoatContainer.dataset.shipID = JSON.stringify(patrolBoat);
        // console.log(patrolBoatContainer);
        patrolBoatContainer.addEventListener('click', (e) => { 
            currentShip = patrolBoat;
            console.log('the current ship clicked on is..', currentShip)
            currentShipLength = patrolBoat.shipLength;
            currentShipDirection = patrolBoat.shipPosition;
        })
    }
}


createPatrolBoatDOMObj(); 

function createCarrierBoatDOMObj() { 
    for (let i = 0; i < 5; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const carrierBoatContainer = document.getElementById('container-for-carrier-boat');
        carrierBoatContainer.append(div);
        carrierBoatContainer.dataset.shipID = JSON.stringify(carrierBoat);
        // console.log(carrierBoatContainer);
        carrierBoatContainer.addEventListener('click', (e) => { 
            currentShip = carrierBoat;
            console.log('the current ship clicked on is..', currentShip)
            currentShipLength = carrierBoat.shipLength;
            currentShipDirection = carrierBoat.shipPosition;
        })
    }
}

createCarrierBoatDOMObj(); 

function createSubmarineDOMObj() { 
    for (let i = 0; i < 3; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const submarineContainer = document.getElementById('container-for-submarine');
        submarineContainer.append(div);
        submarineContainer.dataset.shipID = JSON.stringify(submarine);
        // console.log(submarineContainer);
        submarineContainer.addEventListener('click', (e) => { 
            currentShip = submarine;
            console.log('the current ship clicked on is..', currentShip)
            currentShipLength = submarine.shipLength;
            currentShipDirection = submarine.shipPosition;
        })
    }
}

createSubmarineDOMObj();

// console.log(playerGameboard.gameboard.getGameboard()); 



// computer placement and random coordinates 
 // another set of random coordinates for the else,
        // it will place some of the ships, but eventually it will throw an error that ship goes out of bounds or overlaps with another ship, 
        // place ship already has a checkForShip 
        // instead of throwing error, should be returning a boolean to make sure placement is legal, this will affect a few of my unit tests. 
        // capture value 
         
        
        // computerGameboard.gameboard.placeShip(computersShip, randomCoordinate1, randomCoordinate2, computersShip.shipLength, computersShip.shipPosition);

        // if false, it needs to try again, no ships can be placed 
        // we found a false ship, all the true ones place ok, if a coordinate is false, 
        // how can I make the ship try to place it again? something within the conditional
        // right now it will only place true ships, once a ship is false, how can we get it to become true? 
        // how to make an invalid ship placement valid again, it will place ships that are legal to place (true)
        // but the ones that return false, what can we do about those? can we try again with different coordinates
        // keep track of false coordinates and make sure not to use them again? 
        // use another if inside the else and return and exit if failed coordinates are trying to be used again. 












// now we need to place the battleship. 
// should we add an event listener on the gameboard cell, that once clicked finds the selected ship, and applies to battleship/ship obj styles to all of them, 
// placing ship function, takes from the variables currentShip, currentShipLength and position 
// should  it follow the same process as the previous functions? 

// function takes in currentShip, length and position, 
// accesses gameboard 
// click on a cell, maybe somehow use ship length or get info from findCoords to make sure styles are applied to all the cells of ships length 

// the problem is I can use the hover class to highlight ship over gameboard now I'm stuck on how to place the ships now, 

// it follows the similar process, clicking on a cell on the board, showing its classes while also updating the data in our 2D array 
// gameboard cell is clicked, sends info to function which places it on the board. access current ship 
// 

// function placeCoords  { 

    // take in coordinates from use coords, 
    // loop thru them, 
    // add an event listener to them, 
    // once clcked add the styles to them
// }








// get the coordinates first, then place them, same process as highlight, but when we pass them to use/print function, 
// cell is clicked we determine what coordinates will need to filled, based on ship length and position 
// passed to another function which applies the styles and class to all those cells. 
// same as hover class but this time we are using an event listener, 


// event listener click classes
// used same process for showing the hover class. 
// change variable names.  
// function getShipCoordinates(currentCell, currentShipDirection, currentShipLength) { 
// let clickedGameboardCell = currentCell;
// let shipDirection = currentShipDirection; 
// let shipLength = currentShipLength;

// if (shipDirection === 'vertical') { 
//     let updatedCoordinatesXForClickEvent = [];
//     let currentRow = clickedGameboardCell.dataset.row;
//     let currentColumn = clickedGameboardCell.dataset.column;
//     let convertColumnToNumber = Number(currentColumn);
//     let convertRowToNumber = Number(currentRow);
    
//     for (let i = 0; i < shipLength; i++) { 
//         let updatedXCoordinateClick 
//         updatedXCoordinateClick = convertRowToNumber + i;
//         updatedCoordinatesXForClickEvent.push([updatedXCoordinateClick, convertColumnToNumber]);
//     } 
//     console.log('these are updated coords for x', updatedCoordinatesXForClickEvent);
//     printCoordinatesClick(updatedCoordinatesXForClickEvent);

//     // useCoords(updatedCoordinatesX);
// } else if (shipDirection === 'horizontal') { 
//     let updatedCoordinatesYClickEvent = [];
//     let currentRow = clickedGameboardCell.dataset.row;
//     let currentColumn = clickedGameboardCell.dataset.column;
//     let convertColumnToNumber = Number(currentColumn);
//     let convertRowToNumber = Number(currentRow);

//     for (let i = 0; i < shipLength; i++) { 
//         let updatedYCoordinateClick 
//         updatedYCoordinateClick = convertColumnToNumber + i;
//         updatedCoordinatesYClickEvent.push([convertRowToNumber, updatedYCoordinateClick]);
//     } 
//     console.log('these are updated coords for y', updatedCoordinatesYClickEvent);
//     // useCoords(updatedCoordinatesY);
//     printCoordinatesClick(updatedCoordinatesYClickEvent)
// } 

// event listener click classes 
// used same process for showing the hover class. 
// function printCoordinatesClick(coords) { 
//     let passedCoordinates = coords;
//     for (let i = 0; i <= passedCoordinates.length; i++) { 
//         let coordinate = passedCoordinates[i];
//         let row = coordinate[0];
//         // console.log(row);
//         let column = coordinate[1];
//         let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`); // find the DOM cells that correspond to the coordinates passed in,
//         // console.log(cell);
//         console.log('current ship is, ', currentShip);
//         // cell.classList.add('battleship-hover-class'); 
//         cell.classList.toggle('battleship-hover-class');  
//         console.log(currentShipDirection);
//         // console.log(gameboardFactory().placeShip(currentShip, row, column, currentShip.shipLength, currentShipDirection)); 
//         // console.log(gameboardFactory().getGameboard());
//         // console.log(gameboardFactory().placeShip(battleShip, `[data-row="${row}"], [data-column="${column}"]`, 4, 'vertical'));

//         // cell.addEventListener('click', (e) => { 
//         //     console.log('HELLLLO');
//         //     console.log(e.target);
//         // })    
//     } 
// }









// old BS
// const playerBoardContainer = document.getElementById('gameboard-container');

// const gameboardModule = gameboardFactory();

// const playerBoard = gameboardModule.getGameboard(); 


// export default function createGameboardGridDOM() {  
// for (let i = 0; i < 10; i++) { 
//     for(let j = 0; j < 10; j++) { 
//         const gameboard = gameboardFactory().getGameboard();
//         const div = document.createElement('div'); 
//         playerBoardContainer.append(div);
//         div.dataset.row = i;
//         div.dataset.column = j;
//         div.id = 'cell-styles';
//         div.addEventListener('click', (e) => { 
//             console.log(e.target);
//             // console.log(row);
//             // console.log(column);
//             console.log('logging gameboard within event listener', gameboard);
//             // console.log(gameboard);
//              // Accessing the corresponding cell in the gameboard array
//              // console.log(gameboard[row][column]);
//              // returns the cooresponding coordinates within the gameboard
//              const clickedCell = gameboard[i][j]; 
//              console.log('Clicked cell in gameboard:', clickedCell);
//         });
//     } 
// }

// } 

// createGameboardGridDOM();


// // placing ships on players board, 

// // use another loop to create the ship in the DOM, you will probably want to call ship factory so you have access to its object, 

// // start there first, then worry about the click and place on the board, 

// function battleShipDOMObject() { 
//     const battleshipObj = ship('Battleship', 4, 'vertical');
//     console.log(battleshipObj);

//     for (let i = 0; i < 4; i++) { 
//         const div = document.createElement('div');
//         div.id = 'battleship-obj-styles';
//         const battleShipContainer = document.getElementById('battleship-container');
//         battleShipContainer.append(div);        
//     }    
// } 

// // refactor to create a function which accepts ship objects, and length and position 

// // that way we can create ship objects then pass them to this function 

// // which makes ship obj in the DOM. 

// // Before moving on I would make sure the gameboard grid is 100% responsive before moving, MOBILE FIRST, maybe min widths, 

// // I want to make sure this board does not break on smaller screens. 

// battleShipDOMObject();










// well I have the loop created, where should this loop go? 
// should the loop go within a function, then be called in the playGame()?

// I put the gameboard grid within the function, 
 
// I think I will have to create another one for the computer, the computers board will be auto placed, 

// once player places his ships on his board, a start game option will pop-up, once pressed, comps board will auto fill, and will display comps board but hidden, 



















// for (let i = 0; i < 10; i ++) { 
//     const rowDiv = document.createElement('div'); 
//     rowDiv.dataset.row = i;
//     for (let j = 0; j < 10; j++) { 
//     const gameboard = gameboardFactory().getGameboard();
//     const columnDiv = document.createElement('div');
//     columnDiv.dataset.column = j;

//     rowDiv.addEventListener('click', (e) => { 
//         console.log(e.target);
//     }) 

//     columnDiv.addEventListener('click', (e) => { 
//         console.log(e.target);
//     })

//     rowDiv.style.height = '35px';
//     rowDiv.style.width = '35px';
//     rowDiv.style.backgroundColor = 'blue';
//     rowDiv.style.border = '1px solid black'; 

//     columnDiv.style.height = '35px';
//     columnDiv.style.width = '35px';
//     columnDiv.style.backgroundColor = 'blue';
//     columnDiv.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(rowDiv);
//     playerBoardContainer.appendChild(columnDiv);   
//     console.log(rowDiv);
//     console.log(columnDiv);
//     }
// }

// playerBoardContainer.append(playerBoard);

// making DOM gameboard, 

// how can I connect my DOM gameboard to the array gameboard????????? 

// DOM cell is clicked on, how can I find the corresponding array cell within gameboard? using find ? 

// If I click on a DOM cell, I should get back the corresponding array cell within gameboard 

// for (let i = 0; i < 10; i++) {  
//     const div = document.createElement('div'); 
//     // div.setAttribute("index", i);
//     // div.id = i;
//     div.dataset.row = i;
//     div.dataset.column = i;

//     const gameboard = gameboardFactory().getGameboard();
//     div.addEventListener('click', (e) => { 
//         console.log(e.target);
//         // gameboard.find(cell => cell === div);
//         if (gameboard[5][2].includes(e.target.value)) { 
//             // return gameboards specific cell that matches the DOM cell
//             return true;
//         }
//     }) 

//     div.style.height = '35px';
//     div.style.width = '35px';
//     div.style.backgroundColor = 'blue';
//     div.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(div);   
//     console.log(div);
// } 




// I want to click on DOM cell and have it return back the gameboard array cell, how can I use the find method to achieve this? 

// THIS!!!
// connect the HTML board using data sets to the array index's within the gameboard array 




// how to make current gameboard a grid????? 

// I think you keep the gameboard as the array, 

// that will be the board behind the scenes, make another board which be the display board, 

// display board will still correlate with regular board, 

// wherever the user places ships, those same coordinates will be saved to board in the console 




// for (let i = 0; i <= 100; i++) {  
//     const div = document.createElement('div'); 
//     div.style.height = '25px';
//     div.style.width = '25px';
//     div.style.backgroundColor = 'red';
//     div.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(div);   
      
// } 

// board.classList.add('board-styles');

// console.log(board);

// playerBoardContainer.append(board);