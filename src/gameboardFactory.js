// import './shipFactory.js';
import ship from './shipFactory.js';

export default function gameboardFactory() {
  let gameboard = [];
  let allShots = [];
  // console.log(allShots);
  let hitShots = [];
  let missedShots = []; 
  let currentShips = {ship1: battleShip, ship2: destroyer, ship3: patrolBoat, ship4: submarine, ship5: carrierBoat}
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
    // if (allShots.includes(x, y)) { 
    //   return
    // } else { 
    //   allShots.push([x, y])
    // }
    const shipOnBoard = gameboard[x][y]; 
    if (typeof shipOnBoard === 'object') { 
      hitShots.push([x, y])
      shipOnBoard.hitIncrementor();
      // if (!checkForHits(x, y)) { 
      //   return false;
      // }

    } else { 
      missedShots.push([x, y])
    }
    return { 
      missedShots, 
      hitShots
  }
}   

function areAllShipsSunk() {
  for (let i = 0; i < gameboard.length; i++) { 
    let gameboardArrays = gameboard[i];
    // console.log(gameboardArrays);
    for (let j = 0; j < gameboardArrays.length; j++) { 
      let cell = gameboardArrays[j];
      console.log('currently logging array:', gameboardArrays)
       if (typeof cell === 'object') { 
        console.log(`found a ship at: [${i}, ${j}]`, cell)
       } else {
        console.log(`no ship found at: [${i}, ${j}]!`, cell)
      } 
    }
  }
} 

areAllShipsSunk();

//  let cell = gameboard[i][i];
// if (typeof cell === 'object') { 
//   console.log(cell.shipName);

// }

// function checkForHits(x, y) { 
//   for (let i = 0; i < hitShots.length; i++) { 
//     let hitCoordinate = hitShots[i];
//     console.log(hitCoordinate);
//     if (hitCoordinate === [x, y]) { 
//       return true; 
//     }
//   } 
//   return false;
// }

  return {
    getGameboard,
    placeShip,
    receiveAttack,
    checkForShip,
    hitShots,
    missedShots,
    areAllShipsSunk,
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
console.log(gameboard.areAllShipsSunk());






// console.log(battleShip.getHitCounter());
// battleShip.hitIncrementor();
// battleShip.hitIncrementor();
// battleShip.hitIncrementor();
// battleShip.hitIncrementor();
// console.log(battleShip.getHitCounter());
// console.log(battleShip.isSunkConditional());
// console.log(battleShip.getShipStatus());
// console.log(gameboardFactoryCall.receiveAttack(0, 0));
// console.log(battleShip.getShipStatus());
// console.log(gameboardFactoryCall.placeShip(carrierBoat, 0, 0, 4, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
// // console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));
// // console.log(gameboardFactoryCall.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(carrierBoat, 6, 1, 5, 'horizontal'));
// // console.log(gameboardFactoryCall.placeShip(carrierBoat, 6, 1, 5, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(submarine, 7, 2, 3, 'vertical'));
// // console.log(gameboardFactoryCall.placeShip(submarine, 7, 5, 3, 'vertical'));
// // console.log(gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal'));
// console.log(getBoard);
// console.log(gameboardFactoryCall.receiveAttack(1, 2));

// pasted in ending here
// if (checkForShip) { // flipping the value WON'T WORK!!!!!!
//   // all the code that prints a ship in here,
//   gameboard[x][y] = shipObj;

//   if (position === 'vertical') {
//     for (let i = 1; i <= length - 1; i++) {
//       gameboard[x + i][y] = shipObj;
//     }
//   }

//   if (position === 'horizontal') {
//     for (let i = 1; i <= length - 1; i++) {
//       gameboard[x][y + i] = shipObj;
//     }
//   }
// } else {
//   return;
// }

// gameboard[x][y] = shipObj;

// if (position === 'vertical') {
//   for (let i = 1; i <= length - 1; i++) {
//     gameboard[x + i][y] = shipObj;
//   }
// }

// if (position === 'horizontal') {
//   for (let i = 1; i <= length - 1; i++) {
//     gameboard[x][y + i] = shipObj;
//   }
// }

// console.log(gameboardFactoryCall.checkForShip(7, 2, 3, 'vertical'));

// try {
//   let gameboardFactoryCall = gameboardFactory();
//   let getBoard = gameboardFactoryCall.getGameboard();
//   console.log(gameboardFactoryCall.placeShip(battleShip, 1, 2, 4, 'vertical'));
//   // console.log(gameboardFactoryCall.placeShip(carrierBoat, 1, 2, 4, 'vertical'));
//   console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
// } catch (Error) {
//   console.log(Error);
// }

// receive attack function

// function receiveAttack(x, y) {
// get the board, in order to know if ship is hit, look at board
//  let checkGameboard = getGameboard()
// if (checkGameboard[x][y] === shipObj) {
// if the coordinates given, match a ship obj
// hitCounter increases on the that ship
// } else {
// coordinates do not match, log the missed coordinates, and save as a miss hit,
// }
// }

// let patrolBoatLength = patrolBoat.shipLength;
// let patrolBoatCoordinates =
// console.log(patrolBoatCoordinates);

// experiment
// console.log(gameboardFactoryCall.placeShip(patrolBoat, (1 + patrolBoatLength), (1  + patrolBoatLength)));
// console.log(getBoard);

// how can the ship expand it's full length?

// can I place multiple ships on the board?
// can the ship span it's full length?
// is another ship already in it's spot?

// continue to work on placeShip function and it's test,
// right now it works for one location, can it work for another?
// can we properly place ships at location or is another ship already there blocking it?
// horizontal and vertical?

//   function getGameboard() {
//     return gameboard;
//   }

//   function placeShip(length, start, vertical) {
//     const newShip = ship(length);

//     if (vertical === true) {
//       for (let i = 0; i < length; i++) {
//         if (typeof this.getGameboard()[start[0]][start[1] + i] === "object")
//           throw new Error("Overlap");

//         this.getGameboard()[start[0]][start[1] + i] = newShip;
//       }
//     } else if (vertical === false) {
//       for (let i = 0; i < length; i++) {
//         if (typeof this.getGameboard()[start[0] + i][start[1]] === "object")
//           throw new Error("Overlap");

//         this.getGameboard()[start[0] + i][start[1]] = newShip;
//       }
//     } else throw new Error("Invalid direction; vertical must be true or false");
//   }

//   return { getGameboard, placeShip };
// }

//   function placeShip(x, y, shipObj, number, shipDirection) {
//     let coordinateX = x;
//     let coordinateY = y;
//     let selectedShip = shipObj;
//     let selectedShipDirection = shipDirection;
//     let selectedShipNumber = number;
//     let gameboard = gameboardFactory().createBoard();

//     gameboard[coordinateX][coordinateY] = selectedShipNumber;
//     return gameboard;
//   }
//   return {
//     placeShip,
//     getGameboard
//   };
// }

// console.log(gameboardFactory().getGameboard());

// let myGameboard = gameboardFactory();
// let destroyer = ship('destroyer', 4, 1, 'vertical');
// console.log(myGameboard.placeShip([0], [0], destroyer, 1, 'vertical'));