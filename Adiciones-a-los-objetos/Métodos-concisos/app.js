
//ES5
// var person = {
//     name: "Andres",
//     getName: function() { // word function is only use in ES5
//         console.log( this.name );
//     }
// }

//ES6
var person = {
    name: "Andres",
    getName() { // word function is only use in ES5
        console.log( this.name );
    }
}

person.getName();






