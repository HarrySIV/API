import { RequestHandler } from 'express';
import Deal from '../models/Deal';

export const getDeals: RequestHandler = async (req, res, next) => {
  let deals;                                //instantiate orders to be found
  try {
   deals = await Deal.find({});           //finds orders from mongodb
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);                      //sends error message and returns error object
  }

  res.json({ deals });                      //sends order
};

export const getADeal: RequestHandler<{ oid: string }> = async (req, res, next) => {
  const orderID = req.params.oid;            //get id from request body
  let deal;                                 //instantiates order to be found
  try {
   deal = await Deal.findById(orderID);   //finds order from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ deal });
};

export const createDeal: RequestHandler = async (req, res, next) => {
  const { name, img, _id, items, total } = req.body;
  const createdOrder = new Deal({           //creates new order from request
    name,
    img,
    _id,
    items,
    total
  });

  try {
    await createdOrder.save();               //saves order to db
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.status(201).json({ createdOrder, message: 'DEAL CREATED' });  //returns order created status
};

export const deleteDeal: RequestHandler = async (req, res, next) => {
  const { _id } = req.body; 

  try {
    await Deal.deleteOne({ _id });          //deletes order from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error); 
  }

  res.json({ message: 'DEAL DELETED' });
};

export const updateDeal: RequestHandler = async (req, res, next) => {
  const { name, _id, items, total } = req.body;

  let deal;
  try {
   deal = await Deal.updateOne(           //takes information from request and updates existing order from id
      { _id },
      {
        name,
        _id,
        items,
        total
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ deal, message: 'DEAL UPDATED' });
};