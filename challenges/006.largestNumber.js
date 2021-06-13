// return the largest number based on the number of available digits

function largestNumber(numOfDigits) {
    let placeholder = "";
    for (let i=0; i < numOfDigits; i++) {
        placeholder = placeholder.concat("", "9");
    }
    return placeholder;
}

console.log(largestNumber(3)); // should return 999