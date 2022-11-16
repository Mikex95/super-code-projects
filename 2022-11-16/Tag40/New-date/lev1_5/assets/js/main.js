
let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  const d = new Date("2001,3,4");
  let names = list[d.getMonth()];

  const da = new Date("2019,12,24");
  let names2 = list[da.getMonth()];

  console.log(names);
  console.log(names2);