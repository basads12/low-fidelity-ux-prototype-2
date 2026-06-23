import Link from "next/link";
import { getDashboardStats } from "@/features/orders/orderService";

export default async function AdminPage() {
  const stats = await getDashboardStats();

  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <h1 className="text-3xl font-semibold">Admin dashboard</h1>
        <div className="grid gap-3 sm:grid-cols-4">
          <Card label="Kunstwerken" value={stats.artworks} />
          <Card label="Orders" value={stats.orders} />
          <Card label="Wacht op akkoord" value={stats.waiting} />
          <Card label="Betaald" value={stats.paid} />
        </div>
        <div className="flex gap-2">
          <Link href="/admin/artworks" className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm">Kunstwerken beheren</Link>
          <Link href="/admin/orders" className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm">Orders bekijken</Link>
          <Link href="/" className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm">Terug naar visualizer</Link>
        </div>
        <p className="text-xs text-zinc-500">
          MVP zonder login. Productieversie vereist rollen/rechten en authenticatie.
        </p>
      </div>
    </main>
  );
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-zinc-200 bg-white p-3">
      <p className="text-sm text-zinc-600">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
