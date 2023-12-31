"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = require("../controllers/orders-controller");
const router = (0, express_1.Router)();
router.post('/', orders_controller_1.createOrder);
router.get('/', orders_controller_1.getOrders);
router.patch('/:id', orders_controller_1.updateOrder);
router.delete('/:id', orders_controller_1.deleteOrder);
exports.default = router;
