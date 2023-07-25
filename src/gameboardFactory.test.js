import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory";

test('testing to see if ship was placed at specific coordinates', () => { 
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(battleShip, 3, 3, 4, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    expect(updatedGameboard[3][3]).toBe(battleShip);
}); 

// I would like to write a test and also add a feature within placeShip function, 
// I want to prevent the user from placing a ship if another ship is already there, 
// I want to prevent the overlapping of ships 
// write a test, can we simply place a ship, then see if another is already there, 
// you need to access the gameboard, and get a pair of coordinates
// determine if those coordinates already contain a ship, if so return or prevent the function 
// from placing it's ship.
// how could you write a test that would prevent a user from overlapping ships 
// how you you write a test that would prevent users from placing ships on top of eachother. 
// try to write a test similar to the specific coordinates, in that the gameboard contains coordinates 
// that is an obj, and if it is obj, throw error in main function 
// how could I write a test to prevent overlapping of ships. 
// if the coordinates contain an object, prevent user from placing ship, 

// place a couple of ships, try to place another ship at the current location, then just throw an error? 
// error will state cannot place because ship is already there. 

// using nested if statements guard clauses 
// check if the ship, is an obj, 
// and does the obj match the ship obj? 
// 

test('testing to see if ship is already taken in that spot and if ships intersect or overlap', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let destroyer = ship('Destroyer', 4, 'vertical');
    let gameboardFactoryCall = gameboardFactory();
    let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 3, 3, 4, 'vertical');
    let placeDestroyer = gameboardFactoryCall.placeShip(destroyer, 3, 3, 4, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    // expect(typeof updatedGameboard[3][3]).toEqual('object');
    expect(gameboardFactoryCall.checkForShip(3, 3, 4, 'vertical')).toThrow('Ship is already placed there');
}) 


// testing to see if something is already there, 




test("testing to see if ships span it's full length", () => { 
    let carrier = ship('Carrier', 5, 'horizontal');
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(carrier, 0, 0, 5, 'horizontal');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    expect(updatedGameboard[0][0]).toBe(carrier);
    expect(updatedGameboard[0][1]).toBe(carrier);
    expect(updatedGameboard[0][2]).toBe(carrier);
    expect(updatedGameboard[0][3]).toBe(carrier);
    expect(updatedGameboard[0][4]).toBe(carrier);
}) 

// we will now implement the next step, 
// a receiveAttack function, takes a pair of coordinates 
// did the attack hit a ship? 
// if so increase hitCounter to the correct ship 
// the test will come first, so let's take in some coordinates first 
// receive attack function, coordinates, 

test("testing to see if an attack hit a ship", () => { 
    let gameBoardFunctionCall = gameboardFactory();
    let battleShip = ship('Battleship', 4, 'vertical'); 
    // let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameBoardFunctionCall.placeShip(battleShip, 3, 3, 4, 'vertical');
    // let updatedGameboard = gameboardFactoryCall.getGameboard();
    // let callCoordinates = gameBoardFunctionCall.receiveAttack(3, 3);
    expect(typeof gameBoardFunctionCall.receiveAttack(3, 3)).toBe('object');
}) 

// trying to get receive attack function to work, 

// I think I need a conditional to check the length and the position, 
// if length >= 2 and position vertical, add approprate spots 
// if length <= 4 and position horizontal, fill in appropriate spots 

// I have to calculate ship length and starting coordinates, HOW???? 

// add length to starting coordinates, 

// [0 + {shipLength}]

// we have length and starting coordinates, add length to starting coordinates, HOW???? 


// how to add the length to the ship coordinate so it expands it's full length, 

// I want the ship to expand it's length and check if its still in the correct coordinates 

// you need to check the position, if vertical, loop thru length of ship, and add the index to the FIRST coordinate 

// test it's direction too 

// I want to test to see if the ship expands it's full length, 

// old test to see if ship was placed at correct coordinates, 
// test('testing to see if ship was placed at specific coordinates', () => { 
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     let gameboardFactoryCall = gameboardFactory();
//     let placeShipMethod = gameboardFactoryCall.placeShip(battleShip, 0, 0);
//     expect(gameboardFactoryCall.getGameboard([0]).toBe(battleShip))
//     expect(gameboardFactoryCall.getGameboard([0]).toBe(battleShip))
// }); 

































// first test if a ship object has been properly created 
// tests are passing..place the ship next and see if it's been placed 

// I want to make a test that simply checks if the board state has changed after placing the ship, 
// the problem is I want to make all my unit tests for my placeShip function, 

// I have checked, if the name matches the obj passed in, 
// I have checked if the ship has a length of 4. 

// I now want to check that the board state has changed, meaning the board has had a ship placed on it. 

// test('testing to see if ship is correctly placed at specified coordinates', () => { 
//     let destroyer = ship('destroyer', 4, 1, 'vertical'); 
//     // expect(destroyer.shipName).toBe("destroyer");
//     // expect(destroyer.shipLength).toBe(4);
//     // push the object into the board, placeShip method 
//     // how can I use the placeShip method to push the obj into the board???
    
//     let gameboard = gameboardFactory().createBoard();
    
//      gameboard[0][0] = destroyer.shipNumber;
//      gameboard[0][1] = destroyer.shipNumber;
//      gameboard[0][2] = destroyer.shipNumber;
//      gameboard[0][3] = destroyer.shipNumber;

//      expect(gameboard[0][0]).toBe(1)
//      expect(gameboard[0][1]).toBe(1)
//      expect(gameboard[0][2]).toBe(1)
//      expect(gameboard[0][3]).toBe(1)

// }) 

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

