import { Order } from "../order/Order";

export type Product = {
  color?: "Blue" | "Green" | "Orange" | "Purple" | "Yellow" | "Red" | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
