import { Screen } from '../App';

interface PlannerConfirmationQRProps {
  onNavigate: (screen: Screen) => void;
  userData: any;
}

export function PlannerConfirmationQR({ onNavigate, userData }: PlannerConfirmationQRProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: PLANNER STAP 4 - AFSPRAAK CONTROLEREN (met extras)
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-8">

        {/* Main Section */}
        <section className="mb-12">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            PLANNER STAP 4: AFSPRAAK CONTROLEREN
          </div>

          <h1 className="text-4xl font-medium mb-10" style={{ color: 'var(--text)' }}>Controleer uw afspraak</h1>

          {/* Appointment Details */}
          <div className="space-y-6 mb-10">
            {/* Date & Time */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                DAG EN TIJD
              </div>
              <div className="font-medium text-2xl mb-1" style={{ color: 'var(--text)' }}>
                {userData.selectedDay || 'Maandag 4 mei 2026'}
              </div>
              <div className="text-lg" style={{ color: 'var(--text)' }}>
                {userData.selectedTime || '14:15'}
              </div>
            </div>

            {/* Personal Details */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                UW GEGEVENS
              </div>
              <div className="space-y-2" style={{ color: 'var(--text)' }}>
                <div><strong>Naam:</strong> {userData.name || '[naam]'}</div>
                <div><strong>E-mail:</strong> {userData.email || '[e-mail]'}</div>
                <div><strong>Telefoonnummer:</strong> {userData.phone || '[telefoonnummer]'}</div>
              </div>
            </div>

            {/* Chequenummer */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                CHEQUENUMMER
              </div>
              <div className="font-mono" style={{ color: 'var(--text)' }}>{userData.chequeNumber || '12345688'}</div>
            </div>

            {/* Location */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                LOCATIE
              </div>
              <div className="font-medium text-lg" style={{ color: 'var(--text)' }}>Galerie De Kunst van Kunst</div>
              <div style={{ color: 'var(--text)' }}>Geerdinksweg 2</div>
              <div style={{ color: 'var(--text)' }}>7555 DM Hengelo (OV)</div>
            </div>

            {/* Practical Info */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                PRAKTISCHE INFORMATIE
              </div>
              <ul className="space-y-2" style={{ color: 'var(--text)' }}>
                <li>• Parkeren: zonder kosten voor de deur</li>
                <li>• Gemiddelde duur: 60 tot 90 minuten</li>
                <li>• Bezoek uitsluitend op afspraak</li>
                <li>• Bezoekersinformatie: maximaal twee bezoekers per cheque, vanaf 12 jaar</li>
              </ul>
            </div>
          </div>

          {/* Day-specific Extras - Separate Block */}
          {userData.dayExtras && userData.dayExtras.length > 0 && (
            <div className="mb-10 p-6 border-l-4" style={{
              backgroundColor: 'var(--card)',
              borderLeftColor: 'var(--primary)'
            }}>
              <div className="text-xs uppercase tracking-wide mb-3 font-mono" style={{ color: 'var(--text-muted)' }}>
                BIJ UW BEZOEK OP DEZE DAG INBEGREPEN
              </div>
              <ul className="space-y-2" style={{ color: 'var(--text)' }}>
                {userData.dayExtras.map((extra: string, index: number) => (
                  <li key={index}>• {extra}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Coffee/Tea - Always Available */}
          <div className="mb-10 card p-6 border" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <p style={{ color: 'var(--text)' }}>
              Tijdens uw bezoek staat koffie of thee voor u klaar.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-10 card p-6 border" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
              VRAGEN?
            </div>
            <div className="font-medium text-lg" style={{ color: 'var(--text)' }}>074-2914857 (ma t/m vr 12:00–16:00)</div>
          </div>

          {/* CTA's */}
          <div className="pt-8 border-t-2 flex gap-4" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => onNavigate('planner-day-qr')}
              className="btn-secondary"
            >
              Ga terug
            </button>

            <button
              onClick={() => onNavigate('appointment-confirmed-qr')}
              className="btn-primary"
            >
              Bevestig afspraak
            </button>
          </div>

          <p className="text-sm mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
            Intern: Besluit nodig: exacte CTA bevestigingsactie
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
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden elementen:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Belevingspakket</li>
                <li>✗ Extra cadeaus</li>
                <li>✗ t.w.v.-bedragen</li>
                <li>✗ Eurobedragen bij extras</li>
                <li>✗ "Schilderij naar keuze € 500,00" als pakketregel</li>
                <li>✗ € 500 als hero</li>
                <li>✗ "U betaalt niets"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden content:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Korting</li>
                <li>✗ Voordeel</li>
                <li>✗ "Meeste voordeel"</li>
                <li>✗ "Details volgen na reservering"</li>
                <li>✗ Reviewverzoek</li>
                <li>✗ Nieuwsbrief</li>
                <li>✗ Cross-sell</li>
                <li>✗ "Bekijk ook"</li>
                <li>✗ Partnerlogomuur</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Open besluiten:</h4>
            <ul className="text-sm space-y-1" style={{ color: 'var(--text)' }}>
              <li>• Intern: Besluit nodig: papieren cheque meenemen ja/nee</li>
              <li>• Intern: Besluit nodig: exacte partnernaam per extra</li>
              <li>• Intern: Besluit nodig: geldigheid per extra</li>
              <li>• Intern: Besluit nodig: praktische instructie per extra</li>
            </ul>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
            borderColor: 'var(--state-info)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-info)' }}>Belangrijk:</h4>
            <p className="text-sm" style={{ color: 'var(--state-info)' }}>
              Toon alleen de extras van de gekozen dag.<br />
              Als de klant vrijdag of zaterdag koos: toon alleen de extras die bij die gekozen dag horen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
