import { useState } from 'react';
import { Screen } from '../App';

interface PaintingExchangeProps {
  onNavigate: (screen: Screen) => void;
}

export function PaintingExchange({ onNavigate }: PaintingExchangeProps) {
  const [paintingNumber, setPaintingNumber] = useState('');

  const handleStartRequest = () => {
    onNavigate('planner-day');
  };

  return (
    <div className="min-h-screen bg-[var(--brand-cream-light)] text-foreground">
      <div className="site-container w-full py-10 md:py-12">
        <header className="mb-12 border-b border-[color:rgba(90,84,74,0.16)] pb-8">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[56px]">Een schilderij omruilen</h1>
          <p className="mt-4 text-[16px] leading-relaxed [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
            Tot vijf jaar na aankoop een ander werk kiezen.
          </p>
        </header>

        <section className="mb-12 border-b border-[color:rgba(90,84,74,0.14)] pb-10">
          <h2 className="mb-4 text-[20px] font-semibold uppercase tracking-[0.12em] [color:var(--brand-gold)] md:text-[24px]">Over de omruilgarantie</h2>
          <p className="mb-5 text-[18px] leading-[1.4] [color:var(--foreground)] sm:text-[22px] md:text-[31px]">
            Bevalt uw schilderij u op den duur niet meer? Dan kunt u tot vijf jaar na aankoop een ander schilderij kiezen uit de galerie.
          </p>
          <div className="space-y-2 text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
            <p>Omruilen kan tot vijf jaar na aankoopdatum.</p>
            <p>U kiest zelf wanneer u langskomt.</p>
            <p>Een schilderij van gelijke waarde ruilt u kosteloos om.</p>
            <p>Kiest u een duurder schilderij, dan betaalt u alleen het verschil.</p>
            <p>
              De omruilgarantie geldt voor vernisste schilderijen. Vernissen beschermt het werk en versterkt de kleuren.
            </p>
          </div>
        </section>

        <section className="mb-12 border-b border-[color:rgba(90,84,74,0.14)] pb-10">
          <h2 className="mb-4 text-[20px] font-semibold uppercase tracking-[0.12em] [color:var(--brand-gold)] md:text-[24px]">Het schilderijnummer</h2>
          <p className="mb-4 text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
            Voor een omruilbezoek heeft u het schilderijnummer nodig. U vindt dit op twee plekken:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
            <li>Op het certificaat van echtheid dat u bij aankoop heeft ontvangen.</li>
            <li>Op de achterkant van het schilderij, op een sticker of in inkt.</li>
          </ul>
        </section>

        <section className="mb-12 border-b border-[color:rgba(90,84,74,0.14)] pb-10">
          <h2 className="mb-5 text-[20px] font-semibold uppercase tracking-[0.12em] [color:var(--brand-gold)] md:text-[24px]">Hoe het werkt</h2>
          <div className="space-y-0">
            <div className="grid gap-4 border-b border-[color:rgba(90,84,74,0.14)] py-5 md:grid-cols-[42px_minmax(0,1fr)] md:items-start md:gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(174,134,68,0.55)] text-[18px] [color:var(--brand-bordeaux)]">1</div>
              <p className="text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
                <span className="block pb-1 text-[22px] font-semibold leading-[1.2] [color:var(--foreground)] sm:text-[26px] md:text-[32px]">Vraag een omruilbezoek aan</span>
                Vul hieronder uw schilderijnummer in. Het systeem herkent uw schilderij.
              </p>
            </div>
            <div className="grid gap-4 border-b border-[color:rgba(90,84,74,0.14)] py-5 md:grid-cols-[42px_minmax(0,1fr)] md:items-start md:gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(174,134,68,0.55)] text-[18px] [color:var(--brand-bordeaux)]">2</div>
              <p className="text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
                <span className="block pb-1 text-[22px] font-semibold leading-[1.2] [color:var(--foreground)] sm:text-[26px] md:text-[32px]">Kies een bezoekmoment</span>
                U kiest zelf een dag en tijd. U ontvangt een bevestiging met datum, tijd en route.
              </p>
            </div>
            <div className="grid gap-4 py-5 md:grid-cols-[42px_minmax(0,1fr)] md:items-start md:gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(174,134,68,0.55)] text-[18px] [color:var(--brand-bordeaux)]">3</div>
              <p className="text-[16px] leading-[1.55] [color:var(--text-secondary)] sm:text-[18px] md:text-[22px]">
                <span className="block pb-1 text-[22px] font-semibold leading-[1.2] [color:var(--foreground)] sm:text-[26px] md:text-[32px]">Breng uw schilderij mee</span>
                Tijdens het bezoek kiest u rustig een nieuw werk. Een eventuele bijbetaling lichten wij ter plekke toe.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 border border-[color:rgba(90,84,74,0.18)] bg-white p-6 md:p-8">
          <h2 className="mb-4 text-[20px] font-semibold uppercase tracking-[0.12em] [color:var(--brand-gold)] md:text-[24px]">Aanvraag omruilbezoek</h2>
          <label className="block text-[16px] [color:var(--text-secondary)] md:text-[20px]">
            Schilderijnummer:
            <input
              type="text"
              value={paintingNumber}
              onChange={(e) => setPaintingNumber(e.target.value)}
              className="input mt-2 w-full bg-[var(--brand-cream-light)]"
            />
          </label>
          <button
            type="button"
            onClick={handleStartRequest}
            className="btn-primary mt-5"
          >
            Aanvraag starten
          </button>
        </section>

        <section className="mb-4 border-t border-[color:rgba(90,84,74,0.14)] pt-6">
          <h2 className="mb-2 text-[20px] font-semibold uppercase tracking-[0.12em] [color:var(--brand-gold)] md:text-[24px]">Vragen?</h2>
          <p className="text-[16px] [color:var(--text-secondary)] md:text-[22px]">074-2914857 of info@dekunstvankunst.nl.</p>
        </section>
      </div>
    </div>
  );
}
