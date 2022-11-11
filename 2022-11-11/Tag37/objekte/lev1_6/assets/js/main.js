let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];

  const band = {artist: "Papa Roach", title: "Scars", release_year: 2002, medium: ["LP", "CD", "MC", "Download"], gold: true}

  myMusic.push(band)
  console.log(myMusic);
  