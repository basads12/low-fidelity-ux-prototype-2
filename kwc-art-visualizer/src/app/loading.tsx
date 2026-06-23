export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-5xl animate-pulse rounded border border-zinc-200 bg-white p-6">
        <div className="mb-4 h-8 w-64 rounded bg-zinc-200" />
        <div className="h-80 rounded bg-zinc-100" />
      </div>
    </main>
  );
}
