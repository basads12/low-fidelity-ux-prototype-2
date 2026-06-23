# design_feedback_update.md

**Project:** De Kunst van Kunst  
**Make-file:** DKVK_Core_Flow_LowFi  
**Datum:** 25 april 2026  
**Status:** Design feedback ontvangen — prototype nog niet aangepast

---

## 1. Overzicht ontwerpbesluiten

### Besluit 1: Secundaire CTA homepage
**Status:** GOEDGEKEURD

De secundaire CTA "Meer over de galerie" moet WEL worden opgenomen.

**Regels:**
- Alleen als secundaire CTA op de homepage
- Niet gebruiken als primaire CTA
- Niet gebruiken op planner, service of voorwaardenpagina

**Impact:**
- Homepage moet worden aangepast
- Label "Besluit nodig: secundaire CTA 'Meer over de galerie'" kan worden verwijderd

### Besluit 2: CTA "Schilderij omruilen"
**Status:** GOEDGEKEURD — functionele service-CTA

Er moet een functionele CTA "Schilderij omruilen" bijkomen.

**Waar plaatsen:**
- Service-overzicht
- Uw bezoek
- FAQ indien relevant
- Omruilen-servicepagina

**Niet plaatsen in:**
- Homepage hero
- Persoonlijk welkomstscherm
- Planner
- Afspraakbevestiging als commerciële nudge

**Belangrijk:**
- Omruilen is functioneel, geen cross-sell
- Geen "bekijk ook", geen nieuwsbrief, geen nieuwe werken, geen aanbiedingen
- Procedure blijft besluit nodig als exacte afhandeling ontbreekt

**Impact:**
- Huidige core flow hoeft NIET te worden aangepast (bevat geen service-overzicht)
- Service-overzicht is buiten scope van huidige Make-file
- Dit besluit geldt voor toekomstige service-schermen

### Besluit 3: Reviewfragmenten
**Status:** GOEDGEKEURD — terloops als legitimiteit

Reviewfragmenten mogen WEL op de site.

**Voorkeur:**
- Eén rustig reviewfragment in het legitimiteitsblok
- Eventueel twee extra statische reviewfragmenten lager op de homepage

**Niet doen:**
- Geen reviewscore als hero
- Geen reviewaantal als hoofdclaim
- Geen sterrenblok als hoofdclaim
- Geen autoplay-carousel
- Geen bewegende reviewslider
- Geen jubel-curatie-framing
- Geen "100% tevredenheid"

**Als reviewfragmenten wisselen:**
- Alleen handmatig of rustig per paginalading
- Niet automatisch bewegend

**Impact:**
- Homepage moet worden aangepast
- Label "Besluit nodig: reviewfragmenten op homepage ja/nee" kan worden verwijderd
- Label "[OPTIONEEL: reviewfragment terloops]" kan worden verwijderd
- Reviewfragment wordt definitief onderdeel van legitimiteitsblok

### Besluit 4: Openingstijden
**Status:** BLIJFT BESLUIT NODIG

Openingstijden NIET publiek toevoegen.

**Gebruik waar nodig:**
- "Bezoek uitsluitend op afspraak."

**Behoud interne labels:**
- "Besluit nodig: exacte beschikbare dagen"
- "Besluit nodig: exacte tijdsloten"
- "Besluit nodig: capaciteit per slot"

**Impact:**
- Geen wijzigingen aan huidige prototype
- Labels blijven staan

### Besluit 5: Voorwaardenpagina
**Status:** NIET GOEDGEKEURD

De huidige voorwaardenpagina is NIET goedgekeurd.

**Markering:**
- "Niet goedgekeurd — inhoud en CTA's moeten worden herzien."

**Regels:**
- Voorwaardenpagina mag geen commerciële CTA bevatten
- Voorwaardenpagina mag geen partnernetwerk, partnerlijst of logomuur bevatten
- Voorwaardenpagina moet sober en juridisch-functioneel zijn

