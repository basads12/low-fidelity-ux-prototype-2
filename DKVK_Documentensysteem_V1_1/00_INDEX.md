# Documentensysteem De Kunst van Kunst — V1.1
**Datum**: 25 april 2026
**Status**: Geharmoniseerd, V1.1 leidend

---

## Bronhiërarchie (bij conflict tussen documenten)

1. **Positionerings-DNA V4.1** — strategische bron van waarheid
2. **Fact Sheet V1.1** — harde feitenbron
3. **Message Rules & Copy Blacklist V1.1** — taal- en CTA-filter
4. **Afgeleide blueprints** — Website & Planner Blueprint V1.1, Operationeel Script V1.1, Kanaal- en Copyplaybook V1
5. **Toetsings- en uitvoeringsdocumenten** — QA-checklist V1, Commercieel KPI-document V1, Technical PRD V1

---

## Documentmap

| # | Bestand | Versie | Rol | Vervangt |
|---|---|---|---|---|
| 01 | [Positionerings-DNA V4.1](01_Positionerings_DNA_V4_1.md) | V4.1 | Strategische bron van waarheid | V4.0 |
| 02 | [Fact Sheet V1.1](02_Fact_Sheet_V1_1.md) | V1.1 | Harde feiten (cijfers, voorwaarden, identiteit) | V1 |
| 03 | [Message Rules & Copy Blacklist V1.1](03_Message_Rules_V1_1.md) | V1.1 | Taalfilter (verboden/veilig per cluster) | V1 |
| 04 | [Kanaal- en Copyplaybook V1](04_Kanaal_Copyplaybook_V1.md) | V1 | Per-kanaal copy-uitvoering | — |
| 05 | [Website & Planner Blueprint V1.1](05_Website_Planner_Blueprint_V1_1.md) | V1.1 | Bouwbasis website + planner | V1 |
| 06 | [Operationeel Script V1.1](06_Operationeel_Script_V1_1.md) | V1.1 | Werkbasis adviseurs in galerie | V1 |
| 07 | [QA-checklist V1](07_QA_Checklist_V1.md) | V1 | Publicatiefilter voor alle uitingen | — |
| 08 | [Commercieel KPI-document V1](08_Commercieel_KPI_V1.md) | V1 | Interne stuurlaag (verzilvering, no-show, Route B, reviews, partnerwaarde) | — |
| 09 | [Technical PRD V1](09_Technical_PRD_V1.md) | V1 | Technische bouwspecificatie | — |

---

## Documentafhankelijkheden

```
Positionerings-DNA V4.1
        │
        ├── Fact Sheet V1.1
        │       │
        │       ├── Message Rules V1.1
        │       │       │
        │       │       ├── Kanaal- en Copyplaybook V1
        │       │       │       │
        │       │       │       ├── Website & Planner Blueprint V1.1
        │       │       │       ├── Operationeel Script V1.1
        │       │       │       └── Technical PRD V1
        │       │       │
        │       │       └── QA-checklist V1
        │       │
        │       └── Commercieel KPI-document V1
        │
        └── (alle afgeleide documenten)
```

---

## Lock-status per document

| Document | Lock-status | Volgende stap |
|---|---|---|
| Positionerings-DNA V4.1 | Lock | — |
| Fact Sheet V1.1 | Lock | Open beslispunten in §15/§16.B vóór bouw vastleggen |
| Message Rules V1.1 | Lock | — |
| Kanaal- en Copyplaybook V1 | Werkversie | Update naar V1.1 indien Fact Sheet/Message Rules wijzigen |
| Website & Planner Blueprint V1.1 | Lock voor strategie | Open beslispunten §22 vóór bouw vastleggen |
| Operationeel Script V1.1 | Lock | Open beslispunten §24 vóór operationele rollout vastleggen |
| QA-checklist V1 | Werkversie | Update bij elke wijziging in V4.1, Fact Sheet of Message Rules |
| Commercieel KPI-document V1 | Werkversie | Open KPI-besluiten §25 vóór dashboardbouw vastleggen |
| Technical PRD V1 | Werkversie | Open beslispunten doorzetten naar Cursor Project Rules |

