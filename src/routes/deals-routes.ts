import { Router } from 'express';
const router = Router();

import {
  getDeals,
  getADeal,
  createDeal,
  deleteDeal,
  updateDeal,
} from '../controllers/deals-controller';

//get orders
router.get('/', getDeals);

//get order by ID
router.get('/:oid', getADeal);

//create orders on orders page
router.post('/', createDeal);

//delete order from id
router.delete('/', deleteDeal);

//updates order from id
router.patch('/', updateDeal);

module.exports = router;
