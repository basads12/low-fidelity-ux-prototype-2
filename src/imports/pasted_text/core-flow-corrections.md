# Figma Make — DKVK Core Flow Ronde 2 — bronvaste correcties

Voer alleen onderstaande correcties uit op het bestaande prototype van Galerie De Kunst van Kunst. Geen redesignronde, geen nieuwe secties, geen nieuwe flow, geen nieuwe marketingcopy. Het doel is: de huidige flow productiegeschikt maken door bronfouten, debuglagen, CTA-inconsistenties en zichtbare besluitnotities te verwijderen.

De website moet blijven voelen als een rustige verificatieplek van een gevestigde galerie sinds 2005. Niet als webshop, niet als actiepagina, niet als reviewplatform, niet als premium/luxe merk en niet als dagje-uit-site.

BRONLOCK
Houd deze harde regels aan:
- Website = rustige verificatieplek, geen verkoopomgeving.
- Planner = functioneel, geen propositiepagina.
- Vóór de planner komt altijd het persoonlijk welkomstscherm.
- QR-route en persoonlijke link mogen nooit direct naar de agenda.
- Bij persoonlijke route geen chequenummer of postcode opnieuw vragen.
- Partner is alleen individueel zichtbaar op het persoonlijk welkomstscherm.
- Geen partnerlogomuur, nergens.
- Geen nieuwsbrief, cross-sell, reviewverzoek per mail, badges, urgency of schaarste.
- Geen kortingstaal, actietaal, voordeelretoriek, uitje-taal, premiumtaal of webshoptaal.
- € 500 nooit als hero-claim; alleen functioneel in chequevisualisatie, bevestigingsdetails of voorwaarden.

NIET AANPASSEN
Laat deze onderdelen inhoudelijk staan zoals ze nu zijn, behalve wanneer ze geraakt worden door onderstaande correcties:
- Homepage hero
- Reviewfragmenten
- Footer
- Chequeinvoerscherm, behalve CTA-kleur indien nodig
- “Hoe uw afspraakroute werkt”
- “Wat is een Kunst-Waardecheque”
- Praktische informatie homepage
- Galerie-impressiesectie met echte beelden
- Sectie “Voor uw bezoek” op “Meer over de galerie”
- Regel “Maximaal twee bezoekers per cheque, vanaf 12 jaar”
- Plannerstructuur als vier stappen: dag → tijd → gegevens → bevestiging
- “Bij uw bezoek op deze dag inbegrepen” met Lust Bakkerij-vermelding

CORRECTIE 1 — Partnerblok terugzetten op persoonlijk welkomstscherm

Bestand:
PersonalWelcome.tsx

Plaats tussen de hero/intro “Welkom [voornaam]. Uw Kunst-Waardecheque is herkend.” en de chequevisualisatie een rustig partnerblok.

Doel:
Het welkomstscherm moet expliciet laten zien van welke specifieke partner de cheque komt. Dit is de enige plek in de websiteflow waar partnerlogo of partnernaam zichtbaar mag zijn.

Gebruik deze inhoud:
- Label: Namens
- Partnerlogo als beschikbaar
- Partnernaam als fallback wanneer logo ontbreekt

Structuur:
<section aria-label={`Kunst-Waardecheque namens ${partnerName}`} className="mb-8">
  <p className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-3">
    Namens
  </p>
  <div className="bg-[var(--card)] border border-[var(--border)] rounded-[12px] p-6 inline-flex items-center">
    {partnerLogo ? (
      <img
        src={partnerLogo}
        alt={`Logo ${partnerName}`}
        className="h-12 w-auto object-contain"
      />
    ) : (
      <span className="text-base font-medium text-[var(--text)]">
        {partnerName}
      </span>
    )}
  </div>
</section>

Regels:
- Eén partnerlogo.
- Nooit meerdere partnerlogo’s.
- Nooit partnerlogomuur.
- Nooit “mede mogelijk gemaakt door”.
- Nooit “onze partners”.
- Nooit “in samenwerking met”.
- Geen partnerlogo op homepage, planner, FAQ, reviews, voorwaarden of footer.
- Het partnerblok moet rustig en feitelijk zijn; geen badge, geen celebratie, geen marketingstijl.

CORRECTIE 2 — Alle zichtbare prototype- en QA-lagen verwijderen

