// Get the command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Convert arguments to integers
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);

// Define the add function
function add(a, b) {
    return a + b;
}

// Print the result of the addition
console.log(add(a, b));