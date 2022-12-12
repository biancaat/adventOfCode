const fs = require("fs");

const input = fs
  .readFileSync("Day2/day02.txt", { encoding: "utf-8" })
  .split("\n")

//   PART ONE

// intake an array of commands. Commands are either 'forward', 'up' or 'down' accompanied by a number value, always positive and whole. 'forward' adds to horizontal position, 'down' adds to depth and 'up' subtracts from depth
// return the result of the horizontal position and depth

    // variables to hold position values
  let forward = 0
  let down = 0

    for (const position of input){
      const [direction, move] = position.split(" ")
        switch (true) {
      case (direction == 'forward'):
        forward += Number(move)
        break
      case (direction == 'down'):
        down += Number(move)
        break
      case (direction == 'up'):
        down -= Number(move)
        break
      default:
        break
        }
      }

  console.log(forward * down)

  // O(n) time complexity
  // O(1) space complexity  


// PART TWO

// intake an array of commands. Commands are either 'forward', 'up' or 'down' accompanied by a number value, always positive and whole. 'forward' adds to horizontal position AND increases your depth by 'aim' multiplied by the integer value associated with the 'forward' command, 'down' adds to 'aim', 'up' subtracts from 'aim'
// return the result of the horizontal position and depth


  let aim = 0
  let depth = 0
  let horizontalPosition = 0

  for (const position of input){
    const [direction, move] = position.split(" ")
    switch (true) {
    case (direction == 'forward'):
        horizontalPosition += Number(move)
        depth += aim * Number(move)
        break
    case (direction == 'down'):
        aim += Number(move)
        break
    case (direction == 'up'):
         aim -= Number(move)
        break
  default:
    break
    }
  }

  console.log(horizontalPosition * depth) 

  // O(n) time complexity
  // O(1) space complexity  