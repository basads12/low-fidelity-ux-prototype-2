import Link from "next/link";
import { ConfiguratorWizard } from "@/components/configurator/ConfiguratorWizard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 p-6 text-zinc-900">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold">KWC Art Visualizer</h1>
            <p className="text-sm text-zinc-600">Galerie MVP met visualizer, QR en orderflow.</p>
          </div>
          <nav className="flex gap-2 text-sm">
            <Link href="/admin" className="rounded border border-zinc-300 px-3 py-2 hover:bg-white">Admin</Link>
            <Link href="/embed" className="rounded border border-zinc-300 px-3 py-2 hover:bg-white">Embed</Link>
          </nav>
        </header>
        <ConfiguratorWizard />
      </div>
    </main>
  );
}
