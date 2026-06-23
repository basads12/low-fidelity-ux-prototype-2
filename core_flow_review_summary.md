# core_flow_review_summary.md

## 1. Prototype-status

Klaar voor UX-review. Nog niet klaar voor technische bouw of livegang.

## 2. Gebouwde flow

De volgende core flow is gebouwd als low-fidelity prototype:

**Homepage**  
→ **Activeer uw cheque / chequeinvoer**  
→ **Persoonlijk welkomstscherm**  
→ **Planner stap 1: dag kiezen**  
→ **Planner stap 2: tijd kiezen**  
→ **Planner stap 3: gegevens**  
→ **Planner stap 4: bevestiging**  
→ **Afspraak bevestigd**

## 3. Aanwezige schermen

Het prototype bevat 8 schermen:

1. **Homepage** — Algemene website-entry met categoriebevestiging binnen 3 seconden
2. **Chequeinvoer** — Activeer uw cheque via chequenummer + postcode
3. **Persoonlijk welkomstscherm** — Welkomst met chequeherkenning en Route A/B-uitleg
4. **Planner stap 1** — Dag kiezen met dag-specifieke extras
5. **Planner stap 2** — Tijd kiezen uit beschikbare tijdsloten
6. **Planner stap 3** — Gegevens invullen (naam, e-mail, telefoon)
7. **Planner stap 4** — Bevestiging met alle afspraakdetails
8. **Afspraak bevestigd** — Eindscherm met succesmelding

## 4. Bevestigde harde regels

De volgende harde regels zijn nageleefd in het prototype:

- ✓ Website is rustige verificatieplek, geen verkoopomgeving
- ✓ Vóór planner altijd persoonlijk welkomstscherm
- ✓ Algemene route gaat via chequenummer + postcode naar persoonlijk welkomstscherm
- ✓ Geen directe route naar planner
- ✓ Planner heeft exact vier stappen
- ✓ Geen nieuwsbrief
- ✓ Geen cross-sell
- ✓ Geen partnerlogomuur
- ✓ Geen kortingstaal
- ✓ Geen urgency
- ✓ Geen uitje- of belevingstaal
- ✓ Geen € 500 als homepage-hero
- ✓ € 500 alleen functioneel in chequevisualisatie/details
- ✓ Route B is verrekening, geen korting
- ✓ Open besluiten zijn gelabeld als "Besluit nodig"

## 5. Open besluiten die zichtbaar blijven

De volgende besluiten zijn nog niet genomen en zijn gelabeld in het prototype:

- Besluit nodig: openingstijden
- Besluit nodig: exacte beschikbare dagen
- Besluit nodig: exacte tijdsloten
- Besluit nodig: duur per slot
- Besluit nodig: capaciteit per slot
- Besluit nodig: CTA "Verder"
- Besluit nodig: CTA "Bevestig afspraak"
- Besluit nodig: CTA "Voeg toe aan agenda"
- Besluit nodig: privacytekst
- Besluit nodig: papieren cheque meenemen ja/nee
- Besluit nodig: errorcopy
- Besluit nodig: reviewfragmenten op homepage ja/nee
- Besluit nodig: secundaire CTA "Meer over de galerie"
- Besluit nodig: dag-specifieke extras definitief
- Besluit nodig: beleid geen tijdsloten beschikbaar
- Besluit nodig: link naar "Afspraak wijzigen" ja/nee

## 6. QA-resultaat

Strenge QA-check uitgevoerd met 20 criteria op 8 schermen:

- Geen S1 (blokkerende fouten)
- Geen S2 (kritieke fouten)
- Geen S3 (belangrijke fouten)
- Geen S4 (kleine fouten)
- Eén S5-fout (cosmetisch): schermnummering toonde "9/9" in plaats van "8/8"
- S5-fout gecorrigeerd: alle schermen tonen nu correct "/8" als totaal
- Prototype goedgekeurd voor UX-review

## 7. Wat nog niet mag

Het prototype is een low-fidelity wireframe voor UX-review. Daarom:

- Niet gebruiken voor technische bouw zonder Decision Register
- Niet live zetten
- Geen openingstijden, tijdsloten of capaciteit als feit invullen
- Geen privacytekst zelf schrijven
- Geen errorcopy definitief maken zonder besluit
- Geen nieuwe CTA's toevoegen
- Geen serviceflow of adminflow toevoegen aan deze Make-file

## 8. Aanbevolen volgende stap

Volgende UX-stap: aparte Figma Make-file maken voor de persoonlijke QR- en linkroute.
