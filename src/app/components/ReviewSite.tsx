import { useMemo, useState } from 'react';
import { Screen } from '../App';
import logo from '../../imports/logo_sinds_2005.png';
import scanPreview from '../../imports/image.png';

interface ReviewSiteProps {
  onNavigate: (screen: Screen) => void;
}

type Review = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  visitDate: string;
  publishedAt: string;
  rating10: number;
  quote: string;
  subscores: {
    cadeauErvaring: number;
    klantgerichtheid: number;
    serviceMedewerkers: number;
    informatieverstrekking: number;
    aanbevelen: number;
  };
  galleryResponse?: string;
};

const REVIEWS: Review[] = [
  {
    id: 'rv-001',
    firstName: 'Sophie',
    lastName: 'M.',
    city: 'Utrecht',
    visitDate: '12 februari 2026',
    publishedAt: '18 februari 2026',
    rating10: 9.0,
    quote:
      'Het schilderij past prachtig in onze woonkamer. De adviseur nam de tijd om te luisteren naar wat we zochten.',
    subscores: {
      cadeauErvaring: 9,
      klantgerichtheid: 9,
      serviceMedewerkers: 9,
      informatieverstrekking: 9,
      aanbevelen: 9
    }
  },
  {
    id: 'rv-002',
    firstName: 'Mark',
    lastName: 'van der H.',
    city: 'Almelo',
    visitDate: '20 januari 2026',
    publishedAt: '27 januari 2026',
    rating10: 8.4,
    quote:
      'Ik twijfelde eerst of het wel iets voor ons was, maar de galerie voelde prettig rustig. Uiteindelijk een mooi werk gekozen.',
    subscores: {
      cadeauErvaring: 8,
      klantgerichtheid: 8,
      serviceMedewerkers: 9,
      informatieverstrekking: 8,
      aanbevelen: 9
    }
  },
  {
    id: 'rv-003',
    firstName: 'Linda',
    lastName: 'K.',
    city: 'Hengelo',
    visitDate: '4 maart 2026',
    publishedAt: '11 maart 2026',
    rating10: 8.7,
    quote:
      'Ik had vragen over het formaat en de meerprijs. Alles werd duidelijk uitgelegd, zonder druk.',
    subscores: {
      cadeauErvaring: 9,
      klantgerichtheid: 9,
      serviceMedewerkers: 8,
      informatieverstrekking: 9,
      aanbevelen: 8
    },
    galleryResponse:
      'Mocht u later nog vragen hebben over formaat of prijsopbouw, dan helpen wij u graag op 074-2914857.'
  },
  {
    id: 'rv-004',
    firstName: 'Henk',
    lastName: 'J.',
    city: 'Deventer',
    visitDate: '7 februari 2026',
    publishedAt: '14 februari 2026',
    rating10: 7.6,
    quote:
      'We werden netjes ontvangen en konden rustig kijken. Voor ons had de uitleg over inlijsting iets korter gemogen, maar verder was alles duidelijk.',
    subscores: {
      cadeauErvaring: 8,
      klantgerichtheid: 8,
      serviceMedewerkers: 7,
      informatieverstrekking: 7,
      aanbevelen: 8
    }
  },
  {
    id: 'rv-005',
    firstName: 'Esther',
    lastName: 'B.',
    city: 'Zwolle',
    visitDate: '28 januari 2026',
    publishedAt: '2 februari 2026',
    rating10: 9.2,
    quote:
      'Fijn dat er veel keuze was binnen de cheque. We hebben niet het gevoel gehad dat we moesten haasten.',
    subscores: {
      cadeauErvaring: 9,
      klantgerichtheid: 9,
      serviceMedewerkers: 9,
      informatieverstrekking: 9,
      aanbevelen: 10
    }
  },
  {
    id: 'rv-006',
    firstName: 'Robert',
    lastName: 'L.',
    city: 'Oldenzaal',
    visitDate: '9 maart 2026',
    publishedAt: '17 maart 2026',
    rating10: 6.8,
    quote:
      'Het aanbod was goed. We kwamen iets later op gang met het kiezen, maar uiteindelijk zijn we met een werk vertrokken dat goed past.',
    subscores: {
      cadeauErvaring: 7,
      klantgerichtheid: 7,
      serviceMedewerkers: 7,
      informatieverstrekking: 6,
      aanbevelen: 7
    }
  },
  {
    id: 'rv-007',
    firstName: 'Yvonne',
    lastName: 'P.',
    city: 'Apeldoorn',
    visitDate: '3 april 2026',
    publishedAt: '10 april 2026',
    rating10: 9.1,
    quote:
      'De ontvangst was vriendelijk en rustig. We kregen ruimte om eerst zelf te kijken en daarna vragen te stellen.',
    subscores: {
      cadeauErvaring: 9,
      klantgerichtheid: 9,
      serviceMedewerkers: 9,
      informatieverstrekking: 9,
      aanbevelen: 9
    }
  },
  {
    id: 'rv-008',
    firstName: 'Niels',
    lastName: 'A.',
    city: 'Enschede',
    visitDate: '14 maart 2026',
    publishedAt: '21 maart 2026',
    rating10: 7.1,
    quote:
      'We hebben een goede keuze kunnen maken. De uitleg over levering was helder, al duurde het iets langer dan verwacht.',
    subscores: {
      cadeauErvaring: 7,
      klantgerichtheid: 7,
      serviceMedewerkers: 7,
      informatieverstrekking: 8,
      aanbevelen: 7
    }
  },
  {
    id: 'rv-009',
    firstName: 'Ria',
    lastName: 'T.',
    city: 'Borne',
    visitDate: '26 februari 2026',
    publishedAt: '4 maart 2026',
    rating10: 8.8,
    quote:
      'De adviseur dacht mee zonder te sturen. Dat gaf vertrouwen. Wij hebben een werk gekozen waar we dagelijks met plezier naar kijken.',
    subscores: {
      cadeauErvaring: 9,
      klantgerichtheid: 9,
      serviceMedewerkers: 9,
      informatieverstrekking: 8,
      aanbevelen: 9
    }
  }
];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function toDutchDecimal(value: number) {
  return value.toFixed(1).replace('.', ',');
}

