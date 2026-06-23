import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { orderStatusEnum } from "@/lib/validations";
import { withArtDirectionLabel } from "@/lib/artDirection";

type Params = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { artwork: true, customer: true, kwcCheque: true },
  });
  if (!order) return NextResponse.json({ error: "Niet gevonden" }, { status: 404 });
  return NextResponse.json(withArtDirectionLabel(order));
}

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const body = (await req.json()) as { status?: string };
  const status = body.status ? orderStatusEnum.parse(body.status) : undefined;
  const existing = await prisma.order.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Niet gevonden" }, { status: 404 });

  if (status === "WAITING_FOR_EMPLOYEE_APPROVAL" && existing.status !== "DRAFT") {
    return NextResponse.json({ error: "Alleen draft kan naar wacht op goedkeuring." }, { status: 400 });
  }
  if (status === "PAID") {
    return NextResponse.json({ error: "Gebruik /pay endpoint om te betalen." }, { status: 400 });
  }
  if (status === "APPROVED") {
    return NextResponse.json({ error: "Gebruik /approve endpoint om goed te keuren." }, { status: 400 });
  }

  const updated = await prisma.order.update({
    where: { id },
    data: status ? { status } : {},
  });
  return NextResponse.json(withArtDirectionLabel(updated));
}
