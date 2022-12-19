import { array } from "./data.js"
import { arraySecond } from "./data.js"


export const array1 = () => {
    return array[0]
}


export const array2 = () => {
    return array.pop()
}


export const array3 = () => {
    return array[array.length -1]
}


export const array4 = () => {
    return array.slice(1);
}



export const array5 = () => {
    return array.splice(2,2);  
}




export const array6 = (newArray) => {
   let uniqueArray = newArray.filter(function(element, index) {
        return newArray.indexOf(element) === index;
      });
      return uniqueArray;
}




export const array7 = () => {
    let sum = eval(arraySecond.join("+"));
    return sum;
} 




export const noArray = (min, max) => {
let randomNumber = Math.random() * (max - min) + min ;
return randomNumber.toFixed()
}




export const noArray2 = (string) => {
    let upperCase = string.charAt(0).toUpperCase() + string.slice(1);
    return upperCase
    }
    




export const noArray3 = (string) => {
    let upperCase = string.toUpperCase();
    return upperCase
    }
        


export const noArray4 = (string, string2) => {
if (string.slice(-1) === string2.slice(-1)) {
    console.log(true);
    return
} else {
    console.log(false);
    return
} 

}




