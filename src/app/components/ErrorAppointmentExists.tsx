import { Screen } from '../App';

interface ErrorAppointmentExistsProps {
  onNavigate: (screen: Screen) => void;
}

export function ErrorAppointmentExists({ onNavigate }: ErrorAppointmentExistsProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        EDGE-STATE: AFSPRAAK AL GEPLAND
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-16 text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-card border border-border">
          <div className="text-5xl font-medium" style={{ color: 'var(--text)' }}>📅</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium mb-6 text-primary">
          U heeft al een afspraak gepland
        </h1>

        {/* Body */}
        <p className="text-lg mb-8 leading-relaxed text-foreground">
          Voor deze Kunst-Waardecheque is al een afspraak ingepland. U heeft een bevestigingsmail ontvangen met de details.
        </p>

        {/* Appointment Details Placeholder */}
        <div className="card bg-card p-6 border border-border mb-8 text-left">
          <h2 className="font-medium text-xl mb-4" style={{ color: 'var(--text)' }}>Uw afspraak</h2>
          <div className="space-y-3" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Dag en tijd:</strong><br />
              [Datum en tijd uit systeem]
            </div>
            <div>
              <strong>Locatie:</strong><br />
              Galerie De Kunst van Kunst<br />
              Geerdinksweg 2, 7555 DM Hengelo (OV)
            </div>
          </div>
          <p className="text-xs mt-4 font-mono" style={{ color: 'var(--text-muted)' }}>
            Intern: afspraakdetails uit database tonen
          </p>
        </div>

        {/* Contact for Changes */}
        <div className="card bg-card p-6 border border-border mb-8">
          <h3 className="font-medium text-lg mb-3" style={{ color: 'var(--text)' }}>Afspraak wijzigen?</h3>
          <p className="mb-4" style={{ color: 'var(--text)' }}>
            Wilt u uw afspraak wijzigen? Neem contact met ons op.
          </p>
          <div className="space-y-2" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Telefoon:</strong> 074-2914857 (ma t/m vr 12:00–16:00)
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
          Intern: Besluit nodig: afspraakwijziging online ja/nee<br />
          Intern: Besluit nodig: afspraakdetails uit database tonen ja/nee
        </p>
      </div>
    </div>
  );
}
