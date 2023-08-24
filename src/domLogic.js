import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
import './gameModule.js';
import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';




const playerBoardContainer = document.getElementById('gameboard-container');

let gameboardModule = gameboardFactory();

let playerBoard = gameboardModule.getGameboard(); 


// playerBoardContainer.classList.add('board-container-styles');

// console.log(playerBoardContainer.children); 

// problem is connecting DOM cells and gameboard array indexes, if user clicks on DOM gameboard cell 

// should return back the corresponding array index. 

// basically created a grid, using nested for loops, 
// then inside used in IIFE, to capture current i and j indexes, 
// problem is that it does not log back any value when I try to log it 
// I notice the datasets are working and logging back value


for (let i = 0; i < 10; i++) { 
    for(let j = 0; j < 10; j++) { 
        const gameboard = gameboardFactory().getGameboard();
        const div = document.createElement('div'); 
        playerBoardContainer.append(div);
        div.dataset.row = i;
        div.dataset.column = j;
        div.id = 'cell-styles';
        
        (function(row, column) {
            div.addEventListener('click', (e) => { 
                console.log(e.target);
                console.log(row);
                console.log(column);
                console.log('logging gameboard within event listener', gameboard);
                // console.log(gameboard);
                 // Accessing the corresponding cell in the gameboard array
                 // console.log(gameboard[row][column]);
                 const clickedCell = gameboard[row][column];
                 console.log('Clicked cell in gameboard:', clickedCell);
            });
        })(i, j);
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
