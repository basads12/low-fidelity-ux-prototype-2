"use client";

import { useState } from "react";
import { QRScannerModal } from "@/components/qr/QRScannerModal";
import { parseQrPayload } from "@/features/qr/qrParsers";
import { formatMoney } from "@/lib/utils";

type Props = {
  number: string;
  remainingCents: number;
  onValidated: (number: string, remainingCents: number) => void;
};

export function KwcScannerStep({ number, remainingCents, onValidated }: Props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(number);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = async (nr: string) => {
    setLoading(true);
    const response = await fetch("/api/kwc/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: nr }),
    });
    const data = await response.json();
    if (!response.ok || !data.valid) {
      setMessage(data.message ?? "Cheque ongeldig");
      setLoading(false);
      return;
    }
    onValidated(data.number, data.remainingValueCents);
    setMessage(`Geldig: saldo ${formatMoney(data.remainingValueCents)}`);
    setLoading(false);
  };

  return (
    <div className="space-y-3 rounded border border-zinc-200 p-3">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded border border-zinc-300 px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="KWC-TEST-250"
        />
        <button
          className="rounded bg-zinc-900 px-3 py-2 text-sm text-white disabled:opacity-50"
          disabled={loading}
          onClick={() => validate(input)}
        >
          {loading ? "Valideren..." : "Valideer"}
        </button>
        <button className="rounded border border-zinc-300 px-3 py-2 text-sm" onClick={() => setOpen(true)}>
          QR scannen
        </button>
      </div>
      {remainingCents > 0 ? <p className="text-sm">Huidig saldo: {formatMoney(remainingCents)}</p> : null}
      {message ? <p className="text-sm text-zinc-600">{message}</p> : null}
      <QRScannerModal
        open={open}
        onClose={() => setOpen(false)}
        onResult={(payload) => {
          const parsed = parseQrPayload(payload);
          if (parsed.kind === "KWC_CHEQUE") {
            setInput(parsed.number);
            void validate(parsed.number);
          }
        }}
      />
    </div>
  );
}
