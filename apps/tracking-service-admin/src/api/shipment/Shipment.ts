import { Customer } from "../customer/Customer";

export type Shipment = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
