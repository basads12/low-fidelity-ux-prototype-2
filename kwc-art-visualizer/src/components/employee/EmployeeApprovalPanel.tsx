"use client";

import { useState } from "react";

type Props = {
  orderId: string;
  status: string;
  onUpdated: () => void;
};

export function EmployeeApprovalPanel({ orderId, status, onUpdated }: Props) {
  const [employeeName, setEmployeeName] = useState("");
  const [message, setMessage] = useState("");

  const approve = async () => {
    const response = await fetch(`/api/orders/${orderId}/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeName }),
    });
    if (!response.ok) {
      setMessage("Goedkeuren mislukt.");
      return;
    }
    setMessage("Order goedgekeurd.");
    onUpdated();
    window.location.reload();
  };

  const cancel = async () => {
    await fetch(`/api/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "CANCELLED" }),
    });
    setMessage("Order geannuleerd.");
    onUpdated();
    window.location.reload();
  };

  const pay = async () => {
    const response = await fetch(`/api/orders/${orderId}/pay`, { method: "POST" });
    if (!response.ok) {
      setMessage("Betaling markeren mislukt.");
      return;
    }
    setMessage("Order gemarkeerd als betaald (mock).");
    onUpdated();
    window.location.reload();
  };

  return (
    <div className="space-y-2 rounded border border-zinc-200 p-3">
      <p className="text-sm text-zinc-600">Status: {status}</p>
      <input
        placeholder="Medewerkernaam"
        className="w-full rounded border border-zinc-300 px-2 py-1 text-sm"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <button className="rounded bg-emerald-600 px-3 py-2 text-sm text-white" onClick={approve}>
          Akkoord geven
        </button>
        <button className="rounded border border-zinc-300 px-3 py-2 text-sm" onClick={cancel}>
          Afwijzen / annuleren
        </button>
        <button className="rounded bg-zinc-900 px-3 py-2 text-sm text-white" onClick={pay}>
          Markeer als betaald
        </button>
      </div>
      {message ? <p className="text-sm text-zinc-600">{message}</p> : null}
    </div>
  );
}
