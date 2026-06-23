# Typografie & Kleuren — Implementatie-spec

**Project:** De Kunst van Kunst
**Versie:** V1.0
**Status:** Implementatie-klaar voor `theme.css`, `fonts.css` en bestaande Tailwind/shadcn-setup
**Bron:** Positionerings-DNA V4.1 + Message Rules V1.1 + logo-analyse

---

## 1. Lettertype: Inter

Eén familie voor het volledige systeem. Geen tweede font.

### 1.1 Inladen via Google Fonts

Vervang de inhoud van `fonts.css` door:

```css
/* fonts.css */

/* Inter — uitsluitend de gewichten die het systeem gebruikt */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

/* Tabular nums voor chequenummers, datums en bedragen */
:root {
  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-feature-default: "cv11", "ss01", "ss03";
  --font-feature-tabular: "tnum", "cv11";
}

html {
  font-family: var(--font-sans);
  font-feature-settings: var(--font-feature-default);
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Helper-klasse voor mono-context: chequenummer, bedragen, tijdslots */
.font-tabular {
  font-feature-settings: var(--font-feature-tabular);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}
```

**Toelichting features.**
- `cv11` → enkelverdiepings `a` + open `g` (humanistischer, leest vriendelijker dan default Inter)
- `ss01` → open digits (4, 6, 9 leesbaarder)
- `ss03` → open punctuation
- `tnum` → tabular nums, alleen aan in `.font-tabular`-context

### 1.2 Toegestane gewichten

| Gewicht | Token | Gebruik |
|---|---|---|
| 300 (Light) | `--font-weight-light` | Uitsluitend bedrag op cheque-visualisatie |
| 400 (Regular) | `--font-weight-normal` | Body-tekst |
| 500 (Medium) | `--font-weight-medium` | Knoppen, labels, links |
| 600 (Semibold) | `--font-weight-semibold` | Koppen H1–H4 |

**Verboden:** 700+, italic-uitvoeringen behalve één — `Inter Italic Regular 400` voor titels van werken en klantcitaten. Niet importeren als de bundle-grootte een issue is; dan in CSS afdwingen via `font-style: italic` op specifieke selectors.

---

## 2. Kleurenpalet — afgeleid van het logo

Het logo bevat: warm zwart (basis), warm wit (typografie in blokken), warm oker, bordeaux/wijnrood, donkergrijs. Geen blauw, geen koud zwart.

**De default shadcn primary `#030213` (blauwzwart) wordt vervangen.** Reden: dat blauw activeert tech-/SaaS-frame en breekt met de warmte van het logo.

### 2.1 Kleurtokens — Light mode (standaard)

| Token | Waarde | Gebruik |
|---|---|---|
| `--background` | `#FAF8F5` | Warm gebroken wit (niet stralend wit) — pagina-achtergrond |
| `--foreground` | `#1A1714` | Warm zwart, geen blauwzweem — alle bodytekst |
| `--card` | `#FFFFFF` | Helderwit voor kaarten/secties die uitstaan |
| `--card-foreground` | `#1A1714` | |
| `--popover` | `#FFFFFF` | |
| `--popover-foreground` | `#1A1714` | |
| `--primary` | `#6B1F2A` | Donker bordeaux (uit logo) — primaire knoppen, focus, links in actieve state |
| `--primary-foreground` | `#FAF8F5` | Tekst op primary |
| `--secondary` | `#F0EBE3` | Zachte zandkleur — secundaire vlakken, rustige cards |
| `--secondary-foreground` | `#1A1714` | |
| `--muted` | `#EFEAE2` | Subtiel grijs-beige — disabled, achtergronden voor info |
| `--muted-foreground` | `#6B645B` | Warm grijs voor captions, helper text, datums |
| `--accent` | `#C8941F` | Gedempt oker (uit logo) — uitsluitend voor highlight-states (hover, focus-ring achtergrond), nooit als hoofdkleur op tekst |
| `--accent-foreground` | `#1A1714` | |
| `--destructive` | `#8B2A1F` | Gedempt rood-bruin — foutmeldingen. **Niet** felrood (`#d4183d` van shadcn default) — die kleur activeert urgency/alarm en breekt rust |
| `--destructive-foreground` | `#FAF8F5` | |
| `--border` | `rgba(26, 23, 20, 0.10)` | Warm zwart op 10% — dunne lijnen |
| `--border-strong` | `rgba(26, 23, 20, 0.18)` | Voor focused/actieve borders |
| `--input` | `transparent` | |
| `--input-background` | `#F5F1EA` | Iets warmer dan background — subtiel inset-effect |
| `--ring` | `#6B1F2A` | Focus-ring = primary, niet apart blauw |
| `--switch-background` | `#D4CFC5` | |

