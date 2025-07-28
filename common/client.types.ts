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
  CliInfo_ID?: string;
  KPP: string;
  createdAt?: Date;
}

export enum DSO_REGION {
  "",
  'Россия',
  "Волкова",
  "Задорожняя",
  "Восток"
}
export enum DSO_REGION_EMAIL{
  'Россия'='i.sakharov@kls-gr.ru',
  "Волкова"='m.volkova@kls-gr.ru',
  "Задорожняя"='e.zadorozhnyaya@kls-gr.ru',
  "Восток"='vostok@kls-gr.ru',
}

export enum ROLES_LIST{
  "ASC",
  "ADMIN"
}

export interface UserModel{
  id:string;
  email:string;
  password:string;
  isActivated: boolean;
  activationLink: string;
  createdAt: Date;
  updatedAt: Date;

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
  UserModel_ID:string;
  createdAt?: Date;
  updatedAt?:Date
}

export interface Roles {
  id?: string;
  email: string;
  admin: boolean;
  type: ROLES_LIST;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface registrationInfo extends Partial<CliInfo>,Partial<UserModel>{}