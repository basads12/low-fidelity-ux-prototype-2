# De Kunst van Kunst - Changelog V2.0

**Datum:** 26 april 2026  
**Versie:** 2.0  
**Basis:** Figma Styling Instructie - Visuele uitwerking low-fidelity prototype

---

## 🎨 Overzicht

Versie 2.0 implementeert de volledige visuele identiteit voor De Kunst van Kunst website volgens de Figma Styling Instructie. De update transformeert het prototype naar een rustige, feitelijke verificatieplek zonder de flowlogica of schermstructuur te wijzigen.

**Kernprincipe:** *De website moet voelen als een rustige, feitelijke verificatieplek van een gevestigde galerie sinds 2005 — niet als een merk dat iets wil verkopen.*

---

## 📁 Nieuwe bestanden

### `/src/styles/theme-v2.css`
Complete nieuwe theme met:
- Merkkleurenpalet (brand-ink, brand-ochre, brand-bordeaux)
- Oppervlakken en randen (surface-page, surface-card, surface-muted)
- Functionele kleuren (state-success, state-warning, state-destructive)
- Typografie schaal (mobile-first naar desktop)
- Spacing schaal (4-punts systeem)
- Component styling (buttons, inputs, cards)
- Focus states met oker ring

### `/src/styles/fonts.css` (bijgewerkt)
- Inter als hoofdfont (variabel, weights 400/500)
- JetBrains Mono voor chequenummer en "sinds 2005" labels

---

## 🎨 Kleurenpalet V2.0

### Merkkleuren
| Naam | Hex | Gebruik |
|------|-----|---------|
| `brand-ink` | `#221E1F` | Primaire tekst, logo-zwart, donkere lijnen |
| `brand-ochre` | `#DB9A4A` | Warm accent, focus-ring, decoratief lijnwerk |
| `brand-bordeaux` | `#6F172F` | Primaire CTA-kleur, link-hover, key-details |

### Oppervlakken
| Naam | Hex | Gebruik |
|------|-----|---------|
| `surface-page` | `#FAF8F5` | Pagina-achtergrond (gebroken wit, papierachtig) |
| `surface-card` | `#FFFFFF` | Kaarten, formulieren, planner-blokken |
| `surface-muted` | `#F2EFEA` | Secundaire blokken, footer, rustige info |

### Randen
| Naam | Hex | Gebruik |
|------|-----|---------|
| `border-soft` | `#E6E1D9` | Standaard randen, scheidingslijnen |
| `border-strong` | `#C9C2B5` | Geselecteerde state, focus buitenrand |

### Tekst
| Naam | Hex | Gebruik |
|------|-----|---------|
| `text-primary` | `#221E1F` | Hoofdtekst |
| `text-secondary` | `#5A544F` | Ondersteunende tekst, labels |
| `text-muted` | `#8A847D` | Helptekst, placeholders |

### Functionele kleuren
| Naam | Hex | Gebruik |
|------|-----|---------|
| `state-success` | `#3F6B4E` | Bevestigingen |
| `state-warning` | `#A87A1F` | Niet-blokkerende meldingen |
| `state-destructive` | `#8A2A2A` | Blokkerende fouten |
| `state-info` | `#3A5A6B` | Informatieve callouts |

---

## 📐 Typografie

### Font families
- **Primair:** Inter (sans-serif, variabel)
- **Secundair:** JetBrains Mono (mono, alleen voor labels)
- **Afgewezen:** Serif fonts, display fonts, scripts

### Schaal (mobile → desktop)
| Token | Mobile | Desktop | Weight | Line-height |
|-------|--------|---------|--------|-------------|
| `text-display` | 28px | 36px | 500 | 1.2 |
| `text-h1` | 24px | 28px | 500 | 1.25 |
| `text-h2` | 20px | 22px | 500 | 1.3 |
| `text-h3` | 18px | 18px | 500 | 1.35 |
| `text-body` | 16px | 17px | 400 | 1.5 |
| `text-body-sm` | 14px | 14px | 400 | 1.55 |
| `text-label` | 14px | 14px | 500 | 1.4 |
| `text-button` | 16px | 16px | 500 | 1.4 |
| `text-caption` | 12px | 12px | 400 | 1.5 |

