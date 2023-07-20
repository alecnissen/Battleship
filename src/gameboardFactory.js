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

  function placeShip(shipObj, x, y) { 
    getGameboard();
    // let board = gameboardFactory().getGameboard();
    gameboard[x][y] = shipObj;
    return gameboard;
  } 

  return { 
    getGameboard,
    placeShip,
  }
} 

let battleShip = ship('Battleship', 4, 'vertical'); 
console.log(gameboardFactory().getGameboard());
console.log(gameboardFactory().placeShip(battleShip, 0, 0));




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




