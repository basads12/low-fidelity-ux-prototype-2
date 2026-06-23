# SUPER-PROMPT — Figma Styling Instructie
## De Kunst van Kunst — Visuele uitwerking van het low-fidelity prototype

> **Gebruik:** plak deze prompt integraal in Figma Make (of Figma AI / een vergelijkbare bouwer) bij het omzetten van het goedgekeurde low-fidelity wireframe naar een high-fidelity visuele uitwerking. De prompt voegt **geen** nieuwe schermen, copy of feiten toe — hij geeft **alleen** de visuele taal die over de bestaande wireframes wordt gelegd.

---

## 0. Bronhiërarchie (bij conflict)

1. Positionerings-DNA V4.1
2. Fact Sheet V1.1
3. Message Rules & Copy Blacklist V1.1
4. Website & Planner Blueprint V1.1 / Operationeel Script V1.1 / Kanaal- en Copyplaybook V1
5. Goedgekeurde core flow (`DKVK_Core_Flow_LowFi_APPROVED_FOR_UX_REVIEW`)
6. Deze styling-instructie

Deze prompt wijzigt **niets** aan flowvolgorde, schermlogica, CTA-keuze of open besluiten. Hij wijzigt **alleen** kleur, typografie, ritme, component-uitvoering en beeldgebruik.

---

## 1. Strategische toetszin (verankering)

> *De Kunst van Kunst is de plaats waar iemand die nooit kunst kocht, er toch een meeneemt — omdat een bedrijf waarvan hij al klant is het voor hem mogelijk heeft gemaakt, en omdat de galerie hem daarbij de rust geeft om zonder druk te kiezen.*

Elke visuele keuze wordt aan deze zin getoetst. Concreet: het ontwerp moet **rust**, **legitimiteit** en **verificatie** uitstralen — geen verleiding, geen verkoopdruk, geen kunstmarkt-codes.

---

## 2. Wat het ontwerp níet mag worden (verboden esthetieken)