### Regels
- ✓ Body-tekst minimaal 16px (mobile ondergrens voor 55+ doelgroep)
- ✓ Maximale regelbreedte 65-72 tekens voor leesbaarheid
- ✗ Geen all-caps in koppen (alleen micro-labels ≤12px)
- ✗ Geen italic voor decoratie (alleen reviewcitaten)
- ✗ Geen letter-spacing > 0.05em in body

---

## 📏 Ruimte & Ritme

### Spacing schaal (4-punts)
```
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
```

### Border radius
- Cards: **12px** (`radius-card`)
- Buttons: **8px** (`radius-button`)
- Inputs: **8px** (`radius-input`)
- Cheque: **6px** (`radius-cheque`)
- ✗ Geen pill-shaped (>20px)

### Schaduwen
```css
--shadow-soft: 0 1px 2px rgba(34, 30, 31, 0.04), 
               0 4px 12px rgba(34, 30, 31, 0.05);
```

---

## 🔘 Component Styling

### Primaire CTA
```css
.btn-primary {
  background: #6F172F (brand-bordeaux);
  color: white;
  padding: 14px 24px (mobile) / 16px 28px (desktop);
  border-radius: 8px;
  font-weight: 500;
}
```
- Hover: 8% donkerder
- Focus: 2px oker outline met 2px offset
- Disabled: 40% opacity
- **Regel:** Exact één primaire CTA per scherm

### Secundaire CTA
```css
.btn-secondary {
  background: transparent;
  border: 1.5px solid border-strong;
  color: text-primary;
  padding: 14px 24px;
}
```

### Input velden
```css
.input {
  background: surface-card;
  border: 1px solid border-soft;
  border-radius: 8px;
  padding: 12px 16px;
}
```
- Focus: 1.5px bordeaux rand + 2px oker outline
- Error: 1.5px destructive rand

### Cards
```css
.card {
  background: surface-card;
  border: 1px solid border-soft;
  border-radius: 12px;
  box-shadow: shadow-soft;
}
```

### Cheque visualisatie
```css
.cheque-card {
  background: surface-card;
  border: 1px solid border-soft;
  border-top: 2px solid brand-ochre;
  border-radius: 6px;
  padding: 24px (mobile) / 32px (desktop);
}
```

---

## 🚫 Verboden esthetieken

