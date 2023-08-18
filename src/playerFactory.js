// create player
// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays. 
// The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice). 

// import './gameboardFactory.js';
import ship from './shipFactory.js';

import gameboardFactory from './gameboardFactory.js';


// make a player factory function.
// that makes a player for the game 
// make a computer 
// comp should know if move is legal and cannot hit the same square twice. 

// what properties would player have? 
// a way to track whose turn it is 
// a name
// I would say a name property and a way to measure turns 
// same thing for the comp function, 
// 

// start gameplanning, visualizing what you want this section to look like, 
// we are creating a factory for a player and looks like the computer as well 
// so create the player object as well as their specific gameboard 
// look up old posts for inspiration, 
// create a player and grab their gameboard 
// see if you can log back a gameboard
// so I can include the gameboard in the return object, this seems like the inital gameboards 
// modal will pop-up and allow user to place ships at specific spots,
// create another factory for computer 

// seems like playerFactory will also need an attack method, allowing the user to hit the enemy's board. 

// what would be included in this attack method? 
// access to the receiveAttack method, calls the function, passing in the coordinates. 

// an attack method, is that just using receiveAttack? Because receiveAttack is the one placing the ships and determines valid ship placement, 
// a way to switch player turns 

// attack method will take a pair coordinates, and pass them to receiveAttack, 
// making the attack method, access the gameboard, and receiveAttack method, 
// 

// I'm supposed to access the enemy's gameboard, how? 
// make it within computer factory and somehow access it, 
// attack method, gets enemy gameboard( how ? ) 
// uses the receiveAttack method on the enemy gameboard 
// how can I use receiveAttack method within attack method 
// do I access the computers gameboard from it's factory? 
// yes seems like that could work



// const playerGameboard = gameboardFactory();
// const computerGameboard = gameboardFactory();

// export default function createPlayer(name, turn, board) { 
//     let playerBoard = board;
//     function attack() { 
//     let getComputerBoard = createComputerPlayer().compBoard;
//     // I dont know how to use receiveAttack on the gameboard
//     console.log(getComputerBoard);
// } 
//     return { 
//         name: name, 
//         turn: turn,
//         board: playerGameboard.getGameboard(),
//         attack,
//     }
// } 

// export function createComputerPlayer(name, turn, compBoard) { 
//     let computerBoard = compBoard;
//     return { 
//         name: name, 
//         turn: turn,
//         compBoard: computerGameboard.getGameboard(),
//     }
// } 

// let player1 = createPlayer('alec', true);
// console.log(player1.attack());


// let computer = createComputerPlayer('comp', false);
// console.log(computer.board);

// console.log(gameboard.getGameboard());

// make a factory for both player and computer 

// has a name property, and a turn property, 
// each factory has its own gameboard within it 
// have an attack method which grabs the enemy's gameboard 
// make the enemy's factory, same set-up
// grab the enemy's gameboard 
// how can I access the enemy's gameboard in a different factory 
// review pastos messages, work on mock object example

// log the properties of gameboard module
// Ok how do I use this information to form an attack? 
// I am not sure how to properly construct the attack method, 


// And then this is the exact same solution, when you build the attack function, you need to make it so it takes a gameboard as an argument
// And then inside the function, you can use the gameboard methods  

// why am I still having issues accessing the gameboardFactories methods ? 
// I am passing in the object, 
// Ok i am able to access the gameboards properties/methods 
// now check if I can place an attack on the board using receiveAttack 
// what is the attack method supposed to be doing?? attacking an enemy ship HOW?????????????????????????

// where do I play the ships??? how can I use receiveAttack if theres no fucking ships on the board? 
// This step literally makes no sense 
// am I supposed to place ships here, then use receiveAttack, 
// I am trying to make a stupid fucking test pass,
// test to see if attack method returns back the coordinates passed in,  

// I want to begin to test my function and it's methods, 
// first I can make a test that getName is returning the correct value 
// cant even access it, 

