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
    return `Empty slots: ${this.arr}, Count : ${this.arr.length}`
  }
  remove(carId) {
    let serial = Object.keys(this.slots).find(s => this.slots[s] === carId);
    let carNum = this.slots[serial]
    this.slots[serial] = null
    return `Removed from slot : ${serial} ---> ${carNum}`
  }
}
let parking = new ParkingLot(7)
console.log(parking.park(102))
console.log(parking.park(112))
console.log(parking.park(122))
console.log(parking.park(132))
console.log(parking.getSlots())
console.log(parking.remove(122))
console.log(parking.remove(102))
console.log(parking.getSlots())

console.log(parking.park(166))
console.log(parking.park(161))
console.log(parking.park(116))
console.log(parking.park(190))
console.log(parking.park(187))
console.log(parking.park(184))
console.log(parking.remove(161))
console.log(parking.getSlots())



