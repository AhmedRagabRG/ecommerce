import { IProduct } from "../../products/interfaces/product";

export interface ICart extends IProduct {
    amount: number;
}