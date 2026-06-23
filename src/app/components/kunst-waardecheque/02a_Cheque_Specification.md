# 02a — Kunst-Waardecheque · Volledige Spec

Dit document beschrijft de **gehele cheque** tot in detail: elk element, elke maat, elke kleur, elke font-instelling. Bedoeld voor:

1. Drukvoorbereiding — voldoende detail om in InDesign of vergelijkbaar drukklaar bestand te bouwen.
2. Reproduceerbaarheid — een nieuwe ontwerper of de drukker kan exact dezelfde cheque produceren.
3. Variatie-controle — bij chequenummer, partner of value-wijziging blijven alle andere details identiek.

Verwijst naar `02_Visual_Identity_V1.md` voor het algemene visuele systeem (kleuren, typografie, lijnen). De officiële NAW- en bedrijfsgegevens staan in **§7** van dít document — die sectie geldt als bron-van-waarheid voor alle uitingen, niet alleen voor de cheque.

---

## 1. Formaat en drager

### 1.1 Eindformaat

Op basis van de proportie van het referentiebeeld (1536×1024 px, ratio 3:2) is het aanbevolen drukformaat:

| Optie | Afmetingen | Toelichting |
|---|---|---|
| **A** (aanbevolen) | 210 × 99 mm | DL-formaat — past in standaard envelop, voelt als waardepapier |
| B | 220 × 105 mm | Iets ruimer, premium-uitstraling, niet-standaard envelop nodig |
| C | 297 × 140 mm | Half-A4 — alleen voor cadeauverpakking, te groot voor envelop |

**Aanbeveling: A (210 × 99 mm)** — past binnen DL-envelop, is gangbaar voor cadeaucheques en behoudt de 3:2-verhouding van het ontwerp grotendeels.

### 1.2 Afloop en veilige zone

- **Bleed (afloop):** 3 mm aan elke zijde — bordeaux strook en guilloche-patroon lopen door tot de afloop.
- **Veilige zone (binnenmarge):** 5 mm aan elke zijde voor tekst en iconen — niets cruciaals binnen die rand.
- **Document-formaat met afloop:** 216 × 105 mm (210+3+3 × 99+3+3).

### 1.3 Papier

| Eigenschap | Specificatie |
|---|---|
| Grammage | 300–350 g/m² |
| Type | Ongestreken, lichtgekleurd natuurpapier |
| Aanbevolen merken | Munken Pure Rough 300g, GF Smith Colorplan 350g (kleur "Mist" of "Vellum White"), Arctic Volume Ivory |
| Textuur | Lichte natuurlijke structuur — niet glad, niet ruw |
| Kleur basismateriaal | Zo dicht mogelijk bij `#F2EDE6` — als het papier al crème is, drukken we minder ink-vlak |

Niet acceptabel: gestreken karton (te glad, voelt als flyer), recyclepapier met zichtbare vezels (te casual), glanspapier (volledig verkeerd register).

### 1.4 Veredeling (verplicht voor goud)

| Element | Techniek | Toelichting |
|---|---|---|
| Goud-elementen | **Hot foil stamping** | Pantone 871 C of vergelijkbare metallic folie. Goud in CMYK is geen optie — wordt vaalbruin. |
| Hoofdtitel "KUNST-WAARDECHEQUE" | Optioneel: blinde preegdruk + zwarte inkt | Geeft tactiele dimensie. Optioneel — sluit gewoon zwart drukken niet uit. |
| Bordeaux strook | Standaard offset CMYK + spot Pantone 7421 C | Spot-kleur voor consistente bordeaux over hele oplage. |
| Guilloche-patroon | Standaard offset, lichte goud-tint of Pantone 871 C op 30% raster | Subtiel — niet glanzend folie hier (te overdreven). |
| Cheque-nummer | **Variabele data printen** (digitaal) | Elke cheque uniek. Inkjet of digitale toner over de geprinte basis. |

---

## 2. Layout-grid

### 2.1 Bovenste helft (voorzijde)

Verdeling op 210 × 99 mm:

