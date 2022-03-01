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


// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
//Any remaining seconds left over are ignored.
//
// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"
//
// For example:
//
// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

function toTime(seconds){
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);

    return hours + " hour(s) and " + minutes + " minute(s)";
}


// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come' +
//'together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up.
// "It's always gonna be about tree fiddy."
//
// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost
// tricked you!
//     There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast
// from the paleolithic era; B) it will ask you for tree fiddy.
//     Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you
// are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster
// Note that the phrase can also be written as "3.50" or "three fifty".

function isLockNessMonster(s){
    if (s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")){
        return true;
    }
}
