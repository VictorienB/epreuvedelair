//Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
function performOperationOnList(numbers, operation) {
    if (!Array.isArray(numbers) || numbers.length === 0 || typeof operation !== "string") {
        console.error("Error: You must provide a valid list of numbers and a valid operation as arguments.");
        process.exit(1);
    }

    // Determine the operation (+ or -) and the value
    const operator = operation[0]; // First character should be + or -
    const value = parseInt(operation.slice(1)); // Extract the number part

    if (isNaN(value)) {
        console.error("Error: Invalid operation format.");
        process.exit(1);
    }

    // Perform the operation on each number in the list
    const result = numbers.map((num) => {
        if (operator === "+") {
            return num + value;
        } else if (operator === "-") {
            return num - value;
        } else {
            console.error("Error: Invalid operation symbol. Use + or -.");
            process.exit(1);
        }
    });

    return result;
}

const commandLine = process.argv.slice(2);
const numbers = commandLine.slice(0, -1); // Exclude the last element (operation)
const operation = commandLine[commandLine.length - 1]; // Get the last element (operation)

const result = performOperationOnList(numbers.map(Number), operation);

console.log(result.join(" "));
