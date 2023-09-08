"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = exports.deleteOrder = exports.createOrder = exports.getOrders = void 0;
const orders_model_1 = require("../models/orders-model");
const orders_1 = __importDefault(require("../data/orders"));
// initialize with base data, edit dataset under data/orders.ts
let ORDERS = orders_1.default;
// #region MAIN FUNCTIONS
const getOrders = (req, res, next) => {
    return res.status(200).json({
        "orders": ORDERS
    });
};
exports.getOrders = getOrders;
const createOrder = (req, res, next) => {
    if (!req.body.customer) {
        return res.status(400).json({
            message: 'Invalid customer.'
        });
    }
    if (!req.body.total && isNaN(req.body.total)) {
        return res.status(400).json({
            message: 'Invalid total.'
        });
    }
    const orderDate = (new Date()).toISOString().split('T')[0];
    const previousOrder = ORDERS.reduce((prev, current) => {
        return (prev.id > current.id) ? prev : current;
    });
    const nextOrderNumber = (parseInt(previousOrder.id) + 1).toString();
    const newOrder = new orders_model_1.Order(orderDate, nextOrderNumber, req.body.customer, req.body.total, "New", "", "");
    ORDERS.push(newOrder);
    return res.status(201).json({
        message: `Order ${nextOrderNumber} created.`,
        order: newOrder
    });
};
exports.createOrder = createOrder;
const deleteOrder = (req, res, next) => {
    const id = req.params.id;
    const newOrders = ORDERS.filter((order) => {
        return order.id !== id;
    });
    ORDERS = newOrders;
    res.status(200).json({
        message: `Order ${id} deleted.`
    });
};
exports.deleteOrder = deleteOrder;
const updateOrder = (req, res, next) => {
    const id = req.params.id;
    const orderIdx = ORDERS.findIndex((order) => {
        return order.id === id;
    });
    const status = req.body.status;
    ORDERS[orderIdx].status = status;
    if (status === "Shipped") {
        ORDERS[orderIdx].shipdate = (new Date()).toISOString().split('T')[0];
        ORDERS[orderIdx].trackingnumber = String(Math.floor(Math.random() * (10000000000 - 9000000000 + 1) + 9000000000));
    }
    return res.status(200).json({
        message: `Order ${id} updated.`
    });
};
exports.updateOrder = updateOrder;
// #endregion
