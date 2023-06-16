export default class Company {
  id: number;
  name: string;
  address: string;
  phone: string;
  revenue: number;

  constructor(name: string, address: string, phone: string, revenue: number) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.revenue = revenue;
  }
}
