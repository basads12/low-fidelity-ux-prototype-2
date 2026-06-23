# Low-fidelity UX-prototype Plan — De Kunst van Kunst
## Core Flow: Algemene Website-route

**Versie:** V1.0  
**Datum:** 25 april 2026  
**Flow:** Homepage → Chequeinvoer → Persoonlijk welkomstscherm → Planner (4 stappen) → Bevestigd  
**Doel:** UX-besluiten zichtbaar maken voor verificatieplek (geen verkoopomgeving)

---

## Scherm 1: Homepage

### 1. Schermnaam
Homepage (algemene website-entry)

### 2. Doel van het scherm
- Categorie bevestigen binnen 3 seconden (galerie, geen klassieke kunstwereld, geen waardebon, geen actie)
- Legitimiteit zichtbaar maken binnen 10 seconden
- Klant naar chequeinvoer leiden

### 3. Primaire klantvraag
"Waar ben ik? Klopt dit?"

### 4. Contentblokken
1. **Hero (3 sec)**
   - Rustige feitelijke introductie galerie + Kunst-Waardecheque
   - "Galerie waar u met een Kunst-Waardecheque een origineel schilderij kiest"
   - Logo met "sinds 2005" (alleen bij logo)
   - Geen € 500 als hoofdclaim

2. **Legitimiteitsblok (binnen 10 sec)**
   - Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
   - Telefoon: 074 - 291 48 57
   - Fysieke galerie sinds 2005
   - Optioneel: reviewfragmenten terloops (citaat, naam, woonplaats) — Besluit nodig: reviewfragmenten op homepage

3. **Hoe het werkt (binnen 30 sec)**
   - Drie stappen in rustige grid:
     - Stap 1: U heeft een cheque ontvangen
     - Stap 2: U plant uw bezoek
     - Stap 3: U kiest uw schilderij in de galerie

4. **Cheque-uitleg-blok**
   - Wat is een Kunst-Waardecheque
   - Minimaal 50 werken volledig binnen cheque
   - Verschillende formaten en stijlen (geen exacte maten)
   - Eventuele meerprijs wordt in galerie rustig toegelicht
   - Certificaat altijd inbegrepen

5. **Praktisch**
   - Adres, telefoon
   - Bezoek uitsluitend op afspraak
   - Parkeren zonder kosten voor de deur
   - Besluit nodig: openingstijden

6. **Footer**
   - Adres, telefoon
   - Link voorwaarden
   - Link contact
   - Geen logomuur partners
   - Geen nieuwsbrief-prompt

### 5. Primaire CTA
**"Activeer uw cheque"**

### 6. Secundaire CTA indien toegestaan
**"Meer over de galerie"** — Besluit nodig: exacte tekst, bestemming

### 7. Open besluiten
- Besluit nodig: openingstijden galerie
- Besluit nodig: reviewfragmenten op homepage ja/nee
- Besluit nodig: reviewscore en reviewaantal publiek tonen ja/nee
- Besluit nodig: secundaire CTA "Meer over de galerie" exacte tekst en link
- Besluit nodig: definitief fotografie-/beeldbeleid

### 8. QA-risico's
- € 500 mag NIET in hero verschijnen
- Geen partnerlogomuur
- Geen "mede mogelijk gemaakt door"
- Geen collectieve partnervermelding
- Geen "100% tevredenheidsgarantie"
- Geen kortingstaal (korting, voordeel, deal, actie)
- Geen urgency ("laatste kans", "nog maar")
- Geen uitje-taal ("middag", "dagje", "beleving")
- Reviewscore niet als hoofdclaim zonder besluit
- Geen stockfoto's (dame-met-schilderij)
- Geen GIF
- Geen badges
- Geen countdown

### 9. Wat absoluut niet mag
- € 500 als hero-element of hoofdclaim
- Partnerlogomuur of meerdere partners
- "Mede mogelijk gemaakt door"
- Kortingspercentages (25-50%)
- "Plan uw middag", "Boek uw beleving"
- "Verzilver uw voucher"
- "100% tevredenheidsgarantie"
- "8 Verbonden kunstenaars"
- Reviewscore prominent als hero zonder besluit
- Exacte maten in copy ("40×50 tot 60×80")
- "Ruimere collectie"
- Dame-met-schilderij stockfoto
- GIF met model
- Koopavond-uitroep
- "Erkenningsgebaar" als publieke merkmond
- Nieuwsbrief-inschrijfformulier
- Tweede primaire CTA naast eerste

