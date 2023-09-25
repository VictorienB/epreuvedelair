// Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.
function rotateLeft(array) {
    if (!Array.isArray(array)) {
        console.error("Error: You must provide a valid array as an argument.");
        process.exit(1);
    }

    if (array.length <= 1) {
        return array; // No need to rotate a single element or an empty array
    }

    const rotatedArray = [...array]; // Create a shallow copy to avoid modifying the original array
    const firstElement = rotatedArray.shift(); // Remove and store the first element
    rotatedArray.push(firstElement); // Add the first element to the end

    return rotatedArray;
}

const commandLine = process.argv.slice(2);
const inputArray = commandLine.map(String);

const rotatedResult = rotateLeft(inputArray);

console.log(rotatedResult.join(", "));
