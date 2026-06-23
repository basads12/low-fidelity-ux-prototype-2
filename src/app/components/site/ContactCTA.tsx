export function ContactCTA() {
  return (
    <section id="contact" className="section-spacing">
      <div className="site-container w-full">
        <div className="card grid gap-8 p-8 md:grid-cols-[1.3fr_1fr] md:p-10">
          <div>
            <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
              Plan uw afspraak in de galerie
            </h2>
            <p className="mt-4 max-w-[62ch] text-text-secondary">
              Heeft u vragen over uw cheque of wilt u direct een bezoekmoment plannen?
              Neem contact met ons op. Wij helpen u graag verder.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0742914857" className="btn-primary text-center">
                Bel 074-2914857 (ma t/m vr 12:00–16:00)
              </a>
              <a href="mailto:info@dekunstvankunst.nl" className="btn-secondary text-center">
                E-mail ons
              </a>
            </div>
          </div>

          <address className="not-italic text-sm leading-relaxed text-text-secondary md:text-base">
            <p className="font-medium text-text-primary">Galerie De Kunst van Kunst</p>
            <p className="mt-2">Geerdinksweg 2</p>
            <p>7555 DM Hengelo (OV)</p>
            <p className="mt-4">Bezoek uitsluitend op afspraak</p>
            <p className="mt-4">
              E-mail:{" "}
              <a className="underline hover:text-text-primary" href="mailto:info@dekunstvankunst.nl">
                info@dekunstvankunst.nl
              </a>
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
