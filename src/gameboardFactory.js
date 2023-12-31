// import './shipFactory.js';
import ship from './shipFactory.js';

export default function gameboardFactory() {
  let gameboard = [];
  let allShots = [];
  let hitShots = [];
  let missedShots = []; 
  let sunkenShipsArray = [];
  for (let i = 0; i < 10; i++) {
    gameboard.push(['', '', '', '', '', '', '', '', '', '']);
  } 

  function getGameboard() {
    return gameboard;
  }
// previously for (let i = 1; i <= length - 1; i++) 
// changed to 0, i < length, 
// this works too for (let i = 0; i <= length - 1; i++)

  function checkForShip(x, y, length, position) { 
    if (position === 'vertical') { 
      for (let i = 0; i < length; i++) { 
        if (x + i > 9) { 
          return false 
        }     
        if (gameboard[x + i][y] !== '') {
          return false;
        } 
      }
    }
    if (position === 'horizontal') {
      for (let i = 0; i < length; i++) { 
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
      // throw new Error('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
      console.log('ERROR SHIP OVERLAP! Current shipObj is', shipObj);
     return false;
     } 
     // else if (checkForShip(x, y, length, position)) { // recently added the else if 
    gameboard[x][y] = shipObj;
     
    if (position === 'vertical') {
      for (let i = 0; i < length; i++) {
        gameboard[x + i][y] = shipObj;
      }
    }

    if (position === 'horizontal') {
      for (let i = 0; i < length; i++) {
        gameboard[x][y + i] = shipObj;
      }
    }
    return gameboard;
  // } 
} 

function checkForHits(x, y) { 
    for (let i = 0; i < hitShots.length; i++) { 
      const hitShotCoordinates = hitShots[i];
      if (JSON.stringify(hitShotCoordinates) === JSON.stringify([x, y])) {
        return true; 
      }
    }
    return false;
  } 

  function checkForDuplicateMissedShots(x, y) { 
    for (let i = 0; i < missedShots.length; i++) { 
      const missedShotCoordinates = missedShots[i];
      if (JSON.stringify(missedShotCoordinates) === JSON.stringify([x, y])) {
        return true; 
      } 
    }
    return false;
    } 

    // ok so we go thru the hit and missed shots but we need to go thru the gameboard and figure out if a cell is already occupied, 
    // loop thru gameboard and determine if cell is free, then player can make their attack, 
  

// allows user to place hits on the board if the hit is valid, 
  function receiveAttack(x, y) { 
    const shipOnBoard = gameboard[x][y]; 
    if (typeof shipOnBoard === 'object') { 
      if (checkForHits(x, y)) {
        // if there is already a hit there, 
        // check to make sure same cell is not being hit twice, 
         // throw new Error('Hit was already placed at that cell, pick a different cell');
         return true;
      } 
      shipOnBoard.hitIncrementor();
      hitShots.push([x, y])

      if (shipOnBoard.getShipStatus()) { 
        console.log(sunkenShipsArray);
       //  if (!sunkenShipsArray.includes(shipOnBoard)) { 
        sunkenShipsArray.push(shipOnBoard);
        // } 
      }

    } else { 
      // check if these coordinates are in missedShot array, if they are not, push them into missedShot array, 
      // if false, meaning coordinates are not inside the missed coords array then push unique coords in, 
      if (!checkForDuplicateMissedShots(x, y)) { 
      missedShots.push([x, y]) 
      } 
    } 
    return { 
      missedShots, 
      hitShots
  }
}   

function areAllShipsSunk() { 
  console.log('all ships sunk function, logging current sunkenShipsArray', sunkenShipsArray);
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
    sunkenShipsArray,
    checkForHits
  };
} 


let battleShip = ship('Battleship', 4, 'vertical');
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 4, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');
let gameboard = gameboardFactory();







// gameboard.placeShip(battleShip, 3, 2, 4, 'vertical');
// gameboard.placeShip(destroyer, 4, 5, 4, 'horizontal');
// gameboard.placeShip(patrolBoat, 0, 0, 2, 'vertical');
// gameboard.placeShip(carrierBoat, 1, 2, 4, 'horizontal');
// gameboard.placeShip(submarine, 6, 3, 3, 'vertical');
// // sinking battleship
// gameboard.receiveAttack(3, 2);
// // gameboard.receiveAttack(3, 2);
// gameboard.receiveAttack(4, 2);
// gameboard.receiveAttack(5, 2);
// gameboard.receiveAttack(6, 2);
// gameboard.areAllShipsSunk();
// // sinking destroyer 
// gameboard.receiveAttack(4, 5);
// gameboard.receiveAttack(4, 6);
// // gameboard.receiveAttack(4, 5);
// gameboard.receiveAttack(4, 7);
// gameboard.receiveAttack(4, 8);
// gameboard.areAllShipsSunk();
// // sinking patrol board
// gameboard.receiveAttack(0, 0);
// gameboard.receiveAttack(1, 0);
// gameboard.areAllShipsSunk();
// // sinking carrier boat
// gameboard.receiveAttack(1, 2); 
// gameboard.receiveAttack(1, 3); 
// gameboard.receiveAttack(1, 4); 
// gameboard.receiveAttack(1, 5); 
// gameboard.areAllShipsSunk();
// // sinking submarine
// gameboard.receiveAttack(6, 3);
// gameboard.receiveAttack(7, 3);
// gameboard.receiveAttack(8, 3);
// gameboard.areAllShipsSunk();

// console.log(JSON.parse(JSON.stringify(gameboard.sunkenShipsArray)));
// console.log('checking the array after ships are placed and sunk', gameboard.sunkenShipsArray);
// console.log(gameboard.getGameboard());
// console.log('checking what the areAllShipsSunk conditional returns', gameboard.areAllShipsSunk());  

// console.log(gameboard.hitShots);
// console.log(gameboard.missedShots);








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


