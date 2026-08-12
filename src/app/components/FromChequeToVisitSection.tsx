import howItWorksStep1Cheque from '../../imports/how-it-works-step-1-cheque.png';
import howItWorksStep2Planner from '../../imports/how-it-works-step-2-planner-cutout.png';
import howItWorksStep3Koffie from '../../imports/how-it-works-step-3-koffie-cutout.png';

type Step = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  showArrow?: boolean;
  imageClassName?: string;
};

const steps: Step[] = [
  {
    title: 'U heeft een Kunst-Waardecheque ontvangen',
    description:
      'U heeft een Kunst-Waardecheque ontvangen van een bedrijf waar u klant bent.',
    image: howItWorksStep1Cheque,
    imageAlt: 'Kunst-Waardecheque',
    showArrow: true
  },
  {
    title: 'U plant uw bezoek',
    description:
      'U plant uw bezoek en kiest een moment dat u past.',
    image: howItWorksStep2Planner,
    imageAlt: 'Planner met gekozen dag'
  },
  {
    title: 'U kiest uw schilderij in de galerie',
    description:
      'In de galerie kiest u uw schilderij en neemt het direct mee naar huis, met certificaat van echtheid.',
    image: howItWorksStep3Koffie,
    imageAlt: 'Bezoek aan de galerie',
    imageClassName: 'mx-auto h-auto w-full max-w-[280px] object-contain object-top sm:max-w-[340px] md:max-w-none md:origin-top md:-translate-y-3 md:scale-[1.08]'
  }
];

const PAGE_RAIL = "site-container";

export function FromChequeToVisitSection() {
  return (
    <section className="mt-0 bg-[var(--brand-cream-light)] pb-6 pt-0 md:pb-10 md:pt-12" aria-label="Hoe het werkt">
      <div className={PAGE_RAIL}>
        <div className="mt-0 md:-mt-3">
            <header>
              <p className="text-[20px] font-semibold uppercase tracking-[0.14em] [color:var(--brand-gold)] md:text-[26px]">
                HOE HET WERKT
              </p>
            </header>

            <ol className="mt-0">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-5 border-b border-[color:rgba(90,84,74,0.16)] py-6 last:border-b-0 md:grid-cols-[36px_minmax(0,1fr)_minmax(260px,360px)] md:items-start md:gap-8"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)] text-sm font-medium [color:var(--brand-bordeaux)]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="mb-3 text-lg font-medium leading-tight text-foreground md:text-[24px]">{step.title}</h3>
                    <p className="max-w-[76ch] text-base leading-[1.65] text-foreground md:text-[18px]">{step.description}</p>
                  </div>
                  <div className="relative overflow-hidden bg-[var(--brand-cream-light)]">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className={step.imageClassName ?? 'h-full w-full object-cover'}
                    />
                    {step.showArrow && (
                      <div className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 text-[var(--brand-bordeaux)]">
                        <span className="block text-2xl leading-none">↓</span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
        </div>
      </div>
    </section>
  );
}