### 2.2 Kleurtokens — Dark mode (optioneel, voor later)

Niet primair gebruikt op de website (de galerie is een lichte verificatieplek), maar consistent meegeleverd voor componenten die dark kunnen renderen:

| Token | Waarde |
|---|---|
| `--background` | `#1A1714` |
| `--foreground` | `#F0EBE3` |
| `--card` | `#221E1A` |
| `--primary` | `#A03544` (bordeaux iets opgehelderd voor contrast) |
| `--primary-foreground` | `#FAF8F5` |
| `--muted-foreground` | `#A39A8E` |
| `--border` | `rgba(240, 235, 227, 0.12)` |

### 2.3 Contrastverificatie

Alle paren halen WCAG AA voor body-tekst (4.5:1) en AA voor large text (3:1):

| Combinatie | Ratio | Niveau |
|---|---|---|
| `#1A1714` op `#FAF8F5` | 16.8:1 | AAA |
| `#6B645B` op `#FAF8F5` | 5.2:1 | AA |
| `#FAF8F5` op `#6B1F2A` | 9.4:1 | AAA |
| `#1A1714` op `#C8941F` | 7.1:1 | AAA |
| `#FAF8F5` op `#8B2A1F` | 7.8:1 | AAA |

**Accent oker (`#C8941F`) wordt nooit voor tekst onder 18px gebruikt op witte achtergrond** — daar zakt het contrast onder AA.

---

## 3. Typografische hiërarchie — concrete waarden

### 3.1 Headings

| Niveau | Desktop size | Mobiel size | Line-height | Letter-spacing | Weight | Spacing boven | Spacing onder |
|---|---|---|---|---|---|---|---|
| H1 | 48px (3rem) | 32px (2rem) | 1.10 | -0.015em | 600 | 64px (96px in hero) | 32px |
| H2 | 32px (2rem) | 24px (1.5rem) | 1.20 | -0.010em | 600 | 56px | 24px |
| H3 | 22px (1.375rem) | 19px (1.1875rem) | 1.30 | -0.005em | 500 | 32px | 12px |
| H4 | 17px (1.0625rem) | 16px (1rem) | 1.35 | 0 | 500 | 24px | 8px |

### 3.2 Body

| Soort | Size | Line-height | Max-width | Weight |
|---|---|---|---|---|
| Body L (intro, welkomsttekst) | 18px (mobiel: 17px) | 1.55 | 60ch | 400 |
| Body M (standaard) | 16px | 1.60 | 65ch | 400 |
| Body S (voorwaarden, footer) | 14px | 1.55 | 70ch | 400 |

Paragraaf-onderlinge afstand: 16px. Geen meer, geen minder.

### 3.3 UI / microcopy

| Element | Size | Line-height | Letter-spacing | Weight | Case |
|---|---|---|---|---|---|
| Knop primair | 16px | 1 | 0 | 500 | Sentence case |
| Knop secundair (link) | 16px | 1 | 0 | 500 | Sentence case, onderstreept |
| Label (form) | 14px | 1.4 | 0 | 500 | Sentence case |
| Helper text | 13px | 1.5 | 0 | 400 | Sentence case |
| Foutmelding | 14px | 1.5 | 0 | 500 | Sentence case |
| Caption (datum, footer) | 13px | 1.5 | +0.01em | 400 | Sentence case |
| Eyebrow label | 12px | 1 | +0.06em | 500 | UPPERCASE |
| Chequenummer | 16px | 1.4 | +0.02em | 500 | UPPERCASE + `.font-tabular` |

---

## 4. Volledige `theme.css` — drop-in vervanging

Vervang de huidige inhoud van `theme.css` door onderstaande. De structuur blijft identiek aan shadcn-conventie zodat alle bestaande componenten blijven werken.

