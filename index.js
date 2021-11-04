// given the folder, list all the files of that folder in command line
const path = require('path')
const { rename } = require('fs/promises')
const { readdir } = require('fs/promises')

const args = process.argv.slice(2)
const [folderPath, PREFIX, POSTFIX] = args

let newFileName = ''

// console.log(folderPath)
const SplitfolderPath = folderPath.split('\\')
// console.log(SplitfolderPath)
const oldFileName = SplitfolderPath.splice(SplitfolderPath.length - 1, 1)
// console.log(oldFileName)
if (PREFIX) {
  newFileName = `${PREFIX} ${oldFileName}`
}
if (POSTFIX) {
  newFileName = `${newFileName} ${POSTFIX}`
}
// console.log(newFileName)
SplitfolderPath.push(newFileName)
console.log(SplitfolderPath)
const newPath = SplitfolderPath.join('/')
// console.log(newPath)
rename(folderPath, newPath)

// readdir(folderPath)
//   .then((dir) => {
//     files.push(...dir)
//     console.log(files)
//     const updatedFileNames = updateNamesOfFiles(files)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// function updateNamesOfFiles(files) {

// }