**Impact:**
- Huidige core flow bevat geen voorwaardenpagina
- Dit besluit geldt voor toekomstige uitbreiding

---

## 2. Welke schermen aangepast moeten worden

### Homepage (SCHERM 1/8)
**Aan te passen:**

1. **Secundaire CTA toevoegen**
   - Voeg secundaire CTA toe na primaire CTA "Activeer uw cheque"
   - Tekst: "Meer over de galerie"
   - Styling: secundair (niet dominant)
   - Verwijder label "Besluit nodig: secundaire CTA 'Meer over de galerie'"

2. **Reviewfragment definitief maken**
   - Verwijder label "[OPTIONEEL: reviewfragment terloops]"
   - Verwijder label "Besluit nodig: reviewfragmenten op homepage ja/nee"
   - Behoud huidige rustige reviewfragment in legitimiteitsblok
   - Optioneel: voeg twee extra statische reviewfragmenten toe lager op de homepage

**Niet aanpassen:**
- Hero-sectie
- Primaire CTA
- Legitimiteitsblok (alleen labels verwijderen)
- Cheque-uitleg-blok
- Praktisch-blok
- Footer
- QA-blok

---

## 3. Welke schermen NIET aangepast mogen worden

### Chequeinvoer (SCHERM 2/8)
**Geen wijzigingen**

### Persoonlijk welkomstscherm (SCHERM 3/8)
**Geen wijzigingen**
- Geen CTA "Schilderij omruilen" toevoegen
- Geen commerciële CTA's

### Planner stap 1: dag kiezen (SCHERM 4/8)
**Geen wijzigingen**
- Geen openingstijden toevoegen
- Labels blijven staan

### Planner stap 2: tijd kiezen (SCHERM 5/8)
**Geen wijzigingen**
- Geen openingstijden toevoegen
- Labels blijven staan

### Planner stap 3: gegevens (SCHERM 6/8)
**Geen wijzigingen**

### Planner stap 4: bevestiging (SCHERM 7/8)
**Geen wijzigingen**
- Geen CTA "Schilderij omruilen" toevoegen

### Afspraak bevestigd (SCHERM 8/8)
**Geen wijzigingen**
- Geen CTA "Schilderij omruilen" als commerciële nudge

---

## 4. Welke punten nog besluit nodig blijven

### Homepage
- ~~Besluit nodig: secundaire CTA "Meer over de galerie"~~ → GOEDGEKEURD
- ~~Besluit nodig: reviewfragmenten op homepage ja/nee~~ → GOEDGEKEURD
- Besluit nodig: reviewscore en reviewaantal publiek tonen ja/nee → BLIJFT OPEN
- Besluit nodig: openingstijden galerie → BLIJFT OPEN (niet publiek toevoegen)
- Besluit nodig: definitief fotografie-/beeldbeleid → BLIJFT OPEN

### Chequeinvoer
- Besluit nodig: exacte foutmeldingstekst bij "cheque niet gevonden" → BLIJFT OPEN
- Besluit nodig: exacte foutmeldingstekst bij "postcode klopt niet" → BLIJFT OPEN
- Besluit nodig: exacte foutmeldingstekst bij "verlopen cheque" → BLIJFT OPEN
- Besluit nodig: exacte foutmeldingstekst bij "cheque al gebruikt" → BLIJFT OPEN
- Besluit nodig: technische datavelden persoonlijke link/QR → BLIJFT OPEN

### Persoonlijk welkomstscherm
- Besluit nodig: verplichting papieren cheque meenemen ja/nee → BLIJFT OPEN
- Besluit nodig: technische datavelden persoonlijke link/QR (auto-herkenning) → BLIJFT OPEN

### Planner stap 1
- Besluit nodig: CTA-tekst ("Verder" of "Volgende stap") → BLIJFT OPEN
- Besluit nodig: exacte beschikbare dagen → BLIJFT OPEN
- Besluit nodig: maximale bezoekers per slot → BLIJFT OPEN
- Besluit nodig: criterium voor "feitelijk drukker/rustiger" labels (indien gebruikt) → BLIJFT OPEN

