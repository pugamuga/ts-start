"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["InProccess"] = 1] = "InProccess";
    PaymentStatus[PaymentStatus["Rejected"] = 2] = "Rejected";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.InProccess) {
            throw new Error("Payments already in proccess");
        }
        this.status = PaymentStatus.Rejected;
        this.updatedAt = new Date();
    }
}
