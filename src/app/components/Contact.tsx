import { useState } from 'react';
import { Screen } from '../App';
import logo from '../../imports/logo_sinds_2005.png';

interface ContactProps {
  onNavigate: (screen: Screen) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In productie: verstuur naar info@dekunstvankunst.nl
    console.log('Formulier verzonden:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="site-container py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Galerie De Kunst van Kunst - Sinds 2005" className="h-12 md:h-14" />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="site-container py-12 md:py-16">

        {/* Header / Intro */}
        <section className="mb-12 md:mb-16">
          <div className="mb-4 text-xs font-mono uppercase tracking-wide [color:var(--text-muted)]">
            CONTACT
          </div>

          <h1 className="mb-6 text-4xl font-medium text-primary md:text-5xl">
            Contact
          </h1>

          <p className="mb-4 max-w-3xl text-xl text-foreground">
            Heeft u een vraag over uw afspraak, uw Kunst-Waardecheque of uw bezoek aan de galerie? Neem gerust contact met ons op.
          </p>

          <p className="max-w-3xl text-lg text-foreground">
            Veel voorkomende vragen vindt u ook in onze{' '}
            <button
              onClick={() => onNavigate('faq')}
              className="text-foreground underline hover:opacity-80"
            >
              veelgestelde vragen
            </button>.
          </p>
        </section>

        {/* Two Column Layout: Formulier + Contactgegevens */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">

          {/* Contactformulier */}
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="card space-y-6 border border-border bg-card p-6 md:p-8">
                {/* Naam */}
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                    Naam <span style={{ color: 'var(--destructive)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    required
                    className="input w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* E-mailadres */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                    E-mailadres <span style={{ color: 'var(--destructive)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* Telefoonnummer */}
                <div>
                  <label htmlFor="telefoon" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="input w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* Onderwerp */}
                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                    Onderwerp <span style={{ color: 'var(--destructive)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="onderwerp"
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleChange}
                    required
                    className="input w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* Bericht */}
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
                    Bericht <span style={{ color: 'var(--destructive)' }}>*</span>
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input w-full px-4 py-3 resize-y"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Verstuur bericht
                  </button>
                </div>

                <p className="text-xs font-mono mt-4" style={{ color: 'var(--text-muted)' }}>
                  [DUMMYDATA: formulier verstuurt naar info@dekunstvankunst.nl]
                </p>
              </form>
            ) : (
              <div className="card border-l-4 border-l-brand-ochre bg-card p-8">
                <h3 className="text-2xl font-medium mb-4" style={{ color: 'var(--text)' }}>
                  Bedankt voor uw bericht
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--text)' }}>
                  Wij hebben uw bericht ontvangen en nemen zo spoedig mogelijk contact met u op.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="underline hover:opacity-80"
                  style={{ color: 'var(--text)' }}
                >
                  Nog een bericht versturen
                </button>
              </div>
            )}
          </div>

          {/* Contactgegevens */}
          <div className="lg:col-span-1">
            <div className="card border p-6" style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              borderRadius: '12px'
            }}>
              <h3 className="font-medium text-xl mb-6" style={{ color: 'var(--text)' }}>
                Galerie De Kunst van Kunst
              </h3>

              <div className="space-y-6" style={{ color: 'var(--text)' }}>
                <div>
                  <p className="font-medium mb-1">Adres</p>
                  <p>Geerdinksweg 2</p>
                  <p>7555 DM Hengelo (OV)</p>
                </div>

                <div>
                  <p className="font-medium mb-1">Telefoon</p>
                  <p>074-2914857 (ma t/m vr 12:00–16:00)</p>
                </div>

                <div>
                  <p className="font-medium mb-1">E-mail</p>
                  <p>info@dekunstvankunst.nl</p>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="font-medium mb-2">Praktisch</p>
                  <p className="text-sm">Bezoek uitsluitend op afspraak.</p>
                  <p className="text-sm mt-2">Parkeren kan zonder kosten voor de deur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t-2" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-wrap gap-8" style={{ color: 'var(--text)' }}>
            <button
              onClick={() => onNavigate('homepage')}
              className="underline hover:opacity-80"
            >
              Terug naar homepage
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="underline hover:opacity-80"
            >
              Veelgestelde vragen
            </button>
          </div>
        </footer>

      </div>

    </div>
  );
}
