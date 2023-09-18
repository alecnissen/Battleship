import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
// import { allPlayerShipsPlaced, placeComputerShips }  from './domLogic.js';
import { playerGameboard, computerGameboard } from './domLogic.js';
import { determineIfHitOrMiss } from './domLogic.js';
import { determineIfHitOrMissComputer } from './domLogic.js';

let currentPlayerGameboard = playerGameboard; 
let currentComputerGameboard = computerGameboard;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
let currentHitShotsArray = currentComputerGameboard.gameboard.hitShots;
let currentMissedShotsArray = currentComputerGameboard.gameboard.missedShots;

export default function createPlayer(name, type) { 
    if(type === 'computer') {
      const computerName = playerFactory(name); // add turn var
      return computerName;
    } else {
      const playerName = playerFactory(name);   // add turn var
      return playerName;
    }
  } 

  export function checkForWinner(userObj) { 
    console.log('CHECKING FOR WINNER!');
    const selectedUser = userObj;
    if (selectedUser.gameboard.areAllShipsSunk()) { 
      // access another helper function to print a victory message/modal pop-up
      return true;
    } 
    return false;
  } 


  export function attack(userObj, x, y) { 
    const selectedUser = userObj;
    selectedUser.gameboard.receiveAttack(x, y); 
    determineIfHitOrMiss(selectedUser, x, y);
  } 

  export function computerAttack(userObj, x, y) { 
    const selectedUser = userObj;
    selectedUser.gameboard.receiveAttack(x, y); 
    determineIfHitOrMissComputer(selectedUser, x, y);

  } 

  // const openModal = function() {
  //   modal.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
  // };

