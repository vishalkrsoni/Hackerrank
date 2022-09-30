// Parking Problem
class ParkingLot {
  constructor(slots) {
    let obj = {}
    for (let i = 1; i <= slots; i++) obj[i] = null
    this.slots = obj
  }

  park = (carId) => {
    this.carId = carId
    let vacant = []
    if (Object.values(this.slots).includes(carId))
      return `Car already parked`
    Object.entries(this.slots).forEach(([key, value]) => { if (value == null) vacant.push(key) })
    let min = Math.min(...vacant)
    if (vacant.length > 0) {
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

  checkSlot = (carId) => {
    let result = null
    if (Object.values(this.slots).includes(carId))
      Object.entries(this.slots).forEach(([key, value]) => { if (value == carId) result = key })
    return `Your Car is parked at slot : ${result}`
  }

  remove = (carId) => {
    if (!Object.values(this.slots).includes(carId))
      return `No Such car parked`;
    else {
      let serial = Object.keys(this.slots).find(s => this.slots[s] === carId);
      let carNum = this.slots[serial]
      this.slots[serial] = null
      return `Removed from slot : ${serial} ---> ${carNum}`
    }
  }
}

const carPark = (size) => {
  let parking = new ParkingLot(size);
  const prompt = require("prompt-sync")();
  while (true) {
    console.log(`
Welcome!! 
Enter your carId :`)
    let carId = parseInt(prompt());
    const option = parseInt(prompt(`
1. Park your car 
2. Car Exit 
3. See Parking 
4. Check Empty slots
5. Check your slot
6. Close
`));
    switch (option) {
      case 1:
        console.log(parking.park(carId))
        break;
      case 2:
        console.log(parking.remove(carId))
        break;
      case 3:
        console.log(parking.seeParking())
        break;
      case 4:
        console.log(parking.getSlots())
        break;
      case 5:
        console.log(parking.checkSlot(carId))
        break;
      case 6:
        console.log(`Thanks! Visit Again!!!`)
        return;
      default:
        console.log('Invalid option')
        break;
    }
  }
}

carPark(7)
