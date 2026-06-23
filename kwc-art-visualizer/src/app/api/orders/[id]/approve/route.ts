import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { approveOrderSchema } from "@/lib/validations";
import { withArtDirectionLabel } from "@/lib/artDirection";

type Params = { params: Promise<{ id: string }> };

export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const body = await req.json();
  const parsed = approveOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const existing = await prisma.order.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Order niet gevonden" }, { status: 404 });
  if (existing.status !== "WAITING_FOR_EMPLOYEE_APPROVAL") {
    return NextResponse.json({ error: "Order kan niet worden goedgekeurd" }, { status: 400 });
  }

  const order = await prisma.order.update({
    where: { id },
    data: {
      status: "APPROVED",
      employeeName: parsed.data.employeeName,
      approvedAt: new Date(),
    },
  });

  return NextResponse.json(withArtDirectionLabel(order));
}
