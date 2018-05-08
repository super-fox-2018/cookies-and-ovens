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


class Kue{
    constructor(name, time){
        this._name = name;
        this._time = time;
        this._status = this.bake();
    }

    bake(){
        var status = ['mentah', 'mentah', 'mentah', 'hampir matang', 'matang', 'hangus']
        var countStatus = 0
        for(let a = 1; a <= this._time; a++){
            if(a%5 === 0 ){
                countStatus += 1
                console.log('kue coklat, menit ke '+ a +' : '+status[countStatus])
            }
        }


    }
}

class KueCoklat extends Kue{
    constructor(){
        super('Kue Coklat', 20)
    }
}


class KueKacang extends Kue{
    constructor(){
        super('Kue Kacang', 30)
    }
}

class KueKeju extends Kue{
    constructor(){
        super('Kue Keju', 35)
    }
}

let kueCoklat = new KueCoklat;
// let kueKacang = new KueKacang;
// let kueKeju   = new KueKeju;

console.log(kueCoklat);
// console.log(kueKacang);
// console.log(kueKeju);

// console.log(kueCoklat._status);



