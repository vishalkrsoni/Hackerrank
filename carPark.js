// Parking Problem
class ParkingLot {
  constructor(slots) {
    this.total = slots
    let obj = {}
    for (let i = 1; i <= slots; i++) obj[i] = null
    this.slots = obj
  }

  park(carId) {
    this.carId = carId
    this.arr = []
    Object.entries(this.slots).forEach(([key, value]) => { if (value == null) this.arr.push(key) })
    let min = Math.min(...this.arr)
    if (this.arr.length > 0) {
      this.slots[min] = carId
      return `Parked at slot : ${min} ---> ${this.carId}`
    }
    else return `Parking full`
  }

  getSlots() {
    let emptySlots = []
    Object.entries(this.slots).forEach(([key, value]) => { if (value == null) emptySlots.push(key) })
    return emptySlots.length != 0 ? `Empty slots : ${emptySlots} ` : `All slots are full`
  }
  see(){
    return this.slots
  }
  remove(carId) {
    if (!Object.values(this.slots).includes(carId)) return `No Such car parked`
    else {
      let serial = Object.keys(this.slots).find(s => this.slots[s] === carId);
      let carNum = this.slots[serial]
      this.slots[serial] = null
      return `Removed from slot : ${serial} ---> ${carNum}`
    }
  }


}

let parking = new ParkingLot(7)
console.log(parking.park(102))
console.log(parking.park(112))
console.log(parking.park(122))
console.log(parking.park(132))
console.log(parking.getSlots())
console.log(parking.remove(122))
// console.log(parking.remove(102))
console.log(parking.remove(132))
console.log(parking.remove(112))
console.log(parking.getSlots())
console.log(parking.remove(161))
console.log(parking.park(10))
console.log(parking.park(12))
console.log(parking.park(22))
console.log(parking.park(32))
console.log(parking.park(192))
console.log(parking.park(152))
console.log(parking.park(101))
console.log(parking.remove(192))
console.log(parking.see())
console.log(parking.remove(10))
console.log(parking.see())


//console.log(parking.park(133))
//console.log(parking.park(132))



