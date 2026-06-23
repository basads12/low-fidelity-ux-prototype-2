import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withArtDirectionLabel } from "@/lib/artDirection";

type Params = { params: Promise<{ id: string }> };

export async function POST(_: Request, { params }: Params) {
  const { id } = await params;
  const existing = await prisma.order.findUnique({ where: { id }, include: { kwcCheque: true } });
  if (!existing) return NextResponse.json({ error: "Order niet gevonden" }, { status: 404 });
  if (existing.status === "PAID") {
    return NextResponse.json({ error: "Order is al betaald" }, { status: 400 });
  }
  if (existing.status !== "APPROVED") {
    return NextResponse.json({ error: "Order moet eerst goedgekeurd zijn" }, { status: 400 });
  }

  const result = await prisma.$transaction(async (tx) => {
    if (existing.kwcChequeId && existing.kwcAppliedCents > 0) {
      const cheque = await tx.kwcCheque.findUnique({ where: { id: existing.kwcChequeId } });
      if (cheque) {
        const remaining = Math.max(0, cheque.remainingValueCents - existing.kwcAppliedCents);
        await tx.kwcCheque.update({
          where: { id: cheque.id },
          data: {
            remainingValueCents: remaining,
            status: remaining === 0 ? "USED" : "PARTIALLY_USED",
          },
        });
      }
    }

    return tx.order.update({
      where: { id },
      data: {
        status: "PAID",
        paidAt: new Date(),
      },
    });
  });

  return NextResponse.json(withArtDirectionLabel(result));
}
