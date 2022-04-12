
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //Function takes name input
    getName() {
        return this.name;
    }


};



module.exports = Employee;
