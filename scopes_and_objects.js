let globalCount = 18;

function demonstrateLocalScope() {
  let localCount = 7;

  console.log("Locally scoped variable: ", localCount);
  console.log("Globally scoped variable: ", globalCount);
}

demonstrateLocalScope();

function modifyVariables() {
  globalCount = 37;

  let localCount = 14;

  console.log("Modified local scoped variable: ", localCount);
  console.log("Modified global scoped variable: ", globalCount);
}

modifyVariables();

function Student(firstName, lastName, hairType, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hairType = hairType;
  this.eyeColor = eyeColor;
}

const student1 = new Student("Jenna", "Marshall", "Wavy", "Brown");
const student2 = new Student("Aria", "Montgomery", "Wavy", "Brown");
const student3 = new Student("Emily", "Feilds", "Straight", "Brown");
const student4 = new Student("Ashley", "Marin", "Curly", "Brown");
const student5 = new Student("Caleb", "Rivers", "Straight", "Brown");
const student6 = new Student("Ian", "Thomas", "Curly", "Blue");
const student7 = new Student("Ezra", "Fitzgerald", "Straight", "Blue");

console.log(
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
);

const universityCourse = {
  id: 51007,
  name: "Hanna Marin",
  subject: {
    class: "Dramatic Arts",
    teacher: "Proffesor Fitzgerald",
    room: 212,
  },
  studentCourse: function () {
    return `Student number ${this.id} ${this.name} takes ${this.subject.class} with ${this.subject.teacher} in room ${this.subject.room}.`;
  },
};

console.log(universityCourse.studentCourse());
