import ship from './shipFactory.js';
import gameboardFactory from './gameboardFactory.js'; 
import playerFactory from './playerFactory.js';

// before determining hits, or turn switching logic, 
// create two users from factory 
// place ships on the players board, create the method
// computers board will be randomly generated 


// At this point it is appropriate to begin crafting your User Interface.
// The game loop should set up a new game by creating Players and Gameboards. 
// For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.

// const player = playerFactory('player');
// const computer = playerFactory('computer');

// console.log(player);
// console.log(computer);

// The game loop should set up a new game by creating Players and Gameboards. 
// For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.

// I made a method which returns players name, it already has the board in the variable, could I just start populating the board 

// you already have the method which creates players, 

// refactor these functions to populate the board, 

// populate board, 

// hit board 

// determine turn, logic of switching turns, 

// determine if ships are sunk

// not sure what I need to test, 

// test that create player returns the correct value? 

// 


function createPlayer(name, type) { 
    if(type === 'computer') {
      const computerName = playerFactory(name);
      return computerName;
    } else {
      const playerName = playerFactory(name);
      return playerName;
    }
  }  


  function playGame() { 
    const computer = createPlayer('PC', 'computer')
    const player = createPlayer('player', 'player')
   // rest of the function
  }  

console.log(createPlayer('Alec', 'player')); 










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