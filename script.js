class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage:
const person1 = new Person("John", 25);
console.log(`Person 1: ${person1.name}, Age: ${person1.age}`);

const student1 = new Student("Alice", 20);
console.log(`Student 1: ${student1.name}, Age: ${student1.age}`);
student1.study();

const teacher1 = new Teacher("Mr. Smith", 35);
console.log(`Teacher 1: ${teacher1.name}, Age: ${teacher1.age}`);
teacher1.teach();
