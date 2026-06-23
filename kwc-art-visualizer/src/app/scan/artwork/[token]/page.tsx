import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

type Params = { params: Promise<{ token: string }> };

export default async function ScanArtworkPage({ params }: Params) {
  const { token } = await params;
  const artwork = await prisma.artwork.findUnique({ where: { qrToken: token } });

  if (!artwork) {
    return <main className="p-6">Geen kunstwerk gevonden voor token: {token}</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-xl rounded border border-zinc-200 bg-white p-4">
        <p className="text-sm text-zinc-600">Kunstwerk geladen via QR</p>
        <h1 className="text-2xl font-semibold">{artwork.title}</h1>
        <p className="text-zinc-600">{artwork.artist}</p>
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          width={1200}
          height={800}
          unoptimized
          className="mt-3 h-auto w-full rounded border border-zinc-200"
        />
        <Link href="/" className="mt-4 inline-block rounded bg-zinc-900 px-3 py-2 text-sm text-white">
          Open configurator
        </Link>
      </div>
    </main>
  );
}
