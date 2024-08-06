//1

class Person{
    name(){
        alert("Hello main aa gaya");
    }
    class(){
        alert("nahi batana , kya karega");
    }
}

let p1 = new Person();
let p2 = new Person();

p1.name();
p1.class();
p2.name();

//2

class Section{
    name(fillName){
        this.name= fillName;
    }

    surname(fillSur){
        this.surname=fillSur;
    }
    display(){
        alert(this.name+" "+this.surname);
    }
}

let sec = new Section();
sec.name("Virat")
sec.surname("Kohli")
sec.display();