"use client";

import { useMemo, useState } from "react";
import { getArtDirectionLabel } from "@/lib/artDirection";

type OrderItem = {
  id: string;
  orderNumber: string;
  status: string;
  artDirectionPreset: string;
  totalDueCents: number;
  kwcAppliedCents: number;
  createdAt: string | Date;
  customer?: { firstName: string; lastName: string } | null;
};

export function AdminOrdersTable({ orders }: { orders: OrderItem[] }) {
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const filtered = useMemo(
    () => orders.filter((o) => statusFilter === "ALL" || o.status === statusFilter),
    [orders, statusFilter]
  );

  return (
    <div className="space-y-3">
      <select
        aria-label="Filter orders op status"
        className="rounded border border-zinc-300 px-2 py-1 text-sm"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="ALL">Alle statussen</option>
        <option value="WAITING_FOR_EMPLOYEE_APPROVAL">Wacht op goedkeuring</option>
        <option value="APPROVED">Goedgekeurd</option>
        <option value="PAID">Betaald</option>
        <option value="CANCELLED">Geannuleerd</option>
      </select>
      <div className="overflow-auto rounded border border-zinc-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50">
            <tr>
              <th className="p-2">Order</th>
              <th className="p-2">Status</th>
              <th className="p-2">Klant</th>
              <th className="p-2">Preset</th>
              <th className="p-2">KWC</th>
              <th className="p-2">Te betalen</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td className="p-3 text-zinc-500" colSpan={6}>
                  Geen orders gevonden voor deze filter.
                </td>
              </tr>
            ) : null}
            {filtered.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-2">{order.orderNumber}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">
                  {order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : "-"}
                </td>
                <td className="p-2">{getArtDirectionLabel(order.artDirectionPreset)}</td>
                <td className="p-2">€ {(order.kwcAppliedCents / 100).toFixed(2)}</td>
                <td className="p-2">€ {(order.totalDueCents / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
