import logo from "../../../imports/logo_sinds_2005.png";
import voorwaardenPdf from "../../../imports/Algemene_Voorwaarden_Galerie_De_Kunst_van_Kunst.pdf";
import privacyPdf from "../../../imports/Privacyverklaring_Galerie_De_Kunst_van_Kunst_2026-04-26.pdf";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted py-10">
      <div className="site-container grid w-full gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <img
            src={logo}
            alt="Galerie De Kunst van Kunst logo"
            className="h-11 w-auto sm:h-12"
          />
          <p className="mt-4 text-sm text-text-secondary">
            Galeriebezoek op afspraak met persoonlijke begeleiding.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex flex-col gap-2 text-sm text-text-secondary">
          <a className="transition-colors hover:text-text-primary" href="#about">
            Over de galerie
          </a>
          <a className="transition-colors hover:text-text-primary" href="#contact">
            Contact
          </a>
          <a
            className="transition-colors hover:text-text-primary"
            href={voorwaardenPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Algemene voorwaarden
          </a>
          <a
            className="transition-colors hover:text-text-primary"
            href={privacyPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacyverklaring
          </a>
        </nav>
      </div>
    </footer>
  );
}
