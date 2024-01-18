"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const items_controller_1 = require("../controllers/items-controller");
//get menu items
router.get('/', items_controller_1.getItems);
//get menu item by ID
router.get('/:iid', items_controller_1.getAnItem);
//create menu item
router.post('/', items_controller_1.createItem);
//delete menu item
router.delete('/', items_controller_1.deleteItem);
//updates item
router.patch('/', items_controller_1.updateItem);
module.exports = router;
