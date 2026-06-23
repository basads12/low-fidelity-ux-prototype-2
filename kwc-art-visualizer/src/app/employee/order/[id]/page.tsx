import { prisma } from "@/lib/prisma";
import { EmployeeApprovalPanel } from "@/components/employee/EmployeeApprovalPanel";
import { formatMoney } from "@/lib/utils";
import { getArtDirectionLabel } from "@/lib/artDirection";
import Image from "next/image";

type Params = { params: Promise<{ id: string }> };

export default async function EmployeeOrderPage({ params }: Params) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { artwork: true, customer: true, kwcCheque: true },
  });

  if (!order) {
    return <main className="p-6">Order niet gevonden.</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        <h1 className="text-2xl font-semibold">Medewerkergoedkeuring</h1>
        <div className="rounded border border-zinc-200 bg-white p-4 text-sm">
          <p className="font-semibold">{order.orderNumber}</p>
          <p>Kunstwerk: {order.artwork.title}</p>
          <p>Formaat: {order.formatId}</p>
          <p>Lijst: {order.frameOptionId}</p>
          <p>Art direction: {getArtDirectionLabel(order.artDirectionPreset)}</p>
          <p>KWC: {order.kwcCheque?.number ?? "Geen"}</p>
          <p>Totaal vóór KWC: {formatMoney(order.totalBeforeKwcCents)}</p>
          <p>Te betalen: {formatMoney(order.totalDueCents)}</p>
          {order.customer ? (
            <p>Klant: {order.customer.firstName} {order.customer.lastName} · {order.customer.email}</p>
          ) : null}
          {order.previewImageDataUrl ? (
            <Image
              src={order.previewImageDataUrl}
              alt="Preview"
              width={1200}
              height={700}
              unoptimized
              className="mt-3 h-auto w-full rounded border border-zinc-200"
            />
          ) : null}
        </div>
        <EmployeeApprovalPanel orderId={order.id} status={order.status} onUpdated={() => {}} />
        <p className="text-xs text-zinc-500">
          Betaling is in deze MVP een mock via &quot;Markeer als betaald&quot;.
        </p>
      </div>
    </main>
  );
}
