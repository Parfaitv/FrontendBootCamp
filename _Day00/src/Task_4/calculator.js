// Вам надо набор функций который будет симулировать работу калькулятора.
// Для этого вам надо написать 9 функций, которые могут принимать в качестве аргумента другую функцию, если функция передана, то надо вернуть вызов функции с числом n, иначе вернуть число n.
// Например, функция one может принять в качестве аргумента функцию sum, тогда в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые принимают в качестве аргумента первое число, а возвращают функцию, которая принимает в качестве аргумента второе число и возвращает их сумму/разность/частое/произведение.

function one(callback) {
    return callback ? callback(1) : 1
}
function two(callback) {
    return callback ? callback(2) : 2
}
function three(callback) {
    return callback ? callback(3) : 3
}
function four(callback) {
    return callback ? callback(4) : 4
}
function five(callback) {
    return callback ? callback(5) : 5
}
function six(callback) {
    return callback ? callback(6) : 6
}
function seven(callback) {
    return callback ? callback(7) : 7
}
function eight(callback) {
    return callback ? callback(8) : 8
}
function nine(callback) {
    return callback ? callback(9) : 9
}

function plus(a) {
    return b => a + b
}

function minus(a) {
    return b => b - a
}

function divide(a) {
    return b => b / a
}

function mult(a) {
    return b => a * b
}

// console.log(four()); // 4
// console.log(five(mult(three()))); // 15
// console.log(one(mult(three(plus(four()))))) // В итоге вернется 7
console.log(one(mult(three(plus(four()))))) 
// - 2 балла 
console.log(four())
//  - 1 балла 
 console.log(five(mult(three())))