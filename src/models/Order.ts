import mongoose, { Schema } from 'mongoose';
import { IItem, itemSchema } from './Item';

export interface IOrder {
  customer_name: string;
  phone_number: string;
  _id: string;
  items: IItem[];
  total: number;
}

const orderSchema: Schema = new Schema({
  customer_name: { type: String },
  phone_number: { type: String },
  _id: { type: String },
  items: [itemSchema],
  total: { type: Number },
});

export default mongoose.model<IOrder>('Order', orderSchema);
