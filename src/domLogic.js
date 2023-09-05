import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
import './gameModule.js';
// import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';
// import gameboardFactory from './gameboardFactory.js';

const gridContainer = document.getElementById('gameboard-grid-container');

let gameboard = gameboardFactory();

let currentShip 
let currentCell
let currentShipLength
let currentShipDirection
let battleShip = ship('Battleship', 4, 'vertical');
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 5, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical'); 



const changeShipPositionBtn = document.getElementById('change-ship-direction-btn');
console.log(changeShipPositionBtn);
const changeShipPositionBtnHorizontal = document.getElementById('change-ship-direction-btn-h');
console.log(changeShipPositionBtnHorizontal);

changeShipPositionBtnHorizontal.addEventListener('click', (e) => { 
    currentShipDirection = 'horizontal';
})

changeShipPositionBtn.addEventListener('click', (e) => {  
    console.log('before changing', currentShipDirection);
    currentShipDirection = 'vertical';
    console.log('after changing', currentShipDirection);
}) 

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



// will accept the passed in coordinates, this will include all the cells that will need to be filled, 
function useCoords(coords) {
    let passedCoordinates = coords;
    for (let i = 0; i < passedCoordinates.length; i++) { 
        let coordinate = passedCoordinates[i];
        let row = coordinate[0];
        // console.log(row);
        let column = coordinate[1];
        let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`); // find the DOM cells that correspond to the coordinates passed in,
       //  console.log(cell);
        // cell.classList.add('battleship-hover-class'); 
        cell.classList.toggle('battleship-hover-class');  
        // cell.addEventListener('click', (e) => { 
        //     console.log('HELLLLO');
        //     console.log(e.target);
        // })    
    } 
} 




function placeCurrentShip(x, y, currentShip, currentShipLength, currentShipDirection) { 
    let selectedXCoordinate = x;
    let selectedYCoordinate = y; 
    
    console.log(selectedXCoordinate);
    console.log(selectedYCoordinate);

    let selectedShip = currentShip;
    let selectedShipLength = currentShipLength;
    let selectedShipDirection = currentShipDirection;

    console.log(selectedShip.shipName);
    console.log(selectedShipLength);
    console.log(selectedShipDirection);
    
    gameboard.placeShip(selectedXCoordinate, selectedYCoordinate, selectedShip.shipName, selectedShipLength, selectedShipDirection);

}


// gameboard grid
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


        const clickedCell = gameboard[i][j]; 
        // console.log(clickedCell);
        console.log(e.target);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP', currentShip);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP LENGTH', currentShipLength);
        console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP DIRECTION', currentShipDirection);
        let xCoordinate 
        let yCoordinate
        xCoordinate = e.target.dataset.row; 
        yCoordinate =  e.target.dataset.column;
        // console.log(xCoordinate);
        // console.log(yCoordinate); 
        placeCurrentShip(xCoordinate, yCoordinate, currentShip, currentShipLength, currentShipDirection);

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