---

## Hoofdregels die over alle documenten gelden

1. Bij conflict tussen documenten: de bronhiërarchie hierboven is leidend.
2. Eén verkeerd frame is genoeg voor afkeur (QA-checklist V1).
3. Eén blacklist-hit is genoeg voor afkeur (Message Rules V1.1).
4. De cheque is een erkenningsgebaar, geen waardebon (V4.1 Wet 1).
5. Geen kortingstaal, geen percentages, geen voordeelretoriek in publieke uiting (V4.1 Wet 2).
6. Geen uitje- of belevingstaal (V4.1 Wet 3).
7. Partner alleen individueel zichtbaar; nooit collectief (V4.1 Wet 4, 5).
8. Vóór de planner altijd een persoonlijk welkomstscherm (V4.1 Wet 6).
9. QR/link nooit direct naar agenda (V4.1 Wet 6).
10. Route B is verrekening, geen korting (V4.1 Wet 9).
11. Adviseur is gastheer, geen verkoper (V4.1 Wet 8).
12. Na aankoop stilte; geen commerciële opvolging (V4.1 Wet 7).
13. Operationele rust is onderdeel van de positionering (V4.1 Wet 11).
14. Open beslispunten worden nooit als feit gepubliceerd.
15. Bij twijfel: niet live.

---

## Belangrijkste open beslispunten over alle documenten heen

| ID | Beslispunt | Waar staat het | Eigenaar |
|---|---|---|---|
| OB-01 | Openingstijden galerie | Fact Sheet §15; Blueprint §22; PRD | — |
| OB-02 | Bezorgtarief | Fact Sheet §15; Operationeel Script §24 | — |
| OB-03 | Tarief lijsten en vernis | Fact Sheet §15; Operationeel Script §24 | — |
| OB-04 | No-show-beleid (cheque vervalt of opnieuw boekbaar) | Fact Sheet §15; KPI §25 | — |
| OB-05 | Annuleringsregels (termijn, kosten) | Blueprint §22; PRD | — |
| OB-06 | Procedure cheque overdragen | Blueprint §22; PRD | — |
| OB-07 | Volledige privacyverklaring | Fact Sheet §15; KPI §25 | — |
| OB-08 | Betaalmethoden bij Route B | Fact Sheet §15; PRD | — |
| OB-09 | Verplichting papieren cheque mee te nemen | Blueprint §22; FAQ | — |
| OB-10 | Reviewscore en aantal publiek tonen ja/nee | Blueprint §22; KPI §25 | — |
| OB-11 | Reviews-/ervaringen-pagina ja/nee | Blueprint §22 | — |
| OB-12 | Technische datavelden persoonlijke link / QR | Fact Sheet §16.B; PRD | — |
| OB-13 | Eigenaar per QA-onderdeel | QA §22 | — |
| OB-14 | Drempelwaarden voor alerts | KPI §18 | — |
| OB-15 | Dataretentie en verwerkers (AVG) | KPI §23 | — |
| OB-16 | Functionele rustige contactoptie (chat ja/nee) | Blueprint §22 | — |
| OB-17 | Coulanceprocedure publiek (verlopen cheque) | Blueprint §21; QA | — |

---

## Versiehistorie

| Datum | Wijziging |
|---|---|
| April 2026 | V4.1 (DNA), V1.1 (Fact Sheet, Message Rules, Blueprint, Operationeel Script). V1 voor Copyplaybook, QA, KPI, PRD. Alle bronstatus geharmoniseerd; bestanden geconsolideerd in deze map. |

---

**Volgende stap (afgeleid)**: open beslispunten OB-01 t/m OB-17 worden vastgelegd in een Decision Register vóór technische bouw kan starten. Daarna kan Cursor Project Rules V1 worden afgeleid uit deze documentenset.
