// Darkmode
let buttonDarkMode = document.querySelector('.button1');
let wrapper = document.querySelector('.wrapper');

buttonDarkMode.addEventListener('click', function(){
    wrapper.classList.toggle("dark-mode");
})

// API vars
let API_KEY = "3689fb0985f763b5086365dcf8c701b2";
let cityName = document.querySelector('#search-bar');

// Submit 
let button = document.querySelector('#submit');

// Date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();

// Output
let outputDate = document.querySelector('.output-date');
let outputLocation = document.querySelector('.output-location');
let outputTemp = document.querySelector('.output-temp')
let outputWeatherCondition = document.querySelector('.output-weather-condition');


button.addEventListener('click', () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let lon = data[0].lon
        let lat = data[0].lat

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((weatherData) => {
        console.log(weatherData);


        outputLocation.innerHTML = data[0].name;
        outputTemp.innerHTML = `${weatherData.main.temp} °C`;
        outputWeatherCondition.innerHTML = weatherData.weather[0].description;
    })
    })

})

    // outputDate.innerHTML = `${day} ${month} ${year}`
    // outputLocation.innerHTML = 




