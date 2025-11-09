// Get the command-line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const x = parseInt(args[0], 10);

// Check if the conversion is successful
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Loop to print "C is fun" x times
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}