import { useState } from 'react';
import { Screen } from '../App';

interface PlannerDetailsProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  userData: any;
}

export function PlannerDetails({ onNavigate, updateData, userData }: PlannerDetailsProps) {
  const [name, setName] = useState(userData.firstName ? `${userData.firstName} de Vries` : '');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateData({ name, email, phone });
    onNavigate('planner-confirmation');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="site-container-narrow py-8 md:py-12">

        {/* Selection Summary */}
        <div className="card mb-8 border border-l-4 border-l-brand-ochre p-4" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <div className="grid md:grid-cols-2 gap-4 text-sm" style={{ color: 'var(--text)' }}>
            <div>
              <strong>Dag:</strong> {userData.selectedDay || 'Dinsdag 5 mei 2026'}
            </div>
            <div>
              <strong>Tijd:</strong> {userData.selectedTime || '10:00 - 11:30'}
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <section className="mb-12">
          <h1 className="mb-3 text-3xl font-medium text-primary md:text-4xl">
            Uw gegevens
          </h1>
          <p className="text-lg mb-10" style={{ color: 'var(--text)' }}>
            Vul uw gegevens in voor de persoonlijke ontvangst in de galerie.
          </p>

          <form onSubmit={handleSubmit} className="card space-y-6 border border-border bg-card p-6 md:p-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                Naam <span style={{ color: 'var(--destructive)' }}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Bijvoorbeeld: Jan de Vries"
                className="input w-full px-4 py-3"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text)',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                E-mailadres <span style={{ color: 'var(--destructive)' }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Bijvoorbeeld: jan@voorbeeld.nl"
                className="input w-full px-4 py-3"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text)',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                Telefoonnummer <span style={{ color: 'var(--destructive)' }}>*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Bijvoorbeeld: 06 12345678"
                className="input w-full px-4 py-3"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text)',
                  fontSize: '16px'
                }}
                required
              />
            </div>

            {/* Privacy Notice */}
            <div className="rounded-md border border-l-4 border-l-brand-ochre p-4 text-sm" style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}>
              <p style={{ color: 'var(--text)' }}>
                Uw gegevens gebruiken wij voor het bevestigen en uitvoeren van uw bezoek aan de galerie. Afmelden voor partnercommunicatie kan via www.vanons-vooru.nl.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t-2" style={{ borderColor: 'var(--border)' }}>
              <button
                type="submit"
                className="btn-primary"
              >
                Maak een afspraak
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}
