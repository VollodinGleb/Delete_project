// 1 task
let func = (age="18", name) => `My name is ${name}, I am ${age}.`;
alert(func("Glebus"));

// 2 task
class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
}

const person = new Human("John", 30, 70, "Male");