```
┌──┬──────────────────────────────────────┬──────────┐
│  │                                      │          │
│  │    [KUNSTGALERIE]                    │ AANGEB.  │
│  │                                      │ DOOR     │
│  │    KUNST-WAARDECHEQUE                │ [LOGO]   │
│  │                                      │ UW PART. │
│  │    EEN ORIGINEEL KUNSTWERK ...       │          │
│  │                                      │ ╱╲╱╲╱╲   │ <- guilloche
│  │  WAARDE  │ NUMMER │ GELDIG TOT       │ ╲╱╲╱╲╱   │
│  │  €500,—  │ DKK... │ 01 JULI 2026     │          │
│  │                                      │          │
└──┴──────────────────────────────────────┴──────────┘
 ▲                                              
 bordeaux strook                                
```

Maten:
- Bordeaux strook: 10 mm breed (incl. afloop), van top tot bottom
- Linkerinhoud-zone: vanaf 18 mm vanaf links tot ~150 mm
- Rechter zone (partner + guilloche): vanaf 155 mm tot rechterkant
- Verticaal: top-padding 14 mm, bottom-padding 12 mm

### 2.2 Onderste helft (achterzijde)

Verdeling op 210 × 99 mm:

```
┌──┬───────────────────────────┬──┬───────────┬───────────┐
│  │ ZO MAAKT U UW AFSPRAAK    │  │ PLAN UW   │ ADRES     │
│  │ ───                       │  │ BEZOEK    │ TEL       │
│  │ Scan QR-code...           │  │ ───       │ URL       │
│  │                           │  │ [QR]      │ E-MAIL    │
│  │ 👥 Max. 2 personen        │  │           │           │
│  │ 📅 3 maanden              │  │ Scan QR / │ ⌒        │
│  │ ⇄ Overdraagbaar           │  │ ga naar   │ De Kunst  │
│  │ ───                       │  │ URL       │ van Kunst │
│  │ ROUTE A EN ROUTE B        │  │           │ ───       │
│  │ ───                       │  │           │ KUNSTGAL. │
│  │ Minimaal 50 werken...     │  │           │ SINDS 2005│
│  │                           │  │           │           │
│  │ Voorwaarden URL           │  │           │           │
└──┴───────────────────────────┴──┴───────────┴───────────┘
```

Maten:
- Linker tekst-zone: 18–112 mm (94 mm breed)
- Verticale gouden divider tussen midden-zone en links
- QR-zone: 118–155 mm
- Verticale gouden divider tussen QR-zone en rechts
- Contact + wordmark-zone: 158–200 mm

---

## 3. Element-voor-element specificatie

Onderstaand alle elementen met hun exacte instellingen. Coördinaten in mm vanaf de **linkerbovenhoek van het uitgesneden formaat (210×99 mm zonder afloop)**.

### 3.1 Bordeaux ankerstrook

| Eigenschap | Waarde |
|---|---|
| Positie X | -3 mm tot 7 mm (loopt 3 mm over in afloop) |
| Positie Y | -3 mm tot 102 mm (over volledige hoogte + afloop) |
| Vulling | Spot Pantone 7421 C / `--brand-bordeaux` `#411C20` |
| Binnenrand | Geen border — directe overgang naar 1px goud-haarlijn op X=8 mm |

### 3.2 Goud-haarlijn naast bordeaux

| Eigenschap | Waarde |
|---|---|
| Positie X | 8 mm |
| Positie Y | 0 mm tot 99 mm (volledige hoogte zonder afloop) |
| Dikte | 0.5pt (~0.18 mm) |
| Kleur | Pantone 871 C metallic / `--brand-gold` `#AC9166` (in folie) |

### 3.3 Kroontje (top)

| Eigenschap | Waarde |
|---|---|
| Positie | Horizontaal gecentreerd in linkerinhoud-zone (~midden van 18–150 mm zone, dus x ≈ 84 mm) |
| Y-positie | Top: 14 mm |
| Hoogte | ~7 mm |
| Vulling | Goudfolie Pantone 871 C |
| Stijl | Klassiek vijfpunts-kroontje, gelijkmatig van breedte, niet smal-getrokken |

### 3.4 Eyebrow "KUNSTGALERIE" (top)

