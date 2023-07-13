import ship from './shipFactory';

// test the methods within the function, 

test('testing to see if hit incrementor function is incrementing and getHitIncrementor returns 2', () => { 
    let battleShip = ship('Battleship', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    expect(battleShip.getHitIncrementor()).toBe(2);
}) 

test('testing to see if the isSunkConditional and getShipStatus functions are returning the correct status, isSunk within getShipStatus should return true if hitCounter >= length', () => {
    let battleShip = ship('Battleship', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    battleShip.isSunkConditional();
    expect(battleShip.getShipStatus()).toBe(true);
})