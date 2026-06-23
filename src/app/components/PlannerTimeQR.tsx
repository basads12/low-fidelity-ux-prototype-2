import { useState } from 'react';
import { Screen } from '../App';

interface PlannerTimeQRProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  userData: any;
}

export function PlannerTimeQR({ onNavigate, updateData, userData }: PlannerTimeQRProps) {
  const [selectedTime, setSelectedTime] = useState(userData.selectedTime || '');

  // Get times from userData (passed from step 1)
  const availableTimes = userData.availableTimes || [];
  const timeSlots = availableTimes.map((time: string) => ({ time, display: time }));

  const handleContinue = () => {
    if (selectedTime) {
      updateData({ selectedTime });
      onNavigate('planner-details-qr');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: PLANNER STAP 2 - TIJD KIEZEN
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-8">

        {/* Selected Day Context */}
        <div className="mb-8 card p-4 border" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
            GEKOZEN DAG
          </div>
          <p className="font-medium text-lg" style={{ color: 'var(--text)' }}>{userData.selectedDay || 'Maandag 4 mei 2026'}</p>
        </div>

        {/* Extras Context - Klein */}
        {userData.dayExtras && userData.dayExtras.length > 0 && (
          <div className="mb-8 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderLeftColor: 'var(--primary)'
          }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
              BIJ UW BEZOEK OP DEZE DAG INBEGREPEN
            </div>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--text)' }}>
              {userData.dayExtras.map((extra: string, index: number) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
            <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
              Extras alleen als samenvatting - niet als keuzecriterium
            </p>
          </div>
        )}

        {/* Main Section */}
        <section className="mb-12">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            PLANNER STAP 2: TIJD KIEZEN
          </div>

          <h1 className="text-4xl font-medium mb-3" style={{ color: 'var(--text)' }}>Kies een tijd</h1>
          <p className="text-lg mb-10" style={{ color: 'var(--text)' }}>
            Selecteer een tijd die u past. Gemiddelde duur van het bezoek is 60–90 minuten.
          </p>

          {/* Mobile: Horizontal Scrollable Time Rail */}
          <div className="sm:hidden my-10">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-3 pb-2">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.time}
                    onClick={() => setSelectedTime(slot.time)}
                    className="flex-shrink-0 px-6 py-4 border-2 text-center cursor-pointer transition-all"
                    style={{
                      borderColor: selectedTime === slot.time ? 'var(--brand-ink)' : 'var(--border)',
                      backgroundColor: selectedTime === slot.time ? 'var(--brand-ink)' : 'var(--card)',
                      color: selectedTime === slot.time ? 'white' : 'var(--text)',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="font-medium text-lg">{slot.display}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
              Intern: mobiel horizontaal scrollbaar
            </p>

            {/* Selected Time Display */}
            {selectedTime && (
              <div className="mt-6 card p-4 border" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  GEKOZEN TIJD
                </div>
                <p className="font-medium text-lg" style={{ color: 'var(--text)' }}>{selectedTime}</p>
              </div>
            )}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden sm:grid md:grid-cols-2 gap-4 mb-10">
            {timeSlots.map((slot) => (
              <div
                key={slot.time}
                onClick={() => setSelectedTime(slot.time)}
                className="border-2 p-6 cursor-pointer text-center transition-all"
                style={{
                  borderColor: selectedTime === slot.time ? 'var(--brand-ink)' : 'var(--border)',
                  backgroundColor: selectedTime === slot.time ? 'var(--muted)' : 'var(--card)',
                  borderRadius: '8px',
                  color: 'var(--text)'
                }}
              >
                <div className="font-medium text-xl mb-2">{slot.display}</div>
                {selectedTime === slot.time && (
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>✓ Geselecteerd</div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs font-mono mb-8" style={{ color: 'var(--text-muted)' }}>
            [DUMMYDATA: tijdsloten voor geselecteerde datum uit stap 1]
          </p>

          {/* Continue Button */}
          <div className="pt-8 border-t-2" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={handleContinue}
              disabled={!selectedTime}
              className={`px-10 py-4 text-lg font-medium transition-colors ${
                selectedTime ? 'btn-primary' : ''
              }`}
              style={!selectedTime ? {
                backgroundColor: 'var(--card)',
                color: 'var(--text-muted)',
                cursor: 'not-allowed',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                borderRadius: '8px'
              } : {}}
            >
              Verder
            </button>

            <p className="text-sm mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
              Intern: Besluit nodig: exacte CTA plannerscherm 2
            </p>
          </div>
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
                <li>✗ Pakketinformatie</li>
                <li>✗ Bedragen bij extras</li>
                <li>✗ Cadeau-iconen</li>
                <li>✗ "Meeste voordeel"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden taal:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Urgency ("nog 1 plek")</li>
                <li>✗ "Populaire tijd"</li>
                <li>✗ Countdown</li>
                <li>✗ Badge</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Belangrijk:</h4>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              De extras zijn hier alleen een samenvatting van de gekozen dag.<br />
              De gebruiker kiest hier alleen een tijd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
