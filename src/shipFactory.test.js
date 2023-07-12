const ship = require('./shipFactory');

// test the methods within the function, 

test('testing to see if hit incrementor function is incrementing and getHitIncrementor returns 2', () => { 
    let battleShip = ship('Battleship', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    expect(battleShip.getHitIncrementor()).toBe(2);
}) 

