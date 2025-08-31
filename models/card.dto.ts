import { CardStructure, product } from '../common/card.types';

export class Card_upd_dto implements CardStructure {
  email: string;
  card: product[] = [];
  constructor(data) {
    this.email = data.email;
    this.card_init(data.card);
  }
  private card_init(data) {
    data.forEach((el) => {
      let product: Partial<product> = {};

      if (el.qty) {
        product.qty = Number(el.qty);
      }
      this.card.push({
        ...el,
        ...product,
      });
    });
  }
}
