import { array } from "./array.js";

export const functions = () => {
    return array.sort(function (a,b) {
        return a - b; 
    })
}

