import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { qrArtworkSchema } from "@/lib/validations";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = qrArtworkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const artwork = await prisma.artwork.findUnique({ where: { qrToken: parsed.data.token } });
  if (!artwork) return NextResponse.json({ error: "Kunstwerk niet gevonden" }, { status: 404 });

  return NextResponse.json({ artwork });
}