| Eigenschap | Waarde |
|---|---|
| Tekst | KUNSTGALERIE |
| Font | Inter Medium |
| Size | 9pt |
| Letter-spacing | 0.20em (~0.4 mm) |
| Kleur | `--brand-gold` (folie) |
| Transform | UPPERCASE |
| Positie | Gecentreerd, Y = ~22 mm |
| Flankering | Twee goud-haarlijntjes links en rechts, elk ~12 mm lang, 0.5pt, midden-vertikaal uitgelijnd op tekst, met 4 mm ruimte tussen lijntje en tekst |

### 3.5 Hoofdtitel "KUNST-WAARDECHEQUE"

| Eigenschap | Waarde |
|---|---|
| Tekst | KUNST-WAARDECHEQUE |
| Font | Cormorant Garamond Medium (500) |
| Size | 36pt |
| Letter-spacing | -0.01em |
| Kleur | 100% K (`--brand-ink` `#0B0A08`) |
| Transform | UPPERCASE |
| Y-positie | Baseline op ~38 mm |
| Horizontale uitlijning | Gecentreerd in linkerinhoud-zone |
| Notes | Op één regel — bij krappe ruimte minimaal letter-spacing aanpassen, niet font-size |

### 3.6 Sub-display

| Eigenschap | Waarde |
|---|---|
| Tekst | EEN ORIGINEEL KUNSTWERK UITGEKOZEN BIJ<br>GALERIE DE KUNST VAN KUNST |
| Font | Inter Regular (400) |
| Size | 9pt |
| Letter-spacing | 0.12em |
| Line-height | 1.6 (~14.4pt) |
| Kleur | 100% K |
| Transform | UPPERCASE |
| Y-positie | Top op ~48 mm |
| Horizontale uitlijning | Gecentreerd |

### 3.7 Drie-kolomsblok

Drie gelijke kolommen, gescheiden door verticale 0.5pt goud-haarlijnen.

**Zone-totaal:** X = 18 mm tot 150 mm (totale breedte 132 mm). Verdeeld in drie kolommen van 44 mm elk:
- Kolom 1 (WAARDE): X = 18–62 mm, gecentreerde inhoud op X ≈ 40 mm
- Kolom 2 (CHEQUENUMMER): X = 62–106 mm, gecentreerde inhoud op X ≈ 84 mm
- Kolom 3 (GELDIG TOT): X = 106–150 mm, gecentreerde inhoud op X ≈ 128 mm
- Verticale dividers op X = 62 mm en X = 106 mm

**Kolom 1 — WAARDE**
- Eyebrow "WAARDE":
  - Inter Medium 8pt
  - Letter-spacing 0.20em
  - Kleur `--brand-gold` (folie)
  - Y-positie label: ~62 mm
- Value "€ 500,—":
  - Cormorant Garamond Regular 22pt
  - Letter-spacing 0.02em
  - Kleur ink
  - Y-positie baseline: ~72 mm
  - Tabular figures (`tnum`)

**Kolom 2 — CHEQUENUMMER**
- Eyebrow "CHEQUENUMMER":
  - Identiek aan kolom 1 eyebrow
- Value "DKK-2026-000123":
  - Inter SemiBold 14pt
  - Letter-spacing 0.10em
  - Kleur ink
  - **Variabele data** — wordt per cheque vervangen
  - Format: `DKK-{YYYY}-{6-digit-sequence}`

**Kolom 3 — GELDIG TOT**
- Eyebrow "GELDIG TOT":
  - Identiek aan kolom 1
- Value "01 JULI 2026":
  - Cormorant Garamond Regular 19pt
  - Letter-spacing 0.04em
  - Kleur ink
  - **Variabele data** — datum 3 maanden na uitgifte (zie consistentie-noot §6)
  - Format: "DD MAAND YYYY" — maand in volledige Nederlandse naam, lowercase eerst, dan Title Case via CSS / opmaak

### 3.8 Verticale gouden dividers tussen kolommen

| Eigenschap | Waarde |
|---|---|
| Positie | Tussen kolom 1-2 en kolom 2-3 |
| Dikte | 0.5pt |
| Kleur | `--brand-gold` (folie) |
| Hoogte | Loopt van eyebrow-niveau tot value-baseline + 2 mm onder |
| Opacity | 100% (volle goud) |

