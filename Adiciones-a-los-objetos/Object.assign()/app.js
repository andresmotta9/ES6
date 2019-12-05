function mix( objReceptor, objTrasmitter ) {
    Object.keys ( objTrasmitter ).forEach ( function(key) {
        objReceptor[key] = objTrasmitter[key];
    });
    return objReceptor;
}

var objReceptor = {};
var objTrasmitter = {
    // name: "my-file.js"
    get name() { // uso de get en ES6
        return "my-file.js"
    }
}
//ES5
console.log( mix(objReceptor,objTrasmitter));

//ES6
console.log(Object.assign(objReceptor, objTrasmitter));
