import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ShipmentCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
