import {
  Customer_LegalInfo,
  Customer_Shipment,
  Customer_Contract,
  Customer_Discount,
  Customer_Bank,
  ASCInfo,
  Customer_Info,
} from '../common/client.types';
import { SPMATNO_TYPES } from '../common/sparePart.type';

export class Customer_Info_DTO {
  Customer_LegalInfo: Customer_LegalInfo;
  Customer_Shipment: Partial<Customer_Shipment>;
  Customer_Contract: Partial<Customer_Contract>;
  Customer_Discount: Partial<Customer_Discount>;
  Customer_Bank: Partial<Customer_Bank>;
  constructor() {}
  init_Customer_Info(data: Partial<Customer_Info>) {
    this.Customer_LegalInfo = {
      gis_code: data.gis_code || 0,
      C1_code: data.C1_code || '',
      organization_name: data.organization_name || '',
      organization_INN: data.organization_INN || '',
      DSO_region: data.DSO_region || 0,
      CliInfo_ID: data.CliInfo_ID || '',
      KPP: data.KPP || '',
      closed: data.closed || false,
    };
    if(data.id){
      this.Customer_LegalInfo.id=data.id
    }
    data.Customer_Shipment
      ? (this.Customer_Shipment = data.Customer_Shipment[0])
      : null;
    data.Customer_Contract
      ? (this.Customer_Contract = data.Customer_Contract[0])
      : null;
    data.Customer_Discount
      ? (this.Customer_Discount = data.Customer_Discount[0])
      : null;
    data.Customer_Bank ? (this.Customer_Bank = data.Customer_Bank[0]) : null;
  }

  init_ASC_INFO_DATA(data: ASCInfo) {
    this.Customer_LegalInfo = {
      gis_code: data.gis_code,
      C1_code: data.C1_code,
      organization_name: data.organization_name,
      organization_INN: data.organization_INN,
      DSO_region: data.DSO_region,
      KPP: data.KPP,
      closed: false,
    };
    this.Customer_Shipment = {
      C1_code: 'null',
      Indeks: data.Indeks,
      city: '',
      addres: data.addres,
      Tlf: data.Tlf,
      email: data.email,
      transpport_company: 'null',
      closed: false,
      main: true,
      Customer_LegalInfo_id: '',
    };
    this.Customer_Contract = {
      C1_code: 'null',
      name: data.contract_shipment,
      contract_date: data.contract_shipment_date,
      closed: false,
      type: SPMATNO_TYPES.SPARE_PART,
      main: true,
      Customer_LegalInfo_id: '',
    };
    this.Customer_Discount = {
      C1_code: 'null',
      discount: data.skid,
      closed: false,
      contract_id: '',
    };
    this.Customer_Bank = {
      Raschet_schet_bank: data.Raschet_schet_bank,
      Korr_schet_bank: data.Korr_schet_bank,
      BIK_bank: data.BIK_bank,
      Name_bank: data.Name_bank,
      Customer_LegalInfo_id: '',
    };
  }
  set_Customer_LegalInfo_id(Customer_LegalInfo_id: string) {
    this.Customer_LegalInfo.id = Customer_LegalInfo_id;
    this.Customer_Shipment.Customer_LegalInfo_id = Customer_LegalInfo_id;
    this.Customer_Contract.Customer_LegalInfo_id = Customer_LegalInfo_id;
    this.Customer_Bank.Customer_LegalInfo_id = Customer_LegalInfo_id;
  }
  set_CliInfo_ID(CliInfo_ID:string){
this.Customer_LegalInfo.CliInfo_ID=CliInfo_ID
  }
  set_contract_id(contract_id: string) {
    this.Customer_Discount.contract_id = contract_id;
  }

}
