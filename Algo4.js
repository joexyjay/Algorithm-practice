//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
// let newSplit = str.split('')
// return newSplit.map(st=> st + st).join('')

let newString = ''
for(let i = 0; i < str.length; i++) {
    newString += str[i] + str[i]
}
return newString
}
console.log(doubleChar('joe'))
console.log(doubleChar('string'))