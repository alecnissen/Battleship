import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';

// create players here
function createPlayer(name, type) { 
    if(type === 'computer') {
      const computerName = playerFactory(name); // add turn var
      return computerName;
    } else {
      const playerName = playerFactory(name);   // add turn var
      return playerName;
    }
  } 
  
  function placeShipsOnPlayersBoard(user) { 
    const player = user; 
    const battleShip = ship('Battleship', 4, 'vertical');
    const destroyer = ship('Destroyer', 4, 'horizontal' );
    const patrolBoat = ship('Patrol-boat', 2, 'vertical');
    const carrierBoat = ship('Carrier', 4, 'horizontal');
    const submarine = ship('Submarine', 3, 'vertical');
    // const player = createPlayer('player', 'player');
    // console.log(player);
    const getPlayerBoard = player.gameboard.getGameboard();
    const placeBattleShip = player.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
    const placeDestroyer = player.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
    const placePatrolBoat = player.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
    const placeCarrierBoat = player.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
    const placeSubmarine = player.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
    console.log(getPlayerBoard);
    return getPlayerBoard;
  } 

  function placeShipsOnComputersBoard(user) { 
    const computer = user;
    const battleShip = ship('Battleship', 4, 'vertical');
    const destroyer = ship('Destroyer', 4, 'horizontal' );
    const patrolBoat = ship('Patrol-boat', 2, 'vertical');
    const carrierBoat = ship('Carrier', 4, 'horizontal');
    const submarine = ship('Submarine', 3, 'vertical');
    // const computer = createPlayer('PC', 'computer');
    const getComputerBoard = computer.gameboard.getGameboard();
    const placeBattleShip = computer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
    const placeDestroyer = computer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
    const placePatrolBoat = computer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
    const placeCarrierBoat = computer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
    const placeSubmarine = computer.gameboard.placeShip(submarine, 7, 4, 3, 'horizontal');
    console.log(getComputerBoard);
    return getComputerBoard;

  }

  // think of the game flow, 
  // players have their ships on the board, 
  // now we can determine whose turn it is, 
  // once we know whose turn it is, that user can make there hit 
  // once the user makes hit, 
  // check if all ships sunk, if no, keep playing 
  // switch to the other user, user makes hit, check if all ships sunk, if no, switch to other user, 

  function playGame() { 
    let playerTurn = 1;
    const computer = createPlayer('PC', 'computer') // added turn var
    const player = createPlayer('player', 'player') // add turn var

    console.log(computer);
    console.log(player);

    while (!computer.gameboard.areAllShipsSunk() && player.gameboard.areAllShipsSunk()) { 
      // all the code goes in here, within the condition.
    }

    // place ships on players board
    placeShipsOnPlayersBoard(player);
    // place ships on computers board 
    placeShipsOnComputersBoard(computer); 

    // while areAllShipsSunk() is false for both gameboards, keep playing,

    // determine whose turn it is, let player go first, 
    // once we figure it out, pass the enemy's board, and pass in the players attack coordinates (x, y)
    // call attack, pass in enemys board and the users attack coordinates, use receiveAttack on enemys board. 
    
    // player has gone, disable them to prevent them for making a turn, 
    //  allow computer to follow same process. Then once computer goes, disable computer and allow player to go. 

    // attack(userObj, x, y)
    if (playerTurn === 1) { // player is === 1, attack comps board
      attack(computer, 3, 3); // can test for multiple attacks, apply attack method x amount of times, 
      if (checkForWinner(computer)) { 
        return; // print/access winner modal
      }
      playerTurn = 2;

    } else { // have to make the computer capable of making random moves, generate random coordinates, 
      // call another function here, which generates 2 random numbers, and returns them, 
      const randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
      const randomCoordinate2 = Math.floor(Math.random() * 9) + 1;
      attack(player, randomCoordinate1, randomCoordinate2); // this should be random attack, 
      if (checkForWinner(player)) { 
        return; // print/access winner modal
      } 
      playerTurn = 1;
    }
  }  

  function checkForWinner(userObj) { 
    let selectedUser = userObj;
    if (selectedUser.gameboard.areAllShipsSunk()) { 
      return true;
    } 
    return false;
  }


  function attack(userObj, x, y) { 
    let selectedUser = userObj;
    selectedUser.gameboard.receiveAttack(x, y);
  }

// let randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
// let randomCoordinate2 = Math.floor(Math.random() * 9) + 1;

// console.log(randomCoordinate1);
// console.log(randomCoordinate2);


  playGame();

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