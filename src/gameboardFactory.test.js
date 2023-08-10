import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory"; 


// coordinate test #1
test('testing to see if ship was placed at specific coordinates', () => { 
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(battleShip, 4, 3, 4, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    // console.log(typeof null)
    expect(updatedGameboard[4][3]).toBe(battleShip);  
}); 

// coordiante test #2 
test('testing to see if ship was placed at specific coordinates, 2nd instance', () => { 
    let patrolBoat = ship('patrol-boat', 2, 'horizontal'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(patrolBoat, 5, 5, 2, 'horizontal');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    // console.log(typeof null)
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
   //  console.log(gameboardFactoryCall.getGameboard());
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

// test to see if ship did receive an attack, test #1 
// receiveAttack test
test("testing to see if an attack hit a ship", () => { 
    let gameBoardFunctionCall = gameboardFactory();
    let battleShip = ship('Battleship', 4, 'vertical'); 
    gameBoardFunctionCall.placeShip(battleShip, 3, 3, 4, 'vertical');
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
    expect(typeof gameBoardFunctionCall.receiveAttack(5, 3)).toBe('object');
     console.log(battleShip.getHitCounter());
}) 


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
    expect(gameBoard.hitShots).toStrictEqual([[1, 3]]);
    expect(destroyer.getHitCounter()).toBe(1);
}) 





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


// receiveAttack test
test('attack misses a ship, the array contains the coordinates of the missed shots', () => { 
    let gameBoard = gameboardFactory();
    gameBoard.receiveAttack(1, 2);
    gameBoard.receiveAttack(3, 4);
    gameBoard.receiveAttack(5, 6);
    expect(gameBoard.missedShots).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
}) 

// receiveAttack test
test('attack misses a ship, the array contains the coordinates of the missed shots, 2nd instance', () => { 
    let gameBoard = gameboardFactory();
    gameBoard.receiveAttack(3, 1);
    gameBoard.receiveAttack(6, 2);
    gameBoard.receiveAttack(7, 4);
    expect(gameBoard.missedShots).toStrictEqual([[3, 1], [6, 2], [7, 4]]);
}) 

test('testing to check if all the ships on the gameboard are sunk', () => { 
    let gameboard = gameboardFactory();
    let patrolBoat = ship('patrol-boat', 2, 'horizontal');
    let sub = ship('submarine', 3, 'vertical');
    gameboard.placeShip(patrolBoat, 3, 1, 2, 'vertical');
    gameboard.placeShip(sub, 5, 3, 3, 'horizontal');
    gameboard.receiveAttack(5, 3);
    gameboard.receiveAttack(5, 3);
    gameboard.receiveAttack(5, 3);
    console.log(gameboard.getGameboard());
    console.log(sub.getHitCounter());
    console.log(sub.isSunkConditional());
    console.log(sub.getShipStatus());

    let currentGameboard = gameboard.getGameboard(); 

    let returnShipObjects = currentGameboard.filter((cell) => typeof cell === 'object');

    console.log(returnShipObjects)

}) 



// is my receiveAttack function working as intended? 
// do I need to refactor or add any new features to receiveAttack? 
// Do I need a method that checks if that coordinate already received a hit? 
// 


// confused on how to test that a cell does not receive multiple hits, 
// receive attack should be modified to make sure cells do not receive multiple hits, 


// ask question tonight about checking if all ships are sunk and whether or not the same cell has been hit already, 
// writing the unit test 
// Do I need to major refactor receiveAttack? 

// the problem is how can I make a method to retrieve all the ship objects within the gameboard? From there I can access their properties to determine if sunk or not 
// 
// 


test('testing to make sure coordinates/cells do not receive multiple hits', () => { 
    let gameboard = gameboardFactory();
    console.log(gameboard);
    let patrolBoat = ship('patrol-boat', 2, 'horizontal'); 
    gameboard.placeShip(patrolBoat, 5, 3, 2)
    console.log(gameboard.receiveAttack(3, 3)); 
})

// So if check for hits is false
// Tou want to proceed
// Increment the hits and all
// If not, you want to make the recieveAttack function return a value like:false
// You'll use that to ask the user to make another hit
// Since his hit wasn't legal, and he still has the turn
// No problem yet we're just thinking ahead
// For now you need to prevent incrementing if the square has been hit




















