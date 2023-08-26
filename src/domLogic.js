import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
import './gameModule.js';
import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';



const gridContainer = document.getElementById('gameboard-grid-container');


for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) { 
    let div = document.createElement('div');
    const gameboard = gameboardFactory().getGameboard();
    div.style.backgroundColor = 'blue';
    div.style.border = '1px solid black';
    div.style.height = '35px';
    div.style.width = '35px';
    div.dataset.row = i;
    div.dataset.column = j;
    gridContainer.append(div);
    div.addEventListener('click', (e) => { 
        console.log(e.target);
        // returning back gameboards corresponding board cell
        const clickedCell = gameboard[i][j]; 
        console.log('Clicked cell in gameboard:', clickedCell);
    })

} 
}                         

// I will begin to display the ships, so the user can start to click

// them and place them on the board, 

// make a big container for them, 

// add the ships to that container 

// each ship will needs its own container, 

// big container for all ships, each ship has own container, 

// begin with html 

// Ok how the fuck do I begin placing ships, and making ship objects within DOM 

// do I make a function which has ship objects 

// then pass so there styles are created then append, 

// how will I associate each DOM ship with it's object?????  

// create factory, that creates the ship object 

// and also creates its DOM structure? 

// takes in ship object and a length, 

// ship is created inside, 

// then loops through and creates ship object within the DOM 

// HOW TO CONNECT THEM ? `




let battleShip = ship('Battleship', 4, 'vertical');
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 4, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');








    function createBattleShipDOMObj() { 
    for (let i = 0; i < 4; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        // div.dataset.shipID = battleShip;
        console.log(div);
        const battleshipContainer = document.getElementById('container-for-battleship');
        battleshipContainer.append(div);
        battleshipContainer.dataset.shipID = JSON.stringify(battleShip);
        console.log(battleshipContainer);
        battleshipContainer.addEventListener('click', (e) => { 
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
        console.log(destroyerContainer);
        destroyerContainer.addEventListener('click', (e) => { 

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
        console.log(patrolBoatContainer);
        patrolBoatContainer.addEventListener('click', (e) => { 
        
        })
    }
}


createPatrolBoatDOMObj(); 

function createCarrierBoatDOMObj() { 
    for (let i = 0; i < 4; i++) { 
        const div = document.createElement('div');
        div.id = 'ship-obj-styles';
        const carrierBoatContainer = document.getElementById('container-for-carrier-boat');
        carrierBoatContainer.append(div);
        carrierBoatContainer.dataset.shipID = JSON.stringify(carrierBoat);
        console.log(carrierBoatContainer);
        carrierBoatContainer.addEventListener('click', (e) => { 

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
        console.log(submarineContainer);
        submarineContainer.addEventListener('click', (e) => { 

        })
    }
}

createSubmarineDOMObj();

// createShipObjectsDOM(battleShip, 4);


// function to place ships 
// has ship objects, 
// 




























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
