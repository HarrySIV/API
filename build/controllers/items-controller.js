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
exports.updateItem = exports.deleteItem = exports.createItem = exports.getAnItem = exports.getItems = void 0;
const Item_1 = __importDefault(require("../models/Item"));
const getItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let items; //instantiate items to be found
    try {
        items = yield Item_1.default.find({}); //find items from mongodb
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error); //sends error message and returns error object
    }
    res.json({ items: items }); //sends items
});
exports.getItems = getItems;
const getAnItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const itemID = req.params.iid; //get id from request body
    let item; //instantiate item to be found
    try {
        item = yield Item_1.default.findById(itemID); //find an item from id
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ item: item });
});
exports.getAnItem = getAnItem;
const createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, _id, cooking_time, options, hasSizes } = req.body;
    const createdItem = new Item_1.default({
        name,
        description,
        price,
        _id,
        cooking_time,
        options,
        hasSizes
    });
    try {
        yield createdItem.save(); //saves new item to the database
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.status(201).json({ createdItem, message: 'CREATED ITEM' }); //returns item created status
});
exports.createItem = createItem;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        yield Item_1.default.deleteOne({ _id }); //deletes item from id
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ message: 'DELETED ITEM' });
});
exports.deleteItem = deleteItem;
const updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, _id, cooking_time, options, hasSizes } = req.body;
    let item;
    try {
        item = yield Item_1.default.updateOne(//takes information from request and updates existing item from id
        { _id }, {
            name,
            description,
            price,
            _id,
            cooking_time,
            options,
            hasSizes
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: `${error.message}` });
        }
        return next(error);
    }
    res.json({ item, message: 'UPDATED ITEM' });
});
exports.updateItem = updateItem;
