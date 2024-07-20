//Write a function that takes a string and capitalizes the first letter of each word in the string.

const titleCase = (str) => {
    const words = str.split(" ");
  
    words.forEach((element, index) => {
      words[index] = element[[0]].toUpperCase().concat(element.slice(1));
    });
    return words.join(" ");
  };
  console.log(titleCase("I am good at maths"));