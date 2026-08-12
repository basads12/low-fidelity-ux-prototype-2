import { useMemo, useState } from 'react';
import { Screen } from '../App';
import impressieGalerieWerken1 from '../../imports/impressie-galerie-werken-1.png';
import bijlage1OpBijlage2 from '../../imports/bijlage1-op-bijlage2.png';
import impressieGalerieHeroNieuw from '../../imports/impressie-galerie-hero-nieuw.png';
import bijlage1Locatievideo from '../../imports/bijlage1-locatievideo.mp4';
import bijlage2Locatievideo from '../../imports/bijlage2-locatievideo.mp4';
import bijlage3Locatievideo from '../../imports/bijlage3-locatievideo.mp4';
import twinsZonderSchaduw from '../../imports/twins-zonder-schaduw.png';
import vierkantWerk from '../../imports/vierkant-werk.svg';
import liggendBrugWerk from '../../imports/liggend-brug-werk.png';
import staandRoodWerk from '../../imports/staand-rood-werk.png';
import featureIconGallery from '../../imports/feature-icon-gallery.png';
import featureIconCertificate from '../../imports/feature-icon-certificate.png';
import featureIconPalette from '../../imports/feature-icon-palette.png';
import logo from '../../imports/logo_no_sinds.png';
import jcfBusinessFriend from '../../imports/jcf-business-friend-cutout.png';
import voorwaardenPdf from '../../imports/Algemene_Voorwaarden_Galerie_De_Kunst_van_Kunst.pdf';
import privacyPdf from '../../imports/Privacyverklaring_Galerie_De_Kunst_van_Kunst_2026-04-26.pdf';

const origineleSchilderijenBronnen = Object.values(
  import.meta.glob('../../imports/originele-schilderijen/*.png', { eager: true, import: 'default' })
) as string[];
const SCHILDERIJEN_PER_BLOK = 6;

const normaliseerSchilderijKey = (url: string) => {
  const fileName = url.split('/').pop() ?? url;
  return fileName
    .replace(/-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}(?=\.png$)/i, '')
    .toLowerCase();
};

const maakGemixteVolgorde = (items: string[], batchGrootte: number) => {
  if (items.length <= batchGrootte) return items;
  const stap = Math.ceil(items.length / batchGrootte);
  const gemixt: string[] = [];

  for (let rij = 0; rij < stap; rij += 1) {
    for (let kolom = 0; kolom < batchGrootte; kolom += 1) {
      const index = rij + kolom * stap;
      if (index < items.length) {
        gemixt.push(items[index]);
      }
    }
  }

  return gemixt;
};

const uniekeSchilderijen = [...origineleSchilderijenBronnen]
  .sort((a, b) => a.localeCompare(b))
  .filter((url, index, arr) => {
    const key = normaliseerSchilderijKey(url);
    return arr.findIndex((item) => normaliseerSchilderijKey(item) === key) === index;
  });

const origineleSchilderijen = maakGemixteVolgorde(uniekeSchilderijen, SCHILDERIJEN_PER_BLOK);

interface AboutGalleryProps {
  onNavigate: (screen: Screen) => void;
}

