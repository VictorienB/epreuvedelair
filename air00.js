//Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

function stringCutter(string_a_couper, string_separateur) {
    // Vérifier que les arguments sont corrects
    if (typeof string_a_couper !== "string" || typeof string_separateur !== "string") {
        console.error("Erreur : Les arguments doivent être des chaînes de caractères.");
        return;
    }

    // Utiliser la méthode split() pour découper la chaîne en tableau
    const tableau = string_a_couper.split(string_separateur);

    return tableau;
}
// Exemple d'utilisation

const commandLine = process.argv.slice(2);
console.log(commandLine);
const result = stringCutter(commandLine[0], commandLine[1]);
if (result) {
    result.forEach((element) => {
        console.log(element);
    });
}
