const Employee = require("./Employee");
class Intern extends Employee {
    constructor(school) {
      super(id, name, email, school);
      this.school = school;
     
    }
  
    getRole() {
      return 'Engineer';
    }
    getSchool() {
        console.log(`This employee Github is: ${this.school}`);
    }
  
}