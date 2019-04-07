// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, v => console.log(v));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, v => console.log(v));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(420, 246, v => console.log(v));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(20, 20, v => console.log(v));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

contains("Gum", items, v => console.log(v));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let newArr = [];

  array.forEach(e => newArr.includes(e) ? 0 : newArr.push(e));

  return cb(newArr);
}

const arr1 = [ "Can't", "Can't", "Stop", "Stop", "Won't", "Won't", "Stop", "Stop" ],
      arr2 = [ 1, 1, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1, 111 ],
      msg = "duplicates removed";

removeDuplicates(arr1, v => console.log(v, msg));

console.log(arr1);

removeDuplicates(arr2, v => console.log(v, msg));

console.log(arr2);

