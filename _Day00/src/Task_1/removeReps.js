// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения.

function removeReps(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        while (!result.includes(current)) {
            result.push(current);
        }
    }
    return result;
}

// console.log(removeReps([1,2,4,5,3,10,3,3,1,0]));
console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]))
console.log(removeReps([1,1,1,1]))   
console.log(removeReps([1,2,3,4,5,6]))