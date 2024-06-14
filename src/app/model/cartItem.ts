import { Product } from "./product";

export class CartItem {
    constructor(initData?: Partial<CartItem>) {
        Object.assign(this, initData);
      }

    id!: number;
    product!: Product;
    quantity!: number;
}
