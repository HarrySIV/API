import mongoose, { Schema } from 'mongoose';
import { IItem, itemSchema } from './Item';

type TOrderItem = {
  itemID: number;
  itemPrice: number;
  items: IItem[];
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
  customer_name: { type: String },
  phone_number: { type: String },
  _id: { type: String },
  items: {
    type: [
      {
        itemID: Number,
        itemPrice: Number,
        items: itemSchema,
        quantity: Number,
        type: String,
      },
    ],
  },
  total: { type: Number },
});

export default mongoose.model<IOrder>('Order', orderSchema);
