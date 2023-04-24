import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ShipmentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
