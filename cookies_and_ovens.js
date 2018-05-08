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

class Oven {
  constructor() {
    this._cakes = [];
  }

  addCake(cake) {
    this._cakes.push(cake);
  }

  bakeCake(time) {
    for (let i = 1; i <= time; i += 1) {
      for (let j = 0; j < this._cakes.length; j += 1) {
        this._cakes[j].bake();
      }
      if (i % 5 === 0) this.showStatuses();
    }
  }

  showStatuses() {
    for (let i = 0; i < this._cakes.length; i += 1) {
      const cake = this._cakes[i];
      console.log(`${cake.name}, minute ${cake.time} : ${cake.status}`);
    }
  }
}

class Cake {
  constructor(name, bakingTime) {
    this._name = name;
    this._bakingTime = bakingTime;
    this._time = 0;
    this._status = 'raw';
  }

  get name() {
    return this._name;
  }

  get bakingTime() {
    return this._bakingTime;
  }

  get time() {
    return this._time;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    const statuses = ['raw', 'almost cooked', 'cooked', 'burnt'];
    if (statuses.includes(value)) this._status = value;
    else console.log('Wrong value');
  }

  bake() {
    this._time += 1;
    if (this._time >= this._bakingTime + 3) {
      this.status = 'burnt'
    } else if (this._time >= this._bakingTime) {
      this.status = 'cooked';
    } else if (this._time >= this._bakingTime - 5) {
      this.status = 'almost cooked';
    }
  }
}

class PeanutCake extends Cake {
  constructor(name, bakingTime) {
    super(name, bakingTime);
    this.mainIngredient = 'Peanut';
  }
}

class ChocolateCake extends Cake {
  constructor(name, bakingTime) {
    super(name, bakingTime);
    this.mainIngredient = 'Chocolate';
  }
}

class CheeseCake extends Cake {
  constructor(name, bakingTime) {
    super(name, bakingTime);
    this.mainIngredient = 'Cheese';
  }
}

const panasOnic = new Oven();
const chocoCake = new ChocolateCake('chocolate cake', 20);
const peanutCake = new PeanutCake('peanut cake', 30);
const cheeseCake = new CheeseCake('cheese cake', 35);
panasOnic.addCake(chocoCake);
panasOnic.addCake(peanutCake);
panasOnic.addCake(cheeseCake);
panasOnic.bakeCake(40);