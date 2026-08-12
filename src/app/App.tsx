import { useEffect, useState } from 'react';
import { Homepage } from './components/Homepage';
import { AboutGallery } from './components/AboutGallery';
import { ChequeInput } from './components/ChequeInput';
import { PersonalWelcome } from './components/PersonalWelcome';
import { PlannerDay } from './components/PlannerDay';
import { PlannerTime } from './components/PlannerTime';
import { PlannerDetails } from './components/PlannerDetails';
import { PlannerConfirmation } from './components/PlannerConfirmation';
import { AppointmentConfirmed } from './components/AppointmentConfirmed';
import { AutomaticChequeRecognition } from './components/AutomaticChequeRecognition';
import { PersonalWelcomeQR } from './components/PersonalWelcomeQR';
import { PlannerDayQR } from './components/PlannerDayQR';
import { PlannerTimeQR } from './components/PlannerTimeQR';
import { PlannerDetailsQR } from './components/PlannerDetailsQR';
import { PlannerConfirmationQR } from './components/PlannerConfirmationQR';
import { AppointmentConfirmedQR } from './components/AppointmentConfirmedQR';
import { ErrorInvalidLink } from './components/ErrorInvalidLink';
import { ErrorExpiredCheque } from './components/ErrorExpiredCheque';
import { ErrorChequeUsed } from './components/ErrorChequeUsed';
import { ErrorAppointmentExists } from './components/ErrorAppointmentExists';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Styleguide } from './components/Styleguide';
import { ReviewSite } from './components/ReviewSite';
import { PaintingExchange } from './components/PaintingExchange';
import { KunstVisualizer } from './components/KunstVisualizer';
import { KunstWaardecheque } from './components/KunstWaardecheque';
import { WistUDat } from './components/WistUDat';
import { PlanUwBezoek } from './components/PlanUwBezoek';
import logo from '../imports/logo_no_sinds.png';

export type Screen =
  | 'homepage'
  | 'about-gallery'
  | 'kunst-waardecheque'
  | 'wist-u-dat'
  | 'plan-uw-bezoek'
  | 'contact'
  | 'reviews'
  | 'faq'
  | 'painting-exchange'
  | 'art-visualizer'
  | 'styleguide'
  | 'cheque-input'
  | 'personal-welcome'
  | 'planner-day'
  | 'planner-time'
  | 'planner-details'
  | 'planner-confirmation'
  | 'appointment-confirmed'
  | 'automatic-recognition'
  | 'personal-welcome-qr'
  | 'planner-day-qr'
  | 'planner-time-qr'
  | 'planner-details-qr'
  | 'planner-confirmation-qr'
  | 'appointment-confirmed-qr'
  | 'error-invalid-link'
  | 'error-expired-cheque'
  | 'error-cheque-used'
  | 'error-appointment-exists';

const SCREEN_TO_PATH: Partial<Record<Screen, string>> = {
  homepage: '/',
  'kunst-waardecheque': '/kunst-waardecheque',
  'about-gallery': '/over-de-galerie',
  'wist-u-dat': '/wist-u-dat',
  'plan-uw-bezoek': '/plan-uw-bezoek',
  faq: '/veelgestelde-vragen',
  contact: '/contact',
  reviews: '/reviews',
  'painting-exchange': '/schilderij-omruilen',
  'art-visualizer': '/kunst-visualizer',
};

const PATH_TO_SCREEN: Record<string, Screen> = Object.entries(SCREEN_TO_PATH).reduce(
  (acc, [screen, path]) => {
    acc[path] = screen as Screen;
    return acc;
  },
  {} as Record<string, Screen>
);

