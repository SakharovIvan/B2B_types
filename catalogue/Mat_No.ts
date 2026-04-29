export interface Material_No {
  id: string;
  mat_no: string;
  name: string;
  chars: string;
  price: number;
  tags: string[];
  warehouseqty: number;
  warehousestatus: WAREHOUSE_STATUS;
  c1name: string;
  notes: string;
  type: Material_No_types;
}

export enum Material_No_types {
  Later="Позже",
  Spare_part="Запчасти",
  Product="Продукт",
  Accessories="Оснастка",
}

export interface Mat_No_Analog {
  id: string;
  mat_no: Material_No;
  analog: Material_No;
  percentage: number;
}

export enum WAREHOUSE_STATUS {
  empty,
  way,
  stock,
}

export const Material_No_types_object = Object.values(Material_No_types) 