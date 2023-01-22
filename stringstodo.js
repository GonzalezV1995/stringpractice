// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
// make a new string initalized into a blank string
    let newStr =''
// loop through the givne string
    for (let i=0; i < str.length; i++) {
    // check to see if current character is not a space
    if(str[i] != '') {
    // then concatendate with new string
    newStr += str[i]
    }
}
    // return new string
    return newStr

}

console.Log (removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.Log (removeBlanks("IcannotBELIEVEit'snotBUTTER"))




// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


function getDigits(str){
    // make a new string
    let newNumStr=''
    // for char in string
    for (let char in str) {
        // inside of for loop we are testing to see if a character that we are looking at is a numberor not
        // if character is a number
            // isNan is a function that determines whether a value is not a number or not 
            if (!isNaN(str[char])) {
                  // concatendate into a new string
            consolelog(str[char])
            newNumStr += str[char]
            }
    }
console.log(Number(newNumStr))
        // turn string into a new number
        // return a new string
return Number(newNumStr)
}

getDigits ("0s1a3y5w7h9a2t4?6!8?0")





// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
// we need to determine what the seperate starting letters are for each word in the sentence- lets used string.proptype.split()
    let wordsArr= str.split('')
    let acronymStr=''

    console.log(wordsArr)


    // loop through wordsArr and grab the first letter of the word. 
    for (let word in wordsArr) {
    // grab the first letter of the word
    if (wordsArr[word].length > 0) {
    acronymnStr += wordsArr[word][0]
        console.log (wordsArr[word[0]]).toUpperCase()   
    // transform first letter to uppercase
    }

    // concatendate that letter into an acronymn string

    }

    // return acronymn string
    return acronymStr
}

console.log(" there's no free lunch - gotta pay yer way. ")

console.log("Live from New York, it's Saturday Night!")

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    // counter variable needs to be started
    let counter=0
    // loop through the string 
    for (let char in str) {
            // if character is not  space
        if (str[char] != '')
      // then increase or increment counter
    counter ++
    }
    // return counter
    return counter


}

console.log (countNonSpaces("Honey pie, you are driving me crazy"))
console.log (countNonSpaces("Hello world !"))


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr,length) {

    // create new array which will be blank. Cannot use push but we need to tell code which index to use
    let newStrings= []
    // initalize a newIndex variable
    let nextIndex=0
    
    // loop through given array
    for (let value in arr) {




    }
        // if value is greater than or equal to len
        if(arr[value].length >= len) {
            // then add valie to new array
            newStrings[nextIndex++]=arr[value]


        }
        return newStrings
}

console.log (removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))

console.log (removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))


