import { type Product, type Product_Work } from './Product';

export interface Work {
  id: string;
  code: number;
  name: string;
  chars: string;
  tags: string[];
  notes: string;
}

export interface Work_Types {
  id: string;
  name: string;
}

export interface Tool_Work_List {
  product: Product;
  works: Product_Work[];
}
