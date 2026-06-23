import { prisma } from "@/lib/prisma";
import { AdminArtworkForm } from "@/components/admin/AdminArtworkForm";
import { QRCodeDisplay } from "@/components/qr/QRCodeDisplay";

export default async function AdminArtworksPage() {
  const artworks = await prisma.artwork.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <h1 className="text-2xl font-semibold">Admin · Kunstwerken</h1>
        <AdminArtworkForm />
        {artworks.length === 0 ? (
          <p className="rounded border border-zinc-200 bg-white p-4 text-sm text-zinc-600">
            Nog geen kunstwerken aanwezig. Voeg er hierboven een toe.
          </p>
        ) : null}
        <div className="grid gap-3">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="rounded border border-zinc-200 bg-white p-3">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-semibold">{artwork.title}</p>
                  <p className="text-sm text-zinc-600">{artwork.artist}</p>
                  <p className="text-xs text-zinc-500">Token: {artwork.qrToken}</p>
                </div>
                <QRCodeDisplay
                  value={JSON.stringify({ type: "ARTWORK", token: artwork.qrToken })}
                  label="Kunstwerk QR"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
