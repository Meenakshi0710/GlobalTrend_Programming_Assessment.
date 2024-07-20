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