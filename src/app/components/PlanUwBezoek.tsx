import { Screen } from '../App';

interface PlanUwBezoekProps {
  onNavigate: (screen: Screen) => void;
}

export function PlanUwBezoek({ onNavigate }: PlanUwBezoekProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="site-container py-12 md:py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">Plan uw bezoek</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed [color:var(--text-secondary)]">
          U plant uw bezoek met het chequenummer en uw postcode. Beide vindt u op uw Kunst-Waardecheque. Na herkenning
          van uw cheque kiest u een bezoekmoment dat u past.
        </p>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Wat u kunt verwachten</h2>
          <p className="mt-4 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            Een bezoek duurt gemiddeld 60 tot 90 minuten. U wordt persoonlijk ontvangen en parkeert zonder kosten voor de
            deur.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => onNavigate('cheque-input')} className="btn-primary">
            Plan uw bezoek
          </button>
          <button onClick={() => onNavigate('contact')} className="btn-secondary">
            Contact
          </button>
        </div>

        <p className="mt-6 max-w-4xl text-sm [color:var(--text-secondary)]">
          Lukt het plannen niet? Mail ons via info@dekunstvankunst.nl, wij antwoorden binnen 72 uur.
        </p>
      </div>
    </div>
  );
}