### 3.9 Partner-lockup (rechtsboven)

| Element | Specificatie |
|---|---|
| Eyebrow "AANGEBODEN DOOR" | Inter Medium 8pt, letter-spacing 0.18em, kleur `--brand-ink-soft` `#6B6B6B`, uppercase, Y ~14 mm |
| Logo-kader | 12 × 12 mm vierkant, 1.0pt ink-stroke, géén vulling, kleur ink |
| Logo-inhoud | Partnerlogo of -letter, gecentreerd, kleur ink (geen merkkleuren) |
| "UW PARTNER"-tekst | Inter Regular 9pt, letter-spacing 0.08em, uppercase, kleur ink, naast logo-kader, vertikaal gecentreerd op kader |
| Container-positie | Rechterzijde, X ~165 mm, Y ~22 mm |

### 3.10 Guilloche-patroon

| Eigenschap | Waarde |
|---|---|
| Bron | `DKVK_Guilloche_Master.svg` (eenmaal aangemaakt, herbruikt) |
| Plaatsing | Rechts achter de hoofdtitel, deels achter sub-display en partner-lockup |
| Bounding box | ~120–210 mm horizontaal, 20–95 mm verticaal |
| Lijndikte | 0.3pt |
| Kleur | `--brand-gold` op 30% opacity, of vlakke kleur `#D8CBAE` |
| Z-index | Onder alle tekst en logo-elementen |

---

## 4. Achterzijde — element-voor-element

### 4.1 Sectie "ZO MAAKT U UW AFSPRAAK"

**Eyebrow-label**
- Inter Medium 9pt, letter-spacing 0.18em, kleur `--brand-gold` folie
- Uppercase
- Positie: X ~18 mm, Y ~9 mm (gemeten vanaf top achterzijde)

**Goud-haarlijn onder eyebrow**
- Lengte ~25 mm
- 0.5pt
- Kleur goud
- Y ~13 mm
- 1 mm onder eyebrow-tekst

**Body-tekst**
- "Scan de QR-code of ga naar de website en plan eenvoudig uw bezoek in op een moment dat u past."
- Inter Regular 9pt, line-height 1.6
- Kleur ink
- Maximum kolombreedte: 80 mm
- Y top ~18 mm

**Lijst-met-iconen** (3 items)

| Item | Icoon (Lucide) | Tekst |
|---|---|---|
| 1 | `Users2` | MAX. 2 PERSONEN (VANAF 12 JAAR) |
| 2 | `CalendarDays` | GELDIGHEID 3 MAANDEN NA UITGIFTE |
| 3 | `ArrowLeftRight` | OVERDRAAGBAAR AAN DERDEN |

Per item:
- Icoon: 4 mm hoog, 1.0pt stroke, kleur ink (op cheque) of kleur goud (alternatieve variant)
- Tekst: Inter Regular 8pt, letter-spacing 0.06em, uppercase, kleur ink
- Horizontale ruimte tussen icoon en tekst: 4 mm
- Verticale ruimte tussen items: 4 mm
- Y top eerste item ~38 mm

### 4.2 Sectie "ROUTE A EN ROUTE B"

**Eyebrow-label**
- Identiek opmaak aan andere eyebrows
- Y ~62 mm

**Goud-haarlijn onder eyebrow**
- 25 mm, 0.5pt, goud

**Body-tekst**
- "Minimaal 50 werken zijn altijd beschikbaar binnen uw cheque (Route A).<br>Kiest u een ander werk? Dan wordt uw cheque verrekend met de galerieprijs (Route B)."
- Inter Regular 8.5pt, line-height 1.5
- Kleur ink
- Y top ~67 mm

### 4.3 Voorwaarden-link (linksonder)

- "Voorwaarden en veelgestelde vragen:" — Inter Regular 7.5pt, ink-soft
- Volgende regel: "dekunstvankunst.nl/voorwaarden" — Inter Regular 8pt, ink met onderstreping in goud, of kleur goud zelf
- Y ~85 mm

### 4.4 QR-code-blok (midden)

**Container**
- 30 × 30 mm vierkant
- Omkadert door 0.5pt goud-haarlijn met 3 mm padding tussen kader en QR-code
- Centraal in midden-zone