---

## Scherm 2: Chequeinvoer (Activeer uw cheque)

### 1. Schermnaam
Chequeinvoer / Activeer uw cheque-scherm

### 2. Doel van het scherm
- Cheque herkennen via algemene route vóór persoonlijk welkomstscherm
- Rustige invoer zonder druk

### 3. Primaire klantvraag
"Ik heb een cheque — werkt het?"

### 4. Contentblokken
1. **Instructieblok**
   - Korte rustige uitleg
   - "Vul uw chequenummer en postcode in"
   - "U vindt deze op uw Kunst-Waardecheque"

2. **Invoervelden**
   - Chequenummer (tekstveld)
   - Postcode (tekstveld)
   - Beide verplicht
   - Labels boven velden

3. **Foutmelding-zone**
   - Alleen zichtbaar bij fout
   - Rustige niet-beschuldigende taal
   - Geen "u heeft fout ingevoerd"
   - Besluit nodig: exacte foutmeldingstekst

4. **Helpblok**
   - "Lukt het niet? Neem rustig contact op"
   - Telefoon: 074 - 291 48 57
   - Geen urgency

5. **Routecontext-blok (intern label)**
   - Label: "Dit scherm alleen voor algemene route"
   - "Bij QR/persoonlijke link: automatische herkenning → direct naar welkomstscherm"

### 5. Primaire CTA
**"Activeer uw cheque"**

### 6. Secundaire CTA indien toegestaan
Geen

### 7. Open besluiten
- Besluit nodig: exacte foutmeldingstekst bij "cheque niet gevonden"
- Besluit nodig: exacte foutmeldingstekst bij "postcode klopt niet"
- Besluit nodig: exacte foutmeldingstekst bij "verlopen cheque"
- Besluit nodig: exacte foutmeldingstekst bij "cheque al gebruikt"
- Besluit nodig: technische datavelden persoonlijke link/QR (voor andere routes)

### 8. QA-risico's
- Mag NIET direct naar planner zonder welkomstscherm
- Geen "verzilver uw voucher"-taal
- Geen nieuwsbrief-opt-in
- Geen marketing-toon
- Foutmeldingen mogen niet beschuldigend zijn
- Geen urgency bij verlopen cheque
- Geen automatische coulance-belofte

### 9. Wat absoluut niet mag
- Directe doorlink naar planner zonder welkomstscherm (Wet 16 schending)
- "Verzilver uw voucher"
- "Claim uw cheque"
- Commerciële uitleg
- Route B-uitleg op dit scherm
- Kortingstaal
- Nieuwsbrief-opt-in
- Pre-fill-aanbieding
- Tracking-banner
- Beschuldigende foutmeldingen ("u heeft fout ingevoerd")
- Urgency bij foutmeldingen
- Automatische coulance-belofte op website

---

## Scherm 3: Persoonlijk welkomstscherm

### 1. Schermnaam
Persoonlijk welkomstscherm

### 2. Doel van het scherm
- Bridges partner-context naar galerie-context
- Cheque herkenbaar maken
- Routekader plaatsen vóór planner (verplichte tussenstap)
- Geleend vertrouwen (partner) overgeven aan geverifieerd vertrouwen (galerie)

### 3. Primaire klantvraag
"Is mijn cheque herkend? Wat nu?"

### 4. Contentblokken
1. **Welkomstboodschap**
   - Goedgekeurde tekst: "Welkom [voornaam]. Uw Kunst-Waardecheque is herkend."
   - Rustige toon, geen celebratie

2. **Partnerzichtbaarheid (individueel)**
   - "Namens [partner]"
   - Logo en/of naam van uitsluitend de specifieke partner
   - Geen andere partners
   - Geen "een van onze partners"

