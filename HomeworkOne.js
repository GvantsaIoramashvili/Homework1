// Homework 1.


function homeworkOne (a, b) {
    if (a === b) {
        return 'is equal'
    }else{
        return 'is not equal'
    }
}
console.log(homeworkOne(1, "1"))
console.log(homeworkOne(5, 5))


// Homework 2.

function convertToCelsius(fahrenheit){
    if (Number.isInteger(fahrenheit)){
        return (fahrenheit - 32) * 5/9
    }else{
        return false
    }
}

console.log(convertToCelsius(180))
console.log(convertToCelsius("100"))

/// Homework 3.

function calculator(a, b, operation) {
    if (Number.isInteger(calculator)){
        return false
    }else if (operation === "+"){
        return a + b
    }else if (operation === "-"){
        return a - b
    }else if(operation === "*"){
        return a * b
    }else if(operation === "/"){
        return a / b
    }else{
        return false
    }
}

console.log(calculator(150,45,"+"))
console.log(calculator(30,5,"-"))
console.log(calculator(467,8,"/"))
console.log(calculator(6,13,"*"))
console.log(calculator(3,5,"%"))
console.log(calculator(1,'5',"%"))
