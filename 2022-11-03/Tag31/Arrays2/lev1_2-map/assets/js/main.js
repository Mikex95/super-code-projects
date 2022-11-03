let drinks = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
 
let drinks2 = drinks.map((x) => {
    return x.toUpperCase();
})

console.log(drinks2);