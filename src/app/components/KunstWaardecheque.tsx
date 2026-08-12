import { Screen } from '../App';

interface KunstWaardechequeProps {
  onNavigate: (screen: Screen) => void;
}

export function KunstWaardecheque({ onNavigate }: KunstWaardechequeProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="site-container py-12 md:py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">De Kunst-Waardecheque</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed [color:var(--text-secondary)]">
          U heeft een Kunst-Waardecheque ontvangen van een bedrijf waar u klant bent. Met deze cheque kiest u in onze
          galerie een origineel, handgeschilderd schilderij. Op deze pagina leest u hoe dat werkt.
        </p>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Zo werkt uw cheque</h2>
          <p className="mt-4 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende
            formaten en stijlen. Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend; een eventuele
            meerprijs lichten wij in de galerie rustig toe.
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            Het gekozen werk neemt u direct mee naar huis, met certificaat van echtheid en ons eigen magazine.
          </p>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">De cheque in het kort</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 [color:var(--text-secondary)]">
            <li>De cheque staat op naam en draagt een uniek chequenummer en een uitgiftedatum.</li>
            <li>De cheque is drie maanden geldig vanaf de uitgiftedatum. De datum staat op uw cheque.</li>
            <li>De cheque is overdraagbaar: u mag hem doorgeven aan iemand anders.</li>
            <li>
              De cheque vertegenwoordigt een waarde van EUR 500 en is niet inwisselbaar voor geld. Bij een werk onder
              de chequewaarde wordt geen geld geretourneerd.
            </li>
            <li>Per schilderij kan een cheque worden ingeleverd.</li>
            <li>
              De cheque geldt niet voor aanvullende diensten zoals lijsten of vernis. Die worden desgewenst in de
              galerie toegelicht en apart afgerekend.
            </li>
          </ul>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Van wie komt de cheque</h2>
          <p className="mt-4 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            De cheque wordt verstrekt door het bedrijf dat op uw cheque staat vermeld. Galerie De Kunst van Kunst
            ontvangt u en voert de cheque uit. Voor vragen over de verstrekking kunt u terecht bij dat bedrijf; voor
            vragen over uw bezoek kunt u bij ons terecht.
          </p>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Uw bezoek</h2>
          <p className="mt-4 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            U komt op afspraak en wordt persoonlijk ontvangen. Een adviseur helpt u bij het kiezen, in uw eigen tempo en
            zonder druk. Maximaal twee bezoekers per cheque, toegang vanaf 12 jaar.
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed [color:var(--text-secondary)]">
            Tip: neem foto&apos;s van uw interieur mee. Onze adviseurs helpen u dan gerichter bij uw keuze.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => onNavigate('plan-uw-bezoek')} className="btn-primary">
            Plan uw bezoek
          </button>
          <button onClick={() => onNavigate('homepage')} className="btn-secondary">
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
