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

  // i am checking if the ship placement is valid before placing anything 
  // but what am I passing to check ship the same parameters???, if object is not there, do I just pass the same obj and coordinates 
  // back to place ship? 

  // what am I passing to checkForShip, once the if block fails, do I just call placeShip again 
  // passing the same parameters 

  // I feel like I need a guard clause to check if the ship placement is valid, 
  // do I pass the same parameters to checkForShip? 
  // once the if block fails, and ship placement is valid, do I pass the same parameters back to placeShip 
  // that seems like it would cause an infinete loop and that I'm hard coding my values 

// should work just like placeSHip, 
// input coordinates, position, 
// if the coordinates in the gameboard and the position is x, return true or false, 
// pass the same coordinates, no need for variables, because when you call placeShip the parameters 
// are already filled in. 
// asfdasd

  function checkForShip(shipObj, x, y, length, position) { 
    let xCoordinate = x; 
    let yCoordinate = y;
    let lengthOfShip = length;
    let shipPosition = position;
    // console.log(xCoordinate);
    // console.log(yCoordinate);
    // console.log(lengthOfShip);
    // console.log(shipPosition);


  //   if (typeof gameboard[x][y] === 'object') { 
  //     console.log('ship is already there');
  //     return true;
  //   } 
  //  return false; 

  console.log(x);
  console.log(y);

  // coordinates are getting passed in, why is it still placing ships, when I am placing a ship 
  // at the same location, it should stop placing ships

  if (position === 'vertical') { 
    for (let i = 1; i <= length - 1; i++) { 
      if (typeof gameboard[x + i][y] === 'object') { 
      return false
      }
    } 
    
  } 
  if (position === 'horizontal') { 
    for (let i = 1; i <= length - 1; i++) { 
      if (typeof gameboard[x][y + i] === 'object') { 
      return false
      } 
    }
  }
  return true;
}

function placeShip(shipObj, x, y, length, position) {  
    console.log(typeof checkForShip);
    if (!checkForShip(shipObj, x, y, length, position)) { 
      throw new Error('ship is already there');
      // return;
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

let battleShip = ship('Battleship', 4, 'vertical'); 
let destroyer = ship('Destroyer', 4, 'horizontal' );
let patrolBoat = ship('Patrol-boat', 2, 'vertical');
let carrierBoat = ship('Carrier', 5, 'horizontal');
let submarine = ship('Submarine', 3, 'vertical');
let gameboardFactoryCall = gameboardFactory();
let getBoard = gameboardFactoryCall.getGameboard();
console.log(gameboardFactoryCall.placeShip(battleShip, 1, 2, 4, 'vertical'));
// console.log(gameboardFactoryCall.placeShip(carrierBoat, 1, 2, 4, 'vertical'));
console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(destroyer, 3, 4, 4, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(patrolBoat, 4, 7, 2, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(carrierBoat, 6, 1, 5, 'horizontal'));
// console.log(gameboardFactoryCall.placeShip(carrierBoat, 6, 1, 5, 'horizontal'));
console.log(gameboardFactoryCall.placeShip(submarine, 7, 2, 3, 'vertical'));
// console.log(gameboardFactoryCall.placeShip(submarine, 7, 5, 3, 'vertical'));
// console.log(gameboardFactoryCall.placeShip(battleShip, 0, 0, 4, 'horizontal'));
console.log(getBoard);
console.log(gameboardFactoryCall.receiveAttack(1, 2)); 




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




