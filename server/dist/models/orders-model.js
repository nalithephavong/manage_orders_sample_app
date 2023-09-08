"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(orderdate, id, customer, total, status, shipdate, trackingnumber) {
        this.orderdate = orderdate;
        this.id = id;
        this.customer = customer;
        this.total = total;
        this.status = status;
        this.shipdate = shipdate;
        this.trackingnumber = trackingnumber;
    }
}
exports.Order = Order;
