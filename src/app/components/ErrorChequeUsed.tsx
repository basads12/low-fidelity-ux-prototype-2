import { Screen } from '../App';

interface ErrorChequeUsedProps {
  onNavigate: (screen: Screen) => void;
}

export function ErrorChequeUsed({ onNavigate }: ErrorChequeUsedProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        EDGE-STATE: CHEQUE AL GEBRUIKT
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-16 text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-card border border-border">
          <div className="text-5xl font-medium" style={{ color: 'var(--text)' }}>✓</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium mb-6 text-primary">
          Deze cheque is al gebruikt
        </h1>

        {/* Body */}
        <p className="text-lg mb-8 leading-relaxed text-foreground">
          Deze Kunst-Waardecheque is al verzilverd. Elke cheque kan slechts eenmaal worden gebruikt.
        </p>

        {/* Info Block */}
        <div className="card bg-card p-6 border border-border mb-8 text-left">
          <h2 className="font-medium text-xl mb-4" style={{ color: 'var(--text)' }}>Klopt dit niet?</h2>
          <p className="mb-4" style={{ color: 'var(--text)' }}>
            Als u denkt dat dit een vergissing is, neem dan contact met ons op.
          </p>
          <div className="space-y-3" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Telefoon:</strong> 074-2914857 (ma t/m vr 12:00–16:00)
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
          Intern: Besluit nodig: procedure bij al gebruikte cheque<br />
          Intern: Besluit nodig: verificatie vóór tonen van deze melding
        </p>
      </div>
    </div>
  );
}
