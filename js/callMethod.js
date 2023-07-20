const person = {
    fullName: function (city, country) {
        return `${this.firstName} ${this.lastName} lives at ${city} in ${country}`;
    }
}

const person1 = {
    firstName: 'Abul',
    lastName: 'Kalam'
}
const person2 = {
    firstName: 'Abdul',
    lastName: 'Wadud'
}

const result = person.fullName.call(person2, 'Dhaka', 'Bangladesh');
console.log(result);