// attack method within the player factory 
// what would go into it, 
// a way to use the receiveAttack method within the function 
// access a gameboard, 
// use the receiveAttack method on the gameboard, 
// I think the receiveAttack method is working, it looks like it's logging coordinates of missed shots 
// can we test it? 
// it would take coordiantes too, 
// take the coordinates and hit the board 
// but how can I test the attack method, 
// shouldn't I have a different factory for computer, which creates its own board, then use receiveAttack on that board 
// if there was one thing that I would change, it would be accessing the computers gameboard, 

// access the gameboardFactory module within the playerFactory 

// access the enemys gameboard using a getter and setter, // done

// placePlayerShips method, takes a ship obj and places it on the gameboard that was created, 

// if I call placeShips would that not place it correctly??? 

// is there a way I can test the attack method now? before I make the logic for ship placement? 

// try to test attack method, 

// I have methods within playerFactory and compFactory that returns back enemy's gameboard as well players board, 

// I wanted to start placing hits on the board, I need to use receiveAttack method which is in gameboardFactory, 

// how do I use methods within gameboardFactory on the board variables? 

// look over nevz messages and commit to save work, 

// then begin to refactor playerFactory, only returns a name and gameboard. 

// I dont think its necessary to test these methods, its pretty basic stuff

// I deleted the test file, now I will make the game module/loop 

// game module will use the receiveAttack method, 

// determine whose turn it is, 

// determine if the ships have been sunk, 

// determine a winner and print a message or modal pop-up that displays winner 

function playerFactory(name) { 
    const gameboard = gameboardFactory().getGameboard();
    return {name, gameboard};
} 


const player1 = playerFactory('alec');
const computer = playerFactory('computer');

console.log(player1);
console.log(computer); 

























// function playerFactory(name, turn) { 
//     let gameboardModuleMethods = gameboardFactory();
//     const getName = (() => {
//         return name; 
//     })
//     let playerTurn = turn; 
//     const playerGameboard = gameboardFactory().getGameboard();

//     function getBoard() { 
//         return playerGameboard;
//     } 

//     function getComputerBoard() { 
//       let getCompBoard = gameboardModuleMethods.getGameboard();
//       return getCompBoard;
//     } 

//     function attack(x, y) {
//         let computerBoard = getComputerBoard();
//         // computerBoard.receiveAttack(x, y);  // how can I use the receiveAttack method on the board? 
        
//     } 
//     return { 
//         name: name,
//         turn: turn,
//         getBoard,
//         attack, 
//         getName,
//         getComputerBoard,
//         gameboardModuleMethods,
//     }
// } 


// function computerFactory(name, turn) { 
//     let gameboardModuleMethods = gameboardFactory();
//     const getName = (() => {
//         return name; 
//     }) 
//     let computerTurn = turn;
//     const computerGameboard = gameboardFactory().getGameboard();
//     console.log(computerGameboard); 

//     function getComputerBoard() { 
//         return computerGameboard;
//     } 

//     function getPlayersBoard() { 
//         let getPlayerBoard = playerFactory().getBoard();
//         return getPlayerBoard;
//     }

//     function attack(x, y) { 
//         console.log('LOGGING THE PLAYERS GAMEBOARD WITHIN THE COMPUTERFACTORY FUNCTION', getPlayersBoard())
//     }

//     return { 
//         name: name,
//         turn: turn,
//         attack, 
//         getName,
//         getComputerBoard,
//         getPlayersBoard,
//         gameboardModuleMethods
//     }
// }



// console.log(playerFactory('alec', true));

// console.log(computerFactory('comp', false));

// console.log(playerFactory().attack(3, 3));

// console.log(computerFactory().attack(5, 5));
// console.log(playerFactory.getComputerBoard());

// function computerFactory(name, turn) { 
//     function attack() { 
//         const computersGameboard = gameboardModule.getGameboard();
//     } 

//     return { 
//         name: name, 
//         turn: turn,
//         attack, 
//     }
// }


// const player1 = playerFactory('alec', false, gameboard);

// console.log(player1.getName());

// console.log(player1.attack(6, 6));

// console.log(player1.getName());

// // console.log(player1.attack()) 

// // pass the gameboard object to this factory so you can access  it's methods, 

// let x = gameboardFactory();