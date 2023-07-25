function evenNumbers(numero:number){
    for(let i = 1 ; i <= numero; i+=2){
     console.log(i);
    }
 }
 new evenNumbers(8)
 
 function myRevert(myArray){
     let array = []
     for(let index = myArray.length - 1; index >= 0 ; index-- ){
       array += myArray[index];
     }
     return array
 }
 console.log(myRevert([1,2,3,4,5,6,7,8,9]));
 
 function isRainbow(colores){
      for(let colors of colores){
         if(colors.includes("Rojo")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Naranja")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Amarillo")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Verde")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Azul")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Violeta")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else{
         console.log("El "+ colors + " no esta dentro del arcoiris.");
      }
  }
 }
 let colores = ["Azul" , "Rosa", "Negro"]
 isRainbow(colores)
 
 export function add(myWords){
    let z = 0
    for(let reducir of myWords){
       z += reducir.length
    }
    return z
 }
 let array = ["Saludos", "Noche", "Quiero "]
 console.log(add(array));