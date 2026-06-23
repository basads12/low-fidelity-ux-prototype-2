# 02 — Visuele Identiteit V1

**De Kunst van Kunst — Kunstgalerie sinds 2005**

Status: vastgesteld op basis van de Kunst-Waardecheque-richting (zie referentiebeeld in `99_Visual_Reference/`).
Bron: pixel-analyse van het cheque-ontwerp + bestaande positionering.
Vorige status in projectdocumenten: "besluit nodig — finale kleurcodes · typografiekeuze · stijlgids / design tokens" — hierbij gesloten.

Dit document is **leidend** boven elke andere visuele bron. Bij conflict tussen `theme-v2.css`, een Figma-bestand of dit document wint dit document. Wijzigingen alleen via expliciete versiebump (V2 etc.).

---

## 1. Beginselen

De visuele identiteit ondersteunt de positionering uit `01_Positionerings_DNA_V4_1.md`. De cheque is een **waardepapier**, geen flyer of webshop-asset. De identiteit volgt vier beginselen:

**Ingetogen luxe.** Klassiek en tijdloos. Geen modern-tech, geen art-fair, geen luxe-hotel. De drager moet voelen als een notarieel document of een klassiek bankbiljet — iets dat de ontvanger niet weggooit.

**Materiële waarde.** Het guilloche-patroon (de fijne rozetstructuur), de bordeauxrode ankerstrook, en de gouden accenten zijn geen decoratie maar **codes voor waardepapier**. Ze signaleren onbewust "dit vertegenwoordigt geld".

**Rust boven uitbundigheid.** Veel witruimte (eigenlijk crème-ruimte). Dunne lijnen. Eén dominant element per zone. Geen drop shadows, geen gradients met meerdere kleuren, geen glassmorphism, geen 3D.

**Beperkt palet.** Vier kleuren, niet meer. Twee tekst-tonen. Twee fontfamilies. Variatie komt uit ritme en spacing, niet uit kleuraccenten.

---

## 2. Kleurpalet — exacte tokens

Alle waardes zijn afgeleid uit pixel-analyse van het cheque-ontwerp. Hex-codes zijn de **autoritatieve waarde**; de andere kolommen zijn afgeleid voor specifieke toepassingen.

### 2.1 Primaire merkkleuren

| Token | Hex | RGB | Functie |
|---|---|---|---|
| `--brand-bordeaux` | `#411C20` | 65, 28, 32 | Linker ankerstrook, primaire merkmarker, footer-accenten |
| `--brand-cream` | `#F2EDE6` | 242, 237, 230 | Achtergrond — vervangt puur wit overal |
| `--brand-gold` | `#AC9166` | 172, 145, 102 | Eyebrow-labels, scheidingslijnen, iconen, kroontje, wordmark-onderlijn |
| `--brand-ink` | `#0B0A08` | 11, 10, 8 | Primaire tekst (titels, body), QR-code |

### 2.2 Afgeleide tonen

| Token | Hex | Berekend uit | Functie |
|---|---|---|---|
| `--brand-bordeaux-deep` | `#2D1418` | bordeaux × 0.7 | Bordeaux schaduw / hover-state |
| `--brand-cream-light` | `#F5F0E8` | crème + 3% wit | Subtiele variatie binnen crème vlakken |
| `--brand-gold-bright` | `#C4A578` | goud + 12% lichter | Gehighlighte goud-accenten (kroontje highlights) |
| `--brand-ink-soft` | `#6B6B6B` | 60% K | Secundaire tekst, captions, voetnoten |
| `--brand-ink-mute` | `#9C9591` | 40% K op crème | Disabled tekst, placeholders |

### 2.3 Verboden kleuren

Deze kleuren komen voort uit andere systemen en mogen niet voorkomen in DKVK-uitingen. Ze worden bewust opgesomd omdat ze in de huidige codebase nog ergens leven of vanzelf opduiken bij gebruik van standaard libraries.

