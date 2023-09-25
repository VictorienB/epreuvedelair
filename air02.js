// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.
function tabToString(tab, separateur) {
    let resultString = "";
    for (let i = 0; i < tab.length; i++) {
        resultString += tab[i] + separateur;
    }
    return resultString;
}

const commandLine = process.argv.slice(2);

const tabToWork = commandLine.slice(0, -1); // Exclure le dernier argument
const separateur = commandLine[commandLine.length - 1]; // Récupérer le dernier argument

console.log(tabToString(tabToWork, separateur));