### Planner stap 2
- Besluit nodig: CTA-tekst ("Verder" of "Volgende stap") → BLIJFT OPEN
- Besluit nodig: exacte tijdsloten → BLIJFT OPEN
- Besluit nodig: duur per slot → BLIJFT OPEN
- Besluit nodig: maximaal aantal bezoekers per slot → BLIJFT OPEN
- Besluit nodig: beleid geen tijdsloten beschikbaar → BLIJFT OPEN

### Planner stap 3
- Besluit nodig: CTA-tekst definitieve keuze uit alternatieven → BLIJFT OPEN
- Besluit nodig: volledige privacyverklaring → BLIJFT OPEN
- Besluit nodig: technische datavelden persoonlijke link (voor pre-fill) → BLIJFT OPEN

### Planner stap 4
- Besluit nodig: CTA "Voeg toe aan agenda" definitief → BLIJFT OPEN
- Besluit nodig: verplichting papieren cheque meenemen ja/nee → BLIJFT OPEN
- Besluit nodig: agenda-export functionaliteit (ICS, Google Calendar, etc.) → BLIJFT OPEN

### Afspraak bevestigd
- Besluit nodig: link naar "Afspraak wijzigen" ja/nee → BLIJFT OPEN
- Besluit nodig: e-mailadres galerie publiek → BLIJFT OPEN
- Besluit nodig: datumbevestigingsmail (één dag ervoor) exacte tekst → BLIJFT OPEN

### Nieuw: Omruilen-procedure
- Besluit nodig: exacte afhandeling omruilen → NIEUW (buiten scope huidige core flow)

---

## 5. QA-risico's

### Risico 1: Secundaire CTA te dominant
**Waar:** Homepage  
**Wat:** Secundaire CTA "Meer over de galerie" mag niet concurreren met primaire CTA "Activeer uw cheque"  
**Check:** Secundaire CTA moet duidelijk secundair gestyled zijn (geen donkere achtergrond, kleinere knop, of tekstlink)

### Risico 2: Reviewfragmenten te commercieel
**Waar:** Homepage  
**Wat:** Reviewfragmenten mogen niet als marketingclaim worden ingezet  
**Check:**
- Geen reviewscore als hero
- Geen reviewaantal als hoofdclaim
- Geen sterrenblok als hoofdclaim
- Geen autoplay-carousel
- Geen bewegende reviewslider
- Geen jubel-curatie-framing
- Geen "100% tevredenheid"

### Risico 3: Extra reviewfragmenten te druk
**Waar:** Homepage  
**Wat:** Als twee extra reviewfragmenten worden toegevoegd, mogen deze niet te druk worden  
**Check:**
- Statisch (niet bewegend)
- Rustige presentatie
- Geen sterren-highlights
- Geen commerciële framing

### Risico 4: CTA "Schilderij omruilen" op verkeerde plek
**Waar:** Toekomstige service-schermen  
**Wat:** CTA "Schilderij omruilen" mag niet in core flow verschijnen als commerciële nudge  
**Check:**
- Niet in homepage hero
- Niet in persoonlijk welkomstscherm
- Niet in planner
- Niet in afspraakbevestiging als commerciële nudge
- Alleen op service-overzicht, Uw bezoek, FAQ, Omruilen-servicepagina

### Risico 5: Voorwaardenpagina nog steeds niet goedgekeurd
**Waar:** Toekomstige voorwaardenpagina  
**Wat:** Als voorwaardenpagina wordt toegevoegd, moet deze herzien worden  
**Check:**
- Geen commerciële CTA's
- Geen partnernetwerk, partnerlijst of logomuur
- Sober en juridisch-functioneel

---

## 6. Concrete correctie-instructies voor Figma Make

