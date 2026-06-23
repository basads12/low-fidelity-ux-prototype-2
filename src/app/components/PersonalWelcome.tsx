import { Screen } from '../App';
import logo from '../../imports/logo_sinds_2005.png';

interface PersonalWelcomeProps {
  onNavigate: (screen: Screen) => void;
  userData: any;
}

export function PersonalWelcome({ onNavigate, userData }: PersonalWelcomeProps) {
  const partnerName = userData.partner || 'Partner op cheque';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="site-container-narrow py-6">
          <img src={logo} alt="Galerie De Kunst van Kunst - Sinds 2005" className="h-12 md:h-14" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-12 md:py-16">

        {/* Hero / Recognition */}
        <section className="mb-10 md:mb-12 text-center">
          <h1 className="mb-2 text-primary">
            Welkom. Uw cheque is herkend.
          </h1>
        </section>

        {/* Partner Block */}
        <section aria-label={`Kunst-Waardecheque uitgegeven door ${partnerName}`} className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] [color:var(--brand-ochre)]">
            Uitgegeven door
          </p>
          <div className="inline-flex items-center bg-card p-4">
            <span className="text-xl md:text-2xl font-medium [color:var(--text)]">{partnerName}</span>
          </div>
        </section>

        {/* Cheque and Customer Data */}
        <section className="mb-10 space-y-8">
          <div className="space-y-4 bg-card p-6">
            <div className="text-xs uppercase tracking-wide [color:var(--text-muted)]">Chequegegevens</div>
            <div className="grid gap-3 text-sm md:text-base">
              <p><span className="font-medium [color:var(--text-muted)]">Chequenummer: </span><span className="font-tabular [color:var(--text)]">{userData.chequeNumber || '[chequenummer]'}</span></p>
              <p><span className="font-medium [color:var(--text-muted)]">Bedrag: </span><span className="[color:var(--text)]">€ 500,—</span></p>
              <p><span className="font-medium [color:var(--text-muted)]">Geldig tot: </span><span className="font-tabular [color:var(--text)]">31 juli 2026</span></p>
              <p><span className="font-medium [color:var(--text-muted)]">Status: </span><span className="[color:var(--text)]">Beschikbaar</span></p>
            </div>
          </div>

          <div className="space-y-4 bg-card p-6">
            <div className="text-xs uppercase tracking-wide [color:var(--text-muted)]">Klantgegevens</div>
            <div className="grid gap-3 text-sm md:text-base">
              <p><span className="font-medium [color:var(--text-muted)]">Naam: </span><span className="[color:var(--text)]">{userData.name || `${userData.firstName || '[voornaam]'} [achternaam]`}</span></p>
              <p><span className="font-medium [color:var(--text-muted)]">Adres: </span><span className="[color:var(--text)]">{userData.address || 'Geerdinksweg 2, 7555 DM Hengelo (OV)'}</span></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <button
            onClick={() => onNavigate('planner-day')}
            className="btn-primary"
          >
            Plan uw bezoek
          </button>
          <p className="mt-4 text-sm [color:var(--text-muted)]">
            Vragen? Neem contact op via 074-2914857.
          </p>
        </section>

      </div>
    </div>
  );
}
