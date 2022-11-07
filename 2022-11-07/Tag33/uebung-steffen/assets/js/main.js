

// let sum = 0;
// for (let i=1; i <= 100; i++){
//     sum += i;
// }

// console.log(sum);



// for (let i = 0; i < 5; i++){
//     console.log("********");
// }

// let sum = "";

// for (let i = 1 ; i <= 5; i++){
//     sum += "*";
//     console.log(sum);
// }

// let hallo = sum + 5;

// console.log(hallo);

// for (let i = 5 ; i <= 10; i++){
//     console.log(i);
// }

// for (let i = 50; i >= 45; i--){
//     console.log(i);
// }

// let country = ['france', 'germany', 'spain'];

// console.log(country[0].toUpperCase());

let arr = [10,20,30];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i] * 2);
}

// for of

for (let i of arr) {
    console.log(i * 2);
}

// forEach

arr.forEach((elt) => console.log(elt * 2));