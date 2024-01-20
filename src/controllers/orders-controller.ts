import { RequestHandler } from 'express';
import Order from '../models/Order';
import { IItem } from '../models/Item';

export const getOrders: RequestHandler = async (req, res, next) => {
  let orders;
  try {
    orders = await Order.find({});
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: `${error.message}` });
    }
    return next(error);
  }

  res.json({ orders });
};

export const getAnOrder: RequestHandler<{ oid: string }> = async (
  req,
  res,
  next
) => {
  const orderID = req.params.oid;
  let order;
  try {
    order = await Order.findById(orderID);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: `${error.message}` });
    }
    return next(error);
  }

  res.json({ order });
};

export const createOrder: RequestHandler = async (req, res, next) => {
  const {
    customer_name,
    phone_number,
    _id,
    orderItems,
    total,
  }: {
    customer_name: string;
    phone_number: string;
    _id: string;
    orderItems: IItem[];
    total: number;
  } = req.body;
  const createdOrder = new Order({
    customer_name,
    phone_number,
    _id,
    orderItems,
    total,
  });

  try {
    await createdOrder.save();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: `${error.message}` });
      console.log(error.message);
    }
    return next(error);
  }

  res.status(201).json({ createdOrder, message: 'ORDER CREATED' });
};

export const deleteOrder: RequestHandler = async (req, res, next) => {
  const { _id } = req.body;

  try {
    await Order.deleteOne({ _id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: `${error.message}` });
    }
    return next(error);
  }

  res.json({ message: 'ORDER DELETED' });
};

export const updateOrder: RequestHandler = async (req, res, next) => {
  const { customer_name, _id, items, total } = req.body;

  let order;
  try {
    order = await Order.updateOne(
      { _id },
      {
        customer_name,
        _id,
        items,
        total,
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: `${error.message}` });
    }
    return next(error);
  }

  res.json({ order, message: 'ORDER UPDATED' });
};
