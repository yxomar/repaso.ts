import { Mobile } from "./mobile";

let myMobile = new Mobile("huawei", "Saga", "big", "Verde", 80 )
let myMobile1 = new Mobile("Iphone","Tottus", "Pro", "Negro", 100)
let myMobile2 = new Mobile("Samsung", "Lottus", "Sj", "Negro", 50)
let myMobile3 = new Mobile("Nokio", "Coolbox", "Yisus", "Blanco", 60)


// let myMobiles = [myMobile, myMobile1, myMobile2, myMobile3]
// console.log(myMobile.printClass());
// console.log(myMobiles[1].printClass());
// console.log(myMobiles[2].printClass());
// console.log(myMobiles[3].printClass());
myMobile2.setColor("Rosa");
console.log(myMobile2.getColor());

