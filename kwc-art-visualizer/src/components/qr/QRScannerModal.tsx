"use client";

import { BrowserMultiFormatReader } from "@zxing/browser";
import { useEffect, useRef, useState } from "react";
import { parseQrPayload } from "@/features/qr/qrParsers";

type Props = {
  open: boolean;
  onClose: () => void;
  onResult: (raw: string) => void;
};

export function QRScannerModal({ open, onClose, onResult }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);
  const [manual, setManual] = useState("");
  const [manualError, setManualError] = useState("");

  useEffect(() => {
    if (!open || !videoRef.current) return;
    const reader = new BrowserMultiFormatReader();
    readerRef.current = reader;
    const videoEl = videoRef.current;
    let active = true;
    reader.decodeFromVideoDevice(undefined, videoEl, (result) => {
      if (!active || !result) return;
      const text = result.getText();
      onResult(text);
      onClose();
    });
    return () => {
      active = false;
      const mediaStream = videoEl.srcObject as MediaStream | null;
      mediaStream?.getTracks().forEach((track) => track.stop());
    };
  }, [open, onClose, onResult]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-4">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-4">
        <h3 className="mb-3 text-lg font-semibold">QR scannen</h3>
        <video ref={videoRef} className="mb-3 h-56 w-full rounded bg-zinc-200" />
        <p className="mb-2 text-sm text-zinc-600">Of plak handmatig een payload:</p>
        <textarea
          aria-label="Handmatige QR payload"
          className="mb-3 w-full rounded border border-zinc-300 p-2 text-sm"
          value={manual}
          onChange={(e) => setManual(e.target.value)}
        />
        {manualError ? <p className="mb-2 text-xs text-red-600">{manualError}</p> : null}
        <div className="flex gap-2">
          <button
            className="rounded bg-zinc-900 px-3 py-2 text-sm text-white"
            onClick={() => {
              const parsed = parseQrPayload(manual.trim());
              if (parsed.kind !== "UNKNOWN") {
                setManualError("");
                onResult(manual.trim());
                onClose();
              } else {
                setManualError("Handmatige tekst is geen geldig QR-formaat.");
              }
            }}
          >
            Gebruik payload
          </button>
          <button className="rounded border border-zinc-300 px-3 py-2 text-sm" onClick={onClose}>
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}
