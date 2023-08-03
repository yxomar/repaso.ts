"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("huawei", "Saga", "big", "Verde", 80);
var myMobile1 = new mobile_1.Mobile("Iphone", "Tottus", "Pro", "Negro", 100);
var myMobile2 = new mobile_1.Mobile("Samsung", "Lottus", "Sj", "Negro", 50);
var myMobile3 = new mobile_1.Mobile("Nokio", "Coolbox", "Yisus", "Blanco", 60);
// let myMobiles = [myMobile, myMobile1, myMobile2, myMobile3]
// console.log(myMobile.printClass());
// console.log(myMobiles[1].printClass());
// console.log(myMobiles[2].printClass());
// console.log(myMobiles[3].printClass());
myMobile2.setColor("Rosa");
console.log(myMobile2.getColor());
