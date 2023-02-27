// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    getName() {
      console.log(`This employee name is ${this.name}`);
      
    }
    getId() {
        
        console.log(`This employee has an id of ${this.id}`);
    }
    getEmail() {
        console.log(`This employee has email is: ${this.email}`);
    }
    getRole() {
        return 'Employee'
    }
  }
  module.exports = Employee;
  