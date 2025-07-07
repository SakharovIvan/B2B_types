export enum Order_cmd{
    create_order='create_order_from_card',
    update='update_order',
    get_orders_list='get_orders_list',
    get_order_content='get_order_info',
}

export interface create_order {
    data:{
        card:Object[],
        email:string
    }
}

export interface get_order_list{
    data:{
        filters: Object;
            options?: { offset: number; limit: number };
    }
}

export interface get_order_content{
    data: { email: string; OrderNo: number }
}