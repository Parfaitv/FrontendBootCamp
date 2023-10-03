//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function counter() {
    counter.count = counter.count === undefined ? 0 : counter.count += 3
    return counter.count
}

console.log(counter()) // Функция вернет 0
console.log(counter())  // Функция вернет 3
console.log(counter())  // Функция вернет 6
console.log(counter())  // Функция вернет 9