**QR-code zelf**
- 24 × 24 mm
- Kleur: 100% K (ink) op crème
- **Aangeleverd als vector (SVG)** — niet als raster, anders korrelig bij druk
- Foutcorrectie: niveau M (15%) of Q (25%) — Q geeft betere leesbaarheid bij beschadiging
- URL waarheen de code linkt: `https://dekunstvankunst.nl/afspraak?cheque={chequenummer}` (variabele per cheque, of statisch als generieke URL volstaat)

**Onder de QR-code**
- "SCAN DE QR-CODE" — Inter Medium 8pt, letter-spacing 0.18em, uppercase, kleur ink, gecentreerd, 4 mm onder QR
- "of ga naar" — Inter Regular 8pt, kleur ink-soft, gecentreerd, 1 mm onder vorige
- "dekunstvankunst.nl/afspraak" — Inter Regular 8pt, kleur ink, gecentreerd, 1 mm onder vorige

### 4.5 Contactblok (rechts)

Vier rijen. Per rij: icoon (Lucide line, 3.5 mm hoog, kleur goud folie, 1.0pt stroke) + tekst rechts ervan.

| Icoon | Tekst | Specs tekst |
|---|---|---|
| `MapPin` | GEERDINKSWEG 2<br>7555 DM HENGELO (OV) | 2 regels |
| `Phone` | 074 - 291 48 57 | 1 regel |
| `Globe` | DEKUNSTVANKUNST.NL | 1 regel |
| `Mail` | INFO@DEKUNSTVANKUNST.NL | 1 regel |

Tekst-specs:
- Inter Regular 8pt
- Letter-spacing 0.06em
- Uppercase
- Kleur ink
- Verticale ruimte tussen rijen: 5 mm
- Horizontale ruimte icoon ↔ tekst: 4 mm

### 4.6 Wordmark-blok (rechtsonder)

**Volgorde van boven naar beneden:**

1. Mini-kroontje
   - Goudfolie, 4 mm hoog
   - Gecentreerd

2. "De Kunst van Kunst"
   - Cormorant Garamond Regular Italic 16pt
   - Kleur ink
   - Gecentreerd
   - 2 mm onder kroontje
   - Geen letter-spacing aanpassing — natural

3. Goud-haarlijn
   - 18 mm lang, 0.5pt, goud
   - 2 mm onder wordmark
   - Gecentreerd

4. "KUNSTGALERIE"
   - Inter Medium 7pt
   - Letter-spacing 0.20em
   - Kleur goud folie
   - Uppercase
   - 2 mm onder lijn

5. "SINDS 2005"
   - Inter Regular 6.5pt
   - Letter-spacing 0.18em
   - Kleur ink-soft
   - Uppercase
   - 1.5 mm onder vorige

Y-positie van het hele blok: top kroontje rond Y ~58 mm, bottom "SINDS 2005" rond Y ~85 mm.

---

## 5. Variabele data — overzicht

Bij elke cheque-print wijzigen onderstaande velden. Alle andere ontwerp-elementen blijven identiek.

| Veld | Format | Voorbeeld | Plaats op cheque |
|---|---|---|---|
| Chequenummer | `DKK-{YYYY}-{6-digit}` | `DKK-2026-000123` | Drie-kolomsblok kolom 2 |
| Geldig tot | `DD MAAND YYYY` (NL) | `01 JULI 2026` | Drie-kolomsblok kolom 3 |
| Partner-logo + naam | (image + text) | `[M-logo]` + `WARMTESTORE` | Rechtsboven |
| QR-code-target (optioneel) | URL met chequenummer | `…/afspraak?c=DKK-2026-000123` | QR-zone midden achter |

Alle andere tekst is **statisch**. Wijziging van statische tekst vereist een nieuwe versie van dit document (V2), niet een variabele-data-update.

---

## 6. Consistentie-controles (vóór drukgang)

Bij elke nieuwe cheque-batch deze checks uitvoeren:

