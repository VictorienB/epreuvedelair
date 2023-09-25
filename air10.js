//Créez un programme qui affiche le contenu d’un fichier donné en argument.
const fs = require('fs');

function displayFileContents(filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        console.log(fileContents);
    } catch (error) {
        console.error(`Error: Unable to read the file "${filePath}".`);
        process.exit(1);
    }
}

const commandLine = process.argv.slice(2);
const filePath = commandLine[0];

if (!filePath) {
    console.error("Error: You must provide a valid file path as an argument.");
    process.exit(1);
}

displayFileContents(filePath);
