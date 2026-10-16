// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
export async function loadOrders() {
    const orders = await findAllOrders();
    return orders;
}
export function myOrders(orders) {
    return orders.filter(
        (order) => order.city === "Giza" && order.status === "pending"
    );
}
export function summarize(orders) {
    return orders.reduce((total, order) => total + order.quantity, 0);
}
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `Missing order: ${id}`;
  }
}
export function report(orders) {
  return {
    count: orders.length,
    totalQuantity: summarize(orders),
    names: orders.map((order) => order.student)
  };
}
export function toJsonLines(orders) {
  const items = orders.map((order) => ({
    item: order.item,
    quantity: order.quantity
  }));

  return JSON.stringify(items);
}