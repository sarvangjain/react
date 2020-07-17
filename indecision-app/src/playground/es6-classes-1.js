
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hey, I am ${this.name}!`;
    }
    getDescription(){
         return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    };

    getDescription(){
        let desc = super.getDescription();
        if(this.major){
            desc += ` Their major is ${this.major}.`;
        }
        return desc;
    };
};

class Traveller extends Person {
    constructor(name, age, loc){
        super(name, age);
        this.homeLoc = loc;
    }

    getGreeting(){
        let greet = super.getGreeting();
        if(this.homeLoc){
            greet += ` I'm visiting from ${this.homeLoc}.`
        }
        return greet;
    }
};

const me = new Student('Sarvang Jain', 20, 'CSE');
console.log(me.getDescription());
const other = new Student();
console.log(other.getDescription());
const ron = new Traveller('Ron', 18, 'Jaipur');
console.log(ron.getGreeting());
const herm = new Traveller('Hermoine', 25);
console.log(herm.getGreeting());