function hasEven(myNums){
    let respuesta = "";
    let i = 0;
    while(i< myNums.length){
       if(myNums[i]%2==0){
        respuesta = "hay numeros pares"
       }
       else{
        respuesta = "no hay numeros pares"
       }
      i++ 
    } 
    return respuesta
}
let numeros = [1,2,3,4]
console.log(hasEven(numeros));

function startWith(myName){
    let i = 0
    let x = true;
    while(i < myName.length && x == true){
      if(myName[i][0].toUpperCase() !== "M"){
     x = false
      }
      i++
    }
    return x;
}
let nombres = ["pepe", "Marcos", "Marian"]
console.log(startWith(nombres));