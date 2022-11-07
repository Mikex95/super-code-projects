let returnArray = [];

function imageArray(){
    for (let i = 1; i <= 100; i++){   
        console.log(i);
     if (i < 10) {
        returnArray.push("image_00" + i + ".jpg")
        console.log(1);
    } else if (i < 100){
        returnArray.push("image_0" + i + ".jpg")
    
    } else {
        returnArray.push("image_" + i + ".jpg")
    }
}
    
}
imageArray()

console.log(returnArray);