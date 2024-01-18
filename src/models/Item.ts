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
  options: {
    type: [
      {
        name: { type: String },
        price: { type: Number },
        checked: { type: Boolean },
      },
    ],
  },
  flavors: {
    type: [
      {
        isValid: { type: Boolean },
        checked: { type: Boolean },
        id: { type: String },
        value: { type: String },
      },
    ],
  },
  sizes: {
    type: [
      {
        isValid: { type: Boolean },
        checked: { type: Boolean },
        id: { type: String },
        value: { type: String },
        price: { type: Number },
        inches: { type: Number },
      },
    ],
  },
});

export default mongoose.model<IItem>('Item', itemSchema);
