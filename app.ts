enum MethodDelivery {
  NotSelect,
  ToHome,
  ToPoint,
}
interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IToHome {
  date: Date;
  address: string;
}
interface IToPoint {
  date: Date;
  storeId: number;
}

class Cart {
  private cart: IProduct[] = [];
  deliveryMethod: MethodDelivery;
  deliveryAddress!: IToHome | IToPoint;

  constructor() {
    this.deliveryMethod = MethodDelivery.NotSelect;
  }

  checkYourCart() {
    return console.log(this.cart);
  }

  addProductToCart(product: IProduct) {
    this.cart.push(product);
  }

  deleteProductById(id: number) {
    this.cart = this.cart.filter((item: IProduct) => item.id != id);
  }

  sumAllProductsInCart() {
    if (this.cart) {
      const overallPrice = this.cart.map((i: IProduct) => i.price);
      const res: number = overallPrice.reduce((a, b) => a + b);
      console.log(res);
    } else {
      return console.log(0);
    }
  }

  overallPrice: number = this.cart
    .map((i: IProduct) => i.price)
    .reduce((a, b) => a + b);

  chooseDelivery(
    method: MethodDelivery.ToHome | MethodDelivery.ToPoint,
    address: IToHome | IToPoint
  ) {
    this.deliveryMethod = method;
    this.deliveryAddress = address;
  }

  checkOut() {
    if (this.cart && this.deliveryMethod && this.deliveryAddress) {
      console.log(`You are Good! Your overall price is: ${
        this.overallPrice
      },and your
      delivery ${
        this.deliveryMethod == MethodDelivery.ToHome
          ? "to home"
          : "to pick point"
      }
      `);
    }
  }
}
