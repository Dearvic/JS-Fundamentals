const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
// This code converts a command line argument to an integer and checks if it's a valid number.
// If the argument is not a number, it outputs "Not a number", otherwise it prints the number.
// This is useful for validating user input in command line applications.