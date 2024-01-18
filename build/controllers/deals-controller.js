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
exports.updateDeal = exports.deleteDeal = exports.createDeal = exports.getADeal = exports.getDeals = void 0;
const Deal_1 = __importDefault(require("../models/Deal"));
const getDeals = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let deals; //instantiate orders to be found
    try {
        deals = yield Deal_1.default.find({}); //finds orders from mongodb
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error); //sends error message and returns error object
    }
    res.json({ deals }); //sends order
});
exports.getDeals = getDeals;
const getADeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderID = req.params.oid; //get id from request body
    let deal; //instantiates order to be found
    try {
        deal = yield Deal_1.default.findById(orderID); //finds order from id
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ deal });
});
exports.getADeal = getADeal;
const createDeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, img, _id, items, total } = req.body;
    const createdOrder = new Deal_1.default({
        name,
        img,
        _id,
        items,
        total
    });
    try {
        yield createdOrder.save(); //saves order to db
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.status(201).json({ createdOrder, message: 'DEAL CREATED' }); //returns order created status
});
exports.createDeal = createDeal;
const deleteDeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        yield Deal_1.default.deleteOne({ _id }); //deletes order from id
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ message: 'DEAL DELETED' });
});
exports.deleteDeal = deleteDeal;
const updateDeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, _id, items, total } = req.body;
    let deal;
    try {
        deal = yield Deal_1.default.updateOne(//takes information from request and updates existing order from id
        { _id }, {
            name,
            _id,
            items,
            total
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ deal, message: 'DEAL UPDATED' });
});
exports.updateDeal = updateDeal;
