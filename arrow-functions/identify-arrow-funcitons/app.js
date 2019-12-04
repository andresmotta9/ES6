var restar = (a,b) => a-b;

console.log( typeof restar);
console.log( restar instanceof Function);

// var restar2 = restar(1,2);

function example(x,y) {

    ( (a,b) => {
        console.log( arguments[0] ); //ARGUMENT busqua dentro de el objeto padre más cercano
    })(); 

}

example(10,20);



