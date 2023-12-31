import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory"; 


// coordinate test #1
test('testing to see if ship was placed at specific coordinates', () => { 
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(battleShip, 4, 3, 4, 'vertical');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    expect(updatedGameboard[4][3]).toBe(battleShip);  
}); 

// coordiante test #2 
test('testing to see if ship was placed at specific coordinates, 2nd instance', () => { 
    let patrolBoat = ship('patrol-boat', 2, 'horizontal'); 
    let gameboardFactoryCall = gameboardFactory();
    let placeShipMethod = gameboardFactoryCall.placeShip(patrolBoat, 5, 5, 2, 'horizontal');
    let updatedGameboard = gameboardFactoryCall.getGameboard();
    expect(updatedGameboard[5][5]).toBe(patrolBoat);  
    expect(updatedGameboard[5][6]).toBe(patrolBoat);  
}); 

// overlap test #1
// .toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
// test('testing to see if ship is already taken in that spot and if ships intersect or overlap', () => {
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     let destroyer = ship('Destroyer', 4, 'vertical');
//     let gameboardFactoryCall = gameboardFactory();
//     let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical');
//     expect(() => {
//         (gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical'));
//     }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
// }) 
// overlap test 1 refactor, testing same directions, vertical
test('testing to see if ship is already taken in that spot and if ships intersect or overlap', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let destroyer = ship('Destroyer', 4, 'vertical');
    let gameboardFactoryCall = gameboardFactory();
    let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical');
    expect(gameboardFactoryCall.placeShip(battleShip, 1, 3, 4, 'vertical')).toBe(false);
}) 

// overlap test #2 
// test('testing to see if ship is already taken in that spot and if ships intersect or overlap, 2nd instance', () => {
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     let destroyer = ship('Destroyer', 4, 'vertical');
//     let gameboardFactoryCall = gameboardFactory();
//     // let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
//    //  console.log(gameboardFactoryCall.getGameboard());
//     expect(() => {
//         gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
//         gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal');
//     }).toHaveReturnedWith(false);
// }) 

// test('testing to see if ship is already taken in that spot and if ships intersect or overlap, 2nd instance', () => {
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     let gameboardFactoryCall = gameboardFactory();
    
//     // Place the battleship once
//     let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal');
    
//     // Attempt to place the battleship again
//     let result = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
    
//     expect(result).toBe(false);
// });

// overlap test 2 refactor, testing with horizontal and vertical 
test('testing to see if ship is already taken in that spot and if ships intersect or overlap, 2nd instance', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let destroyer = ship('Destroyer', 4, 'vertical');
    let gameboardFactoryCall = gameboardFactory();
    let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
   //  console.log(gameboardFactoryCall.getGameboard());
//  let placeBattleship = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'vertical');
    
    //   let result = gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal');
    expect(gameboardFactoryCall.placeShip(destroyer, 0, 0, 4, 'horizontal')).toBe(false);
    // expect(result).toBe(false);
}) 

// out of bounds test, original 
// test('testing to see if ship is placed out of bounds', () => {
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     let gameboardFactoryCall = gameboardFactory();
//     expect(() => { 
//         gameboardFactoryCall.placeShip(battleShip, 7, 3, 4, 'vertical')  
//     }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
// }) 

// out of bounds test 1, refactor 
test('testing to see if ship is placed out of bounds', () => {
    let battleShip = ship('Battleship', 4, 'vertical'); 
    let gameboardFactoryCall = gameboardFactory();
    // expect(() => { 
        expect(gameboardFactoryCall.placeShip(battleShip, 7, 3, 4, 'vertical')).toBe(false);  
    // }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
}) 