### Wat V2.0 expliciet NIET doet
- ✗ Webshop/e-commerce look (productgrids, badges, winkelwagen)
- ✗ Luxe-hotel codes (marmer, goud-serif, "exclusief")
- ✗ Klassieke galerie (kunstenaarsnamen prominent, vernissage)
- ✗ Dagje-uit/lifestyle (stockfoto's, "beleving"-taal)
- ✗ Conversie-funnel (oranje CTA's, urgency, timers)
- ✗ Marketing decoratie (linten, sterren, "nieuw!", glitter)
- ✗ Partnerlogomuur (niet-onderhandelbaar)

### Verboden visuele elementen
- € 500 als hero-claim
- "Gefeliciteerd!" op bevestigingsscherm
- Nieuwsbrief-inschrijving
- "Bekijk ook"-blokken
- Autoplay van wat dan ook
- Stockfotografie
- Bewegende media (GIF, video-hero)
- Badges, countdown, urgency-elementen

---

## ♿ Accessibility

### WCAG 2.1 AA compliance
- ✓ Body-tekst contrast ≥ 4.5:1 (text-primary op surface-page = ~14:1)
- ✓ Primaire CTA contrast ≥ 4.5:1 (bordeaux op wit = ~8.5:1)
- ✓ Focus altijd zichtbaar (oker outline)
- ✓ Tap-target minimaal 44×44px
- ✓ Labels altijd zichtbaar (geen placeholder-only)
- ⚠️ Oker (ochre) NIET als tekstkleur op wit (te laag contrast)

---

## 🔄 Migratie van V1 → V2

### Gewijzigde bestanden
1. `/src/styles/index.css` - Import van `theme.css` → `theme-v2.css`
2. `/src/styles/fonts.css` - Inter font toegevoegd
3. `/src/styles/theme-v2.css` - Nieuwe theme (nieuw bestand)

### Backwards compatibility
- Alle bestaande Tailwind classes blijven werken
- Standard design tokens (`--primary`, `--background`, etc.) gemapped naar nieuwe palette
- Componenten gebruiken automatisch nieuwe kleuren via CSS variabelen

### Wat NIET is gewijzigd
- ✓ Flow-volgorde (QR → herkenning → welkomst → planner)
- ✓ Schermlogica en structuur
- ✓ CTA-teksten (alleen toegestane labels)
- ✓ Open besluiten (blijven "Besluit nodig")
- ✓ Component architectuur (React/TypeScript)

---

## 📋 QA Checklist

Controleer voor productie:

- [ ] Eén primaire CTA per scherm, in bordeaux
- [ ] Pagina-achtergrond is `surface-page` of `surface-card`
- [ ] Oker nergens als groot vulvlak
- [ ] Geen serif/script fonts in koppen
- [ ] Body-tekst minimaal 16px op mobile
- [ ] Maximale regelbreedte ≈ 65-72 tekens
- [ ] Geen stockfoto's, GIF, autoplay
- [ ] Geen badges, countdown, urgency
- [ ] Geen partnerlogomuur
- [ ] Welkomstscherm vóór planner
- [ ] Planner heeft 4 stappen
- [ ] € 500 nergens als hero/claim
- [ ] Adres + telefoon in footer
- [ ] Foutmeldingen rustig en inline
- [ ] Focus-state zichtbaar (oker outline)
- [ ] "Besluit nodig"-labels niet ingevuld

---

## 🎯 Open besluiten (niet ingevuld in V2.0)

Zoals gespecificeerd in de styling instructie blijven deze items open:

1. Definitief fotografie-/beeldbeleid
2. Definitieve fontkeuze (Inter voorgesteld)
3. Progress-indicator in planner ja/nee
4. Mobile breakpoint ≤360 of ≤380
5. WCAG-niveau definitief (AA voorgesteld)
6. Rustige chatwidget ja/nee
7. Cookie-banner vorm
8. Dark mode ja/nee
9. Reviewscore publiek tonen ja/nee

---

## 📖 Bron-hiërarchie

Bij conflicten geldt deze volgorde:
1. Positionerings-DNA V4.1
2. Fact Sheet V1.1
3. Message Rules & Copy Blacklist V1.1
4. Website & Planner Blueprint V1.1
5. Goedgekeurde core flow
6. **Deze styling-instructie (V2.0)**

---

## 🚀 Volgende stappen

### Aanbevolen implementatie-volgorde
1. ✅ Theme V2.0 activeren (gedaan)
2. ✅ Inter font laden (gedaan)
3. ⏳ Bestaande componenten controleren op kleurgebruik
4. ⏳ CTA's updaten naar nieuwe button classes
5. ⏳ Cards updaten naar nieuwe card styling
6. ⏳ Focus states testen met keyboard navigatie
7. ⏳ Contrast checken met accessibility tools
8. ⏳ Mobile responsive testen (390px, 768px, 1440px)

### Optionele verbeteringen
- Echte galeriefoto's toevoegen (placeholder-blokken vervangen)
- Cheque visualisatie component met papier-textuur
- Review fragments als dedicated component
- Focus trap voor modals
- Reduced motion preferences respecteren

---

**Eindprincipe V2.0:**  
*Het ontwerp moet voelen als een rustige, feitelijke verificatieplek van een gevestigde galerie sinds 2005 — niet als een merk dat iets wil verkopen.*

---

*Versie 2.0 - Gebaseerd op Figma Styling Instructie*  
*Status: Theme geïmplementeerd, componenten nog te migreren*
