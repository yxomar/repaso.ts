"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function signoZodiac(day, month) {
    var zodiacArr = [];
    if ((day > 21 && month == 1) || (day < 19 && month == 2)) {
        zodiacArr.push("acuario");
    }
    else if ((day > 20 && month == 2) || (day < 20 && month == 3)) {
        zodiacArr.push("piscis");
    }
    else if ((day > 21 && month == 3) || (day < 19 && month == 4)) {
        zodiacArr.push("aries");
    }
    else if ((day > 20 && month == 4) || (day < 20 && month == 5)) {
        zodiacArr.push("tauro");
    }
    else if ((day > 21 && month == 5) || (day < 20 && month == 6)) {
        zodiacArr.push("geminis");
    }
    else if ((day > 21 && month == 6) || (day < 22 && month == 7)) {
        zodiacArr.push("cancer");
    }
    else if ((day > 23 && month == 7) || (day < 22 && month == 8)) {
        zodiacArr.push("leo");
    }
    else if ((day > 23 && month == 8) || (day < 20 && month == 9)) {
        zodiacArr.push("virgo");
    }
    else if ((day > 23 && month == 9) || (day < 22 && month == 10)) {
        zodiacArr.push("libra");
    }
    else if ((day > 23 && month == 10) || (day < 21 && month == 11)) {
        zodiacArr.push("escorpio");
    }
    else if ((day > 22 && month == 11) || (day < 21 && month == 12)) {
        zodiacArr.push("sagitario");
    }
    else if ((day > 22 && month == 12) || (day < 20 && month == 1)) {
        zodiacArr.push("capricornio");
    }
    else {
        console.log("introduzca un numero para el dia y texto para el mes: Ejemplo.5,3");
    }
    return zodiacArr;
}
console.log(signoZodiac(10, 10));
function Continent(country) {
    var continentes = ["Europa", "America", "Asia", "Africa", "Oceania"];
    if (country == "Italia" || country == "Grecia" || country === "Alemania" || country == "Polonia" || country == "Portugal") {
        return "El continente del pais es: " + continentes[0];
    }
    else if (country == "Canada" || country == "Brazil" || country == "Peru" || country == "Republica dominicana" || country == "Costa Rica") {
        return "El continente del pais es: " + continentes[1];
    }
    else if (country == "Japon" || country == "China" || country == "Japon" || country == "India" || country == "Tailandia") {
        return "El continente del pais es: " + continentes[2];
    }
    else if (country == "Kenia" || country == "Nigeria" || country == "Sudan" || country == "Uganda" || country == "Somalia") {
        return "El continente del pais es: " + continentes[3];
    }
    else if (country == "Australia" || country == "Nueva Zelanda" || country == "Tonga" || country == "Palaos" || country == "Fiyi") {
        return "El continente del pais es: " + continentes[4];
    }
}
console.log(Continent("Grecia"));
////
////
function isEven(numero) {
    if (numero % 2 == 0) {
        return "El ".concat(numero, ", es numero par.");
    }
    else {
        return "El ".concat(numero, ", es numero impar.");
    }
}
exports.isEven = isEven;
console.log(isEven(7));
