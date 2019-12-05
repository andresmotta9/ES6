let cat = {
    sound() {
        console.log("Miau!");
    },
    catSound() {
        console.log("MIAU!!!!");
    }
}

let dog = {
    sound() {
        console.log("Guau!!");
    }
}

let angora = Object.create( cat );
console.log( Object.getPrototypeOf( angora ) === cat);

angora.sound();
angora.catSound();

Object.setPrototypeOf( angora, dog );

console.log( Object.getPrototypeOf( angora ) === cat);

angora.sound();
angora.catSound();
