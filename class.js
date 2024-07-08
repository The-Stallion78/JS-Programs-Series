// CLASS

// Classes are templates for JavaScript Objects.
// Classes are blueprints for creating objects.
// Use the keyword "class" to create a class.

class Student_Info {
    constructor(name, age, gender, course, year) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.course = course;
        this.year = year;
    }

    courseDetail (course_Name, course_Duration, course_Fee, course_Registration, course_C_Hours) {
        this.course_Name = course_Name;
        this.course_Duration = course_Duration;
        this.course_Fee = course_Fee;
        this.course_Registration = course_Registration;
        this.course_C_Hours = course_C_Hours;
    }
}

// Creating class object
console.log('\n\n')

let std1 = new Student_Info("Mubeen Rani", 24, "Female", "IT", 2024);
std1.courseDetail("Computer Programming", "4 Months", "RS: 7000/-", "July 2024", "4CH");

console.log("Student name: "+ std1.name);
console.log("Age: " + std1.age);
console.log("Gender: " + std1.gender);
console.log("Course: " + std1.course);
console.log("Year: " + std1.year);
console.log("Course Name: " + std1.course_Name);
console.log("Course Duration: " + std1.course_Duration);
console.log("Course Fee: " + std1.course_Fee);
console.log("Course Registration: " + std1.course_Registration);
console.log("Course Credit Hours: " + std1.course_C_Hours);
console.log('------------------------------\n')


// we can reuse the code by creating various objects.
let std2 = new Student_Info("Khizar Hayat Khan", 22, "Male", "Computer Engineering", 2024);
std2.courseDetail("Data Structures", "4 Months", "RS: 9000/-", "July 2024", "4CH");

console.log("Student name: "+ std2.name);
console.log("Age: " + std2.age);
console.log("Gender: " + std2.gender);
console.log("Course: " + std2.course);
console.log("Year: " + std2.year);
console.log("Course Name: " + std2.course_Name);
console.log("Course Duration: " + std2.course_Duration);
console.log("Course Fee: " + std2.course_Fee);
console.log("Course Registration: " + std2.course_Registration);
console.log("Course Credit Hours: " + std2.course_C_Hours);
console.log('------------------------------\n');


let std3 = new Student_Info("Rumi Rani", 7, "Female", "Grade 2", 2024)
std3.courseDetail("Arts and Design", "9 Months", "RS: 15000/-", "July 2024", "NA");

console.log("Student name: "+ std3.name);
console.log("Age: " + std3.age);
console.log("Gender: " + std3.gender);
console.log("Course: " + std3.course);
console.log("Year: " + std3.year);
console.log("Course Name: " + std3.course_Name);
console.log("Course Duration: " + std3.course_Duration);
console.log("Course Fee: " + std3.course_Fee);
console.log("Course Registration: " + std3.course_Registration);
console.log("Course Credit Hours: " + std3.course_C_Hours);
console.log('------------------------------\n');

// now using this, we can create record of 100 students, simply adding new objects