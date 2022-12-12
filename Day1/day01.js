const fs = require("fs");

// assign data from txt file to input variable
const input = fs
  .readFileSync("Day1/day01.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));


//  PART ONE 

// intake an array of numbers, some numbers are larger or smaller than the last, whole numbers, positive.
// return the number of times the current number is larger than the previous


// create a counter variable
  let firstCount = 0

// loop through the input array
  for (let i = 0; i<= input.length; i++){
    // if current index is greater than the previous index add 1 to the counter
    if (input[i] > input[i-1]){
        firstCount += 1
    }
  }

  console.log(firstCount)

  // O(n) time complexity
  // O(1) space complexity  


//   PART TWO


// return the number of times the sum of the current 3 numbers in the sliding window of numbers is greater than the sum of the last 3 numbers in the sliding window of numbers. 


let secondCount = 0

for (let i = 0; i<=input.length; i++){
    // if the current sum of the current three elements > than the sum of the last 3 elements add 1 to counter
    if (input[i+1] + input[i +2] + input[i +3] > input[i] + input[i + 1] + input[i+2]){
      secondCount +=1
    }
  }

  console.log(secondCount)

  // O(n) time complexity
  // O(1) space complexity  

