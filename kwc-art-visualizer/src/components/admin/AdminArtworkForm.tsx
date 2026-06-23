"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FORMATEN } from "@/lib/constants";

export function AdminArtworkForm() {
  const router = useRouter();
  const [title, setTitle] = useState("Nieuw kunstwerk");
  const [artist, setArtist] = useState("Onbekend");
  const [imageUrl, setImageUrl] = useState("/demo/artwork-placeholder.svg");

  const save = async () => {
    const basePrices = Object.fromEntries(FORMATEN.map((f) => [f.id, 50000]));
    await fetch("/api/artworks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        artist,
        imageUrl,
        defaultType: "staand",
        availableFormats: FORMATEN.map((f) => f.id),
        basePrices,
        inventoryStatus: "BESCHIKBAAR",
        qrToken: crypto.randomUUID().slice(0, 12),
      }),
    });
    router.refresh();
  };

  return (
    <div className="grid gap-2 rounded border border-zinc-200 p-3">
      <input className="rounded border p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="rounded border p-2" value={artist} onChange={(e) => setArtist(e.target.value)} />
      <input className="rounded border p-2" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button className="rounded bg-zinc-900 px-3 py-2 text-sm text-white" onClick={save}>
        Kunstwerk toevoegen
      </button>
    </div>
  );
}