- [ ] Geldigheidstermijn op cheque ↔ "geldigheid 3 maanden na uitgifte" claim onderaan komen overeen. De huidige cheque toont "01 juli 2026" + "3 maanden na uitgifte" — datum moet matchen met uitgifte + 3 maanden.
- [ ] Chequenummer is uniek (niet eerder uitgegeven) — verificatie tegen administratie-systeem.
- [ ] Partner-logo is in juiste licentie/toestemming gebruikt.
- [ ] Partner-naam-spelling klopt.
- [ ] QR-code is leesbaar — testscan met telefoon op fysieke proefdruk vóór oplage.
- [ ] Spelling van statische velden gecontroleerd (zie §7).

---

## 7. Officiële NAW- en bedrijfsgegevens (bron van waarheid)

Deze gegevens zijn de **autoritatieve waarde** voor élke uiting (cheque, website, e-mail, social, drukwerk, briefpapier). Bij conflict tussen een bestaand bestand (incl. de huidige cheque-PNG, oude code-componenten of marketingmateriaal) en dit hoofdstuk wint dit hoofdstuk.

### 7.1 Bedrijfsgegevens

| Veld | Waarde | Toepassing |
|---|---|---|
| **Bedrijfsnaam (volledig)** | Galerie de Kunst van Kunst | Footer, juridische teksten, KVK-vermeldingen |
| **Bedrijfsnaam (wordmark)** | De Kunst van Kunst | Visuele wordmark met "KUNSTGALERIE" eronder |
| **Sinds** | 2005 | Wordmark-onder, footer |
| **Adres (regel 1)** | Geerdinksweg 2 | Cheque, footer, briefpapier |
| **Adres (regel 2)** | 7555 DM Hengelo (OV) | Idem — provincie-afkorting (OV) altijd erbij |
| **Telefoon (display-formaat)** | 074 - 291 48 57 | Cheque, web, drukwerk (met spaties voor leesbaarheid) |
| **Telefoon (E.164)** | +31 74 291 48 57 | `tel:`-links in HTML |
| **Telefoon (compact)** | 074-2914857 | Alleen waar ruimte krap is en geen telefoon-link nodig |
| **Bereikbaarheid** | ma t/m vr 12:00–16:00 | Optioneel naast telefoonnummer; verplicht op contactpagina |
| **E-mail** | info@dekunstvankunst.nl | Cheque, web, footer, e-mailhandtekening |
| **Website** | dekunstvankunst.nl | Display zonder `https://` of `www.` |
| **KVK-nummer** | 08148870 | Footer (web verplicht), drukwerk (cheque + briefpapier) |

### 7.2 Display-conventies

**Telefoonnummer**: standaard weergeven als `074 - 291 48 57` (drie blokken met spaties). Op de cheque met letter-spacing 0.06em uppercase. In klikbare links: `tel:+31742914857`.

**Adres**: altijd op twee regels (straat op regel 1, postcode + plaats + provincie op regel 2). De `(OV)` is onderdeel van de plaatsnaam-conventie en blijft altijd erbij — niet weglaten "om ruimte te besparen".

**E-mail**: lowercase. Op print uppercase (`INFO@DEKUNSTVANKUNST.NL`) volgens het uppercase-eyebrow-systeem in de cheque. Op web standaard lowercase.

**KVK**: format `KVK 08148870` (met spatie tussen "KVK" en het nummer, geen punt of dubbele punt ertussen). Géén `KvK` of `K.V.K.`.

**Website**: display zonder schema en zonder `www.`. Dus `dekunstvankunst.nl` — niet `https://www.dekunstvankunst.nl`. In klikbare links uiteraard wel met `https://`.

### 7.3 Plek op de cheque van KVK en bereikbaarheid

Twee gegevens stonden niet op de huidige cheque-PNG en moeten worden toegevoegd:

**KVK-nummer** — plaatsing in de voorwaarden-zone (linksonder achterzijde), als derde regel na de voorwaarden-URL:

```
Voorwaarden en veelgestelde vragen:
dekunstvankunst.nl/voorwaarden
KVK 08148870
```

Specs: Inter Regular 7.5pt, kleur `--brand-ink-soft`, regelafstand 1.5. Dezelfde stijl als de "Voorwaarden"-regel direct erboven.

**Bereikbaarheidstijden** — optioneel toevoegen in het contactblok rechts, onder de telefoonregel:

