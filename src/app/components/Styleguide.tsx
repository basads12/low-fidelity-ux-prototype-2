import { Screen } from '../App';

interface StyleguideProps {
  onNavigate: (screen: Screen) => void;
}

export function Styleguide({ onNavigate }: StyleguideProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Internal marker */}
      <div className="bg-destructive text-white py-2 px-4 text-xs font-mono">
        INTERN: STYLEGUIDE V2.0 — VISUELE CONTROLE THEME TOKENS
      </div>

      {/* Main container */}
      <div className="site-container-narrow space-y-12 py-12 md:space-y-16 md:py-16">

        {/* Header */}
        <header className="border-b-2 pb-8" style={{ borderColor: 'var(--border)' }}>
          <h1 className="text-4xl font-medium mb-2" style={{ color: 'var(--foreground)' }}>
            Styleguide v2.0
          </h1>
          <p className="text-base" style={{ color: 'var(--muted-foreground)' }}>
            Interne visuele controle — De Kunst van Kunst
          </p>
        </header>

        {/* 1. Kleurenpalet */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            1. Kleurenpalet
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Primary / Bordeaux */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --primary
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #6F172F
              </p>
            </div>

            {/* Ring / Ochre */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--ring)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --ring / ochre
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #DB9A4A
              </p>
            </div>

            {/* Foreground / Ink */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--foreground)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --foreground / ink
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #221E1F
              </p>
            </div>

            {/* Background / Page */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md border"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'var(--border)'
                }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --background / page
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #FAF8F5
              </p>
            </div>

            {/* Card */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --card
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #FFFFFF
              </p>
            </div>

            {/* Muted */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--muted)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --muted
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #F5EFE6
              </p>
            </div>

            {/* Border */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--border)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --border
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #E6E1D9
              </p>
            </div>

            {/* Destructive */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--destructive)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --destructive
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #8A2A2A
              </p>
            </div>

            {/* Muted foreground */}
            <div>
              <div
                className="w-full aspect-square mb-3 rounded-md"
                style={{ backgroundColor: 'var(--muted-foreground)' }}
              />
              <p className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>
                --muted-foreground
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                #5A544F
              </p>
            </div>
          </div>
        </section>

        {/* 2. Typografie */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            2. Typografie
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-display
              </span>
              <p className="text-display" style={{ color: 'var(--foreground)' }}>
                Welkom, [voornaam]
              </p>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-h1
              </span>
              <h1 style={{ color: 'var(--foreground)' }}>
                Schermtitel
              </h1>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-h2
              </span>
              <h2 style={{ color: 'var(--foreground)' }}>
                Sectiekop
              </h2>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-h3
              </span>
              <h3 style={{ color: 'var(--foreground)' }}>
                Blokkop
              </h3>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-body
              </span>
              <p style={{ color: 'var(--foreground)' }}>
                Dit is lopende tekst. Hij moet rustig en goed leesbaar zijn op een papierachtige achtergrond, ook voor lezers van 55 jaar en ouder.
              </p>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-body-sm
              </span>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Metadata of helptekst.
              </p>
            </div>

            <div className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-label
              </span>
              <label className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                Veld-label
              </label>
            </div>

            <div className="flex gap-6 items-baseline">
              <span className="text-xs font-mono w-32 flex-shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                --text-caption
              </span>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                Footer-fijntekst of dev-label
              </p>
            </div>
          </div>
        </section>

        {/* 3. Knoppen */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            3. Knoppen
          </h2>

          <div className="space-y-8">
            {/* Primaire CTA */}
            <div>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                Primaire CTA
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-primary">
                  Plan uw bezoek
                </button>
                <button className="btn-primary opacity-90">
                  Hover
                </button>
                <button
                  className="btn-primary"
                  style={{ outline: '2px solid var(--ring)', outlineOffset: '2px' }}
                >
                  Focus
                </button>
                <button className="btn-primary" disabled>
                  Disabled
                </button>
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--muted-foreground)' }}>
                Default / Hover / Focus (oker outline 2px offset) / Disabled (40% opacity)
              </p>
            </div>

            {/* Secundaire CTA */}
            <div>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                Secundaire CTA
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-secondary">
                  Meer over de galerie
                </button>
                <button
                  className="btn-secondary"
                  style={{ borderColor: 'var(--foreground)' }}
                >
                  Hover
                </button>
                <button
                  className="btn-secondary"
                  style={{ outline: '2px solid var(--ring)', outlineOffset: '2px' }}
                >
                  Focus
                </button>
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--muted-foreground)' }}>
                Default / Hover (donkere border) / Focus (oker outline)
              </p>
            </div>

            {/* Tertiair / Link */}
            <div>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                Tertiair / Link
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="underline" style={{ color: 'var(--foreground)' }}>
                  Cheque overdragen
                </button>
                <button className="underline" style={{ color: 'var(--primary)' }}>
                  Hover
                </button>
                <button
                  className="underline"
                  style={{
                    color: 'var(--foreground)',
                    outline: '2px solid var(--ring)',
                    outlineOffset: '2px'
                  }}
                >
                  Focus
                </button>
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--muted-foreground)' }}>
                Default / Hover (bordeaux) / Focus (oker outline)
              </p>
            </div>
          </div>
        </section>

        {/* 4. Formulier-velden */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            4. Formulier-velden
          </h2>

          <div className="card p-6 md:p-8 space-y-6">
            {/* Default state */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                Naam
              </label>
              <input
                type="text"
                placeholder="Uw naam"
                className="input w-full"
              />
            </div>

            {/* Focus state */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                E-mailadres
              </label>
              <input
                type="email"
                value="naam@voorbeeld.nl"
                className="input w-full"
                aria-label="Voorbeeld e-mailadres"
                placeholder="naam@voorbeeld.nl"
                style={{
                  borderColor: 'var(--primary)',
                  borderWidth: '1.5px',
                  outline: '2px solid var(--ring)',
                  outlineOffset: '2px'
                }}
                readOnly
              />
              <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
                ↑ Focus-state: bordeaux border 1.5px + oker outline
              </p>
            </div>

            {/* Error state */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                Chequenummer
              </label>
              <input
                type="text"
                className="input w-full error"
                aria-label="Voorbeeld chequenummer"
                placeholder="Bijvoorbeeld: 12345688"
              />
              <p className="text-sm mt-2" style={{ color: 'var(--destructive)' }}>
                Dit chequenummer is niet herkend. Controleer het nummer of bel ons op 074-2914857 (ma t/m vr 12:00–16:00).
              </p>
            </div>
          </div>
        </section>

        {/* 5. Cheque visualisatie */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            5. Cheque visualisatie
          </h2>

          <div className="max-w-md">
            <div className="cheque-card">
              <p
                className="text-xs mb-4"
                style={{
                  color: 'var(--muted-foreground)',
                  fontFamily: 'JetBrains Mono, monospace'
                }}
              >
                DKVK-0000-0000
              </p>
              <p className="text-display mb-2" style={{ color: 'var(--foreground)' }}>
                [Voornaam Achternaam]
              </p>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Geldig tot [datum]
              </p>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--muted-foreground)' }}>
              Smal okerlijntje boven, radius 6px, geen € 500 als claim
            </p>
          </div>
        </section>

        {/* 6. Review fragment */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            6. Review fragment
          </h2>

          <div className="max-w-2xl">
            <div
              className="p-6 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <p className="italic mb-3" style={{ color: 'var(--foreground)', fontSize: '16px', lineHeight: '26px' }}>
                "Placeholder: rustig reviewfragment van één tot twee zinnen. Goede variatie aan werken, voor ieder wat wils."
              </p>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                [Voornaam], [Woonplaats] — [Datum]
              </p>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--muted-foreground)' }}>
              Geen sterren, geen score, geen percentage
            </p>
          </div>
        </section>

        {/* 7. Foutmelding */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            7. Foutmelding
          </h2>

          <div
            className="p-4 border-l-4 max-w-2xl"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--destructive)'
            }}
          >
            <p className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>
              Deze cheque is niet herkend
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)' }}>
              Controleer het chequenummer en de postcode. Komt u er niet uit?
            </p>
            <p className="text-sm flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <span>📞</span>
              <span className="font-medium">074-2914857 (ma t/m vr 12:00–16:00)</span>
            </p>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--muted-foreground)' }}>
            Feitelijk en niet-beschuldigend, met zichtbaar telefoonnummer
          </p>
        </section>

        {/* 8. Footer */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            8. Footer-blok
          </h2>

          <div
            className="p-8 -mx-4 sm:mx-0"
            style={{ backgroundColor: 'var(--card)' }}
          >
            <div className="max-w-3xl grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Galerie De Kunst van Kunst
                </p>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Geerdinksweg 2
                </p>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  7555 DM Hengelo (OV)
                </p>
                <p className="text-sm mt-3" style={{ color: 'var(--muted-foreground)' }}>
                  074-2914857 (ma t/m vr 12:00–16:00)
                </p>
              </div>
              <div>
                <p className="font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Informatie
                </p>
                <div className="space-y-2">
                  <button className="block text-sm underline" style={{ color: 'var(--muted-foreground)' }}>
                    Voorwaarden
                  </button>
                  <button className="block text-sm underline" style={{ color: 'var(--muted-foreground)' }}>
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--muted-foreground)' }}>
            Geen nieuwsbrief, geen partnerlogo's, geen social-iconen
          </p>
        </section>

        {/* 9. QA Checklist */}
        <section>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--foreground)' }}>
            9. QA Checklist (16 punten)
          </h2>

          <div
            className="p-6 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Eén primaire CTA per scherm, in bordeaux, label uit toegestane lijst</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Pagina-achtergrond is surface-page of surface-card, niet bordeaux of oker</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Oker komt nergens voor als groot vulvlak</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Geen serif of script-display-font in koppen</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Body-tekst minimaal 16px op mobile</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Maximale regelbreedte body ≈ 65–72 tekens</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Geen stockfoto's, geen GIF, geen autoplay</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Geen badges, countdown, urgency-elementen</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Geen partnerlogomuur</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Welkomstscherm vóór planner aanwezig</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Planner heeft exact 4 stappen, geselecteerde state niet bordeaux-gevuld</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>€ 500 nergens als hero/claim, alleen functioneel klein</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Adres + telefoon zichtbaar in footer; geen nieuwsbrief</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Foutmeldingen rustig, inline, met telefoonnummer</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Focus-state zichtbaar (oker outline 2px met offset 2px)</span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--foreground)' }}>Alle "Besluit nodig"-labels uit de bron staan nog steeds, niet ingevuld</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <footer className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
            Styleguide v2.0 — Interne visuele controle — Alleen tokens uit theme-v2.css — Inter font
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => onNavigate('homepage')}
              className="text-sm underline"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Terug naar homepage
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}
