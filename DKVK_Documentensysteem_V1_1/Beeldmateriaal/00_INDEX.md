# Beeldmateriaal — De Kunst van Kunst

**Datum**: 25 april 2026
**Bron-zip**: `~/Desktop/Beelsmateriaal galerie schilderijen enz.zip` (~70 originele bestanden)
**Curatieprincipe**: V4.1 + Blueprint V1.1 + Message Rules V1.1 + UI/Wireframe-context. Geen modellen met schilderijen, geen GIF, geen marketing-overlay, geen klanten als reclame-instrument, geen logo-/badge-vermenging, geen werken die te schreeuwerig zijn voor rustige hero-context.

---

## Mapstructuur

```
Beeldmateriaal/
├── 00_INDEX.md
├── 01_Pand_Hero/                 — Buitenkant galerie (legitimiteit)
├── 02_Galerie_Collectie/         — Doeken/collectie in echte galerie
├── 03_Voorbeelden_Werken/        — Selectie individuele schilderijen
├── 04_Detail_Lijst/              — Detail van een lijst (voor service/voorwaarden)
└── _intern/plattegrond/          — Plattegrond + lijst schilderijen (intern, niet publiek)
```

---

## 01_Pand_Hero — pand-buitenkant

**Use case**: hero homepage (legitimiteit binnen 10 seconden), contactpagina, eventueel footer-context. Geerdinksweg 2, 7555 DM Hengelo (OV) is herkenbaar.

| Bestand | Bron | Aanbevolen gebruik |
|---|---|---|
| `pand_buitenkant_neutraal.jpg` | `Overige fotos/pand-buitenkant.jpg` | **PRIMAIR** — neutrale licht, bruikbaar in alle contexten |
| `pand_geerdinksweg_blauwe_lucht.jpeg` | `Overige fotos/Pand-geerdinksweg-e1557003129449.jpeg` | Alternatief — frisse blauwe lucht, kan voelen als zomerzonnig |

**Niet doen**: tekstoverlay zoals "AIRCO AANWEZIG" (zat op `Foto-Airco.jpg` — uitgesloten). Geen logo's of badges over het pand heen.

---

## 02_Galerie_Collectie — collectie-context (geen mensen)

**Use case**: cheque-uitleg-pagina, persoonlijk welkomstscherm (chequevisualisatie naast collectie-context), tussenpagina, "Uw bezoek"-pagina. Toont feitelijk wat er hangt zonder marketing-toon.

| Bestand | Bron | Aanbevolen gebruik |
|---|---|---|
| `doeken_op_rij_PRIMAIR.jpg` | `Doeken-2.jpg` | **PRIMAIR** — echte galerie, doeken op rij, geen mensen. Past bij "verschillende formaten en stijlen" en "minimaal vijftig werken volledig binnen uw cheque" |
| `schilderijen_collectie_stilleven.jpg` | `Schilderijen.jpg` | Secundair — meer marketing-styling, gebruik alleen als ondersteunend beeld (niet als hero) |

**Niet doen**: gebruiken als productgrid of webshop-raster. Niet als hero met overlay-CTA. Wet 10: geen e-commerce-patronen.

---

## 03_Voorbeelden_Werken — individuele schilderijen

**Use case**: voorbeelden van werken in artikelenlay-out, "wat hangt er in de galerie"-blok, of inspiratie-richting voor stijlgids (geen productgrid). Bewust gekozen op rust: meer grijswaarden en rustige composities, één kleurig accent (`werk_sky_paars.webp`) om diversiteit te tonen.

