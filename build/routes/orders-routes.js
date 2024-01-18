"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const orders_controller_1 = require("../controllers/orders-controller");
//get orders
router.get('/', orders_controller_1.getOrders);
//get order by ID
router.get('/:oid', orders_controller_1.getAnOrder);
//create orders on orders page
router.post('/', orders_controller_1.createOrder);
//delete order from id
router.delete('/', orders_controller_1.deleteOrder);
//updates order from id
router.patch('/', orders_controller_1.updateOrder);
module.exports = router;