### Instructie 1: Homepage — Secundaire CTA toevoegen

**Locatie:** `/workspaces/default/code/src/app/components/Homepage.tsx`  
**Sectie:** Hero-sectie, na primaire CTA

**Actie:**
1. Verwijder het label:
   ```
   <div className="mt-4 text-sm text-gray-500 font-mono">
     Besluit nodig: secundaire CTA "Meer over de galerie"
   </div>
   ```

2. Voeg secundaire CTA toe na primaire CTA:
   ```tsx
   <button
     onClick={() => onNavigate('cheque-input')}
     className="bg-gray-900 text-white px-10 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
   >
     Activeer uw cheque
   </button>

   <div className="mt-4">
     <button
       onClick={() => onNavigate('about-gallery')}
       className="text-gray-700 underline hover:text-gray-900 text-lg"
     >
       Meer over de galerie
     </button>
   </div>
   ```

**QA-check:**
- Secundaire CTA is duidelijk secundair (tekstlink met underline)
- Secundaire CTA concurreert niet met primaire CTA
- Geen donkere achtergrond op secundaire CTA

**Note:** Scherm 'about-gallery' bestaat nog niet — dit is een placeholder voor toekomstige uitbreiding

---

### Instructie 2: Homepage — Reviewfragment definitief maken

**Locatie:** `/workspaces/default/code/src/app/components/Homepage.tsx`  
**Sectie:** Legitimiteitsblok

**Actie:**
1. Verwijder het label:
   ```
   <div className="text-xs text-gray-500 mb-3 font-mono">
     [OPTIONEEL: reviewfragment terloops]
   </div>
   ```

2. Verwijder het label (onderaan reviewfragment):
   ```
   <p className="text-xs text-gray-500 mt-4 font-mono">
     Besluit nodig: reviewfragmenten op homepage ja/nee
   </p>
   ```

3. Behoud het huidige reviewfragment als definitief onderdeel:
   ```tsx
   <div className="bg-gray-100 p-6 border border-gray-300">
     <p className="italic text-gray-700 mb-2">
       "Rustige ervaring, precies zoals beloofd"
     </p>
     <p className="text-sm text-gray-600">— Jan de Vries, Enschede</p>
   </div>
   ```

**QA-check:**
- Reviewfragment is rustig en terloops
- Geen sterren
- Geen reviewscore
- Geen reviewaantal
- Geen "100% tevredenheid"

---

### Instructie 3 (optioneel): Homepage — Extra reviewfragmenten toevoegen

**Locatie:** `/workspaces/default/code/src/app/components/Homepage.tsx`  
**Sectie:** Lager op de homepage (bijvoorbeeld na "Hoe het werkt" of "Cheque-uitleg")

**Actie:**
1. Voeg een nieuwe sectie toe met twee extra statische reviewfragmenten:
   ```tsx
   {/* Review Section - Optional */}
   <section className="mb-16 pb-16 border-b-2 border-gray-300">
     <div className="text-xs uppercase tracking-wide text-gray-500 mb-6 font-mono">
       SECTIE: REVIEWFRAGMENTEN (terloops)
     </div>

     <div className="grid md:grid-cols-2 gap-8">
       <div className="p-6 bg-gray-50 border border-gray-300">
         <p className="italic text-gray-700 mb-2">
           "[DUMMYDATA: reviewfragment 2]"
         </p>
         <p className="text-sm text-gray-600">— [Naam], [Plaats]</p>
       </div>

       <div className="p-6 bg-gray-50 border border-gray-300">
         <p className="italic text-gray-700 mb-2">
           "[DUMMYDATA: reviewfragment 3]"
         </p>
         <p className="text-sm text-gray-600">— [Naam], [Plaats]</p>
       </div>
     </div>
   </section>
   ```

**QA-check:**
- Statisch (niet bewegend)
- Rustige presentatie
- Geen sterren
- Geen reviewscore als hoofdclaim
- Geen autoplay-carousel
- Geen bewegende reviewslider

