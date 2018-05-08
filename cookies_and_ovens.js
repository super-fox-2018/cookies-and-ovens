// Answer These Questions:
//
// - What are essential classes? 
    // class Kue buat inputan clas oven untuk proses
// - What attributes will each class have? 
    // class Kue ada name, cookTime
// - What interface will each class provide?  
    /* checkStatus untuk baca setiap pertambahan 5 menit hasil sesuai perintah
    class Oven yang bake digunakan untuk hitung pertambahan waktunya per 5 menit
    dan cetak nama kue nya dan status */
// - How will the classes interact with each other?
    //   lewat yg proses yg dipaling bawah dgn menjalankan code yg ada di class oven
// - Which classes will inherit from others, if any?
// Your code here

class Kue {
    constructor (name, time){
        this.name = name
        this.cookTime = time
        this.status = "mentah"
    }
}

class Oven{
    constructor(name, time){
        this.cakes=[]
    }

    addBake(cake){
        this.cakes.push(cake)
        // console.log(cake)
    }

    // jalanin proses masak dan waktu
    bake(bakeTime){
        for (let i = 5; i <= bakeTime; i+=5) { // dimulai dari 5 biar g masuk 0 nya
          for (let j = 0; j < this.cakes.length; j++) {
              //cookTime didapat dari input dibawah let kuecokelat dll
            if (this.cakes[j].cookTime-5 > i) { // kalau nilai cookTime - 5 masih lebih besar dr i
                this.cakes[j].status = 'mentah'
            } 
            else if (this.cakes[j].cookTime-5 === i) {
                this.cakes[j].status = 'hampir matang'
            } 
            else if (this.cakes[j].cookTime === i) {
                this.cakes[j].status = 'matang'
            } 
            else {
                this.cakes[j].status = 'hangus'
            }
            console.log(`${this.cakes[j].name}, menit ke ${i} : ${this.cakes[j].status}`);
          }
          console.log("=======================")
        }
    }
}

class KueCokelat extends Kue{
    constructor(name, cookTime){
        super(name, cookTime)
    }
}

class KueKacang extends Kue{
    constructor(name, cookTime){
        super(name, cookTime)
    }
}

class KueKeju extends Kue{
    constructor(name, cookTime){
        super(name, cookTime)
    }
}

let cookies = new Kue()
//untuk input kue dan waktu matangnya
let kuecokelat = new KueCokelat("Kue Cokelat", 20)
let kuekacang = new KueKacang("Kue Kacang", 25)
let kuekeju = new KueCokelat("Kue Keju", 20)

let newOven = new Oven()
// input kue untuk mau di bake
newOven.addBake(kuecokelat)
newOven.addBake(kuekacang)
newOven.addBake(kuekeju)
// waktu baking nya
newOven.bake(31)








