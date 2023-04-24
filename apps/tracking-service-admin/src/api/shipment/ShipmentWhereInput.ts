import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ShipmentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
