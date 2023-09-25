//Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.
function displayStaircase(character, numFloors) {
    if (typeof character !== "string" || character.length !== 1 || typeof numFloors !== "number" || numFloors < 1) {
        console.error("Error: You must provide a single character and a valid number of floors as arguments.");
        process.exit(1);
    }

    for (let floor = 1; floor <= numFloors; floor++) {
        const spaces = ' '.repeat(numFloors - floor);
        const stairs = character.repeat(2 * floor - 1);
        console.log(spaces + stairs);
    }
}

const commandLine = process.argv.slice(2);
const character = commandLine[0];
const numFloors = parseInt(commandLine[1]);

if (!character || !numFloors) {
    console.error("Error: You must provide a single character and a valid number of floors as arguments.");
    process.exit(1);
}

displayStaircase(character, numFloors);


