const SERVICE_STEPS = [
  {
    title: "1. Verifieer uw cheque",
    description:
      "Gebruik uw chequenummer en postcode, of de QR-code/persoonlijke link die op uw cheque staat.",
  },
  {
    title: "2. Kies dag en tijd",
    description:
      "In de planner kiest u een beschikbaar moment dat past in uw agenda.",
  },
  {
    title: "3. Bezoek en kies uw werk",
    description:
      "U wordt persoonlijk ontvangen en kiest in alle rust een origineel werk dat bij u past.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border section-spacing">
      <div className="site-container w-full">
        <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
          Hoe uw bezoek werkt
        </h2>
        <p className="mt-4 max-w-[70ch] text-text-secondary">
          De route is eenvoudig en overzichtelijk. Zo weet u vooraf precies wat u kunt
          verwachten, van verificatie tot uw bezoek in de galerie.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICE_STEPS.map((step) => (
            <article key={step.title} className="card p-6">
              <h3 className="text-lg font-medium text-text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
