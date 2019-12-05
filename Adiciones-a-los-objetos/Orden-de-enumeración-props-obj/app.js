var object = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1,
};

object.d = 1;
object["2"] = 1;
object["a"] = 1;

console.log( Object.getOwnPropertyNames( object ).join(",") );

console.log( Object.keys( object ) );
console.log( JSON.stringify( object ) );

for( i in Object.keys( object )) {
    console.log( Object.keys(object)[i] );
}
