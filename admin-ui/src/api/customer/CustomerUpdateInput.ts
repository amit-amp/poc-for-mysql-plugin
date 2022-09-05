import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  animal?: Array<"Dog" | "Cat" | "Bird">;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
