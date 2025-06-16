import { SparePart, spmatNo } from "./sparePart.type";

export interface CardRowed extends product {
  id?: string;
  email: string;
  WarrantyCheck: boolean;
  SystemCheck: boolean;
  SystemCheckErrorNo: number;
  createdAt: Date;
}

export interface CardStructure {
  data?;
  email: string;
  card: product[];
}

export type product = spmatNo & {
  qty: number;
  Warranty: boolean;
  WarrantyRepNo: number;
  UserComment: string;
};

export type productCheck = product& SparePart & {
  analog: product[] | [];
};
