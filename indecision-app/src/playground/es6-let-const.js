var nameVar = "Sarvang";
var nameVar = 'Mike'; 
console.log('nameVar', nameVar);

let nameLet = "Ron";
nameLet = "July";
console.log("nameLet", nameLet);

const nameConst = 'Aksh';
console.log("nameConst" + nameConst);

function getPetName(){
    let petName = 'Phoebe';
    return petName;
}

console.log(getPetName());

const fullName = "Sarvang Jain";
let firstName;
if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);