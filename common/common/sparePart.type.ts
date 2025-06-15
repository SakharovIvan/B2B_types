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
  tags: string[];
  updatedAt?: Date;
}


export interface SPanalog extends spmatNo {
  id?: string;
  spmatNoanalog: string;
  percentage: number;
  updatedAt?: Date;
}
