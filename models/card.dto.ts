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
      const product = new Product_DTO(el)
      this.card.push(product);
    });
  }
}

export class Product_DTO implements product {
  spmatNo;
  qty;
  Warranty;
  WarrantyRepNo;
  UserComment;
  constructor(data) {
    this.spmatNo=data.spmatNo
    this.qty=data.qty
    this.Warranty=data.Warranty||false
    if(data.WarrantyRepNo){
    this.WarrantyRepNo=data.WarrantyRepNo}
    if(data.UserComment){
    this.UserComment=data.UserComment}
  }
}
