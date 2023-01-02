import { Product } from "~~/types/product.type";

export type CartItem = Product & { quantity: number };
