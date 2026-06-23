import React from "react";

interface AppointmentConfirmedProps {
  userData: any;
}

export function AppointmentConfirmed({ userData }: AppointmentConfirmedProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="site-container-narrow py-12">

        {/* Success Message */}
        <section className="mb-16 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'var(--brand-ink)' }}>
            <div className="text-5xl font-medium" style={{ color: 'white' }}>✓</div>
          </div>

          <h1 className="mb-6 font-medium text-primary">
            Uw afspraak is bevestigd
          </h1>

          <p className="text-xl mb-4" style={{ color: 'var(--text)' }}>
            U ontvangt binnen enkele minuten een bevestigingsmail op
          </p>
          <p className="text-xl font-medium mb-8" style={{ color: 'var(--text)' }}>
            {userData.email || 'uw e-mailadres'}
          </p>

          <div className="mt-8">
            <button
              className="btn-primary"
              onClick={() => {/* Placeholder for calendar export */}}
            >
              Voeg toe aan agenda
            </button>
          </div>
        </section>

        {/* Key Details Summary */}
        <section className="mb-16 pb-16 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <div className="card border-2 border-l-4 border-l-brand-ochre p-8" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  DAG EN TIJD
                </div>
                <div className="font-medium text-2xl mb-1" style={{ color: 'var(--text)' }}>
                  {userData.selectedDay || 'Dinsdag 5 mei 2026'}
                </div>
                <div className="text-lg" style={{ color: 'var(--text)' }}>
                  {userData.selectedTime || '10:00 - 11:30'}
                </div>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  LOCATIE
                </div>
                <div style={{ color: 'var(--text)' }}>Galerie De Kunst van Kunst</div>
                <div style={{ color: 'var(--text)' }}>Geerdinksweg 2, 7555 DM Hengelo (OV)</div>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  PRAKTISCHE INFORMATIE
                </div>
                <div style={{ color: 'var(--text)' }}>Parkeren: zonder kosten voor de deur</div>
                <div style={{ color: 'var(--text)' }}>Gemiddelde duur: 60 tot 90 minuten</div>
                <div style={{ color: 'var(--text)' }}>Bezoek uitsluitend op afspraak</div>
                <div style={{ color: 'var(--text)' }}>Maximaal twee bezoekers per cheque, vanaf 12 jaar</div>
              </div>

              {userData.chequeNumber && (
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                    CHEQUENUMMER
                  </div>
                  <div className="font-tabular" style={{ color: 'var(--text)' }}>{userData.chequeNumber}</div>
                </div>
              )}

              {/* Day-specific Extras */}
              {userData.dayExtras && userData.dayExtras.length > 0 && (
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                    BIJ UW BEZOEK OP DEZE DAG INBEGREPEN
                  </div>
                  <ul className="space-y-1" style={{ color: 'var(--text)' }}>
                    {userData.dayExtras.map((extra: string, index: number) => (
                      <li key={index}>• {extra}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  OPTIONEEL
                </div>
                <div style={{ color: 'var(--text)' }}>U kunt eventueel een foto van uw interieur meenemen</div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16 pb-16 border-b-2" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-3xl font-medium mb-8" style={{ color: 'var(--text)' }}>Wat u kunt verwachten</h2>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-lg text-primary-foreground">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--text)' }}>Bevestigingsmail</h3>
                <p style={{ color: 'var(--text)' }}>
                  Binnen enkele minuten ontvangt u een bevestiging met alle details van uw afspraak.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-lg text-primary-foreground">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--text)' }}>Persoonlijke ontvangst</h3>
                <p style={{ color: 'var(--text)' }}>
                  In de galerie wordt u persoonlijk ontvangen en begeleid bij uw keuze.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-lg text-primary-foreground">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--text)' }}>Uw schilderij en certificaat</h3>
                <p style={{ color: 'var(--text)' }}>
                  U kiest een werk dat bij u past en neemt het met certificaat mee naar huis.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="card border border-l-4 border-l-brand-ochre p-8" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: '12px'
          }}>
            <h2 className="text-2xl font-medium mb-4" style={{ color: 'var(--text)' }}>Vragen of wijzigen?</h2>

            <p className="mb-6" style={{ color: 'var(--text)' }}>
              Heeft u vragen of wilt u uw afspraak wijzigen? Neem rustig contact met ons op.
            </p>

            <div className="space-y-3" style={{ color: 'var(--text)' }}>
              <div>
                <strong>Telefoon:</strong> 074-2914857 (ma t/m vr 12:00–16:00)
              </div>
              <div>
                <strong>Adres:</strong> Geerdinksweg 2, 7555 DM Hengelo (OV)
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
