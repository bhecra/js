"use strict";

class ParkingLot {
  // Add the methods here

  constructor(n) {
    this.slots = Array.from({ length: n }, (_, index) => null);

    console.log(this.slots);
  }

  park(carId) {
    const index = this.slots.findIndex((slot) => slot === null);

    if (index > -1) {
      this.slots[index] = carId;
      return true;
    } else {
      return false;
    }
  }

  getSlots() {
    return this.slots; //unoccupied
  }

  remove(carId) {
    let deleted = false;

    const index = this.slots.findIndex((slot) => slot === carId);

    if (index === -1) {
      return false;
    } else {
      this.slots = this.slots.map((slot) => {
        if (slot === carId) {
          slot = null;
          deleted = true;
        }

        return slot;
      });
    }

    return deleted;
  }
}

const numberOfSlots = 5;
const parkingLotObj = new ParkingLot(numberOfSlots);

console.log(parkingLotObj.park("algo"));
console.log(parkingLotObj.park("2"));
console.log(parkingLotObj.park("3"));
console.log(parkingLotObj.park("6"));
console.log(parkingLotObj.getSlots());
console.log(parkingLotObj.remove("2"));
console.log(parkingLotObj.getSlots());
