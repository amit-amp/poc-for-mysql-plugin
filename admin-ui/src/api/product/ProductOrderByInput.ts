import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
