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