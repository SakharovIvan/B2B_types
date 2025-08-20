import { CardStructure, product } from '../common/card.types';

export class Card_upd_dto implements CardStructure {
  email: string;
  card: product[]=[];
  constructor(data) {
    this.email = data.email;
    this.card_init(data.card);
  }
  private card_init(data) {
    data.forEach((el) => {
      if(el.qty&&typeof el.qty !=='number'){return}
      this.card.push({
        spmatNo: el.spmatNo,
        qty: el.qty,
        Warranty: el.Warranty || false,
        WarrantyRepNo: el.WarrantyRepNo || null,
        UserComment: el.UserComment || null,
      });
    });
  }
}
