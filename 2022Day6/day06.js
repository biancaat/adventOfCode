const fs = require("fs");

const input = fs
  .readFileSync("2022Day6/day06.txt", { encoding: "utf-8" })

// PART ONE

// intake a string 
// return the total number of characters iterated over until a length of 4 unique characters is found. Include the 4 unique characters in the total

// holds the length of the sequence we want to evaluate each time
let firstSequence = 4

for (let i = firstSequence; i < input.length; i++){
    // assign a unique sequence from the input to set
    let set = new Set(input.slice(i-firstSequence, i))
    // return i when set contains 4 unique characters
    if (set.size === firstSequence){
        console.log(i) 
        break
    }
}

// O(n)
// O(1) space complexity

// PART TWO

// return the total number of characters iterated over until a length of 14 unique characters is found. Include the 14 unique characters in the total

let secondSequence = 14

for (let i = secondSequence; i<input.length; i++) {
  let set = new Set(input.slice(i-secondSequence,i))
  if (set.size === secondSequence) {
    console.log(i)
    break;
  }
}

// O(n)
// O(1) space complexity