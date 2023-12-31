// import './shipFactory.js';
import './style.css';

import './shipFactory.js';

import './gameboardFactory.js';

import './playerFactory.js';

import './gameModule.js';

import './domLogic.js'; 


// import 'src/style.css';

// import 'dist/style.css'; 


// when I comment out styles import it will  work in src but not in dist 

// when I uncomment the import it will work in dist, but gameboard will not show up in src, 

// I still receive the same error. I need to address the mime type error. 

// where do I start, webpack dev server throwing the same error as before, 
// its the same out of bounds error, where it can not find the cells, 
// its preventing me from testing anything, 
// I cannot even play the game in dev server yet works fine in dist, 
// what the fuck am I supposed to do? 
// 
// 







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
// hover class taken care of, next lets style the players mark, 
// attack method will determine if hit or not 
// how can we determine if it was a hit or not? 
// I think we also needto pass the enemy's gameboard to determine if hit or not function, 
// takes the coords and enemy's gameboard. if it hit style the cell on the enemys board, 
// let enemysCurrentBoard = enemysboard.gameboard.hitShits() 

// highlighting the players gameboard, query select the computers gameboard cells ONLY! 
// make sure you access the computers gameboard cell that was clicked on, you are accessing the players gameboard cell, 
// change the data row and column attribute for computer gameboard function
// I want to log back the computers DOM cell that was clicked using the correct data attributes 
// should I change the variable that assigns the data-set, how can I properly set a data-set for comps DOM cells on the gameboard 
// data set for comps board now working ok, 
// now use conditional to determine if the clicked on coordinate is a hit, meaning it's already in the hit shots array

// hit shots are working on comps board, but I think I need to make a new function, which does the same logic, but for computer attack
// because within attack I am accessing two different boards using query selector, I find that difficult to do in one function, 

// tonight, change attack currently to playerAttack, and make another function computerAttack, which uses the same process, 

// just passing in a different board and coordinates, 

// for player, it hit is good, highlight red, 
// else highlight the cell blue or green, make sure the player knows that is is a miss, then apply the same logic for the computer, 

// then turn switching logic/loop, 
// making sure cells, cannot get hit twice, 
// remove hover class on players board after start game 

// continue to work on making sure if a miss happens on comps board, it will turn blue for miss, red for hit. 
// then work on making sure the turns are switching, 
// make sure cells cannot get hit twice for sure, 
// first lets make sure misses on the comps board turn blue 

// use a loop to check for hit shots or missed shots, try the same process as hits

// OK looks like I have a system down for hit shots and missed shots on players board, 

// now I will need to do the same for the computer, random attacks, if hit turn red, if miss turn blue, 

// is this the time to determine turn switching logic? 

// have the ability to switch turns now, 
// or just make the logic for the computer to make their mark and apply styles, 
// I'm leaning to just make the logic now, and flip the player turn to 2, to test if computer styles work, 
// should just keep randomly generating coordinates, 

// make logic for comps selection, styling 
// hit coordinates do not get counted again, cannot hit same cell twice, but missed Coordinates can be saved twice, can hit the same missed cell twice, 

// we need to figure out turn switching logic, player makes mark, determine if hit or miss, check for winner, switch players, 
// comp makes mark, determine if hit or miss, check winner, switch players, 
// where else could I switch players if I wanted to make this work, 
// player will go first but once he makes his mark, comp should be able to make his mark, 

// turn switching logic, 
// seems like when you sink a ship it is sinking the same ship object twice, 
// so when all ships are sunk 10 ships are inside the sunkenShipsArray 
// double check, and maybe use/place different ship objects on computers board, 
// when ships are placed, they could be placing twice, or overlapping over top of eachother, that is why some ships are being sunk twice, 
// the target wil be to look over the placeComputerShips function in the domLogic 

// some ships are being sunk twice? so that means player can win early if the sunkenShips array is 5, even though only 3 ships have been sunk. 
// carrier being sunk twice??? 



// 9/13 current plan, 
// clean up the comments in the code, for domLogic and game module 
// then figure out a better method for checking if all ships are sunk, this is a must, 
// then determine why some ship objects are being sunk twice, 
// I can first test with the nested loop and see if that makes a difference, it that fails, then I need to think of a better system 
// place it vertically and it will be 4, horizontally will be one, so seems like it is not accounting for its full length 

// trying to figure out a system to check if all player ships are sunk, before I was making a loop then determining if that cell included a ship object, if it did 

// I Would keep a counter, and if all ships placed and equaled 18 (the length of all ships when placed) the game could start, that only works for one direction, 
// 