3. **Chequevisualisatie**
   - Rustig gestileerde kaart
   - Chequenummer: [KWC-2024-xxxxx]
   - Waarde: € 500,— (feitelijk in details, niet als hero)
   - Geldig tot: [datum]
   - Besluit nodig: verplichting papieren cheque meenemen

4. **Route A/B-uitleg als structuur**
   - **Route A:**
     - "In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende formaten en stijlen"
     - Geen exacte maten
   - **Route B:**
     - "Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend"
     - "Een eventuele meerprijs lichten wij in de galerie rustig toe"
     - Geen percentages
     - Geen "ruimere collectie"
     - Geen "duurder schilderij"

5. **Praktische informatie**
   - Bezoek op afspraak
   - Gemiddelde duur 60–90 min
   - Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
   - Persoonlijke ontvangst

### 5. Primaire CTA
**"Plan uw bezoek"**

### 6. Secundaire CTA indien toegestaan
**"Kies uw bezoekmoment"** (variant)

### 7. Open besluiten
- Besluit nodig: secundaire CTA definitieve keuze
- Besluit nodig: verplichting papieren cheque meenemen ja/nee
- Besluit nodig: technische datavelden persoonlijke link/QR (auto-herkenning)

### 8. QA-risico's
- GEEN "Gefeliciteerd, uw cheque is geactiveerd!" celebratie
- GEEN andere partners tonen
- GEEN exacte maten ("verschillende formaten en stijlen" verplicht)
- GEEN kortingspercentages bij Route B
- GEEN "ruimere collectie"-taal
- € 500 alleen in chequevisualisatie, niet als hero
- GEEN "erkenningsgebaar" als publieke merkmond
- GEEN extras met bedragen
- GEEN voordeel-stapel
- GEEN commerciële aanbiedingen
- GEEN nieuwsbrief-opt-in

### 9. Wat absoluut niet mag
- "Gefeliciteerd, uw cheque is geactiveerd!" (celebratie-toon)
- Andere partners zichtbaar
- Partnerlogomuur
- "Een van onze partners"
- € 500 als hero-claim
- Exacte maten (40×50, 50×40, 60×80)
- "25 tot 50 procent korting"
- "Ruimere collectie"
- "Duurder schilderij"
- "Hogere galerieprijs" als publieke frase
- Bedragen bij extras
- "Meeste voordeel"
- Commerciële aanbiedingen
- Nieuwsbrief-opt-in
- Cross-sell
- "Boek uw beleving"
- "Plan uw middag"
- Urgency op geldigheidsdatum
- "Erkenningsgebaar" als publieke claim

---

## Scherm 4: Planner stap 1 — Dag kiezen

### 1. Schermnaam
Planner stap 1: Dag kiezen

### 2. Doel van het scherm
- Beschikbare dagen rustig presenteren zonder druk of voordeel-framing
- Eén beslissing per scherm

### 3. Primaire klantvraag
"Wanneer past mij?"

### 4. Contentblokken
1. **Progress-indicator (optioneel)**
   - Stap 1 van 4: Dag
   - Besluit nodig: progress-indicator ja/nee

2. **Instructieblok**
   - "Kies een dag die u past"
   - Rustige toon

3. **Beschikbare dagen**
   - Rustige overzichtsstructuur (lijst of grid)
   - Dagnaam + datum per keuze
   - Radio-select of card-select pattern
   - Geen badges
   - Geen "populairste dag"
   - Geen urgency

4. **Dag-specifieke extras (indien van toepassing)**
   - Concreet benoemen met partnernaam
   - Voorbeeld: "Bij uw bezoek: koffie met gebak bij Bakkerij Van Duin"
   - GEEN bedragen (€ 97,50 verboden)
   - GEEN "meeste voordeel"
   - GEEN voordeel-stapel
   - "Belevingspakket" alleen intern, niet user-facing

### 5. Primaire CTA
**"Verder"** — Besluit nodig: exacte tekst ("Verder" of "Volgende stap")

### 6. Secundaire CTA indien toegestaan
Geen

### 7. Open besluiten
- Besluit nodig: CTA-tekst ("Verder" of "Volgende stap")
- Besluit nodig: openingstijden galerie
- Besluit nodig: exacte beschikbare dagen
- Besluit nodig: maximale bezoekers per slot
- Besluit nodig: criterium voor "feitelijk drukker/rustiger" labels (indien gebruikt)
- Besluit nodig: progress-indicator in planner ja/nee

