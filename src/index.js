

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


function ship(name, length) { 
    let hitCounter = 0;
    let shipName = name;
    let isSunk = false;
    let shipLength = length;
     function hits() { 
        this.hitCounter += 1
        return this.hitCounter;
    } 
     function sunkOrNot() { 
        if (this.hitCounter >= this.shipLength) { 
            this.isSunk = true;
            return this.isSunk;
        }
    } 
    
    return { 
        shipName,
        hitCounter, 
        isSunk, 
        shipLength, 
        hits,
        sunkOrNot
    }
} 

let ship1 = ship('battleship', 4);
let ship2 = ship('destroyer', 3);
console.log(ship1);
console.log(ship1.hits());
console.log(ship1);
console.log(ship1.hits());
console.log(ship1);
console.log(ship1.hits());
console.log(ship1);
console.log(ship1.hits());
console.log(ship1); 
console.log(ship1.sunkOrNot())
console.log(ship1); 

console.log(ship2);
console.log(ship2.hits()); 
console.log(ship2);
console.log(ship2.hits()); 
console.log(ship2);
console.log(ship2.hits()); 
console.log(ship2);
console.log(ship2.hits()); 
console.log(ship2);
console.log(ship2.sunkOrNot())
console.log(ship2); 

