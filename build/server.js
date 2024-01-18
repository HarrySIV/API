"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const itemsRoutes = require('./routes/items-routes');
const ordersRoutes = require('./routes/orders-routes');
const dealsRoutes = require('./routes/deals-routes');
const server = (0, express_1.default)();
server.use(express_1.default.json());
// sets headers for API
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});
//sets routes for menu and orders
server.use('/api/menu', itemsRoutes);
server.use('/api/orders', ordersRoutes);
server.use('/api/deals', dealsRoutes);
//connects to mongodb
mongoose_1.default
    .connect(`${config_1.config.dbURL}`)
    .then(() => server.listen(config_1.config.server.port))
    .catch((error) => console.log(error.message));
