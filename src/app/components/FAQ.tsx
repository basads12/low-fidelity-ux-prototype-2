import { useState, useEffect } from 'react';
import { Screen } from '../App';
import logo from '../../imports/logo_sinds_2005.png';

interface FAQProps {
  onNavigate: (screen: Screen) => void;
}

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b" style={{ borderColor: 'var(--border)' }}>
      <button
        onClick={onToggle}
        className="w-full py-4 px-4 md:py-6 md:px-6 flex justify-between items-start gap-3 md:gap-4 text-left hover:opacity-80 focus:outline-none transition-opacity"
        style={{ backgroundColor: isOpen ? 'var(--muted)' : 'transparent' }}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <h3 className="font-medium text-base md:text-lg" style={{ color: 'var(--text)' }}>{question}</h3>
        <span className="text-xl md:text-2xl flex-shrink-0 mt-[-2px] md:mt-[-4px]" style={{ color: 'var(--text-muted)' }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 md:px-6 md:pb-6 leading-relaxed text-sm md:text-base" style={{ color: 'var(--text)' }}>
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

export function FAQ({ onNavigate }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['wat-is']));
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute('data-section') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'over-cheque', title: 'Over de Kunst-Waardecheque' },
    { id: 'afspraak', title: 'Afspraak plannen' },
    { id: 'bezoek', title: 'Bezoek aan de galerie' },
    { id: 'extras', title: 'Eventuele extras' },
    { id: 'na-bezoek', title: 'Na uw bezoek' },
    { id: 'voorwaarden', title: 'Voorwaarden en bijzondere situaties' },
    { id: 'hulp', title: 'Hulp en contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="site-container-wide py-6">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Galerie De Kunst van Kunst - Sinds 2005" className="h-12 md:h-14" />
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => onNavigate('personal-welcome')} className="hover:opacity-80" style={{ color: 'var(--text)' }}>Uw bezoek</button>
              <button onClick={() => onNavigate('faq')} className="font-medium hover:opacity-80" style={{ color: 'var(--text)' }}>Veelgestelde vragen</button>
              <button onClick={() => onNavigate('contact')} className="hover:opacity-80" style={{ color: 'var(--text)' }}>Contact</button>
              <button onClick={() => onNavigate('cheque-input')} className="btn-primary">
                Verifieer uw cheque
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-card py-12 md:py-16">
        <div className="site-container-wide">
          <div className="text-xs uppercase tracking-wide mb-4 font-mono" style={{ color: 'var(--accent)' }}>
            VEELGESTELDE VRAGEN
          </div>

          <h1 className="mb-6 max-w-3xl text-3xl font-medium text-primary md:text-4xl lg:text-5xl">
            Antwoorden over uw Kunst-Waardecheque en uw bezoek
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed" style={{ color: 'var(--text)' }}>
            Hier vindt u praktische antwoorden over de Kunst-Waardecheque, het plannen van uw afspraak en het bezoek aan Galerie De Kunst van Kunst in Hengelo.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
            <button
              onClick={() => onNavigate('cheque-input')}
              className="btn-primary"
            >
              Verifieer uw cheque
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="underline hover:opacity-80 px-3 py-3 md:px-4 md:py-4 text-base"
              style={{ color: 'var(--text)' }}
            >
              Neem contact op
            </button>
          </div>

          {/* Practical Info Card */}
          <div className="card max-w-2xl border border-border p-6" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <div className="grid sm:grid-cols-3 gap-4" style={{ color: 'var(--text)' }}>
              <div>
                <p className="font-medium mb-1">Bezoek</p>
                <p className="text-sm">Uitsluitend op afspraak</p>
              </div>
              <div>
                <p className="font-medium mb-1">Locatie</p>
                <p className="text-sm">Geerdinksweg 2, 7555 DM Hengelo (OV)</p>
              </div>
              <div>
                <p className="font-medium mb-1">Duur</p>
                <p className="text-sm">Gemiddeld 60 tot 90 minuten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content with Navigation */}
      <div className="site-container-wide py-12">

        {/* Horizontal Pills Navigation - Mobile/Tablet */}
        <div className="lg:hidden mb-8 -mx-4 sm:mx-0">
          <div className="overflow-x-auto px-4 sm:px-0">
            <div className="flex gap-2 min-w-max pb-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4 py-2 whitespace-nowrap text-sm transition-colors"
                  style={{
                    backgroundColor: activeSection === section.id ? 'var(--brand-ink)' : 'var(--muted)',
                    color: activeSection === section.id ? 'white' : 'var(--text)',
                    fontWeight: activeSection === section.id ? 600 : 400,
                    borderRadius: '8px'
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-12">

          {/* Sticky Navigation - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
                NAVIGATIE
              </div>
              <nav className="space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-4 py-3 transition-colors"
                    style={{
                      backgroundColor: activeSection === section.id ? 'var(--brand-ink)' : 'transparent',
                      color: activeSection === section.id ? 'white' : 'var(--text)',
                      fontWeight: activeSection === section.id ? 600 : 400,
                      borderRadius: '8px'
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* FAQ Content */}
          <div className="flex-1 lg:max-w-3xl w-full">

            {/* Section 1: Over de Kunst-Waardecheque */}
            <section id="over-cheque" data-section="over-cheque" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Over de Kunst-Waardecheque</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Wat is een Kunst-Waardecheque?"
                  answer="Met de Kunst-Waardecheque kiest u in onze galerie een origineel, handgeschilderd en gesigneerd werk. De cheque is u verstrekt door het bedrijf dat op uw cheque staat vermeld, als dank voor uw vertrouwen in dat bedrijf. Bij elk gekozen werk hoort een certificaat van echtheid."
                  isOpen={openItems.has('wat-is')}
                  onToggle={() => toggleItem('wat-is')}
                />
                <AccordionItem
                  question="Waarom heb ik deze cheque ontvangen?"
                  answer="U heeft de cheque ontvangen van een bedrijf waar u klant bent. Welk bedrijf de cheque heeft verstrekt, staat op de cheque zelf. Voor vragen over de verstrekking neemt u contact op met dat specifieke bedrijf."
                  isOpen={openItems.has('waarom')}
                  onToggle={() => toggleItem('waarom')}
                />
                <AccordionItem
                  question="Voor wie is de cheque bedoeld?"
                  answer="Voor de ontvanger zoals door het verstrekkende bedrijf is aangegeven. U kunt de cheque ook aan iemand anders overdragen."
                  isOpen={openItems.has('voor-wie')}
                  onToggle={() => toggleItem('voor-wie')}
                />
                <AccordionItem
                  question="Hoe werkt de cheque in de galerie?"
                  answer="In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende formaten en stijlen. Tijdens uw bezoek kiest u in uw eigen tempo een werk dat bij u past."
                  isOpen={openItems.has('hoe-werkt')}
                  onToggle={() => toggleItem('hoe-werkt')}
                />
                <AccordionItem
                  question="Moet ik iets bijbetalen?"
                  answer="Voor de werken die volledig binnen uw cheque vallen, hoeft u niets bij te betalen. Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe."
                  isOpen={openItems.has('bijbetalen')}
                  onToggle={() => toggleItem('bijbetalen')}
                />
                <AccordionItem
                  question="Wat gebeurt er als ik een werk kies dat buiten de selectie valt?"
                  answer="Dan wordt uw cheque verrekend met de galerieprijs van het gekozen werk. Een eventuele meerprijs lichten wij in de galerie rustig toe. Deze keuze is geheel aan u; u hoeft hierover niets vooraf te beslissen."
                  isOpen={openItems.has('buiten-selectie')}
                  onToggle={() => toggleItem('buiten-selectie')}
                />
                <AccordionItem
                  question="Krijg ik geld terug als ik een werk kies dat lager geprijsd is dan mijn cheque?"
                  answer="Nee. De cheque is niet inwisselbaar voor geld."
                  isOpen={openItems.has('geld-terug')}
                  onToggle={() => toggleItem('geld-terug')}
                />
                <AccordionItem
                  question="Kan ik meerdere werken kiezen?"
                  answer="Per cheque kiest u één werk."
                  isOpen={openItems.has('meerdere-werken')}
                  onToggle={() => toggleItem('meerdere-werken')}
                />
                <AccordionItem
                  question="Kan ik de cheque meerdere keren gebruiken?"
                  answer="Nee. De cheque wordt eenmalig gebruikt voor de keuze van uw werk."
                  isOpen={openItems.has('meerdere-keren')}
                  onToggle={() => toggleItem('meerdere-keren')}
                />
                <AccordionItem
                  question="Is de cheque overdraagbaar?"
                  answer="Ja. De cheque is overdraagbaar, maar niet verkoopbaar."
                  isOpen={openItems.has('overdraagbaar')}
                  onToggle={() => toggleItem('overdraagbaar')}
                />
                <AccordionItem
                  question="Hoe lang is de cheque geldig?"
                  answer="Drie maanden vanaf de uitgiftedatum. De geldig-tot-datum staat op uw cheque en op het persoonlijk welkomstscherm."
                  isOpen={openItems.has('geldig')}
                  onToggle={() => toggleItem('geldig')}
                />
              </div>
            </section>

            {/* Section 2: Afspraak plannen */}
            <section id="afspraak" data-section="afspraak" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Afspraak plannen</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Moet ik een afspraak maken?"
                  answer="Ja. Bezoek aan de galerie is uitsluitend op afspraak. Zo is er rust en aandacht voor uw bezoek."
                  isOpen={openItems.has('moet-afspraak')}
                  onToggle={() => toggleItem('moet-afspraak')}
                />
                <AccordionItem
                  question="Hoe plan ik mijn bezoek?"
                  answer={
                    <div>
                      <p className="mb-3">Er zijn drie manieren:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>via de QR-code op uw cheque;</li>
                        <li>via de persoonlijke link in de e-mail van het bedrijf dat de cheque heeft verstrekt;</li>
                        <li>via dekunstvankunst.nl, met de keuze 'Verifieer uw cheque'.</li>
                      </ol>
                      <p className="mt-3">Alle drie de routes leiden eerst naar uw persoonlijk welkomstscherm en daarna naar de planner.</p>
                    </div>
                  }
                  isOpen={openItems.has('hoe-plannen')}
                  onToggle={() => toggleItem('hoe-plannen')}
                />
                <AccordionItem
                  question="Hoeveel stappen heeft de planner?"
                  answer="Vier: dag kiezen, tijd kiezen, gegevens controleren en bevestigen."
                  isOpen={openItems.has('stappen')}
                  onToggle={() => toggleItem('stappen')}
                />
                <AccordionItem
                  question="Welke gegevens worden gevraagd?"
                  answer="Naam, e-mailadres en telefoonnummer. Bij de QR-route en persoonlijke-link-route zijn deze gegevens waar mogelijk vooraf ingevuld; u kunt ze aanpassen."
                  isOpen={openItems.has('gegevens')}
                  onToggle={() => toggleItem('gegevens')}
                />
                <AccordionItem
                  question="Hoe ver vooruit kan ik plannen?"
                  answer="De planner toont de beschikbare bezoekmomenten voor de komende acht weken. Ziet u geen passend moment, neem dan contact met ons op."
                  isOpen={openItems.has('vooruit')}
                  onToggle={() => toggleItem('vooruit')}
                />
                <AccordionItem
                  question="Kan ik mijn afspraak wijzigen of annuleren?"
                  answer="Ja. U kunt uw afspraak tot 48 uur voor uw bezoek wijzigen of annuleren via de link in uw bevestigingsmail of via de servicepagina. Is uw afspraak binnen 48 uur, neem dan telefonisch contact met ons op."
                  isOpen={openItems.has('wijzigen')}
                  onToggle={() => toggleItem('wijzigen')}
                />
                <AccordionItem
                  question="Krijg ik een bevestiging van mijn afspraak?"
                  answer="Ja. Na het plannen ontvangt u een bevestigingsmail met dag, tijd, adres, parkeerinformatie en uw chequenummer."
                  isOpen={openItems.has('bevestiging')}
                  onToggle={() => toggleItem('bevestiging')}
                />
              </div>
            </section>

            {/* Section 3: Bezoek aan de galerie */}
            <section id="bezoek" data-section="bezoek" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Bezoek aan de galerie</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Waar is de galerie gevestigd?"
                  answer={
                    <div>
                      <p>Galerie De Kunst van Kunst</p>
                      <p>Geerdinksweg 2</p>
                      <p>7555 DM Hengelo (OV)</p>
                    </div>
                  }
                  isOpen={openItems.has('locatie')}
                  onToggle={() => toggleItem('locatie')}
                />
                <AccordionItem
                  question="Kan ik parkeren?"
                  answer="U kunt zonder kosten parkeren voor de deur."
                  isOpen={openItems.has('parkeren')}
                  onToggle={() => toggleItem('parkeren')}
                />
                <AccordionItem
                  question="Hoe lang duurt een bezoek?"
                  answer="Gemiddeld zestig tot negentig minuten. U bepaalt zelf hoeveel tijd u nodig heeft."
                  isOpen={openItems.has('duur')}
                  onToggle={() => toggleItem('duur')}
                />
                <AccordionItem
                  question="Met hoeveel personen mag ik komen?"
                  answer="Maximaal twee personen per cheque."
                  isOpen={openItems.has('personen')}
                  onToggle={() => toggleItem('personen')}
                />
                <AccordionItem
                  question="Vanaf welke leeftijd mag een tweede persoon mee?"
                  answer="Alle bezoekers zijn vanaf twaalf jaar."
                  isOpen={openItems.has('leeftijd')}
                  onToggle={() => toggleItem('leeftijd')}
                />
                <AccordionItem
                  question="Mag ik mijn huisdier meenemen?"
                  answer="Nee. Huisdieren zijn niet toegestaan."
                  isOpen={openItems.has('huisdier')}
                  onToggle={() => toggleItem('huisdier')}
                />
                <AccordionItem
                  question="Wat moet ik meenemen naar mijn afspraak?"
                  answer="Uw afspraak en chequenummer staan bij ons genoteerd. U hoeft de papieren cheque niet mee te nemen; meenemen mag."
                  isOpen={openItems.has('meenemen')}
                  onToggle={() => toggleItem('meenemen')}
                />
                <AccordionItem
                  question="Moet ik eerder aanwezig zijn?"
                  answer="Kom rond het afgesproken tijdstip."
                  isOpen={openItems.has('eerder')}
                  onToggle={() => toggleItem('eerder')}
                />
                <AccordionItem
                  question="Wat kan ik verwachten tijdens mijn bezoek?"
                  answer="U wordt persoonlijk ontvangen. U kunt rustig rondkijken en in uw eigen tempo een werk kiezen dat bij u past. Een adviseur is aanwezig om informatie te geven wanneer dat helpt. Tijdens uw bezoek staat koffie of thee voor u klaar."
                  isOpen={openItems.has('verwachten')}
                  onToggle={() => toggleItem('verwachten')}
                />
                <AccordionItem
                  question="Wat voor schilderijen zijn er beschikbaar?"
                  answer="Originele, handgeschilderde en gesigneerde werken in verschillende formaten en stijlen. In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen."
                  isOpen={openItems.has('schilderijen')}
                  onToggle={() => toggleItem('schilderijen')}
                />
                <AccordionItem
                  question="Kan ik het werk direct meenemen?"
                  answer="Ja. U neemt het werk en het certificaat van echtheid mee naar huis."
                  isOpen={openItems.has('meenemen-werk')}
                  onToggle={() => toggleItem('meenemen-werk')}
                />
                <AccordionItem
                  question="Krijg ik een certificaat van echtheid?"
                  answer="Ja. Bij elk gekozen werk hoort een certificaat van echtheid."
                  isOpen={openItems.has('certificaat')}
                  onToggle={() => toggleItem('certificaat')}
                />
                <AccordionItem
                  question="Is er een adviseur aanwezig?"
                  answer="Ja. Een adviseur is aanwezig om u rustig te helpen en informatie te geven wanneer dat helpt. U kiest in uw eigen tempo."
                  isOpen={openItems.has('adviseur')}
                  onToggle={() => toggleItem('adviseur')}
                />
                <AccordionItem
                  question="Ben ik verplicht iets te kopen?"
                  answer="Nee. Er is geen contractuele verplichting tot aankoop."
                  isOpen={openItems.has('verplicht')}
                  onToggle={() => toggleItem('verplicht')}
                />
              </div>
            </section>

            {/* Section 4: Eventuele extras */}
            <section id="extras" data-section="extras" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Eventuele extras</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Zijn er extras inbegrepen bij mijn bezoek?"
                  answer="Op een aantal dagen zijn er extras beschikbaar van bedrijven uit de buurt. Of dat voor uw bezoek geldt, hangt af van de gekozen dag. U ziet dit in de planner bij stap 1 en terug op het bevestigingsscherm."
                  isOpen={openItems.has('extras-inbegrepen')}
                  onToggle={() => toggleItem('extras-inbegrepen')}
                />
                <AccordionItem
                  question="Wat kunnen die extras zijn?"
                  answer="Bijvoorbeeld koffie met gebak of een autowasbeurt bij een bedrijf in de buurt. Welke extras op welke dag beschikbaar zijn, ziet u tijdens het plannen."
                  isOpen={openItems.has('wat-extras')}
                  onToggle={() => toggleItem('wat-extras')}
                />
                <AccordionItem
                  question="Wanneer zie ik welke extras voor mij gelden?"
                  answer="Tijdens stap 1 van de planner, bij de keuze van uw dag. De gekozen extras staan ook op uw bevestigingsscherm en in uw bevestigingsmail."
                  isOpen={openItems.has('wanneer-extras')}
                  onToggle={() => toggleItem('wanneer-extras')}
                />
                <AccordionItem
                  question="Zijn de extras verplicht?"
                  answer="Nee. U bent vrij om er gebruik van te maken."
                  isOpen={openItems.has('verplicht-extras')}
                  onToggle={() => toggleItem('verplicht-extras')}
                />
                <AccordionItem
                  question="Wanneer kan ik de extras gebruiken?"
                  answer="Op de dag van uw bezoek, vóór of na uw afspraak in de galerie."
                  isOpen={openItems.has('wanneer-gebruiken')}
                  onToggle={() => toggleItem('wanneer-gebruiken')}
                />
                <AccordionItem
                  question="Hoe maak ik gebruik van een extra?"
                  answer="Door uw QR-code te tonen bij de betreffende locatie."
                  isOpen={openItems.has('hoe-gebruiken')}
                  onToggle={() => toggleItem('hoe-gebruiken')}
                />
                <AccordionItem
                  question="Zijn de extras altijd hetzelfde?"
                  answer="Nee. De invulling kan per dag en per periode verschillen, en is afhankelijk van de bedrijven uit de buurt die op die dag deelnemen."
                  isOpen={openItems.has('altijd-zelfde')}
                  onToggle={() => toggleItem('altijd-zelfde')}
                />
              </div>
            </section>

            {/* Section 5: Na uw bezoek */}
            <section id="na-bezoek" data-section="na-bezoek" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Na uw bezoek</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Kan het werk thuisbezorgd worden?"
                  answer="Ja. Bezorging is mogelijk. Het bedrag wordt vooraf met u afgestemd voordat de bezorging wordt vastgelegd."
                  isOpen={openItems.has('bezorgen')}
                  onToggle={() => toggleItem('bezorgen')}
                />
                <AccordionItem
                  question="Kan ik het werk laten inlijsten of laten vernissen?"
                  answer="Ja. Lijsten en vernis zijn optioneel en worden apart afgerekend. De bedragen worden in de galerie vooraf met u besproken. Bij vernisde werken geldt een omruilgarantie van vijf jaar."
                  isOpen={openItems.has('inlijsten')}
                  onToggle={() => toggleItem('inlijsten')}
                />
                <AccordionItem
                  question="Kan ik het werk later omruilen?"
                  answer={
                    <div>
                      <p className="mb-3">Bij vernisde werken geldt een omruilgarantie van vijf jaar. Neem hiervoor contact op met Galerie De Kunst van Kunst. Wij plannen dan een service-afspraak. Neem het werk en het certificaat mee naar de galerie.</p>
                      <p>Kiest u een ander werk, dan wordt dit rustig met u doorgenomen. De omruilgarantie is niet inwisselbaar voor geld.</p>
                    </div>
                  }
                  isOpen={openItems.has('omruilen')}
                  onToggle={() => toggleItem('omruilen')}
                />
                <AccordionItem
                  question="Wat gebeurt er na mijn bezoek?"
                  answer="Na uw bezoek heeft u het werk en het certificaat in huis. U ontvangt geen reclame-mails, geen nieuwsbrief en geen reviewverzoek per e-mail. Heeft u later een vraag, dan helpen wij u graag."
                  isOpen={openItems.has('na-bezoek-wat')}
                  onToggle={() => toggleItem('na-bezoek-wat')}
                />
              </div>
            </section>

            {/* Section 6: Voorwaarden en bijzondere situaties */}
            <section id="voorwaarden" data-section="voorwaarden" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Voorwaarden en bijzondere situaties</h2>
              <div className="card border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <AccordionItem
                  question="Wie is de verstrekkende partij en wie de uitvoerende partij?"
                  answer="De cheque is verstrekt door het bedrijf dat op uw cheque staat vermeld. Galerie De Kunst van Kunst verzorgt het galeriebezoek en de uitvoering van de cheque."
                  isOpen={openItems.has('partijen')}
                  onToggle={() => toggleItem('partijen')}
                />
                <AccordionItem
                  question="Is de cheque inwisselbaar voor geld?"
                  answer="Nee. De cheque is niet inwisselbaar voor geld."
                  isOpen={openItems.has('inwisselbaar')}
                  onToggle={() => toggleItem('inwisselbaar')}
                />
                <AccordionItem
                  question="Wat als mijn cheque is verlopen?"
                  answer="Uw oorspronkelijke geldigheidsdatum is verstreken. Neem contact met ons op. Wij bekijken samen met het bedrijf dat de cheque heeft verstrekt of een afspraak nog mogelijk is."
                  isOpen={openItems.has('verlopen')}
                  onToggle={() => toggleItem('verlopen')}
                />
                <AccordionItem
                  question="Ik kan mijn cheque niet meer vinden — wat nu?"
                  answer="Kunt u de persoonlijke link nog vinden? Dan kunt u die gebruiken. Lukt dat niet, neem dan contact met ons op met uw naam en, als u die weet, het bedrijf dat de cheque heeft verstrekt. Wij kijken of de cheque in onze administratie staat."
                  isOpen={openItems.has('kwijt')}
                  onToggle={() => toggleItem('kwijt')}
                />
                <AccordionItem
                  question="Hoe draag ik mijn cheque over aan iemand anders?"
                  answer={
                    <div>
                      <p className="mb-3">De cheque is overdraagbaar, maar niet verkoopbaar. Geef de cheque of persoonlijke link door aan de ontvanger. De ontvanger plant het bezoek met dezelfde cheque en vult eigen contactgegevens in.</p>
                      <p>Is er al een afspraak gepland, neem dan contact met ons op.</p>
                    </div>
                  }
                  isOpen={openItems.has('overdragen')}
                  onToggle={() => toggleItem('overdragen')}
                />
                <AccordionItem
                  question="Mijn QR-code werkt niet — wat moet ik doen?"
                  answer="U kunt uw cheque ook activeren via dekunstvankunst.nl met chequenummer en postcode. Lukt het niet? Neem dan telefonisch contact met ons op."
                  isOpen={openItems.has('qr-werkt-niet')}
                  onToggle={() => toggleItem('qr-werkt-niet')}
                />
                <AccordionItem
                  question="Mijn chequenummer wordt niet herkend."
                  answer="Controleer of u het nummer juist heeft overgenomen. Lukt het daarna nog niet, neem dan contact met ons op. Wij kijken het samen met u na."
                  isOpen={openItems.has('niet-herkend')}
                  onToggle={() => toggleItem('niet-herkend')}
                />
                <AccordionItem
                  question="Ik heb al een afspraak gepland en wil een nieuwe maken."
                  answer="U heeft al een afspraak. Op de servicepagina kunt u uw bestaande afspraak wijzigen, of u neemt telefonisch contact met ons op."
                  isOpen={openItems.has('al-afspraak')}
                  onToggle={() => toggleItem('al-afspraak')}
                />
                <AccordionItem
                  question="Er zijn geen tijdsloten beschikbaar op de gewenste dag."
                  answer="Op deze dag zijn geen tijden zichtbaar. Kies een andere dag, of neem contact met ons op. Wij kijken dan met u mee."
                  isOpen={openItems.has('geen-tijden')}
                  onToggle={() => toggleItem('geen-tijden')}
                />
                <AccordionItem
                  question="Wat als ik geen gebruik wil maken van de cheque?"
                  answer="U bent niet verplicht de cheque te gebruiken. Voor afmelding van communicatie van het verstrekkende bedrijf gebruikt u de aangegeven afmeldroute van dat bedrijf."
                  isOpen={openItems.has('geen-gebruik')}
                  onToggle={() => toggleItem('geen-gebruik')}
                />
              </div>
            </section>

            {/* Section 7: Hulp en contact */}
            <section id="hulp" data-section="hulp" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>Hulp en contact</h2>

              <div className="card border bg-card p-4 md:p-8 mb-8" style={{
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <h3 className="font-medium text-lg md:text-xl mb-4 md:mb-6" style={{ color: 'var(--text)' }}>Galerie De Kunst van Kunst</h3>
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8" style={{ color: 'var(--text)' }}>
                  <div>
                    <p>Geerdinksweg 2</p>
                    <p>7555 DM Hengelo (OV)</p>
                  </div>
                  <div>
                    <p className="font-medium">Telefoon:</p>
                    <p><a href="tel:0742914857" className="hover:underline">074-2914857 (ma t/m vr 12:00–16:00)</a></p>
                  </div>
                  <div>
                    <p className="font-medium">E-mail:</p>
                    <p><a href="mailto:info@dekunstvankunst.nl" className="hover:underline">info@dekunstvankunst.nl</a></p>
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm">Bezoek uitsluitend op afspraak.</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <button
                    onClick={() => onNavigate('cheque-input')}
                    className="btn-primary"
                  >
                    Verifieer uw cheque
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="underline hover:opacity-80 px-3 py-3 md:px-4 md:py-4 text-base"
                    style={{ color: 'var(--text)' }}
                  >
                    Neem contact op
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }}>
        <div className="site-container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logo} alt="Galerie De Kunst van Kunst - Sinds 2005" className="h-12 mb-4 brightness-0 invert" />
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Geerdinksweg 2</p>
                <p>7555 DM Hengelo (OV)</p>
                <p className="mt-4">074-2914857 (ma t/m vr 12:00–16:00)</p>
                <p>info@dekunstvankunst.nl</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Informatie</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate('faq')} className="block hover:opacity-80 opacity-90">
                  Veelgestelde vragen
                </button>
                <button onClick={() => onNavigate('contact')} className="block hover:opacity-80 opacity-90">
                  Contact
                </button>
                <a href="/src/imports/pdfs/Algemene_Voorwaarden_Galerie_De_Kunst_van_Kunst.pdf" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 opacity-90">
                  Voorwaarden
                </a>
              </div>
            </div>
          </div>

          <div
            className="pt-8 border-t text-sm opacity-80"
            style={{ borderColor: 'color-mix(in srgb, var(--primary-foreground) 30%, transparent)' }}
          >
            <p>Bezoek uitsluitend op afspraak.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
