let person = {
    greet() {
        return "Hello";
    }
};

//ES5

let friend = {
    greet() {
        return Object.getPrototypeOf(this).greet(this) + ", greetings!!!"
    }
};

//ES6

let friend2 = {
    greet() {
        return super.greet() + ", greetings!!!" //Para usar el super debe haber una herencia de objectos por medio del setPrototype
    }
};

Object.setPrototypeOf( friend, person );
Object.setPrototypeOf( friend2, person );

console.log( friend.greet() );
console.log( friend2.greet() );
