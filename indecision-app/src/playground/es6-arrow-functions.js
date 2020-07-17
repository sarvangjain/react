/* function sqr(num){
    return num*num;
};

console.log(sqr(10));

const sqrArrow = (x) => {
    return x*x;
};


const sqrArrow = (x) => x * x;

console.log(sqrArrow(4)); */
/* 
const getFirstName = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstName("Sarvang Jain"));

const getSecond = (name) => name.split(' ')[1];

console.log(getSecond("Andrew Mead Ron"));
 */


// es6-Arrow-Functions-2.js

const add = (a,b) => {
    return a+b;
};

console.log(add(55,10));

const user = {
    name: "Sarvang",
    cities: ["Jaipur", "Mumbai", "Indore"],
    printplacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printplacesLived());


const multiplier = {
    numbers: [1,3,5,4,6],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy)
    }
};

console.log(multiplier.multiply());