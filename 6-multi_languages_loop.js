const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = "";
let i = 0;
while (i < languages.length) {
  output += languages[i] + "\n";
  i++;
}
console.log(output.trim());
// This code initializes an array of strings and uses a while loop to concatenate them into a single string.
// It then prints the concatenated string, ensuring no trailing newline characters are present. 

// The output is trimmed to remove any trailing newline characters.
// Usage: node 6-multi_languages_loop.js