import { useState } from 'react';
import { Screen } from '../App';

interface FAQProps {
  onNavigate: (screen: Screen) => void;
}

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Is de Kunst-Waardecheque echt?',
    answer:
      'Ja. De cheque wordt verstrekt door het bedrijf dat op uw cheque staat vermeld en is uitsluitend te gebruiken bij Galerie De Kunst van Kunst in Hengelo. U kunt uw cheque controleren door uw bezoek te plannen met chequenummer en postcode; uw cheque wordt dan herkend voordat u een bezoekmoment kiest.'
  },
  {
    question: 'Zijn er kosten verbonden aan het bezoek?',
    answer:
      'Nee. In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen. Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend; een eventuele meerprijs lichten wij in de galerie rustig toe.'
  },
  {
    question: 'Moet ik iets kiezen?',
    answer: 'Nee, u beslist zelf. Onze adviseurs geven informatie wanneer dat van pas komt en werken in uw tempo.'
  },
  { question: 'Hoe lang duurt een bezoek?', answer: 'Gemiddeld 60 tot 90 minuten.' },
  {
    question: 'Met hoeveel personen kan ik komen?',
    answer: 'Maximaal twee bezoekers per cheque. Kinderen zijn welkom vanaf 12 jaar, als tweede bezoeker.'
  },
  {
    question: 'Hoe lang is de cheque geldig?',
    answer: 'Drie maanden vanaf de uitgiftedatum. De datum staat op uw cheque.'
  },
  {
    question: 'Kan ik de cheque doorgeven?',
    answer: 'Ja, de cheque is overdraagbaar. Degene die hem ontvangt, plant zelf een bezoek met het chequenummer.'
  },
  {
    question: 'Wat neem ik mee naar de galerie?',
    answer:
      "Uw Kunst-Waardecheque. En als tip: foto's van uw interieur, zodat onze adviseurs u gerichter kunnen helpen."
  },
  {
    question: 'Krijg ik geld terug als mijn schilderij minder kost dan de chequewaarde?',
    answer: 'Nee, de cheque is niet inwisselbaar voor geld en er wordt geen geld geretourneerd.'
  },
  {
    question: 'Geldt de cheque voor lijsten of vernis?',
    answer: 'Nee. Lijsten en vernis zijn aanvullende diensten en worden apart toegelicht en afgerekend.'
  },
  {
    question: 'Kan ik mijn schilderij laten bezorgen?',
    answer: 'Uitgangspunt is dat u het werk direct meeneemt. Bezorging is mogelijk als aparte dienst; dat regelt u in de galerie.'
  },
  {
    question: 'Wat houdt de omruilgarantie in?',
    answer:
      'Is uw schilderij vernist, dan kunt u het tot vijf jaar na aankoop omruilen voor een ander werk, tegen overlegging van de originele factuur.'
  },
  {
    question: 'Bij wie kan ik terecht met vragen over de verstrekking van de cheque?',
    answer:
      'Bij het bedrijf dat op uw cheque staat vermeld. Voor vragen over uw bezoek mailt u ons via info@dekunstvankunst.nl; wij antwoorden binnen 72 uur.'
  },
  {
    question: 'Waar vind ik de galerie en kan ik parkeren?',
    answer: 'Geerdinksweg 2 in Hengelo (Ov). U parkeert zonder kosten voor de deur.'
  }
];

export function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="site-container py-12 md:py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">Veelgestelde vragen</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed [color:var(--text-secondary)]">
          Antwoorden op praktische vragen over de Kunst-Waardecheque en uw bezoek aan de galerie.
        </p>

        <div className="mt-10 overflow-hidden border border-border bg-card">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{item.question}</span>
                  <span aria-hidden="true" className="text-xl [color:var(--text-secondary)]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 leading-relaxed [color:var(--text-secondary)] md:px-6">{item.answer}</p>}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => onNavigate('plan-uw-bezoek')} className="btn-primary">
            Plan uw bezoek
          </button>
          <button onClick={() => onNavigate('contact')} className="btn-secondary">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
