//Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

function sortedInsert(sortedArray, newElement) {
    if (!Array.isArray(sortedArray) || typeof newElement !== "number") {
        console.error("Error: You must provide a valid sorted array of integers and a valid new integer as arguments.");
        process.exit(1);
    }

    // Find the index where the new element should be inserted
    let indexToInsert = 0;
    while (indexToInsert < sortedArray.length && sortedArray[indexToInsert] < newElement) {
        indexToInsert++;
    }

    // Insert the new element at the calculated index
    sortedArray.splice(indexToInsert, 0, newElement);

    return sortedArray;
}

const commandLine = process.argv.slice(2);
const sortedList = commandLine.slice(0, -1).map(Number); // Exclude the last element (new integer)
const newElement = parseInt(commandLine[commandLine.length - 1]); // Get the last element (new integer)

const updatedList = sortedInsert(sortedList, newElement);

console.log(updatedList.join(" "));