function openModal(user) { 
  let currentUser = user;
  console.log(currentUser);
  let winnerName = currentUser.name;
  console.log(winnerName);
  let winnerTitleInModal = document.getElementById('winner-display-title');
  winnerTitleInModal.textContent = `${winnerName} WINS!`;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}



  function determineIfInsideHitShotArray(x, y) { 
    for (let i = 0; i < currentHitShotsArray.length; i++) { 
      let currentHit = currentHitShotsArray[i];
      console.log('currentHit variable', currentHit);
      console.log(JSON.stringify(currentHit))
      console.log(JSON.stringify([x, y]));
      if (JSON.stringify(currentHit) === JSON.stringify([x, y])) { 
        return true; 
      }
    }
    return false;
  } 

  function determineIfInsideMissedShotArray(x, y) { 
    for (let i = 0; i < currentMissedShotsArray.length; i++) { 
      let currentMiss = currentMissedShotsArray[i];
      if (JSON.stringify(currentMiss) === JSON.stringify([x, y])) { 
        return true; 
      }
    }
    return false;
  } 

  function determineIfInsideHitShotArrayComputer(x, y) { 
    for (let i = 0; i < currentHitShotsArray.length; i++) { 
      let currentHit = currentHitShotsArray[i];
      console.log('currentHit from hit shot array', currentHit);
      // console.log(JSON.stringify(currentHit))
      // console.log(JSON.stringify([x, y]));
      if (JSON.stringify(currentHit) === JSON.stringify([x, y])) { 
        return true; 
      }
    }
    return false;
  } 

  function determineIfInsideMissedShotArrayComputer(x, y) { 
    for (let i = 0; i < currentMissedShotsArray.length; i++) { 
      let currentMiss = currentMissedShotsArray[i];
      console.log('current miss coordinate from missed shot array', currentMiss)
      if (JSON.stringify(currentMiss) === JSON.stringify([x, y])) { 
        return true; 
      }
    }
    return false;
  }


  export function playGame(xCoordinate, yCoordinate) { 
    let playerTurn = 1; 
    console.log('logging player turn variable after init', playerTurn);
      
    if (playerTurn === 1) {
      let playerMarkX = xCoordinate;
      let playerMarkY = yCoordinate;

      console.log(!determineIfInsideHitShotArray(playerMarkX, playerMarkY) && (!determineIfInsideMissedShotArray(playerMarkX, playerMarkY)));

      if (!determineIfInsideHitShotArray(playerMarkX, playerMarkY) && (!determineIfInsideMissedShotArray(playerMarkX, playerMarkY))) { 

      attack(currentComputerGameboard, playerMarkX, playerMarkY); 
      console.log('logging player turn variable before player attack', playerTurn);
      playerTurn = 2;
      console.log('logging player turn variable after player attack', playerTurn);
      } else { 
        return;
      }

      console.log('COMPUTERS GAMEBOARD AFTER PLAYER ATTACK', currentComputerGameboard);

      if (checkForWinner(currentComputerGameboard)) { 
        console.log('PLAYER WINS');
        openModal(playerGameboard);
        return; // print/access winner modal
      }
      // playerTurn = 2;
    } 
    // else { 
      console.log('ELSE STATEMENT CHECK!')
      const randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
      const randomCoordinate2 = Math.floor(Math.random() * 9) + 1;
      // computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
      console.log('PLAYERS GAMEBOARD AFTER COMPUTER ATTACK', currentPlayerGameboard);
      console.log('RANDOM COORDINATES SELECTED FROM COMPUTER', randomCoordinate1, randomCoordinate2);

      if (!determineIfInsideHitShotArrayComputer(randomCoordinate1, randomCoordinate2) && (!determineIfInsideMissedShotArrayComputer(randomCoordinate1, randomCoordinate2))) { 
        computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
        console.log('logging player turn variable before computer attack', playerTurn);
        playerTurn = 1;
        console.log('logging player turn variable after computer attack', playerTurn);
      } else { 
        return;
      }

      if (checkForWinner(currentPlayerGameboard)) { 
        console.log('COMP WINS');
        return; 
      } 
      // playerTurn = 1;
    } 
  







  // export function placeShipsOnPlayersBoard(user) { 
  //   const player = user; 
  //   const battleShip = ship('Battleship', 4, 'vertical');
  //   const destroyer = ship('Destroyer', 4, 'horizontal' );
  //   const patrolBoat = ship('Patrol-boat', 2, 'vertical');
  //   const carrierBoat = ship('Carrier', 4, 'horizontal');
  //   const submarine = ship('Submarine', 3, 'vertical');
  //   // const player = createPlayer('player', 'player');
  //   // console.log(player);
  //   const getPlayerBoard = player.gameboard.getGameboard();
  //   const placeBattleShip = player.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
  //   const placeDestroyer = player.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
  //   const placePatrolBoat = player.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
  //   const placeCarrierBoat = player.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
  //   const placeSubmarine = player.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
  //   console.log(getPlayerBoard);
  //   return getPlayerBoard;
  // } 

  // export function placeShipsOnComputersBoard(user) { 
  //   const computer = user;
  //   const battleShip = ship('Battleship', 4, 'vertical');
  //   const destroyer = ship('Destroyer', 4, 'horizontal' );
  //   const patrolBoat = ship('Patrol-boat', 2, 'vertical');
  //   const carrierBoat = ship('Carrier', 4, 'horizontal');
  //   const submarine = ship('Submarine', 3, 'vertical');
  //   // const computer = createPlayer('PC', 'computer');
  //   const getComputerBoard = computer.gameboard.getGameboard();
  //   const placeBattleShip = computer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
  //   const placeDestroyer = computer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
  //   const placePatrolBoat = computer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
  //   const placeCarrierBoat = computer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
  //   const placeSubmarine = computer.gameboard.placeShip(submarine, 7, 4, 3, 'horizontal');
  //   console.log(getComputerBoard);
  //   return getComputerBoard;

  // }


















  //  // sunk battleship
  //  attack(player, 0, 0); 
  //  attack(player, 0, 1); 
  //  attack(player, 0, 2); 
  //  attack(player, 0, 3); 
  //  // sunk destroyer
  //  attack(player, 1, 2); 
  //  attack(player, 1, 3); 
  //  attack(player, 1, 4); 
  //  attack(player, 1, 1); 
  //  // sunk patrol boat
  //  attack(player, 2, 2); 
  //  attack(player, 2, 3); 
  //  // sunk carrier boat 
  //  attack(player, 3, 3); 
  //  attack(player, 3, 4); 
  //  attack(player, 3, 5); 
  //  attack(player, 3, 6); 
  //  // sunk submarine
  //  attack(player, 4, 4); 
  //  attack(player, 4, 5); 
  //  attack(player, 4, 6); 