| Verboden | Bron | Vervang door |
|---|---|---|
| `#030213` (shadcn primary) | huidige themelaag (`theme-v2.css`) | `--brand-ink` of `--brand-bordeaux` |
| `#d4183d` (shadcn destructive) | zelfde bron | n.v.t. — DKVK toont geen alarmrood, foutmeldingen in `--brand-ink` |
| Tailwind `blue-*`, `purple-*`, `green-*`, `cyan-*` | Tailwind defaults | n.v.t. — geen accentkleuren toegestaan buiten palet |
| Puur wit `#FFFFFF` | browser default | `--brand-cream` |
| Puur zwart `#000000` | browser default | `--brand-ink` |
| Pastel of neon | algemeen | n.v.t. |

### 2.4 Drukspecificatie

Voor offset-druk en folie. Indicatieve Pantone-matches; **definitieve match uitsluitend via fysieke proefdruk bij de drukker**.

| Token | Pantone (indicatief) | CMYK conversie | Spot/folie advies |
|---|---|---|---|
| `--brand-bordeaux` | Pantone 7421 C of 504 C | C30 M85 Y65 K70 | Spot Pantone 7421 C |
| `--brand-cream` | n.v.t. — papierkleur | n.v.t. | Ongestreken natuurpapier (Munken Pure, Colorplan Mist) |
| `--brand-gold` | Pantone 871 C (metallic) of 4505 C (mat) | C25 M40 Y70 K15 | **Hot foil stamping** — aanbevolen ipv inkt |
| `--brand-ink` | Pantone Black 6 C of 100% K | C0 M0 Y0 K100 | 100% K |

> **Belangrijke noot voor druk:** goud in CMYK ziet er nooit uit als goud — het wordt vaalbruin. Voor de cheque is **goudfolie (hot stamping)** of **Pantone metallic** vereist. Dit is geen optie maar een eis voor de waardebeleving.

### 2.5 Toepassingsregels per kleur

**Bordeaux (`--brand-bordeaux`)**
- Mag dominant zijn als: linker ankerstrook (cheque), footer-blok (web), vlak-CTA's bij hoge nadruk.
- Mag niet dominant zijn als: grote vlakken in body, achtergrond van content-zones, accent in body-tekst.
- Minimum oppervlak per uiting: ≥ 5% (anders voelt het als inconsistent toeval).

**Crème (`--brand-cream`)**
- Standaard achtergrond op álles. Vervangt elke `bg-white`, `bg-background` of default browser-wit.
- Headers, cards, modals, formulieren — allemaal op crème.
- Geen patronen of textures op crème toevoegen behalve guilloche (zie §6).

**Goud (`--brand-gold`)**
- Voor: eyebrow-labels (kleine uppercase boven secties), scheidingslijntjes (1px), iconen (lijnstijl), kroontje, "De Kunst van Kunst" wordmark-onderstreping, "Sinds 2005"-tekst.
- Nooit voor: body-tekst, links in lopende tekst, primary CTA-knoppen (te slecht leesbaar), grote vlakken.
- Minimum tekstgrootte op crème-achtergrond: 11pt (kleiner haalt onder de WCAG-drempel).

**Ink (`--brand-ink`)**
- Primaire kleur voor alle leestekst > 11pt.
- Voor: hoofdtitel, body, cijfers, knop-tekst op crème-achtergrond.
- Niet als grote vlakken (te zwaar tegen crème).

---

## 3. Typografie

Twee fontfamilies, vier rollen. Geen uitzonderingen.

### 3.1 Fontkeuze

**Display Serif (hoofdtitels, wordmark, prijsweergave)**
- Karakter: high-contrast transitional/modern serif (didone-familie). Dunne haarlijnen, smalle counters, klassieke proportie.
- **Eerste keuze:** Cormorant Garamond — open source via Google Fonts, ondersteunt Latin Extended, gewichten 300-700, italic varianten.
- Acceptabele alternatieven: Bodoni Moda, Playfair Display.
- Niet acceptabel: slab-serifs (Roboto Slab, Merriweather), humanistische serifs (Lora, Source Serif), geometrische "luxe" pseudo-serifs.

**Functional Sans (eyebrow, body, UI)**
- Karakter: humanist of geometric sans met goede leesbaarheid op klein formaat, ruime letter-spacing in uppercase mogelijk.
- **Eerste keuze:** Inter — open source, gewichten 300-700, uitstekende cijferweergave (tabular nums), grote x-height voor leesbaarheid op crème.
- Acceptabele alternatieven: Söhne, Untitled Sans (commercieel).
- Niet acceptabel: Poppins, Montserrat (te tech-startup), Raleway, Roboto.

