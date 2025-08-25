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
      if (!Number(el.qty) && el.qty) {
        return;
      }
      this.card.push({
        ...el,
        qty: Number(el.qty),
      });
    });
  }
}
