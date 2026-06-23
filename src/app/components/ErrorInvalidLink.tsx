import { Screen } from '../App';

interface ErrorInvalidLinkProps {
  onNavigate: (screen: Screen) => void;
}

export function ErrorInvalidLink({ onNavigate }: ErrorInvalidLinkProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        EDGE-STATE: ONGELDIGE LINK/QR
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-16 text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-card border border-border">
          <div className="text-5xl font-medium" style={{ color: 'var(--text)' }}>!</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium mb-6 text-primary">
          Deze link is niet geldig
        </h1>

        {/* Body */}
        <p className="text-lg mb-8 leading-relaxed text-foreground">
          De link of QR-code die u heeft gebruikt is niet geldig of niet meer actief. Controleer of u de juiste link heeft gebruikt.
        </p>

        {/* Contact */}
        <div className="card bg-card p-6 border border-border mb-8">
          <h2 className="font-medium text-xl mb-4" style={{ color: 'var(--text)' }}>
            Heeft u uw cheque bij de hand?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text)' }}>
            U kunt uw cheque ook verifiëren door uw chequenummer en postcode in te vullen.
          </p>
          <button
            onClick={() => onNavigate('cheque-input')}
            className="btn-primary"
          >
            Verifieer uw cheque
          </button>
        </div>

        {/* Service Contact */}
        <div className="card bg-card p-6 border border-border mb-8">
          <h3 className="font-medium text-lg mb-3" style={{ color: 'var(--text)' }}>
            Hulp nodig?
          </h3>
          <p className="mb-4" style={{ color: 'var(--text)' }}>
            Neem contact met ons op. We helpen u graag verder.
          </p>
          <div className="space-y-2 mb-4" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Telefoon:</strong> 074-2914857 (ma t/m vr 12:00–16:00)
            </div>
            <div>
              <strong>Galerie De Kunst van Kunst</strong><br />
              Geerdinksweg 2, 7555 DM Hengelo (OV)
            </div>
          </div>
          <p style={{ color: 'var(--text)' }}>
            Bekijk ook onze{' '}
            <button
              onClick={() => onNavigate('faq')}
              className="underline hover:opacity-80"
              style={{ color: 'var(--text)' }}
            >
              veelgestelde vragen
            </button>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <button
            onClick={() => onNavigate('homepage')}
            className="underline hover:opacity-80 text-lg"
            style={{ color: 'var(--text)' }}
          >
            Terug naar homepage
          </button>
        </div>

        <p className="text-xs mt-8 font-mono" style={{ color: 'var(--text-muted)' }}>
          Intern: Besluit nodig: exacte errorcopy<br />
          Intern: Besluit nodig: procedure bij ongeldige link
        </p>
      </div>
    </div>
  );
}
