const chequeFacts = [
  'Origineel schilderij',
  'Bezoek op afspraak',
  'Minimaal vijftig schilderijen volledig binnen uw cheque',
  'Certificaat van echtheid inbegrepen'
];

export function ChequeExplanationSection() {
  return (
    <section className="border-t border-[color:rgba(90,84,74,0.16)] bg-background py-10 md:py-16">
      <div className="site-container w-full">
        <div className="max-w-3xl">
          <header>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] [color:var(--brand-gold)]">
              DE CHEQUE
            </p>
          </header>

          <div className="mt-3 max-w-[68ch]">
            <p className="text-base leading-[1.65] text-foreground md:text-lg">
              Een Kunst-Waardecheque is een cheque waarmee u bij Galerie De Kunst van Kunst in Hengelo op afspraak een origineel schilderij kiest.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-foreground md:text-lg">
              In de galerie hangen altijd minimaal vijftig schilderijen die volledig binnen uw cheque vallen, in verschillende formaten en stijlen. Valt uw keuze op een ander schilderij, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe.
            </p>

            <ul className="mt-7 border-t border-[color:rgba(90,84,74,0.16)]">
              {chequeFacts.map((fact) => (
                <li key={fact} className="border-b border-[color:rgba(90,84,74,0.16)] py-3 text-[15px] leading-relaxed text-foreground">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
