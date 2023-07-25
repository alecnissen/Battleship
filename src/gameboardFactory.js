// import './shipFactory.js';
import ship from './shipFactory.js';

export default function gameboardFactory() {
  let gameboard = [];
  for (let i = 0; i < 10; i++) { 
    gameboard.push([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  } 

  function getGameboard() { 
    return gameboard;
  } 

  function checkForShip(x, y, length, position) { 
    let isShipThere

    console.log(gameboard);
    if (gameboard[x][y] === 'object') { 
      console.log('ship is already there');
      shipThere = true;
      throw new Error('ship is already there') // or use alert 
    } else if (gameboard[x][y] !== 'object') { 
      isShipThere = false; 
      // call placeShip and let it place the ship 
    }
    return isShipThere;
  }

   
  function placeShip(shipObj, x, y, length, position) {  
    // checkForShip() // pass in parameters, 
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
    let coordinates = gameboard[x][y];
    
    if (typeof coordinates === 'object') { 
      console.log('you hit a ship!');
    } else { 
      console.log('you missed!');
    }
    return coordinates;
  }

  return { 
    getGameboard,
    placeShip,
    receiveAttack,
    checkForShip,
  }
} 

// conditional '

// loop lenvth

let battleShip = ship('Battleship', 4, 'vertical'); 
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 5, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');
let gameboardFactoryCall = gameboardFactory();
let getBoard = gameboardFactoryCall.getGameboard();
console.log(gameboardFactoryCall.placeShip(battleShip, 1, 2, 4, 'vertical'));
// console.log(gameboardFactoryCall.placeShip(carrierBoat, 7, 2, 3, 'vertical'));
console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(carrierBoat, 6, 1, 5, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(submarine, 7, 2, 3, 'vertical'));
console.log(getBoard);
console.log(gameboardFactoryCall.receiveAttack(1, 2));

console.log(gameboardFactoryCall.checkForShip(7, 2, 3, 'vertical'));

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




