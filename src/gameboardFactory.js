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

  function placeShip(shipObj, x, y, length, position) { 
    getGameboard(); 
    gameboard[x][y] = shipObj;
    return gameboard;
  } 

  return { 
    getGameboard,
    placeShip,
  }
} 

let battleShip = ship('Battleship', 4, 'vertical'); 
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let gameboardFactoryCall = gameboardFactory();
let getBoard = gameboardFactoryCall.getGameboard();
// console.log(gameboardFactory().getGameboard());
console.log(gameboardFactoryCall.placeShip(battleShip, 6, 8));
// console.log(gameboardFactory().getGameboard());
console.log(gameboardFactoryCall.placeShip(destroyer, 5, 5));
console.log(gameboardFactoryCall.placeShip(patrolBoat, 1, 1));
console.log(getBoard);



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