| Bestand | Bron | Toon |
|---|---|---|
| `werk_kraanvogel_grijs.webp` | `KVK-2.webp` | Rustig, grijswaarden |
| `werk_bomen_zwart_wit.webp` | `IMG_1349-scaled-1.webp` | Zwart-wit, kalm |
| `werk_brug_grijs.jpg` | `IMG_2159-scaled-1.jpg` | Grijs, kalm |
| `werk_schepen.webp` | `Schepen.webp` | Boten, neutraal |
| `werk_straat_blauw.webp` | `KVK-3.webp` | Blauw-grijs straatscène |
| `werk_skyline.jpeg` | `IMG_1607-scaled-1.jpeg` | Skyline, koel |
| `werk_sky_paars.webp` | `Sky-is-the-limit-paars-scaled-1.webp` | Paars accent — kleur-variatie |
| `werk_bloemen.jpeg` | `Flowers-scaled.jpeg` | Bloemen — natuurthema |

**Niet doen**:
- Niet gebruiken als hero — werken zijn aanvulling, niet hoofdbeeld.
- Niet als grid van 6+ werken in webshop-styling.
- Bij gebruik altijd in 2- of 3-koloms rustige indeling met witruimte.
- Niet alle werken samen tonen — kies 2 tot 3 per scherm.
- *Besluit nodig: of werken überhaupt op publieke site mogen verschijnen, of dat ze alleen als referentie voor stijlgids dienen.*

---

## 04_Detail_Lijst — lijst-detail

**Use case**: voorwaardenpagina of FAQ-blok over lijsten (optionele aanvullende dienst). Niet voor hero of marketing. Toont neutraal hoe een zwarte lijst eruit ziet.

| Bestand | Bron | Aanbevolen gebruik |
|---|---|---|
| `lijst_zwart_detail.jpeg` | `Overige fotos/IMG_0296-scaled.jpeg` | Eventueel kleine illustratie bij voorwaarden — niet als hero |

**Niet doen**: gebruiken als verkooppush voor lijsten (Operationeel Script V1.1 §14: lijsten alleen op klantvraag).

---

## _intern/plattegrond — plattegrond galerie

**Use case**: intern voor wireframe-context (admin/backoffice tijdslotenbeheer, gouden wand-positie). Niet publiek.

| Bestand | Inhoud |
|---|---|
| `Inzoom ruimte 1.pdf` t/m `5.pdf` | Per-ruimte detail van de galerie |
| `Lijst schilderijen gebied 1.xlsx` | Lijst werken per gebied |

**Niet doen**: niet publiek beschikbaar maken. Niet bij admin-export-functies opnemen tot privacybesluit (OB-15).

---

## VERBODEN voor gebruik (niet gekopieerd)

Onderstaande bestanden uit de zip mogen **nergens** in de nieuwe site, planner, mail, drukwerk of social media verschijnen. Reden per bestand:

