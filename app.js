import multiply, { add, subtract, addAndLogUpper} from "./mathModule.js";
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from "./arrayModule.js";

console.log('Add:', add(7, 3));
console.log('Subtract:', subtract(10, 4));
console.log('Multiply:', multiply(5, 6));

console.log('Uppercase:', toUpperCase('hello'));
console.log('Lowercase:', toLowerCase('WORLD'));

console.log('Max:', findMax([1, 2, 3, 4, 5]));
console.log('Reverse:', reverseArray([1, 2, 3, 4, 5])); 

addAndLogUpper(5, 20);

console.log('---Final Test---');
let numbers = [1, 2, 3, 4, 5];
let maxNumber = findMax(numbers);
let multipliedResult = multiply(maxNumber, 2);
console.log('Final Result:', toUpperCase(multipliedResult.toString()));
