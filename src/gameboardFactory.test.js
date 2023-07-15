import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory";

test('testing to see if ship is correctly placed at specified coordinates', () => { 
    let destroyer = ship('destroyer', 4);
    console.log(destroyer);
    let gameboard = gameboardFactory();
    let getUpdatedBoard = gameboard.createBoard();
    console.log(getUpdatedBoard);
    let placeSelectedShip = gameboard.placeShip([2,0],[2,0], destroyer);
    console.log(placeSelectedShip);
}) 

// test state change of the board, 

// how to place a ship, (x, y) coordinates and a ship obj

// so place the ship 

