import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
import './gameModule.js';
import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';


// const thePlayer = playGame();

// console.log(thePlayer);
// we need a way to access the players board, 

// how can I access players board, its a function within a different module, it's not a method, 

// how to access a function within a different module, export and import

// ok I can call the functions, 

// am I supposed to create a new board, to allow users to drag and drop in the homescreen 

// or am I supposed to somehow access players board within gameModule? 

// I;m having trouble accessing the board, 

// how can I style the board that was created? 




const playerBoardContainer = document.getElementById('gameboard-container');

// playerBoardContainer.id = 'player-board-container-styles';

// playerBoardContainer.style.display = 'flex';
// playerBoardContainer.style.flexWrap = 'wrap';
// playerBoardContainer.style.height = '350px';
// playerBoardContainer.style.width = '350px';

// playerBoardContainer.style.maxHeight = '300px';
// playerBoardContainer.style.maxWidth = '300px';
// playerBoardContainer.style.gap = ;

let gameboardModule = gameboardFactory();

let playerBoard = gameboardModule.getGameboard(); 


// playerBoardContainer.classList.add('board-container-styles');

// console.log(playerBoardContainer.children); 


for (let i = 0; i < 10; i++) { 
    for(let j = 0; j < 10; j++) { 
        const gameboard = gameboardFactory().getGameboard();
        const div = document.createElement('div'); 
        playerBoardContainer.append(div);
        div.dataset.row = i;
        div.dataset.column = j;
        // div.style.height = '35px';
        // div.style.width = '35px';
        // div.style.backgroundColor = 'blue';
        // div.style.border = '1px solid black'; 
        div.id = 'cell-styles';
        
        div.addEventListener('click', (e) => { 
            console.log(e.target);
        })
    } 
}



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
