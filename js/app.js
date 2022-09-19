"use strict";
var MethodDelivery;
(function (MethodDelivery) {
    MethodDelivery[MethodDelivery["NotSelect"] = 0] = "NotSelect";
    MethodDelivery[MethodDelivery["ToHome"] = 1] = "ToHome";
    MethodDelivery[MethodDelivery["ToPoint"] = 2] = "ToPoint";
})(MethodDelivery || (MethodDelivery = {}));
class Cart {
    constructor() {
        this.cart = [];
        this.overallPrice = this.cart
            .map((i) => i.price)
            .reduce((a, b) => a + b);
        this.deliveryMethod = MethodDelivery.NotSelect;
    }
    checkYourCart() {
        return console.log(this.cart);
    }
    addProductToCart(product) {
        this.cart.push(product);
    }
    deleteProductById(id) {
        this.cart = this.cart.filter((item) => item.id != id);
    }
    sumAllProductsInCart() {
        if (this.cart) {
            const overallPrice = this.cart.map((i) => i.price);
            const res = overallPrice.reduce((a, b) => a + b);
            console.log(res);
        }
        else {
            return console.log(0);
        }
    }
    chooseDelivery(method, address) {
        this.deliveryMethod = method;
        this.deliveryAddress = address;
    }
    checkOut() {
        if (this.cart && this.deliveryMethod && this.deliveryAddress) {
            console.log(`You are Good! Your overall price is: ${this.overallPrice},and your
      delivery ${this.deliveryMethod == MethodDelivery.ToHome
                ? "to home"
                : "to pick point"}
      `);
        }
    }
}
