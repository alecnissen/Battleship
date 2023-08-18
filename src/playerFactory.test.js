// test  to check that the function does return back the inputted name, 

// export default function playerFactory(name) { 
//     const gameboard = gameboardFactory();
//     return {name, gameboard};
// } 

// is this test wrong? 

import playerFactory from "./playerFactory";

test('testing to make sure playerFactory, does return the correct name and does return an object', () => {
    // expect(playerFactory('alec', 'player')).not.toBeUndefined();
    // expect(playerFactory('alec')).toBe('alec');
    expect(playerFactory('alec').name).toBe('alec');
    expect(playerFactory('alec', 'player').gameboard).not.toBeUndefined();
}) 