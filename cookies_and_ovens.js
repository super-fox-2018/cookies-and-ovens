'use strict'

class Cake {
    constructor() {
        this.name = '';
        this.status = 'mentah';
    }
}

class ChocolateCake extends Cake {
    constructor() {
        super();
        this.name = 'chocolate cake';
        this.bakeTime = 20;
        this.nowBaking = 0;
    }
    bake() {
        for(let i = 1; i <= 5; i++) {
            this.nowBaking += 5;
            if((this.nowBaking + 5) == this.bakeTime) {
                this.status = 'hampir matang';
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking < this.bakeTime) {
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking == this.bakeTime) {
                this.status = 'matang'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking > this.bakeTime){
                this.status = 'hangus'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            }
        }
    }
}

class PeanutCake extends Cake {
    constructor() {
        super();
        this.name = 'peanut cake'
        this.bakeTime = 30;
        this.nowBaking = 0;
    }
    bake() {
        for(let i = 1; i <= 7; i++) {
            this.nowBaking += 5;
            if((this.nowBaking + 5) == this.bakeTime) {
                this.status = 'hampir matang';
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking < this.bakeTime) {
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking == this.bakeTime) {
                this.status = 'matang'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking > this.bakeTime){
                this.status = 'hangus'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            }
        }
        
    }
}

class CheeseCake extends Cake {
    constructor() {
        super();
        this.name = 'cheese cake';
        this.bakeTime = 35;
        this.nowBaking = 0;
    }
    bake() {
        for(let i = 1; i <= 8; i++) {
            this.nowBaking += 5;
            if((this.nowBaking + 5) == this.bakeTime) {
                this.status = 'hampir matang';
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking < this.bakeTime) {
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking == this.bakeTime) {
                this.status = 'matang'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking > this.bakeTime){
                this.status = 'hangus'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            }
        }
    }
}

var chocolate = new ChocolateCake();
var peanut = new PeanutCake();
var cheese = new CheeseCake();

chocolate.bake();
console.log(`----------------------`);
peanut.bake();
console.log(`----------------------`);
cheese.bake();
console.log(`----------------------`);