class Student{
    constructor(sName , sId, sDept){
        this.name = sName;
        this.id = sId;
        this.dept = sDept;
        this.university = "University Of Development Alternative";
    }
}
const student1 = new Student("Tuhin Khan",011181012, "CSE");
const student2 = new Student("Arafat Rahman", 011181013, "CSE");
const student3 = new Student("Lahaduzzaman", 011181086,"CSE");
const student4 = new Student("Tayab Pavel", 011181005,"CSE");

console.log(student1,student2,student3,student4);