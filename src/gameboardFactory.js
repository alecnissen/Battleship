// import './shipFactory.js';
import ship from './shipFactory.js';

export default function gameboardFactory() {
  let gameboard = [];
  let allShots = [];
  let hitShots = [];
  let missedShots = []; 
  let sunkenShipsArray = []; // how are the sunken ships already being added? 
  // console.log(sunkenShipsArray);
  console.log('sunkenShipsArray right after init', sunkenShipsArray)
  // let currentShips = {ship1: battleShip, ship2: destroyer, ship3: patrolBoat, ship4: submarine, ship5: carrierBoat}
  for (let i = 0; i < 10; i++) {
    gameboard.push(['', '', '', '', '', '', '', '', '', '']);
  }

  function getGameboard() {
    return gameboard;
  }

  function checkForShip(x, y, length, position) { 
    if (position === 'vertical') { 
      for (let i = 1; i <= length - 1; i++) { 
        if (x + i > 9) { 
          return false 
        }     

        if (gameboard[x + i][y] !== '') {
          return false;
        } 
      }
    }

    if (position === 'horizontal') {
      for (let i = 1; i <= length - 1; i++) { 

        if (y + i > 9) { 
          return false;
        }

        if (gameboard[x][y + i] !== '') {
          return false;
        }
      }
    }
    return true;
  }

  function placeShip(shipObj, x, y, length, position) {
    if (!checkForShip(x, y, length, position)) {
      throw new Error('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard'
      );
    }
    gameboard[x][y] = shipObj;

    if (position === 'vertical') {
      for (let i = 1; i <= length - 1; i++) {
        gameboard[x + i][y] = shipObj;
      }
    }

    if (position === 'horizontal') {
      for (let i = 1; i <= length - 1; i++) {
        gameboard[x][y + i] = shipObj;
      }
    }
    return gameboard;
  } 

  function receiveAttack(x, y) { 
    const shipOnBoard = gameboard[x][y]; 
    if (typeof shipOnBoard === 'object') { 
      hitShots.push([x, y])
      shipOnBoard.hitIncrementor();
      // shipOnBoard.isSunkConditional();
      // shipOnBoard.getShipStatus();
      // console.log(sunkenShipsArray);
      // console.log(shipOnBoard.getShipStatus());
      if (shipOnBoard.getShipStatus()) { 
        sunkenShipsArray.push(shipOnBoard);
        // console.log(shipOnBoard.getShipStatus());
      }

    } else { 
      missedShots.push([x, y])
    }
    return { 
      missedShots, 
      hitShots
  }
}   

function areAllShipsSunk() { 
  console.log('checking if all ships are sunk, within areAllShipsSunk method', sunkenShipsArray); // logs array
  console.log('checking the conditional within areAllShipsSunk method', sunkenShipsArray.length === 5) // returns true when logged in jest
  if (sunkenShipsArray.length === 5) { 
    return true;
  } 
  return false;
} 

  return {
    getGameboard,
    placeShip,
    receiveAttack,
    checkForShip,
    hitShots,
    missedShots,
    areAllShipsSunk,
    sunkenShipsArray
  };
} 


let battleShip = ship('Battleship', 4, 'vertical');
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 4, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');
let gameboard = gameboardFactory();


console.log('sunkenShipsArray before placing any of the ships',gameboard.sunkenShipsArray); // no ships have been sunk yet, why does the array still have all the sunken ships??? Variable hoisting? 

// how are the ships still being added to the array? I have not yet placed or sunk any ships, 
// and the test is commented out, why are ships still being added to the array? 

// console.log(gameboard.areAllShipsSunk()); // should be false

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
// gameboard.sunkenShipsArray.push(battleShip); // I did not have to push again, just call the function which will push ship only if sunk, ship were being added twice 
// so the array length was never 5, it would always equal false, 
gameboard.areAllShipsSunk();
// sinking destroyer 
gameboard.receiveAttack(4, 5);
gameboard.receiveAttack(4, 6);
gameboard.receiveAttack(4, 7);
gameboard.receiveAttack(4, 8);
// destroyer.isSunkConditional();
// gameboard.sunkenShipsArray.push(destroyer);
gameboard.areAllShipsSunk();
// sinking patrol board
gameboard.receiveAttack(0, 0);
gameboard.receiveAttack(1, 0);
// patrolBoat.isSunkConditional();
// gameboard.sunkenShipsArray.push(patrolBoat);
gameboard.areAllShipsSunk();
// sinking carrier boat
gameboard.receiveAttack(1, 2); 
gameboard.receiveAttack(1, 3); 
gameboard.receiveAttack(1, 4); 
gameboard.receiveAttack(1, 5); 
// carrierBoat.isSunkConditional();
// gameboard.sunkenShipsArray.push(carrierBoat);
gameboard.areAllShipsSunk();
// sinking submarine
gameboard.receiveAttack(6, 3);
gameboard.receiveAttack(7, 3);
gameboard.receiveAttack(8, 3);
// submarine.isSunkConditional();
// submarine.getShipStatus();
// gameboard.sunkenShipsArray.push(submarine);
gameboard.areAllShipsSunk();



console.log('checking the array after ships are placed and sunk', gameboard.sunkenShipsArray);
console.log(gameboard.getGameboard());
console.log('checking what the areAllShipsSunk conditional returns', gameboard.areAllShipsSunk()); 








// console.log(areAllShipsSunk());

// function areAllShipsSunk() {
//   let allShips = 5;
//   let sunkShips = [];
//   for (let i = 0; i < gameboard.length; i++) { 
//     let gameboardArrays = gameboard[i];
//     for (let j = 0; j < gameboardArrays.length; j++) { 
//       let cell = gameboardArrays[j];
//       console.log('currently logging array:', gameboardArrays)
//        if (typeof cell === 'object') { // checking only one ship, how to check all
//         console.log(`found a ship at: [${i}, ${j}]`, cell)
//         cell.isSunkConditional();
//         if (cell.getShipStatus()) { 
//             return true;
//         }
//        } else { 
//         console.log(`no ship found at: [${i}, ${j}]!`, cell)
//       } 
//     }
//   } 
//   return false; 
// } 


