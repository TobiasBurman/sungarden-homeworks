//Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */
const addTwo = (num: number) => num + 2  


// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));




//Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
const addS = (s: string) => s + "s";

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));




// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

const map = (array: number[], callback: (value: number) => number): number[] => {

  let result: number[] = [];

  array.forEach(value => {
    result.push(callback(value));
  });

  return result;
};

console.log(map([1, 2, 3], addTwo));




//  Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

const nums = [4, 1, 3];

const add = function (a: number, b: number): number {
  return a + b;
};

const reduce = (
  array: number[], addCallback: (a: number, b: number) => number, initValue: number): number => {
  let accumulator = initValue;

  array.forEach((item: number) => {
    accumulator = addCallback(accumulator, item);
  });

  return accumulator;
};

console.log(reduce(nums, add, 0));




// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
const intersection = (arr1: number[], arr2: number[], arr3: number[]): number[] => {

  const result = arr1.filter(value =>
    arr2.includes(value) && arr3.includes(value)
  );

  return result;
};
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]




// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
const union = (arr1: number[], arr2: number[], arr3: number[]): number[] => {

  let result: number[] = [];

  const allArrays = arr1.concat(arr2, arr3);

  allArrays.forEach(value => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });

  return result;
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
