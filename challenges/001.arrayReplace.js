// Array Replace
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(array, elemToReplace, substitutionElem) {
    array.forEach(function(number, i) { if (number === elemToReplace) array[i] = substitutionElem; })
    return array
}