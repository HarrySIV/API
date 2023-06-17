import { RequestHandler } from 'express';
import Item from '../models/Item';

export const getItems: RequestHandler = async (req, res, next) => {
  let items;                          //instantiate items to be found
  try {
    items = await Item.find({});      //find items from mongodb
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);                //sends error message and returns error object
  }

  res.json({ items: items });         //sends items
};

export const getAnItem: RequestHandler<{ iid: string }> = async (req, res, next) => {
  const itemID = req.params.iid;         //get id from request body
  let item;                              //instantiate item to be found
  try {
    item = await Item.findById(itemID);  //find an item from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ item: item });
};

export const createItem: RequestHandler = async (req, res, next) => {
  const { name, description, price, _id, cooking_time, options, hasSizes } = req.body; 
  const createdItem = new Item({      //gets information from reqest and creates new instance
    name,
    description,
    price,
    _id,
    cooking_time,
    options,
    hasSizes
  });

  try {
    await createdItem.save();         //saves new item to the database
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.status(201).json({ createdItem, message: 'CREATED ITEM' });  //returns item created status
};

export const deleteItem: RequestHandler = async (req, res, next) => {
  const { _id } = req.body;

  try {
    await Item.deleteOne({ _id });    //deletes item from id
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ message: 'DELETED ITEM' });
};

export const updateItem: RequestHandler = async (req, res, next) => {
  const { name, description, price, _id, cooking_time, options, hasSizes } = req.body;

  let item;
  try {
    item = await Item.updateOne(      //takes information from request and updates existing item from id
      { _id },
      {
        name,
        description,
        price,
        _id,
        cooking_time,
        options,
        hasSizes
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json( {message: `${error.message}` })
    }
    return next(error);
  }

  res.json({ item, message: 'UPDATED ITEM' });
};