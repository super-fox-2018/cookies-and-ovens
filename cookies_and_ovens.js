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
	constructor(name,matang){
		this._name = name
		this._matang = matang
	}
}
class CoklatCake extends Cake{
	constructor(){
		super('cokelat',20)
		//this._name = name
	}
}

class PeanutCake extends Cake{
	constructor(){
		super('peanut',30)
	}
}

class CheeseCake extends Cake{
	constructor(){
		super('cheese',35)

	}
}
class Oven{
	constructor(){
		this._loyang = []
	}
	insert(cake){
		this._loyang.push(cake)
	}
	bake(bakeTime){
		let temp = this._loyang
		//console.log(temp)	
			//console.log(temp[j])
			for(var i=5;i<=bakeTime;i+=5){
				for(var j=0;j<temp.length;j++){
				if (i<=10) {
					console.log(`kue ${temp[j]._name} menit ke ${i} : mentah `)
				}
				else if (i>=10 && i<temp[j]._matang) {
					console.log(`kue ${temp[j]._name} menit ke ${i} : hampir matang`)
				}
				else if (i===temp[j]._matang) {
					console.log(`kue ${temp[j]._name} menit ke ${i} : matang`)
				}
				else if (i>temp[j]._matang) {
					console.log(`kue ${temp[j]._name} menit ke ${i} : hangus`)
				}
			}	
		}
	}
}
		

let coklat = new CoklatCake('coklat')
let peanut = new PeanutCake('peanut')
let cheese = new CheeseCake('cheese')
let oven = new Oven()
//console.log([coklat,peanut,cheese])
//console.log(coklat)
oven.insert(coklat)
oven.insert(peanut)
oven.insert(cheese)
console.log(oven)
oven.bake(20)
// oven.bake([coklat,peanut,cheese],60)