// out of bounds test 2nd instance 
test('testing to see if ship is placed out of bounds, 2nd instance', () => {
    let battleShip = ship('Battleship', 4, 'horizontal'); 
    let gameboardFactoryCall = gameboardFactory();
    // expect(() => { 
        expect(gameboardFactoryCall.placeShip(battleShip, 1, 7, 4, 'horizontal')).toBe(false);     // if it hits the end return undefined? 
    // }).toThrow('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
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


// test('testing to see if a sunken ship gets added to the sunkenShips array', () => { 
//     let sunkenShipsArray = [];
//     let gameboard = gameboardFactory();
//     let battleShip = ship('Battleship', 4, 'vertical'); 
//     gameboard.placeShip(battleShip, 3, 2, 4);
//     gameboard.receiveAttack(3, 2);
//     gameboard.receiveAttack(3, 2);
//     gameboard.receiveAttack(3, 2);
//     gameboard.receiveAttack(3, 2);
//     battleShip.isSunkConditional();
//     battleShip.getShipStatus(); // true
//     sunkenShipsArray.push(battleShip);
//     expect(sunkenShipsArray).toContain(battleShip);
// }) 

test('testing to see if all ships placed on gameboard, get added to the sunkenShips array', () => { 
    // let sunkenShipsArray = [];
    const gameboard = gameboardFactory();
    // const sunkenShipsArrayTest = gameboard.sunkenShipsArray;
    // console.log(sunkenShipsArrayTest);
    const battleShip = ship('Battleship', 4, 'vertical'); 
    const destroyer = ship('Destroyer', 4, 'horizontal' );
    const patrolBoat = ship('Patrol-boat', 2, 'vertical');
    const carrierBoat = ship('Carrier', 4, 'horizontal');
    const submarine = ship('Submarine', 3, 'vertical');
    gameboard.placeShip(battleShip, 3, 2, 4, 'vertical');
    gameboard.placeShip(destroyer, 4, 5, 4, 'horizontal');
    gameboard.placeShip(patrolBoat, 0, 0, 2, 'vertical');
    gameboard.placeShip(carrierBoat, 1, 2, 4, 'horizontal');
    gameboard.placeShip(submarine, 6, 3, 3, 'vertical');
    // sinking battleship
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(5, 2);
    gameboard.receiveAttack(6, 2);
    // battleShip.isSunkConditional();
    // battleShip.getShipStatus();
    // sunkenShipsArray.push(battleShip);
    // sinking destroyer 
    gameboard.receiveAttack(4, 5);
    gameboard.receiveAttack(4, 6);
    gameboard.receiveAttack(4, 7);
    gameboard.receiveAttack(4, 8);
    // destroyer.isSunkConditional();
    // sunkenShipsArray.push(destroyer);
    // sinking patrol board
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    // patrolBoat.isSunkConditional();
    // sunkenShipsArray.push(patrolBoat);
    // sinking carrier boat
    gameboard.receiveAttack(1, 2); 
    gameboard.receiveAttack(1, 3); 
    gameboard.receiveAttack(1, 4); 
    gameboard.receiveAttack(1, 5); 
    // carrierBoat.isSunkConditional();
    // sunkenShipsArray.push(carrierBoat);
    // sinking submarine
    gameboard.receiveAttack(6, 3);
    gameboard.receiveAttack(7, 3);
    gameboard.receiveAttack(8, 3);
    // submarine.isSunkConditional();
    // sunkenShipsArray.push(submarine);
    // expect(sunkenShipsArray).toContain(battleShip);
    // expect(sunkenShipsArray).toContain(submarine);
    // expect(sunkenShipsArray).toContain(carrierBoat);
    // expect(sunkenShipsArray).toContain(destroyer);
    // expect(sunkenShipsArray).toContain(patrolBoat);
    expect(gameboard.areAllShipsSunk()).toBe(true);
}) 

// now I will write a test to make sure an error is thrown when user tries to hit the same cell twice, 

test('making sure test throws error, when user attempts to hit the same cell twice', () => { 
    const gameboard = gameboardFactory();
    const battleShip = ship('Battleship', 4, 'vertical'); 
    gameboard.placeShip(battleShip, 3, 2, 4, 'vertical');
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(5, 2);
    gameboard.receiveAttack(6, 2);
    // expect(() => { 
        expect(gameboard.receiveAttack(3, 2)).toBe(true);
    // }).toThrow('Hit was already placed at that cell, pick a different cell');
}) 

test('making sure test throws error, when user attempts to hit the same cell twice, 2nd instance', () => { 
    const gameboard = gameboardFactory();
    const destroyer = ship('Destroyer', 4, 'horizontal'); 
    gameboard.placeShip(destroyer, 6, 2, 4, 'horizontal');
    gameboard.receiveAttack(6, 2);
    gameboard.receiveAttack(6, 3);
    gameboard.receiveAttack(6, 4);
    gameboard.receiveAttack(6, 5);
    // expect(() => { 
        expect(gameboard.receiveAttack(6, 5)).toBe(true);
    // }).toThrow('Hit was already placed at that cell, pick a different cell');
})

//   expect(() => { 
//     gameboardFactoryCall.placeShip(battleShip, 1, 7, 4, 'horizontal')     // if it hits the end return undefined? 
// }).toThrow('ship is already there or ship is placed off the gameboard, 

















