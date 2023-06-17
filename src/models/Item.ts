import mongoose, { Schema } from 'mongoose';

export interface IItem {
  name: string;
  description: string;
  price: number;
  _id: string;
  cooking_time: string;
  hasToppings: boolean;
  hasSizes: boolean;
}

export const itemSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  _id: { type: String },
  cooking_time: { type: String },
  options: { type: [{ name: String, price: Number }] },
  hasSizes: { type: Boolean },
});

export default mongoose.model<IItem>('Item', itemSchema);
