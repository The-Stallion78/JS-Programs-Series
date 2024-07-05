// 'this' keyword

/*
    this keyword is used to refer to the object that is executing the code
    this keyword is not a variable, it is a reference to the object that is executing the code
    In JavaScript, the this keyword refers to an object. The this keyword refers to different objects depending on how it is used.
*/

const person = {
    firstName: "Mubeen",
    lastName : "Rani",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log("Fullname: ", person.fullName())

