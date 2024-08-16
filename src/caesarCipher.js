function caesarCipher(string, shift) {
    shift = shift % 26;

    let result = '';

    const stringArray = string.split('');

    stringArray.forEach(char => {
        result += shiftChar(char, shift);
    })

    return result;
} 

function shiftChar(char, shift) {
    if (!isAlphabet(char)) {
        return char;
    }

    const baseCode = isUpperCase(char) ? 65 : 97;

    let newCharCode = ((char.charCodeAt(0) - baseCode + shift) % 26) + baseCode;

    // Handle negative wrapping
    if (newCharCode < baseCode) {
        newCharCode += 26;
    }

    return String.fromCharCode(newCharCode);
}

function isUpperCase(char) {
    if (char.toUpperCase() === char) {
        return true;
    } else {
        return false;
    }
}

function isAlphabet(char) {
    let unicode = char.charCodeAt(0);
    if(unicode >= 65 && unicode <= 90) {
        return true;
    } else if(unicode >= 97 && unicode <= 122) {
        return true;
    } else {
        return false;
    }
}

module.exports = caesarCipher;

