import mongoose, { Schema } from 'mongoose';

export interface IItem {
  name: string;
  description: string;
  price: number;
  _id: string;
  cooking_time: string;
}

export const itemSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  _id: { type: String },
  cooking_time: { type: String },
});

export default mongoose.model<IItem>('Item', itemSchema);
