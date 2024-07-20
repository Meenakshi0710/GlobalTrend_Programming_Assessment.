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