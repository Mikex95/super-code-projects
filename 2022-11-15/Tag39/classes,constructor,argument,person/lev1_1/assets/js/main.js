class Ball {
    constructor(ballType){
        this.ballType = ballType;
        if (ballType !== "super") {
            this.ballType = "regular"
        }
    }
}

let ball1 = new Ball();
let ball2 = new Ball("super")

console.log(ball1.ballType);
console.log(ball2.ballType);