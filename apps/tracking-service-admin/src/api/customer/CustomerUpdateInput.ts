import { ShipmentUpdateManyWithoutCustomersInput } from "./ShipmentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  shipments?: ShipmentUpdateManyWithoutCustomersInput;
};
