export type spmatNo = {
  spmatNo: string;
};

export interface SparePart extends spmatNo {
  id?: string;
  name: string;
  char: string;
  price: number; //decimal
  warehousestatus: string;
  warehouseqty: number;
  c1name: string;
  type:SPMATNO_TYPES;
  tags: string[];
  updatedAt?: Date;
}

export enum SPMATNO_TYPES{
  UNDEFINED,
  SPARE_PART,
  TOOL,
  ACCESSORY
}


export interface SPanalog extends spmatNo {
  id?: string;
  spmatNoanalog: string;
  percentage: number;
  updatedAt?: Date;
}
