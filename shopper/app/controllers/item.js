import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
export default class ItemController extends Controller {
  @tracked color = 'red'
  @action onChangeColor(newColor) {
    this.color = newColor
  }

  get productImage() {
    if (this.color == 'red') {
      return "https://placebear.com/g/200/300"
    } else {
      return "https://placebear.com/g/225/350"
    }
  }
}
