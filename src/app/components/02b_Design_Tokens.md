# 02b — Design Tokens (CSS + Figma)

Dit bestand bevat de **direct uitvoerbare** vorm van het kleuren- en typografie-systeem uit `02_Visual_Identity_V1.md`. Twee secties:

1. CSS-variabelen — kopieerbaar in `theme-v2.css` om de huidige shadcn-defaults te vervangen.
2. Figma Variables-spec — kopieerbare hex-waardes om handmatig in Figma in te voeren, of via Tokens Studio plugin te importeren.

---

## 1. Vervangende `theme-v2.css`

Deze versie behoudt de shadcn-naamgeving (zodat alle bestaande componenten blijven werken) maar mapt elke token naar DKVK-waardes. Gebruik dit blok als vervanging van de inhoud van het actieve thema-bestand.

```css
@custom-variant dark (&:is(.dark *));

:root {
  /* ============================================================
     DKVK BRAND TOKENS — bron van waarheid
     Uit 02_Visual_Identity_V1.md
     ============================================================ */
  
  --brand-bordeaux: #411C20;
  --brand-bordeaux-deep: #2D1418;
  --brand-cream: #F2EDE6;
  --brand-cream-light: #F5F0E8;
  --brand-gold: #AC9166;
  --brand-gold-bright: #C4A578;
  --brand-ink: #0B0A08;
  --brand-ink-soft: #6B6B6B;
  --brand-ink-mute: #9C9591;
  
  /* ============================================================
     SHADCN MAPPING — elke shadcn-token wijst naar een brand-token
     Hierdoor blijven bestaande componenten werken zonder rewrite
     ============================================================ */
  
  --font-size: 16px;
  --background: var(--brand-cream);            /* was #ffffff */
  --foreground: var(--brand-ink);              /* was oklch(0.145 0 0) */
  --card: var(--brand-cream);                  /* was #ffffff */
  --card-foreground: var(--brand-ink);
  --popover: var(--brand-cream);
  --popover-foreground: var(--brand-ink);
  --primary: var(--brand-ink);                 /* was #030213 — generiek shadcn paarsblauw */
  --primary-foreground: var(--brand-cream);
  --secondary: var(--brand-cream-light);
  --secondary-foreground: var(--brand-ink);
  --muted: var(--brand-cream-light);
  --muted-foreground: var(--brand-ink-soft);
  --accent: var(--brand-gold);
  --accent-foreground: var(--brand-ink);
  --destructive: var(--brand-bordeaux);        /* was #d4183d alarmrood — DKVK gebruikt geen alarmrood */
  --destructive-foreground: var(--brand-cream);
  --border: rgba(11, 10, 8, 0.08);             /* zeer subtiele ink-tint */
  --input: transparent;
  --input-background: var(--brand-cream-light);
  --switch-background: var(--brand-ink-mute);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: var(--brand-gold);
  
  /* Charts — niet gebruikt in DKVK-product, maar shadcn-defaults overschreven */
  --chart-1: var(--brand-bordeaux);
  --chart-2: var(--brand-gold);
  --chart-3: var(--brand-ink);
  --chart-4: var(--brand-ink-soft);
  --chart-5: var(--brand-bordeaux-deep);
  
  /* Radius — DKVK is scherp, niet rond */
  --radius: 2px;                                /* was 0.625rem (10px) */
  
  /* Sidebar (shadcn-component, niet actief gebruikt) */
  --sidebar: var(--brand-cream);
  --sidebar-foreground: var(--brand-ink);
  --sidebar-primary: var(--brand-ink);
  --sidebar-primary-foreground: var(--brand-cream);
  --sidebar-accent: var(--brand-cream-light);
  --sidebar-accent-foreground: var(--brand-ink);
  --sidebar-border: rgba(11, 10, 8, 0.08);
  --sidebar-ring: var(--brand-gold);
  
  /* ============================================================
     TYPOGRAFIE
     ============================================================ */
  
  --font-display: 'Cormorant Garamond', 'Times New Roman', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Spacing (4px-schaal) */
  --space-1: 0.25rem;   /* 4px  */
  --space-2: 0.5rem;    /* 8px  */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
}

/* Dark mode is in de huidige DKVK-richting niet ondersteund.
   Houd de tokens leeg of identiek aan light tot er een formeel besluit is. */
.dark {
  /* DKVK heeft (nog) geen dark mode — volgt :root */
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
  --radius-sm: calc(var(--radius) - 1px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 2px);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  
  /* DKVK eigen tokens beschikbaar in Tailwind */
  --color-brand-bordeaux: var(--brand-bordeaux);
  --color-brand-bordeaux-deep: var(--brand-bordeaux-deep);
  --color-brand-cream: var(--brand-cream);
  --color-brand-cream-light: var(--brand-cream-light);
  --color-brand-gold: var(--brand-gold);
  --color-brand-gold-bright: var(--brand-gold-bright);
  --color-brand-ink: var(--brand-ink);
  --color-brand-ink-soft: var(--brand-ink-soft);
  --color-brand-ink-mute: var(--brand-ink-mute);
  
  --font-family-display: var(--font-display);
  --font-family-sans: var(--font-sans);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    background-color: var(--brand-cream);
    color: var(--brand-ink);
    font-family: var(--font-sans);
    font-feature-settings: "ss01", "cv11";
  }

  html {
    font-size: var(--font-size);
  }

  /* DKVK typografische rollen — utility classes te gebruiken in componenten */
  .dkvk-display-xl {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    letter-spacing: -0.01em;
    line-height: 1.05;
    text-transform: uppercase;
    color: var(--brand-ink);
  }

  .dkvk-display-l {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.75rem, 3vw, 2.75rem);
    line-height: 1.15;
    color: var(--brand-ink);
  }

  .dkvk-eyebrow {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 0.6875rem;          /* 11px */
    letter-spacing: 0.18em;
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--brand-gold);
  }

  .dkvk-eyebrow--on-dark {
    /* Gebruik op donkere foto- of overlayvlakken waar goud te weinig contrast heeft */
    color: var(--brand-cream);
  }

  .dkvk-eyebrow--ceremonial {
    /* Voor "KUNSTGALERIE" naast kroontje en in wordmark-onder.
       Alleen op deze twee plekken — andere eyebrows gebruiken 0.18em. */
    letter-spacing: 0.20em;
  }

  .dkvk-eyebrow-ink {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 0.6875rem;
    letter-spacing: 0.18em;
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--brand-ink-soft);
  }

  .dkvk-sub-display {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.875rem;            /* 14px */
    letter-spacing: 0.12em;
    line-height: 1.6;
    text-transform: uppercase;
    color: var(--brand-ink);
  }

  .dkvk-number-prominent {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    letter-spacing: 0.04em;
    line-height: 1.1;
    color: var(--brand-ink);
    font-feature-settings: "tnum";
  }

  .dkvk-number-code {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 1.125rem;            /* 18px */
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: var(--brand-ink);
    font-feature-settings: "tnum";
  }

  .dkvk-body {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.9375rem;           /* 15px */
    line-height: 1.6;
    color: var(--brand-ink);
  }

  .dkvk-caption {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.75rem;             /* 12px */
    letter-spacing: 0.04em;
    line-height: 1.4;
    text-transform: uppercase;
    color: var(--brand-ink);
  }

  .dkvk-footnote {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.6875rem;           /* 11px */
    line-height: 1.5;
    color: var(--brand-ink-soft);
  }

  /* Headings overrides */
  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 500;
    color: var(--brand-ink);
    line-height: 1.15;
  }

  h1 { font-size: clamp(1.875rem, 3.5vw, 2.75rem); letter-spacing: -0.005em; }
  h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); }
  h3 { font-size: 1.375rem; }
  h4 { font-size: 1.125rem; }

  /* Goud-haarlijn als utility */
  .dkvk-gold-rule {
    display: block;
    width: 60px;
    height: 1px;
    background-color: var(--brand-gold);
    border: 0;
    margin: 0;
  }

  /* Bordeaux ankerstrook als utility */
  .dkvk-bordeaux-anchor {
    background-color: var(--brand-bordeaux);
  }

  /* Card override — geen border, geen radius */
  .dkvk-card {
    background: var(--brand-cream);
    border: 0;
    border-radius: 0;
    padding: var(--space-8);
  }

  label {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  button {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
    letter-spacing: 0.02em;
  }

  input {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}

@layer utilities {
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

## 2. Vervangende `fonts.css`

De huidige `fonts.css` is leeg. Vervang met:

```css
/* Cormorant Garamond — display serif voor headings, wordmark, prijsweergaves */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

