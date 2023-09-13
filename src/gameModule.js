import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';
// import { allPlayerShipsPlaced, placeComputerShips }  from './domLogic.js';
import { playerGameboard, computerGameboard } from './domLogic.js';
import { determineIfHitOrMiss } from './domLogic.js';
import { determineIfHitOrMissComputer } from './domLogic.js';
// import { coordinateFromComputerBoardX, coordinateFromComputerBoardY} from './domLogic';
// import { coordinateFromComputerBoardX } from './domLogic.js';
// import { coordinateFromComputerBoardY } from './domLogic.js';

// console.log('COMPUTERS GAMEBOARD CELL THAT WAS CLICKED X', coordinateFromComputerBoardX);
// console.log('COMPUTERS GAMEBOARD CELL THAT WAS CLICKED Y', coordinateFromComputerBoardY);

let currentPlayerGameboard = playerGameboard; 
let currentComputerGameboard = computerGameboard;

// console.log('THIS IS THE CURRENT PLAYER GAMEBOARD FROM DOMLOGIC', currentPlayerGameboard);
// console.log('THIS IS THE CURRENT COMPUTER GAMEBOARD FROM DOMLOGIC', currentComputerGameboard);


// create players here
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
    // send coords to a function which determine if hit or not
    // test passing coords to another function, 
    // access the hit or missed shot here, 
    // we need to key into the hit shots, 
    // determine if coordinates passed into attack, 
    // are a hit or a miss
    // if passed coordinates are within hitShot
    // style those coordinates 
    // call another function which can do that in the DOM, 
    //
   //  console.log(selectedUser.gameboard.getGameboard());
  } 

  export function computerAttack(userObj, x, y) { 
    const selectedUser = userObj;
    selectedUser.gameboard.receiveAttack(x, y); 
    determineIfHitOrMissComputer(selectedUser, x, y);

  }

  export function playGame(xCoordinate, yCoordinate) { 
    let playerTurn = 1; 

    console.log('LOGGING PLAYERS BOARD WITHIN PLAYGAME FUNCTION BEFORE THE LOOP', currentPlayerGameboard);
    console.log('LOGGING COMPUTERS BOARD WITHIN PLAYGAME FUNCTION BEFORE THE LOOP',currentComputerGameboard);
    
    // while (!computer.gameboard.areAllShipsSunk() && !player.gameboard.areAllShipsSunk()) { 

   // while (!currentPlayerGameboard.gameboard.areAllShipsSunk() && currentPlayerGameboard.gameboard.areAllShipsSunk()) { 
      
    if (playerTurn === 1) {
      let playerMarkX = xCoordinate;
      let playerMarkY = yCoordinate;

      console.log('LOGGING PLAYER MARKX WITHIN PLAYGAME FUNCTION WITHIN THE LOOP, PLAYER TURN', playerMarkX);
      console.log('LOGGING PLAYER MARKY WITHIN PLAYGAME FUNCTION WITHIN THE LOOP, PLAYER TURN', playerMarkY);
  
      attack(currentComputerGameboard, playerMarkX, playerMarkY); 

      console.log('COMPUTERS GAMEBOARD AFTER PLAYER ATTACK', currentComputerGameboard);

      if (checkForWinner(currentComputerGameboard)) { 
        console.log('PLAYER WINS');
        return; // print/access winner modal
      }
      playerTurn = 2;

    } 
    // else { 
      console.log('ELSE STATEMENT CHECK!')
      const randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
      const randomCoordinate2 = Math.floor(Math.random() * 9) + 1;
      computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
      console.log('PLAYERS GAMEBOARD AFTER COMPUTER ATTACK', currentPlayerGameboard);
      if (checkForWinner(currentPlayerGameboard)) { 
        console.log('COMP WINS');
        return; 
      } 
      playerTurn = 1;
    } 
 // } 
// } 

  // playGame();







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