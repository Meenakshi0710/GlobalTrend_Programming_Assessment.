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