```
[Phone-icoon] 074 - 291 48 57
              MA T/M VR 12:00–16:00
```

Tweede regel: Inter Regular 7pt, letter-spacing 0.10em, uppercase, kleur `--brand-ink-soft`. Iets kleiner dan het telefoonnummer zelf zodat het secundair voelt. Tussen telefoonregel en bereikbaarheidsregel: 1mm verticaal.

> **Besluit nodig:** of bereikbaarheidstijden op de cheque verschijnen (het is geldig drie maanden — de tijden zijn algemene info) of alleen op web/contactpagina. Bij keuze voor "alleen web": neem dit op in het contact-blok van de website-footer (zie `05_Website_Planner_Blueprint`).

### 7.4 Verboden varianten

Onderstaande historische varianten zijn gesaneerd. Gebruik in alle documenten en uitingen uitsluitend de correcte NAW-gegevens uit §7.1.

| Correcte variant | Bron waar het is aangetroffen |
|---|---|
| Geerdinksweg 2, 7555 DM Hengelo (OV) | huidige cheque-PNG (gecorrigeerd) |
| Geerdinksweg 2, 7555 DM Hengelo (OV) | wireframe-componenten (gecorrigeerd) |
| 074 - 291 48 57 | huidige cheque-PNG (gecorrigeerd) |
| 074 - 291 48 57 | wireframe-componenten (gecorrigeerd) |

Bij elke nieuwe uiting deze NAW-tabel uit §7.1 als enige bron raadplegen. De wireframe-componenten in de codebase bevatten verouderde data en moeten in de hi-fi-fase worden bijgewerkt — zie §7.5 voor het volledige overzicht.

### 7.5 To-do: NAW-correcties in bestaande wireframe-codebase

In de huidige codebase staan op meerdere plekken foutieve NAW-gegevens. Bij overgang naar hi-fi (of zodra er een sanering-pass plaatsvindt) deze plekken bijwerken. Deze lijst is niet uitputtend — bij twijfel grep'en op postcode/telefoonpatronen.

**Postcode in gebruik: `7555 DM`** (12 vindplekken in 8 bestanden):

| Bestand | Regel(s) |
|---|---|
| `AboutGallery.tsx` | 98, 363 |
| `AppointmentConfirmed.tsx` | 67, 142 |
| `AppointmentConfirmedQR.tsx` | 46 |
| `Homepage.tsx` | 84, 308 |
| `PersonalWelcome.tsx` | 149 |
| `PlannerConfirmation.tsx` | 64 |
| `PlannerConfirmationQR.tsx` | 82 |

**Telefoon in gebruik: `074 - 291 48 57`** (5 vindplekken in 3 bestanden):

| Bestand | Regel(s) |
|---|---|
| `ChequeInput.tsx` | 142 |
| `Homepage.tsx` | 85, 309 |
| `AboutGallery.tsx` | 53, 387 |

**Additioneel:** controleer of de KVK-vermelding ergens in een footer-component moet worden toegevoegd. Op het moment van schrijven staat `KVK 08148870` nergens in de code en moet dat alsnog ergens in een footer-component verschijnen.

---

## 8. Statische teksten — exact

Onderstaande tekst staat **letterlijk** op de cheque. Bij wijziging: nieuwe documentversie en formele goedkeuring.

