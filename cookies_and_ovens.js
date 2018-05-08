// Answer These Questions:
//
// - What are essential classes?
// Class Cake, Chocolate, Cheese, Peanut, Oven
// - What attributes will each class have?
// the Cakes will have: cookTime, ovenTime
// - What interface will each class provide?
// - How will the classes interact with each other?
//choco, peanut and cheese will share inheritance from cake. oven is independent but loosely connected to cakes
// - Which classes will inherit from others, if any?
//
//
// Your code here


class Cake{
  constructor(obj){
    this._name = obj._name;
    this._cookTime = obj._cookTime;
    this._cakeStatus = obj._cakeStatus;
  }
}


class Chocolate extends Cake{
  constructor(name){
    let obj = {
      _name : name,
      _cookTime : 20,
      _cakeStatus: "raw",
    };
    super(obj);
  }
}

class Cheese extends Cake{
  constructor(name){
    let obj = {
      _name : name,
      _cookTime : 15,
      _cakeStatus: "raw",
    };
    super(obj);
  }
}

class Peanut extends Cake{
  constructor(name){
    let obj = {
      _name : name,
      _cookTime : 25,
      _cakeStatus: "raw",
    };
    super(obj);
  }
}

class Oven {
  constructor(cake){
    this._cake = cake;
  }
  bake(min){
    var time = 5;
    while(time <= min){
      if((parseInt(this._cake._cookTime) - time) > 5){
        // this._cake._cakeStatus = "almost done";
        console.log(this._cake._name + ", menit ke " + time + ": " + this._cake._cakeStatus);
      }
      if((parseInt(this._cake._cookTime) - time) <= 5 && (parseInt(this._cake._cookTime) - time) > 0 ){
        this._cake._cakeStatus = "almost done";
        console.log(this._cake._name + ", menit ke " + time + ": " + this._cake._cakeStatus);
      }
      if( time  === parseInt(this._cake._cookTime) ){
        this._cake._cakeStatus = "perfectly done!";
        console.log(this._cake._name + ", menit ke " + time + ": " + this._cake._cakeStatus);
        if(time === min){
          console.log("Enjoy your delicious cake!");
        }
      }
      if (time > parseInt(this._cake._cookTime)){
        this._cake._cakeStatus = "oh, no! it's burnt!";
        console.log(this._cake._name + ", menit ke " + time + ": " + this._cake._cakeStatus);
      }
      time+=5;
    }
  }

}



let peanut = new Peanut ("peanut cake");
let cheese = new Cheese ("cheese cake");
let choco = new Chocolate ("chocolate cake");
let oven1 = new Oven(peanut);
let oven2 = new Oven(cheese);
let oven3 = new Oven(choco);

oven1.bake(30);
oven2.bake(35);
oven3.bake(20);