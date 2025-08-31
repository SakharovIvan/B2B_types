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
  Customer_Shipment: Partial<Customer_Shipment>[];
  Customer_Contract: Partial<Customer_Contract>[];
  Customer_Discount: Partial<Customer_Discount>[];
  Customer_Bank: Partial<Customer_Bank>[];
  constructor() {}
  init_Customer_Info(data: Partial<Customer_Info>) {
    this.Customer_LegalInfo = {
      gis_code: data.gis_code || 0,
      C1_code: data.C1_code || '',
      organization_name: data.organization_name || '',
      organization_INN: data.organization_INN || '',
      DSO_region: data.DSO_region || 0,
      CliInfo_ID: data.CliInfo_ID || null,
      KPP: data.KPP || '',
      closed: data.closed || false,
    };
    if (data.id) {
      this.Customer_LegalInfo.id = data.id;
    }
    data.Customer_Shipment
      ? (this.Customer_Shipment = data.Customer_Shipment)
      : null;
    data.Customer_Contract
      ? (this.Customer_Contract = data.Customer_Contract)
      : null;
    data.Customer_Discount
      ? (this.Customer_Discount = data.Customer_Discount)
      : null;
    data.Customer_Bank ? (this.Customer_Bank = data.Customer_Bank) : null;
  }
  add_Customer_Info(data: Partial<Customer_Info>) {
    if (data.Customer_Contract) {
      this.add_Customer_Contract(data.Customer_Contract[0]);
    }
    if (data.Customer_Shipment) {
      this.add_Customer_Shipment(data.Customer_Shipment[0]);
    }
    if (data.Customer_Discount) {
      this.add_Customer_Discount(data.Customer_Discount[0]);
    }
    if (data.Customer_Bank) {
      this.add_Customer_Bank(data.Customer_Bank[0]);
    }
  }
  add_Customer_Shipment(data: Partial<Customer_Shipment>) {
    const check =
      this.Customer_Shipment.filter((el) => {
        return JSON.stringify(el) === JSON.stringify(data);
      }).length === 1;
    if (check) {
      return;
    }
    this.Customer_Shipment.push(data);
  }
  add_Customer_Contract(data: Partial<Customer_Contract>) {
    const check =
      this.Customer_Contract.filter((el) => {
        return JSON.stringify(el) === JSON.stringify(data);
      }).length === 1;
    if (check) {
      return;
    }
    this.Customer_Contract.push(data);
  }
  add_Customer_Discount(data: Partial<Customer_Discount>) {
    const check =
      this.Customer_Discount.filter((el) => {
        return JSON.stringify(el) === JSON.stringify(data);
      }).length === 1;
    if (check) {
      return;
    }
    this.Customer_Discount.push(data);
  }
  add_Customer_Bank(data: Partial<Customer_Bank>) {
    const check =
      this.Customer_Bank.filter((el) => {
        return JSON.stringify(el) === JSON.stringify(data);
      }).length === 1;
    if (check) {
      return;
    }
    this.Customer_Bank.push(data);
  }

  set_Customer_LegalInfo_id(Customer_LegalInfo_id: string) {
    this.Customer_LegalInfo.id = Customer_LegalInfo_id;
    const new_Customer_Shipment = this.Customer_Shipment.map((el) => {
      return { ...el, Customer_LegalInfo_id };
    });
    const new_Customer_Contract = this.Customer_Contract.map((el) => {
      return { ...el, Customer_LegalInfo_id };
    });
    const new_Customer_Bank = this.Customer_Bank.map((el) => {
      return { ...el, Customer_LegalInfo_id };
    });
    this.Customer_Shipment = new_Customer_Shipment;
    this.Customer_Contract = new_Customer_Contract;
    this.Customer_Bank = new_Customer_Bank;
  }
  set_CliInfo_ID(CliInfo_ID: string) {
    this.Customer_LegalInfo.CliInfo_ID = CliInfo_ID;
  }
  set_contract_id(new_contract_id: string) {
    const new_Customer_Discount = this.Customer_Discount.map((el) => {
      return { ...el, contract_id: new_contract_id };
    });
    this.Customer_Discount = new_Customer_Discount;
  }
}

export class Customer_Info_Linear_DTO {
  Customer_LegalInfo: Customer_LegalInfo;
  Customer_Shipment: Partial<Customer_Shipment>;
  Customer_Contract: Partial<Customer_Contract>;
  Customer_Discount: Partial<Customer_Discount>;
  Customer_Bank: Partial<Customer_Bank>;

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
    };
    this.Customer_Contract = {
      C1_code: 'null',
      name: data.contract_shipment,
      contract_date: data.contract_shipment_date,
      closed: false,
      type: SPMATNO_TYPES.SPARE_PART,
      main: true,
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
    };
  }
  set_Customer_LegalInfo_id(Customer_LegalInfo_id: string) {
    this.Customer_LegalInfo.id = Customer_LegalInfo_id;
    this.Customer_Bank.Customer_LegalInfo_id = Customer_LegalInfo_id;
    this.Customer_Contract.Customer_LegalInfo_id = Customer_LegalInfo_id;
    this.Customer_Shipment.Customer_LegalInfo_id = Customer_LegalInfo_id;
  }
  set_CliInfo_ID(CliInfo_ID: string) {
    this.Customer_LegalInfo.CliInfo_ID = CliInfo_ID;
  }
  set_contract_id(new_contract_id: string) {
    this.Customer_Discount.contract_id = new_contract_id;
  }
}
