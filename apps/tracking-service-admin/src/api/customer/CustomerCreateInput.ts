import { ShipmentCreateNestedManyWithoutCustomersInput } from "./ShipmentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutCustomersInput;
};
