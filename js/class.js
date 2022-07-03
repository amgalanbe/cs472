class LinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        if(this.head){
            let node = this.head;
            while(node.next){
                node = node.next;
            }
            node.next = new LinkedNode(value);
        } else this.head = new LinkedNode(value);
        this.size++;
    }

    remove(value) {
        let node = this.head;
        let prev = null;
        while(node && node.value != value) {
            prev = node;
            node = node.next;
        }
        if(node) {
            if(prev) prev.next = node.next;
            else this.head = node.next;
            
            this.size--;
        }
    }

    print() {
        let msg = "LinkedList{";
        let node = this.head;
        while(node.next) {
            msg += node.value + ","
            node = node.next;
        }
        msg += node.value + "}";
        console.log(msg);
    }
}
console.log("Q1: LinkedList");
const linkedlist = new LinkedList();
linkedlist.add(1); 
linkedlist.add(2); 
linkedlist.add(3); 
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3); 
linkedlist.print(); //in the console, you should see: LinkedList{1,3}

//2 Quiz
class Student {
    constructor(studentID) {
        this.studentID = studentID;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);

    }
}

class Question {
    constructor(quid, answer) {
        this.quid = quid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return this.answer == answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudentBySid(sid){
        return this.students
                .find(s=>s.studentID == sid)
                    .answers
                        .reduce((prev, curr) => prev + this.questions.find(q=>q.quid == curr.quid).checkAnswer(curr.answer), 0);
    }

    getAverageScore() {
        return students.reduce((prev, curr, index, array) => prev + this.scoreStudentBySid(curr.studentID) / array.length, 0);
    }
}

console.log("Q2: Quiz");
const student1 = new Student(10); 
student1.addAnswer(new Question(2, 'a')); 
student1.addAnswer(new Question(3, 'b')); 
student1.addAnswer(new Question(1, 'b')); 
const student2 = new Student(11); 
student2.addAnswer(new Question(3, 'b')); 
student2.addAnswer(new Question(2, 'a')); 
student2.addAnswer(new Question(1, 'd')); 
const students = [student1, student2]; 
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')]; 
const quiz = new Quiz(questions, students); 
let scoreforStudent10 = quiz.scoreStudentBySid(10); 
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11); 
console.log(scoreforStudent11); //Expected Result: 2 
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5