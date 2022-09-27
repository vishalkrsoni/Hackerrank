// Parking Problem

const PromptSync = require("prompt-sync")

class ParkingLot {
  constructor(slots) {
    this.total = slots
    let obj = {}
    for (let i = 1; i <= slots; i++) obj[i] = null
    this.slots = obj
  }

  park = (carId) => {
    this.carId = carId
    this.vacant = []
    Object.entries(this.slots).forEach(([key, value]) => { if (value == null) this.vacant.push(key) })
    let min = Math.min(...this.vacant)
    if (this.vacant.length > 0) {
      this.slots[min] = carId
      return `Parked at slot : ${min} ---> ${this.carId}`
    }
    else return `Parking full`
  }

  getSlots = () => {
    let emptySlots = []
    Object.entries(this.slots).forEach(([key, value]) => { if (value == null) emptySlots.push(key) })
    return emptySlots.length != 0 ? `Empty slots : ${emptySlots} ` : `All slots are full`
  }

  seeParking = () => this.slots

  remove = (carId) => {
    if (!Object.values(this.slots).includes(carId)) return `No Such car parked`;
    else {
      let serial = Object.keys(this.slots).find(s => this.slots[s] === carId);
      let carNum = this.slots[serial]
      this.slots[serial] = null
      return `Removed from slot : ${serial} ---> ${carNum}`
    }
  }
}

// const carPark = (size) => {
//   let parking = new ParkingLot(size)

//     const prompt = require("prompt-sync")();
//     const option = parseInt(prompt(' 1.See Parking 2.Park your car 3.Car Exit 4.See Empty slots'));
//     switch (option) {
//       case 1:
//         parking.seeParking();
//         break;
//       case 2:
//         console.log('option 2')

//         break;
//       default:
//         console.log('Invalid option')
//          break;
//     }
  
// }

// console.log(carPark(10))
//carPark(12)


// let parking = new ParkingLot(7)
// console.log(parking.park(102))
// console.log(parking.park(112))
// console.log(parking.park(122))
// console.log(parking.park(132))
// console.log(parking.getSlots())
// console.log(parking.remove(122))
// console.log(parking.remove(132))
// console.log(parking.remove(112))
// console.log(parking.getSlots())
// console.log(parking.remove(161))
// console.log(parking.park(10))
// console.log(parking.park(12))
// console.log(parking.park(22))
// console.log(parking.park(32))
// console.log(parking.park(192))
// console.log(parking.park(152))
// console.log(parking.park(101))
// console.log(parking.remove(192))
// console.log(parking.seeParking())
// console.log(parking.remove(10))
// console.log(parking.seeParking())