export function AboutGallery({ onNavigate }: AboutGalleryProps) {
  const [showVoorwaarden, setShowVoorwaarden] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [schilderijenBatchIndex, setSchilderijenBatchIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
    imageClass?: string;
    frameClass?: string;
  } | null>(null);

  const openZoom = (src: string, alt: string, imageClass?: string, frameClass?: string) => {
    setZoomedImage({ src, alt, imageClass, frameClass });
  };
  const schilderijenBatches = useMemo(() => {
    if (origineleSchilderijen.length === 0) return [];
    const batches: string[][] = [];
    for (let index = 0; index < origineleSchilderijen.length; index += SCHILDERIJEN_PER_BLOK) {
      batches.push(origineleSchilderijen.slice(index, index + SCHILDERIJEN_PER_BLOK));
    }
    return batches;
  }, []);

  const zichtbareSchilderijen = schilderijenBatches[schilderijenBatchIndex] ?? [];

  const laadMeerSchilderijen = () => {
    if (schilderijenBatches.length <= 1) return;
    setSchilderijenBatchIndex((prev) => (prev + 1) % schilderijenBatches.length);
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      {/* Main Content Container */}
      <div className="site-container w-full py-12 md:py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left: Text */}
            <div>
              <h1 className="mb-6 font-semibold uppercase tracking-[0.08em]">IMPRESSIE</h1>

              <p className="mb-4 text-lg leading-relaxed text-foreground/80">
                Hieronder ziet u een selectie van schilderijen uit onze galerie, in verschillende stijlen en formaten.
                De getoonde werken geven een indruk; ze zijn niet te reserveren en niet gegarandeerd aanwezig. Welke
                werken op dit moment volledig binnen uw cheque vallen, ziet u tijdens uw bezoek.
              </p>

            </div>

            {/* Right: Image slot */}
            <div className="hidden lg:block mt-8 lg:mt-0">
              <div className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card shadow-sm">
                <img src={impressieGalerieHeroNieuw} alt="Voorzijde van de galerie in Hengelo" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Wat u kunt verwachten */}
        <section className="mb-16 bg-white py-8">
          <div className="mx-auto w-full px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-semibold uppercase tracking-[0.08em] text-foreground">
            Wat u kunt verwachten
          </h2>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <div className="mx-auto flex w-full max-w-[320px] flex-col items-center text-center">
              <div className="mb-4 flex h-[120px] items-center justify-center">
                <img src={featureIconGallery} alt="" className="h-auto w-[120px]" aria-hidden="true" />
              </div>
              <p className="min-h-[1.75rem] text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground md:whitespace-nowrap">
                Minimaal vijftig werken
              </p>
              <p className="mt-3 max-w-[300px] text-center text-[15px] leading-[1.55] [color:var(--text-secondary)]">
                In de galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[320px] flex-col items-center text-center">
              <div className="mb-4 flex h-[120px] items-center justify-center">
                <img src={featureIconPalette} alt="" className="h-auto w-[120px]" aria-hidden="true" />
              </div>
              <p className="min-h-[1.75rem] text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground md:whitespace-nowrap">
                Origineel en handgeschilderd
              </p>
              <p className="mt-3 max-w-[300px] text-center text-[15px] leading-[1.55] [color:var(--text-secondary)]">
                Elk werk is een origineel, handgeschilderd en gesigneerd schilderij.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[320px] flex-col items-center text-center">
              <div className="mb-4 flex h-[120px] items-center justify-center">
                <img src={featureIconCertificate} alt="" className="h-auto w-[128px]" aria-hidden="true" />
              </div>
              <p className="min-h-[1.75rem] text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground md:whitespace-nowrap">
                Certificaat van echtheid
              </p>
              <p className="mt-3 max-w-[300px] text-center text-[15px] leading-[1.55] [color:var(--text-secondary)]">
                Bij elk gekozen werk ontvangt u een certificaat van echtheid.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Section: Impressie van de galerie */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em]">IMPRESSIE VAN DE GALERIE</h2>

          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            In de galerie hangen werken in verschillende formaten en stijlen. Het aanbod wisselt wekelijks. Elk bezoek is anders. De beelden hieronder geven een indruk; u kiest uw werk in de galerie, op uw eigen tempo.
          </p>

          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Een tweede bezoek is mogelijk binnen de geldigheidsperiode van uw cheque. Lukt dat niet? Vraag bij de balie naar verlenging.
          </p>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden border-2 border-border">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={impressieGalerieWerken1}
                aria-label="Video impressie van de galerie"
              >
                <source src={bijlage2Locatievideo} type="video/mp4" />
                Uw browser ondersteunt deze video niet.
              </video>
            </div>
            <div className="aspect-[4/3] overflow-hidden border-2 border-border">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={bijlage1OpBijlage2}
                aria-label="Video impressie van de galeriecollectie"
              >
                <source src={bijlage3Locatievideo} type="video/mp4" />
                Uw browser ondersteunt deze video niet.
              </video>
            </div>
          </div>

          <div className="card mb-10 border-l-4 border-l-brand-ochre p-6">
            <p className="text-foreground/80">
              U hoeft vooraf geen werk te kiezen. Tijdens uw bezoek kijkt u rustig rond en kiest u een werk dat bij u past.
            </p>
          </div>
        </section>

        <section className="mb-16 border border-border bg-card p-8">
          <h2 className="text-3xl font-semibold mb-6">Formaten en verhoudingen</h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            In de galerie hangen werken in verschillende formaten en verhoudingen. De voorbeelden hieronder geven een indruk van schaal en presentatie. De exacte afmetingen ziet u bij het werk in de galerie.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-[360px] items-end justify-center">
                <div className="h-[360px] w-[270px] overflow-hidden">
                  <img
                    src={twinsZonderSchaduw}
                    alt="TWINS formaat circa 120 cm hoog"
                    className="h-full w-full cursor-zoom-in object-contain"
                    onClick={() =>
                      openZoom(
                        twinsZonderSchaduw,
                        "TWINS formaat circa 120 cm hoog",
                        "h-full w-full object-contain",
                        "w-[min(96vw,640px)] h-[min(92vh,760px)] bg-transparent"
                      )
                    }
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-tight">TWINS</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-[360px] items-end justify-center">
                <div className="h-[240px] w-[240px] overflow-hidden">
                  <img
                    src={vierkantWerk}
                    alt="Vierkant werk"
                    className="h-full w-full cursor-zoom-in scale-[1.03] object-cover object-center"
                    onClick={() =>
                      openZoom(
                        vierkantWerk,
                        "Vierkant werk",
                        "h-full w-full object-contain",
                        "w-[min(96vw,760px)] aspect-square bg-transparent"
                      )
                    }
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-tight">VIERKANT</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-[360px] items-end justify-center">
                <div className="h-[170px] w-[300px] overflow-hidden bg-transparent">
                  <img
                    src={liggendBrugWerk}
                    alt="Liggend schilderij"
                    className="h-full w-full cursor-zoom-in scale-[1.1] object-cover object-center"
                    onClick={() =>
                      openZoom(
                        liggendBrugWerk,
                        "Liggend schilderij",
                        "h-full w-full object-contain",
                        "w-[min(96vw,980px)] aspect-[120/60] bg-transparent"
                      )
                    }
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-tight">LIGGEND</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-[360px] items-end justify-center">
                <div className="h-[260px] w-[140px] overflow-hidden bg-transparent">
                  <img
                    src={staandRoodWerk}
                    alt="Staand schilderij"
                    className="h-full w-full cursor-zoom-in scale-[1.1] object-cover object-center"
                    onClick={() =>
                      openZoom(
                        staandRoodWerk,
                        "Staand schilderij",
                        "h-full w-full object-contain",
                        "w-[min(96vw,520px)] aspect-[60/120] bg-transparent"
                      )
                    }
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-tight">STAAND</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">Impressie van originele schilderijen</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {zichtbareSchilderijen.map((beeld, index) => (
              <div key={`${beeld}-${index}`} className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card shadow-sm">
                <img src={beeld} alt={`Origineel schilderij ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          {schilderijenBatches.length > 1 ? (
            <div className="mt-6 flex justify-center">
              <button type="button" onClick={laadMeerSchilderijen} className="btn-primary min-h-0 px-4 py-2 text-sm">
                Laad meer
              </button>
            </div>
          ) : null}
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-4xl font-semibold [color:var(--brand-bordeaux)]">Uw cheque in onze galerie</h2>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <div className="border-l-4 border-l-[var(--brand-bordeaux)] bg-white p-6">
              <h3 className="mb-3 text-2xl font-semibold">Werken binnen uw cheque</h3>
              <p className="text-lg [color:var(--text-secondary)]">
                U kunt kiezen uit minimaal vijftig werken die volledig binnen uw cheque vallen.
              </p>
            </div>
            <div className="border-l-4 border-l-[var(--brand-bordeaux)] bg-white p-6">
              <h3 className="mb-3 text-2xl font-semibold">Ander werk in de galerie</h3>
              <p className="text-lg [color:var(--text-secondary)]">
                Spreekt een ander werk u meer aan, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs wordt in de galerie rustig toegelicht.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t-2 border-border pt-8 text-center">
          <button
            onClick={() => onNavigate('cheque-input')}
            className="btn-primary min-h-[56px] px-8 text-base sm:text-lg"
          >
            Plan uw bezoek
          </button>
        </div>
        <footer className="mt-8 border-t border-[color:rgba(90,84,74,0.18)] pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex-nowrap">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] [color:var(--text-secondary)]">
              <button onClick={() => onNavigate('faq')} className="underline underline-offset-4 hover:opacity-80">Veelgestelde vragen</button>
              <button onClick={() => setShowVoorwaarden(true)} className="underline underline-offset-4 hover:opacity-80">Voorwaarden</button>
              <button onClick={() => setShowPrivacy(true)} className="underline underline-offset-4 hover:opacity-80">Privacyverklaring</button>
              <button onClick={() => onNavigate('contact')} className="underline underline-offset-4 hover:opacity-80">Contact</button>
            </div>
            <div className="flex items-center gap-4">
              <img src={logo} alt="Galerie De Kunst van Kunst" className="h-auto w-[120px] bg-white" />
              <img
                src={jcfBusinessFriend}
                alt="Johan Cruyff Foundation Business Friend"
                className="h-auto w-[180px] bg-transparent"
              />
            </div>
          </div>
        </footer>
      </div>

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

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded bg-white/90 px-3 py-1 text-xl font-semibold text-black shadow-sm"
            onClick={() => setZoomedImage(null)}
            aria-label="Sluit ingezoomde afbeelding"
          >
            ×
          </button>
          <div className={`max-h-[92vh] max-w-[96vw] overflow-hidden rounded-sm border border-white/20 ${zoomedImage.frameClass ?? "bg-transparent"}`}>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className={zoomedImage.imageClass ?? "max-h-[92vh] w-auto max-w-[96vw] object-contain"}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
