import mongoose, { Schema } from 'mongoose';
import { IItem, itemSchema } from './Item';

type TOrderItem = {
  itemID: number;
  itemPrice: number;
  orderItems: IItem[];
  quantity: number;
  type: 'deal' | 'menu';
};

export interface IOrder {
  customer_name: string;
  phone_number: string;
  _id: string;
  items: TOrderItem[];
  total: number;
}

const orderSchema: Schema = new Schema({
  customer_name: String,
  phone_number: String,
  _id: String,
  orderItems: [
    {
      _id: Number,
      itemPrice: Number,
      items: { type: [itemSchema] },
      quantity: Number,
      type: { type: String },
    },
  ],
  total: { type: Number },
});

export default mongoose.model<IOrder>('Order', orderSchema);