```css
@custom-variant dark (&:is(.dark *));

:root {
  /* === Basis === */
  --font-size: 16px;

  /* === Kleuren — Light (standaard) === */
  --background: #FAF8F5;
  --foreground: #1A1714;
  --card: #FFFFFF;
  --card-foreground: #1A1714;
  --popover: #FFFFFF;
  --popover-foreground: #1A1714;
  --primary: #6B1F2A;
  --primary-foreground: #FAF8F5;
  --secondary: #F0EBE3;
  --secondary-foreground: #1A1714;
  --muted: #EFEAE2;
  --muted-foreground: #6B645B;
  --accent: #C8941F;
  --accent-foreground: #1A1714;
  --destructive: #8B2A1F;
  --destructive-foreground: #FAF8F5;
  --border: rgba(26, 23, 20, 0.10);
  --border-strong: rgba(26, 23, 20, 0.18);
  --input: transparent;
  --input-background: #F5F1EA;
  --switch-background: #D4CFC5;
  --ring: #6B1F2A;

  /* === Charts (gedempte palet-uitbreiding, alleen voor admin/KPI) === */
  --chart-1: #6B1F2A;
  --chart-2: #C8941F;
  --chart-3: #6B645B;
  --chart-4: #8B5A3C;
  --chart-5: #A39A8E;

  /* === Sidebar === */
  --sidebar: #F5F1EA;
  --sidebar-foreground: #1A1714;
  --sidebar-primary: #6B1F2A;
  --sidebar-primary-foreground: #FAF8F5;
  --sidebar-accent: #EFEAE2;
  --sidebar-accent-foreground: #1A1714;
  --sidebar-border: rgba(26, 23, 20, 0.10);
  --sidebar-ring: #6B1F2A;

  /* === Typografie === */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Text sizes — desktop */
  --text-h1: 3rem;       /* 48px */
  --text-h2: 2rem;       /* 32px */
  --text-h3: 1.375rem;   /* 22px */
  --text-h4: 1.0625rem;  /* 17px */
  --text-body-l: 1.125rem; /* 18px */
  --text-body-m: 1rem;     /* 16px */
  --text-body-s: 0.875rem; /* 14px */
  --text-caption: 0.8125rem; /* 13px */
  --text-eyebrow: 0.75rem;   /* 12px */

  /* Line-heights */
  --lh-h1: 1.10;
  --lh-h2: 1.20;
  --lh-h3: 1.30;
  --lh-h4: 1.35;
  --lh-body-l: 1.55;
  --lh-body-m: 1.60;
  --lh-body-s: 1.55;
  --lh-ui: 1.5;
  --lh-tight: 1;

  /* Letter-spacing */
  --tracking-h1: -0.015em;
  --tracking-h2: -0.010em;
  --tracking-h3: -0.005em;
  --tracking-normal: 0;
  --tracking-caption: 0.01em;
  --tracking-eyebrow: 0.06em;
  --tracking-tabular: 0.02em;

  /* Radius — iets terughoudender dan shadcn default (warmer, niet tech) */
  --radius: 0.5rem; /* 8px */
}

.dark {
  --background: #1A1714;
  --foreground: #F0EBE3;
  --card: #221E1A;
  --card-foreground: #F0EBE3;
  --popover: #221E1A;
  --popover-foreground: #F0EBE3;
  --primary: #A03544;
  --primary-foreground: #FAF8F5;
  --secondary: #2A2520;
  --secondary-foreground: #F0EBE3;
  --muted: #2A2520;
  --muted-foreground: #A39A8E;
  --accent: #D4A538;
  --accent-foreground: #1A1714;
  --destructive: #B04438;
  --destructive-foreground: #FAF8F5;
  --border: rgba(240, 235, 227, 0.12);
  --border-strong: rgba(240, 235, 227, 0.20);
  --input: rgba(240, 235, 227, 0.08);
  --input-background: #221E1A;
  --switch-background: #3A332D;
  --ring: #A03544;

  --chart-1: #A03544;
  --chart-2: #D4A538;
  --chart-3: #A39A8E;
  --chart-4: #B07858;
  --chart-5: #6B645B;

  --sidebar: #221E1A;
  --sidebar-foreground: #F0EBE3;
  --sidebar-primary: #A03544;
  --sidebar-primary-foreground: #FAF8F5;
  --sidebar-accent: #2A2520;
  --sidebar-accent-foreground: #F0EBE3;
  --sidebar-border: rgba(240, 235, 227, 0.12);
  --sidebar-ring: #A03544;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-size: var(--text-body-m);
    line-height: var(--lh-body-m);
    font-weight: var(--font-weight-normal);
  }

  html {
    font-size: var(--font-size);
  }

  /* === Headings — bewust niet via Tailwind utilities, maar als basis === */

  h1 {
    font-size: var(--text-h1);
    line-height: var(--lh-h1);
    letter-spacing: var(--tracking-h1);
    font-weight: var(--font-weight-semibold);
    margin-block-start: 4rem;   /* 64px */
    margin-block-end: 2rem;     /* 32px */
  }

  h2 {
    font-size: var(--text-h2);
    line-height: var(--lh-h2);
    letter-spacing: var(--tracking-h2);
    font-weight: var(--font-weight-semibold);
    margin-block-start: 3.5rem; /* 56px */
    margin-block-end: 1.5rem;   /* 24px */
  }

  h3 {
    font-size: var(--text-h3);
    line-height: var(--lh-h3);
    letter-spacing: var(--tracking-h3);
    font-weight: var(--font-weight-medium);
    margin-block-start: 2rem;   /* 32px */
    margin-block-end: 0.75rem;  /* 12px */
  }

  h4 {
    font-size: var(--text-h4);
    line-height: var(--lh-h4);
    font-weight: var(--font-weight-medium);
    margin-block-start: 1.5rem; /* 24px */
    margin-block-end: 0.5rem;   /* 8px */
  }

  /* Mobiele heading-sizes */
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }      /* 32px */
    h2 { font-size: 1.5rem; }    /* 24px */
    h3 { font-size: 1.1875rem; } /* 19px */
    h4 { font-size: 1rem; }      /* 16px */
  }

  /* === Paragraaf === */
  p {
    max-width: 65ch;
    margin-block-end: 1rem;
  }

  /* === Form-elementen === */
  label {
    font-size: var(--text-body-s);
    font-weight: var(--font-weight-medium);
    line-height: var(--lh-ui);
  }

  button {
    font-size: var(--text-body-m);
    font-weight: var(--font-weight-medium);
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-normal);
  }

  input, textarea, select {
    font-size: var(--text-body-m);
    font-weight: var(--font-weight-normal);
    line-height: var(--lh-ui);
  }

  /* === Italic — uitsluitend voor twee gevallen === */
  cite,
  blockquote {
    font-style: italic;
    font-weight: var(--font-weight-normal);
  }

  /* === Light 300 — uitsluitend voor cheque-bedrag === */
  .cheque-amount {
    font-weight: var(--font-weight-light);
    font-feature-settings: "tnum";
    letter-spacing: -0.01em;
  }
}

@layer utilities {
  /* === Body-varianten === */
  .text-body-l {
    font-size: var(--text-body-l);
    line-height: var(--lh-body-l);
    max-width: 60ch;
  }
  .text-body-m {
    font-size: var(--text-body-m);
    line-height: var(--lh-body-m);
    max-width: 65ch;
  }
  .text-body-s {
    font-size: var(--text-body-s);
    line-height: var(--lh-body-s);
    max-width: 70ch;
  }
  .text-caption {
    font-size: var(--text-caption);
    line-height: var(--lh-ui);
    letter-spacing: var(--tracking-caption);
    color: var(--muted-foreground);
  }
  .text-eyebrow {
    font-size: var(--text-eyebrow);
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-eyebrow);
    text-transform: uppercase;
    font-weight: var(--font-weight-medium);
    color: var(--muted-foreground);
  }

  /* === Tabular nums voor cijfer-context === */
  .font-tabular {
    font-feature-settings: "tnum", "cv11";
    font-variant-numeric: tabular-nums;
    letter-spacing: var(--tracking-tabular);
  }

  /* === Sectie-spacing === */
  .section-spacing {
    padding-block: 6rem; /* 96px desktop */
  }
  @media (max-width: 768px) {
    .section-spacing {
      padding-block: 4rem; /* 64px mobiel */
    }
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## 5. Migratie-impact op bestaande componenten

### 5.1 Componenten die zonder wijziging blijven werken

Alle shadcn-componenten (`Button`, `Input`, `Card`, `Dialog`, etc.) gebruiken de tokens (`--primary`, `--background`, `--foreground`). Wijziging van de tokens propageert automatisch.

### 5.2 Componenten die controle nodig hebben

| Component | Wat te checken |
|---|---|
| `Button` (`button.tsx`) | Default variant gebruikt `bg-primary` — wordt nu bordeaux. Visueel valideren dat de knop niet "duur/luxe" voelt. Als dat wel zo is: secondary-variant default maken voor niet-primaire CTA's. |
| `Homepage.tsx` | Eventuele hardcoded kleuren (`text-gray-*`, `bg-black`) vervangen door `text-foreground` / `bg-background` / `text-muted-foreground`. |
| `AboutGallery.tsx` | Bevat `text-gray-700`, `font-bold`, `font-mono` — controleren en vervangen door system-tokens. `font-bold` in body verboden (Stap 4 van het systeem). |
| `PersonalWelcome.tsx` + planner-schermen | Hero-koppen en CTA-knoppen valideren tegen nieuwe sizing. |

### 5.3 Zoek-en-vervang-acties (codebase-breed)

```
text-gray-900    →  text-foreground
text-gray-700    →  text-foreground/80   (of muted-foreground voor minder belangrijke tekst)
text-gray-500    →  text-muted-foreground
text-gray-400    →  text-muted-foreground/70
bg-white         →  bg-card  (als het een uitstaande card is) of laat staan (als het echt wit moet)
bg-black         →  bg-foreground  (zelden — meestal foutief gebruik)
font-bold        →  font-semibold  (alleen op koppen) — anders verwijderen
font-mono        →  font-tabular   (voor cijfer-context) — anders verwijderen
```

---

## 6. Designsysteem-regels (samenvatting voor PR-reviews)

1. **Eén familie:** Inter. Geen tweede font, geen Google-pairings.
2. **Vier gewichten:** 300, 400, 500, 600. Geen 700+, geen Black.
3. **H1 één keer per pagina.**
4. **Bold niet in body.** Gebruik `font-semibold` uitsluitend op koppen.
5. **Italic alleen** voor (a) titels van werken, (b) klantcitaten — volledig citaat.
6. **Uppercase alleen** voor (a) chequenummer (met `.font-tabular`), (b) eyebrow-labels (`.text-eyebrow`).
7. **Knoppen:** sentence case, weight 500, geen uppercase, geen bold.
8. **Body-regelbreedte:** automatisch begrensd via `<p>`-default op 65ch. Niet overschrijven zonder reden.
9. **Body line-height ≥ 1.55. Heading line-height ≤ 1.30.**
10. **Foutmeldingen:** weight 500, kleur `--destructive`. Geen uitroeptekens, geen caps.
11. **Geen accentkleur op lopende tekst.** Accent (`#C8941F`) uitsluitend op hover-states en focus-rings.
12. **Geen drop caps, smallcaps, ligature-decoraties, swashes.**
13. **Sectie-afstand: 96px desktop / 64px mobiel** via `.section-spacing`.

