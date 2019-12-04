
var array = [5,10,11,2,1,9,20];

//ES5

var ordered = array.sort( function(a,b) {
    return a-b;
});

//ES6

var ordered2 = array.sort( (a,b) => a-b);

console.log(ordered)
console.log(ordered2)






