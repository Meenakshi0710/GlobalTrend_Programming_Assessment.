//Write a function that generates the first n numbers of the Fibonacci sequence.

const generateFibonacci = (n) => {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
  };
  console.log(generateFibonacci(10));