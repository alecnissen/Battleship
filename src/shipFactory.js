export default function ship(name, length, number, position) {
    let hitCounter = 0;
    let isSunk = false;
    function hitIncrementor() {
      hitCounter++;
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
      shipNumber: number,
      shipPosition: position,
      hitIncrementor,
      getHitIncrementor,
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
