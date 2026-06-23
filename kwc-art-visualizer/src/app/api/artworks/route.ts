import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createArtworkSchema } from "@/lib/validations";

export async function GET() {
  const artworks = await prisma.artwork.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(artworks);
}

export async function POST(req: Request) {
  const payload = await req.json();
  const parsed = createArtworkSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const created = await prisma.artwork.create({ data: parsed.data });
  return NextResponse.json(created, { status: 201 });
}
