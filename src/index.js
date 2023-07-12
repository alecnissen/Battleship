

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
    let isSunk = false;
     function hitIncrementor() { 
        hitCounter++
    } 

    function getHitIncrementor() { 
        return hitCounter;
    }
     function isSunkConditional() { 
        if (hitCounter >= length) { 
            isSunk = true; // return isSunk in another function, 
            // return isSunk;
        }
    } 

    function getShipStatus() { 
        return isSunk;
    }
    
    return { 
        shipName: name,
        isSunk, 
        shipLength: length,
        hitIncrementor,
        getHitIncrementor,
        isSunkConditional,
        getShipStatus
    }
} 


let ship1 = ship('battleship', 4);

console.log(ship1);
console.log(ship1.hitIncrementor());
console.log(ship1.hitIncrementor());
console.log(ship1.hitIncrementor());
console.log(ship1.hitIncrementor());
console.log(ship1.getHitIncrementor());
console.log(ship1.getShipStatus());
console.log(ship1.isSunkConditional());
console.log(ship1.getShipStatus());
console.log(ship1);













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

function counter() {
    let count = 0;

    function increment() {
        count += 1;
    }

    function getCount() {
        return count;
    }

    function toJSON() {
        return { count };
    }

    return {
        toJSON,
        getCount,
        increment,
    };
}
const foo = counter();

foo.increment();

// console.log(JSON.stringify(foo));