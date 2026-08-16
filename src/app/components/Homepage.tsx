import { useEffect, useState } from 'react';
import { Screen } from '../App';
import { FromChequeToVisitSection } from './FromChequeToVisitSection';
import logo from '../../imports/logo_no_sinds.png';
import heroMobileImage from '../../imports/hero-mobile.png';
import heroDesktopImage from '../../imports/hero-desktop.png';
import galerieHengeloPoster from '../../imports/galerie-hengelo-web-poster.jpg';
import jcfBusinessFriend from '../../imports/jcf-business-friend-cutout.png';
import headerAfspraakKunstwerk from '../../imports/header-afspraak-kunstwerk-96.webp';
import { KunstwisselFiguur } from './KunstwisselFiguur';
import voorwaardenPdf from '../../imports/Algemene_Voorwaarden_Galerie_De_Kunst_van_Kunst.pdf';
import privacyPdf from '../../imports/Privacyverklaring_Galerie_De_Kunst_van_Kunst_2026-04-26.pdf';

// The gallery video is a large binary kept out of git. It lives in public/ so the
// bundler never has to resolve it — the build succeeds whether or not the file is
// present, and the <video> falls back to its poster when it is missing.
const GALERIE_HENGELO_VIDEO_SRC = '/media/galerie-hengelo-master.mp4';

interface HomepageProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  onVerificationSuccess: (data: any) => void;
}

type VerificationData = {
  chequeNumber: string;
  postalCode: string;
  firstName: string;
  partner: string;
  name: string;
  email: string;
  phone: string;
};

const PAGE_RAIL = "site-container";

