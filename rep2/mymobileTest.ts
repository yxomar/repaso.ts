import { Mobile } from "./mobile";
import{mymobile} from "./mymobile"
let mobile = new Mobile("Huawei", "Total", "y7", "Marron", 123)
let mobile1 = new Mobile("Kaika", "Tottus", "RTU", "Blanco", 345)
let mobile2 = new Mobile("Logitech", "CoolBOx", "m34", "Gris", 76)
let mobile3 = new Mobile("Codenotch", "Madrid", "Bootcamp", "Azul", 7900)

let array = [mobile,mobile1,mobile2,mobile3]


let myCollection = new mymobile(array)

console.log(myCollection.printCollection());
console.log(myCollection.totalPriceCalculation());
