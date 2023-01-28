function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("hello"))

function isLeapYear(num) {
    if (num % 400 == 0) return true;
    else if (num % 100 == 0) return false;
    else if (num % 4 == 0) return true;
    else return false;
}


function isPangram(string) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stringCaps = string.toUpperCase();
    console.log(stringCaps);
    for (let i = 0; i < stringCaps.length; i++){
        alphabet = alphabet.replace(stringCaps[i], "");
        console.log(alphabet);
    }
    if (alphabet.length == 0) return true;
    else return false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("test"))