/* Inter — body sans voor alle UI, captions, eyebrows */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Productie-noot:
   Voor self-hosting (privacy/performance):
   - download .woff2-files van https://fonts.bunny.net of https://google-webfonts-helper.herokuapp.com
   - host vanuit /public/fonts/
   - vervang @import door @font-face declaraties
   Niet doen vóór beslissing over self-hosting. */
```

---

## 3. Figma Variables — handmatige import

Open Figma → het rechterpaneel → "Local variables" → "Create collection" → noem de collectie **DKVK Brand**.

Maak vier groepen (modes mag op één staan):

### Groep `color/brand`

| Variable name | Type | Value |
|---|---|---|
| `color/brand/bordeaux` | Color | `#411C20` |
| `color/brand/bordeaux-deep` | Color | `#2D1418` |
| `color/brand/cream` | Color | `#F2EDE6` |
| `color/brand/cream-light` | Color | `#F5F0E8` |
| `color/brand/gold` | Color | `#AC9166` |
| `color/brand/gold-bright` | Color | `#C4A578` |
| `color/brand/ink` | Color | `#0B0A08` |
| `color/brand/ink-soft` | Color | `#6B6B6B` |
| `color/brand/ink-mute` | Color | `#9C9591` |

### Groep `space`

| Variable name | Type | Value |
|---|---|---|
| `space/1` | Number | 4 |
| `space/2` | Number | 8 |
| `space/3` | Number | 12 |
| `space/4` | Number | 16 |
| `space/6` | Number | 24 |
| `space/8` | Number | 32 |
| `space/12` | Number | 48 |
| `space/16` | Number | 64 |
| `space/24` | Number | 96 |

