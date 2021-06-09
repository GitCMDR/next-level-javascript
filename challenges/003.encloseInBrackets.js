// Given a string, enclose it in round brackets (give three possible options)

function encloseInBrackets(str) {
    return '(' + str + ')'
}

function encloseInBrackets2(str) {
    return `(${str})`
}

function encloseInBrackets3(str) {
    return "".concat("(",str,")")
}

