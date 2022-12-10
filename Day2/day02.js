// allows us to use the file system module to work with files on computer
const fs = require("fs");

// assign the data from txt file into an array
const array = fs
    // read data from text file synchronously
  .readFileSync("Day2/day02.txt", { encoding: "utf-8" })
    //   split the string into array indices on each new line
  .split("\n")

//   PART ONE

    // create variables to hold specific positions for the following 
    let forward = 0
    let down = 0

    // for of loop to begin iteration of data from imported text file
    for (const position of array){
        // evaluates first case that is true 
        switch (true) {
        // if array element includes the case, remove the string and return the integer value of the string number, add the integer to the forward variable
      case (position.includes('forward')):
        forward += Number(position.slice(8))
        break
        // if array element includes the case, remove the string and return the integer value of the string number, add the integer to the down variable
      case (position.includes('down')):
        down += Number(position.slice(5))
        break
        // if array element includes the case, remove the string and return the integer value of the string number, subtract the integer from the down variable
      case (position.includes('up')):
        down -= Number(position.slice(3))
        break
      default:
        break
        }
      }

//   log the product of forward and down
 console.log(forward * down)

// PART TWO
    // assign variables to help the value of the following
    let aim = 0
    let depth = 0
    let horizontalPosition = 0

  // for of loop to begin iteration of data from imported text file
  for (const position of array){
    // evaluates first case that is true
    switch (true) {
    // if array element includes the case, add the integer from the case to horizontal position and multiply the integer by aim to get the product of depth
    case (position.includes('forward')):
        horizontalPosition += Number(position.slice(8))
        depth += aim * Number(position.slice(8))
        break
    // if array element includes the case, add the integer from the case to aim variable
    case (position.includes('down')):
        aim += Number(position.slice(5))
        break
    // if array element includes the case, subtract the integer from the case to aim variable
    case (position.includes('up')):
         aim -= Number(position.slice(3))
        break
  default:
    break
    }
  }

//  log the product of horizontal position and depth 
 console.log(horizontalPosition * depth) 