// Get the command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const n = parseInt(args[0], 10);

// Define the recursive factorial function
function factorial(num) {
    if (isNaN(num) || num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Print the factorial
console.log(factorial(n));