export function Homepage({ onNavigate, updateData, onVerificationSuccess }: HomepageProps) {
  const [showVoorwaarden, setShowVoorwaarden] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [chequeNumber, setChequeNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const normalizeCheque = (value: string) => value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  const normalizePostalCode = (value: string) => value.trim().toUpperCase().replace(/\s+/g, '');

  const isValidPostcode = (value: string) => /^[0-9]{4}[A-Z]{2}$/.test(normalizePostalCode(value));

  const buildVerificationData = (cheque: string, postcode: string): VerificationData => {
    const normalizedCheque = normalizeCheque(cheque);
    const normalizedPostcode = normalizePostalCode(postcode);

    const knownCheques: Record<string, VerificationData> = {
      KWC202412345: {
        chequeNumber: 'KWC-2024-12345',
        postalCode: '7555 DM',
        firstName: 'Sophie',
        partner: 'Warmtestore',
        name: 'Sophie Meijer',
        email: 'sophie@example.nl',
        phone: '06 12345678'
      },
      '12345688': {
        chequeNumber: '12345688',
        postalCode: '7555 DM',
        firstName: 'Mark',
        partner: 'Warmtestore',
        name: 'Mark Jansen',
        email: 'mark@example.nl',
        phone: '06 23456789'
      }
    };

    if (knownCheques[normalizedCheque]) {
      return knownCheques[normalizedCheque];
    }

    return {
      chequeNumber: normalizedCheque || cheque,
      postalCode: `${normalizedPostcode.slice(0, 4)} ${normalizedPostcode.slice(4)}`.trim(),
      firstName: '[voornaam]',
      partner: 'Partner op cheque',
      name: '[naam]',
      email: '[e-mail]',
      phone: '[telefoonnummer]'
    };
  };

  const runVerification = (rawCheque: string, rawPostalCode: string, isAutomatic: boolean) => {
    const normalizedCheque = normalizeCheque(rawCheque);
    const normalizedPostcode = normalizePostalCode(rawPostalCode);

    setChequeNumber(normalizedCheque);
    setPostalCode(`${normalizedPostcode.slice(0, 4)} ${normalizedPostcode.slice(4)}`.trim());
    setErrorMessage('');
    setIsChecking(true);

    window.setTimeout(() => {
      const isRecognized = normalizedCheque.length >= 6 && isValidPostcode(normalizedPostcode);

      if (isRecognized) {
        const verifiedData = buildVerificationData(normalizedCheque, normalizedPostcode);
        updateData(verifiedData);
        onVerificationSuccess(verifiedData);
        setIsChecking(false);
        return;
      }

      setIsChecking(false);
      setErrorMessage(
        isAutomatic
          ? 'We konden uw cheque niet automatisch herkennen. Controleer uw chequenummer en de postcode bij uw cheque.'
          : 'Deze combinatie herkennen we niet. Controleer uw chequenummer en de postcode bij uw cheque.'
      );
    }, isAutomatic ? 600 : 250);
  };

  const handleVerify = () => {
    if (!chequeNumber.trim() || !postalCode.trim()) {
      setErrorMessage('Deze combinatie herkennen we niet. Controleer uw chequenummer en de postcode bij uw cheque.');
      return;
    }
    runVerification(chequeNumber, postalCode, false);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('c');
    const p = params.get('p');

    if (c && p) {
      runVerification(c, p, true);
      window.history.replaceState({}, '', window.location.pathname);
      return;
    }

    if (c && !p) {
      setChequeNumber(normalizeCheque(c));
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--brand-cream-light)]">
      <div className="fixed inset-x-0 top-0 z-30 border-b border-[color:rgba(90,84,74,0.14)] bg-[color:rgba(245,240,232,0.86)] backdrop-blur-sm">
        <div className={`${PAGE_RAIL} flex items-center justify-between gap-4 py-2.5`}>
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <img src={logo} alt="De Kunst van Kunst" className="h-auto w-20 md:w-[124px]" />
            <div className="flex items-center text-[11px] leading-tight [color:var(--foreground)] sm:hidden">
              <span className="text-[12px] font-semibold">Tip: neem foto&apos;s van uw interieur mee!</span>
            </div>
            <div className="hidden min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[14px] font-medium leading-tight [color:var(--foreground)] md:flex lg:text-[15px]">
              <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
              <span className="text-[15px] font-semibold lg:text-[16px]">Tip: neem foto&apos;s van uw interieur mee!</span>
              <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
              <span>Geerdinksweg 2 Hengelo</span>
              <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
              <span className="hidden xl:inline">info@dekunstvankunst.nl</span>
              <span className="h-4 w-px bg-[var(--brand-gold)] hidden xl:inline" aria-hidden="true" />
              <span className="hidden xl:inline">074 291 48 57</span>
            </div>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => onNavigate('plan-uw-bezoek')}
              className="btn-primary min-h-0 px-4 py-2 text-sm"
            >
              Maak hier uw afspraak
            </button>
            <img
              src={headerAfspraakKunstwerk}
              alt="Voorbeeld van een schilderij uit de galerie"
              className="h-12 w-12 rounded-sm object-cover"
            />
            <a
              href="https://review-dekunstvankunst.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[15px] font-medium underline decoration-[color:var(--brand-gold)] decoration-1 underline-offset-3 hover:opacity-85"
            >
              4,5/5 uit 1700+ reviews
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black min-h-[52svh] md:min-h-[58svh]">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopImage} />
          <img
            src={heroMobileImage}
            alt="Galerie De Kunst van Kunst, gevel met banieren in Hengelo"
            className="absolute inset-0 h-full w-full object-cover object-[74%_32%] md:object-[86%_46%]"
          />
        </picture>

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,51,35,0.18)_0%,rgba(64,51,35,0.12)_38%,rgba(64,51,35,0)_76%)]" />
        <div className="pointer-events-none absolute bottom-0 left-[3%] z-[5] h-[64%] md:left-[4%] md:h-[74%] lg:h-[84%]">
          <KunstwisselFiguur className="h-full drop-shadow-[0_22px_34px_rgba(23,18,15,0.38)]" />
        </div>
        <div className={`${PAGE_RAIL} relative z-10 grid grid-cols-4 gap-4 pt-20 pb-5 md:grid-cols-12 md:gap-6 md:pt-22 md:pb-8`}>
          <div className="col-span-4 md:col-span-4 md:col-start-9">
            <div className="hidden md:block md:pt-[8.5rem]">
              <div className="w-full max-w-[27rem] rounded-none border border-[color:rgba(90,84,74,0.22)] bg-[color:rgba(245,240,232,0.82)] p-4">
                <div className="grid gap-2 md:gap-3">
                  <label className="text-sm md:text-[15px] [color:var(--text-secondary)]">
                    Chequenummer
                    <input
                      type="text"
                      value={chequeNumber}
                      onChange={(e) => setChequeNumber(e.target.value)}
                      className="input mt-1 w-full bg-[var(--brand-cream-light)]"
                    />
                  </label>
                  <label className="text-sm md:text-[15px] [color:var(--text-secondary)]">
                    Postcode
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="input mt-1 w-full bg-[var(--brand-cream-light)]"
                    />
                  </label>
                  <button
                    onClick={handleVerify}
                    className="btn-primary homepage-verify-btn w-full"
                    disabled={isChecking}
                  >
                    {isChecking ? 'We controleren uw cheque.' : 'Plan uw bezoek'}
                  </button>
                  {errorMessage && (
                    <p className="text-sm [color:var(--destructive)]">{errorMessage}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Block (alleen mobiel; op desktop staat het formulier in de hero) */}
      <section className="bg-[var(--brand-cream-light)] py-4 md:hidden">
        <div className={PAGE_RAIL}>
          <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--brand-cream-light)] p-5">
            <div className="grid gap-3">
              <button
                onClick={() => onNavigate('cheque-input')}
                className="btn-primary homepage-verify-btn w-full"
              >
                Plan uw bezoek
              </button>
            </div>
          </div>
        </div>
      </section>

      <FromChequeToVisitSection />

      <section className="bg-white py-7 md:py-10">
        <div className={PAGE_RAIL}>
          <div className="grid gap-8 md:grid-cols-11 md:items-start md:gap-8">
            <div className="max-w-3xl md:col-span-7">
              <header>
                <p className="text-[22px] font-semibold uppercase tracking-[0.14em] [color:var(--brand-gold)] md:text-[28px]">
                  DE GALERIE
                </p>
              </header>
              <p className="mt-3 max-w-[66ch] text-[17px] leading-[1.7] [color:var(--brand-ink)] md:text-[20px]">
                Galerie De Kunst van Kunst toont werk van kunstenaars uit het hele land, in verschillende stijlen en formaten. De kunstenaars die bij ons exposeren hebben veelal een eigen galerie of exposeren elders in het land. Ieder werk is origineel en handgeschilderd en gaat vergezeld van een certificaat van echtheid.
              </p>
              {/* Concept — besluit nodig: secundaire CTA homepage OB-40 */}
              <button
                type="button"
                onClick={() => onNavigate('about-gallery')}
                className="mt-6 inline-flex text-[16px] [color:var(--text-secondary)] underline underline-offset-4 hover:opacity-85 md:text-[18px]"
              >
                Meer over de Kunst-Waardecheque
              </button>
            </div>
            <div className="md:col-span-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-none">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={galerieHengeloPoster}
                  aria-label="Galerie De Kunst van Kunst in Hengelo"
                >
                  <source src={GALERIE_HENGELO_VIDEO_SRC} type="video/mp4" />
                  Uw browser ondersteunt deze video niet.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gegevensvak */}
      <footer className="w-full bg-white">
        <div className={`${PAGE_RAIL} py-4 md:py-8`}>
          <div className="border border-[color:rgba(90,84,74,0.16)] bg-[color:rgba(245,240,232,0.96)] px-5 py-5 md:px-6 md:py-6">
            <div className="grid gap-6 text-sm [color:var(--text-secondary)] md:grid-cols-3 md:gap-6">
              <div className="space-y-1">
                <p className="mb-1 text-[16px] font-semibold [color:var(--foreground)]">Galerie De Kunst van Kunst</p>
                <p>Geerdinksweg 2, Hengelo (Ov)</p>
                <p>Uitsluitend op afspraak geopend</p>
              </div>
              <div className="space-y-1 md:border-l md:border-r md:border-[color:var(--brand-gold)] md:px-6 md:py-1">
                <p className="mb-1 text-[16px] font-semibold [color:var(--foreground)]">Contact</p>
                <p>info@dekunstvankunst.nl</p>
                <p>074-2914857</p>
                <button onClick={() => onNavigate('faq')} className="block underline underline-offset-4 hover:opacity-80">
                  Veelgestelde vragen
                </button>
              </div>
              <div className="space-y-1">
                <p className="mb-1 text-[16px] font-semibold [color:var(--foreground)]">Praktisch</p>
                <p>Maximaal twee bezoekers per cheque, toegang vanaf 12 jaar</p>
                <p>Een bezoek duurt gemiddeld 60 tot 90 minuten</p>
                <p>Parkeren zonder kosten voor de deur</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] [color:var(--text-secondary)]">
              <button onClick={() => onNavigate('faq')} className="underline underline-offset-4 hover:opacity-80">Veelgestelde vragen</button>
              <button onClick={() => setShowVoorwaarden(true)} className="underline underline-offset-4 hover:opacity-80">Voorwaarden</button>
              <button onClick={() => setShowPrivacy(true)} className="underline underline-offset-4 hover:opacity-80">Privacyverklaring</button>
              <button onClick={() => onNavigate('contact')} className="underline underline-offset-4 hover:opacity-80">Contact</button>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Galerie De Kunst van Kunst"
                className="h-auto w-[120px] bg-white"
              />
              <img
                src={jcfBusinessFriend}
                alt="Johan Cruyff Foundation Business Friend"
                className="h-auto w-[180px] bg-transparent"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Voorwaarden Modal */}
      {showVoorwaarden && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--foreground)_50%,transparent)] p-4"
          onClick={() => setShowVoorwaarden(false)}
        >
          <div
            className="flex h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-card shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-xl font-medium text-foreground">
                Algemene Voorwaarden
              </h2>
              <button
                onClick={() => setShowVoorwaarden(false)}
                className="px-4 py-2 text-2xl [color:var(--text-muted)]"
                aria-label="Sluiten"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src={voorwaardenPdf}
                className="w-full h-full border-0"
                title="Algemene Voorwaarden"
              />
            </div>

            <div className="border-t border-border p-4">
              <button
                onClick={() => setShowVoorwaarden(false)}
                className="btn-secondary w-full sm:w-auto"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--foreground)_50%,transparent)] p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="flex h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-card shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-xl font-medium text-foreground">
                Privacyverklaring
              </h2>
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 text-2xl [color:var(--text-muted)]"
                aria-label="Sluiten"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src={privacyPdf}
                className="w-full h-full border-0"
                title="Privacyverklaring"
              />
            </div>

            <div className="border-t border-border p-4">
              <button
                onClick={() => setShowPrivacy(false)}
                className="btn-secondary w-full sm:w-auto"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
