pTag = document.querySelector('p');

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800)
let date4 = new Date(86400000)


pTag.innerHTML += date1 + "<br>"
pTag.innerHTML += date2 + "<br>"
pTag.innerHTML += date3 + "<br>"
pTag.innerHTML += date4 + "<br>"