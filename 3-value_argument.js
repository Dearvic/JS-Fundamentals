const firstArgument = process.argv[2];

if (firstArgument) {
  console.log(firstArgument);
} else {
  console.log("No argument");
}
// This code checks if a command line argument is provided and prints it.
// If no argument is given, it outputs "No argument". This is useful for ensuring that  the user has provided input when running the script.
