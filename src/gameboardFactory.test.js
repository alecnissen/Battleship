import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory"; 

// I want to test my unit tests again with another instance, just to make sure they work ok, then move on 

// coordinate test #1
test('testing to see if ship was placed at specific coordinates', () => { 
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(battleShip, 4, 3, 4, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    console.log(typeof null)
    expect(updatedGameboard[4][3]).toBe(battleShip);  
}); 

// coordiante test #2 
test('testing to see if ship was placed at specific coordinates, 2nd instance', () => { 
    let patrolBoat = ship('patrol-boat', 2, 'horizontal'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(patrolBoat, 5, 5, 2, 'horizontal');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    console.log(typeof null)
    expect(updatedGameboard[5][5]).toBe(patrolBoat);  
    expect(updatedGameboard[5][6]).toBe(patrolBoat);  
}); 

// overlap test #1
test('testing to see if ship is already taken in that spot and if ships intersect or overlap', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let destroyer = ship('Destroyer', 4, 'vertical');
    let gameboardFactoryCall = gameboardFactory();
    let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical');
    expect(() => {
        (gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical'));
    }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
}) 

// left off here
// overlap test #2 
test('testing to see if ship is already taken in that spot and if ships intersect or overlap, 2nd instance', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let destroyer = ship('Destroyer', 4, 'vertical');
    let gameboardFactoryCall = gameboardFactory();
    let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
    console.log(gameboardFactoryCall.getGameboard());
    expect(() => {
         let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
        (gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal'));
    }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
})

// out of bounds test, original 
test('testing to see if ship is placed out of bounds', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    expect(() => { 
        gameboardFactoryCall.placeShip(battleShip, 7, 3, 4, 'vertical')     // if it hits the end return undefined? 
    }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
}) 

// out of bounds test 2nd instance 
test('testing to see if ship is placed out of bounds, 2nd instance', () => {
    let battleShip = ship('Battleship', 4, 'horizontal'); 
    let gameboardFactoryCall = gameboardFactory();
    expect(() => { 
        gameboardFactoryCall.placeShip(battleShip, 1, 7, 4, 'horizontal')     // if it hits the end return undefined? 
    }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
}) 

// full length test #1 
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

// full length test #2 
test("testing to see if ships span it's full length, 2nd instance", () => { 
    let carrier = ship('Carrier', 5, 'horizontal');
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(carrier, 5, 4, 5, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    expect(updatedGameboard[5][4]).toBe(carrier);
    expect(updatedGameboard[6][4]).toBe(carrier);
    expect(updatedGameboard[7][4]).toBe(carrier);
    expect(updatedGameboard[8][4]).toBe(carrier);
    expect(updatedGameboard[9][4]).toBe(carrier);
}) 

// we will now implement the next step, 
// a receiveAttack function, takes a pair of coordinates 
// did the attack hit a ship? 
// if so increase hitCounter to the correct ship 
// the test will come first, so let's take in some coordinates first 
// receive attack function, coordinates, 

// test to see if ship did receive an attack, test #1 
// receiveAttack test
test("testing to see if an attack hit a ship", () => { 
    let gameBoardFunctionCall = gameboardFactory();
    let battleShip = ship('Battleship', 4, 'vertical'); 
    // let gameboardFactoryCall = gameboardFactory();
    gameBoardFunctionCall.placeShip(battleShip, 3, 3, 4, 'vertical');
    // console.log(battleShip.hitIncrementor());
    // console.log(battleShip.getHitCounter());
    // let updatedGameboard = gameboardFactoryCall.getGameboard();
    // let callCoordinates = gameBoardFunctionCall.receiveAttack(3, 3);
    expect(typeof gameBoardFunctionCall.receiveAttack(3, 3)).toBe('object');
    // console.log(gameBoardFunctionCall.hitShots);
}) 

// receive attack, takes coordinates, determines if it a ship, determines which ship 
// increments that particular ships hit counter 

// test to see if ship did receive an attack, test #2  

// receiveAttack test
test("testing to see if an attack hit a ship, 2nd instance", () => { 
    let gameBoardFunctionCall = gameboardFactory();
    let battleShip = ship('Battleship', 4, 'vertical'); 
    // let gameboardFactoryCall = gameboardFactory();
    gameBoardFunctionCall.placeShip(battleShip, 5, 3, 4, 'horizontal');
    // battleShip.hitIncrementor();
    // battleShip.hitIncrementor();
    // battleShip.hitIncrementor();
    // console.log(battleShip.getHitCounter());
    // let updatedGameboard = gameboardFactoryCall.getGameboard();
    // let callCoordinates = gameBoardFunctionCall.receiveAttack(3, 3);

    // expect(gameBoardFunctionCall.receiveAttack(5, 3)).toBe(battleShip);

    expect(typeof gameBoardFunctionCall.receiveAttack(5, 3)).toBe('object');
    // expect(typeof gameBoardFunctionCall.receiveAttack(5, 4)).toBe('object');
    // expect(typeof gameBoardFunctionCall.receiveAttack(5, 5)).toBe('object');
    // expect(typeof gameBoardFunctionCall.receiveAttack(5, 6)).toBe('object');
    // console.log(gameBoardFunctionCall.hitShots);
     console.log(battleShip.getHitCounter());
}) 

// test will increment the selected ships hit counter / passes
// I want a test, that will place a ship, 
// call the receive attack function, 
// 1: expect it to be the ship obj that was placed 

// I want to increment a particular ships hit counter if an attack hits it, 
// 

// receiveAttack test
test('testing to see if the selected ships hit counter increments and returns the correct number of hits, as well as storing hit shots', () => { 
    let gameBoard = gameboardFactory();
    let battleShip = ship('Battleship', 4, 'vertical'); 
    gameBoard.placeShip(battleShip, 5, 3, 4, 'vertical');
    // expect(gameBoard.receiveAttack(5, 3)).toBe(battleShip);
    expect(typeof gameBoard.receiveAttack(5, 3)).toBe('object');
    // battleShip.hitIncrementor();
    expect(gameBoard.hitShots).toStrictEqual([[5, 3]]);
    expect(battleShip.getHitCounter()).toBe(1);
}) 
// receiveAttack test
test('testing to see if the selected ships hit counter increments and returns the correct number of hits, as well as storing hit shots, 2nd instance', () => { 
    let gameBoard = gameboardFactory();
    let destroyer = ship('destroyer', 4, 'horizontal'); 
    gameBoard.placeShip(destroyer, 1, 3, 4, 'horizontal');
    // expect(gameBoard.receiveAttack(5, 3)).toBe(battleShip);
    expect(typeof gameBoard.receiveAttack(1, 3)).toBe('object');
    // battleShip.hitIncrementor();
    expect(gameBoard.hitShots).toStrictEqual([[1, 3]]);
    expect(destroyer.getHitCounter()).toBe(1);
}) 


// I will check next my tests for receiveAttack and follow along 
// the code execution to make sure it is 100% working as intended 
// make sure you fully understand what the code is doing 




// test('testing to see if the selected ships hit counter increments and returns the correct number of hits', () => { 
//     let gameBoardFunctionCall = gameboardFactory();
//     let battleShip = ship('Battleship', 4, 'vertical');
//     let placeShipMethod = gameBoardFunctionCall.placeShip(battleShip, 5, 3, 4, 'horizontal');
    

//     battleShip.hitIncrementor();
//     battleShip.hitIncrementor();
//     battleShip.hitIncrementor();
//     console.log(battleShip.getHitCounter());
//     expect(battleShip.getHitCounter()).toBe(3);
// })



// test will check what ship received the attack, or got hit /

// test that an attack missed a ship, should throw an error  

// an attack misses a ship, it should record the coordinates of the missed shot, 

// the array should contain the coordinates, toBe the coordinates passed in. 

// just check if the shot misses

// have a test pass, that stores the missed shots into an array

// receiveAttack test
test('attack misses a ship, the array contains the coordinates of the missed shots', () => { 
    let gameBoard = gameboardFactory();
    // let missedShots = [];
    // let coordinateX = 3;
    // let coordinateY = 4; 
    //  let expectedMissedShots = [[1, 2], [3, 4], [5, 6]];
    // let battleShip = ship('Battleship', 4, 'vertical');
    // let placeBattleship = gameBoardFunctionCall.placeShip(battleShip, 5, 3, 4, 'horizontal');
    // let attackCoordinates = gameBoardFunctionCall.receiveAttack(3, 3);
    // console.log(attackCoordinates); 
    gameBoard.receiveAttack(1, 2);
    gameBoard.receiveAttack(3, 4);
    gameBoard.receiveAttack(5, 6);
    // missedShots.push(expectedMissedShots);
    expect(gameBoard.missedShots).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
}) 

// receiveAttack test
test('attack misses a ship, the array contains the coordinates of the missed shots, 2nd instance', () => { 
    let gameBoard = gameboardFactory();
    // let missedShots = [];
    // let coordinateX = 3;
    // let coordinateY = 4; 
    //  let expectedMissedShots = [[1, 2], [3, 4], [5, 6]];
    // let battleShip = ship('Battleship', 4, 'vertical');
    // let placeBattleship = gameBoardFunctionCall.placeShip(battleShip, 5, 3, 4, 'horizontal');
    // let attackCoordinates = gameBoardFunctionCall.receiveAttack(3, 3);
    // console.log(attackCoordinates); 
    gameBoard.receiveAttack(3, 1);
    gameBoard.receiveAttack(6, 2);
    gameBoard.receiveAttack(7, 4);
    // missedShots.push(expectedMissedShots);
    expect(gameBoard.missedShots).toStrictEqual([[3, 1], [6, 2], [7, 4]]);
}) 

// I want to write a test that will place a ship, call the receive attack function passing in coordinates, 
// how can I access those coordinates that were passed in? and save them to a variable, such as an array ? 

// how can I record the coordinates of the missed shots? 
// init missed shot variable 



// Gameboards should have a receiveAttack function that takes a pair of coordinates, 
// determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, 
// or records the coordinates of the missed shot.



// expect(() => { 
//     gameboardFactoryCall.placeShip(battleShip, 1, 7, 4, 'horizontal')     // if it hits the end return undefined? 
// }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');












// next I will write a test that will check if the placed ship has gone off the board, 

// it will throw an error, an alert the user to adjust how they place the ship,

// if the coordinates and the loop === undefined, meaning we went off the board, return false



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