Bestanden:
- PlannerDay.tsx
- PlannerTime.tsx
- PlannerDetails.tsx
- PlannerConfirmation.tsx
- AboutGallery.tsx
- Check ook Homepage.tsx, PersonalWelcome.tsx, FAQ.tsx en Terms.tsx op achtergebleven labels

Verwijder uit de live bezoekersinterface:
1. Zwarte balken bovenin met:
   - SCHERM X/8
   - PAGINA:
   - PLANNER STAP:
2. Alle monospace/debug-labels die beginnen met:
   - SECTIE:
   - BLOK:
   - PLANNER STAP X:
   - [INTERN]
   - [DUMMYDATA]
   - [Let op:]
   - [Bij persoonlijke route...]
3. Alle inline notities die beginnen met:
   - Intern:
   - Besluit nodig:
   - RouteContext:
4. Alle QA-blokken, waaronder:
   - QA-BLOK: WAT ABSOLUUT NIET MAG
   - Open besluiten op dit scherm
   - Vereiste velden
   - RouteContext-blokken
   - rode, gele, groene, blauwe of zalmroze controlekaarten
5. Alle zichtbare verboden-woordenlijsten.
6. Alle zichtbare dev-notities, copycontrolelijsten en technische submit-uitleg.

Belangrijk:
- Deze informatie mag alleen blijven bestaan als hidden Figma annotation-layer of developer note.
- Niets daarvan mag zichtbaar zijn in de live websiteframes.
- Functionele content blijft staan.
- Echte inhoudelijke koppen zoals “Uw keuze”, “Locatie”, “Praktische informatie”, “Voor uw bezoek” en “Veelgestelde vragen” blijven staan, maar krijgen normale heading-styling.
- Geen monospace gebruiken behalve voor chequenummers.

CORRECTIE 3 — CTA-cascade bronvast maken

Gebruik deze definitieve CTA-lijn:

Homepage primair:
Activeer uw cheque

Homepage secundair:
Meer over de galerie

Chequeinvoer:
Activeer uw cheque

Persoonlijk welkomstscherm:
Plan uw bezoek

Planner stap 1 — dag kiezen:
Kies uw bezoekmoment

Planner stap 2 — tijd kiezen:
Kies uw bezoekmoment

Planner stap 3 — gegevens:
Maak een afspraak

Planner stap 4 — bevestiging:
Geen primaire bevestigknop meer.
Stap 4 is de bevestigde status.

Meer over de galerie:
Activeer uw cheque

Service:
Cheque overdragen

Vervang of verwijder:
- “Controleer mijn cheque” → “Activeer uw cheque”
- “Start planning” → verwijderen
- “Bevestig keuze” → “Kies uw bezoekmoment”
- “Bevestig afspraak” op planner stap 3 → “Maak een afspraak”
- “Bevestig afspraak” op planner stap 4 → verwijderen
- Alle zichtbare “Besluit nodig: CTA”-labels → verwijderen uit live UI

Belangrijk:
- De confirmactie hoort aan het einde van stap 3.
- Stap 4 is geen controlescherm en geen tweede bevestigingsmoment.
- Stap 4 moet beginnen met: “Uw afspraak is bevestigd.”
- Een eventuele “Voeg toe aan agenda” mag alleen als secundaire utility-link of outline-button, niet als primaire CTA.
- Als “Voeg toe aan agenda” nog geen werkende functie heeft, laat hem weg of plaats hem alleen als hidden annotation:
  [BESLUIT NODIG: agenda-functionaliteit]

Niet gebruiken:
- Bevestig keuze
- Controleer mijn cheque
- Start planning
- Plan je bezoek
- Bekijk aanbod
- Ontdek collectie
- Claim
- Verzilver
- Reserveer
- Boek
- Plan uw middag
- Kies uw dagje

CORRECTIE 4 — Planner stap 4 veranderen naar echte bevestigingsstatus

Bestand:
PlannerConfirmation.tsx

Als het huidige scherm nog “Controleer uw afspraak” of een vergelijkbare pre-confirmatie toont, vervang dit door een echte bevestigingspagina.

Titel:
Uw afspraak is bevestigd.

Toon functioneel:
- Dag en datum
- Tijd
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren zonder kosten voor de deur
- Gemiddelde duur 60–90 minuten
- Chequenummer
- Contact: 074 - 291 48 57
- Eventuele dag-specifieke extra, feitelijk en zonder bedrag

