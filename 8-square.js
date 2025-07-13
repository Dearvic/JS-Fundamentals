const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    let row = "";
    let j = 0;
    while (j < size) {
      row += "X";
      j++;
    }
    console.log(row);
    i++;
  }
}
// This code takes a size from command line arguments and prints a square of 'X's of that size.
// If no size is provided, it outputs an error message. 