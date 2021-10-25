/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sum = function (a, b) {
  let result = a === b ? 3 * (a + b) : a + b;
  console.log(result);
  return result;
};
sum(10, 20);
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const check = function (a, b) {
  let result = (a || b) === 50 || a + b === 50 ? true : false;
  console.log(result);
  return result;
};
check(2, 1);
/* 3. Create a function to remove a character at a specified position from a given string: 
pass the position and the string as parameters, return the new string. */
const remove = function (str, n) {
  str.splice(n, 1);
  console.log(str);
  return str;
};
//remove("veena", 2);
/* 4. Create a function to find and return the largest of three given integers. */
const largest = function (a, b, c) {
  const result = Math.max(a, b, c);
  console.log(result);
  return result;
};
largest(68, 42, 35);
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
const range = function (a, b) {
  let result =
    a <= 60 &&
    a >= 40 &&
    a <= 100 &&
    a >= 70 &&
    b <= 60 &&
    b >= 40 &&
    b <= 100 &&
    b >= 70
      ? true
      : false;
  console.log(result);
  return result;
};
range(50, 70);
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
const newString = function (n, str) {
  let result = str.concat();
};
/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const display = function (city1) {
  let result =
    city1.startsWith("Los") || city1.startsWith("New") ? city1 : false;
  console.log(result);
};
display("angels");
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
const calculate = function (arr) {
  let sum;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  console.log(sum);
  return sum;
};
let array = [5, 8, 9, 1, 4, 6];
calculate(array);
/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
const testArray = function (array) {
  //let result = array[0] === 1 || 3 || array[1] === 1 || 3 ? true : false;
  let result = array.includes(1) || array.includes(3) ? true : false;
  console.log(result);
  return result;
};
let arr = [7, 1];
testArray(arr);
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
const testArray1 = function (array) {
  let result = array[0] === 1 || 3 || array[1] === 1 || 3 ? false : true;
  console.log(result);
  return result;
};
let arr1 = [1, 8];
testArray1(arr1);
/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
function longestString(str) {
  let longestStr = str.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(longestStr[0]);
  return longestStr[0];
}
const list = ["STRING1", "sdofijosidjfoa", "justanotherstringa very long one"];
longestString(list);

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
const angle = function (a) {
  if (a >= 0 && a < 90) {
    return console.log("acute");
  } else if (a === 90) {
    return console.log("right");
  } else if (a > 90 && a < 180) {
    return console.log("obtuse");
  } else {
    a === 180;
    return console.log("straight");
  }
};
angle(150);
/* 13. Create a function to find and return the index of the greatest element of a given array of integers
 that you passed as a parameter. */
const greatestElement = function (str) {
  str.sort(function (a, b) {
    return a - b;
  });
  let largest = str.length - 1;
  console.log(str[largest]);
};
let numbers = [1, 2, 3, 4, 0];
greatestElement(numbers);
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
function largest_even(arra) {
  arra.sort((x, y) => y - x);
  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0) return arra[i];
  }
}
console.log(largest_even([20, 40, 10, 60, 180, 5]));
/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