Niet tonen:
- primaire knop “Bevestig afspraak”
- € 500 als headline
- “u betaalt niets”
- reviewverzoek
- nieuwsbrief
- bekijk ook
- tips-content
- partnerlogo
- social share
- “deel uw ervaring”

Stap 4 is de status na het maken van de afspraak. De afspraak is dus al gemaakt.

CORRECTIE 5 — Privacyvermelding planner stap 3 bronvast en klein maken

Bestand:
PlannerDetails.tsx

Vervang het huidige privacyvermelding-blok, inclusief opvallende besluitlabels, door één kleine functionele regel onder de velden.

Gebruik deze tekst:

Uw gegevens gebruiken wij voor het bevestigen en uitvoeren van uw bezoek aan de galerie. Afmelden voor partnercommunicatie kan via www.vanons-vooru.nl.

Styling:
<p className="text-sm text-[var(--text-muted)] leading-relaxed mt-4">
  Uw gegevens gebruiken wij voor het bevestigen en uitvoeren van uw bezoek aan de galerie.
  Afmelden voor partnercommunicatie kan via www.vanons-vooru.nl.
</p>

Regels:
- Maak dit geen opvallend blok.
- Geen gele, blauwe of rode besluitkaart.
- Geen label “Besluit nodig”.
- Geen grote privacybox.
- Geen partnerlogo.
- Geen marketingtoestemming.
- Geen nieuwsbrief-opt-in.
- Geen akkoord commerciële opvolging.
- Geen voorkeurvelden.

Privacyverklaring:
- Alleen een link naar /privacyverklaring tonen als die pagina daadwerkelijk bestaat.
- Als de volledige privacyverklaring nog niet gebouwd is, toon geen kapotte link.
- Zet dan alleen in hidden Figma annotation:
  [BESLUIT NODIG: volledige privacyverklaring publiceren]

CORRECTIE 6 — CTA-kleur consistent maken

Bestanden:
- AboutGallery.tsx
- Homepage.tsx
- ActivateCheque.tsx
- PersonalWelcome.tsx
- PlannerDay.tsx
- PlannerTime.tsx
- PlannerDetails.tsx
- PlannerConfirmation.tsx

Alle primaire CTA’s moeten dezelfde bordeauxkleur gebruiken als de primaire homepage-CTA.

Gebruik:
- bestaande primary token als die bestaat, bijvoorbeeld var(--primary)
- of de exacte homepage-waarde uit Homepage.tsx
- fallback als token ontbreekt: #6F172F

Regels:
- Primaire CTA: bordeaux achtergrond, witte tekst.
- Secundaire CTA: outline-styling.
- Tekstlinks: onderstreepte tekstlinks.
- Geen zwarte primaire CTA’s.
- Geen donkerblauwe primaire CTA’s.
- Geen groene conversieknoppen.
- Geen oranje knopvulling.
- “Activeer uw cheque” op AboutGallery.tsx moet identiek zijn aan de homepage-primary button.

Controleer specifiek:
- Homepage “Activeer uw cheque”
- Chequeinvoer “Activeer uw cheque”
- Welkomstscherm “Plan uw bezoek”
- Planner stap 1 “Kies uw bezoekmoment”
- Planner stap 2 “Kies uw bezoekmoment”
- Planner stap 3 “Maak een afspraak”
- Meer over de galerie “Activeer uw cheque”

CORRECTIE 7 — Visuele tokens behouden

Gebruik de bestaande rustige tokenstijl. Als tokens ontbreken, gebruik:

--background: #FAF8F5
--card: #FFFFFF
--muted: #F2EFEA
--text: #221E1F
--text-muted: #5A544F
--border: #E6E1D9
--primary: #6F172F
--accent: #DB9A4A
--destructive: #8A2A2A

Regels:
- Oker #DB9A4A nooit als knopvulling.
- Oker alleen als klein accent, dun lijntje of focus-ring.
- Cards wit met rustige border.
- Geen zware shadows.
- Geen pill-buttons.
- Geen gradients behalve bestaande hero-overlay als die al aanwezig is.
- Geen extra motion toevoegen.

CORRECTIE 8 — Plannerstructuur controleren zonder de flow uit te breiden

De planner moet exact vier stappen hebben:
1. Dag kiezen
2. Tijd kiezen
3. Gegevens
4. Bevestiging

