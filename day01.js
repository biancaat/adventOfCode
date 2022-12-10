// allows us to use the file system module to work with files on computer
const fs = require("fs");

// assign the data from txt file into an array
const array = fs
    // read data from text file synchronously
  .readFileSync("day01.txt", { encoding: "utf-8" })
    //   split the string into array indices on each new line
  .split("\n")
    // loops through array and parses each string number into an integer
  .map((x) => parseInt(x));


//  PART ONE 
// intake an array of numbers, some numbers are larger or smaller than the last, whole numbers, positive.
// return the number of times the current number is larger than the previous


// assign a counter to a variable
  let firstCount = 0

// loop through the array of numbers
  for (let i = 0; i<= array.length; i++){
    // if current index is greater than the previous index add 1 to the counter
    if (array[i] > array[i-1]){
        firstCount += 1
     // if current index is less than the previous index, do nothing
    } else {
        firstCount
    }
  }

// Print the results to the console
  console.log(firstCount)


//   PART TWO

// create a different counter
let secondCount = 0

// loop through array of numbers
for (let i = 0; i<=array.length; i++){
    // if the current sum of the current three elements > than the sum of the last 3 elements add 1 to counter
    if (array[i+1] + array[i +2] + array[i +3] > array[i] + array[i + 1] + array[i+2]){
      secondCount +=1
    //   if not do nothing 
    }else{
      secondCount
    }
  }

  // Print the results to the console
  console.log(secondCount)
