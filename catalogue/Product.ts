import type { Material_No } from './Mat_No';
import type { Work } from './Work';

export interface Product {
  id: string;
  product: Material_No; //Material_No.mat_no
  type: Product_Type; // Product_Type.code
}

export interface Product_with_data {
  id: string;
  product: Material_No; //Material_No.mat_no
  type: Product_Type; // Product_Type.code
}

export interface Product_Mat_No {
  id: string;
  product: Product;
  sp_mat_no: Material_No;
  qty: number;
}

export interface Product_Type {
  id: string;
  code: number;
  name: string;
}

export interface Scheme_data {
  sp_mat_no_list: Product_Mat_No[] | null;
  works: Product_Work[] | null;
  attachment?: [];
}

export interface Product_Work {
  id: string;
  work: Work;
  product: Product;
  time: number;
  price: number;
}

export interface Product_update {
  product: string;
  type?: number;
  sp_mat_no_list?: { sp_mat_no: string; qty: number }[];
  work_list?: { code: number; time?: number; price?: number }[];
}

export interface Product_update_result extends Product_update {
  error_List:
    | {
        sp_mat_no_list: { sp_mat_no: string; qty: number; message: string }[];
        work_list: {
          code: number;
          time?: number;
          price?: number;
          message: string;
        }[];
      }
    | {};
}

export const undefined_type: Omit<Product_Type, 'id'> = {
  code: 1,
  name: 'Тип не опрделен',
};
