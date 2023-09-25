//Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.
function filterArrayByExclusion(array, substring) {
    if (!Array.isArray(array) || typeof substring !== "string") {
        console.error("Error: You must provide a valid array of strings and a valid substring as arguments.");
        process.exit(1);
    }

    // Convert substring to lowercase for case-insensitive comparison
    const lowercasedSubstring = substring.toLowerCase();

    const filteredArray = array.filter((element) => !element.toLowerCase().includes(lowercasedSubstring));
    return filteredArray;
}

const commandLine = process.argv.slice(2);
const inputArray = commandLine.slice(0, -1); // Exclude the last element (substring)
const substring = commandLine[commandLine.length - 1]; // Get the last element (substring)

const filteredResult = filterArrayByExclusion(inputArray, substring);

console.log(filteredResult.join(", "));

