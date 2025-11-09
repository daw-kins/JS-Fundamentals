// Get the command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const size = parseInt(args[0], 10);

// Check if the conversion is successful
if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Loop to print the square
    let i = 0;
    while (i < size) {
        console.log("X".repeat(size));
        i++;
    }
}