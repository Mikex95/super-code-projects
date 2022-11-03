let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
 let getraenkeSortieren = getraenke.sort()
 
getraenkeSortieren.forEach ((myDrinks) => {
    console.log(myDrinks);
    document.write(myDrinks + "<br>" )
})