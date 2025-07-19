import { C1_Order, C1_order_req } from "./order.type";

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

export interface Order_cmd_int{
    cmd:Order_cmd,
    request?:Partial<C1_Order>
    data?:C1_order_req
}

export interface create_order {
  data: {
    card: Object[];
    email: string;
  };
}

export interface get_order_list {
  data: {
    filters: Object;
    options?: { offset: number; limit: number };
  };
}

export interface get_order_content {
  data: { email: string; OrderNo: number };
}
