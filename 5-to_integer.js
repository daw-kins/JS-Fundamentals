// Get the command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const number = parseInt(args[0], 10);

// Check if the conversion is successful
if (!isNaN(number)) {
    console.log(`My number: ${number}`);
} else {
    console.log("Not a number");
}
