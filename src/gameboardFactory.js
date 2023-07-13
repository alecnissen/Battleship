// I need to create a board(grid) 

// so users can begin to place ships at specific coordinates, 

// just like etch a sketch, look back at how you created the board 

// main container which holds the gameboard 

// create the logic within this file, generate a 2d array, 

// function, method for creating the gameboard, use a 2d array to create 

// use 2d array to create the board, 

export default function gameboardFactory() { 
    let rows = 10;
    let columns = 10;
    const myArray1 = [];
    function createBoard() { 
        for (let i = 0; i < rows; i++) { 
            myArray1[i] = [];
            for (let j = 0; j < columns; j++) { 
                myArray1[i][j] = null;
            }
            return myArray1;
        }
    }
    return { 
        createBoard
    }
} 

// console.log(gameboardFactory.createBoard());

let userGameboard = gameboardFactory();

console.log(userGameboard.createBoard());
