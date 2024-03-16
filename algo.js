const tags = new Map([
    ["fast paced",1 ],
    ["slow paced", ],["", ],["", ]
  ]);


function findArrayWithMaxMatches(smallerArray, largerArrays) {
    let maxMatches = 0;
    let maxMatchArray = null;

    for (let array of largerArrays) {
        let matches = smallerArray.filter(item => array.includes(item)).length;
        if (matches > maxMatches) {
            maxMatches = matches;
            maxMatchArray = array;
        }
    }

    return maxMatchArray;
}

// Example usage:
let smallerArray = [1, 2, 3];
let largerArrays = [[1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [1, 3, 5, 7, 9]];
let resultArray = findArrayWithMaxMatches(smallerArray, largerArrays);
console.log("Array with maximum matching elements:", resultArray);
