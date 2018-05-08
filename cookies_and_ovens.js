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
class cookies {
  constructor(cake, time) {
    this.cake = cake;
    this.time = time;
    this.status = new Oven();
  }
}
  class Oven{
    constructor(){
      this.cakes = [];
      this.status = ['mentah','mentah','hampir matang','selesai','hangus'];

    }
    bake(cake){
      this.cakes = cake;
      // console.log(this.cakes);
      var count = 0;

        var bake_time = this.cakes.time;
        for (var j = 1; j <= bake_time; j++) {
          if(j%5==0){
            if (count>=this.status.length) {
              var statusKematangan = this.status[this.status.length-1];
              console.log(this.cakes.cake + ', menit ke '+j+' : '+statusKematangan);
            }
            else {
              var statusKematangan = this.status[count];
              console.log(this.cakes.cake + ', menit ke '+j+' : '+statusKematangan);
              count += 1;
            }
          }
        }
        console.log(`status kematangan ${this.cakes.cake} adalah ${statusKematangan}`);
        console.log('----------------------------------------------------------------');
      // return statusKematangan;
    }
  }
class kueCoklat extends cookies{
  constructor(cake,time) {
    super(cake,time);
    // super('kue coklat',20);
  }
}
class kueKacang extends cookies{
  constructor(cake,time) {
    super(cake,time);
    // super('kue kacang',30);
  }
}
class kueKeju extends cookies{
  constructor(cake,time) {
    super(cake,time);
    // super('kue keju',35);
  }
}

let kue_coklat = new kueCoklat('kue coklat',20);
let kue_kacang = new kueKacang('kue kacang',30);
let kue_keju = new kueKeju('kue keju',35);

let oven = new Oven;

var addCake = oven.bake(kue_coklat);
var addCake2 = oven.bake(kue_kacang);
let addCake3 = oven.bake(kue_keju);


// console.log(kue_coklat);
// console.log(kue_kacang);
// console.log(addCake);
