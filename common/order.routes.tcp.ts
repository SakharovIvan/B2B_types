import ValidUser from '../proto/user.interface';
import { CardRowed } from './card.types';
import { ASCInfo, Customer_Info } from './client.types';
import { C1_Order, C1_order_req } from './order.type';

export enum Order_cmd {
  create_order = 'create_order_from_card',
  update = 'update_order',
  get_orders_list = 'get_orders_list',
  get_order_content = 'get_order_info',
  c1_get_order = 'c1_get_order',
  c1_upd_order = 'c1_upd_order',
  c1_get_order_test = 'c1_get_order_test',
  c1_upd_order_test = 'c1_upd_order_test',
  c1_clear_order_test = 'c1_clear_order_test',
}

export interface Order_cmd_int {
  cmd: Order_cmd;
  request?: Partial<C1_Order>;
  data?: C1_order_req;
}

export interface create_order {
  card: CardRowed[];
  user: ValidUser;
  ascInfo: Required<Customer_Info>;
}

export interface get_order_list {
  filters: Object;
  options?: { offset: number; limit: number };
}

export interface get_order_content {
  email: string;
  OrderNo: number;
}
