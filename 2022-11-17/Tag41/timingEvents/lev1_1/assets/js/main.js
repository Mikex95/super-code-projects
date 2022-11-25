

// const konsolenAusgabe = () => {
//     let date = new Date();
//     let hoursMinutesSeconds = date.getHours() + ":" + date.getMinutes()  + ":" + date.getSeconds();
//     console.log(hoursMinutesSeconds);
// }

// setInterval(konsolenAusgabe, 1000)



let counter = 10;

setInterval(function(){
    console.log(counter);
    counter--;
    if (counter === 0) {
        console.log("Happy Birthday!!");
    } else if (counter <= 0){
        counter = 10
    }
}, 1000)