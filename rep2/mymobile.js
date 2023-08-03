"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mymobile = void 0;
var mymobile = /** @class */ (function () {
    function mymobile(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    mymobile.prototype.getMobile = function () {
        return this.mobiles;
    };
    mymobile.prototype.setMobile = function (newMobile) {
        this.mobiles = newMobile;
    };
    mymobile.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    mymobile.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    mymobile.prototype.printCollection = function () {
        var x;
        for (var i = 0; i < this.mobiles.length; i++) {
            x += this.mobiles[i].printClass();
        }
        return x;
    };
    mymobile.prototype.totalPriceCalculation = function () {
        var x = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            x += this.mobiles[i].getPrice();
        }
        return x;
    };
    return mymobile;
}());
exports.mymobile = mymobile;
