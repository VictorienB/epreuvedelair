// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).
function quickSort(array) {
    if (!Array.isArray(array) || array.length <= 1) {
        return array; // Return the array as is if it's empty or has only one element
    }

    const pivot = array[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return sortedLeft.concat(pivot, sortedRight);
}

const commandLine = process.argv.slice(2);
const inputArray = commandLine.map(Number);

const sortedResult = quickSort(inputArray);

console.log(sortedResult.join(" "));
