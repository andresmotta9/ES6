var person = {};

var LastName = "apellido";

person["first name"] = "Andres"
person[LastName] = "Sanchez"

console.log(person["first name"] );
console.log(person[LastName] );


// ES6

var lastName = "first lastName";

var person = {
    "first name": "Andres",
    [lastName]: "Sanchez"
};

console.log(person);

var prefix = "name";

var person = {
    [ "first " + prefix ]: "Andres",
    [ "second " + prefix ]: "German"
};

console.log(person["first name"] );
console.log(person["second " + prefix] );


