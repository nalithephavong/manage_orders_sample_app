"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createData(orderdate, id, customer, total, status, shipdate, trackingnumber) {
    return {
        orderdate,
        id,
        customer,
        total,
        status,
        shipdate,
        trackingnumber
    };
}
const records = [
    createData("2022-07-31", "20000001", "Sweet Tooth Fairy", "650.79", "Ready To Ship", "", ""),
    createData("2022-08-05", "20000002", "Peach Cobbler", "1020.64", "In Process", "", ""),
    createData("2022-08-11", "20000003", "Hansel & Gretel Shop", "53.99", "New", "", ""),
    createData("2022-08-20", "20000004", "The Candy Shop", "2250.49", "Shipped", "2022-08-22", "9300000001"),
    createData("2022-08-25", "20000005", "Fancy Flour", "770.75", "Canceled", "", ""),
    createData("2022-09-01", "20000006", "Pie Empire", "650.79", "On Hold", "", ""),
    createData("2022-09-09", "20000007", "Dream Cakes", "650.79", "Ready To Ship", "", ""),
    createData("2022-09-15", "20000008", "Sugar Bowl", "945.22", "In Process", "", ""),
    createData("2022-09-18", "20000009", "Sweet Tooth Fairy", "823.00", "Canceled", "", ""),
    createData("2022-09-27", "20000010", "Snow Time", "2436.55", "New", "", ""),
];
exports.default = records;
