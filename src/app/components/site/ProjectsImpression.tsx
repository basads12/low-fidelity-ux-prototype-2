import workSkyline from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/03_Voorbeelden_Werken/werk_skyline.jpeg";
import workBloemen from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/03_Voorbeelden_Werken/werk_bloemen.jpeg";
import workSchepen from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/03_Voorbeelden_Werken/werk_schepen.webp";
import workKraanvogel from "../../../../DKVK_Documentensysteem_V1_1/Beeldmateriaal/03_Voorbeelden_Werken/werk_kraanvogel_grijs.webp";

const IMPRESSION_ITEMS = [
  {
    src: workSkyline,
    alt: "Schilderij met skyline in warme tinten",
  },
  {
    src: workBloemen,
    alt: "Schilderij met kleurrijke bloemen",
  },
  {
    src: workSchepen,
    alt: "Schilderij met schepen op het water",
  },
  {
    src: workKraanvogel,
    alt: "Schilderij met kraanvogel in grijstinten",
  },
];

export function ProjectsImpression() {
  return (
    <section id="projects" className="border-b border-border section-spacing">
      <div className="site-container w-full">
        <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
          Impressie van beschikbare werken
        </h2>
        <p className="mt-4 max-w-[70ch] text-text-secondary">
          Deze beelden geven een indruk van stijl en afwerking. De keuze maakt u tijdens
          uw afspraak in de galerie.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {IMPRESSION_ITEMS.map((item) => (
            <figure
              key={item.alt}
              className="overflow-hidden rounded-[12px] border border-border bg-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-72 w-full object-cover object-center sm:h-80"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
