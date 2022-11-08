let deutscheGerichte = ["Speckkuchen","Thüringer Bratwurst","Quarkkeulchen","Sauerbraten"];
deutscheGerichte.unshift("Schnitzel", "Maultaschen", "Klöse", "Weißwurst", "Schupfnudeln");

let nichtGut = deutscheGerichte.shift();
let nichtGut2 = deutscheGerichte.shift();
let nichtGut3 = deutscheGerichte.shift();
console.log(deutscheGerichte);
console.log(nichtGut);
console.log(nichtGut2);
console.log(nichtGut3);