// so now the problem is why are certain ships being sunk twice? 
// that interfers with the determing if all ships are sunk function, 
// I would go back and determine how ships are being placed, 
// but yet the placement of the ships are fine, 
// it does not seem like ships are overlapping 
// Follow the code execution, the sunken ships array and when things are being pushed to it. 

// getting some odd behavior, 
// some ships are being placed fine, others It seems like are getting placed too early,
// so ships get added to the sunkenShips array more than once, 
// however following the code execution and looking over the functiosn I have created, I am not sure why this would be occuring
// I think I found the issue, I think once a ship is sunk, the isSUnk status turns to true, and it also sinks the corresponding player ship, 
// compare boards to see if you sink one ship, it will automatically sink the players ships, 
// that isnt the issue, patrol boat on comps board was sunk but yet you check players board, the sunken ship array was still empty. 

// figured out the problem there, I am no longer seeing ships being added more than once to the sunken ships array, 
// now I need to figure out, how to prevent player from hitting the same missed coordinate cell twice. 



// 9/14 current plan, 

// get familar with the game again, 
// make sure a winner modal is printed with an option to restart the game, 
// make sure that each time playGame is called with the passed coordinates, that player must make a unique hit each time, 
// right now from what I remember, you can hit the same cell twice, and it will switch turns, 
// it switches turns after you click a button, switch turns only when the player has hit a unqiue square, 
// I would first try to work on that, so the goal is to make sure the turns only switch when the player has hit a unique square, 

// OK I would ask later about not allowing the player to hit the same cell twice, 
// if you hit the same cell twice, it wont add onto the missed or hits 
// but it will allow the turn switching  to happen, 

// move on, come back to it, and see if you can trace the execution of it 
// if not ask for the help, 
// lets make the winner modal first and print the winner, and have an opton to start the game again from the beginnging 

// these are the two issues that remain, 




// 9/16 current plan, 
// right now user can double click a square, and that will count as there move, 
// even tho the user already hit or had a miss in that cell already, 
// I want user to hit the board in unique spots only,
// my goal for going about this, was to check if the attack coordininates were already 
// in the hit shots and missed shots array, 

// User can only make unqiue hits, 
// our focus needs to go to receiveAttack function, 
// before the user makes their attack 




// Hello everyone, trying to figure out one problem here on battleship, then the game is complete. I do need some help with this, 

// What I want: I want the user to hit only open spaces on the board, user cannot make their mark on the same cell twice. 

// The problem: Turns switch when user makes a hit on enemy's gameboard, currently they can hit the same cell twice, however those hits or missed shots do not get stored again (which is good),, just that the turns will switch even though the player already hit that cell. It should switch turns when player has made a hit on an open/unoccupied cell in the board. I am really stuck on where the logic should go to prevent this. 

// What I've tried: Checking if player hit is inside the missed shot or hit shot array already. The function would not work as indetended and would always return false. I tried using that same logic throughout different points in the code execution but nothing seems be going through and the conditionals are not working. 

// I am attacking my codepen which traces the code execution. Player makes mark on comps gameboard, those coordinates are passed to playGame, the attack method is called which uses receiveAttack inside it to store hit shots and missed shots. I've attached some comments to explain the process. 

// Would appreciate any help with this. This is the final step and final bug I must get past. 


// 9/17 

// try to figure out why conditional is not working 

// if the coordinates that the player clicked on is NOT inside the hit shot or missed shot array 
// then go ahead and let player make their attack. 
// the problem is that player can still make their mark twice on the same cell, instead of hitting unique cells each time, 
// turns should only switch when a player has a hit a unique cell.  

// removing the hover class. 
// when playGame is called, access the gameboardCell via an ID, 
// then try to remove the event listener when playGame is called, 
// that means all the ships have been placed and game is ready to start, 


// 9/18 current plan, need to figure out why computer is hitting the same cell twice, 
// also need to figure out, why styles file is getting deleted from dist every time I run webpack, 
// also need to figure out how to remove the hover class on players board, once game starts and both boards are rendered 
// first is figuring out why the computer board is either hitting the same cell twice, or just skipping turns all together, 
// well now it looks like I Need to look at how to properly store webpack assets, and figure out what is going with styles being deleted from the folder, 
// now I need to figure out this stupid fucking webpack bullshit, 
// I'll read over the sections listed, I need to make this work so people can help. 

// Move  the file back into src, and address the mime type error first, 
// it should working fine, in dist and other users should be able to see it when they look at it, 




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
