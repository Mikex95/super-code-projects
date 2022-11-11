let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
  ];

  let table = document.querySelector('table');
  let td1 = document.getElementById('td1');
  let td2 = document.getElementById('td2');
  let td3 = document.getElementById('td3');


  let arrayName = [];
  let arrayPreis = [];
  let arrayChange = [];

  edelMetallPreise.forEach(elt => {
    arrayName.push(elt.name);
    arrayPreis.push(elt.preiseGramEuro);
    arrayChange.push(elt.veraenderung);
  })

console.log(arrayName);
console.log(arrayPreis);
console.log(arrayChange);

arrayName.forEach(elt => {
    const tr = document.createElement("tr");
    tr.innerText = elt;
    td1.appendChild(tr);
});

arrayPreis.forEach(elt => {
    const tr = document.createElement("tr");
    tr.innerText = elt;
    td2.appendChild(tr);
});

arrayChange.forEach(elt => {
    const tr = document.createElement("tr");
    tr.innerText = elt;
    td3.appendChild(tr);
})