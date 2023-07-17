import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory";

// first test if a ship object has been properly created 
// tests are passing..place the ship next and see if it's been placed 

// I want to make a test that simply checks if the board state has changed after placing the ship, 
// the problem is I want to make all my unit tests for my placeShip function, 

// I have checked, if the name matches the obj passed in, 
// I have checked if the ship has a length of 4. 

// I now want to check that the board state has changed, meaning the board has had a ship placed on it. 

test('testing to see if ship is correctly placed at specified coordinates', () => { 
    let destroyer = ship('destroyer', 4, 1, 'vertical'); 
    // expect(destroyer.shipName).toBe("destroyer");
    // expect(destroyer.shipLength).toBe(4);
    // push the object into the board, placeShip method 
    // how can I use the placeShip method to push the obj into the board???
    
    let gameboard = gameboardFactory().createBoard();
    
     gameboard[0][0] = destroyer.shipNumber;
     gameboard[0][1] = destroyer.shipNumber;
     gameboard[0][2] = destroyer.shipNumber;
     gameboard[0][3] = destroyer.shipNumber;

     expect(gameboard[0][0]).toBe(1)
     expect(gameboard[0][1]).toBe(1)
     expect(gameboard[0][2]).toBe(1)
     expect(gameboard[0][3]).toBe(1)

}) 

// test('test to see if another ship is placed at the correct coordinates', () => { 
//     let battleship = ship('destroyer', 4, 1, 'vertical'); 
//     let gameboard = gameboardFactory().createBoard(); 


// })


// test('testing if ship is correctly placed at specified coordinates', () => {
//     const destroyer = ship('destroyer', 4);
//     expect(destroyer.shipName).toBe("destroyer");
//     expect(destroyer.shipLength).toBe(4);
  
//     const gameBoard = gameboardFactory();
//     const x = 2;
//     const y = 3;
//     let checkForShip = 
//     gameBoard.placeShip(x, y, destroyer, 'horizontal');
  
//     // Retrieve the game board state
//     const boardState = gameBoard.createBoard();
  
//     // Verify if the ship object is placed at the specified coordinates
//     for (let i = x; i < x + destroyer.shipLength; i++) {
//       expect(boardState[y][i]).toBe(destroyer);
//     }
//   });




// test state change of the board, 

// how to place a ship, (x, y) coordinates and a ship obj

// so place the ship 

