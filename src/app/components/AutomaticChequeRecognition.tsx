import { useEffect } from 'react';
import { Screen } from '../App';

interface AutomaticChequeRecognitionProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
}

export function AutomaticChequeRecognition({ onNavigate, updateData }: AutomaticChequeRecognitionProps) {
  useEffect(() => {
    // Simulate automatic cheque recognition
    const timer = setTimeout(() => {
      // [DUMMYDATA] Pre-fill from QR/link
      updateData({
        chequeNumber: '12345688',
        firstName: '[voornaam]',
        partner: 'BEDRIJF',
        name: '[naam]',
        email: '[e-mail]',
        phone: '[telefoonnummer]',
        selectedDay: 'Maandag 4 mei 2026',
        selectedTime: '14:15'
      });
      onNavigate('personal-welcome-qr');
    }, 2000);

    return () => clearTimeout(timer);
  }, [onNavigate, updateData]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: AUTOMATISCHE CHEQUEHERKENNING (persoonlijke QR/link-route)
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-24">

        {/* Loading State */}
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto" style={{
              borderColor: 'var(--muted)',
              borderTopColor: 'var(--brand-ink)'
            }}></div>
          </div>

          <p className="text-xl" style={{ color: 'var(--text)' }}>
            Een moment alstublieft. Uw cheque wordt opgehaald.
          </p>
        </div>

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
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden taal:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ "Verzilveren"</li>
                <li>✗ "Voucher"</li>
                <li>✗ "Waardebon"</li>
                <li>✗ "Geactiveerd"</li>
                <li>✗ "Gefeliciteerd"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>Verboden elementen:</h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ package_id zichtbaar</li>
                <li>✗ hash zichtbaar</li>
                <li>✗ Volledige URL zichtbaar</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--state-warning)'
          }}>
            <h4 className="font-medium mb-2">Open besluiten op dit scherm:</h4>
            <ul className="text-sm space-y-1" style={{ color: 'var(--text)' }}>
              <li>• Intern: Besluit nodig: exacte laadtekst</li>
              <li>• Intern: Besluit nodig: technische QR/link-datavelden</li>
              <li>• Intern: Besluit nodig: matchlogica voor token/hash/package_id</li>
            </ul>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
            borderColor: 'var(--state-info)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-info)' }}>Interne technische data:</h4>
            <p className="text-sm" style={{ color: 'var(--state-info)' }}>
              Intern: technische herkenningsdata uit persoonlijke link.<br />
              Intern: package_id kan intern bepalen of dag-specifieke extras van toepassing zijn.<br />
              Intern: hash/token is alleen voor herkenning en validatie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
