//1. Object literal

const student = {
    firstname: '',
    lastname: '',
    grades: [],
    inputNewGrade: function(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
        const avg = this.grades.reduce((a, b, index, array) => a + b/array.length, 0);
        console.log(`Computing average grade for ${this.firstname} ${this.lastname}: ${avg}`);
        return avg
    }
}

function getObjectLiteralStudentArray() {
    const s1 = Object.create(student, {grades: {value: []}});
    s1.firstname = "Amgalan";
    s1.lastname = "Bat-Erdene";
    s1.inputNewGrade(100);
    s1.inputNewGrade(95);
    s1.inputNewGrade(98);

    const s2 = Object.create(student, {grades: {value: []}});
    s2.firstname = "John";
    s2.lastname = "Smith";
    s2.inputNewGrade(100);
    s2.inputNewGrade(80);
    s2.inputNewGrade(85);

    const s3 = Object.create(student, {grades: {value: []}});
    s3.firstname = "Edward";
    s3.lastname = "White";
    s3.inputNewGrade(60);
    s3.inputNewGrade(100);
    s3.inputNewGrade(93);

    return [s1, s2, s3]
}

//2. Constructor function
function Student(fname, lname, grades=[]) {
    this.firstname = fname;
    this.lastname = lname;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function() {
    const avg = this.grades.reduce((a, b, index, array)=>a + b / array.length, 0);
    console.log(`Computing average grade for ${this.firstname} ${this.lastname}: ${avg}`);
    return avg;
}

function getConstructoFunctionStudentArray(){
    const st1 = new Student('Amgalan', 'Bat-Erdene');
    st1.inputNewGrade(100); 
    st1.inputNewGrade(95);
    st1.inputNewGrade(98);

    const st2 = new Student('John', 'Smith');
    st2.inputNewGrade(100);
    st2.inputNewGrade(80);
    st2.inputNewGrade(85);

    const st3 = new Student('Edward', 'White');
    st3.inputNewGrade(60);
    st3.inputNewGrade(100);
    st3.inputNewGrade(93);

    return [st1, st2, st3]
}

function computeAverageGradeForStudents(studentArrayFn) {
    const studentArray = studentArrayFn();
    console.log(`Overall grade average is: ${studentArray.reduce((a, b, index, array) => a + b.computeAverageGrade()/array.length, 0)}`);
}

console.log('Object literal');
computeAverageGradeForStudents(getObjectLiteralStudentArray);
console.log('Constructor function');
computeAverageGradeForStudents(getConstructoFunctionStudentArray);


//3 add sort method to built-in constructor function Array
Array.prototype.mySort = function() {
    const arr = this;
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1])
            {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log([7, 5, 2, 4, 3, 9].mySort());