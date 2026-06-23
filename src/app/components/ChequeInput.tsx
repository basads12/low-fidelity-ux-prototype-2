import { FormEvent, useState } from 'react';
import { Screen } from '../App';

interface ChequeInputProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
}

export function ChequeInput({ onNavigate, updateData }: ChequeInputProps) {
  const [chequeNumber, setChequeNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (chequeNumber && postalCode) {
      updateData({
        chequeNumber,
        postalCode,
        firstName: 'Jan',
        partner: 'Warmtestore'
      });
      onNavigate('personal-welcome');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="site-container-narrow py-12 md:py-16">

        {/* Main Form Section */}
        <section className="mb-12 md:mb-16">
          <h1 className="mb-6 text-3xl font-medium text-primary md:text-4xl">
            Verifieer uw cheque
          </h1>

          <p className="mb-10 text-base text-foreground md:text-lg">
            Vul uw chequenummer en postcode in. Daarna herkent de website uw Kunst-Waardecheque.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--brand-cream-light)] p-6">
            {/* Chequenummer */}
            <div>
              <label className="mb-2 block text-sm font-medium [color:var(--text)]">
                Chequenummer <span style={{ color: 'var(--destructive)' }}>*</span>
              </label>
              <input
                type="text"
                value={chequeNumber}
                onChange={(e) => setChequeNumber(e.target.value)}
                placeholder="Bijvoorbeeld: KWC-2024-12345"
                className="input w-full bg-[var(--brand-cream)] px-4 py-3"
                required
              />
            </div>

            {/* Postcode */}
            <div>
              <label className="mb-2 block text-sm font-medium [color:var(--text)]">
                Postcode <span style={{ color: 'var(--destructive)' }}>*</span>
              </label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Bijvoorbeeld: 1234AB"
                className="input w-full bg-[var(--brand-cream)] px-4 py-3"
                required
              />
            </div>

            {/* Error Zone - only shown when error */}
            {error && (
              <div className="p-4 border" style={{
                backgroundColor: 'color-mix(in srgb, var(--state-destructive) 10%, var(--background))',
                borderColor: 'var(--destructive)',
                borderRadius: '8px'
              }}>
                <p style={{ color: 'var(--destructive)' }}>{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Verifieer uw cheque
              </button>
            </div>
          </form>
        </section>

        {/* Help Section */}
        <section className="card mb-12 border border-l-4 border-l-brand-ochre p-6 md:mb-16" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <p className="mb-3" style={{ color: 'var(--text)' }}>
            Lukt het niet? Neem rustig contact met ons op.
          </p>
          <p className="text-lg font-medium" style={{ color: 'var(--text)' }}>074-2914857 (ma t/m vr 12:00–16:00)</p>
        </section>

      </div>
    </div>
  );
}
