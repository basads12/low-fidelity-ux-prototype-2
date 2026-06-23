import { Screen } from "../App";

interface KunstVisualizerProps {
  onNavigate: (screen: Screen) => void;
}

const VISUALIZER_EMBED_URL = "https://app-five-sigma-70.vercel.app";

export function KunstVisualizer({ onNavigate }: KunstVisualizerProps) {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="site-container w-full space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wide [color:var(--brand-gold)]">Nieuw</p>
          <h1 className="text-3xl font-semibold text-primary md:text-4xl">Kunst Visualizer</h1>
          <p className="max-w-3xl text-base leading-relaxed [color:var(--text-secondary)] md:text-lg">
            Bekijk direct hoe een schilderij op uw eigen wand uitkomt. Kies formaat, lijst en TWINS-opstelling en deel
            uw voorkeursweergave met de galerie.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => onNavigate("homepage")} className="btn-secondary min-h-0 px-4 py-2 text-sm">
            Terug naar home
          </button>
          <a href={VISUALIZER_EMBED_URL} target="_blank" rel="noreferrer" className="btn-primary min-h-0 px-4 py-2 text-sm">
            Open in nieuw venster
          </a>
        </div>

        <section className="rounded-lg border border-border bg-card p-2 shadow-sm md:p-3">
          <iframe
            src={VISUALIZER_EMBED_URL}
            title="De Kunst van Kunst visualizer"
            className="h-[80vh] min-h-[680px] w-full rounded-md border-0"
            loading="lazy"
          />
        </section>
      </div>
    </main>
  );
}
