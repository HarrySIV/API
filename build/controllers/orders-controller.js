"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = exports.deleteOrder = exports.createOrder = exports.getAnOrder = exports.getOrders = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const getOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let orders;
    try {
        orders = yield Order_1.default.find({});
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ orders });
});
exports.getOrders = getOrders;
const getAnOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderID = req.params.oid;
    let order;
    try {
        order = yield Order_1.default.findById(orderID);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ order });
});
exports.getAnOrder = getAnOrder;
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_name, phone_number, _id, orderItems, total, } = req.body;
    const createdOrder = new Order_1.default({
        customer_name,
        phone_number,
        _id,
        orderItems,
        total,
    });
    try {
        yield createdOrder.save();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
            console.log(error.message);
        }
        return next(error);
    }
    res.status(201).json({ createdOrder, message: 'ORDER CREATED' });
});
exports.createOrder = createOrder;
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        yield Order_1.default.deleteOne({ _id });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ message: 'ORDER DELETED' });
});
exports.deleteOrder = deleteOrder;
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_name, _id, items, total } = req.body;
    let order;
    try {
        order = yield Order_1.default.updateOne({ _id }, {
            customer_name,
            _id,
            items,
            total,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ order, message: 'ORDER UPDATED' });
});
exports.updateOrder = updateOrder;
