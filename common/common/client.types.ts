export interface ASCInfo {
  id?: string;
  gis_code: number;
  C1_code: string;
  organization_name: string;
  Indeks: string;
  addres: string;
  Tlf: string;
  email: string;
  Raschet_schet_bank: string;
  Korr_schet_bank: string;
  BIK_bank: string;
  Name_bank: string;
  organization_INN: string;
  OKPO: string;
  email_2: string;
  skid: number;
  contract_DSO: string;
  contract_DSO_date: string;
  contract_shipment: string;
  contract_shipment_date: string;
  DSO_region: number;
  CliInfo_ID: string;
  KPP: string;
  createdAt?: Date;
}

enum DSO_REGION {
    ''
}

export interface CliInfo {
  id?: string;
  ASCInfo_ID: string;
  email: string;
  addres: string;
  organization_name: string;
  organization_INN: string;
  organization_FIO: string;
  organization_agreement: boolean;
  createdAt?: Date;
}

export interface Roles {
  email: string;
  admin: boolean;
  type: string;
  createdAt: Date;
}
