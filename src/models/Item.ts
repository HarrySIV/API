import mongoose, { Schema } from 'mongoose';

export interface IItem {
  name: string;
  description: string;
  price: number;
  _id: string;
  cooking_time: string;
  options: TItemOption[];
  sizes?: TSize[];
  flavors?: TFlavor[];
}

type TItemOption = {
  name: string;
  price: number;
  checked: boolean;
};

type TSize = {
  isValid: boolean;
  checked: boolean;
  id: string;
  value: string;
  price: number;
  inches: number;
};

type TFlavor = {
  isValid: boolean;
  checked: boolean;
  id: string;
  value: string;
};

export const itemSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  _id: { type: String },
  cooking_time: { type: String },
  options: { type: [{ name: String, price: Number, checked: Boolean }] },
  flavors: {
    type: [
      {
        isValid: Boolean,
        checked: Boolean,
        id: String,
        value: String,
      },
    ],
  },
  sizes: {
    type: [
      {
        isValid: Boolean,
        checked: Boolean,
        id: String,
        value: String,
        price: Number,
        inches: Number,
      },
    ],
  },
});

export default mongoose.model<IItem>('Item', itemSchema);
