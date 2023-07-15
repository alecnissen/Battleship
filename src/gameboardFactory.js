import './shipFactory.js';
import ship from './shipFactory.js';

// I need to create a board(grid) 

// so users can begin to place ships at specific coordinates, 

// just like etch a sketch, look back at how you created the board 

// main container which holds the gameboard 

// create the logic within this file, generate a 2d array, 

// function, method for creating the gameboard, use a 2d array to create 

// use 2d array to create the board, 

// I need to properly make a 2D array, then possibly 

// make a test which will check it's length to make sure it is 100 

// then a function placeShip which will place a ship at a specific pair of coordinates

// placeShip function, 

// it needs to call the ship factory function 

// the parameters would be coordinates, [0][2] first subarray, second item, 

// 
// I've created the board method, createBoard 

// next I need to work on my placeShip function, 

// what is this line? const board = createBoard(); used for, 

// I just need a function which creates board then places ships at specific coordinates 


export default function gameboardFactory() { 
    let rows = 10;
    let columns = 10;
    const board = createBoard();
    // used before it was defined, 

    function createBoard() { 
        const board = [];
        for (let i = 0; i < rows; i++) { 
            board[i] = [];
            for (let j = 0; j < columns; j++) { 
                board[i][j] = j;
            }
        }
        return board;
    } 
    function placeShip(x, y, ship) { 
        // takes coordinates and a ship obj
    }
    return { 
        // createBoard, // if I don't make it public, error, not afunction, myGameboard.createBoard 
        placeShip
    }
} 
// console.log(gameboardFactory.createBoard()); 

let myGameboard = gameboardFactory(); 

console.log(myGameboard);

// console.log(myGameboard.createBoard());

// console.log(gameboardFactory.createBoard());

// let board = gameboardFactory();

// console.log(board.createBoard()); 

// console.log(board.placeShip()); 


// console.log(ship('destroyer', 4));

// The unit tests are confusing me, I created my 2D so I begin placing ships 

// at specific coorindates, I know I should be testing features in my program

// so I just created the gameboard, I feel like I should test it to make sure 

// it does return 100 cells. 

// problem is when I log my 2D array, it's 10 arrays, with a length of 10, 

// can I just test each subarray for a length of 10, all the way down to the last subarray? 

// is that ok? 



// function gameboardFactory() { 
//     let rows = 10; 
//     let columns = 10; 

//     const myArray1 = new Array(rows); 

//     for (let i = 0; i < myArray1.length; i++) { 
//         myArray1[i] = new Array(columns);
//     }
//     return myArray1;

// } 

// console.log(gameboardFactory());