### 3.2 Typografische rollen

| Rol | Font | Weight | Size (web) | Letter-spacing | Transform | Voorbeeld op cheque |
|---|---|---|---|---|---|---|
| **Display XL** | Cormorant Garamond | 500 (Medium) | 56–72px | -0.01em | UPPERCASE | "KUNST-WAARDECHEQUE" |
| **Display L** | Cormorant Garamond | 400 (Regular) | 36–44px | normal | Title Case + Italic | "De Kunst van Kunst" |
| **Eyebrow ceremonial** | Inter | 500 (Medium) | 11–13px | 0.20em | UPPERCASE | "KUNSTGALERIE" boven kroontje, wordmark-onder |
| **Eyebrow sectional** | Inter | 500 (Medium) | 11–13px | 0.18em | UPPERCASE | "WAARDE", "PLAN UW BEZOEK", "AANGEBODEN DOOR" |
| **Sub-display** | Inter | 400 (Regular) | 13–15px | 0.12em | UPPERCASE | "EEN ORIGINEEL KUNSTWERK UITGEKOZEN BIJ" |
| **Number prominent** | Cormorant Garamond | 500 (Medium) | 28–34px | 0.04em | n.v.t. | "€ 500,—", "01 JULI 2026" |
| **Number code** | Inter | 600 (SemiBold) | 18–22px | 0.10em | UPPERCASE | "DKK-2026-000123" |
| **Body** | Inter | 400 (Regular) | 15–17px | normal | normal | "Scan de QR-code of ga naar de website…" |
| **Caption** | Inter | 400 (Regular) | 12–13px | 0.04em | UPPERCASE | "MAX. 2 PERSONEN (VANAF 12 JAAR)" |
| **Footnote** | Inter | 400 (Regular) | 11–12px | normal | normal | "Voorwaarden en veelgestelde vragen:" |

> **Regel voor letter-spacing in eyebrows:**
> - **0.20em (ceremonial)** alleen voor de twee meest formele momenten: het top-label "KUNSTGALERIE" naast het kroontje (voorzijde), en het wordmark-onder-label "KUNSTGALERIE" (rechtsonder achterzijde). Deze twee dragen het merkwoord en krijgen de luchtigste spacing.
> - **0.18em (sectional)** voor alle andere eyebrows: sectie-titels op de achterzijde, kolom-labels in de drie-kolomszone, "AANGEBODEN DOOR", "SCAN DE QR-CODE", "SINDS 2005", etc.
> - Op web: gebruik `.dkvk-eyebrow` (0.18em standaard) en variant `.dkvk-eyebrow--ceremonial` (0.20em) voor de zeldzame ceremoniële plekken.

### 3.3 Typografie-discipline

Lijnhoogte: serif headings 1.1–1.2; sans body 1.5–1.6; sans captions 1.4.

Geen tekstdecoratie behalve onderstreping bij links in body. Onderstreping in goud (`--brand-gold`) bij URLs in voetzones, in ink-soft op andere plekken.

Hyphenation **uit** voor display-titels. Aan voor body bij smalle kolommen.

Cijfers in numerieke contexten (chequenummer, bedrag, datum) altijd **tabular figures** (`font-feature-settings: "tnum"`). Inter en Cormorant ondersteunen dit beide.

Geen ALL CAPS langer dan 6 woorden — uppercase werkt alleen voor labels en korte sub-titels, niet voor zinnen.

Italic alleen in de wordmark "De Kunst van Kunst" en eventuele citaten in body. Nooit voor nadruk in headings.

### 3.4 Verboden typografische patronen

- Gradients of kleurverlopen op tekst.
- Stroke / outline op tekst.
- Drop shadows op tekst.
- "Display" sans-serifs op hoofdtitels (Bebas Neue, Oswald).
- Script of handwriting fonts.
- Mengvormen met meer dan twee fontfamilies.
- Variabele gewichten in dezelfde paragraaf om "ritme" te creëren.

---

## 4. Lijnen, randen en scheidingen

