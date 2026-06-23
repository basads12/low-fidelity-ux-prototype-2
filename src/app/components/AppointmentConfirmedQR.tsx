interface AppointmentConfirmedQRProps {
  userData: any;
}

export function AppointmentConfirmedQR({ userData }: AppointmentConfirmedQRProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: AFSPRAAK BEVESTIGD (eindscherm met extras)
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-12">

        {/* Success Message */}
        <section className="mb-16 text-center">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: SUCCESMELDING
          </div>

          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'var(--brand-ink)' }}>
            <div className="text-5xl font-medium" style={{ color: 'white' }}>✓</div>
          </div>

          <h1 className="text-5xl font-medium mb-6" style={{ color: 'var(--text)' }}>
            Uw afspraak is bevestigd
          </h1>

          <p className="text-xl mb-4" style={{ color: 'var(--text)' }}>
            Uw afspraak bij Galerie De Kunst van Kunst is bevestigd voor <strong>{userData.selectedDay || 'Maandag 4 mei 2026'}</strong> om <strong>{userData.selectedTime || '14:15'}</strong>.
          </p>
        </section>

        {/* Key Details */}
        <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: KERNDETAILS
          </div>

          <div className="space-y-4" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Galerie De Kunst van Kunst</strong><br />
              Geerdinksweg 2<br />
              7555 DM Hengelo (OV)
            </div>

            <div>
              <strong>Parkeren:</strong> zonder kosten voor de deur
            </div>

            <div>
              <strong>Gemiddelde duur:</strong> 60 tot 90 minuten
            </div>

            <div>
              <strong>Chequenummer:</strong> <span className="font-mono">{userData.chequeNumber || '12345688'}</span>
            </div>

            <div>
              <strong>Bezoek uitsluitend op afspraak</strong>
            </div>

            <div>
              <strong>Maximaal twee bezoekers per cheque, vanaf 12 jaar</strong>
            </div>

            <div className="pt-4">
              U ontvangt een bevestiging per e-mail.
            </div>

            <div>
              <strong>Vragen over uw afspraak?</strong> Bel 074-2914857 (ma t/m vr 12:00–16:00)
            </div>
          </div>
        </section>

        {/* Day-specific Extras */}
        {userData.dayExtras && userData.dayExtras.length > 0 && (
          <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
            <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
              SECTIE: DAG-SPECIFIEKE EXTRAS
            </div>

            <div className="p-6 border-l-4" style={{
              backgroundColor: 'var(--card)',
              borderLeftColor: 'var(--primary)'
            }}>
              <h2 className="font-medium text-xl mb-4" style={{ color: 'var(--text)' }}>Bij uw bezoek op deze dag inbegrepen:</h2>
              <ul className="space-y-2" style={{ color: 'var(--text)' }}>
                {userData.dayExtras.map((extra: string, index: number) => (
                  <li key={index}>• {extra}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm mt-4" style={{ color: 'var(--text)' }}>
              De praktische gegevens bij deze onderdelen staan in uw bevestiging.
            </p>
          </section>
        )}

        {/* Optional Preparation */}
        <section className="mb-12 pb-12 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: OPTIONELE VOORBEREIDING
          </div>

          <p style={{ color: 'var(--text)' }}>
            U kunt eventueel een foto van uw interieur meenemen.
          </p>

          <p className="text-xs mt-4 font-mono" style={{ color: 'var(--text-muted)' }}>
            Niet als opvallende "Tip!" en niet bovenaan de planner
          </p>
        </section>

        {/* CTA */}
        <section className="mb-12 text-center">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            SECTIE: CTA
          </div>

          <button
            onClick={() => {/* Placeholder - ICS export functionaliteit */}}
            className="btn-secondary"
          >
            Voeg toe aan agenda
          </button>

          <p className="text-sm mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
            Intern: Besluit nodig: CTA "Voeg toe aan agenda" en eventuele .ics-oplossing
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
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden na bevestiging:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Pop-up</li>
                <li>✗ Reviewverzoek</li>
                <li>✗ Nieuwsbrief</li>
                <li>✗ "Bekijk ook"</li>
                <li>✗ Nieuwe werken</li>
                <li>✗ Partneroverzicht</li>
                <li>✗ Commerciële opvolging</li>
                <li>✗ Extra aanbiedingen</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden bij extras:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Belevingspakketinformatie</li>
                <li>✗ Waardestapels</li>
                <li>✗ Bedragen bij extras</li>
                <li>✗ t.w.v.</li>
                <li>✗ "Details volgen na reservering"</li>
                <li>✗ Cadeau-iconen</li>
                <li>✗ "Meeste voordeel"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Open besluiten op dit scherm:</h4>
            <ul className="text-sm space-y-1" style={{ color: 'var(--text)' }}>
              <li>• Intern: Besluit nodig: exacte partnernaam autowasbeurt</li>
              <li>• Intern: Besluit nodig: exacte partnernaam koffie/thee met gebak</li>
              <li>• Intern: Besluit nodig: exacte partnernaam wellness</li>
              <li>• Intern: Besluit nodig: voorwaarden per extra</li>
              <li>• Intern: Besluit nodig: geldigheid per extra</li>
              <li>• Intern: Besluit nodig: praktische instructie per extra</li>
              <li>• Intern: Besluit nodig: of afstanden naar extra-partners publiek nodig zijn</li>
            </ul>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-success) 10%, var(--background))',
            borderColor: 'var(--state-success)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-success)' }}>Kritieke regel (Wet 7):</h4>
            <p className="text-sm" style={{ color: 'var(--state-success)' }}>
              <strong>Na aankoop geldt stilte.</strong> Er wordt geen commerciële opvolging gestart.
              Geen aftercare-mail, geen nieuwsbrief, geen reviewverzoek per e-mail.
              Uitsluitend functionele servicecommunicatie bij vraag van de klant.
              Het werk aan de muur doet het retentiewerk.
            </p>
          </div>
        </div>
      </div>

      {/* Praktische gegevens blok - Internal Reference */}
      <div className="border-t-4 px-4 sm:px-6 py-8" style={{
        backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
        borderColor: 'var(--state-info)'
      }}>
        <div className="site-container-narrow">
          <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--state-info)' }}>
            REFERENTIE: PRAKTISCHE GEGEVENS BIJ EXTRAS (in bevestigingsmail, niet in planner)
          </h3>

          <div className="text-sm space-y-3" style={{ color: 'var(--state-info)' }}>
            <p className="font-medium">Praktische gegevens bij inbegrepen onderdelen:</p>
            <ul className="space-y-2 ml-4">
              <li>• Autowasbeurt bij [partnernaam]: [adres / instructie — besluit nodig]</li>
              <li>• Koffie of thee met gebak bij [partnernaam]: [adres / instructie — besluit nodig]</li>
              <li>• Wellness bij [partnernaam]: [adres / instructie — besluit nodig]</li>
              <li>• Kleine attentie in de galerie</li>
            </ul>

            <p className="font-medium mt-4">Belangrijk:</p>
            <p>
              Lange beschrijvingen van extras niet in plannerstappen.<br />
              In de vier plannerstappen alleen: naam extra, partnernaam, korte praktische regel.<br />
              Geen bedragen, geen verkooptekst, geen afstanden als dagplanning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
