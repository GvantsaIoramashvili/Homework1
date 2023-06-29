// console.log(5 / +0)     //+infinity
// console.log(2 / -0)     //-infinity

// // const - ცვლადი რომლის მნიშვნელობაც არ იცვლება.
// // let - ცვლადი, რომლის შეცვლაც შეგვიძლია

// const st = 'Skillwill'
// const int = 154
// const str = "154"
// const boo = true

// console.log(typeof st)
// console.log(typeof int)
// console.log(typeof boo)
// console.log(typeof str)

// console.log(int == str)     //true - == გადაყავს ერთ ტიპში და ადარებს მნიშვნელობებს
// console.log(int === str)    //false - === ადარებს ტიპსაც და მნიშვნელობასაც

// const a = 10
// const b = -9

// if(a + b === 1) {
//     console.log(true)
// }else{
//     console.log(false)
// }


// function sum(a, b){
//     console.log(a + b)
// }
// sum(1, 2)


// function sum1(a, b){
//     return a + b
// }
// console.log(sum1)

// function calculate(num1, num2) {
//     if(typeof num1 === 'string') {
//         return false
//     }

//     if(typeof num2 === 'string') {
//         return true
//     }

//     return num1 + num2
// }

// console.log(calculate(110, 90))
// console.log(calculate("110", 90))
// console.log(calculate(110, "90"))


function param(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }else{
        return 'error'
    }
}

console.log(param(7, 8))
console.log(param(70, 80))
console.log(param('7', 8))
console.log(param(10, 'gvantsa'))


function convertToCelsius(fahrenheit){
    if(typeof fahrenheit === 'number'){
        return (fahrenheit - 32) * 5 / 9
    }else{
        return false
    }
}

console.log(convertToCelsius(50))
console.log(convertToCelsius(0))
console.log(convertToCelsius(-1))
console.log(convertToCelsius(true))
console.log(convertToCelsius('gvantsa'))

function calculator(a, b, operation) {
    if (typeof calculator === 'number'){
        return false
    }else if(operation === '+'){
        return a + b
    }else if(operation === '-'){
        return a - b
    }else if(operation === '*'){
        return a * b
    }else if(operation === '/'){
        return a / b
    }else{
        return false
    }
}

console.log(calculator(2, 5, '+'))
console.log(calculator(2, 5, '-'))
console.log(calculator(2, 5, '*'))
console.log(calculator(2, 5, '/'))
console.log(calculator(2, 5, '%'))
console.log(calculator('a', 'b', '%'))