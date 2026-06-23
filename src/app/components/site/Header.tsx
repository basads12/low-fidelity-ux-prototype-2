import logo from "../../../imports/logo_sinds_2005.png";

const NAV_LINKS = [
  { href: "#about", label: "Over de galerie" },
  { href: "#services", label: "Werkwijze" },
  { href: "#projects", label: "Impressie" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="site-container w-full py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#" aria-label="Terug naar beginpagina">
            <img
              src={logo}
              alt="Galerie De Kunst van Kunst logo sinds 2005"
              className="h-11 w-auto sm:h-12"
            />
          </a>

          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden md:inline-flex">
            Plan uw bezoek
          </a>
        </div>

        <nav
          aria-label="Mobiele navigatie"
          className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-3 text-sm md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              className="font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
