import { Screen } from '../App';

interface PersonalWelcomeQRProps {
  onNavigate: (screen: Screen) => void;
  userData: any;
}

export function PersonalWelcomeQR({ onNavigate, userData }: PersonalWelcomeQRProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: PERSOONLIJK WELKOMSTSCHERM (persoonlijke QR/link-route)
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-12">

        {/* Eyebrow - Partner */}
        <section className="mb-12">
          <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
            NAMENS {userData.partner || 'BEDRIJF'}
          </div>

          <h1 className="text-4xl font-medium mb-3" style={{ color: 'var(--text)' }}>
            Welkom {userData.firstName || '[voornaam]'}. Uw Kunst-Waardecheque is herkend.
          </h1>
        </section>

        {/* Chequevisualisatie */}
        <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: CHEQUEVISUALISATIE
          </div>

          <div className="max-w-md cheque-card p-8" style={{
            borderColor: 'var(--primary)',
            backgroundColor: 'var(--card)'
          }}>
            <div className="text-lg font-medium mb-6" style={{ color: 'var(--text)' }}>Kunst-Waardecheque</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Chequenummer:</span>
                <span className="font-mono" style={{ color: 'var(--text)' }}>{userData.chequeNumber || '12345688'}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Waarde:</span>
                <span className="font-medium text-xl" style={{ color: 'var(--text)' }}>€ 500,—</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Geldig tot:</span>
                <span className="font-mono" style={{ color: 'var(--text)' }}>31 juli 2026</span>
              </div>
            </div>
          </div>

          <p className="text-xs mt-4 font-mono" style={{ color: 'var(--text-muted)' }}>
            [DUMMYDATA: geldigheidsdatum]
          </p>
        </section>

        {/* Body */}
        <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: UITLEG
          </div>

          <div className="max-w-3xl space-y-4 text-lg" style={{ color: 'var(--text)' }}>
            <p>
              In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen,
              in verschillende formaten en stijlen. Valt uw keuze op een ander werk, dan wordt uw cheque
              daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe.
            </p>
          </div>
        </section>

        {/* Praktisch */}
        <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: PRAKTISCH
          </div>

          <p className="text-lg" style={{ color: 'var(--text)' }}>
            Bezoek uitsluitend op afspraak.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-12 text-center">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: PRIMAIRE CTA
          </div>

          <button
            onClick={() => onNavigate('planner-day-qr')}
            className="btn-primary"
          >
            Plan uw bezoek
          </button>

          <p className="text-sm mt-4 font-mono" style={{ color: 'var(--text-muted)' }}>
            Alternatieve CTA: "Kies uw bezoekmoment"
          </p>
        </section>

      </div>

      {/* QA Block - Internal */}
      <div className="border-t-4 px-4 sm:px-6 py-8" style={{
        backgroundColor: 'color-mix(in srgb, var(--state-destructive) 10%, var(--background))',
        borderColor: 'var(--destructive)'
      }}>
        <div className="site-container-narrow">
          <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--destructive)' }}>QA-BLOK: WAT ABSOLUUT NIET MAG</h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden op welkomstscherm:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Belevingspakket</li>
                <li>✗ Extra cadeaus</li>
                <li>✗ Meeste voordeel</li>
                <li>✗ Bedragen bij extras</li>
                <li>✗ package_id zichtbaar</li>
                <li>✗ hash zichtbaar</li>
                <li>✗ "Aangeboden door BEDRIJF"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden taal:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ "Gefeliciteerd"</li>
                <li>✗ "Uw cheque is geactiveerd"</li>
                <li>✗ "Speciaal voor u"</li>
                <li>✗ "Persoonlijk voor u"</li>
                <li>✗ "Verzilveren"</li>
                <li>✗ "Voucher"</li>
                <li>✗ "Waardebon"</li>
                <li>✗ "Korting"</li>
                <li>✗ "Voordeel"</li>
                <li>✗ "Deal"</li>
                <li>✗ "Gratis"</li>
                <li>✗ "Reserveer"</li>
                <li>✗ "Arrangement"</li>
                <li>✗ "Dagje"</li>
                <li>✗ "Middag"</li>
                <li>✗ "Beleving"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Belangrijk:</h4>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              Toon de dag-specifieke extras nog niet als hoofdonderdeel op het welkomstscherm.
              Die horen bij de dagkeuze in de planner.
            </p>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
            borderColor: 'var(--state-info)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-info)' }}>Partnerzichtbaarheid:</h4>
            <p className="text-sm" style={{ color: 'var(--state-info)' }}>
              Partner/issuer BEDRIJF alleen tonen als "NAMENS BEDRIJF" op dit welkomstscherm.<br />
              Niet als "Aangeboden door", niet in plannerheader, niet als logomuur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