function starsFromTen(value: number) {
  const fullStars = Math.round(value / 2);
  return '★★★★★'.slice(0, fullStars) + '☆☆☆☆☆'.slice(0, 5 - fullStars);
}

function shortQuote(text: string) {
  if (text.length <= 165) return text;
  return `${text.slice(0, 162)}...`;
}

function scoreToFive(value: number) {
  return Math.max(1, Math.min(5, Math.round(value / 2)));
}

function subscoreStars(value: number) {
  const five = scoreToFive(value);
  return '★★★★★'.slice(0, five) + '☆☆☆☆☆'.slice(0, 5 - five);
}

export function ReviewSite({ onNavigate }: ReviewSiteProps) {
  const [activeLetter, setActiveLetter] = useState<string>('');
  const [query, setQuery] = useState('');
  const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);
  const [scanReviewId, setScanReviewId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((review) => {
      const startsWithLetter = activeLetter
        ? review.lastName.toUpperCase().startsWith(activeLetter)
        : true;

      const matchesQuery = normalizedQuery
        ? `${review.firstName} ${review.lastName} ${review.city}`
            .toLowerCase()
            .includes(normalizedQuery)
        : true;

      return startsWithLetter && matchesQuery;
    });
  }, [activeLetter, normalizedQuery]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredReviews.length;

  const emptyStateMessage = activeLetter
    ? `Geen bezoekersnamen met de letter ${activeLetter} in deze selectie.`
    : normalizedQuery
      ? 'Geen reactie gevonden onder deze naam of woonplaats. Probeer een andere spelling.'
      : 'Er zijn nog geen reacties om te tonen.';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-white [border-color:color-mix(in_srgb,var(--foreground)_10%,transparent)]">
        <div className="site-container flex items-center justify-between py-4">
          <img src={logo} alt="De Kunst van Kunst" className="h-9 w-auto" />
          <nav className="flex items-center gap-6 text-sm">
            <span className="font-medium text-primary">Reviews</span>
            <button onClick={() => onNavigate('homepage')} className="hover:opacity-80">
              Galerie De Kunst van Kunst
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:opacity-80">
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b bg-background [border-color:color-mix(in_srgb,var(--foreground)_10%,transparent)]">
          <div className="site-container py-14 md:py-20">
            <p className="mb-3 text-[12px] uppercase tracking-[0.08em] text-brand-ochre">
              BEZOEKERSBOEK - GALERIE DE KUNST VAN KUNST
            </p>
            <h1 className="m-0 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] text-primary">
              Reviews onder eigen naam, na bezoek, met handtekening.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed md:text-lg">
              Iedereen die in onze galerie is geweest, kan na afloop een korte papieren enquete
              ondertekenen. Wat u hier leest, is letterlijk overgenomen. U mag het origineel zelf
              inzien.
            </p>
            <p className="mt-5 text-sm [color:var(--text-secondary)]">
              Op dit moment 1.683 ondertekende bezoekersreacties. Gemiddelde 4,4 op 5. Wij ronden
              niet af.
            </p>
          </div>
        </section>

        <section
          className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur [border-color:color-mix(in_srgb,var(--foreground)_10%,transparent)]"
          aria-label="Filterzone"
        >
          <div className="site-container py-4">
            <div className="flex flex-col gap-4">
              <label className="text-xs [color:var(--text-secondary)]">
                Zoek op achternaam of woonplaats
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  placeholder="Bijv. Jansen of Hengelo"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none [border-color:color-mix(in_srgb,var(--foreground)_15%,transparent)] focus:border-primary"
                />
              </label>

              <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
                {LETTERS.map((letter) => {
                  const isActive = activeLetter === letter;
                  return (
                    <button
                      key={letter}
                      onClick={() => {
                        setActiveLetter(isActive ? '' : letter);
                        setVisibleCount(6);
                      }}
                      className={`min-h-11 min-w-11 border-b-2 px-2 text-sm transition-colors ${
                        isActive
                          ? 'border-brand-ochre text-primary'
                          : 'border-transparent text-foreground'
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                {activeLetter ? (
                  <button
                    onClick={() => setActiveLetter('')}
                    className="rounded-full border px-3 py-1 [border-color:color-mix(in_srgb,var(--foreground)_20%,transparent)]"
                  >
                    Letter: {activeLetter} x
                  </button>
                ) : null}
                {normalizedQuery ? (
                  <button
                    onClick={() => setQuery('')}
                    className="rounded-full border px-3 py-1 [border-color:color-mix(in_srgb,var(--foreground)_20%,transparent)]"
                  >
                    Zoekterm: {query} x
                  </button>
                ) : null}
                <span className="ml-auto [color:var(--text-secondary)]">
                  {filteredReviews.length} reacties zichtbaar
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="site-container py-10 md:py-14">
          {visibleReviews.length === 0 ? (
            <div className="border bg-white p-8 text-sm [border-color:color-mix(in_srgb,var(--foreground)_15%,transparent)] [color:var(--text-secondary)]">
              {emptyStateMessage}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {visibleReviews.map((review) => {
                  const isExpanded = expandedReviewId === review.id;

                  return (
                    <article
                      key={review.id}
                      className={`border bg-white p-6 transition-shadow [border-color:color-mix(in_srgb,var(--foreground)_15%,transparent)] ${
                        isExpanded ? 'shadow-lg' : 'shadow-sm'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedReviewId(isExpanded ? null : review.id)}
                        className="w-full text-left"
                      >
                        <p className="m-0 text-[22px] uppercase tracking-[0.01em] text-primary">
                          {review.lastName} - {review.city}
                        </p>
                        <p className="mt-2 text-sm [color:var(--text-secondary)]">Bezoekdatum: {review.visitDate}</p>
                        <p className="mt-3 text-[18px] text-brand-ochre">
                          {starsFromTen(review.rating10)}{' '}
                          <span className="text-foreground">({toDutchDecimal(review.rating10)} / 10)</span>
                        </p>
                        <p className="mt-4 italic [font-family:Georgia,_Times_New_Roman,_serif]">
                          "{isExpanded ? review.quote : shortQuote(review.quote)}"
                        </p>
                      </button>

                      {isExpanded ? (
                        <div className="mt-6 space-y-4 border-t pt-5 [border-color:color-mix(in_srgb,var(--foreground)_10%,transparent)]">
                          <p className="text-sm">
                            Algemene beoordeling: <strong>{toDutchDecimal(review.rating10)}</strong> -
                            gebaseerd op ondertekende klantenenquete
                          </p>

                          <dl className="space-y-2 text-sm">
                            <div className="flex items-center justify-between gap-3">
                              <dt>Cadeau-ervaring</dt>
                              <dd className="text-brand-ochre">{subscoreStars(review.subscores.cadeauErvaring)}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Klantgerichtheid</dt>
                              <dd className="text-brand-ochre">{subscoreStars(review.subscores.klantgerichtheid)}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Service medewerkers</dt>
                              <dd className="text-brand-ochre">{subscoreStars(review.subscores.serviceMedewerkers)}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Informatieverstrekking</dt>
                              <dd className="text-brand-ochre">
                                {subscoreStars(review.subscores.informatieverstrekking)}
                              </dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Aanbevelen</dt>
                              <dd className="text-brand-ochre">{subscoreStars(review.subscores.aanbevelen)}</dd>
                            </div>
                          </dl>

                          <button
                            onClick={() => setScanReviewId(review.id)}
                            className="border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            Bekijk de originele enquete
                          </button>

                          {review.galleryResponse ? (
                            <p className="border-l-2 pl-4 text-sm [border-color:color-mix(in_srgb,var(--foreground)_18%,transparent)] [color:var(--text-secondary)]">
                              {review.galleryResponse}
                            </p>
                          ) : null}

                          <div className="flex items-center justify-between text-xs [color:var(--text-secondary)]">
                            <span>Vlag deze review</span>
                            <span>gepubliceerd op {review.publishedAt}</span>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>

              {canShowMore ? (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="text-sm underline underline-offset-4 hover:opacity-80"
                  >
                    Toon vorige 20
                  </button>
                </div>
              ) : null}
            </>
          )}
        </section>
      </main>

      <footer className="border-t bg-foreground text-background [border-color:color-mix(in_srgb,var(--foreground)_10%,transparent)]">
        <div className="site-container py-10 text-sm">
          <p className="max-w-3xl [color:color-mix(in_srgb,var(--background)_84%,var(--foreground))]">
            Iedereen die in onze galerie is geweest, kan na afloop een korte papieren enquete
            invullen en ondertekenen. Handtekening, bedrijfsnaam en chequenummer zijn om
            privacyredenen afgeschermd.
          </p>
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <button onClick={() => onNavigate('homepage')} className="underline underline-offset-4">
              Meer over Galerie De Kunst van Kunst
            </button>
            <button
              onClick={() => onNavigate('cheque-input')}
              className="underline underline-offset-4"
            >
              Heeft u een Kunst-Waardecheque? Verifieer uw cheque op dekunstvankunst.nl
            </button>
          </div>
        </div>
      </footer>

      {scanReviewId ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-hidden bg-background">
            <div className="flex items-center justify-between border-b px-5 py-4 [border-color:color-mix(in_srgb,var(--foreground)_15%,transparent)]">
              <h2 className="m-0 text-lg font-medium text-foreground">Originele enquete (inzage)</h2>
              <button onClick={() => setScanReviewId(null)} className="text-sm underline underline-offset-4">
                Sluiten
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto p-5">
              <img
                src={scanPreview}
                alt="Inzage van originele papieren enquete met afgeschermde gegevens"
                className="h-auto w-full border bg-white [border-color:color-mix(in_srgb,var(--foreground)_15%,transparent)]"
              />
              <p className="mt-4 text-sm [color:var(--text-secondary)]">
                Handtekening, bedrijfsnaam en chequenummer zijn om privacyredenen afgeschermd.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
