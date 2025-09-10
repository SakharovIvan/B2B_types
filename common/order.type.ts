import { product } from './card.types';

interface C1_Order_Main {
  id?: string;
  C1_code: string;
  status: number;
  GUID_1C: string;
}

export interface C1_Order extends C1_Order_Main {
  OrderNo: number;
  B2b_id: string;
  UPD_param: boolean;
  User_id: string;
  sum_wo_skid: number;
  sum_skid: number;
  sum_NDS: number;
  sum: number;
  SumPriceNDS: number;
  SumPrice_NDS: number;
  SumPrice_wo_NDS: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface C1_OrderMatNo {
  id?: string;
  spmatNo: string;
  qty: number;
  price: number;
  orderid: string;
  price_wo_skid: number;
  price_skid: number;
  price_rate_NDS: number;
  price_sum_NDS: number;
  price_sum: number;

  createdAt?: Date;
  updatedAt?: Date;
}
export interface C1_order_req extends C1_Order_Main {
  User_info?: OrderCustomer;
  content: C1_OrderMatNo[];
  SumPriceNDS: number;
  SumPrice_NDS: number;
  SumPrice_wo_NDS: number;
}

export interface OrderMatNo extends product {
  id?: string;
  SystemCheckErrorNo: number;
  createdAt?: Date;
  updateTimestamp?: Date;
  UserOrderId: string;
}

export interface C1_Order_Info extends C1_Order {
  User_info: OrderCustomer|null;
  products: C1_OrderMatNo[];
}

export interface Order {
  id?: string;
  email: string;
  OrderNo: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderStatus {
  id?: string;
  SystemCheck: boolean;
  WarrantyCheck: boolean;
  ManagerCheck: boolean;
  UserPayCheck: boolean;
  UserDeliverCheck: boolean;
  createdAt?: Date;
  updateTimestamp?: Date;
  UserOrderId: string;
}

export interface OrderCustomer {
  id?:string;
  UserOrderId:string
  Customer_LegalInfo_id:string
  Customer_Shipment_id:string
  Customer_Contract_id:string
  Customer_Bank_id:string
}

export enum ORDER_MAIL_VIEWS {
  'CREATED',
  'UPDATED',
}
