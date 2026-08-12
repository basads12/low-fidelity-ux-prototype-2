import { Screen } from '../App';

interface ContactProps {
  onNavigate: (screen: Screen) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="site-container py-12 md:py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">Contact</h1>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Openingstijden</h2>
          <p className="mt-4 [color:var(--text-secondary)]">Uitsluitend op afspraak geopend.</p>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Adres</h2>
          <ul className="mt-4 space-y-1 [color:var(--text-secondary)]">
            <li>Galerie De Kunst van Kunst</li>
            <li>Geerdinksweg 2</li>
            <li>Hengelo (Ov)</li>
            <li>074-2914857</li>
            <li>info@dekunstvankunst.nl</li>
          </ul>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Goed om te weten voor uw bezoek</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 [color:var(--text-secondary)]">
            <li>Maximaal twee bezoekers per cheque.</li>
            <li>Toegang op vertoon van uw Kunst-Waardecheque.</li>
            <li>
              Kinderen zijn welkom vanaf 12 jaar, als tweede bezoeker. Jongere kinderen en baby&apos;s kunnen wij niet
              ontvangen.
            </li>
            <li>Bij aankoop van een vernist schilderij geldt vijf jaar omruilgarantie. Er wordt geen geld geretourneerd.</li>
            <li>Huisdieren kunnen wij niet toelaten.</li>
            <li>Fotograferen en filmen is in de galerie niet toegestaan.</li>
          </ul>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Vragen</h2>
          <p className="mt-4 [color:var(--text-secondary)]">
            Voor vragen mailt u naar info@dekunstvankunst.nl. Wij antwoorden binnen 72 uur.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => onNavigate('plan-uw-bezoek')} className="btn-primary">
            Plan uw bezoek
          </button>
          <button onClick={() => onNavigate('faq')} className="btn-secondary">
            Veelgestelde vragen
          </button>
        </div>
      </div>
    </div>
  );
}
