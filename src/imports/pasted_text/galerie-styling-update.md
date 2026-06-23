Pas alle schermen in dit project aan naar de definitieve styling voor Galerie De Kunst van Kunst.

BELANGRIJK:
Wijzig geen flow, geen schermvolgorde, geen schermlogica en geen bestaande copy, behalve wanneer een knoplabel of zichtbare tekst expliciet buiten de toegestane bronregels valt. In dat geval: herschrijf niet automatisch, maar markeer het als [BESLUIT NODIG] in een design/dev-note. De opdracht is primair: kleur, font, spacing, componentstijl, states, logo-gebruik en visuele rust.

EINDGEVOEL:
Het ontwerp moet voelen als een rustige verificatieplek van een gevestigde galerie sinds 2005. Niet als premium-merk, niet als reviewsite, niet als webshop, niet als actiepagina, niet als klassieke galerie voor kenners. Wie het scherm 5 seconden ziet, moet denken: “dit klopt”, niet: “hier word ik iets aangeprezen”.

Gebruik het bestaande Figma-project alleen als structurele referentie voor rust, cards, hiërarchie en reviewfragmenten. Neem geen zichtbare “premium review site”-taal, ratinghero’s, salespatronen of marketingstijl over.

BRONREGELS DIE ALTIJD GELDEN:
- De website is een verificatieplek, geen verkoopomgeving.
- De planner is functioneel, geen propositiepagina.
- Vóór de planner komt altijd een persoonlijk welkomstscherm.
- QR/persoonlijke link mag nooit direct naar de agenda/planner zonder welkomstscherm.
- De partner is uitsluitend individueel zichtbaar op het persoonlijk welkomstscherm.
- Geen partnerlogomuur, nergens.
- Geen kortingstaal, actietaal, voordeelretoriek, urgency, schaarste, uitje-taal, premiumtaal of webshoptaal.
- Eén primaire CTA per scherm.
- Route A en Route B worden visueel rustig als structuur ondersteund, nooit als voordeel/upgrade.
- € 500 nooit als hero-claim; alleen functioneel in chequevisualisatie of details.

LOGO-GEBRUIK:
Gebruik uitsluitend de aangeleverde logo-assets:
- “logo sinds 2005.png”
- “kvk-logo-e1584061518441.jpg”
- “kvk-logo2-e1584063929407.jpg”

Regels:
- Logo niet natekenen, niet recoloren, niet typografisch herbouwen.
- Desktop header: gebruik het horizontale logo, bij voorkeur met “Sinds 2005” als onderdeel of direct nabij het logo.
- Mobile / smalle layouts: gebruik het compacte of verticale logo als dat rustiger past.
- Logo altijd object-fit: contain.
- Geef het logo ademruimte; geen krappe header.
- “Sinds 2005” alleen klein en feitelijk bij het logo, nooit als badge, claim of hero-element.
- Geen partnerlogo’s op homepage, planner, FAQ, footer of servicepagina’s.
- Op het persoonlijk welkomstscherm mag uitsluitend het logo of de naam van de specifieke partner zichtbaar zijn.

DESIGN TOKENS — KLEUREN:
Vervang alle bestaande hex-codes door onderstaande tokens.

:root {
  --background: #FAF8F5;
  --card: #FFFFFF;
  --muted: #F2EFEA;
  --text: #221E1F;
  --text-muted: #5A544F;
  --border: #E6E1D9;
  --primary: #6F172F;
  --accent: #DB9A4A;
  --destructive: #8A2A2A;
}

Gebruik:
- Pagina-achtergrond: var(--background)
- Cards: var(--card)
- Secundaire blokken: var(--muted)
- Hoofdtekst: var(--text)
- Ondersteunende tekst: var(--text-muted)
- Randen: var(--border)
- Primaire CTA: var(--primary), tekst wit
- Foutmelding: var(--destructive)
- Focus-ring: var(--accent), alleen als 2px outline met 2px offset

