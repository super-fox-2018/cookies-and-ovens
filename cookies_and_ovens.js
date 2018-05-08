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
class Cake{
    constructor(name){
        this._name = name
        this._status = 'mentah';
    }

    get name(){
        return this._name;
    }

    get status(){
        return this._status;
    }

    bake(time){

        if(this._name === 'Chocolate Cake'){
            let cake = new ChocolateCake;
            this.start(time, cake.timeToMake);
        }else if(this._name === 'Cheese Cake'){
            let cake = new CheeseCake;

            this.start(time, cake.timeToMake);
        }if(this._name === 'Nut Cake'){
            let cake = new NutCake;

            this.start(time, cake.timeToMake);
        }

    }

    start(time, timeTillDone){
        if(time === timeTillDone/2){
            this._status = 'hampir matang'
        }else if(time === timeTillDone){
            this._status = 'matang'
        }else if(time > timeTillDone){
            this._status = 'hangus'
        }
    }

}

class ChocolateCake extends Cake{
    constructor(name){
        super(name);
        this._timeToMake = 20;
    }
    get timeToMake(){
        return this._timeToMake;
    }
}

class CheeseCake extends Cake{
    constructor(name){
        super(name);
        this._timeToMake = 30;
    }
    get timeToMake(){
        return this._timeToMake;
    }
}

class NutCake extends Cake{
    constructor(name){
        super(name);
        this._timeToMake = 35;
    }
    get timeToMake(){
        return this._timeToMake;
    }
}


var coklat = new ChocolateCake('Chocolate Cake');

for(let counter =0; counter<=30; counter+=5){
    coklat.bake(counter);
    console.log(`${coklat.name}, at time ${counter} minutes: ${coklat.status}`);
}
