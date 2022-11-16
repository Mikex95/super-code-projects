console.log("hallo");

let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let date = new Date();

let days = date.getDay();
let months = date.getMonth();
let years = date.getFullYear();

console.log(days);

year.innerHTML = years + "-";

const dates = function(){
    if (months == 10) {
        month.innerHTML = 11
    } if (days == 3) {
        day.innerHTML = "Mittwoch"
    }

}

dates()