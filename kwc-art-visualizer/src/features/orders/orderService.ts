import { prisma } from "@/lib/prisma";

export function createOrderNumber() {
  const timestamp = Date.now().toString().slice(-8);
  const rand = Math.floor(Math.random() * 900 + 100);
  return `ORD-${timestamp}-${rand}`;
}

export async function getDashboardStats() {
  const [artworks, orders, waiting, paid] = await Promise.all([
    prisma.artwork.count(),
    prisma.order.count(),
    prisma.order.count({ where: { status: "WAITING_FOR_EMPLOYEE_APPROVAL" } }),
    prisma.order.count({ where: { status: "PAID" } }),
  ]);
  return { artworks, orders, waiting, paid };
}
