// "This" demostration

//ES5

var manejador = {
    id: "123",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.clickOnPage( event.type );
        }).bind(this), false) //.bind es para hacer referencia al objeto manejador en el this.
    },
    clickOnPage: function(type) {
        console.log( "Manejando " + type + "para el id: " + this.id + "con ES5");
    }
}

manejador.init();

//ES6

var manejador = {
    id: "123",
    init: function() {
        document.addEventListener("click", 
            event => this.clickOnPage( event.type ));
    },
    clickOnPage: function(type) {
        console.log( "Manejando " + type + "para el id: " + this.id + "con ES6");
    }
}

manejador.init();







