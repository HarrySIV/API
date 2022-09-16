import { RequestHandler } from 'express';
import Order from '../models/Order';

export const getOrders: RequestHandler = async (req, res, next) => {
  let orders;                                //instantiate orders to be found
  try {
    orders = await Order.find({});           //finds orders from mongodb
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);                      //sends error message and returns error object
  }

  res.json({ orders });                      //sends order
};

export const getAnOrder: RequestHandler<{ oid: string }> = async (req, res, next) => {
  const orderID = req.params.oid;            //get id from request body
  let order;                                 //instantiates order to be found
  try {
    order = await Order.findById(orderID);   //finds order from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ order });
};

export const createOrder: RequestHandler = async (req, res, next) => {
  const { customer_name, _id, items } = req.body;
  const createdOrder = new Order({           //creates new order from request
    customer_name,
    _id,
    items,
  });

  try {
    await createdOrder.save();               //saves order to db
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.status(201).json({ createdOrder, message: 'ORDER CREATED' });  //returns order created status
};

export const deleteOrder: RequestHandler = async (req, res, next) => {
  const { _id } = req.body; 

  try {
    await Order.deleteOne({ _id });          //deletes order from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error); 
  }

  res.json({ message: 'ORDER DELETED' });
};

export const updateOrder: RequestHandler = async (req, res, next) => {
  const { customer_name, _id, items } = req.body;

  let order;
  try {
    order = await Order.updateOne(           //takes information from request and updates existing order from id
      { _id },
      {
        customer_name,
        _id,
        items,
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ order, message: 'ORDER UPDATED' });
};