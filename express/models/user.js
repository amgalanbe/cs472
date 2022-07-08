const users = [];
let idCounter = 0;

class User {
    constructor(id, fname, lname, age) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    save() {
        this.id = ++idCounter;
        users.push(this);
        return this;
    }

    static getAll(){
        return users;
    }

    static getUserById(userId) {
        return users.find(u=>u.id = userId);
    }
}

new User(null, 'George', 'Washington', 57).save();
new User(null, 'John', 'Adams', 61).save();
new User(null, 'Thomas', 'Jefferson', 57).save();
new User(null, 'James', 'Madison', 57).save();
new User(null, 'James', 'Monroe', 58).save();

module.exports = User;