| Bestand uit bron-zip | Reden voor uitsluiting |
|---|---|
| `Schilderijen-slide-kvk-1.gif` (Overige fotos) | DE oude GIF — Wet 10 (geen bewegende hero), Blueprint V1.1 §20 |
| `result.gif` + `result.mp4` | Render-output van GIF-build — zelfde verbod |
| `Geschikt voor gif/Vrouw/*.png/.pdf` | Modelmateriaal voor GIF — geen modellen met schilderijen |
| `Geschikt voor gif/Vrouw 2/*.png` | Idem |
| `Geschikt voor gif/output*/*.png` | Renderframes met model + schilderij — verboden |
| `Geschikt voor gif/Paintings/*` | Bewerkte versies voor GIF — niet voor publiek |
| `Geschikt voor gif/build_*.py` | Build-scripts — niet voor publiek |
| `Team.jpg` | Groep mensen met schilderijen voor camera — klassieke marketing-shot, geen gastheer-toon |
| `tas.jpg` | Koppel met DKVK-tas in galerie — klant-als-reclame-instrument-vibe (Wet 20 / Message Rules cluster 7) |
| `galerie.jpg` | **DUBBEL VERBODEN**: dit is Galerie & Kunstuitleen LamBert (andere galerie!), én bevat man met schilderij. Niet de DKVK-galerie. |
| `Foto-Airco.jpg` | Pand-foto met "AIRCO AANWEZIG" tekstoverlay — marketing-trigger |
| `IMG_2056-scaled.jpg` (Overige) | Koffie close-up met sponsor-merk "Alex Meijer & Co" zichtbaar — vreemd merk in beeld |
| `Aaaaaa.jpg` (Overige) | Koffie close-up met merken — geen gastheer-toon |
| `Vernis.jpg` | Foto van een schilderij, niet illustratief voor vernis-uitleg — verwarrend |
| `Gezelligheid-dame-donker-scaled-1.webp` | Niet beoordeeld in detail; titel suggereert lifestyle/dame-frame — uit voorzichtigheid uitsluiten zonder review |
| `Torso-man-voorkant-rood-zwart-scaled-1.webp` | Naakttorso — past niet bij rustige verificatie-hero, kan bevreemden |
| `kvk-logo*.jpg` (3 varianten) | Oude logobestanden — gebruik definitief logo (besluit nodig) |
| `JCF-logo-Business-Friend-1.png` | Partner-/certificaatlogo — Wet 5 verbiedt partnerlogomuur en partner-/badge-mengeling |
| `galerie-de-kunst-van-kunst-logo-e1557004054480.jpg` | Oud logo — gebruik definitief logo |
| `WhatsApp-Image-2024-10-30-at-12.38.33-2.jpg` | Schilderij dat te kinderlijk-decoratief oogt voor positionering — uit voorzichtigheid uitsluiten als publieke voorbeeld |
| `Archief.zip` (geneste zip) | Niet uitgepakt; intern archief, geen publiek beeldmateriaal |

---

## Open beslispunten over beeldmateriaal

Deze raken sectie 7 / 20 van Blueprint V1.1 en Decision Register:

- **OB-BM-01**: Of werken-foto's überhaupt op de publieke site mogen verschijnen. *V4.1 Wet 8: kunstenaarsnamen niet centraal; werken op site kunnen "klassieke galerie"-frame activeren.* Aanbevolen: zeer terughoudend, maximaal 2–3 werken per pagina, geen catalogus.
- **OB-BM-02**: Definitief logo-bestand (OB-PRD-10 stijlgids).
- **OB-BM-03**: Of de plattegrond-PDF's ook in admin getoond worden bij tijdslotenbeheer.
- **OB-BM-04**: Of er nieuwe galerie-interieurfoto's gemaakt moeten worden — er zijn in deze zip **geen volwaardige galerie-interieurfoto's** zonder mensen of marketing-toon. Dit is een gat: voor een goede welkomstscherm-foto / "Uw bezoek"-foto zou een rustige nieuwe foto-shoot wenselijk zijn.
- **OB-BM-05**: Curatie reviewfragmenten op homepage — bestand staat los, geen avatars of profielfoto's nodig (cf. Reviewfragmenten-prompt).

---

## Lacunes / aanbevelingen voor nieuwe fotografie

Wat **ontbreekt** in deze zip en wenselijk zou zijn voor een complete site/planner:

1. **Volwaardige galerie-interieurfoto** — geen mensen, daglicht, rustige hoek met meerdere werken. Voor welkomstscherm en "Uw bezoek"-pagina.
2. **De "gouden wand"** — fysieke plek waar de minimaal 50 werken binnen de cheque hangen. Visueel ankerpunt voor cheque-uitleg.
3. **Adviseur-gastheer-context** — koffie/thee-tafel zonder mensen, of een rustige adviseursplek. *Voorzichtig: geen poserende adviseur in marketingstijl.*
4. **Certificaat-detail** — een certificaat van echtheid, schoon op tafel, voor "wat krijgt u mee"-context.

Aanbeveling: **één halve dag fotoshoot** met fotograaf in de galerie, zonder model, daglicht, alleen werken + ruimte + tafel met certificaat. Brief volgens UI/Wireframe-context: rust, geen luxe-codes, geen art-fair-esthetiek.
