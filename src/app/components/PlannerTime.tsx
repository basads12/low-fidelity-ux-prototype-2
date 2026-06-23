import { useState } from 'react';
import { Screen } from '../App';

interface PlannerTimeProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  userData: any;
}

export function PlannerTime({ onNavigate, updateData, userData }: PlannerTimeProps) {
  const [selectedTime, setSelectedTime] = useState(userData.selectedTime || '');

  // Get times from userData (passed from step 1)
  const availableTimes = userData.availableTimes || [];
  const timeSlots = availableTimes.map((time: string) => ({ time, display: time }));

  const handleContinue = () => {
    if (selectedTime) {
      updateData({ selectedTime });
      onNavigate('planner-details');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="site-container-narrow py-8">

        {/* Selected Day Context */}
        <div className="card mb-8 border border-l-4 border-l-brand-ochre p-4" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <p className="font-medium text-lg" style={{ color: 'var(--text)' }}>{userData.selectedDay || 'Maandag 4 mei 2026'}</p>
        </div>

        {/* Extras Context - Klein */}
        {userData.dayExtras && userData.dayExtras.length > 0 && (
          <div className="card mb-8 border-l-4 border-l-brand-ochre p-4" style={{
            backgroundColor: 'var(--card)',
            borderLeftColor: 'var(--primary)'
          }}>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--text)' }}>
              {userData.dayExtras.map((extra: string, index: number) => (
                <li key={index}>• {extra}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Section */}
        <section className="mb-12">
          <h1 className="mb-3 text-4xl font-medium text-primary">Kies een tijd</h1>
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
                      borderColor: selectedTime === slot.time ? 'var(--primary)' : 'var(--border)',
                      backgroundColor: selectedTime === slot.time ? 'var(--primary)' : 'var(--card)',
                      color: selectedTime === slot.time ? 'white' : 'var(--text)',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="font-medium text-lg">{slot.display}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Time Display */}
            {selectedTime && (
              <div className="card mt-6 border border-l-4 border-l-brand-ochre p-4" style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '12px'
              }}>
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
                  borderColor: selectedTime === slot.time ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: selectedTime === slot.time ? 'color-mix(in srgb, var(--primary) 10%, var(--card))' : 'var(--card)',
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
                border: '1px solid var(--border)',
                cursor: 'not-allowed',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                borderRadius: '8px'
              } : {}}
            >
              Kies uw bezoekmoment
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
