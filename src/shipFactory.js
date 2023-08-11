export default function ship(name, length, position) {
    let hitCounter = 0;
    let isSunk = false;
    function hitIncrementor() {
      hitCounter++;
    }
  
    function getHitCounter() {
      return hitCounter;
    }
    function isSunkConditional() {
      if (hitCounter >= length) {
        isSunk = true;
      }
    }
  
    function getShipStatus() {
      return isSunk;
    }
  
    return {
      shipName: name,
      isSunk,
      shipLength: length,
      shipPosition: position,
      hitIncrementor,
      getHitCounter,
      isSunkConditional,
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
