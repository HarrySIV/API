import mongoose, { Schema } from 'mongoose';

export interface IDeal {
  name: string;
  img: string;
  _id: string;
  items: { id: number; size?: string }[];
  total: number;
}

export const dealSchema: Schema = new Schema({
  name: String,
  img: String,
  _id: String,
  items: [{ id: Number, size: String }],
  total: Number,
});

export default mongoose.model<IDeal>('Deal', dealSchema);
