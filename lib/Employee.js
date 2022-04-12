
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //Function takes name input
    getName() {
        return this.name;
    };


    //Function takes ID input
    getId() {
        return this.id;
    };


    //Function takes email input
    getEmail() {
        return this.email;
    };


    //Function takes role input
    getRole() {
        return 'Employee';
    }


};



module.exports = Employee;
