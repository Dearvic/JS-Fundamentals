const times = parseInt(process.argv[2]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < times; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
// The code takes a number from command line arguments and prints "C is fun" that many times.
// If no number is provided, it outputs an error message.