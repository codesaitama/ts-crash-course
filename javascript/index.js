const person = {
    name: {
        firstname: 'Emmanuel',
        lastname: 'Achana'
    },
    method:{
        getFullName(){
            return `${this?.name?.firstname} ${this?.name?.lastname}`
        }
    }
}

class Person{
    constructor(){
        
    }
}

console.log(person?.name?.firstname);
console.log(person?.method?.getFullName());

const scores = new Map([['Ruby', 12], ['Steven', 11], ['Sam', 15], ['Robin', 14]]);

console.log(scores);