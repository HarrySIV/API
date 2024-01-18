"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.itemSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    _id: { type: String },
    cooking_time: { type: String },
    options: {
        type: [
            {
                name: { type: String },
                price: { type: Number },
                checked: { type: Boolean },
            },
        ],
    },
    flavors: {
        type: [
            {
                isValid: { type: Boolean },
                checked: { type: Boolean },
                id: { type: String },
                value: { type: String },
            },
        ],
    },
    sizes: {
        type: [
            {
                isValid: { type: Boolean },
                checked: { type: Boolean },
                id: { type: String },
                value: { type: String },
                price: { type: Number },
                inches: { type: Number },
            },
        ],
    },
});
exports.default = mongoose_1.default.model('Item', exports.itemSchema);
