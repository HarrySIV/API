import { Router } from 'express';
const router = Router();

import {
  getItems,
  getAnItem,
  createItem,
  deleteItem,
  updateItem,
} from '../controllers/items-controller';

//get menu items
router.get('/', getItems);

//get menu item by ID
router.get('/:iid', getAnItem);

//create menu item
router.post('/', createItem);

//delete menu item
router.delete('/', deleteItem);

//updates item
router.patch('/', updateItem);

module.exports = router;
