/* Work through the following problems in Javascript 
(you have seen these problems before). Create a new file for your code. 
When you have finished with each function, leave a code comment with what 
you believe the runtime of your code to be.

1) Sum Zero
Write a function that takes in an array of numbers. 
The function should return True if any two numberss in list sum to 0, 
and false otherwise. */

let addZero = false;
function addToZero(array) {
  for (i = 0; i < array.length; i++) {
    for (j = i+1; j < array.length; j++) {
      if(array[i] + array[j] === 0) {
        addZero = true;
      }
    }
  }
  return (addZero)
}

console.log(addToZero([0,1,2,3,4,5,-3]))
//time complexity = O(n²)
//space complexity = O(n)

/*
2) Unique Characters
Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters. 
Return False otherwise.*/

function uniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }   
  } return true; 
}

console.log(uniqueChars('honeypat'))
//time complexity = O(n)
//space complexity = O(n)


/*
3) Pangram Sentence

A pangram is a sentence that contains all the letters of the English alphabet 
at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
*/

function isPangram(string) {
  let str = string.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphaArr = alphabet.split('')

  for(let i = 0; i < str.length; i++){
     let index = alphaArr.indexOf(str[i])
     if(index !== -1){
        alphaArr.splice(index, 1)
     }
  }
  
  if (alphaArr.length === 0) {
    return true
  } else {
    return false
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//time complexity = O(n²)
//space complexity = O(n)

/* 
4) Longest Word

Write a function, find_longest_word, that takes a list of words and returns 
the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5

Makes more sense to call it "findLongestWordLength" since we're getting back a number,
so that's what I'm gonna do.
*/

function findLongestWordLength(array) {
  let solutionsArr = ['']
  for (i = 0; i < array.length; i++) {
    if (array[i].length > solutionsArr[solutionsArr.length-1].length) {
      solutionsArr.push(array[i])
    }
  } return solutionsArr[solutionsArr.length-1].length
}

console.log(findLongestWordLength(["hi", "hello", "hey"]))
//time complexity = O(n)
//space complexity = O(n)
