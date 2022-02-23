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

// In this task, you need to restore a string from a list of its copies.
//You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").
//
//You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that. If the array is empty, then return an empty string.

input1 = [
    "a*cde",
    "*bcde",
    "abc*e"
]
// result = "abcde"


input2 = [
    "a*c**",
    "**cd*",
    "a*cd*"
]
// result = "a#cd#"

function repairTheString(arr){
    let properString = "";

    for(let i = 0; i < arr.length; i++){
        console.log(i)
    }

}

repairTheString(input1);