// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(officeNumber) {
      super(id, name, email, officeNumber);
      this.officeNumber = officeNumber;
     
    }
  
    getRole() {
        console.log("Manager")
    }
  
    
  }