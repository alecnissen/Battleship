// import './shipFactory.js';
import './shipFactory.js';

import './gameboardFactory.js';

import './playerFactory.js';

import './gameModule.js';

import './domLogic.js'; 

// figure out the last jest error, 
// in the meantime we need to figure out how to start the game 
/// and what would need to happen for the game to start? 
// all player ships are placed 
// comps ships are randomly placed on the board 

// we need a way to determine if all five player ships have been placed
// look over and see what we can find 

// place player ship function 
// access the gameboard for player
// loop thru it and init an array, 
// if the arr is empty all ships have been placed, start the game. 


// how can we start the game, once all players ships have been placed, 
// first check the place ship functions, 
// something that will determine if all 5 ships have been placed. 
// maybe in the event listener, 
// because the user will have to click a ship object to place it 
// within the place ship function, update a variable, that returns a boolean 

// work on correctly displaying the grids next to eachother, 
// with appriproate styling, 
// two grids next to eachother, once the start game btn is pressed, 
// follow the sequence again and get familiar, 

// I want the board to be displayed in the center to start, 
// once the other ship is added to makes space for the new one, 
// make sure the boards are properly displayed, once the start game btn is pressed
// btn is pressed, removes the btns, the ship objects, displays the computer board 
// and the players board, then the game can start,

// commit and save work before moving forward, 
// next game will start, 
// but before then, make sure you connect the new gameboard to the computer/PC user
// connect the gameboards.  

// it seems like the gameboards are connected, 
// we can start the game, 
// once start game btn is clicked, players have their boards. 
// call playGame and get the boards with ships on them 

// should I totally refactor game module? 
// it has all the info we need, 
// checking if all ships are sunk 
// attack methods, 
// game loop that keeps playing under a certain condition 
// first we need a way to access players and computers board within game module, 
// the updated boards need to be accessed within that module, 

// I can access the gameboard variables within gameModule 
// how will I update my data within game module, 
// to use these new variables. 
// I think I need to look over the game module 
// and determine how this can be used, 
// I think variables will need to be updated within game module 
// the gameboards are updated and completed within domLogic 
// passed to game module 
// and that board used within the game module 
// save and commit work then begin


// ok we need to follow this process, 
// boards are displayed
// time for players attack, player clicks on comps board
// something will need to determine if the hit was successful,
// once clicked on a cell on the comps board, those coordinates will be saved 


// we are displaying the boards, 
// player will click on computers board 
// and those coordinates will need to get saved, 
// if a hit apply styles to them, 
// if a miss apply styles to them, 
// we need to figure out what we will do with the coordinates 
// coordinates that are clicked on are the players attack 
// determine if the coordinates are a hit or miss, in the attack method, 
// then call the dom file again to a function which applies styles to the coordinates 


// CURRENT PLAN
// working on playing the game, 
// play game is actually called within the event listener 
// once a cell is clicked on the computers board, that will be the players attack
// right now I can only place attacks on the computers board, I can sink all the ships and it will determine that I won, 
// but the problem seems to be the loop, 
// test again but without the loop,  I can make the player win, only player turn is working, I can sink all the comps ship 
// and print the winner which would be player 
// why when I add the loop which simply keeps playing if there are still ships on players board and computers board, it will not work correctly
// WHY CAN COMP HIT THE SAME CELL TWICE, I HAVE CHECKS AGAINST, WHY ARE THOSE NOT WORKING!!!!!!? 

// problem 1 trying to get the game loop to properly work, 
// problem 2 why are computer and user still able to hit the same cell twice? 
// user clicks on comps gameboard, once clicked it will trigger the game, 
// whatever cell user clicks is his attack, 
// then the game keep playing as long as both player and computer have ships still on the board, 
// currently with my loop only player, can make his mark, it won't switch turns, it will let me sink ships and print winner, 
// but why will it not switch turns and why is it hitting the same cell twice? 



