let button = document.getElementById("button");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let examCheck = document.getElementById("examCheck");
let output = document.getElementById("result");

button.addEventListener('click', function() {
    class Person {
        constructor(){
          this.firstName = nameInput.value;
          this.age = ageInput.value; 
        }
     write() {
        if (examCheck.checked == false) {
            output.innerHTML += `<li class="red" > ${this.firstName}, ${this.age} years old </li> `
        } else {
            output.innerHTML +=
            `<li> ${this.firstName}, ${this.age} years old </li>`
        }
     }
    }
    let newPerson = new Person();
    console.log(newPerson.write());
})



