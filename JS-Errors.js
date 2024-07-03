// TRY, CATCH, THROW blocks

/*

The 'try' statement defines a code block to run (to try).

The 'catch' statement defines a code block to handle any error.

The 'finally' statement defines a code block to run regardless of the result.

The 'throw' statement defines a custom error.

*/

try {
    // Place the code that might throw an error inside the try block.
    let result = riskyTask();

} catch (error) {
    // If an error occurs, the control is transferred to the catch block, where the error can be handled.
    console.log("\n\n---------------------")
    console.error("An error occured: ", error)
    console.log("---------------------\n")
}

function riskyTask(a, b) {
    if (a < b) {
        console.log("Greater value is: ", a)
    } else {
        throw new Error("The first value is not less than the second value.");
        
    }
}
riskyTask(3, 5);
console.log("---------------------\n")

    // THROW Purpose: To create a custom error and stop the execution of the block of code.

    // THROW Usage: Use throw to generate an error and specify the type of error to throw.

    