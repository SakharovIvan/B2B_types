import { product } from './card.types';
export interface C1_Order {
  id?: string;
  OrderNo: number;
  B2b_id: string;
  UPD_param: boolean;
  GUID_1C: string;
  C1_code: string;
  status: number;
  User_id: string;
  sum_wo_skid: number;
  sum_skid: number;
  sum_NDS: number;
  sum: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface C1_OrderMatNo {
  id?: string;
  spmatNo: number;
  qty: number;
  price: number;
  orderid: number;
  price_wo_skid: number;
  price_skid: number;
  price_rate_NDS: number;
  price_sum_NDS: number;
  price_sum: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderMatNo extends product{
  id?: string;
  SystemCheckErrorNo: number;
  createdAt?: Date;
  updateTimestamp?: Date;
  UserOrderId: string;
}

export interface Order {
  id?: string;
  email: string;
  OrderNo: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderStatus{
  id?:string;
  SystemCheck:boolean;
  WarrantyCheck:boolean;
  ManagerCheck:boolean;
  UserPayCheck:boolean;
  UserDeliverCheck:boolean;
  createdAt?:Date;
  updateTimestamp?:Date;
  UserOrderId:string;
}