Het cheque-ontwerp gebruikt lijnen sparzaam maar consistent. Drie soorten:

### 4.1 Goud-haarlijn (primair scheidingselement)

- Kleur: `--brand-gold` (`#AC9166`)
- Dikte: **1px** op web (1 device pixel), **0.5pt** op druk
- Lengte: kort, **niet over volledige containerbreedte**. Typisch 40–80px naast eyebrow-labels, of als korte streep links naast/onder de wordmark.
- Toepassing: scheidt eyebrow-label van content eronder, omkadert de "Plan uw bezoek"-blok-titel, vormt het "kader" om de QR-code, onderlijnt de wordmark.
- Verboden toepassing: als horizontal-rule over volledige breedte (te decoratief), als omlijning rond cards (te webshop).

### 4.2 Goud-divider (verticaal)

- Kleur: `--brand-gold` aan `40%` opacity, of `--brand-gold` op `#D4C2A0` light variant.
- Dikte: 1px verticaal
- Toepassing: scheidt de drie kolommen "WAARDE | CHEQUENUMMER | GELDIG TOT" en de achterzijde-secties.
- Hoogte: alleen ter hoogte van de inhoud, niet door witruimte.

### 4.3 Bordeaux-strook

- Kleur: `--brand-bordeaux` (`#411C20`)
- Functie: linker ankerstrook (verticale band, ~5% van de breedte van de cheque).
- Web-equivalent: linker accent-band op het footer-blok of op specifieke "waardepapier"-componenten (bijvoorbeeld de gedigitaliseerde cheque op het persoonlijke welkomstscherm).
- Niet gebruiken als rechter rand, top-bar of full-width strook.

### 4.4 Geen randen op cards

Cards en content-blokken hebben **geen border**. Scheiding ontstaat door witruimte (crème-ruimte) en optioneel een lichte verdieping (`box-shadow: 0 1px 2px rgba(11,10,8,0.04)` — maximaal). Géén `border: 1px solid var(--border)` zoals shadcn standaard hanteert.

---

## 5. Iconografie

### 5.1 Stijl

Lijniconen in goud (`--brand-gold`), 1.5px stroke, ronde lijnuiteinden, geen vulling. Minimalistisch en consistent in maat.

Op de cheque herkenbaar: poppetjes (max-personen), kalender (geldigheid), pijlen (overdraagbaar), kaartmarker (adres), telefoon, wereldbol (URL), envelop (e-mail).

### 5.2 Bron-bibliotheek

**Aanbevolen:** Lucide Icons (`lucide-react` zit al in de codebase volgens `package.json`). Past visueel bij de cheque, gratis, MIT-licentie.

Te gebruiken icoonnamen voor terugkerende concepten:
- max-personen → `Users` of `Users2`
- geldigheid → `Calendar` of `CalendarDays`
- overdraagbaar → `ArrowLeftRight` of `Repeat2`
- adres → `MapPin`
- telefoon → `Phone`
- website → `Globe`
- e-mail → `Mail`
- QR-context → `QrCode`

### 5.3 Verboden

- Gevulde iconen (Material filled, Heroicons solid).
- Iconen in primaire kleuren (rood, blauw, groen).
- Emoji als iconen.
- Iconen met meerdere kleuren.
- Iconen groter dan 24px in body-flow (uitzondering: hero-iconen op overzichtsblokken, max 32px).

---

## 6. Guilloche-patroon

Het fijne rozet-patroon rechts op de cheque. Dit is het sterkste "waardepapier"-signaal.

### 6.1 Specificatie

- Kleur: `--brand-gold` op opacity 25–35%, of als vlakke kleur `#D8CBAE` (zachter goud).
- Lijndikte: 0.5px
- Compositie: meerdere gespiegelde rozetten die deels overlappen, geometrisch en symmetrisch.
- Plaatsing: alleen op cheque-uitingen en op materiaal dat expliciet "waardepapier"-codering moet dragen (cadeauverpakking, certificaat). **Niet op website-pagina's** — daar zou het te decoratief worden.

### 6.2 Bron en hergebruik

