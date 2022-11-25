// Input fields

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let stage = document.getElementById('stage');
let albums = document.getElementById('albums');
let singles = document.getElementById('singles');
let netWorth = document.getElementById('networth');
let age = document.getElementById('age');
let textArea = document.getElementById('textarea');
let paniniContainer = document.querySelector(".panini-container");


// Button

let submit = document.getElementById('submit');

// Output

let firstNameOutput = document.getElementById('first-name-output');
let lastNameOutput = document.getElementById('last-name-output');
let stageNameOutput = document.getElementById('stage-name-output');
let albumsOutput = document.getElementById('albums-output');
let singlesOutput = document.getElementById('singles-output');
let netWorthOutput = document.getElementById('net-worth-output');
let ageOutput = document.getElementById('age-output');
let textareaOutput = document.getElementById('textarea-output');
let image = document.getElementById('image-output');

submit.addEventListener('click', function(){
    class Musician {
        constructor(){
            this.Name = firstName.value;
            this.Surname = lastName.value;
            this.StageName = stage.value;
            this.Albums = albums.value;
            this.Singles = singles.value;
            this.netWorth = netWorth.value;
            this.age = age.value;
            this.textArea = textArea.value;
            this.imageUrl = image.value;
            firstNameOutput.innerHTML = `Name: ${this.Name}`;
            lastNameOutput.innerHTML = `Last Name: ${this.Surname}`;
            stageNameOutput.innerHTML = `Stagename: ${this.StageName}`;
            albumsOutput.innerHTML = `Albums: ${this.Albums}`;
            singlesOutput.innerHTML = `Singles: ${this.Singles}`;
            netWorthOutput.innerHTML = `Net worth: ${this.netWorth}`;
            ageOutput.innerHTML = `${this.age} years old`;
            textareaOutput.innerHTML = `Quote: ${this.textArea}`;
            image.innerHTML = `<div class="card" style=background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEUw803VJ2Od7ovc4Cz7xrpjcY-cl0W9W-uy97MuYgw&s")`;
            console.log(this.imageUrl);
        }   
    }

    let Musician1 = new Musician;
    console.log(Musician1);
})

