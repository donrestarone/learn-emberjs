import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subTotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  }

  get tax() {
    return 0.13 * this.subTotal
  }

  get total() {
    return this.subTotal + this.tax
  }

}