Maak één SVG-master ("DKVK_Guilloche_Master.svg") en hergebruik die als één asset. Niet per uiting opnieuw genereren — dat veroorzaakt drift in dichtheid en compositie.

---

## 7. Ruimte en ritme

### 7.1 Spacing-schaal

Alle spacing volgt een schaal van 4px. Geen tussenwaardes.

| Token | px | rem | Toepassing |
|---|---|---|---|
| `space-1` | 4 | 0.25 | Tussen icoon en label |
| `space-2` | 8 | 0.5 | Inline elementen |
| `space-3` | 12 | 0.75 | Tussen label en value in een veld |
| `space-4` | 16 | 1 | Body-paragrafen |
| `space-6` | 24 | 1.5 | Tussen sub-secties |
| `space-8` | 32 | 2 | Tussen secties |
| `space-12` | 48 | 3 | Tussen hoofd-blokken |
| `space-16` | 64 | 4 | Tussen pagina-secties |
| `space-24` | 96 | 6 | Hero-padding op desktop |

### 7.2 Border-radius

DKVK is **scherp**, niet rond. Bijna alles is `border-radius: 0`.

Uitzonderingen:
- Inputs: `2px` (zachte herkenning als invulveld zonder tech-look).
- Buttons: `2px`.
- Cards: `0`.
- Avatar / portretfoto's: `50%` (cirkel, alleen als aanwezig).

De `--radius` van shadcn (0.625rem = 10px) is **niet acceptabel** voor DKVK en moet worden overschreven naar `2px`.

---

## 8. Toepassing op de cheque (referentie-deconstructie)

Dit beschrijft hoe het palet en de typografie samenkomen op de cheque-PNG. Gebruik dit als check bij elke nieuwe uiting.

### 8.1 Voorzijde — bovenste helft

**Linker ankerstrook**
- Breedte: ~5% van totale breedte
- Kleur: `--brand-bordeaux` (`#411C20`) full-bleed
- Aan de binnenrand: 1px gouden lijn (`--brand-gold`) ter scheiding tussen bordeaux en crème

**Top-section "KUNSTGALERIE"**
- Layout: gecentreerd
- Elementen van boven naar beneden: kroontje (goud, ~24px), 1px tussenruimte, eyebrow "KUNSTGALERIE" in goud, geflankeerd door twee korte goud-haarlijnen (~50px) links en rechts
- Eyebrow specs: Inter Medium, 12px, letter-spacing 0.20em, kleur `--brand-gold`

**Hoofdtitel "KUNST-WAARDECHEQUE"**
- Cormorant Garamond Medium, ~64px, letter-spacing -0.01em, kleur `--brand-ink`
- All caps, één regel (op mobiel mag breken op het koppelteken)
- Bovenmarge boven titel: space-8 (32px) van het KUNSTGALERIE-blok
- Ondermarge: space-4 (16px) tot sub-display

**Sub-display "EEN ORIGINEEL KUNSTWERK UITGEKOZEN BIJ / GALERIE DE KUNST VAN KUNST"**
- Inter Regular, 14px, letter-spacing 0.12em, kleur `--brand-ink`
- Twee regels, gecentreerd
- Line-height: 1.6

**Drie-kolomsblok "WAARDE | CHEQUENUMMER | GELDIG TOT"**
- Drie gelijke kolommen, gecentreerde inhoud
- Verticaal gescheiden door 1px gouden lijntjes (~70% van de blokhoogte)
- Per kolom van boven naar beneden:
  - Eyebrow label in goud: Inter Medium 11px letter-spacing 0.20em uppercase
  - Space-3 (12px) verticaal
  - Value: Cormorant Garamond Regular 28–32px, kleur ink, voor het bedrag en datum / Inter SemiBold 20px voor het cheque-nummer

**Partner-lockup rechtsboven "AANGEBODEN DOOR / [Logo] UW PARTNER"**
- Eyebrow boven: Inter Medium 11px, letter-spacing 0.18em, kleur `--brand-ink-soft`
- Logo-container: vierkant kader (~40×40px), 1.5px ink-stroke, géén vulling, partner-letter of -merk binnen
- "UW PARTNER" naast logo: Inter Regular 13px, letter-spacing 0.10em, uppercase, kleur ink
- Het logo-kader is een **placeholder** — werkelijke partnerlogo's hebben hun eigen huisstijl en moeten apart worden ingestoken (zie §11)