### 8. QA-risico's
- GEEN "Plan uw middag", "dagje uit", "arrangement"
- GEEN "meeste voordeel", "populairste dag"
- GEEN bedragen bij extras
- GEEN urgency ("snel vol")
- GEEN schaarste-indicatoren
- GEEN badges
- Extras alleen met concrete partnernaam
- GEEN "belevingspakket" user-facing

### 9. Wat absoluut niet mag
- "Plan uw middag"
- "Dagje uit"
- "Arrangement"
- "Snel vol"
- "Populairste dag"
- "Meeste voordeel"
- Bedragen bij extras (€ 97,50 of pakketwaarde)
- "Belevingspakket" als user-facing term
- Voordeel-stapel
- "Rustigste dag" tenzij feitelijk vastgesteld
- Tips voor dagkeuze als marketingtool
- Badges ("aangeraden", "beste keuze")
- Extra inhoudelijke tekst die afleidt van keuze

---

## Scherm 5: Planner stap 2 — Tijd kiezen

### 1. Schermnaam
Planner stap 2: Tijd kiezen

### 2. Doel van het scherm
- Tijdslot binnen gekozen dag selecteren zonder druk
- Frictieloos, één beslissing

### 3. Primaire klantvraag
"Welk tijdslot?"

### 4. Contentblokken
1. **Progress-indicator (optioneel)**
   - Stap 2 van 4: Tijd
   - Besluit nodig: progress-indicator ja/nee

2. **Gekozen dag-reminder**
   - Klein blok met gekozen dag
   - Optioneel terug-naar-dag-link

3. **Instructieblok**
   - "Kies een tijdslot"
   - "Gemiddelde duur bezoek: 60–90 minuten"

4. **Beschikbare tijdsloten**
   - Rustige grid of lijst
   - Tijdslot-weergave (bijvoorbeeld: 10:00 - 11:30)
   - Radio-select of card-select
   - Geen schaarste-indicators
   - Geen countdown
   - Geen "nog 1 plek"

### 5. Primaire CTA
**"Verder"** — Besluit nodig: exacte tekst ("Verder" of "Volgende stap")

### 6. Secundaire CTA indien toegestaan
Geen

### 7. Open besluiten
- Besluit nodig: CTA-tekst ("Verder" of "Volgende stap")
- Besluit nodig: exacte tijdsloten
- Besluit nodig: duur per slot
- Besluit nodig: maximaal aantal bezoekers per slot
- Besluit nodig: beleid geen tijdsloten beschikbaar

### 8. QA-risico's
- GEEN schaarste-indicatoren ("nog 1 plek")
- GEEN countdown
- GEEN "populairste tijd"
- GEEN conversie-knoppen
- GEEN e-commerce-taal
- GEEN extra verkoopinformatie
- GEEN "snel boeken"

### 9. Wat absoluut niet mag
- Schaarste-indicatoren ("nog 1 plek!", "bijna vol")
- Countdown-timers
- "Populairste tijd"
- "Meest gekozen"
- Conversiepatronen uit e-commerce
- Extra verkoopinformatie op dit scherm
- "Snel boeken"-druk
- Badges
- Tijdsdruk-taal
- Cross-sell

---

## Scherm 6: Planner stap 3 — Gegevens

### 1. Schermnaam
Planner stap 3: Gegevens

### 2. Doel van het scherm
- Minimale klantgegevens verzamelen voor persoonlijke ontvangst
- Alleen noodzakelijke velden

### 3. Primaire klantvraag
"Met welke gegevens kom ik?"

### 4. Contentblokken
1. **Progress-indicator (optioneel)**
   - Stap 3 van 4: Gegevens
   - Besluit nodig: progress-indicator ja/nee

2. **Keuze-samenvatting**
   - Klein blok met gekozen dag + tijd
   - Optioneel terug-link

3. **Instructieblok**
   - "Vul uw gegevens in voor de persoonlijke ontvangst"