// CURRENT PLAN 9/12 
// first spend a little time understanding behavior again, 
// then the plan seems to be getting the hover class working first, 
// we need to think of the flow of the game, 
// you should first be able to hover over the comps gameboard 
// to determine where you want to place the hit
// player clicks on a cell, that is his attack, so that triggers the game, 
// playGame is called, is it a problem that playGame is called, within the listener, 
// because I need someway to pass the coordinates, what cells did the player click, what is players attack? 
// those coordinates get passed the playGame function, player makes mark, checks for winner, 
// then switches turn, to comp, random coords are selected and comp makes their mark 
// checks for winner, 
// I dont think we need a loop either, i may possibly have to reconsider and refactor but the game will depend on player making his mark, 
// coords are passed to play game, cell that was clicked on comps board will be players attack, then turn switches to comps, which is random attack, 
// after each player makes attack, turn switches, 
// game cycle depends on players click, checking for winner, switching turns, cycle repeats 
// 
// first lets do a hover class over the comps board, player should see where they are about to place their hit. 












// now randomly place computers ships, 

// first start with creating the computer instance/gamebaord 

// how will we randomly place ships, how can we randomly change ship direction, 

// currently for player I set a default value for ship direction, but that can be changed from a button click, 

// can we randomly place ships first? 

// the random coordinates passed in will eventually throw an error from going out of bounds, 
// however I do have a method which checks for legal placement before ship is placed, 
// how can I get around this, ships will need to be randomly placed, 
// and I need to pass in random coordinates, 

// save the work, I will need to refactor checkForShip, it should be returning a value instead of false, right now its just throwing an error 
// get the return value, if the return value is true, place the ship, else try again with another pair of random coordinates, 
// keep track of repeated failed shots, so the coordinates do not repeat themselves 

// I Will have to go back to the help channels tonight, this is not really making sense, 
// I feel like I am doing the same thing, already checking what the function call returns, 

// I am trying to randomly place computer ships on its board, the problem is eventually the ship will collide with another ship, or go out of bounds, I am using random coordinates 

// I am already checking if the move is legal, placeShip calls a checkForShip function which checks if move is legal, 

// well I tried returning false if the checkForShip returns false, instead of throwing an error, but there is still no way to stop it from placing, 

// I tried returning false if illegal, but there is still no way to prevent the ship from still being placed. 

// is there a way I can fix this? IS there some other type of check or conditional I can use to prevent ship from being placed illegally? 



// Logging the error is just for yourself to see
// The important part is returning false if the placing failed and true if the placing succeeded
// And then you can use that return value
// const isPlacingSucceeded = gameboard.placeship()
// And then if(isPlacingSucceeded) try next ship
// Else try to place the same ship again with different coordinates
// And then, you have another issue to deal with, because with this logic it can get into a loop
// And potentially repeat failed coordinates over and over, how can you solve this?

// allow the computer to generate random coordinates and make sure each coordinate is legal, 
// 




// const mockObject = {
//     name: "joe",
//     age: 25,
//     incrementAge: function() {
//       this.age++;
//     }
//   } 



//   function ageIncrementor(exampleObj) { 
//     exampleObj.incrementAge();
//     console.log(exampleObj.age);
//   } 


// let exampleObj = mockObject;

// console.log(ageIncrementor(exampleObj));



//   console.log(ageIncrementor());
//   console.log(ageIncrementor());
//   console.log(ageIncrementor(mockObject));



  // call it outside the obj and log it 












// prevent the user from sinking a ship if hits are in the same location, 4 hits in the same coordinate will sink ship, 
// consider the hitIncrementor function, receiveAttack function, receiveAttack should have type of conditional inside it, 
// that conditional will check if that square has already been hit, and prevent a user from placing a hit in that square, 

// check for hits function, that determines if the move is legal. 
// we could check it in the same conditional, if the coordiantes are an obj && the value of check for hits is false, then the hitIncrementor can be called, 
// 


// 1. when I console.log the sunkenShipsArray right after I initalize it, it has all the sunken ships in it already 
// 2. all the ship objects even after placing, and sinking each ship, still return it's isSunk value as false, (it has not been sunk)
 // however when I check scope, and closure within dev tools, each ship's isSunk variable is true!
