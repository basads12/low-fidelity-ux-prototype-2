import { Screen } from '../App';

interface ErrorExpiredChequeProps {
  onNavigate: (screen: Screen) => void;
}

export function ErrorExpiredCheque({ onNavigate }: ErrorExpiredChequeProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        EDGE-STATE: VERLOPEN CHEQUE
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-16 text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-card border border-border">
          <div className="text-5xl font-medium" style={{ color: 'var(--text)' }}>⏱</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium mb-6 text-primary">
          Deze cheque is verlopen
        </h1>

        {/* Body */}
        <p className="text-lg mb-8 leading-relaxed text-foreground">
          De geldigheidsduur van uw Kunst-Waardecheque is verstreken. Neem contact met ons op om te bespreken wat de mogelijkheden zijn.
        </p>

        {/* Service Contact */}
        <div className="card bg-card p-6 border border-border mb-8">
          <h2 className="font-medium text-xl mb-4" style={{ color: 'var(--text)' }}>
            Neem contact met ons op
          </h2>
          <p className="mb-6" style={{ color: 'var(--text)' }}>
            We kijken graag met u naar een oplossing.
          </p>
          <div className="space-y-3" style={{ color: 'var(--text)' }}>
            <div className="text-2xl font-medium">
              074-2914857 (ma t/m vr 12:00–16:00)
            </div>
            <div>
              <strong>Galerie De Kunst van Kunst</strong><br />
              Geerdinksweg 2, 7555 DM Hengelo (OV)
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="flex flex-wrap gap-8 justify-center">
          <button
            onClick={() => onNavigate('homepage')}
            className="underline hover:opacity-80 text-lg"
            style={{ color: 'var(--text)' }}
          >
            Terug naar homepage
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className="underline hover:opacity-80 text-lg"
            style={{ color: 'var(--text)' }}
          >
            Veelgestelde vragen
          </button>
        </div>

        <p className="text-xs mt-8 font-mono" style={{ color: 'var(--text-muted)' }}>
          Intern: Besluit nodig: exacte errorcopy<br />
          Intern: Besluit nodig: procedure bij verlopen cheque<br />
          Intern: Besluit nodig: automatische coulance ja/nee
        </p>
      </div>
    </div>
  );
}
