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

     StudentOneData() {
        return `Student name:  ${this.name} <br>
        Age:  ${this.age} <br>
        Gender:  ${this.gender} <br>
        Course:  ${this.course} <br>
        Year:  ${this.year} <br>
        Course Name:  ${this.course_Name} <br>
        Course Duration:  ${this.course_Duration} <br>
        Course Fee:  ${this.course_Fee} <br>
        Course Registration:  ${this.course_Registration} <br>
        Course Credit Hours:  ${this.course_C_Hours} <br>`
    }

    StudentTwoData() {
        return `Student name:  ${this.name}  <br>
        Age:  ${this.age}  <br>
        Gender:  ${this.gender} <br>
        Course:  ${this.course} <br>
        Year:  ${this.year} <br>
        Course Name:  ${this.course_Name} <br>
        Course Duration:  ${this.course_Duration} <br>
        Course Fee:  ${this.course_Fee} <br>
        Course Registration:  ${this.course_Registration} <br>
        Course Credit Hours:  ${this.course_C_Hours} <br>`
    }
  }


  let std1 = new Student_Info("Mubeen Rani", 24, "Female", "IT", 2024);
  std1.courseDetail("Computer Programming", "4 Months", "RS: 7000/-", "July 2024", "4CH");
  
  document.getElementById("Student1data").addEventListener("click", function() {
        document.getElementById("student1").innerHTML = std1.StudentOneData();
    });


  let std2 = new Student_Info("Khizar Hayat Khan", 22, "Male", "Computer Engineering", 2024);
  std2.courseDetail("Data Structures", "4 Months", "RS: 9000/-", "July 2024", "4CH");

  document.getElementById("Student2data").addEventListener("click", function(){
    document.getElementById("student2").innerHTML = std2.StudentTwoData()
  })