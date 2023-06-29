// const user = {
//     name: 'Gvantsa',
//     lastName: 'Ioramashvili',
//     move: function(){
//         console.log('Gvantsa Ioramashvili is studing JavaScript')
//     }
// }
// const newUser = user;
// newUser.name = "Agent";

// console.log(user.name)
// user.move()

//პრიმიტიული
// let A = 30
// let B = A
// A = 45
// console.log(A,B)

//არაპრიმიტიული
// const A = {
//     name: 'Gvantsa',
//     lastName: 'Ioramashvili',
//     userName: '007'
// }
// const B = A
// B.userName = 'Agent 007'
// console.log(A)
// console.log(B)

// const numbers = [1, 2, 3, 4, 5];
// console.log(
//     numbers[0],
//     numbers[2]
// );

// const arr = [
//     30,
//     'Gvantsa',
//     {lastName: 'Ioramashvili'},
//     true,
//     null,
//     [1, 2, 3]
// ]

// for(let i = 0; i < arr.length; i++){

// console.log(arr[i])
// }


// //მასივის ყველა ელემენტის ამოღება, მასივებისთვის for ... of
// //for...in გამოიტანს ინდექსებს
// const arr1 = ['Gvantsa', 'Lasha', 'Saba']

// for(const name of arr1){
//     console.log(name)
// }

// //ობიექტებისთვის for ... in
// const user2 = {
//     name: 'Lasha',
//     lastName: 'Dokvadze',
//     userName: 'Buina'
// }
// for(const f in user2){
//     console.log(user2[f])
// }


// function randomNumber() {
//     return parseInt(Math.random() *10) + 1
// }

// let result = randomNumber()

// // while(result !==9){
// //     result = randomNumber()
// //     console.log(result)
// // }

// do{
//     result = randomNumber()
//     console.log(result)
// }while(result !==9)


// //Array functions: forEach(), map(), filter(), find()

// const arr1 = ['Gvantsa', 'Lasha', 'Saba']

// //ForEach
// const resForEach = arr1.forEach(function(element, index){
//     return index + ' is equal to ' + element
// })

// console.log(resForEach)

// //Map
// const resMap = arr1.map(function(element, index){
//     return index + ' is equal to ' + element
// })


// console.log(resMap)
// console.log(arr1)

// //filter
// const array = [1, 3, 5, 7, 8, 9, 6]
// const resFilter = array.filter(function(element){
//     return element >= 7
// })
// console.log(resFilter)


// //find
// const resFind = array.find(function(el){
//     return el > 4
// })

// console.log(array)
// console.log(resFind)


//Homework 1.


function getMinAge(users){
    var minAge = users[0].age;
    var minAgeName = '';

    for(let i = 0; i < users.length; i++){
        if(minAge > users[i].age){
            minAge = users[i].age;
            minAgeName = users[i].name;
        }
    }
    return minAgeName + ' ' + minAge;
}


const users = [
    {name: 'Temo', age: 25}, 
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28},
    {name: 'Gvantsa', age: 20}
]

function getMinAge(age){
    let minAge = users[0].age;
    let minAgeName = users[0].name;


    for(let i =0; i < users.length; i++){
        if(minAge > users[i].age){
            minAge = users[i].age;
            minAgeName = users[i].name;
        }
        return minAgeName;
    }
}
console.log(getMinAge);