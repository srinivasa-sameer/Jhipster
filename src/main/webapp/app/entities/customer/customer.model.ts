export interface ICustomer {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  address?: string;
  accountnum?: string;
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public phone?: string,
    public address?: string,
    public accountnum?: string
  ) {}
}

export function getCustomerIdentifier(customer: ICustomer): number | undefined {
  return customer.id;
}
