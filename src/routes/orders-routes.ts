import { Router } from 'express';
const router = Router();

import {
  getOrders,
  getAnOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} from '../controllers/orders-controller';

//get orders
router.get('/', getOrders);

//get order by ID
router.get('/:oid', getAnOrder);

//create orders on orders page
router.post('/', createOrder);

//delete order from id
router.delete('/', deleteOrder);

//updates order from id
router.patch('/', updateOrder);

module.exports = router;