4. **Formulier (minimaal)**
   - **Naam** (verplicht)
   - **E-mailadres** (verplicht)
   - **Telefoonnummer** (verplicht)
   - Bij persoonlijke route: vooraf ingevuld waar mogelijk, klant kan corrigeren
   - Labels boven velden
   - Duidelijke required-markers

5. **Privacyvermelding**
   - Korte verwijzing naar voorwaardenpagina
   - "Afmelding via www.vanons-vooru.nl voor partnercommunicatie"
   - Besluit nodig: volledige privacyverklaring

### 5. Primaire CTA
**"Bevestig afspraak"** — Besluit nodig (alternatieven: "Plan uw bezoek" / "Kies uw bezoekmoment" / "Maak een afspraak")

### 6. Secundaire CTA indien toegestaan
Geen

### 7. Open besluiten
- Besluit nodig: CTA-tekst definitieve keuze uit alternatieven
- Besluit nodig: volledige privacyverklaring
- Besluit nodig: technische datavelden persoonlijke link (voor pre-fill)

### 8. QA-risico's
- GEEN marketing-opt-ins
- GEEN nieuwsbrief-opt-in
- GEEN "akkoord commerciële opvolging"
- GEEN voorkeur stijl/collectie
- GEEN voorkeur kunstenaar
- GEEN "Wilt u op de hoogte blijven van nieuwe werken?"
- ALLEEN naam, e-mail, telefoonnummer
- GEEN overige niet-noodzakelijke velden

### 9. Wat absoluut niet mag
- Marketing-opt-ins (checkboxes voor commerciële berichten)
- Nieuwsbrief-opt-in
- "Akkoord commerciële opvolging"
- Voorkeur stijl/collectie-vragen
- Voorkeur kunstenaar-vragen
- "Wilt u op de hoogte blijven van nieuwe werken?"
- Extra velden buiten naam, e-mail, telefoon
- Voorkeuren kunstrichting
- Smaakprofiel-vragen
- Productselectie
- Upsell-vragen

---

## Scherm 7: Planner stap 4 — Bevestiging

### 1. Schermnaam
Planner stap 4: Bevestiging

### 2. Doel van het scherm
- Functionele bevestiging van de afspraak
- Praktische informatie samenvatten
- Geen verkoopinformatie

### 3. Primaire klantvraag
"Is alles geregeld?"

### 4. Contentblokken
1. **Progress-indicator (optioneel)**
   - Stap 4 van 4: Bevestiging
   - Besluit nodig: progress-indicator ja/nee

2. **Afspraakdetails**
   - Dag: [gekozen dag]
   - Tijd: [gekozen tijdslot]
   - Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
   - Parkeren: zonder kosten voor de deur (niet "gratis" als hoofdclaim)
   - Gemiddelde duur: 60–90 minuten

3. **Chequegegevens (klein-functioneel in details-blok)**
   - Chequenummer: [KWC-xxxx]
   - Waarde: € 500,—
   - NIET als hero of headline
   - Feitelijk in details, niet als verkoopargument

4. **Praktische instructie**
   - Persoonlijke ontvangst
   - Koffie of thee aangeboden
   - Besluit nodig: verplichting papieren cheque meenemen (niet als instructie tot operationeel bevestigd)

5. **Eventuele dag-specifieke extras**
   - Concreet met partnernaam
   - GEEN bedragen
   - Voorbeeld: "Bij uw bezoek: koffie met gebak bij Bakkerij Van Duin"

6. **Contact bij vragen**
   - Telefoon: 074 - 291 48 57
   - Functioneel

### 5. Primaire CTA
**"Voeg toe aan agenda"** — Besluit nodig: exacte tekst en functionaliteit

### 6. Secundaire CTA indien toegestaan
Contactmogelijkheid (telefoon)

### 7. Open besluiten
- Besluit nodig: CTA "Voeg toe aan agenda" definitieve keuze
- Besluit nodig: verplichting papieren cheque meenemen ja/nee
- Besluit nodig: agenda-export functionaliteit (ICS, Google Calendar, etc.)

