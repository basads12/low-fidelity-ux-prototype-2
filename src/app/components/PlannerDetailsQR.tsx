import { useState } from 'react';
import { Screen } from '../App';

interface PlannerDetailsQRProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  userData: any;
}

export function PlannerDetailsQR({ onNavigate, updateData, userData }: PlannerDetailsQRProps) {
  const [name, setName] = useState(userData.name || '[naam]');
  const [email, setEmail] = useState(userData.email || '[e-mail]');
  const [phone, setPhone] = useState(userData.phone || '[telefoonnummer]');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateData({ name, email, phone });
    onNavigate('planner-confirmation-qr');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: PLANNER STAP 3 - GEGEVENS CONTROLEREN
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-8">

        {/* Selection Summary - Compact */}
        <div className="mb-8 card p-4 border" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
            AFSPRAAK
          </div>
          <p className="text-sm" style={{ color: 'var(--text)' }}>
            <strong>{userData.selectedDay || 'Maandag 4 mei 2026'}</strong> om <strong>{userData.selectedTime || '14:15'}</strong>
          </p>
        </div>

        {/* Main Form Section */}
        <section className="mb-12">
          <div className="text-xs uppercase tracking-wide mb-6 font-mono" style={{ color: 'var(--text-muted)' }}>
            PLANNER STAP 3: GEGEVENS CONTROLEREN
          </div>

          <h1 className="text-4xl font-medium mb-3" style={{ color: 'var(--text)' }}>Controleer uw gegevens</h1>
          <p className="text-lg mb-10" style={{ color: 'var(--text)' }}>
            Controleer onderstaande gegevens en pas deze aan als dat nodig is.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
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
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                [Bij persoonlijke route vooraf ingevuld waar mogelijk]
              </p>
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
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                [Bij persoonlijke route vooraf ingevuld waar mogelijk]
              </p>
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
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                [Bij persoonlijke route vooraf ingevuld waar mogelijk]
              </p>
            </div>

            {/* Chequenummer - Read-only Reference */}
            <div className="card p-4 border" style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              borderRadius: '12px'
            }}>
              <div className="text-xs uppercase tracking-wide mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                CHEQUENUMMER (niet bewerkbaar)
              </div>
              <p className="font-mono" style={{ color: 'var(--text)' }}>{userData.chequeNumber || '12345688'}</p>
            </div>

            {/* Bezoekersinformatie */}
            <div className="p-4 border-l-4" style={{
              backgroundColor: 'var(--card)',
              borderLeftColor: 'var(--primary)'
            }}>
              <p className="text-sm" style={{ color: 'var(--text)' }}>
                Maximaal twee bezoekers per cheque, vanaf 12 jaar.
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="card p-4 border text-sm" style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              borderRadius: '12px'
            }}>
              <div className="text-xs uppercase tracking-wide mb-3 font-mono" style={{ color: 'var(--text-muted)' }}>
                SECTIE: PRIVACYVERMELDING
              </div>
              <p className="mb-2" style={{ color: 'var(--text)' }}>
                Korte verwijzing naar <a href="#" className="underline">voorwaardenpagina</a>.
                Afmelding via www.vanons-vooru.nl voor partnercommunicatie.
              </p>
              <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
                Intern: Besluit nodig: volledige privacyverklaring
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t-2" style={{ borderColor: 'var(--border)' }}>
              <button
                type="submit"
                className="btn-primary"
              >
                Bevestig afspraak
              </button>

              <p className="text-sm mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
                Intern: Besluit nodig: exacte CTA plannerscherm 3
              </p>
            </div>
          </form>
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
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden velden:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ Aantal personen als definitief formulier</li>
                <li>✗ Nieuwsbrief-opt-in</li>
                <li>✗ Marketing opt-in</li>
                <li>✗ Stijlvoorkeur</li>
                <li>✗ Collectievoorkeur</li>
                <li>✗ Kunstenaarvoorkeur</li>
                <li>✗ Opmerkingenveld</li>
                <li>✗ Akkoord commerciële opvolging</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Vereiste velden:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✓ Naam</li>
                <li>✓ E-mail</li>
                <li>✓ Telefoonnummer</li>
                <li>✓ Chequenummer (alleen als referentie)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Belangrijk:</h4>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              Bij persoonlijke link-route: velden zijn vooraf ingevuld waar mogelijk, blijven aanpasbaar.<br />
              Geen uitgebreide extras hier tonen. De gebruiker moet hier alleen gegevens controleren.
            </p>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
            borderColor: 'var(--state-info)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-info)' }}>Intern aandachtspunt:</h4>
            <p className="text-sm" style={{ color: 'var(--state-info)' }}>
              Als een keuze 1/2 personen toch nodig lijkt: niet als definitieve klantinterface tonen.<br />
              Intern: Besluit nodig: aantal bezoekers als functioneel veld ja/nee; bron zegt geen extra velden buiten naam, e-mail en telefoonnummer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
