// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//  kematangan, waktu pembuatan
// panggang(20) 
//
// Your code here

class Oven {
    constructor(){
        this.cakeInsideOven = []
        this.cakeOutsideOven = []
    }
    insertCookie(cake){
        console.log(`${cake.name} has been put in`)
        this.cakeInsideOven.push(cake)
    }
    
    takeOut(cakeName){
        for(let i = 0; i < this.cakeInsideOven.length; i++){
            if(this.cakeInsideOven[i]['name'] === cakeName){
                console.log(`${this.cakeInsideOven[i].name} has been taken out`)
                this.cakeOutsideOven.push(this.cakeInsideOven[i])
                this.cakeInsideOven.splice(i,1)
                return 
            }
        }
        console.log(`Cake Name doesn't found`)
    }

    cook(minutes){
        console.log('\n\n')

        while(minutes!==0){
            minutes--
            for(let i = 0; i < this.cakeInsideOven.length; i++){
                if(this.cakeInsideOven[i].timeCooking-1 >= this.cakeInsideOven[i].timeToBeCooked/this.cakeInsideOven[i].timeMeter*2){
                    this.cakeInsideOven[i].timeCooking --
                }else if(this.cakeInsideOven[i].timeCooking-1 > 0){
                    this.cakeInsideOven[i].cookedMeter = 'almost done'
                    this.cakeInsideOven[i].timeCooking --
                }else if(this.cakeInsideOven[i].timeCooking-1 === 0){
                    this.cakeInsideOven[i].cookedMeter = 'done'
                    this.cakeInsideOven[i].timeCooking --
                }else{
                    this.cakeInsideOven[i].cookedMeter = 'burnt'
                    this.cakeInsideOven[i].timeCooking --
                }
                if(this.cakeInsideOven[i].timeCooking%5 === 0){ 
                    console.log(`${this.cakeInsideOven[i].name}, cooked for ${this.cakeInsideOven[i].timeToBeCooked - this.cakeInsideOven[i].timeCooking} minutes : ${this.cakeInsideOven[i].cookedMeter}`)
                }
                if(minutes === 0){
                    console.log(`your ${this.cakeInsideOven[i].name} is ${this.cakeInsideOven[i].cookedMeter}!`)
                }
            }
        }
    }

    checkAllcakes(){
        console.log("\n\ncake inside oven:")
        for(let i = 0; i < this.cakeInsideOven.length; i++){
            console.log(this.cakeInsideOven[i])
        }
        console.log("\ncake outside oven:")
        for(let i = 0; i < this.cakeOutsideOven.length; i++){
            console.log(this.cakeOutsideOven[i])
        }
    }
}

class Cake {
    constructor(name,timeMeter,timeToBeCooked){
        this.name = name
        this.cookedMeter = 'un-cooked'
        this.timeMeter = timeMeter
        this.timeToBeCooked = timeToBeCooked
        this.timeCooking = timeToBeCooked
    }


}

class Chocolate extends Cake {
    constructor(name){
        super(name,4,20)
    }

    
}

class Peanut extends Cake {
    constructor(name){
        super(name,5,30)
    }
}

class Cheese extends Cake {
    constructor(name){
        super(name,7,35)
    }
}

let chocolateCake = new Chocolate('Chocolate Cake')
let cheeseCake = new Cheese('Cheese Cake')
let peanutCake = new Peanut('Peanut Cake')

let newOven = new Oven()

newOven.insertCookie(chocolateCake)
newOven.insertCookie(cheeseCake)
newOven.insertCookie(peanutCake)

newOven.cook(20)

newOven.takeOut(chocolateCake.name)

newOven.cook(10)

newOven.takeOut(peanutCake.name)

newOven.cook(5)

newOven.checkAllcakes()