### 8. QA-risico's
- GEEN € 500 als hero of headline
- GEEN "u betaalt niets" als hoofdclaim
- GEEN reviewverzoek
- GEEN nieuwsbrief
- GEEN "bekijk ook"
- GEEN commerciële teaser
- GEEN partners buiten specifieke partnercontext
- GEEN "kunstenaar van de maand"
- GEEN tips-content als push

### 9. Wat absoluut niet mag
- € 500 als hero, headline of hoofdclaim
- "U betaalt niets" als verkoopargument
- Reviewverzoek op dit scherm
- Nieuwsbrief-prompt
- "Bekijk ook"-blokken
- Commerciële teaser
- Partners buiten de specifieke partnercontext van deze cheque
- "Kunstenaar van de maand"
- Tips-content als content-push
- "Wat ga ik kopen?"-teaser
- Aftercare-aankondiging
- Tweede-werk-prompt
- Cross-sell
- Upsell

---

## Scherm 8: Afspraak bevestigd

### 1. Schermnaam
Afspraak bevestigd (eindscherm)

### 2. Doel van het scherm
- Bevestiging dat alles geregeld is
- Verwachting email communiceren
- Einde van plannerflow

### 3. Primaire klantvraag
"Is alles klaar?"

### 4. Contentblokken
1. **Succesmelding**
   - "Uw afspraak is bevestigd"
   - Rustige toon, geen overdreven celebratie
   - Check-mark of rustig succeselement

2. **Email-verwachting**
   - "U ontvangt binnen enkele minuten een bevestigingsmail"
   - E-mailadres van klant tonen (bevestiging)

3. **Kerndetails samenvatting**
   - Dag: [gekozen dag]
   - Tijd: [gekozen tijdslot]
   - Locatie: Geerdinksweg 2, 7555 DM Hengelo (OV)

4. **Wat te verwachten (optioneel)**
   - Bevestigingsmail binnen enkele minuten
   - Persoonlijke ontvangst in galerie
   - Gemiddelde duur 60–90 min
   - Geen verkoopinformatie

5. **Contact bij vragen**
   - Telefoon: 074 - 291 48 57
   - Functioneel
   - "Vragen of wijzigen?"

### 5. Primaire CTA
Geen — eindscherm

### 6. Secundaire CTA indien toegestaan
Eventueel link naar servicepagina "Afspraak wijzigen" (functioneel)

### 7. Open besluiten
- Besluit nodig: secundaire link naar "Afspraak wijzigen" ja/nee
- Besluit nodig: e-mailadres galerie publiek
- Besluit nodig: datumbevestigingsmail (één dag ervoor) exacte tekst

### 8. QA-risico's
- GEEN aftercare-marketing
- GEEN nieuwsbrief-prompt
- GEEN reviewverzoek per mail (Wet 7)
- GEEN "bekijk ook"
- GEEN tweede-werk-prompt
- GEEN retargeting-sequences
- Na aankoop geldt stilte (Wet 7)

### 9. Wat absoluut niet mag
- Aftercare-marketing ("Wat vond u van uw bezoek?")
- Nieuwsbrief-inschrijvingsprompt
- Reviewverzoek per e-mail (Wet 7, Wet 8)
- "Bekijk ook onze nieuwe werken"
- Tweede-werk-prompt ("Ook mooi voor uw partner")
- Retargeting of retentie-sequences
- "Denk aan ons bij uw volgende verbouwing"
- Partner-nieuwsbrief in naam van galerie
- Commerciële doorverwijzing
- Tips-content als marketing
- Cross-sell
- Upsell
- "Laat een review achter" per mail

---

## Bevestigingsmail Blueprint (niet onderdeel van prototype, maar referentie)

**Let op:** De bevestigingsmail is een apart artifact en wordt NIET in het prototype gebouwd. Ter referentie:

### Verplichte inhoud bevestigingsmail
1. Korte feitelijke bevestiging (geen "Gefeliciteerd!")
2. Dag en tijd
3. Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
4. Parkeren: zonder kosten voor de deur
5. Gemiddelde duur: 60-90 minuten
6. Chequenummer (klein-functioneel in details)
7. Eventuele dag-specifieke extras zonder bedragen, met partnernaam
8. Contact: 074 - 291 48 57
9. Besluit nodig: instructie papieren cheque meenemen

