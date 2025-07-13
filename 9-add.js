function add(a, b) {
  return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Both arguments must be integers");
} else {
  console.log(add(num1, num2));
}
// This code defines a function to add two numbers and takes two integers from command line arguments.
// If either argument is not a number, it outputs an error message.