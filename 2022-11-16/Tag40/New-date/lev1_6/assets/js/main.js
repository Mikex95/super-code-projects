
let date = new Date();

const period = function() {
    if (date.getHours() <= 12) {
        console.log("AM");
    } else {
        console.log("PM");
    }
}

period()