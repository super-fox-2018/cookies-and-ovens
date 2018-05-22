class Cookie {
  constructor(time, name) {
    this.status = 'mentah'
    this.name = name
    this.cookingTime = time

  }
}

class Cheese extends Cookie {
  constructor() {
    super(25, 'keju')
  }
}

class Chocolate extends Cookie {
  constructor() {
    super(20, 'cokelat')
  }
}

class Peanut extends Cookie {
  constructor() {
    super(30, 'kacang')
  }
}


class Oven {
  constructor() {
    this.plate = []
  }
  addCookie(cookie) {
    this.plate.push(cookie)
  }


  baking(bakingTime) {
    for (var time = 0; time <= bakingTime; time += 5) {
      for (var i = 0; i < this.plate.length; i++) {
        if (this.plate[i].cookingTime === time) {
          this.plate[i].status = 'matang'
        } else if (this.plate[i].cookingTime - 5 === time) {
          this.plate[i].status = 'hampir matang'
        } else if (this.plate[i].cookingTime - 5 > time) {
          this.plate[i].status = 'mentah'
        } else {
          this.plate[i].status = 'hangus'
        }
        console.log(`Kue ${this.plate[i].name}, menit ke -> ${time} : ${this.plate[i].status}` + '\n');

      }
      console.log('---------------------------')
    }
  }
}

//drivecode
let Masak = new Oven()
let coklat = new Chocolate()
let keju = new Cheese()
let kacang = new Peanut()


Masak.addCookie(kacang)
Masak.addCookie(keju)
Masak.addCookie(coklat)
Masak.baking(32)
