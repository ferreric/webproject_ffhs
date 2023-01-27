const testString = '3-4 t: dttt'
const testStringSplit = testString.split(' ')
//console.log(testStringSplit[0] + '\n' + testStringSplit[1] + '\n' + testStringSplit[2])
let minMax = testString.split('-', 2)
let min = eval(minMax[0])
let max = eval(minMax[1].toString().charAt(0))
let letter = testStringSplit[1].toString().split(':')[0]
let pwd = testStringSplit[2]
console.log(pwd + '\n' + letter + '\n' + min + '\n' + max + '\n')

const correctPassword = (pw, ltr, mi, ma) => {
    if (pw.split(ltr).length-1 >= mi && pw.split(ltr).length-1 <= ma) return true
    else return false
}
console.log(pwd.split(letter).length-1)
console.log(correctPassword(pwd, letter, min, max))