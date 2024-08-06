//1 Prepare class for complex number and set its complex and real part in the constructor

class Complex{
    constructor(InpReal,InpComplex){
        //console.log(this.real+" "+this.complex);
        this.complex = InpComplex;
        this.real = InpReal;
    }
    sum(numInp){
        let r = this.real+numInp.real;
        let i = this.complex+numInp.complex;
        return new Complex(r,i);
    }
}

let c = new Complex(21,34);
let d = new Complex(1,2);
console.log(c.sum(d));


//2 Overrding

class Human{
    constructor(nameInp,classInp,ageInp){
        this.name = nameInp;
        this.classInp = classInp;
        this.ageInp = ageInp; 
    }

    name(){
        return this.name;
    }
}

class Person extends Human{
    constructor(nameInp,classInp,ageInp){
        this.name = nameInp;
        this.classInp = classInp;
        this.ageInp = ageInp; 
    }

    name(){
        return this.name;
    }
}

let h = new Human("Virat");
console.log(h);
let g = new Human("Rohit");
console.log(g);


//checks for the instance of a class 
alert(Person instanceof Human)

//getters and setters in js

class Person{
    set_Name(newName){
        this._name = newName;
    }

    get_Name(){
        return this._name;
    }
    display(){
        return this._name;
    }
}

let p2 = new Person("Shikhar");
console.log(p2);