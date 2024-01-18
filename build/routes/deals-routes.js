"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const deals_controller_1 = require("../controllers/deals-controller");
//get orders
router.get('/', deals_controller_1.getDeals);
//get order by ID
router.get('/:oid', deals_controller_1.getADeal);
//create orders on orders page
router.post('/', deals_controller_1.createDeal);
//delete order from id
router.delete('/', deals_controller_1.deleteDeal);
//updates order from id
router.patch('/', deals_controller_1.updateDeal);
module.exports = router;
