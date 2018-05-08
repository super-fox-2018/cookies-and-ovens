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
    constructor(name, timeCooked) {
        this.name = name
        this.status = "mentah"
        this.timeCooked = timeCooked;
    }
}


class Oven {
    constructor(){
        this.cookies = []
    }
    insertCake(cookies){
        for (let i = 0; i < cookies.length; i++){
            this.cookies.push(cookies[i])
        }
    }

    bake(timer){
        let menit = 5;
        let lima = 5;
        while(menit <= timer){
            console.log(`----------- looping menit ke ${menit} ----------`)
            for (let i=0; i < this.cookies.length; i++){
                if (menit < this.cookies[i].timeCooked - lima){
                    this.cookies[i].status = 'mentah'
                }else if (menit === this.cookies[i].timeCooked - lima){
                    this.cookies[i].status = 'hampir matang'
                }else if (menit === this.cookies[i].timeCooked){
                    this.cookies[i].status = 'matang'
                }else{
                    this.cookies[i].status = 'hangus'
                }
                console.log (`kue ${this.cookies[i].name}, menit ke ${menit} : ${this.cookies[i].status}`)
            }
            menit += 5;
        }

    }
}

class Chocholate extends Cookie {
    constructor(name, timeCooked) {
        super(name, timeCooked)
        this.chocChipCcount = 200
    }
}

class Peanut extends Cookie {
    constructor(name, timeCooked) {
        super(name, timeCooked)
        this.peanutCount = 100;
    }
}

class Cheese extends Cookie {
    constructor(name, ingredients, isSugar) {
        super(name, ingredients, isSugar)
        this.peanutCount = 100;
    }
}

let cokelat = new Chocholate('cokelat',20);
let kacang = new Peanut('kacang',30);
let keju = new Cheese('keju',35);

let oven = new Oven();

oven.insertCake([cokelat,kacang,keju]);

oven.bake(40);


