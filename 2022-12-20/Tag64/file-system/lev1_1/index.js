const fs = require("fs")

fs.writeFileSync("blog1.txt", "Hello World");
fs.writeFileSync("blog2.txt", "Datei Zwei");

fs.mkdir('assets', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Ordner wurde erstellt');
    }
  });
//   Löschen
//   fs.rmdir('assets', (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Ordner wurde gelöscht');
//     }
//   });

fs.writeFileSync("delete.txt", "hallo")
//   fs.rmSync("delete.txt")
fs.writeFileSync("Hello.txt", "Wie geht es dir?")
fs.renameSync("Hello.txt", "HellowWorld.txt")