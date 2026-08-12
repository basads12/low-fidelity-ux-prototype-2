import { Screen } from '../App';

interface WistUDatProps {
  onNavigate: (screen: Screen) => void;
}

type FactBlock = {
  title: string;
  text: string;
};

const facts: FactBlock[] = [
  {
    title: 'De galerie',
    text: 'Galerie De Kunst van Kunst ontvangt bezoekers uitsluitend op afspraak, aan de Geerdinksweg 2 in Hengelo. De reacties van bezoekers kunt u nalezen op onze reviewpagina; iedere reactie is gepubliceerd met naam, woonplaats en datum.'
  },
  {
    title: 'Omruilgarantie',
    text: 'Is uw schilderij vernist? Dan kunt u het tot vijf jaar na aankoop omruilen voor een ander werk, tegen overlegging van de originele factuur.'
  },
  {
    title: 'De cheque is overdraagbaar',
    text: 'U mag uw Kunst-Waardecheque doorgeven aan iemand anders. Diegene plant dan zelf een bezoek met het chequenummer.'
  },
  {
    title: "Foto's",
    text: "Neem foto's van uw interieur mee. Onze adviseurs helpen u dan gerichter bij het kiezen van een werk dat bij u past."
  },
  {
    title: 'Exposeren',
    text: 'De kunstenaars die bij ons exposeren hebben veelal een eigen galerie of exposeren elders in het land.'
  },
  {
    title: 'Uw bezoek plannen',
    text: 'Met uw chequenummer en uw postcode plant u uw bezoek via onze website. U kiest zelf een moment dat u past.'
  },
  {
    title: 'Adviseurs',
    text: 'Onze adviseurs ontvangen u persoonlijk en helpen u bij het maken van uw keuze, in uw eigen tempo.'
  },
  {
    title: 'Certificaat en magazine',
    text: 'Ieder gekozen werk gaat mee naar huis met een certificaat van echtheid en ons eigen magazine.'
  }
];

export function WistUDat({ onNavigate }: WistUDatProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="site-container py-12 md:py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">Wist u dat?</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {facts.map((fact) => (
            <article key={fact.title} className="border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">{fact.title}</h2>
              <p className="mt-3 leading-relaxed [color:var(--text-secondary)]">{fact.text}</p>
            </article>
          ))}
        </div>

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
