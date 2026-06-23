import heroImage from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/01_Pand_Hero/pand_geerdinksweg_blauwe_lucht.jpeg";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-label="Introductie Galerie De Kunst van Kunst"
    >
      <img
        src={heroImage}
        alt="Voorzijde van Galerie De Kunst van Kunst aan de Geerdinksweg in Hengelo"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/70 to-brand-ink/35" />

      <div className="site-container relative flex min-h-[68svh] w-full items-end pb-14 pt-24 md:min-h-[72svh] md:pb-20">
        <div className="max-w-[680px] text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/85">
            Galerie De Kunst van Kunst - Hengelo
          </p>
          <h1 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Kies uw kunstwerk in alle rust, op afspraak en met persoonlijke begeleiding.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/90 sm:text-lg">
            Met uw Kunst-Waardecheque bezoekt u onze galerie op een moment dat u uitkomt.
            U kijkt op uw eigen tempo en kiest een werk dat past bij uw smaak en ruimte.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary text-center">
              Verifieer uw cheque
            </a>
            <a
              href="#about"
              className="btn-secondary border-white/80 text-center text-white hover:border-white hover:bg-white/10"
            >
              Meer over de galerie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
