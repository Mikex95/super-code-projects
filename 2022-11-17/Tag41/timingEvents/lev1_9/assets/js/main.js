let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let period = document.getElementById('period');

let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]


const startTime = function() {
    let date = new Date();
    let hours = date.getHours()

    hour.innerHTML = date.getHours() + "  :";
    minutes.innerHTML = date.getMinutes() + "  :";
    seconds.innerHTML = date.getSeconds();
    day.innerHTML = days[date.getDay()];

    if (hours >= 12) {
        period.innerHTML = "PM"
    } else if (hours < 12) {
        period.innerHTML = "AM"
    }
}

setInterval(startTime, 1000);