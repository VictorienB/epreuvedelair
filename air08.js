//Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.
function sortedFusion(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.error("Error: You must provide two valid arrays of integers as arguments.");
        process.exit(1);
    }

    const mergedArray = [];

    let index1 = 0;
    let index2 = 0;

    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] < array2[index2]) {
            mergedArray.push(array1[index1]);
            index1++;
        } else {
            mergedArray.push(array2[index2]);
            index2++;
        }
    }

    // Add remaining elements from array1 and array2
    while (index1 < array1.length) {
        mergedArray.push(array1[index1]);
        index1++;
    }

    while (index2 < array2.length) {
        mergedArray.push(array2[index2]);
        index2++;
    }

    return mergedArray;
}

const commandLine = process.argv.slice(2);
const fusionIndex = commandLine.indexOf("fusion");

if (fusionIndex === -1 || fusionIndex === 0 || fusionIndex === commandLine.length - 1) {
    console.error("Error: You must provide two sorted arrays of integers separated by 'fusion' as arguments.");
    process.exit(1);
}

const array1 = commandLine.slice(0, fusionIndex).map(Number);
const array2 = commandLine.slice(fusionIndex + 1).map(Number);

const mergedResult = sortedFusion(array1, array2);

console.log(mergedResult.join(" "));
