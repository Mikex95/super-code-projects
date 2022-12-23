const fs = require('fs');

const addToFile = (content, folder, data) => {
  const filePath = `${folder}/${data}`
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content)
  } else {
    fs.appendFileSync(filePath, `\n ${content}`)
  }
}
  addToFile('hello world', 'assets', 'data.txt');




