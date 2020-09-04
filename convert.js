var bin = ''
var dec = ''

function getBin() {
    bin = document.getElementById('bin').value
    if(isBinary(bin)) {
        convertBin2Dec(bin)
        document.querySelector('#dec').value = dec
    } else {
        alert('Binary numbers can accept only 0 and 1')
    }
}

function getDec() {
    dec = document.getElementById('dec').value
    convertDec2Bin(dec)
    document.querySelector('#bin').value = bin
}

function convertBin2Dec(number) {
    splitBin = number.split('')
    var amountDigits = splitBin.length;
    let result = 0
    let i = 0;
    while(amountDigits > 0) {
        result += splitBin[amountDigits - 1] * 2 ** i
        amountDigits--;
        i++;
    }
    dec = result
}

function convertDec2Bin(number) {
    let result = '1';
    let digits = []
    if (number == 0) {
        result = 0
    }
    while(number >= 2) {
        let digit = number % 2
        digits.push(digit)
        number = parseInt(number / 2)
    }
    for (let i = digits.length; i > 0; i--) {
        result = result + digits[i - 1];
    }
    bin = result
}

function isBinary(number) {
    let eachNumber = number.split('')
    let isBinary;
    for (let i = 0; i < eachNumber.length; i++) {
        if(eachNumber[i] == 0 || eachNumber[i] == 1) {
            isBinary = true
        } else {
            isBinary = false;
            break
        }
        
    }
    return isBinary
}