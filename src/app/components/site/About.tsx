import galleryExteriorImage from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/02_Galerie_Collectie/doeken_op_rij_PRIMAIR.jpg";

export function About() {
  return (
    <section id="about" className="border-b border-border section-spacing">
      <div className="site-container grid w-full gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
            Een fysieke galerie met tijd en aandacht
          </h2>
          <p className="mt-5 max-w-[62ch] text-text-secondary">
            Galerie De Kunst van Kunst is sinds 2005 gevestigd in Hengelo. U bezoekt de
            galerie uitsluitend op afspraak, zodat er ruimte is voor een rustig gesprek,
            helder advies en een keuze zonder druk.
          </p>
          <p className="mt-4 max-w-[62ch] text-text-secondary">
            In de galerie hangen altijd meerdere stijlen en formaten. Minimaal vijftig
            werken vallen volledig binnen uw cheque. Bij elk gekozen werk ontvangt u een
            certificaat van echtheid.
          </p>

          <dl className="mt-8 grid gap-4 text-sm text-text-secondary sm:grid-cols-2">
            <div className="card p-4">
              <dt className="font-medium text-text-primary">Locatie</dt>
              <dd className="mt-1">Geerdinksweg 2, 7555 DM Hengelo (OV)</dd>
            </div>
            <div className="card p-4">
              <dt className="font-medium text-text-primary">Bezoek</dt>
              <dd className="mt-1">Uitsluitend op afspraak</dd>
            </div>
          </dl>
        </div>

        <figure className="overflow-hidden rounded-[12px] border border-border shadow-sm">
          <img
            src={galleryExteriorImage}
            alt="Voorzijde van de galerie in Hengelo"
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
    </section>
  );
}
