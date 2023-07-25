"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(numero) {
    for (var i = 1; i <= numero; i += 2) {
        console.log(i);
    }
}
new evenNumbers(8);
function myRevert(myArray) {
    var array = [];
    for (var index = myArray.length - 1; index >= 0; index--) {
        array += myArray[index];
    }
    return array;
}
console.log(myRevert([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function isRainbow(colores) {
    for (var _i = 0, colores_1 = colores; _i < colores_1.length; _i++) {
        var colors = colores_1[_i];
        if (colors.includes("Rojo")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else if (colors.includes("Naranja")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else if (colors.includes("Amarillo")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else if (colors.includes("Verde")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else if (colors.includes("Azul")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else if (colors.includes("Violeta")) {
            console.log("El " + colors + " esta dentro del arcoiris.");
        }
        else {
            console.log("El " + colors + " no esta dentro del arcoiris.");
        }
    }
}
var colores = ["Azul", "Rosa", "Negro"];
isRainbow(colores);
function add(myWords) {
    var z = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var reducir = myWords_1[_i];
        z += reducir.length;
    }
    return z;
}
exports.add = add;
var array = ["Saludos", "Noche", "Quiero "];
console.log(add(array));
