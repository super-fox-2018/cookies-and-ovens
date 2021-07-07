// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookie {
  constructor(name) {
    this.status = 'raw';
    this.name = name
  }
}

class ChocolateChipCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookedTime = 20;
  }
}

class PeanutButterCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookedTime = 25;
  }
}

class DoubleChocolateCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookedTime = 30;
  }
}

class Oven {
  constructor() {
    this.inside = [];
  }

  insertCookie(cookie) {
    this.inside.push(cookie);
  }

  bake(time) {
    for (let i = 5; i <= time; i += 5) {
      for (let j = 0; j < this.inside.length; j++) {
        let cookie = this.inside[j];
        if (i === cookie.cookedTime) {
          cookie.status = 'cooked';
        } else if (i > cookie.cookedTime) {
          cookie.status = 'burnt';
        } else if (i === Math.floor(cookie.cookedTime * 2 / 3)) {
          cookie.status = 'nearly cooked';
        }
        if (i % 5 === 0) {
          console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`);
        }
      }
      console.log('------------------------------------------------');
    }
    return 'Enjoy your cookies! Best enjoyed fresh out of the oven :)';
  }
}

// driver code
let oven = new Oven();
let chocolateChipCookie = new ChocolateChipCookie('Chocolate Chip Cookie');
let peanutButterCookie = new PeanutButterCookie('Peanut Butter Cookie');
let doubleChocolateCookie = new DoubleChocolateCookie('Double Chocolate Cookie');

oven.insertCookie(chocolateChipCookie);
oven.insertCookie(peanutButterCookie);
oven.insertCookie(doubleChocolateCookie);

console.log(oven.bake(25));
