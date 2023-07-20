// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     };
//     run(speed) {
//         console.log(`${this.name} made at ${this.year} is running in ${speed} `);
//     }
// };
// const bmw = new Car('BMW', 2004);
// const toyota = new Car('Toyota', 2008);
// // console.log(bmw);
// // console.log(bmw.name);

// bmw.run(`200 mph`);
// toyota.run(`250 mph`);

class Student {
    constructor(name, passingYear) {
        this.name = name;
        this.passingYear = passingYear;
    }
    run(subject) {
        console.log(`${this.name} passed at ${this.passingYear} is studying at ${subject} now.`);
    }
}

const student1 = new Student('Abdul Bari', 2007);
const student2 = new Student('Abdur Rahim', 2009);

student1.run(`Bangla`);
student2.run(`Math`);
