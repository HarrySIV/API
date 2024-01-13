import mongoose, { Schema } from 'mongoose';

export interface IDeal {
  name: string;
  img: string;
  _id: string;
  items: { id: number; size?: string }[];
  total: number;
}

export const dealSchema: Schema = new Schema({
  name: { type: String },
  img: { type: String },
  _id: { type: String },
  items: [{ id: Number, size: String }],
  total: { type: Number },
});

export default mongoose.model<IDeal>('Deal', dealSchema);
