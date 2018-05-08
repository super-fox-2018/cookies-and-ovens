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
		this.listKue= listKue
	}

	bake(waktu) {
		//console.log(this.listKue)
		for(let j=5;j<=waktu;j=j+5) {
				for(let i=0;i<this.listKue.length;i++) {
				if(j == this.listKue[i].waktuMatang) {
					console.log(`${this.listKue[i].nama}, menit ke ${j} : matang`)	
				}else if(j == this.listKue[i].waktuMatang - 5) {
					console.log(`${this.listKue[i].nama}, menit ke ${j} : hampir matang`)
				}else if(j > this.listKue[i].waktuMatang) {
					console.log(`${this.listKue[i].nama}, menit ke ${j} : hangus`)
				}else {
					console.log(`${this.listKue[i].nama}, menit ke ${j} : mentah`)
				}
				
			}
			console.log("=============================")
		}	
	}
	

}


class Kue {
	constructor(nama,waktuMatang) {
		this.nama = nama
		this.waktuMatang = waktuMatang
	}
}

class KueCoklat extends Kue {
	constructor() {
		super("KueCoklat",20)
	}
}

class KueKacang extends Kue {
	constructor() {
		super("KueKacang",30)
	}
}

class KueKeju extends Kue {
	constructor() {
		super("KueKeju",35)
	}
}

let kueCoklat = new KueCoklat()
let kueKacang = new KueKacang()
let kueKeju = new KueKeju()
let arrKue = []
arrKue.push(kueCoklat)
arrKue.push(kueKacang)
arrKue.push(kueKeju)
var listKue = arrKue

var oven = new Oven(listKue)
//console.log(oven.listKue)
oven.bake(40)

//console.log(oven.listKue)