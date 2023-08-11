// import './shipFactory.js';
import ship from './shipFactory.js';

export default function gameboardFactory() {
  let gameboard = [];
  let allShots = [];
  let hitShots = [];
  let missedShots = []; 
  let sunkenShipsArray = []; 
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
      shipOnBoard.isSunkConditional();
      shipOnBoard.getShipStatus();
      // console.log(sunkenShipsArray);
      if (shipOnBoard.getShipStatus()) { 
        sunkenShipsArray.push(shipOnBoard);
        // areAllShipsSunk();
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
  console.log(sunkenShipsArray); // logs array
  console.log(sunkenShipsArray.length === 5) // returns true when logged in jest
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
let carrierBoat = ship('Carrier', 5, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');
let gameboard = gameboardFactory();

console.log(gameboard.placeShip(battleShip, 0, 0, 4, 'vertical'));
console.log(gameboard.placeShip(destroyer, 5, 3, 4, 'vertical'));
console.log(gameboard.placeShip(carrierBoat, 1, 2, 4, 'horizontal'));
console.log(gameboard.placeShip(submarine, 3, 4, 4, 'horizontal'));
console.log(gameboard.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));

gameboard.receiveAttack(0, 0);
gameboard.receiveAttack(0, 0);
gameboard.receiveAttack(0, 0);
gameboard.receiveAttack(0, 0);
battleShip.isSunkConditional();
battleShip.getShipStatus();
gameboard.sunkenShipsArray.push(battleShip);
// sinking destroyer 
gameboard.receiveAttack(5, 3);
gameboard.receiveAttack(5, 3);
gameboard.receiveAttack(5, 3);
gameboard.receiveAttack(5, 3);
destroyer.isSunkConditional();
gameboard.sunkenShipsArray.push(destroyer);
// sinking patrol board
gameboard.receiveAttack(4, 7);
gameboard.receiveAttack(4, 7);
patrolBoat.isSunkConditional();
gameboard.sunkenShipsArray.push(patrolBoat);
// sinking carrier boat
gameboard.receiveAttack(1, 2); 
gameboard.receiveAttack(1, 2); 
gameboard.receiveAttack(1, 2); 
gameboard.receiveAttack(1, 2); 
carrierBoat.isSunkConditional();
gameboard.sunkenShipsArray.push(carrierBoat);
// sinking submarine
gameboard.receiveAttack(3, 4);
gameboard.receiveAttack(3, 4);
gameboard.receiveAttack(3, 4);
submarine.isSunkConditional();
submarine.getShipStatus();
gameboard.sunkenShipsArray.push(submarine);



console.log(gameboard.sunkenShipsArray);
console.log(gameboard.areAllShipsSunk()); 


// the problem is my code passes in jest, the test function returns true meaning all the ships have been sunk, 

// I can log the array tha holds the sunken ships, all are inside the array 

//  but yet it will still return false. 






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


