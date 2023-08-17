import gameboardFactory from "./gameboardFactory"; 
import ship from "./shipFactory"; 
import playerFactory from "./playerFactory";


// test('testing to see if playerFactory returns back the correct name', () => { 
//     let gameboardModule = gameboardFactory();
//     let player1 = playerFactory(playerName, turn, obj);
//     let name = playerName;

// })

// test that getName returns back name 
// getName should return the name passed in, 

test('testing to see if the getName method returns back the correct name', () => { 
    const gameboardModule = gameboardFactory();
    let turn = false; 
    const gameboard = gameboardModule.getGameboard();
    console.log(playerFactory('a'))
    // need access to it's method. 
    const player1 = playerFactory('alec', turn, gameboard);
    console.log(player1);
    // expect(gameboardModule.getName()).toBe('alec');
    // expect(playerFactory.getName()).toBe('alec')
})