| Plaats | Tekst |
|---|---|
| Eyebrow top | `KUNSTGALERIE` |
| Hoofdtitel | `KUNST-WAARDECHEQUE` |
| Sub-display | `EEN ORIGINEEL KUNSTWERK UITGEKOZEN BIJ`<br>`GALERIE DE KUNST VAN KUNST` |
| Eyebrow kolom 1 | `WAARDE` |
| Eyebrow kolom 2 | `CHEQUENUMMER` |
| Eyebrow kolom 3 | `GELDIG TOT` |
| Eyebrow partner | `AANGEBODEN DOOR` |
| Section 1 eyebrow | `ZO MAAKT U UW AFSPRAAK` |
| Section 1 body | `Scan de QR-code of ga naar de website en plan eenvoudig uw bezoek in op een moment dat u past.` |
| List item 1 | `MAX. 2 PERSONEN (VANAF 12 JAAR)` |
| List item 2 | `GELDIGHEID 3 MAANDEN NA UITGIFTE` |
| List item 3 | `OVERDRAAGBAAR AAN DERDEN` |
| Section 2 eyebrow | `ROUTE A EN ROUTE B` |
| Section 2 body | `Minimaal 50 werken zijn altijd beschikbaar binnen uw cheque (Route A).`<br>`Kiest u een ander werk? Dan wordt uw cheque verrekend met de galerieprijs (Route B).` |
| Voorwaarden | `Voorwaarden en veelgestelde vragen:`<br>`dekunstvankunst.nl/voorwaarden` |
| QR-eyebrow | `PLAN UW BEZOEK` |
| QR-instructie 1 | `SCAN DE QR-CODE` |
| QR-instructie 2 | `of ga naar` |
| QR-instructie 3 | `dekunstvankunst.nl/afspraak` |
| Contact 1 | `GEERDINKSWEG 2 / 7555 DM HENGELO (OV)` |
| Contact 2 | `074 - 291 48 57` |
| Contact 3 | `DEKUNSTVANKUNST.NL` |
| Contact 4 | `INFO@DEKUNSTVANKUNST.NL` |
| Wordmark | `De Kunst van Kunst` |
| Wordmark-onder | `KUNSTGALERIE` |
| Sinds-tekst | `SINDS 2005` |

> **Bekende fouten in huidige cheque-PNG (te corrigeren vóór druk):**
>
> *Tekstfouten:*
> 1. `CHEQUENIMMER` → moet zijn `CHEQUENUMMER`
> 2. `SCAN UE QR-CODE` → moet zijn `SCAN DE QR-CODE`
> 3. `dekustvankunst.nl/voorwaarden` (op huidige PNG, ontbreekt de 'n') → moet zijn `dekunstvankunst.nl/voorwaarden`. Verifieerbaar tegen de andere URLs op dezelfde cheque die wél de juiste spelling hebben (`dekunstvankunst.nl/afspraak`).
>
> *Onjuiste NAW-gegevens (volledig fout adres + telefoon op huidige PNG):*
>
> 4. Adres: `Geerdinksweg 2, 7555 DM Hengelo (OV)`.
> 5. Telefoon: `074 - 291 48 57`.
>
> *Inhoudelijke inconsistentie:*
>
> 6. "GELDIG TOT 01 JULI 2026" (vaste datum) vs. "GELDIGHEID 3 MAANDEN NA UITGIFTE" (relatieve datum). Kies één systeem; bij voorkeur "geldig tot {datum}" en de relatieve regel daarmee verwijderen of aanpassen tot "geldig 3 maanden na uitgiftedatum (zie GELDIG TOT)".
>
> *Ontbrekende verplichte gegevens (volgens §7.1 hieronder):*
>
> 7. KVK-nummer ontbreekt. Toevoegen onder voorwaarden-link of in voettekst-zone: `KVK 08148870`.
> 8. Bereikbaarheidstijden ontbreken. Optioneel toevoegen in contactblok onder telefoonnummer: `MA T/M VR 12:00–16:00`.

---

## 9. Aanlever-checklist voor de drukker

- [ ] **PDF/X-4** geëxporteerd (niet "Save as PDF" uit een ontwerp-tool).
- [ ] Eindformaat 210 × 99 mm + 3 mm afloop = 216 × 105 mm document.
- [ ] Alle kleuren in CMYK + spot Pantone 7421 C (bordeaux) + spot Pantone 871 C (goud) waar van toepassing.
- [ ] Geen RGB-elementen meer aanwezig (preflight controle).
- [ ] Alle fonts ge-embed of omgezet naar paden (outlines).
- [ ] QR-code als vector aangeleverd, niet als raster.
- [ ] Variabele data (chequenummer, datum, partnerlogo) als aparte data-bestand (CSV) bij digitale variabele-data-druk.
- [ ] Folielaag als losse spot-color "FOIL" gemarkeerd, op 100% dekking, overprint UIT.
- [ ] Proefdruk fysiek beoordeeld vóór oplage — papier-keus, folie-precisie, kleurmatch.
