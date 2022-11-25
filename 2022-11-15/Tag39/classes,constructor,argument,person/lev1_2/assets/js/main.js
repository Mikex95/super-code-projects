class Person {
    constructor(firstName, age){
      this.firstName = firstName;
      this.age = age; 
    }
 info() {
    return `${this.firstName} is ${this.age} years old `
}
}

let person = new Person("Emanuela", 18);

console.log(person.info());