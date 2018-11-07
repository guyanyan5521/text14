
class Student{
    fullName:string;
    constructor(public fristName,public middleInitial,public lastName){
        this.fullName=this.fristName+" "+this.middleInitial+" "+this.lastName;
    }
}
interface Person{
    fristName:string;
    lastName:string;
}

function greeter(person  : Person){
return "hello"+" "+person.fristName+" "+person.lastName;
}
// var user ="jan user";
var user = new Student("lale","d","lilu");
document.body.innerHTML = greeter(user);