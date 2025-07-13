const args = process.argv;
const sizeOfArguments = args.length;

if (sizeOfArguments <= 2) {
  console.log("No argument");
} else if (sizeOfArguments === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// This code checks the number of command line arguments passed to the script.    