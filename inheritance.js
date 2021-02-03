// class Parent{
//     constructor(lastName="Khan"){
//         this.lname = lastName;
//     }
// }

// class Child extends Parent{
//     constructor(firstName){
//         super();
//         this.fname = firstName;
        
//     }

//     getFullName(){
//         return this.fname + " "+ this.lname;
//     }
// }
// const person1 = new Child("Tuhin");
// const person2 = new Child ("Nurul");

// console.log(person1.getFullName(), person2.getFullName());

class Parent{
    constructor(){
        this.pName = "Liakat Ali Khan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.cName = name;
    }

    getFullName(){
        return "Son Name :" +this.cName+" & Fathers Name : " + this.pName;
    }
}
const son1 = new Child("Tuhin Khan");
const son2 = new Child("Ruhul Khan");
const son3 = new Child("Nurul Khan");
const son4 = new Child("Mukta Akter");

console.log(son1.getFullName());
console.log(son2.getFullName());
console.log(son3.getFullName());
console.log(son4.getFullName());