### Verboden in bevestigingsmail
- € 500 als headline
- "U betaalt niets"
- Reviewverzoek per mail
- Nieuwsbrief-prompt
- "Bekijk ook"
- Kunstenaarscontent
- Tips-content als push
- Commerciële teaser

---

## Algemene UX-principes over alle schermen

### Layout
- Eén primaire CTA per scherm
- Één kolom als basisgrid (mobile-first)
- Veel witruimte
- Rustige hiërarchie

### Visuele richting (low-fidelity)
- Grijswaarden of zeer beperkte tonale schaal
- Geen finale kleurcodes
- Geen finale typografie
- Placeholders voor beelden (geen stockfoto's)
- Geen GIF
- Geen bewegende elementen

### Componenten
- Chequevisualisatie als rustige kaart
- Reviewfragmenten (indien gebruikt): citaat, naam, woonplaats — geen sterrenfilter
- Foutmeldingen: inline of kleine modal, niet volledige overlay
- Footer: adres, telefoon, links voorwaarden/contact — geen logomuur

### Formulieren
- Minimaal aantal velden
- Labels boven velden
- Required-markers duidelijk
- Foutmeldingen rustig en niet-beschuldigend

### Verboden visuele elementen
- Stockfoto's en lifestylebeelden
- Bewegende hero (video, GIF, autoplay)
- Productgrid als hoofdstructuur
- Badges
- Countdown of timer
- Popups en exit-intent
- Partnerlogomuur
- Conversieschreeuwende knoppen
- Reviewscore prominent als hero
- € 500 als grote claim
- Felle accentkleuren in dominante vlakken

---

## Open besluiten overzicht (alle schermen)

### Homepage
- Openingstijden galerie
- Reviewfragmenten op homepage ja/nee
- Reviewscore en reviewaantal publiek tonen ja/nee
- Secundaire CTA "Meer over de galerie" definitief
- Definitief fotografie-/beeldbeleid

### Chequeinvoer
- Exacte foutmeldingstekst per scenario
- Technische datavelden persoonlijke link/QR

### Persoonlijk welkomstscherm
- Secundaire CTA definitieve keuze
- Verplichting papieren cheque meenemen ja/nee

### Planner stap 1
- CTA-tekst ("Verder" of "Volgende stap")
- Exacte beschikbare dagen
- Maximale bezoekers per slot
- Criterium feitelijk drukker/rustiger
- Progress-indicator ja/nee

### Planner stap 2
- CTA-tekst ("Verder" of "Volgende stap")
- Exacte tijdsloten
- Duur per slot
- Beleid geen tijdsloten beschikbaar

### Planner stap 3
- CTA-tekst definitieve keuze
- Volledige privacyverklaring

### Planner stap 4
- CTA "Voeg toe aan agenda" definitief
- Agenda-export functionaliteit

### Afspraak bevestigd
- Link naar "Afspraak wijzigen" ja/nee
- E-mailadres galerie publiek
- Datumbevestigingsmail tekst

### Algemeen
- Mobile-first breakpoint (≤360px / ≤380px)
- Accessibility-niveau (WCAG A/AA/AAA)
- Progress-indicator in planner ja/nee
- Functionele rustige chatwidget ja/nee
- Cookie-banner-vorm

---

## QA-checklist (alle schermen moeten hieraan voldoen)

### Positionering
- [ ] Website voelt als verificatieplek, niet als verkoopomgeving
- [ ] Planner is functioneel, geen propositiepagina
- [ ] Categorie binnen 3 seconden helder op homepage
- [ ] Legitimiteit binnen 10 seconden zichtbaar

### Structuur
- [ ] Welkomstscherm staat ALTIJD vóór planner (Wet 16)
- [ ] Planner heeft exact vier stappen
- [ ] Eén primaire CTA per scherm
- [ ] Bij persoonlijke route: geen chequenummer/postcode opnieuw vragen

### Partner
- [ ] Partner alleen individueel zichtbaar op welkomstscherm
- [ ] Geen partnerlogomuur nergens
- [ ] Geen "mede mogelijk gemaakt door"
- [ ] Geen collectieve partnercommunicatie

### Taal
- [ ] Geen kortingstaal (korting, voordeel, deal, actie)
- [ ] Geen percentages (25-50%)
- [ ] Geen urgency-taal ("nog maar", "laatste kans")
- [ ] Geen uitje-taal ("middag", "dagje", "beleving")
- [ ] Route B als verrekening, niet als korting
- [ ] "Plan uw bezoek" of varianten, NIET "Plan uw middag"
- [ ] "Activeer uw cheque", NIET "Verzilver uw voucher"

### Visueel
- [ ] € 500 nergens als hero
- [ ] Geen exacte maten ("verschillende formaten en stijlen")
- [ ] Geen stockfoto's, GIF, bewegende elementen
- [ ] Geen badges, countdown, urgency-elementen
- [ ] Geen e-commerce-patronen (webshop-grid, winkelmand)
- [ ] Geen popups of proactieve chat zonder besluit

### Commercieel
- [ ] Geen nieuwsbrief-opt-in
- [ ] Geen marketing-opt-ins
- [ ] Geen cross-sell of "bekijk ook"
- [ ] Geen reviewverzoek per mail
- [ ] Geen aftercare-marketing
- [ ] Bevestigingsscherm functioneel zonder verkoopinfo

### Open besluiten
- [ ] Alle "besluit nodig"-items expliciet gemarkeerd
- [ ] Geen verzonnen waarden voor open besluiten
- [ ] Dummydata duidelijk gelabeld als placeholder

---

## Implementatierichtlijnen (voor prototype-bouw)

### Wat WEL te doen
1. Low-fidelity wireframes maken
2. Grijswaarden gebruiken
3. Duidelijke blokken en labels
4. Eén primaire CTA per scherm
5. Intern besluitvormingsblok per scherm tonen met:
   - Doel van het scherm
   - Primaire klantvraag
   - Open besluiten
   - QA-risico's
6. Dummydata labelen als "[DUMMYDATA]" of "[Placeholder]"
7. "Besluit nodig"-items expliciet markeren
8. Navigatie tussen schermen werkend maken
9. Responsive layout (mobile-first)

### Wat NIET te doen
1. NIET bouwen tot plan is goedgekeurd
2. Geen finale visuele stijl
3. Geen echte backend
4. Geen technische implementatie aannemen
5. Geen open besluiten invullen
6. Geen nieuwe feiten toevoegen
7. Geen extra pagina's verzinnen
8. Geen serviceflow bouwen (apart document)
9. Geen admin bouwen (apart document)
10. Geen QR/link-route bouwen (apart document)

---

## Bronhiërarchie

Bij conflict tussen documenten:
1. Positionerings-DNA V4.1
2. Fact Sheet V1.1
3. Message Rules & Copy Blacklist V1.1
4. Website & Planner Blueprint V1.1
5. Dit plan.md

---

## Definitieve wetten (absoluut niet breken)

### Wet 1: De cheque is een erkenningsgebaar, geen waardebon
Alle taal die de cheque als waardebon, voucher of actie presenteert is verboden.

### Wet 6: Vóór de planner altijd een persoonlijk welkomstscherm
QR en persoonlijke link mogen NOOIT direct naar de agenda leiden.

### Wet 7: Geen commerciële opvolging na aankoop
Geen aftercare-mail, geen nieuwsbrief, geen reviewverzoek per mail.

### Wet 9: Routes als structuur, niet als voordeel
Route B is verrekening, geen korting. Geen percentages publiek.

### Wet 11: Operationele rust is onderdeel van de positionering
Geen urgency, schaarste of tijdsdruk.

### Wet 12: Partner alleen individueel zichtbaar
Geen partnerlogomuur, nergens.

### Wet 16: Welkomstscherm is verplicht vóór planner
Bij alle routes (algemeen, QR, persoonlijke link).

### Wet 17: Geen e-commerce-patronen
Geen badges, countdown, abandoned-cart, schreeuwknoppen.

### Wet 21: Sobere rolverdeling partner/galerie
Verstrekker (partner) / uitvoerder (galerie). Geen collectieve partner-communicatie.

---

**Einde plan.md**

**Volgende stap:** Plan goedkeuren → prototype bouwen volgens dit plan
