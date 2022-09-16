import mongoose, { Schema } from 'mongoose';

export interface IDeal {
  name: string;
  img: string;
  _id: string;
  items: number[];
  total: number;
}

export const dealSchema: Schema = new Schema({
  name: { type: String },
  img: { type: String },
  _id: { type: String },
  items: { type: [Number] },
  total: { type: Number },
});

export default mongoose.model<IDeal>('Deal', dealSchema);