**Guilloche-patroon**
- Rechts achter de hoofdtitel, deels achter de sub-display en partner-lockup
- Opacity 30%, kleur `--brand-gold`
- Niet uitgelijnd met content; het ligt er "achter" als textuur

### 8.2 Achterzijde — onderste helft

**Twee-kolomslayout**
- Linker kolom (~55% breedte): tekstinformatie
- Rechter kolom (~45% breedte): gesplitst in QR-blok + contact-blok

**Eyebrow-labels per blok**
- "ZO MAAKT U UW AFSPRAAK", "PLAN UW BEZOEK", "ROUTE A EN ROUTE B"
- Inter Medium 12px, letter-spacing 0.18em, kleur `--brand-gold`
- Eronder: korte goud-haarlijn (1px, ~60px lang)
- Tussen lijn en content: space-4 (16px)

**Body-tekst**
- Inter Regular 14px, line-height 1.6, kleur `--brand-ink`
- Maximum kolombreedte: 60 karakters

**Lijst-met-iconen "MAX. 2 PERSONEN" etc.**
- Icoon (Lucide-stijl, 18px, stroke `--brand-gold`)
- Space-3 (12px) horizontaal tussen icoon en tekst
- Caption-tekst: Inter Regular 12px, letter-spacing 0.04em, uppercase, kleur ink
- Verticale ruimte tussen lijstitems: space-3 (12px)

**QR-code-blok**
- QR-code in `--brand-ink` op `--brand-cream`
- Omkaderd door 1px goud-haarlijn met space-3 padding tussen kader en code
- Eronder: scan-instructie in eyebrow-stijl + URL in body-stijl met goud-onderstreping

**Contactblok rechts**
- Lijst van vier rijen, per rij: icoon (goud, 16px) + tekst (Inter Regular 13px, ink, letter-spacing 0.06em uppercase)
- Verticale ruimte tussen rijen: space-3
- Adres mag over 2 regels

**Wordmark-blok rechtsonder**
- Klein kroontje (goud, ~16px) gecentreerd boven
- "De Kunst van Kunst" — Cormorant Garamond Italic Regular ~28px, kleur ink
- Korte goud-haarlijn eronder (~80px)
- "KUNSTGALERIE" — Inter Medium 11px, letter-spacing 0.20em, goud, uppercase
- Eronder: "SINDS 2005" — Inter Regular 10px, letter-spacing 0.18em, ink-soft, uppercase

---

## 9. Toepassing op web (vertaling van cheque-codes naar UI)

De cheque is het meest "waardepapier"-zware moment in het systeem. Web-pagina's mogen rustiger zijn maar moeten herkenbaar uit hetzelfde systeem komen. Vertaalregels:

| Cheque-element | Web-equivalent |
|---|---|
| Bordeaux ankerstrook links | Optionele bordeaux-band als linker accent op specifieke "waardepapier"-componenten (bv. gedigitaliseerde cheque op welkomstscherm). Niet op elke pagina. |
| Guilloche-patroon | Alleen op cheque-replica en certificaat-pagina. Niet op homepage of planner. |
| Goud-haarlijnen onder eyebrows | Behouden — ook op web onder elke eyebrow-label |
| Crème achtergrond | **Overal** op web. Vervangt elke `bg-white`. |
| Kroontje | Alleen in header/footer van het hoofdmenu en op afsluitende blokken. Niet op elke sectie. |
| Wordmark italic | Alleen in footer en op formele bevestigingsmomenten (afspraakbevestiging). |

Web krijgt aanvullend nodig:
- Focus-states (1px ink-outline + 2px crème offset, geen blauwe browser-default).
- Hover-states (links: van ink naar bordeaux; goud-onderstreping wordt iets dikker).
- Disabled states (ink-mute kleur, geen opacity-vermindering).

---

## 10. Accessibility-controle

Met dit palet:

| Combinatie | Contrast-ratio | WCAG-niveau |
|---|---|---|
| `--brand-ink` op `--brand-cream` | ~17:1 | AAA — alle tekstgroottes |
| `--brand-bordeaux` op `--brand-cream` | ~10:1 | AAA — alle tekstgroottes |
| `--brand-gold` op `--brand-cream` | ~3.4:1 | AA voor large text (≥18pt regular of ≥14pt bold). **NIET geschikt voor body**. |
| `--brand-ink-soft` op `--brand-cream` | ~5.4:1 | AA voor body, AAA voor large text |
| `--brand-cream` op `--brand-bordeaux` | ~10:1 | AAA |
| `--brand-cream` op `--brand-ink` | ~17:1 | AAA |

Praktische consequenties:
- Goud-tekst (eyebrows, captions) **mag, mits ≥ 13px regular of ≥ 11px medium** (alle eyebrow-labels op de cheque voldoen).
- Goud-tekst in body of lange lopende tekst is **niet toegestaan**.
- Foutmeldingen in ink, niet in destructive-rood (DKVK heeft geen alarmrood).

---

## 11. Partnerlogo's

Partnerlogo's komen van derden en hebben hun eigen huisstijl. DKVK kadert ze in zonder te overschrijven.

### 11.1 Lockup-regels

Plaatsing is altijd **rechtsboven** op de cheque, in een vaste container. Boven de container: eyebrow "AANGEBODEN DOOR" (Inter Medium 11px, letter-spacing 0.18em, kleur ink-soft).

Container voor het logo:
- Vierkant kader 40×40px (cheque) / proportioneel op andere uitingen
- Border 1.5px in `--brand-ink`
- Achtergrond: crème (geen wit-vlak rond logo's met witte randen — laat ze "ademen" in crème)

Naast het logo: "UW PARTNER" of de bedrijfsnaam in Inter Regular 13px uppercase met letter-spacing 0.10em.

### 11.2 Verboden

- Partnerlogomuur (meerdere partnerlogo's in één rij/grid). Dit is in de Guidelines al verboden en wordt hier herbevestigd.
- Partner-logos op de homepage of planner. Alleen op individueel cheque-niveau.
- Logos in hun originele kleur op crème — als de partner felle merkkleuren heeft, gebruik dan een monochrome versie van het logo (in ink), of kader het in een eigen kleurvlak dat past bij de partner.

---

## 12. Toepassings-checklist (gebruik deze bij elk nieuw ontwerp)

Voor elk nieuw asset (web-pagina, druk-uiting, e-mail, QR-target):

- [ ] Achtergrond is crème (`#F2EDE6`), niet wit
- [ ] Hoofdtekst is ink (`#0B0A08`), niet `#000000`
- [ ] Maximaal twee fonts gebruikt: Cormorant Garamond + Inter
- [ ] Geen kleuren buiten het palet — geen blue/purple/green/cyan accenten
- [ ] Eyebrow-labels gebruiken letter-spacing 0.18em (sectional) of 0.20em (ceremonial — alleen "KUNSTGALERIE") en zijn in goud
- [ ] Goud-haarlijnen zijn 1px en niet langer dan strikt nodig
- [ ] Geen drop-shadows zwaarder dan `0 1px 2px rgba(11,10,8,0.04)`
- [ ] Geen border-radius groter dan 2px
- [ ] Geen border op cards
- [ ] Iconen zijn Lucide line-style in goud, 1.5px stroke
- [ ] Cijfers gebruiken tabular figures
- [ ] Kroontje en wordmark zijn niet vervormd of geherkleurd
- [ ] Guilloche-patroon alleen op cheque/certificaat
- [ ] Contrast ink-op-crème en bordeaux-op-crème voldoet aan AAA
- [ ] Bij goud-tekst: minimaal 11pt medium of 13pt regular
- [ ] Geen gradients, geen glassmorphism, geen 3D-effecten

---

## 13. Versiebeheer

V1 — vastgesteld op basis van de Kunst-Waardecheque-richting. Volgende revisie wanneer:
- Partner-lockup formeel wordt vastgesteld (eigen sub-document)
- Definitieve drukker spot-color matches teruglevert
- Aangepast Pantone-systeem na proefdruk
- Toevoeging van animatie-/motion-richtlijnen voor web

Wijzigingen worden bijgehouden in `06_Visual_Identity_Changelog.md`.
