//Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.
function removeAdjacentDuplicates(inputString) {
    if (typeof inputString !== "string") {
        console.error("Error: You must provide a valid string as an argument.");
        process.exit(1);
    }

    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (i === 0 || inputString[i] !== inputString[i - 1]) {
            result += inputString[i];
        }
    }

    return result;
}

const commandLine = process.argv.slice(2);
const inputString = commandLine[0];

const cleanedString = removeAdjacentDuplicates(inputString);

console.log(cleanedString);
