export default function ship(name, length, position) {
    let hitCounter = 0;
    let isSunk = false;
    // let gameBoard = gameboardFactory.sunkenShipsArray;

    function hitIncrementor() {
      hitCounter++;
      if (hitCounter >= length) {
        isSunk = true;
      }
    }
  
    function getHitCounter() {
      return hitCounter;
    }
    // function isSunkConditional() {
    //   if (hitCounter >= length) {
    //     isSunk = true;
    //   }
    // }
  
    function getShipStatus() {
      // console.log('logging the status of isSunk variable within getShipStatus in the shipFactory module', isSunk);
      // console.log(JSON.parse(JSON.stringify(sunkenShipsArray)));
      return isSunk;
    }
  
    return {
      shipName: name,
      get isSunk() {return isSunk},
      // isSunk,
      shipLength: length,
      shipPosition: position,
      hitIncrementor,
      getHitCounter,
      // isSunkConditional,
      getShipStatus,
    };
  }
  
  // let patrolBoat = ship('patrol-boat', 2);
  
  // console.log(patrolBoat);
  // console.log(patrolBoat.hitIncrementor());
  // console.log(patrolBoat.hitIncrementor());
  // console.log(patrolBoat.getHitIncrementor());
  // console.log(patrolBoat.isSunkConditional());
  // console.log(patrolBoat.getShipStatus());
  // console.log(patrolBoat);
  // console.log(patrolBoat);

  // export default ship;
