import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createArtworkSchema } from "@/lib/validations";

type Params = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) return NextResponse.json({ error: "Niet gevonden" }, { status: 404 });
  return NextResponse.json(artwork);
}

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const payload = await req.json();
  const parsed = createArtworkSchema.partial().safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const updated = await prisma.artwork.update({ where: { id }, data: parsed.data });
  return NextResponse.json(updated);
}
