enum PaymentStatus {
  Holded,
  InProccess,
  Rejected,
}

class Payment {
  id: number;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt!: Date;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date()
    this.status = PaymentStatus.Holded
  }

  getPaymentLifeTime():number{
    return new Date().getTime() - this.createdAt.getTime()
  }

  unholdPayment(){
    if (this.status === PaymentStatus.InProccess){
        throw new Error("Payments already in proccess")
    }
    this.status = PaymentStatus.Rejected
    this.updatedAt = new Date()
  }
}