Controleer:
- Stap 1 toont alleen dag/datumkeuze.
- Stap 2 toont alleen tijdsloten.
- Stap 3 toont alleen naam, e-mail en telefoonnummer.
- Stap 4 toont bevestiging.
- Geen extra planner-startscherm.
- Geen extra controle-/reviewstap.
- Geen tijdsloten in stap 1.
- Geen dagkeuze in stap 2.
- Geen partnerlogo in planner.
- Geen nieuwsbrief.
- Geen cross-sell.
- Geen voorkeurvelden voor stijl, collectie, kunstenaar of interesse.

Dagspecifieke extra:
De regel “Bij uw bezoek op deze dag inbegrepen: koffie of thee met gebak bij Lust Bakkerij & Bistro” mag blijven, mits:
- geen bedragen
- geen “gratis”
- geen voordeelretoriek
- geen “meeste voordeel”
- geen badge

CORRECTIE 9 — AboutGallery CTA en content rustiger houden

Bestand:
AboutGallery.tsx

Laat de bestaande echte galeriebeelden en inhoud staan, maar:
- primaire CTA “Activeer uw cheque” moet bordeaux zijn, niet zwart/blauw
- geen debuglabels
- geen QA-blokken
- geen besluitnotities
- geen productgridgevoel
- geen “bekijk aanbod”
- geen prijzen
- geen partnerlogo’s

Galerie-impressies mogen blijven, maar ze moeten voelen als impressie, niet als catalogus of webshop.

CORRECTIE 10 — Live UI mag geen besluittekst meer tonen

Verwijder alle zichtbare besluittekst onder knoppen, velden en blokken.

Voorbeelden die weg moeten uit live UI:
- Besluit nodig: CTA-tekst
- Besluit nodig: volledige privacyverklaring
- Besluit nodig: open besluiten op dit scherm
- Intern: horizontaal scrollbaar
- Intern: tijdpreview
- DUMMYDATA
- Let op: € 500 alleen hier...

Als een besluitnotitie nuttig blijft voor development, verplaats die naar:
- hidden Figma annotation
- developer-only comment
- niet-renderende code comment

NIET toevoegen:
- nieuwe marketingcopy
- extra reviews
- extra CTA’s
- extra pagina’s
- extra route-uitleg
- extra partnercontext buiten welkomstscherm
- nieuwsbrief
- social icons
- reviewverzoek
- partnerlogomuur

QA-EINDCHECK

Controleer na uitvoering:

1. Partnerblok zichtbaar op persoonlijk welkomstscherm met precies één specifieke partner.
2. Geen partnerlogo op homepage, planner, FAQ, reviews, voorwaarden of footer.
3. Geen partnerlogomuur, nergens.
4. Geen zwarte SCHERM/PAGINA/PLANNER-balken meer.
5. Geen monospace-labels behalve chequenummers.
6. Geen SECTIE/BLOK/QA/INTERN/DUMMYDATA/ROUTECONTEXT-labels zichtbaar.
7. Geen open-besluiten-blokken zichtbaar.
8. Geen besluittekst onder CTA’s zichtbaar.
9. Privacyregel is klein, functioneel en zonder opvallende besluitkaart.
10. Afmeld-URL www.vanons-vooru.nl is klein-functioneel aanwezig of als brongegeven behouden.
11. Geen kapotte link naar privacyverklaring.
12. Alle primaire CTA’s gebruiken dezelfde bordeauxkleur.
13. “Activeer uw cheque” is bordeaux op homepage, chequeinvoer en AboutGallery.
14. “Bevestig keuze” komt nergens voor.
15. Planner stap 3 gebruikt “Maak een afspraak”.
16. Planner stap 4 heeft geen primaire “Bevestig afspraak”-knop.
17. Planner stap 4 begint met “Uw afspraak is bevestigd.”
18. Planner heeft exact vier stappen: dag, tijd, gegevens, bevestiging.
19. Dag en tijd zijn niet samengevoegd in één stap.
20. Er is geen nieuwsbrief, cross-sell, reviewverzoek, badge, urgency of schaarste.
21. € 500 staat alleen in chequedetails/bevestigingsdetails, nergens als hero.
22. De site voelt nog steeds als rustige verificatieplek, niet als verkoopomgeving.

Bij twijfel: kies de meest sobere, meest bronvaste optie.