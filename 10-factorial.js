function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
// This code defines a recursive function to calculate the factorial of a number.
// It takes a number from command line arguments and prints its factorial.