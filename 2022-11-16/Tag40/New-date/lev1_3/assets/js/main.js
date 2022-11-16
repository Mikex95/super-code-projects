console.log("hallo");

let output = document.getElementById('output');
let date = new Date(2222, 9, 23);
let date2 = new Date(2123, 1, 24, 13,25);
let date3 = new Date(2123, 2, 24);
let date4 = new Date(2123, 2, 3, 7,7);
let date5 = new Date(2019, 10, 22);





output.innerHTML = date +`<br>`;
output.innerHTML += date2 +`<br>`;
output.innerHTML += date3 +`<br>`;
output.innerHTML += date4 +`<br>`;
output.innerHTML += date5 +`<br>`;