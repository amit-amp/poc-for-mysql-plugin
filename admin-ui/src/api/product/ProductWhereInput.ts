import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  color?: "Blue" | "Green" | "Orange" | "Purple" | "Yellow" | "Red";
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
