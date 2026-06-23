import { prisma } from "@/lib/prisma";
import { AdminOrdersTable } from "@/components/admin/AdminOrdersTable";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { customer: true },
  });

  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <h1 className="text-2xl font-semibold">Admin · Orders</h1>
        {orders.length === 0 ? (
          <p className="rounded border border-zinc-200 bg-white p-4 text-sm text-zinc-600">
            Er zijn nog geen orders geplaatst.
          </p>
        ) : null}
        <AdminOrdersTable orders={orders} />
      </div>
    </main>
  );
}
