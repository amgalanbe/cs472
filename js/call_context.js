// function askPassword(ok, fail){
//     let password = prompt("Password?", '');
//     if(password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     }
// };

// askPassword(user.loginOk, user.loginFail);


/*
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        });
    }
}

group.showList();
*/

//1. Arrow function
console.log("1. Arrow function");
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    }
}

group.showList();

//2. bind
console.log("2. bind");
group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
}

group.showList();

//3. self pattern
console.log("3. self pattern");
group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        const self = this;
        this.students.forEach(function(student) {
            console.log(self.title + ": " + student);
        });
    }
}

group.showList();

//4. call
console.log("4. call");
group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach((s)=>function(student) {
            console.log(this.title + ": " + student);
        }.call(this, s));
    }
}

group.showList();

//5. apply
console.log("5. apply");
group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach((s)=>function(student) {
            console.log(this.title + ": " + student);
        }.apply(this, [s]));
    }
}

group.showList();