**Note:** Dit is optioneel — alleen toevoegen als dit wordt besloten

---

### Instructie 4: QA-blok Homepage aanpassen

**Locatie:** `/workspaces/default/code/src/app/components/Homepage.tsx`  
**Sectie:** QA-blok onderaan

**Actie:**
1. Verwijder uit "Open besluiten" sectie:
   - ~~Besluit nodig: reviewfragmenten op homepage ja/nee~~
   - ~~Besluit nodig: secundaire CTA "Meer over de galerie" exacte tekst en link~~

2. Behoud:
   - Besluit nodig: openingstijden galerie
   - Besluit nodig: reviewscore en reviewaantal publiek tonen ja/nee
   - Besluit nodig: definitief fotografie-/beeldbeleid

**QA-check:**
- Alleen open besluiten blijven staan
- Goedgekeurde besluiten zijn verwijderd uit lijst

---

### Instructie 5: Plan.md aanpassen

**Locatie:** `/workspaces/default/code/plan.md`  
**Sectie:** Scherm 1: Homepage

**Actie:**
1. Update sectie "6. Secundaire CTA indien toegestaan":
   - Verwijder "— Besluit nodig: exacte tekst, bestemming"
   - Markeer als GOEDGEKEURD

2. Update sectie "4. Contentblokken" → "2. Legitimiteitsblok":
   - Verwijder "Optioneel:" voor reviewfragmenten
   - Verwijder "— Besluit nodig: reviewfragmenten op homepage"
   - Markeer reviewfragment als definitief onderdeel

3. Update sectie "7. Open besluiten":
   - Verwijder: ~~Besluit nodig: reviewfragmenten op homepage ja/nee~~
   - Verwijder: ~~Besluit nodig: secundaire CTA "Meer over de galerie" exacte tekst en link~~

**QA-check:**
- Plan.md komt overeen met nieuwe prototype-staat

---

## 7. Schermen buiten scope huidige core flow

De volgende ontwerpbesluiten zijn goedgekeurd maar vallen buiten de scope van de huidige core flow:

### CTA "Schilderij omruilen"
**Status:** Goedgekeurd voor toekomstige service-schermen  
**Actie:** Geen wijzigingen aan huidige core flow  
**Reden:** Service-overzicht, Uw bezoek, FAQ en Omruilen-servicepagina zijn buiten scope

### Voorwaardenpagina
**Status:** Niet goedgekeurd  
**Actie:** Geen wijzigingen aan huidige core flow  
**Reden:** Voorwaardenpagina is buiten scope (alleen link in footer)

---

## 8. Samenvatting wijzigingen

| Scherm | Wijziging | Status |
|--------|-----------|--------|
| Homepage | Secundaire CTA toevoegen | TE DOEN |
| Homepage | Reviewfragment definitief maken | TE DOEN |
| Homepage | QA-blok aanpassen | TE DOEN |
| Homepage | Optioneel: extra reviewfragmenten | OPTIONEEL |
| Chequeinvoer | — | GEEN WIJZIGING |
| Persoonlijk welkomstscherm | — | GEEN WIJZIGING |
| Planner stap 1 | — | GEEN WIJZIGING |
| Planner stap 2 | — | GEEN WIJZIGING |
| Planner stap 3 | — | GEEN WIJZIGING |
| Planner stap 4 | — | GEEN WIJZIGING |
| Afspraak bevestigd | — | GEEN WIJZIGING |
| Plan.md | Update open besluiten | TE DOEN |

---

## 9. Na deze wijzigingen

1. Voer nieuwe QA-check uit op Homepage
2. Controleer dat secundaire CTA niet te dominant is
3. Controleer dat reviewfragmenten terloops blijven (geen marketingclaim)
4. Update core_flow_review_summary.md met nieuwe status
5. Update core_flow_snapshot_notes.md indien nodig

---

**Einde design_feedback_update.md**
