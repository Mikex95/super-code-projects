
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
  const date1 = new Date("2001,3,4");
  let names = list[date1.getMonth()];

  const date2 = new Date("2019,12,24");
  let names2 = list[date2.getMonth()];

  console.log(names);
  console.log(names2);