// // sunk battleship
      // attack(computer, 0, 0); 
      // attack(computer, 0, 1); 
      // attack(computer, 0, 2); 
      // attack(computer, 0, 3); 
      // // sunk destroyer
      // attack(computer, 1, 1); 
      // attack(computer, 1, 2); 
      // attack(computer, 1, 3); 
      // attack(computer, 1, 4); 
      // // sunk patrol boat
      // attack(computer, 2, 2); 
      // attack(computer, 2, 3); 
      // // sunk carrier boat 
      // attack(computer, 3, 3); 
      // attack(computer, 3, 4); 
      // attack(computer, 3, 5); 
      // attack(computer, 3, 6); 
      // // sunk submarine
      // attack(computer, 7, 4); 
      // attack(computer, 7, 5); 
      // attack(computer, 7, 6); 











  // old attack function
  // function attack(user1, user2,) { 
  //   let computer = user1;
  //   let player = user2;

  //   console.log(computer);
  //   console.log('computers userTurn value before attack',computer.userTurn);
  //   console.log('players userTurn value before attack', player.userTurn);

  //   if (player.userTurn === true) { 
  //     // if true let player make attack, on computers gameboard
  //     console.log(computer.gameboard.receiveAttack(3, 3));
  //     player.userTurn = false;
  //     console.log('players userTurn value after attack', player.userTurn)
  //     computer.userTurn = true;
  //     console.log('computers userTurn value after attack', computer.userTurn)
  //   } 

  //   console.log('players userTurn value attack, outside if block', player.userTurn);

  //   if (computer.userTurn === true) { 
  //     console.log(player.gameboard.receiveAttack(1, 2));
  //     computer.userTurn = false;
  //     console.log('computers userTurn value after attack', computer.userTurn);
  //     player.userTurn = true;
  //     console.log('players userTurn value after comp attack', player.userTurn);
  //   } 
  // }

// console.log(createPlayer('Alec', 'player')); 

// let testPlayer = createPlayer('Alec', 'player');



// console.log(placeShipsOnPlayersBoard(testPlayer));












// export default function playGame() { 

//     function createPlayerName(name) { 
//         const playerName = playerFactory(name);
//         // console.log(player.gameboard.receiveAttack(3, 3));
//         return playerName;
//     } 

    // function createComputerName(name) { 
    //     const computerName = playerFactory(name);
    //     return computerName;
    // } 

    // function placeShipsPlayerBoard() { 
    //     // create all ships objects within here, then place them on the board, 
    //     // just place them
    //     const battleShip = ship('Battleship', 4, 'vertical');
    //     const destroyer = ship('Destroyer', 4, 'horizontal' );
    //     const patrolBoat = ship('Patrol-boat', 2, 'vertical');
    //     const carrierBoat = ship('Carrier', 4, 'horizontal');
    //     const submarine = ship('Submarine', 3, 'vertical');

    //     const getPlayer = createPlayerName('Alec');
    //     const getPlayerBoard = getPlayer.gameboard.getGameboard();
    //     const placeBattleShip = getPlayer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
    //     const placeDestroyer = getPlayer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
    //     const placePatrolBoat = getPlayer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
    //     const placeCarrierBoat = getPlayer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
    //     const placeSubmarine = getPlayer.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
    //     console.log(placeBattleShip);
    //     // console.log(destroyer);
    //     return getPlayerBoard;
    // }

    // function placeShipsComputerBoard() { 
    //     const battleShip = ship('Battleship', 4, 'vertical');
    //     const destroyer = ship('Destroyer', 4, 'horizontal' );
    //     const patrolBoat = ship('Patrol-boat', 2, 'vertical');
    //     const carrierBoat = ship('Carrier', 4, 'horizontal');
    //     const submarine = ship('Submarine', 3, 'vertical');

    //     const getComputerPlayer = createComputerName('Computer');
    //     const getComputerBoard = getComputerPlayer.gameboard.getGameboard();
    //     const placeBattleShip = getPlayer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
    //     const placeDestroyer = getPlayer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
    //     const placePatrolBoat = getPlayer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
    //     const placeCarrierBoat = getPlayer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
    //     const placeSubmarine = getPlayer.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
    // }

//     return { 
//         createPlayerName,
//         // createComputerName,
//         // placeShipsPlayerBoard,
//         // placeShipsComputerBoard,
//     }
// } 


// making a method for retrieving player and computer, 
// let playGameTest = playGame().createPlayerName('Alec');
// let playGameCompTest = playGame().createComputerName('cypress');

// console.log(playGameTest);
// console.log(playGameCompTest);

// console.log(playGame().placeShipsPlayerBoard());

// looking at the directions where do I start? 

// 