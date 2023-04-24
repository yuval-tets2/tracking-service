import { Shipment } from "../shipment/Shipment";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
