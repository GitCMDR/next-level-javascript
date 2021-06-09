// Given a string, check if it can become  a palindrome through a case change of some (possibly, none) letters.

function caseInsensitivePalindrome(str) {
    let result = true;

    let arrayOne = str.toLowerCase().split("")
    let arrayTwo = str.toLowerCase().split("").reverse()

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            result = false
        }
    }
    return result;
}
caseInsensitivePalindrome("hello") // returns false
caseInsensitivePalindrome("acca") // returns true