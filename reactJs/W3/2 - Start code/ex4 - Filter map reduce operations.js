let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function // shallow copy of passed test array elements 
function filterEvenNumbers(arr) {
  // TODO - Your code here (1 line)
  return arr.filter((e)=> e%2 === 0)
  
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  //  TODO - Your code here (1 line)
  return arr.map(e=> e*e )
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  //  TODO - Your code here (1 line)
  return arr.reduce((acc,cur) => acc +cur) // run callback function over all the element of array,in a accending index-order(1->2->3) with return callback function as accumulator(value) and the final accumulator is the value of reduce()
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
