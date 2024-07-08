// Base class (Parent class)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Derived class (Child class) inheriting from Person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }

    // Method specific to Student class
    study() {
        return `${this.name} is studying.`;
    }

    // Overriding the introduce method
    introduce() {
        return `${super.introduce()} I am a student in grade ${this.grade}.`;
    }
}

// Another derived class (Child class) inheriting from Person
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Call the parent class constructor
        this.subject = subject;
    }

    // Method specific to Teacher class
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }

    // Overriding the introduce method
    static introduce() {
        return `${super.introduce()} I teach ${this.subject}.`;
    }
}

// Creating an instance of Student class
const student1 = new Student("Rumi", 8, "Playgroup");

console.log(student1.introduce()); 
console.log(student1.study());    
console.log("\n-----------------\n")
// Creating an instance of Teacher class
const teacher1 = new Teacher("Ayesha Khalil", 40, "Mathematics");

console.log(teacher1.introduce()); 
console.log(teacher1.teach());  
console.log("\n-----------------\n")
console.log(teacher1.introduce())