Accentregels:
- Bordeaux (#6F172F) is alleen voor primaire CTA’s, belangrijke H1’s op homepage/welkomstscherm en kleine actieve states.
- Oker (#DB9A4A) nooit als knopvulling, nooit als groot vlak, nooit als gradient.
- Oker alleen gebruiken voor focus-ring, een 2px lijn bovenaan de chequevisualisatie en eventueel zeer kleine eyebrow/accenttekst.
- Geen groen, felrood, feloranje, hardgeel, standaard Tailwind rood/oranje/amber/rose.
- Geen gradients, glows of zware shadows.

TYPOGRAFIE:
- Vervang alle fonts door Inter, met sans-serif fallback.
- Verwijder alle serif-, script-, display- en luxury-fonts.
- JetBrains Mono alleen gebruiken voor chequenummers, bijvoorbeeld DKVK-XXXX-XXXX.
- Geen all-caps in koppen.
- Geen italic behalve voor reviewcitaten.
- Bodytekst maximaal 65–72 tekens per regel.

Typografieschaal:
- Display: 28px mobile / 36px desktop, weight 500, line-height 1.2
- H1: 24px mobile / 28px desktop, weight 500, line-height 1.25
- H2: 20px mobile / 22px desktop, weight 500, line-height 1.3
- H3: 18px, weight 500, line-height 1.35
- Body: 16px mobile / 17px desktop, weight 400, line-height 1.5
- Body small: 14px, weight 400
- Label: 14px, weight 500
- Caption: 12px, weight 400

Kopkleur:
- Standaard headings: var(--text)
- Homepage H1 en persoonlijk welkomstscherm H1 mogen var(--primary) gebruiken.
- Geen oversized marketing-headlines.

SPACING:
Gebruik uitsluitend 4-punts schaal:
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128

Regels:
- Mobile-first.
- Outer padding mobile: 16px.
- Desktop max-content: 1120px, gecentreerd.
- Sectieafstand: 48px mobile, 64px desktop.
- Card padding: 24px mobile, 32px desktop.
- Rond primaire CTA: minimaal 24px ruimte boven en onder.
- Welkomstscherm en planner op desktop maximaal 640px breed.
- Homepage mag breder zijn, maar content blijft rustig en niet volgebouwd.

RADIUS:
- Cards: 12px
- Knoppen: 8px
- Inputs: 8px
- Chequevisualisatie: 6px
- Geen pill-shaped knoppen.
- Geen overdreven afgeronde “SaaS”-cards.

SHADOWS:
Gebruik alleen:
- 0 1px 2px rgba(34,30,31,0.04)
- 0 4px 12px rgba(34,30,31,0.05)

Geen zwaardere shadows. Geen glows. Geen glassmorphism.

LAYOUT:
- Mobile-first, 1 kolom.
- Desktop: rustige grids, nooit druk.
- Max-content homepage: 1120px.
- Welkomstscherm/planner: max 640px.
- Geen parallax.
- Geen scroll-animaties.
- Geen autoplay.
- Geen modals/popups/exit-intent.
- Eén duidelijke hoofdactie per scherm.
- Gebruik veel witruimte en duidelijke verticale hiërarchie.
- Voorkom dat cards voelen als prijskaarten, pakketten of producttegels.

KNOPPEN:
Primaire CTA:
- Achtergrond: var(--primary)
- Tekst: wit
- Padding: 14px 24px mobile / 16px 28px desktop
- Border-radius: 8px
- Font-size: 16px
- Font-weight: 500
- Geen iconen tenzij functioneel noodzakelijk.
- Geen uppercase.
- Geen zwarte, groene of felgekleurde conversieknoppen.

Secundaire CTA:
- Transparant
- Border: 1.5px solid var(--border)
- Tekst: var(--text)
- Zelfde radius als primaire knop
- Hover: border var(--primary), tekst var(--primary)

Tertiaire CTA:
- Gewone onderlijnde tekstlink
- Hover: var(--primary)

Disabled:
- 40% opacity
- Geen hover-effect

Toegestane knoplabels:
- Activeer uw cheque
- Plan uw bezoek
- Kies uw bezoekmoment
- Maak een afspraak
- Cheque overdragen
- Meer over de galerie

Als een bestaand knoplabel afwijkt: niet automatisch herschrijven, maar markeer als [BESLUIT NODIG: CTA].

INPUTS:
- Achtergrond: wit
- Border: 1px solid var(--border)
- Border-radius: 8px
- Padding: 12px 14px
- Label altijd boven het veld, niet floating
- Labelkleur: var(--text)
- Placeholder: var(--text-muted)
- Focus:
  - Border: 1.5px solid var(--primary)
  - Outline: 2px solid var(--accent)
  - Outline-offset: 2px
- Foutstaat:
  - Border: 1.5px solid var(--destructive)
  - Foutmelding inline onder veld
  - Foutmelding in var(--destructive)
- Geen agressieve rode vlakken.

CHEQUEVISUALISATIE:
Maak de chequevisualisatie sober en geloofwaardig, geen voucher.

Stijl:
- Witte card
- Max-width: 480px
- Radius: 6px
- Border: 1px solid var(--border)
- Subtle shadow toegestaan
- Bovenaan een smal okerlijntje van 2px in var(--accent)
- Geen stippellijn-randen
- Geen knip-iconen
- Geen couponvorm
- Geen “claim”-gevoel

Inhoudsstijl:
- Chequenummer in JetBrains Mono, klein, kleur var(--text-muted)
- Naam ontvanger groot, Display-schaal
- Partnercontext klein en rustig: “NAMENS [PARTNER]”
- Waarde € 500,— alleen functioneel klein in details, niet als grote claim
- Geldig tot-datum rustig in details
- Geen confetti, geen badge, geen “geactiveerd”-celebratie

HEADER:
Desktop:
- Links het galerie-logo.
- Rechts maximaal eenvoudige navigatie: Voorwaarden, Contact, eventueel Activeer uw cheque.
- Headerhoogte rustig, niet compact gepropt.
- Geen social icons.
- Geen partnerlogo’s.
- Geen sticky salesbar.

Mobile:
- Logo compact of verticaal, object-fit contain.
- Navigatie minimalistisch.
- Geen marketingdrawer.
- Geen partnerlogo’s.

FOOTER:
- Achtergrond: var(--muted)
- Logo klein
- Adres: Geerdinksweg 2, 7555 DM Hengelo
- Telefoon: 074 - 291 48 57
- Links: Voorwaarden, Contact
- Geen nieuwsbrief
- Geen social-iconen
- Geen partnerlogo’s
- Geen “onze partners”
- Geen reviewscore als footerclaim

HOMEPAGE-STYLING:
Doel: binnen 3 seconden duidelijk maken dat dit een galerie is waar iemand met een Kunst-Waardecheque op afspraak een origineel schilderij kiest.

Hero:
- Rustige split-layout op desktop, 1 kolom op mobile.
- Linkerkant tekst, rechterkant abstracte merkvisual of placeholder.
- Geen stockfoto met mensen.
- Geen dame met schilderij.
- Geen productgrid.
- Geen € 500 in hero.
- Eyebrow klein, rustig, eventueel in accentkleur.
- H1 mag bordeaux zijn.
- Body in var(--text-muted), max 65–72 tekens per regel.
- Primaire CTA: Activeer uw cheque.
- Secundaire CTA: Meer over de galerie.
- Eén primaire CTA visueel dominant.

Legitimiteitsblok:
- Kleine rustige cards of row.
- Logo + Sinds 2005.
- Geerdinksweg 2, 7555 DM Hengelo.
- Bezoek uitsluitend op afspraak.
- 074 - 291 48 57.
- Eventueel één reviewfragment, nooit sterren als hero.
- Geen reviewscore-badge.
- Geen “100%”.
- Geen partnerlogo’s.

Hoe-het-werkt:
- Drie rustige stappen:
  1. U heeft een Kunst-Waardecheque ontvangen.
  2. U plant uw bezoek.
  3. U kiest een origineel schilderij in de galerie.
- Gebruik eenvoudige lijniconen of numerieke stappen.
- Geen badges, geen voordeelstijl.

Cheque-uitleg:
- Rustige card of lichte sectie.
- Ondersteun visueel dat er minimaal vijftig werken volledig binnen de cheque vallen.
- Route B visueel als rustige toelichting, niet als upsell.
- Geen percentages.
- Geen exacte maten.
- Geen “ruimere collectie”.
- Geen “duurder werk”.

ACTIVEER UW CHEQUE-SCHERM:
- Max-width 640px.
- Eén card.
- Titel: bestaande copy behouden.
- Velden: chequenummer en postcode.
- Labels boven velden.
- CTA: Activeer uw cheque.
- Foutmeldingen rustig, inline.
- Toon bij fout altijd een rustige service-optie met telefoonnummer.
- Geen verkoopinformatie.
- Geen Route B-uitleg.
- Geen reviewpush.
- Geen extra aanbiedingen.

PERSOONLIJK WELKOMSTSCHERM:
Dit scherm komt altijd vóór de planner.

Layout:
- Desktop max-width 640px.
- Compacte header met galerie-logo.
- Eén centrale card met chequevisualisatie.
- Eyebrow: NAMENS [PARTNER]
- Alleen het logo/de naam van de specifieke partner tonen.
- Geen andere partnerlogo’s.
- H1 rustig, eventueel bordeaux.
- Chequevisualisatie toont functioneel:
  - chequenummer
  - naam ontvanger
  - waarde
  - geldig tot
  - partnernaam
- CTA: Plan uw bezoek.
- Secundair eventueel: Kies uw bezoekmoment.
- Geen celebratie, geen confetti, geen “gefeliciteerd”.
- Geen “uw cheque is geactiveerd”.
- Geen extra aanbiedingen.
- Geen urgency rond geldigheid.

PLANNER:
De planner is functioneel, niet commercieel.

Algemene stijl:
- Desktop max-width 640px.
- Eén duidelijke stap per scherm.
- Rustige stepper bovenaan.
- Geen marketingtekst.
- Geen cross-sell.
- Geen nieuwsbrief-opt-in.
- Geen voorkeuren voor stijl/collectie/kunstenaar.
- Geen badges.
- Geen “nog 1 plek”.
- Geen countdown.
- Geen populaire-tijd-labels.
- Geen producttegels.
- Geen partnerlogo’s.

Scherm 1 — Dag kiezen:
- Kalender of daglijst rustig vormgeven.
- Selected state: border var(--primary), lichte achtergrond var(--muted), geen zware fill.
- Eventuele dag-specifieke extras alleen feitelijk, zonder bedragen en zonder voordeeltoon.
- CTA volgens toegestane labels; anders [BESLUIT NODIG].

Scherm 2 — Tijd kiezen:
- Tijdsloten als rustige buttons/cards.
- Geen schaarste-indicator.
- Selected state sober.
- CTA volgens toegestane labels; anders [BESLUIT NODIG].

Scherm 3 — Gegevens:
- Alleen naam, e-mail, telefoonnummer.
- Bij persoonlijke route velden vooraf ingevuld en aanpasbaar.
- Geen marketing-opt-in.
- Geen nieuwsbrief.
- Geen voorkeurvelden.
- CTA volgens toegestane labels; anders [BESLUIT NODIG].

Scherm 4 — Bevestiging:
- Functionele bevestigingscard.
- Toon dag, tijd, adres, parkeren zonder kosten voor de deur, gemiddelde duur 60–90 minuten en chequenummer.
- € 500 alleen klein-functioneel in details indien aanwezig.
- Geen reviewverzoek.
- Geen nieuwsbrief.
- Geen “bekijk ook”.
- Geen tips-content.
- Eventuele “Voeg toe aan agenda” markeren als [BESLUIT NODIG] als het buiten de toegestane CTA-set valt.

REVIEWS:
Als reviewelementen bestaan:
- Maximaal één reviewfragment in legitimiteitsblok.
- Eventueel twee statische reviewcards lager op de pagina.
- Reviewcitaat klein en italic.
- Naam, woonplaats en datum eronder in var(--text-muted).
- Geen sterren.
- Geen score.
- Geen “100%”.
- Geen carousel.
- Geen autoplay.
- Geen filtering.
- Geen reviewscore als hero.

BEELDEN:
- Verwijder alle stockfoto’s en lifestylebeelden.
- Vervang ontbrekende of ongeschikte beelden door een rustig placeholder-blok in var(--muted) met label:
  “Beeld volgt — besluit nodig”
- Geen personen met schilderij.
- Geen luxe interieurbeeld.
- Geen webshop/productfotografie.
- Geen GIF’s.
- Geen parallax.
- Geen autoplay-video.
- Abstracte merkvlakken geïnspireerd op het logo zijn toegestaan, maar sober en beperkt.

VERWIJDER VOLLEDIG:
- Partnerlogomuren
- Partneroverzichten
- “Mede mogelijk gemaakt door”-achtige blokken
- Badges
- Countdown timers
- “Populair”-flags
- “Nog X plekken”-meldingen
- Sterrenscores als hero
- Popups
- Exit-intent-modals
- Nieuwsbriefblokken
- Social follow-secties
- Productgrids
- Webshopkaarten
- Prijskaarten
- Gradients
- Glows
- Zware shadows
- Serif/script/display-fonts
- Stockfoto’s en lifestylebeelden
- Alle Tailwind standaardpaletclasses zoals bg-red-, bg-orange-, bg-yellow-, bg-amber-, bg-rose-
Gebruik in code alleen tokens/classes zoals bg-primary, bg-card, bg-background, bg-muted, bg-accent, bg-destructive of bg-[var(--token)].

VERBODEN VISUELE FRAMES:
Render niets dat voelt als:
- waardebon
- voucher
- kortingsactie
- salesfunnel
- webshop
- premium/luxe merk
- reviewplatform
- klassiek kunstkenners-galerie
- dagje-uit pagina
- arrangementpagina
- interieurproductshop

VERBODEN ZICHTBARE WOORDEN/FRAMES:
Laat deze woorden niet zichtbaar terugkomen in nieuwe UI-tekst of labels:
waardebon, voucher, korting, actie, aanbieding, deal, voordeel, profiteer, claim, grijp uw kans, gratis als claim, u betaalt niets, verzilveren, dagje, middag, uitje, beleving, arrangement, premium, luxe, exclusief, curated, ruimere collectie, duurder schilderij, laatste kans, nog maar, snel vol, netwerk van partners, mede mogelijk gemaakt door, bekijk ook, nieuwsbrief, shop nu, koop direct.

Als bestaande copy deze woorden bevat: niet autonoom herschrijven, maar markeer als [BESLUIT NODIG: COPY].

MOTION:
- Default geen motion.
- Toegestaan:
  - 150–200ms ease-out op hover/focus
  - 200–300ms fade op paginawissel
- Respecteer prefers-reduced-motion.
- Geen scroll-reveals.
- Geen parallax.
- Geen carousels.

ACCESSIBILITY:
- Contrast minimaal WCAG AA.
- Focus states altijd zichtbaar.
- Buttons en inputs minimaal 44px hoog/touch target.
- Labels altijd zichtbaar.
- Error states niet alleen met kleur communiceren.
- Logo alt: “Galerie De Kunst van Kunst”.
- Partnerlogo alt alleen op persoonlijk welkomstscherm: “[Partner]”.

COMPONENTEN DIE JE MOET STYLEN:
- Desktop header
- Mobile header
- Footer
- Homepage hero
- Legitimiteitsblok
- Review snippet card
- Hoe-het-werkt cards
- Cheque activatie screen
- Persoonlijk welkomstscherm
- Chequevisualisatie
- Planner stepper
- Planner dag kiezen
- Planner tijd kiezen
- Planner gegevens
- Planner bevestiging
- Buttons
- Inputs
- Selectable cards
- Error states
- Empty / no availability state
- Placeholder beeldblok
- Design tokens

QA-LOCK:
Controleer na styling:
1. Voelt de website binnen 3 seconden als rustige verificatieplek?
2. Staat er nergens € 500 als hero-claim?
3. Is er nergens een partnerlogomuur?
4. Komt vóór de planner altijd het persoonlijk welkomstscherm?
5. Heeft elk scherm maximaal één primaire CTA?
6. Zijn alle CTA’s toegestaan of als [BESLUIT NODIG] gemarkeerd?
7. Zijn stockfoto’s/lifestylebeelden verwijderd?
8. Zijn reviews sober en zonder scorehero?
9. Is de planner compact, functioneel en zonder cross-sell?
10. Zijn kleur, font, spacing, radius en shadows volledig token-based?
11. Zijn alle verboden sales-, korting-, uitje-, premium- en webshopframes visueel verwijderd?

Bij twijfel: kies de meest sobere optie.