//Homework 1

const calculate = (...n) => {
    let sum = n[0] + n[1];
    let multiply = 1;
    for(let i = 2; i < n.length; i++) {
        multiply *= n[i]; 
    }
    return [sum, multiply]
}

console.log(calculate(2, 10, 5, 6, 3))


//Homework 2 - user.banks[2].address.city

const user = {
    banks: ['TBC', 'BOG', 'Basisbank'],
    address: 'Ketevan Tsamebuli str. 1',
    //city: 'Tbilisi'
}

const {banks, address, city} = user
console.log(`${banks[2]} address is ${address}, ${city}`)

//Homework 3.

function user1(user) {
    const newUser = {...user};
    return newUser;
}

const user2 = {name: 'Gvantsa', lastName: 'Ioramashvili'};
const newUser = user1(user2);
console.log(newUser)
