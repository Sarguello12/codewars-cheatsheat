// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//     Example
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//
// The returned format must be correct in order to complete this challenge.
//     Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let cleaned = ('' + numbers).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}


// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//
//     Division by zero should return NaN.
//     Examples:
//
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
//
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
//
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
//
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(num1, num2){
    if(num1 > num2 || num1 === num2){
        return num1 % num2;
    } else if(num2 < num1 || num2 === num1){
        return num2 % num1;
    } else if(num1 === 0 || num2 === 0){
        return NaN;
    }
}


// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
//     The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
//     You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//     Examples:
//
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printer_error(str){
    let totalOverM = 0;
    for (let i in str){
        if(str[i] > "m"){
            totalOverM++;
        }
    }
    return "" + totalOverM + "/" + str.length;
}


// Given a string str, reverse it omitting all non-alphabetic characters.
//     Example
//
// For str = "krishan", the output should be "nahsirk".
//
//For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let cleanStr = str.replace(/[\W0-9._]+/g, '');
    return cleanStr.split("").reverse().join("");
}
