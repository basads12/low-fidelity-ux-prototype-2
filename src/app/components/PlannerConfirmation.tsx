import { Screen } from '../App';

interface PlannerConfirmationProps {
  onNavigate: (screen: Screen) => void;
  userData: any;
}

export function PlannerConfirmation({ onNavigate, userData }: PlannerConfirmationProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="site-container-narrow py-8 md:py-12">

        {/* Main Section */}
        <section className="mb-12">
          <h1 className="mb-10 text-3xl font-medium text-primary md:text-4xl">
            Uw afspraak is bevestigd.
          </h1>

          {/* Appointment Details */}
          <div className="space-y-6 mb-10">
            {/* Date & Time */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="font-medium text-2xl mb-1" style={{ color: 'var(--text)' }}>
                {userData.selectedDay || 'Dinsdag 5 mei 2026'}
              </div>
              <div className="text-lg" style={{ color: 'var(--text)' }}>
                {userData.selectedTime || '10:00 - 11:30'}
              </div>
            </div>

            {/* Location */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="font-medium text-lg" style={{ color: 'var(--text)' }}>
                Galerie De Kunst van Kunst
              </div>
              <div style={{ color: 'var(--text)' }}>Geerdinksweg 2</div>
              <div style={{ color: 'var(--text)' }}>7555 DM Hengelo (OV)</div>
            </div>

            {/* Parking */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div style={{ color: 'var(--text)' }}>Parkeren zonder kosten voor de deur</div>
            </div>

            {/* Duration */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div style={{ color: 'var(--text)' }}>Gemiddelde duur: 60 tot 90 minuten</div>
            </div>

            {/* Cheque Details - NOT AS HERO */}
            <div className="card border border-l-4 border-l-brand-ochre p-6" style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              borderRadius: '12px'
            }}>
              <div className="space-y-3 text-sm" style={{ color: 'var(--text)' }}>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Chequenummer:</span>
                  <span className="font-tabular">{userData.chequeNumber || 'KWC-2024-12345'}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Waarde:</span>
                  <span className="cheque-amount">€ 500,—</span>
                </div>
              </div>
            </div>

            {/* Practical Info */}
            <div className="pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <ul className="space-y-2" style={{ color: 'var(--text)' }}>
                <li>• Persoonlijke ontvangst</li>
                <li>• Koffie of thee aangeboden</li>
              </ul>
            </div>

            {/* Optional Day-Specific Extras */}
            {userData.dayExtras && userData.dayExtras.length > 0 && (
              <div className="card border-l-4 border-l-brand-ochre p-6" style={{
                backgroundColor: 'var(--card)',
                borderLeftColor: 'var(--primary)'
              }}>
                <ul className="space-y-1" style={{ color: 'var(--text)' }}>
                  {userData.dayExtras.map((extra: string, index: number) => (
                    <li key={index}>• {extra}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="card mb-10 border border-l-4 border-l-brand-ochre p-6" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <div className="font-medium text-lg" style={{ color: 'var(--text)' }}>Vragen? Bel 074-2914857 (ma t/m vr 12:00–16:00)</div>
          </div>

          {/* Navigation */}
          <div className="pt-8 border-t-2 text-center" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => onNavigate('homepage')}
              className="underline text-lg"
              style={{ color: 'var(--text)' }}
            >
              Terug naar homepage
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
