//Write a function that filters out even numbers from an array.

function checkEven(num) {
    return num % 2 === 0;
  }
  const evenNumber = (arr) => {
    const result = arr.filter(checkEven);
    return result;
  };
  
  console.log(evenNumber([23, 45, 66, 24, 12, 90]));