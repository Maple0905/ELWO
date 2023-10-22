export interface ITool {
  id: string;
  name: string;
  type: string;
  description: string;
  toolId: string;
  code: string;
  url: string;
}

export interface IAccessory {
  id: string,
  toolCode: string,
  name: string,
  type1: string,
  type2: string,
  sku: string,
  description: string,
  img: string,
  imgs: string[],
  supplierId: number | null,
  supplierName: string,
  discounted: boolean,
  originalPrice: number,
  price: number,
}
