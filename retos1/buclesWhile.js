function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return "hay numeros pares ";
        }
        i++;
    }
}
var numeros = [1, 3, 4, 5, 6, 7, 8, 9];
console.log(hasEven(numeros));
function startWith(myName) {
    var i = 0;
    var x = true;
    while (i < myName.length && x == true) {
        if (myName[i][0].toUpperCase() !== "M") {
            x = false;
        }
        i++;
    }
    return x;
}
var nombres = ["Minguito", "Marcos", "Marian"];
console.log(startWith(nombres));
