import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createOrderSchema } from "@/lib/validations";
import { createOrderNumber } from "@/features/orders/orderService";
import { FORMATEN, FRAME_OPTIONS } from "@/lib/constants";
import { withArtDirectionLabel } from "@/lib/artDirection";

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { customer: true, artwork: true, kwcCheque: true },
  });
  return NextResponse.json(orders.map((order) => withArtDirectionLabel(order)));
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const format = FORMATEN.find((f) => f.id === data.formatId);
  const frame = FRAME_OPTIONS.find((f) => f.id === data.frameOptionId);
  if (!format || !frame) return NextResponse.json({ error: "Config ongeldig" }, { status: 400 });

  let customerId: string | undefined;
  if (data.customer) {
    const customer = await prisma.customer.create({ data: data.customer });
    customerId = customer.id;
  }

  const kwc = data.kwcNumber
    ? await prisma.kwcCheque.findUnique({ where: { number: data.kwcNumber } })
    : null;

  const order = await prisma.order.create({
    data: {
      orderNumber: createOrderNumber(),
      artworkId: data.artworkId,
      customerId,
      type: data.type,
      formatId: data.formatId,
      widthCm: format.widthCm,
      heightCm: format.heightCm,
      frameOptionId: data.frameOptionId,
      frameOuterColor: frame.outerColor,
      frameInnerColor: frame.innerColor,
      quantity: data.quantity,
      basePriceCents: data.pricing.basePriceCents,
      framePriceCents: data.pricing.framePriceCents,
      totalBeforeKwcCents: data.pricing.totalBeforeKwcCents,
      kwcChequeId: kwc?.id,
      kwcAppliedCents: data.pricing.kwcAppliedCents,
      totalDueCents: data.pricing.totalDueCents,
      previewImageDataUrl: data.previewImageDataUrl,
      wallSetting: data.wallSetting,
      wallColor: data.wallColor,
      artDirectionPreset: data.artDirectionPreset,
      status: "DRAFT",
    },
  });

  return NextResponse.json({
    order: withArtDirectionLabel(order),
    employeeLink: `/employee/order/${order.id}`,
  });
}
