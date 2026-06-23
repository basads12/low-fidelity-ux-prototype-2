import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { ProjectsImpression } from "./ProjectsImpression";
import { ContactCTA } from "./ContactCTA";
import { Footer } from "./Footer";

export function Website() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
      >
        Ga direct naar de inhoud
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <ProjectsImpression />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