### Groep `radius`

| Variable name | Type | Value |
|---|---|---|
| `radius/none` | Number | 0 |
| `radius/sm` | Number | 1 |
| `radius/default` | Number | 2 |

---

## 4. Figma Text Styles

Maak in hetzelfde bestand text styles via "Text styles" panel. Configureer Inter en Cormorant Garamond eerst (Figma laadt ze automatisch via Google Fonts).

| Style name | Font | Weight | Size | Line height | Letter spacing | Case |
|---|---|---|---|---|---|---|
| `display/xl` | Cormorant Garamond | 500 Medium | 64 | 70 | -1% | UPPER |
| `display/l` | Cormorant Garamond | 400 Regular | 36 | 42 | 0 | normal |
| `display/l-italic` | Cormorant Garamond | 400 Regular Italic | 36 | 42 | 0 | normal |
| `eyebrow/gold` | Inter | 500 Medium | 11 | 13 | 18% | UPPER |
| `eyebrow/gold-ceremonial` | Inter | 500 Medium | 11 | 13 | 20% | UPPER |
| `eyebrow/ink` | Inter | 500 Medium | 11 | 13 | 18% | UPPER |
| `sub-display` | Inter | 400 Regular | 14 | 22 | 12% | UPPER |
| `number/prominent` | Cormorant Garamond | 500 Medium | 32 | 36 | 4% | normal |
| `number/code` | Inter | 600 SemiBold | 18 | 22 | 10% | UPPER |
| `body/regular` | Inter | 400 Regular | 15 | 24 | 0 | normal |
| `body/small` | Inter | 400 Regular | 13 | 20 | 0 | normal |
| `caption` | Inter | 400 Regular | 12 | 17 | 4% | UPPER |
| `footnote` | Inter | 400 Regular | 11 | 17 | 0 | normal |

---

## 5. Figma Effect Styles

Eén effect — een zeer subtiele schaduw voor verdieping waar nodig. Verder geen effects.

| Effect name | Type | Settings |
|---|---|---|
| `elevation/subtle` | Drop shadow | X: 0, Y: 1, Blur: 2, Spread: 0, Color: `#0B0A08` @ 4% opacity |

Geen tweede schaduw-niveau, geen "elevation/medium" of dergelijke. DKVK is plat.

---

## 6. Figma Component-naming-conventie

Bij het bouwen van een component-bibliotheek (knoppen, inputs, cards, etc.) onderstaande naamconventie aanhouden voor consistentie:

```
Brand/
  ├── Anchor/Bordeaux Strip
  ├── Wordmark/Full
  ├── Wordmark/Compact
  └── Crown/Standard

Cheque/
  ├── Voorzijde/A4
  ├── Voorzijde/DL
  ├── Achterzijde/A4
  ├── Achterzijde/DL
  └── Combined/DL Front+Back

Web/
  ├── Header/Default
  ├── Footer/Default
  ├── Card/Plain
  ├── Card/Bordered (only when explicitly required)
  ├── Button/Primary
  ├── Button/Secondary
  ├── Input/Text
  ├── Eyebrow/Gold
  ├── Eyebrow/Ink
  └── GoldRule/Short

Iconography/
  └── Lucide/(per-icon, imported as needed)

Patterns/
  └── Guilloche/Master
```

---

## 7. Voorbeeld-prompt voor Figma Make / Figma AI

Bij gebruik van Figma's AI-features om varianten of nieuwe schermen te genereren:

```
Maak een [component-naam] in de stijl van het DKVK Brand System.

Gebruik UITSLUITEND:
- kleuren uit de "DKVK Brand" variable collection 
  (color/brand/cream als achtergrond, color/brand/ink voor tekst, 
   color/brand/gold voor eyebrows en lijntjes, color/brand/bordeaux 
   voor primaire ankering)
- text styles uit dit bestand 
  (display/xl voor hero-titels, eyebrow/gold voor labels boven secties,
   body/regular voor lopende tekst)
- spacing uit space/* variables (geen handmatige px-waardes)
- radius/default (2px) voor inputs/buttons; radius/none (0) voor cards

Visuele richtlijnen:
- Achtergrond: ALTIJD color/brand/cream, NOOIT puur wit
- Tekst: ink-kleur, geen pure zwart
- Geen gradients, geen drop-shadows zwaarder dan elevation/subtle
- Geen border op cards
- Geen accent-kleuren buiten het palet (geen blauw, paars, groen)
- Eyebrow-labels boven secties met korte goud-haarlijn eronder (60px max)
- Iconen: Lucide line-style, 1.5px stroke, in goud

Stijlreferentie: zie het frame "Visual Reference" in dit bestand 
(de Kunst-Waardecheque PNG) — het ontwerp moet bij datzelfde 
universum passen, niet als een aparte stijl voelen.
```

Plak deze prompt-template in een tekstframe in je Figma-bestand, getiteld "AI Prompt Template", zodat hij beschikbaar is voor herhaaldelijk gebruik.
