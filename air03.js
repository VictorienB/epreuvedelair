//Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.

function findOddValue(list) {
    if (!Array.isArray(list) || list.length === 0) {
        console.error("Erreur : Vous devez fournir une liste non vide en tant qu'argument.");
        process.exit(1);
    }

    const occurrences = new Map();

    for (const value of list) {
        if (occurrences.has(value)) {
            occurrences.set(value, occurrences.get(value) + 1);
        } else {
            occurrences.set(value, 1);
        }
    }

    for (const [value, count] of occurrences.entries()) {
        if (count % 2 !== 0) {
            return value;
        }
    }

    console.error("Erreur : Aucune valeur impaire trouvée dans la liste.");
    process.exit(1);
}

const commandLine = process.argv.slice(2);
const values = commandLine.map((arg) => parseInt(arg));

const oddValue = findOddValue(values);

console.log(oddValue);