| Verboden esthetiek | Waarom verboden |
|---|---|
| Webshop / e-commerce (productgrid, badges, "vanaf"-prijs, winkelmand-iconografie) | Activeert ruil-schema — vernietigt erkenningsgebaar |
| Luxe-hotel (marmer, serif-display in goud, "exclusief"-codes) | Sluit doelgroep uit |
| Klassieke galerie / art-fair (salonpresentatie, kunstenaarsnamen prominent, vernissage-codes) | Activeert insider-codes; doelgroep voelt zich uitgesloten |
| Dagje-uit / lifestyle-blog (stockfoto's "tevreden stelletje", warme overlays, "beleving") | Verkeerd frame — uitje in plaats van kunstaankoop |
| Conversie-funnel (oranje/rode CTA-knal, urgency-timers, "nog maar"-banners, popups) | Activeert spam-/telemarketing-herkenning |
| Marketingdecoratie (linten, sterren, "nieuw!"-flags, glitter-gradients, autoplay-carousels) | Vernietigt rust |
| Partnerlogomuur / "mede mogelijk gemaakt door" | Niet-onderhandelbare regel V4.1 §8 |

**Eerste visuele toets:** als een ontwerper het scherm zou verwarren met een Booking-, Coolblue-, Sothebys- of Groupon-pagina, is het fout.

---

## 3. Kleurpalet (afgeleid uit het bestaande logo)

Het logo bevat drie merkkleuren, die in het ontwerp **terughoudend** worden ingezet — niet als hero-vlakken, maar als accent en verankering.

### 3.1 Merkkleuren

| Token | Hex | Rol | Mag wel | Mag niet |
|---|---|---|---|---|
| `--brand-ink` | `#221E1F` | Primaire tekst, logo-zwart, donkere lijnen | Hoofdtekst, koppen, logo, primaire CTA-tekst | Volledige achtergrondvlakken op homepage hero |
| `--brand-ochre` | `#DB9A4A` | Warm accent — focus, zachte highlights, decoratief lijnwerk | Onderstreping op active-state, kleine iconen, lijntje onder logo, accent in chequevisualisatie | CTA-knop-vulling; grote vlakken; "actie"-flags |
| `--brand-bordeaux` | `#6F172F` | Diep accent — primaire CTA-kleur, link-actief, focus-ring | Primaire CTA-vulling, link-hover, focus-state, key-illustratie-detail | Decoratieve marketingvlakken; alarmkleuren (gebruik destructive) |

### 3.2 Neutrale schaal (fundament — dragend, niet decoratief)

| Token | Hex | Rol |
|---|---|---|
| `--surface-page` | `#FAF8F5` | Pagina-achtergrond — gebroken wit, papierachtig, warm |
| `--surface-card` | `#FFFFFF` | Kaarten, formulier-velden-achtergrond, planner-blokken |
| `--surface-muted` | `#F2EFEA` | Secundaire blokken, footer-achtergrond, "rustig informatieblok" |
| `--border-soft` | `#E6E1D9` | Standaard-rand, scheidingslijnen |
| `--border-strong` | `#C9C2B5` | Geselecteerde state, focus-buitenrand |
| `--text-primary` | `#221E1F` | Hoofdtekst (= brand-ink) |
| `--text-secondary` | `#5A544F` | Ondersteunende tekst, labels, metadata |
| `--text-muted` | `#8A847D` | Helptekst, placeholder, "Besluit nodig"-labelkleur in dev-mode |

### 3.3 Functionele kleuren (alleen voor systeemstatus, niet voor sfeer)

| Token | Hex | Rol |
|---|---|---|
| `--state-success` | `#3F6B4E` | Bevestigingscheckmark, "afspraak bevestigd"-icoon |
| `--state-warning` | `#A87A1F` | Inline foutmelding, niet-blokkerend |
| `--state-destructive` | `#8A2A2A` | Blokkerende fout (bv. cheque niet herkend) |
| `--state-info` | `#3A5A6B` | Informatie-callout (zelden gebruiken) |

**Inzetregel:** op elk scherm is **maximaal één** vlak in een merkkleur dominant. Pagina-achtergrond is altijd `--surface-page` of `--surface-card`. Bordeaux komt alleen voor in de primaire CTA en focus-ring. Oker komt alleen voor als smal accent (lijntje, icoon, "sinds 2005"-badge).

### 3.4 Voorbeeld-toepassing per scherm

- **Homepage:** witte/papieren basis, logo in originele kleuren, één primaire CTA in bordeaux, één smal okerlijntje onder het "sinds 2005"-merkje.
- **Chequeinvoer:** card op `--surface-page`, donker label, bordeaux primaire knop. Geen oker.
- **Persoonlijk welkomstscherm:** chequevisualisatie als rustige kaart waarin oker en bordeaux als secundaire details voorkomen (papier-look). Hoofdvlak blijft neutraal.
- **Plannerstappen 1–4:** volledig neutraal. Geselecteerde dag/tijd: `--border-strong` rand + lichte `--surface-muted` vulling. Géén bordeaux-vulling op selectiestate (die is gereserveerd voor de stap-CTA).
- **Afspraak bevestigd:** check-icoon in `--state-success`, geen confetti, geen "Gefeliciteerd!".

---

## 4. Typografie

### 4.1 Fontkeuze

**Hoofdfamilie:** een rustige, hoog-leesbare sans-serif met Nederlandse karaktersteun. Aanbevolen: **Inter** (variabel) of **Söhne**. Afgewezen: alle display-serifs (Playfair, Cormorant), alle "luxe"-serifs (Didone-achtigen), alle handgeschreven scripts.

**Reden:** een serif activeert kunstmarkt- of luxe-codes; een display-script activeert lifestyle. Inter/Söhne zijn neutraal-modern, leesbaar voor 55+, en ondersteunen rust.

**Optioneel tweede font (alleen voor logo-bijschrift "sinds 2005" en chequenummer):** een lichte mono of een licht versmalde sans (bv. **JetBrains Mono** of **Inter Mono**) om "feitelijk register" te markeren.

### 4.2 Typografische schaal (mobile-first ≤380px → desktop)

| Token | Mobile | Desktop | Weight | Line-height | Gebruik |
|---|---|---|---|---|---|
| `--text-display` | 28 / 34 | 36 / 44 | 500 | 1.2 | Homepage H1, persoonlijk welkomstscherm "Welkom [voornaam]" |
| `--text-h1` | 24 / 30 | 28 / 36 | 500 | 1.25 | Schermtitels |
| `--text-h2` | 20 / 26 | 22 / 30 | 500 | 1.3 | Sectiekoppen |
| `--text-h3` | 18 / 24 | 18 / 26 | 500 | 1.35 | Blokkoppen |
| `--text-body` | 16 / 24 | 17 / 26 | 400 | 1.5 | Lopende tekst (basis 16px ondergrens — leeftijdsdoelgroep) |
| `--text-body-sm` | 14 / 22 | 14 / 22 | 400 | 1.55 | Metadata, helptekst |
| `--text-label` | 14 / 20 | 14 / 20 | 500 | 1.4 | Formulier-labels |
| `--text-button` | 16 / 24 | 16 / 24 | 500 | 1.4 | Primaire / secundaire CTA |
| `--text-caption` | 12 / 18 | 12 / 18 | 400 | 1.5 | Footer-fijntekst, "Besluit nodig"-dev-labels |

### 4.3 Typografische regels

- **Geen all-caps** behalve in micro-labels (≤12px, bv. "PARTNER"). All-caps in koppen activeert luxe-codes.
- **Geen italic** voor decoratie. Italic alleen voor reviewcitaten (rustig, klein).
- **Geen letter-spacing > 0.05em** in body. Geen letter-spacing > 0.1em in labels.
- **Maximale regelbreedte body-tekst:** 65–72 tekens (≈ 32rem) — dit dwingt rust af.
- **Hiërarchie via grootte, niet via kleur.** Koppen worden niet bordeaux of oker gemaakt om te "knallen".

---

## 5. Ruimte, ritme en grid

### 5.1 Spacing-schaal (4-punts)

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

- Verticale ritme tussen secties: minimaal **48** (mobile) / **64** (desktop).
- Padding binnen kaarten: **24** (mobile) / **32** (desktop).
- Witruimte rond primaire CTA: minimaal **24** boven, **24** onder. CTA mag niet "vast" tegen content staan.

### 5.2 Grid

- **Mobile (≤380px):** 1 kolom, 16 outer-padding, 16 gutter.
- **Tablet (768px):** 8 kolommen, 24 gutter.
- **Desktop (≥1024px):** 12 kolommen, 24 gutter, max-content-width **1120px**, paginavlak gecentreerd.
- Welkomstscherm en planner blijven op desktop een **gecentreerde, smallere kolom** (max 640px) — niet uitvouwen tot volle breedte. Reden: de planner is functioneel, geen propositiepagina.

### 5.3 Border-radius

- Cards: **12px**
- Knoppen: **8px**
- Inputs: **8px**
- Chequevisualisatie: **6px** (papier-card-gevoel, lichte schaduw)
- **Geen pill-shaped (>20px) knoppen.** Pills voelen e-commerce.

### 5.4 Schaduwen

Eén schaduw-token, zacht en natuurlijk:

```
--shadow-soft: 0 1px 2px rgba(34, 30, 31, 0.04), 0 4px 12px rgba(34, 30, 31, 0.05);
```

Geen "glow", geen kleur-schaduwen, geen drop-shadow-stack die "premium" suggereert.

---

## 6. Componenten — visuele uitvoering

### 6.1 Primaire CTA

- Vulling: `--brand-bordeaux` (`#6F172F`)
- Tekst: wit, weight 500, label uit toegestane lijst (Activeer uw cheque / Plan uw bezoek / Kies uw bezoekmoment / Maak een afspraak / Cheque overdragen — overige labels blijven "Besluit nodig")
- Padding: `14 24` (mobile) / `16 28` (desktop)
- Hover: 8% donkerder
- Focus: outline 2px `--brand-ochre` met 2px offset
- Disabled: 40% opacity, geen kleurverandering
- **Per scherm: exact één primaire CTA.** Niet onderhandelbaar.

### 6.2 Secundaire CTA

- Outline: 1.5px `--border-strong`
- Vulling: transparant
- Tekst: `--text-primary`
- **Niet** in bordeaux. Niet in oker. De secundaire CTA is bewust ondergeschikt.
- Op homepage gebruikt voor "Meer over de galerie" (goedgekeurd in `design_feedback_update.md`).

### 6.3 Tertiair / link

- Onderlijnde tekst in `--text-primary`. Hover: kleur naar `--brand-bordeaux`.
- Geen "lees meer →"-pijl-decoratie; pijl alleen in plannernavigatie.

### 6.4 Inputvelden

- Achtergrond: `--surface-card`
- Rand: 1px `--border-soft`
- Focus-rand: 1.5px `--brand-bordeaux` + outline 2px `--brand-ochre` met 2px offset
- Label boven het veld, niet als floating label (leeftijdsdoelgroep — voorspelbaar gedrag).
- Foutstaat: 1.5px `--state-destructive`-rand, foutmelding **inline** onder het veld in `--state-destructive`, zonder uitroeptekens of overlay.

### 6.5 Chequevisualisatie

Niet als bankbiljet of voucher. Wel als **rustige papieren kaart**:

- Achtergrond: `--surface-card` met heel lichte papier-textuur (optioneel SVG-noise <3% opacity)
- 1px rand `--border-soft`
- Smal okerlijntje (2px) aan de bovenkant — verwijzend naar logo
- Chequenummer in lichte mono, klein, in `--text-secondary`
- Naam ontvanger in `--text-display`
- Géén "€500" als hoofdclaim. Bedrag alleen klein in details, in `--text-body-sm`.
- Géén "voucher"-achtige stippellijn-knip-randen.

### 6.6 Plannerstappen (4-staps)

- Progress-arm. **Open besluit blijft staan**: progress-indicator ja/nee.
- Indien getoond: vier rustige bolletjes (●○○○) of vier dunne segmenten in `--border-soft` met actieve stap in `--brand-ink`. Géén percentage, géén "stap 1 van 4 - 25%".
- Daggridje (stap 1) en tijdgrid (stap 2): kaarten in `--surface-card` met 1px `--border-soft`. Geselecteerd: 1.5px `--border-strong` + lichte `--surface-muted`-vulling. **Geen** bordeaux-vulling.
- Geen "populair"-, "snel vol"- of "nog 2 plekken"-badges.

### 6.7 Reviewfragmenten (homepage, terloops — goedgekeurd)

- Citaat in italic, 16/26
- Naam, woonplaats, datum eronder in `--text-body-sm` `--text-secondary`
- Geen sterren. Geen "100%". Geen carousel. Geen autoplay.
- Eén fragment in legitimiteitsblok; eventueel twee statische lager. Wisselen mag alleen per paginalading.

### 6.8 Footer

- Achtergrond: `--surface-muted`
- Inhoud: adres (Geerdinksweg 2, 7555 DM Hengelo), telefoon (074 - 291 48 57), link voorwaarden, link contact
- **Geen** nieuwsbrief-opt-in, **geen** social-iconen-rij als marketingmuur, **geen** partnerlogomuur.

### 6.9 Foutstatussen

- Inline of kleine modal — **nooit** full-screen overlay.
- Toon: feitelijk en niet-beschuldigend ("Dit chequenummer is niet herkend. Controleer het nummer of bel ons op 074 - 291 48 57.")
- Telefoonnummer altijd zichtbaar in elke foutscherm.

### 6.10 "Besluit nodig"-labels (alleen in dev/QA-weergave)

- Klein, `--text-caption`, `--text-muted`, lichte stippellijnrand
- Niet zichtbaar voor klant — alleen in Figma als annotation-laag of in een aparte "QA-overlay"-frame.

---

## 7. Beeldgebruik

### 7.1 Toegestaan

- **Echte foto's van de fysieke galerie** (interieur, kunstwerken aan de wand, certificaat, adviseur in de ruimte) — ingetogen, natuurlijk licht, geen pose.
- **Foto's van werkelijke schilderijen uit het assortiment.** Niet uitvergroot als hero-poster. Plat, frontaal, neutrale achtergrond.
- **Het logo** (zoals aangeleverd) — niet overlayd op drukke beelden, altijd op rustige achtergrond.

### 7.2 Verboden

- Stockfotografie (alle vormen)
- Lifestyle-fotografie ("tevreden stelletje", "vrouw met wijnglas in galerie")
- Bewegende media (GIF, video-hero, autoplay-carousel)
- Modellen die schilderijen vasthouden of bewonderen
- Premium-interieurs (marmer, designerbanken)
- Vernissage-fotografie / kunstenaars-portretten als hoofdbeeld

**Tussen besluit en finale fotografie:** placeholder-blokken in `--surface-muted` met klein `--text-caption`-label "Beeld volgt — fotografie-/beeldbeleid is besluit nodig". Niet invullen met dummystock.

---

## 8. Iconografie

- **Lijn-iconen, 1.5px stroke**, kleur `--text-primary` of `--text-secondary`
- Aanbevolen set: **Lucide** (al beschikbaar in het project blijkens de stack)
- Geen gevulde iconen (te zwaar). Geen multi-color iconen. Geen emoji.
- Maximum: 1 icoon per CTA, en alleen als het functioneel is (kalender op planner-CTA mag; pijl op secundaire link mag).

---

## 9. Motion

- **Default: geen.** Rust prevaleert.
- Toegestaan: 150–200ms ease-out op hover-state-overgangen (kleur, border).
- Toegestaan: 200–300ms fade-in bij paginawissel.
- **Verboden:** parallax, scroll-driven animaties, "reveal on scroll", autoplay-carousels, getypte tekst-animaties, attention-grabbers, hover-tilt op kaarten.
- Respecteer `prefers-reduced-motion`: alle bewegingen uit.

---

## 10. Accessibility (vooruitlopend op besluit WCAG-niveau)

Hanteer als bouwstandaard **WCAG 2.1 AA** (definitief niveau blijft `Besluit nodig`).

- Body-tekst contrast ≥ 4.5:1 — combinatie `--text-primary` op `--surface-page` haalt ≈ 14:1.
- Primaire CTA `--brand-bordeaux` op wit haalt ≈ 8.5:1 — voldoet.
- Oker `--brand-ochre` haalt **niet** AA op wit voor tekst — daarom alleen als decoratief lijntje en icoon, niet als tekstkleur op wit.
- Focus altijd zichtbaar, nooit `outline:none` zonder vervanging.
- Tap-target minimaal 44×44px.
- Formulier-labels altijd zichtbaar, nooit alleen placeholder-as-label.

---

## 11. Mapping op het bestaande theme-v2.css (overschrijfwaarden)

Vervang in `:root` het generieke shadcn-paars (`--primary: #030213`) door de merktokens. Concrete overschrijving:

```css
:root {
  /* Merkkleuren */
  --primary: #6F172F;              /* brand-bordeaux */
  --primary-foreground: #FFFFFF;
  --accent: #F2EFEA;               /* surface-muted, niet oker — oker is te schreeuwerig als accent-vulling */
  --accent-foreground: #221E1F;
  --secondary: #FAF8F5;
  --secondary-foreground: #221E1F;

  /* Tekst & oppervlak */
  --background: #FAF8F5;           /* surface-page */
  --foreground: #221E1F;           /* brand-ink */
  --card: #FFFFFF;
  --card-foreground: #221E1F;
  --muted: #F2EFEA;
  --muted-foreground: #5A544F;

  /* Lijnen */
  --border: #E6E1D9;
  --input: #E6E1D9;
  --input-background: #FFFFFF;
  --ring: #DB9A4A;                 /* brand-ochre als focus-ring */

  /* Status */
  --destructive: #8A2A2A;
  --destructive-foreground: #FFFFFF;

  /* Radius */
  --radius: 0.5rem;                /* 8px — geen pill */
}
```

Dark mode is **niet** gevraagd door de bron; behoud bestaande dark-tokens functioneel of verberg de dark-mode-toggle tot daar een besluit over is (`Besluit nodig: dark mode`).

---

## 12. Wat dit ontwerp bewust níet doet

- Geen € 500 als hero-claim
- Geen "u betaalt niets" als knal
- Geen "Gefeliciteerd!" op het bevestigingsscherm
- Geen QR-banner op de homepage
- Geen partnerlogomuur, nergens
- Geen "Volg ons", geen socialicoonrij als footer-marketing
- Geen "Bekijk ook"-blok op het bevestigingsscherm
- Geen "Schrijf u in voor onze nieuwsbrief"
- Geen autoplay van wat dan ook

---

## 13. QA-check vóór upload (Figma → review)

Loop deze 16 punten af. Eén "nee" = niet uploaden, eerst herstellen.

1. Eén primaire CTA per scherm, in bordeaux, label uit toegestane lijst — ja/nee
2. Pagina-achtergrond is `--surface-page` of `--surface-card`, niet bordeaux of oker — ja/nee
3. Oker komt nergens voor als groot vulvlak — ja/nee
4. Geen serif of script-display-font in koppen — ja/nee
5. Body-tekst minimaal 16px op mobile — ja/nee
6. Maximale regelbreedte body ≈ 65–72 tekens — ja/nee
7. Geen stockfoto's, geen GIF, geen autoplay — ja/nee
8. Geen badges, countdown, urgency-elementen — ja/nee
9. Geen partnerlogomuur — ja/nee
10. Welkomstscherm vóór planner aanwezig — ja/nee
11. Planner heeft exact 4 stappen, geselecteerde state niet bordeaux-gevuld — ja/nee
12. € 500 nergens als hero/claim, alleen functioneel klein — ja/nee
13. Adres + telefoon zichtbaar in footer; geen nieuwsbrief — ja/nee
14. Foutmeldingen rustig, inline, met telefoonnummer — ja/nee
15. Focus-state zichtbaar (oker outline 2px met offset 2px) — ja/nee
16. Alle "Besluit nodig"-labels uit de bron staan nog steeds, niet ingevuld — ja/nee

---

## 14. Open besluiten die deze styling-prompt expliciet **niet** invult

- Definitief fotografie-/beeldbeleid
- Definitieve fontkeuze (Inter en Söhne worden voorgesteld; uiteindelijke keuze is besluit)
- Progress-indicator in planner ja/nee
- Mobile-first breakpoint ≤360 of ≤380
- WCAG-niveau (AA voorgesteld; AAA blijft optie)
- Functionele rustige chatwidget ja/nee
- Cookie-banner-vorm
- Dark mode ja/nee
- Reviewscore en reviewaantal publiek tonen ja/nee

Houd deze items in het Figma-bestand zichtbaar als "Besluit nodig"-annotaties op de relevante schermen.

---

## 15. Eindprincipe

**Het ontwerp moet voelen als een rustige, feitelijke verificatieplek van een gevestigde galerie sinds 2005 — niet als een merk dat iets wil verkopen.** Wie het scherm vijf seconden ziet, moet denken: *"dit klopt"*, niet *"hier word ik aangeprezen"*.

Als een visuele keuze niet aan dat principe voldoet — schrappen.

— *Einde super-prompt.*