# DKVK_UI_Wireframe_Context.md

## Doel van dit Make-bestand

Algemene UI- en wireframe-richting voor alle low-fidelity prototypes. Geen finale visuele stijl, geen kleurpalet, geen typografiekeuze. Alleen layout-, component- en interactieprincipes die de positionering bewaken: rust, verificatie, geen webshopgevoel, geen verkoopframe, geen luxe-codes.

## Flow / schermen

Niet van toepassing — dit bestand levert principes voor alle wireframes (Core Flow, QR/Link, Service/Error, Admin).

## Verplichte inhoud (visuele en UX-principes)

**Visueel**
- Low-fidelity uitvoering.
- Grijswaarden of zeer beperkte tonale schaal.
- Veel witruimte; rust prevaleert boven dichtheid.
- Eén primaire CTA per scherm.
- Geen finale kleurcodes.
- Geen finale typografiekeuze.
- Geen logo-uitvoering finale; alleen placeholder.

**Layoutprincipes**
- Duidelijke hiërarchie: één hoofdactie, één hoofdboodschap per scherm.
- Eén kolom als basisgrid; secundaire blokken eronder.
- Categorie binnen 3 seconden helder.
- Legitimiteit binnen 10 seconden zichtbaar (adres, "sinds 2005" bij logo, eventueel reviewfragmenten terloops).
- Mobile-first; scherm werkt op kleine viewports — *Besluit nodig: exacte breakpoint (≤360px ja/nee)*.

**CTA-principes**
- Eén primaire CTA per scherm, in een rustige stijl.
- Geen schreeuwerige knoppen.
- Geen zwarte conversieknoppen zonder merkkleur.
- Geen badges, "populairste keuze", "topkeuze".
- Knoptekst uit toegestane lijst — varianten als "Verder" / "Bevestig afspraak" / "Voeg toe aan agenda" / "Meer over de galerie" zijn open beslispunten.

**Formulierprincipes**
- Minimaal aantal velden; geen niet-noodzakelijke invoer.
- Plannerscherm 3: naam, e-mail, telefoonnummer.
- Geen marketing-opt-in, geen nieuwsbriefveld, geen voorkeur stijl/kunstenaar.
- Foutmeldingen rustig en niet-beschuldigend.
- Vooraf invullen waar mogelijk bij persoonlijke route.
- Privacy-verwijzing klein en functioneel — *Besluit nodig: privacytekst*.

**Beeldgebruik**
- Geen stockfotografie.
- Geen lifestylebeelden.
- Geen GIF.
- Geen modellen met schilderijen.
- Geen premium-interieurs.
- Geen "tevreden stelletje"-fotografie.
- Reëel beeld of placeholder zonder verzonnen invulling.
- *Besluit nodig: definitief fotografie-/beeldbeleid*.

**Componentrichting**
- Chequevisualisatie als rustig gestileerde kaart op welkomstscherm en bevestigingspagina.
- Reviewfragmenten als rustige citaten met naam, woonplaats, datum (geen sterrenfilter, geen partnerfilter).
- Foutmelding als inline blok of kleine modal — geen volledige overlay.
- Plannerstappen als progress-arme structuur — *Besluit nodig: progress-indicator ja/nee*.
- Footer met praktische gegevens (adres, telefoon, link voorwaarden, link contact); geen logomuur, geen nieuwsbrief.

## Vaste feiten

- Eén primaire CTA per scherm.
- Welkomstscherm verplicht vóór planner.
- Planner heeft exact vier stappen.
- Adres en telefoon altijd aanwezig in footer.
- Maximaal vijf navigatie-items in hoofdmenu.

## Toegestane CTA's (overzicht voor wireframes)

- **Activeer uw cheque** (homepage + chequeinvoer)
- **Plan uw bezoek** (welkomstscherm primair)
- **Kies uw bezoekmoment** (welkomstscherm secundair)
- **Maak een afspraak** (variant)
- **Cheque overdragen** (servicepagina)
- *Overige knoppen (Verder, Bevestig afspraak, Voeg toe aan agenda, Lees reviews, Bevestig wijziging, Meer over de galerie): Besluit nodig*

## Wat visueel verboden is

- Stockfoto's en lifestylebeelden.
- Bewegende hero (video, GIF, autoplay-carousel).
- Productgrid als hoofdstructuur of webshopraster.
- Badges ("populairste", "meest gekozen", "topkeuze").
- Countdown of timer.
- Popups en exit-intent-modals.
- Partnerlogomuur of meerdere partnerlogo's naast elkaar.
- Luxe-hotelgevoel: marmer, premium-typografie, "exclusief"-codes.
- Art-fair-esthetiek: salonpresentatie, vernissage-codes, kunstenaarsnamen prominent.
- Conversieschreeuwende knoppen.
- Marketingdecoratie: linten, sterren, "nieuw!"-flags.
- Cookie-walls die als marketing voelen.
- Proactieve chatwidgets met "Hoi! Kan ik helpen?".
- Reviewscore prominent als hero (4,4 / 1.683 alleen na expliciet besluit).
- € 500 als grote claim of slogan.
- Felle accentkleuren in dominante vlakken.

## Open besluiten

- Besluit nodig: definitieve visuele stijl
- Besluit nodig: finale kleurcodes
- Besluit nodig: typografiekeuze
- Besluit nodig: fotografie-/beeldbeleid
- Besluit nodig: reviewfragmenten wel/niet zichtbaar op homepage
- Besluit nodig: reviewscore en reviewaantal publiek tonen ja/nee
- Besluit nodig: secundaire CTA "Meer over de galerie"
- Besluit nodig: progress-indicator in planner ja/nee
- Besluit nodig: mobile-first breakpoint (≤360px / ≤380px)
- Besluit nodig: accessibility-niveau (WCAG A / AA / AAA)
- Besluit nodig: stijlgids / design tokens
- Besluit nodig: functionele rustige chatwidget ja/nee
- Besluit nodig: cookie-banner-vorm

## QA-check voor Figma Make

- Layout heeft één primaire CTA per scherm.
- Geen webshop- of e-commerce-elementen.
- Geen stockfoto's of GIF's in hero of elders.
- Geen badges, countdown of urgency-elementen.
- Geen partnerlogomuur of collectieve partnerweergave.
- Geen popups; geen proactieve chat zonder besluit.
- Reviewfragmenten (indien zichtbaar) zonder sterrenfilter, zonder partnerfilter, zonder curatie naar 5★.
- € 500 nergens als hero of slogan; alleen functioneel op chequevisualisatie of details-blok.
- Foutmeldingen rustig en functioneel.
- Voettekst bevat adres en telefoon; geen nieuwsbrief-prompt.
- Alle "besluit nodig"-items zichtbaar gemarkeerd in elk wireframe; nooit als feit ingevuld.
- Wireframes voelen als verificatieplek, niet als verkoopomgeving.
