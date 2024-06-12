export class Product {
    constructor(initData?: Partial<Product>) {
        Object.assign(this, initData);
        this.createDate = new Date();
        this.quantity = 0;
      }

    id!: number;
    name!: string;
    authors!: string[];
    company!: string;
    isShow!: boolean;
    isSale!: boolean;
    imgUrl!: string;
    createDate!: Date;
    price!: number;
    quantity: number;
}
