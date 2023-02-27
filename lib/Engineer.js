const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(github) {
      super(id, name, email, github);
      this.officeNumber = github;
     
    }
  
    getRole() {
      return 'Engineer';
    }
    getGithub() {
        console.log(`This employee Github is: ${this.github}`);
    }
  
    
  }