const normalizePath = (path: string) => {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

const getScreenFromPath = (path: string): Screen | null => {
  const normalized = normalizePath(path);
  return PATH_TO_SCREEN[normalized] ?? null;
};

const getPathForScreen = (screen: Screen): string => SCREEN_TO_PATH[screen] ?? '/';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(() => {
    if (typeof window === 'undefined') return 'homepage';
    return getScreenFromPath(window.location.pathname) ?? 'homepage';
  });
  const [screenHistory, setScreenHistory] = useState<Screen[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userData, setUserData] = useState({
    chequeNumber: '',
    postalCode: '',
    firstName: '',
    partner: '',
    selectedDay: '',
    selectedTime: '',
    name: '',
    email: '',
    phone: '',
    dayExtras: [] as string[]
  });

  const navigateTo = (screen: Screen) => {
    setScreenHistory((prev) => (screen !== currentScreen ? [...prev, currentScreen] : prev));
    setCurrentScreen(screen);
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      const targetPath = getPathForScreen(screen);
      if (normalizePath(window.location.pathname) !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
    }
    window.scrollTo(0, 0);
  };

  const navigateBack = () => {
    setScreenHistory((prev) => {
      if (prev.length === 0) return prev;
      const nextHistory = [...prev];
      const previousScreen = nextHistory.pop();
      if (previousScreen) {
        setCurrentScreen(previousScreen);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
      }
      return nextHistory;
    });
  };

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
    // Mark flow as verified when cheque basics are present,
    // so manual cheque input can continue to personal welcome.
    if (data.chequeNumber && data.postalCode) {
      setIsVerified(true);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      const screen = getScreenFromPath(window.location.pathname) ?? 'homepage';
      setCurrentScreen(screen);
      setIsMobileMenuOpen(false);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure every in-app screen transition starts at top,
    // even when layout shifts after render.
    const raf = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => window.cancelAnimationFrame(raf);
  }, [currentScreen]);

  const showVerificationPlannerBar = [
    'cheque-input',
    'automatic-recognition',
    'personal-welcome',
    'planner-day',
    'planner-time',
    'planner-details',
    'planner-confirmation',
    'appointment-confirmed',
    'personal-welcome-qr',
    'planner-day-qr',
    'planner-time-qr',
    'planner-details-qr',
    'planner-confirmation-qr',
    'appointment-confirmed-qr'
  ].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'homepage':
        return (
          <Homepage
            onNavigate={navigateTo}
            updateData={updateUserData}
            onVerificationSuccess={(data) => {
              updateUserData(data);
              setIsVerified(true);
              navigateTo('personal-welcome');
            }}
          />
        );
      case 'about-gallery':
        return <AboutGallery onNavigate={navigateTo} />;
      case 'kunst-waardecheque':
        return <KunstWaardecheque onNavigate={navigateTo} />;
      case 'wist-u-dat':
        return <WistUDat onNavigate={navigateTo} />;
      case 'plan-uw-bezoek':
        return <PlanUwBezoek onNavigate={navigateTo} />;
      case 'contact':
        return <Contact onNavigate={navigateTo} />;
      case 'reviews':
        return <ReviewSite onNavigate={navigateTo} />;
      case 'faq':
        return <FAQ onNavigate={navigateTo} />;
      case 'painting-exchange':
        return <PaintingExchange onNavigate={navigateTo} />;
      case 'art-visualizer':
        return <KunstVisualizer onNavigate={navigateTo} />;
      case 'styleguide':
        return <Styleguide onNavigate={navigateTo} />;
      case 'cheque-input':
        return <ChequeInput onNavigate={navigateTo} updateData={updateUserData} />;
      case 'personal-welcome':
        return (isVerified || Boolean(userData.chequeNumber))
          ? <PersonalWelcome onNavigate={navigateTo} userData={userData} />
          : <Homepage onNavigate={navigateTo} updateData={updateUserData} onVerificationSuccess={(data) => {
            updateUserData(data);
            setIsVerified(true);
            navigateTo('personal-welcome');
          }} />;
      case 'planner-day':
        return <PlannerDay onNavigate={navigateTo} updateData={updateUserData} />;
      case 'planner-time':
        return <PlannerTime onNavigate={navigateTo} updateData={updateUserData} userData={userData} />;
      case 'planner-details':
        return <PlannerDetails onNavigate={navigateTo} updateData={updateUserData} userData={userData} />;
      case 'planner-confirmation':
        return <PlannerConfirmation onNavigate={navigateTo} userData={userData} />;
      case 'appointment-confirmed':
        return <AppointmentConfirmed userData={userData} />;
      case 'automatic-recognition':
        return <AutomaticChequeRecognition onNavigate={navigateTo} updateData={updateUserData} />;
      case 'personal-welcome-qr':
        return <PersonalWelcomeQR onNavigate={navigateTo} userData={userData} />;
      case 'planner-day-qr':
        return <PlannerDayQR onNavigate={navigateTo} updateData={updateUserData} userData={userData} />;
      case 'planner-time-qr':
        return <PlannerTimeQR onNavigate={navigateTo} updateData={updateUserData} userData={userData} />;
      case 'planner-details-qr':
        return <PlannerDetailsQR onNavigate={navigateTo} updateData={updateUserData} userData={userData} />;
      case 'planner-confirmation-qr':
        return <PlannerConfirmationQR onNavigate={navigateTo} userData={userData} />;
      case 'appointment-confirmed-qr':
        return <AppointmentConfirmedQR userData={userData} />;
      case 'error-invalid-link':
        return <ErrorInvalidLink onNavigate={navigateTo} />;
      case 'error-expired-cheque':
        return <ErrorExpiredCheque onNavigate={navigateTo} />;
      case 'error-cheque-used':
        return <ErrorChequeUsed onNavigate={navigateTo} />;
      case 'error-appointment-exists':
        return <ErrorAppointmentExists onNavigate={navigateTo} />;
      default:
        return (
          <Homepage
            onNavigate={navigateTo}
            updateData={updateUserData}
            onVerificationSuccess={(data) => {
              updateUserData(data);
              setIsVerified(true);
              navigateTo('personal-welcome');
            }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {showVerificationPlannerBar && (
        <div className="fixed inset-x-0 top-0 z-30 border-b border-[color:rgba(90,84,74,0.14)] bg-[color:rgba(245,240,232,0.78)] backdrop-blur-sm">
          <div className="site-container flex w-full items-center justify-between gap-4 py-2.5">
            <div className="flex items-center gap-3 md:gap-4">
              <img src={logo} alt="De Kunst van Kunst" className="h-auto w-20 md:w-[112px]" />
              <div className="hidden items-center gap-3 text-[13px] font-medium leading-tight [color:var(--foreground)] md:flex md:text-[14px]">
                <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
                <span className="text-[15px] font-semibold">Tip: neem foto&apos;s van uw interieur mee!</span>
                <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
                <span>Geerdinksweg 2 Hengelo</span>
                <span className="h-4 w-px bg-[var(--brand-gold)]" aria-hidden="true" />
                <span>info@dekunstvankunst.nl</span>
              </div>
            </div>
            <a
              href="https://review-dekunstvankunst.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[14px] font-medium underline decoration-[color:var(--brand-gold)] decoration-1 underline-offset-3 hover:opacity-85 md:inline-flex"
            >
              4,5/5 uit 1700+ reviews
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="fixed right-4 top-[6px] z-50 flex h-9 w-9 items-center justify-center border border-[color:rgba(90,84,74,0.2)] bg-[color:rgba(245,240,232,0.82)] text-foreground backdrop-blur-sm md:hidden"
        aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
      >
        <span className="text-2xl leading-none">{isMobileMenuOpen ? '×' : '☰'}</span>
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[color-mix(in_srgb,var(--foreground)_45%,transparent)] md:hidden">
          <div className="absolute top-16 right-4 left-4 rounded-lg border border-border bg-card p-4 shadow-lg">
            <div className="mb-3 text-xs uppercase tracking-wide [color:var(--text-muted)]">Menu</div>
            <div className="grid gap-2">
              {screenHistory.length > 0 && (
                <button onClick={navigateBack} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                  Terug
                </button>
              )}
              <button onClick={() => navigateTo('homepage')} className="btn-primary min-h-0 justify-start px-4 py-3 text-sm">
                Home
              </button>
              <button onClick={() => navigateTo('about-gallery')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Impressie
              </button>
              <button onClick={() => navigateTo('kunst-waardecheque')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Kunst-Waardecheque
              </button>
              <button onClick={() => navigateTo('wist-u-dat')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Wist u dat?
              </button>
              <button onClick={() => navigateTo('faq')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Veelgestelde vragen
              </button>
              <button onClick={() => navigateTo('painting-exchange')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Omruilgarantie
              </button>
              <button onClick={() => navigateTo('art-visualizer')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Kunst visualizer
              </button>
              <button onClick={() => navigateTo('contact')} className="btn-secondary min-h-0 justify-start px-4 py-3 text-sm">
                Contact
              </button>
              <button onClick={() => navigateTo('plan-uw-bezoek')} className="btn-primary min-h-0 justify-start px-4 py-3 text-sm">
                Plan uw bezoek
              </button>
            </div>
          </div>
        </div>
      )}

      {currentScreen !== 'homepage' && (
        <div className="fixed inset-x-0 bottom-4 z-50 hidden md:block">
          <div className="site-container flex w-full justify-end gap-2">
            {screenHistory.length > 0 && (
              <button
                onClick={navigateBack}
                className="btn-secondary min-h-0 px-4 py-2 text-sm"
                aria-label="Ga terug naar vorig scherm"
              >
                Terug
              </button>
            )}
            {currentScreen === 'about-gallery' && (
              <button
                onClick={() => navigateTo('plan-uw-bezoek')}
                className="btn-primary min-h-0 px-4 py-2 text-sm"
                aria-label="Ga naar plan uw bezoek"
              >
                Plan uw bezoek
              </button>
            )}
            <button
              onClick={() => navigateTo('homepage')}
              className="btn-primary min-h-0 px-4 py-2 text-sm"
              aria-label="Ga naar homepage"
            >
              Home
            </button>
          </div>
        </div>
      )}
      <div className={showVerificationPlannerBar ? 'pt-[52px]' : ''}>
        {renderScreen()}
      </div>
    </div>
  );
}