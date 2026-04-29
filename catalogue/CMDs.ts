import { Mat_No_Analog, Material_No } from './Mat_No';
import {
  Product,
  Product_Mat_No,
  Product_Type,
  Product_update,
  Product_update_result,
  Product_Work,
  Scheme_data,
} from './Product';
import { Work } from './Work';

export enum CATALOGUE {
  MATERIAL,
  ANALOGUE,
  PRODUCT,
  PRODUCT_TYPE,
  PRODUCT_MAT_NO,
  SCHEME,
  WORK,
}

export enum CRUD {
  GET,
  SEARCH,
  UPSERT,
  DELETE,
  FULL_UPDATE,
}

export interface CATALOGUE_CMD {
  catalogue: CATALOGUE | string;
  crud: CRUD;
}

export interface material_commands {
  material_full_update(data: Partial<Material_No>[]): Promise<void>;
  material_upsert(data: Partial<Material_No>[]): Promise<void>;
  get_material(data: Partial<Material_No>): Promise<Material_No>;
  search_material(daata: string): Promise<Material_No[] | []>;

  get_analogue(data: Partial<Material_No>): Promise<Mat_No_Analog[] | []>;
  analogue_full_update(data: Partial<Mat_No_Analog>): Promise<void>;
  analogue_upsert(data: Partial<Mat_No_Analog>): Promise<void>;
}

export interface product_commands {
  set_sp_mat_no_as_product(data: Partial<Material_No>[]): Promise<void>;
  upsert_product_types(data: Partial<Product_Type>[]): Promise<void>;
  delete_product_types(data: Pick<Product_Type, 'code'>[]): Promise<void>;
  get_product_types(): Promise<Product_Type[]>;
  set_Product_data(
    data: Product_update,
  ): Promise<Pick<Product_update_result, 'error_List'>>;
  get_Products(data: string): Promise<Product[] | []>;
  get_Scheme_data(data: Product): Promise<Scheme_data | []>;
  get_Product_Mat_nos(data: Product): Promise<Product_Mat_No[] | []>;
  get_Product_Works(data: Product): Promise<Product_Work[] | []>;
}

export interface work_commands {
  work_full_update(data: Partial<Work>[]): Promise<void>;
  work_search(data: string): Promise<Work[] | []>;
  work_get(data: Partial<Work>): Promise<Work>;
  work_part_update(data: Partial<Work>): Promise<void>;
}

export interface Catalogue_ClientProxy {
  send(pattern: CATALOGUE_CMD, simulation: any): any;
  connect(): any;
  close(): any;
  routingMap(): any;
}