// two isses 
// why is the sunkenShipsArray after init already have the sunken ships in it, should be empty, its 
// its still saying false, all the ships are not sunk but yet the array contains all sunken ships, 
// why is the isSunk variable of the ships not changing? It still shows false but yet the ships 
// are sunk and have been added to the array, 
// when I check the scope and closure in dev tools, the isSunk variable IS changing 

// yesterdays problem was I was pushing the ship objects twice into the array so there 10 items instead of 5 
// it does return true, at the end but yet ship objects are within array before I sink them 
// and the isSunk property never changes but yet in dev tools closures and scope objects has them set to true
// 

// function ship(length, hits, sunk) {
//     this.length = length;
//     this.hits = hits;
//     this.sunk = sunk;

//     this.hits = function hits () {
//         console.log('hit function');
//     }

//     this.sunkOrNot = function sunkOrNot () {
//         console.log('sunk or not');
//     }
// }

// const createShip1 = new ship(3, 0, true);

// console.log(createShip1.hits());

// function ship(length, hits, sunk) {
//     return shipObj = {
//         length: length,
//         hits: hits,
//         sunk: sunk,

//         hitCounter: function hits() {

//         },
//         sunkOrNot: function isSunk() {
//             console.log('sunk! or not!');
//         }
//     }
// }

// const createShip = ship(4, 0, false);

// const createShip2 = ship(2, 1, true);

// console.log(createShip2.sunkOrNot());

// function is not right, init a hit counter variable

// input a name, and a length,

// init hit counter,

// hit method which will increment the hit counter

// isunk will determine if hits is greater than the ships length,

// change the value of issunk to false,


// shipFactory.js code 

// function ship(name, length) {
//   let hitCounter = 0;
//   let isSunk = false;
//   function hitIncrementor() {
//     hitCounter++;
//   }

//   function getHitIncrementor() {
//     return hitCounter;
//   }
//   function isSunkConditional() {
//     if (hitCounter >= length) {
//       isSunk = true; // return isSunk in another function,
//       // return isSunk;
//     }
//   }

//   function getShipStatus() {
//     return isSunk;
//   }

//   return {
//     shipName: name,
//     isSunk,
//     shipLength: length,
//     hitIncrementor,
//     getHitIncrementor,
//     isSunkConditional,
//     getShipStatus,
//   };
// }

// let patrolBoat = ship('patrol-boat', 2);

// console.log(patrolBoat);
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.getHitIncrementor());
// console.log(patrolBoat.isSunkConditional());
// console.log(patrolBoat.getShipStatus());
// console.log(patrolBoat);





// console.log(ship1);
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.getHitIncrementor());
// console.log(ship1.getShipStatus());
// console.log(ship1.isSunkConditional());
// console.log(ship1.getShipStatus());
// console.log(ship1);

// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.sunkOrNot())
// console.log(ship1);

// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.sunkOrNot())
// console.log(ship2);

// example noget

// function counter1() {
//     let count = 0;

//     function increment() {
//         count += 1;
//     }

//     function getCount() {
//         return count
//     }

//     return {
//         getCount,
//         increment,
//     };
// }

// const foo = counter1();

// console.log(JSON.stringify(foo));

// // Increment the count variable
// foo.increment();

// Logs 1, the function returns the variable's value
// console.log(foo.getCount());

// example get

// function counter2() {
//     let count = 0;

//     function increment() {
//         count += 1;
//     }

//     return {
//         get count() {
//             return count;
//         },
//         increment,
//     };
// }

// const x = counter2();

// console.log(JSON.stringify(x));

// // Increment the count variable
// x.increment();

// Logs 1, the function returns the variable's value
// console.log(x.count);

// refactored

// function counter() {
//   let count = 0;

//   function increment() {
//     count += 1;
//   }

//   function getCount() {
//     return count;
//   }

//   function toJSON() {
//     return { count };
//   }

//   return {
//     toJSON,
//     getCount,
//     increment,
//   };
// }
// const foo = counter();

// foo.increment();

// console.log(JSON.stringify(foo));
