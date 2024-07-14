//Write a function that takes a string and capitalizes the first letter of each word in the string.

const titleCase = (str) => {
  const words = str.split(" ");

  words.forEach((element, index) => {
    words[index] = element[[0]].toUpperCase().concat(element.slice(1));
  });
  return words.join(" ");
};
console.log(titleCase("I am good at maths"));

//Write a function that filters out even numbers from an array.

function checkEven(num) {
  return num % 2 === 0;
}
const evenNumber = (arr) => {
  const result = arr.filter(checkEven);
  return result;
};

console.log(evenNumber([23, 45, 66, 24, 12, 90]));

//Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

const printNum = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
};
printNum();

//Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

const evaluate = (str) => {
  // Removing spaces from the expression
  str = str.replace(/\s+/g, "");
  let total = 0;
  let num = 0;
  let sign = 1; // 1 for positive, -1 for negative

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!isNaN(char)) {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      total += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      total += sign * num;
      num = 0;
      sign = -1;
    }
  }

  // Add the last number
  total += sign * num;

  return total;
};

console.log(evaluate("3 + 5 - 2 + 18"));

//Write a function that checks if two given strings are anagrams of each other.

const isanagram = (str1, str2) => {
  //if length are not equal strings cannot be anagram
  if (str1.length == !str2.length) {
    return false;
  }
  //change the strings into arrays and sort them
  const arr1 = Array.from(str1);
  arr1.sort();
  const arr2 = Array.from(str2);
  arr2.sort();
  // compare the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[1]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isanagram("widget", "diwgta"));

//Write a function that takes an array and returns a new array with duplicates removed.

const newArray = (arr) => {
  let temparr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (temparr.includes(arr[i]) === false) {
      temparr.push(arr[i]);
    }
  }
  return temparr;
};

console.log(
  newArray([23, 45, 66, 24, 12, 90, 90, 12, 66, 23, 23, 45, 90, 2, 4])
);

//Write a function that generates the first n numbers of the Fibonacci sequence.

const generateFibonacci = (n) => {
  let fibonacciSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }
  return fibonacciSeries;
};
console.log(generateFibonacci(10));

//Write a function that takes a nested array and returns a flattened array.

const flatten = (arr) => {
  return arr.flat(Infinity);
};

console.log(
  flatten([
    [[0], [1]],
    [[2], [3]],
    [[4], [5]],
  ])
);
//Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
  constructor() {
    this.map = {};
  }

  // Put method to add or update a key-value pair
  put(key, value) {
    this.map[key] = value;
  }

  // Get method to retrieve the value for a given key
  get(key) {
    return this.map.hasOwnProperty(key) ? this.map[key] : null;
  }

  // Remove method to delete a key-value pair by key
  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    }
  }
}

// Example usage:
const hashMap = new HashMap();
hashMap.put("name", "Alice");
console.log(hashMap.get("name")); // Output: Alice
hashMap.remove("name");
console.log(hashMap.get("name"));
