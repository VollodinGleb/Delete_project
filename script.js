// 2 task
let func = (age="18", name) => `My name is ${name}, I am ${age}.`;
// alert(func("Glebus"));

// 3 task
class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    
    getInfo(prop) {
        if (prop === null) {
            let info = `Name: ${this.name}\nAge: ${this.age}\nWeight: ${this.weight}\nGender: ${this.gender}`;
            return info;
        } else if (Object.keys(this).includes(prop)) {
            return this[prop];
        } else {
            return `Invalid property: ${prop}`;
        }
    }

    greeting() {
        return "Hi!";
    }
}

const person = new Human("John", 30, 70, "Male");

alert(person.getInfo('age'));