---

## 7. Implementatievolgorde

1. `fonts.css` vervangen → Inter laadt.
2. `theme.css` vervangen → tokens en typografie actief.
3. Codebase-breed `font-bold`, `text-gray-*`, `bg-black`, `font-mono` controleren en vervangen volgens §5.3.
4. Visuele review op acht kernschermen: `Homepage`, `PersonalWelcome`, `PlannerDay`, `PlannerTime`, `PlannerDetails`, `PlannerConfirmation`, `AppointmentConfirmed`, `AboutGallery`.
5. Contrastcheck per scherm (browser DevTools → Lighthouse → Accessibility).
6. Eén iteratieronde voor edge-cases (cheque-visualisatie, foutstaten, tooltips).

---

## 8. Vertaling naar gevoel

Inter op 16px met line-height 1.60, body-regel van 65 tekens, geen vetdruk in lopende tekst, koppen in semibold (niet bold), bordeaux in plaats van blauwzwart, warm gebroken wit in plaats van helderwit. De argwanende lezer leest niet bewust dat er iets gekozen is. Hij voelt dat de pagina geduld heeft, dat niemand iets verkoopt, en dat de toon dezelfde kalmte heeft die hij straks in de galerie verwacht. De typografie is geen stem; ze is de adem tussen de zinnen.
