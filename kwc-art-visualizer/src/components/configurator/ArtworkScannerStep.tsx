"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { QRScannerModal } from "@/components/qr/QRScannerModal";
import { parseQrPayload } from "@/features/qr/qrParsers";

type ArtworkItem = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  defaultType: string;
  availableFormats: string[];
  basePrices: Record<string, number>;
};

type Props = {
  onArtworkLoaded: (artwork: ArtworkItem) => void;
};

export function ArtworkScannerStep({ onArtworkLoaded }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [artworks, setArtworks] = useState<ArtworkItem[]>([]);
  const [loadingArtworks, setLoadingArtworks] = useState(true);

  useEffect(() => {
    void fetch("/api/artworks")
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        setArtworks(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoadingArtworks(false));
  }, []);

  const handlePayload = async (payload: string) => {
    const parsed = parseQrPayload(payload);
    if (parsed.kind !== "ARTWORK") {
      setMessage("Dit is geen geldig kunstwerk-QR.");
      return;
    }
    const response = await fetch("/api/qr/artwork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: parsed.token }),
    });
    if (!response.ok) {
      setMessage("Kunstwerk niet gevonden.");
      return;
    }
    const data = await response.json();
    onArtworkLoaded(data.artwork);
    setMessage(`Geladen: ${data.artwork.title} (${data.artwork.artist})`);
  };

  return (
    <div className="space-y-3 rounded border border-zinc-200 p-3">
      <button type="button" className="rounded bg-zinc-900 px-3 py-2 text-sm text-white" onClick={() => setOpen(true)}>
        Kunstwerk QR scannen
      </button>
      {message ? <p className="text-sm text-zinc-600">{message}</p> : null}
      <QRScannerModal open={open} onClose={() => setOpen(false)} onResult={handlePayload} />
      <div className="border-t border-zinc-200 pt-3">
        <p className="mb-2 text-sm font-medium text-zinc-700">Of kies handmatig uit de collectie</p>
        {loadingArtworks ? <p className="text-sm text-zinc-500">Collectie laden...</p> : null}
        {!loadingArtworks && artworks.length === 0 ? (
          <p className="text-sm text-zinc-500">Nog geen kunstwerken beschikbaar.</p>
        ) : null}
        <div className="grid gap-2 sm:grid-cols-2">
          {artworks.map((artwork) => (
            <button
              key={artwork.id}
              type="button"
              className="flex items-center gap-2 rounded border border-zinc-200 p-2 text-left hover:border-zinc-400"
              onClick={() => {
                onArtworkLoaded(artwork);
                setMessage(`Gekozen: ${artwork.title} (${artwork.artist})`);
              }}
            >
              <Image src={artwork.imageUrl} alt={artwork.title} width={56} height={56} className="h-14 w-14 rounded object-cover" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-zinc-800">{artwork.title}</span>
                <span className="block truncate text-xs text-zinc-500">{artwork.artist}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
