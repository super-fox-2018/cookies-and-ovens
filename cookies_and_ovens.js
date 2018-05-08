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
  constructor(listKue) {
    this.listKue = listKue
  }

  bake(waktuPanggang) {
    for (var i = 5; i < waktuPanggang; i += 5) {
      for (var j = 0; j < this.listKue.length; j++) {
        if (i === this.listKue[j].waktuMasak) {
          console.log(`${this.listKue[j].namaKue} menit ke ${i} : matang`);
        }
        else if (i === this.listKue[j].waktuMasak-5 ) {
          console.log(`${this.listKue[j].namaKue} menit ke ${i} : hampir matang`);
        }
        else if (i > this.listKue[j].waktuMasak) {
          console.log(`${this.listKue[j].namaKue} menit ke ${i} : gosong coy`);
        }
        else {
          console.log(`${this.listKue[j].namaKue} menit ke ${i} : mentah coy`);
        }
      }
    }

  }
}




class Kue {
  constructor(namaKue, waktuMasak) {
    this.namaKue = namaKue
    this.waktuMasak = waktuMasak
  }
}


class KueCoklat extends Kue {
  constructor() {
    super('kue coklat', 20)
  }
}

class KueKacang extends Kue {
  constructor() {
    super('kue kacang', 30)
  }
}

class KueKeju extends Kue {
  constructor() {
    super('kue keju', 35)
  }
}


let kueCoklat = new KueCoklat()
let kueKacang = new KueKacang()
let kueKeju = new KueKeju()

let listKue = []
listKue.push(kueCoklat)
listKue.push(kueKeju)
listKue.push(kueKacang)

let oven = new Oven(listKue)
// console.log(oven);
oven.bake(40)
