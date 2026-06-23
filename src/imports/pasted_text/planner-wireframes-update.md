Voer een gerichte responsive correctie uit op de plannerwireframes voor De Kunst van Kunst.

Doel:
Behoud het horizontaal scrollbare datum- en tijdselectiepatroon uit de losse planner voor de mobiele versie, maar gebruik dit alleen als rustig mobiel interactiepatroon. Neem de oude pakket-, voordeel- en cadeauframing niet over.

Belangrijk:
- De planner blijft exact vier stappen:
  1. Dag kiezen
  2. Tijd kiezen
  3. Gegevens
  4. Bevestiging
- Voeg geen extra plannerstap toe.
- Zet datum en tijd niet definitief samen op één plannerscherm in de core flow.
- Als de huidige referentie datum en tijd op één mobiel scherm toont, split dit in Figma alsnog over twee aparte plannerframes:
  - mobiel frame stap 1: datum/dag kiezen
  - mobiel frame stap 2: tijd kiezen
- De horizontale scrollcomponent mag in beide stappen terugkomen.

1. Mobile layout — datumselector behouden

Voor mobiele schermen, bijvoorbeeld 360–430px breed:

Gebruik in Planner stap 1 — Dag kiezen een horizontaal scrollbare rij met datumkaartjes.

Titel:
Kies een dag voor uw bezoek.

Component:
Horizontale datumcarousel / datumrail.

Datumkaartje bevat alleen:
- dagafkorting, bijvoorbeeld MA / VR / ZA
- dagnummer
- maand
- geselecteerde staat

Voorbeeld:
VR
16
okt

Geselecteerde datum:
duidelijk zichtbaar als geselecteerde kaart.

Toon onder of boven de datumrail rustig:
Gekozen dag: vrijdag [datum]

Niet tonen:
- “Reserveer vrijdag”
- cadeau-iconen
- “+2 extra”
- “+3 extra’s”
- “meeste voordeel”
- bedragen
- t.w.v.
- statusbalkjes die capaciteit, schaarste of voordeel suggereren
- “populair”
- “snel vol”
- badges
- urgentie
- “← Scroll →” als klanttekst

Scrollgedrag:
- Alleen de datumrail mag horizontaal scrollen.
- De hele pagina mag niet horizontaal scrollen.
- Laat aan de rechterzijde eventueel een gedeeltelijk zichtbaar volgend kaartje zien als visuele hint dat er meer datums zijn.
- Gebruik eventueel een subtiele fade of cut-off aan de rechterzijde als wireframe-hint.
- Gebruik geen opvallende pijl- of carouselmarketing.

Interne annotatie toegestaan:
Intern: mobiel horizontaal scrollbaar.
Intern: besluit nodig: exacte beschikbare dagen.
Intern: besluit nodig: exacte scroll-/snap-gedrag mobiele datumrail.

2. Mobile layout — tijdselector behouden

Voor mobiele schermen:

Gebruik in Planner stap 2 — Tijd kiezen een horizontaal scrollbare rij met tijdchips.

Titel:
Kies een tijd.

Toon:
Gekozen dag: vrijdag [datum]

Component:
Horizontale tijdrail met tijdchips.

Voorbeeld tijdchips:
10:00
11:00
12:00
13:00
14:00

Geselecteerde tijd:
duidelijk zichtbaar als geselecteerde chip.

Scrollgedrag:
- Alleen de tijdrail mag horizontaal scrollen.
- De hele pagina mag niet horizontaal scrollen.
- Laat eventueel een gedeeltelijk zichtbare volgende tijdchip zien als mobiele scrollhint.
- Geen publieke tekst “← Scroll →”.
- Geen urgentie, geen capaciteitstekst, geen “nog 1 plek”.

Niet tonen:
- “populaire tijd”
- “snel vol”
- “nog maar”
- countdown
- badge
- cadeau-icoon
- pakketinfo
- voordeelinfo
- extra verkoopinformatie

Interne annotatie toegestaan:
Intern: mobiel horizontaal scrollbaar.
Intern: besluit nodig: exacte tijdsloten.
Intern: besluit nodig: capaciteit per slot.
Intern: besluit nodig: duur per slot.

3. Desktop layout — geen horizontale scroll

Voor desktop/tablet breed:

Gebruik géén horizontale scrollrails voor datum en tijd.

Desktop Planner stap 1:
- Toon beschikbare dagen/datums in een rustige grid of lijst.
- Bijvoorbeeld 3 tot 5 kolommen, afhankelijk van beschikbare ruimte.
- Alle belangrijkste datums zijn zichtbaar zonder horizontaal scrollen.
- Selectiestaat blijft hetzelfde als mobiel.

Desktop Planner stap 2:
- Toon tijdsloten in een rustige grid of lijst.
- Geen carousel.
- Geen horizontale scroll.
- Geen “scroll”-label.

Belangrijk:
Desktop moet ruimer en overzichtelijker zijn; mobiel mag compact scrollbaar zijn.

4. Extra’s combineren met mobiel scrollpatroon

De extras moeten zichtbaar blijven, maar niet in de datumkaartjes als voordeelbadge.

Gebruik niet:
Gekozen dag: vrijdag 🎁 +2 extra

Vervang door:
Gekozen dag: vrijdag [datum]

Daaronder, klein en feitelijk:
Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Als exacte extra’s of partnernamen nog niet vastliggen:
Gebruik placeholders en interne labels:

Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Intern: besluit nodig: definitieve extra’s per dag.
Intern: besluit nodig: concrete partnernamen bij extra’s.
Intern: besluit nodig: praktische voorwaarden per extra.

Niet gebruiken:
- cadeau-iconen
- “extra cadeau”
- “extra’s t.w.v.”
- bedragen
- “meeste voordeel”
- “ontvang”
- “belevingspakket”
- “pakket”
- “voordeel”
- “gratis”

5. Datumkaartjes niet overbelasten

Datumkaartjes blijven compact.

Wel in datumkaartje:
- dagafkorting
- dagnummer
- maand
- geselecteerde staat

Niet in datumkaartje:
- cadeau-iconen
- aantal extra’s
- bedragen
- badges
- statusbalkjes
- capaciteit
- “meeste voordeel”
- “populair”
- “snel vol”

Als er een beschikbaarheidsstatus nodig is:
Toon dit niet als publieke capaciteit of urgentie.
Gebruik alleen intern:
Intern: besluit nodig: beschikbaarheidsstatus per datum.
Intern: besluit nodig: manier van tonen zonder urgency.

6. Koppen en microcopy corrigeren

Vervang:
“Kies een datum ← Scroll →”

Door:
“Kies een dag voor uw bezoek.”

Of, als het binnen stap 1 specifiek over datums gaat:
“Kies een datum.”

Gebruik “← Scroll →” niet als klanttekst.
Gebruik alleen een interne annotatie naast het component:
Intern: horizontaal scrollbaar op mobiel.

Vervang:
“Kies een tijd ← Scroll →”

Door:
“Kies een tijd.”

Gebruik geen publieke scrollinstructie, tenzij later expliciet besloten voor accessibility.

7. Geselecteerde staat

Behoud de duidelijke geselecteerde staat uit de referentie.

Mobiel:
- Eén datumkaart geselecteerd.
- Eén tijdchip geselecteerd.
- Selectie is visueel duidelijk.
- Selectie mag rustig in merkkleur worden weergegeven.
- Geen badge, geen cadeau-icoon, geen voordeelaccent.

Desktop:
- Zelfde selectiestaat.
- Geen extra visuele verkoopaccenten.

8. Responsive wireframe-frames maken

Maak in Figma minimaal deze varianten:

Planner stap 1 — Dag kiezen — mobiel
- horizontale datumrail
- gekozen dag
- eventuele dag-extra’s rustig onder de selector
- CTA onderaan

Planner stap 1 — Dag kiezen — desktop
- datumgrid of rustige lijst
- gekozen dag
- eventuele dag-extra’s rustig naast of onder de selectie
- CTA onderaan

Planner stap 2 — Tijd kiezen — mobiel
- horizontale tijdrail
- gekozen dag
- gekozen tijd
- CTA onderaan

Planner stap 2 — Tijd kiezen — desktop
- tijdslotgrid of rustige lijst
- gekozen dag
- gekozen tijd
- CTA onderaan

CTA’s:
Gebruik wireframe-labels:
[CTA: Verder]
Intern: besluit nodig: exacte CTA plannerscherm 1.

[CTA: Verder]
Intern: besluit nodig: exacte CTA plannerscherm 2.

9. Niet wijzigen in deze correctie

Wijzig niet:
- routevolgorde
- persoonlijk welkomstscherm vóór planner
- plannerstappen
- gegevensstap
- bevestigingsstap
- afspraak bevestigd-scherm

Voeg niet toe:
- extra plannerstap
- pop-up
- belevingspakketstap
- extra’s kiezen-stap
- partnerselectiestap
- nieuwsbrief
- reviewverzoek
- cross-sell
- partnerlogomuur
- voorwaardenpagina
- “Schilderij omruilen” CTA

10. Taal- en UI-cleanup rondom het scrollgedeelte

Verwijder uit het scrollgedeelte en omliggende plannercontent:

- cadeau-iconen
- “+2 extra”
- “+3 extra’s”
- “extra cadeaus”
- “meeste voordeel”
- “ontvang”
- “reserveer”
- “belevingspakket”
- “t.w.v.”
- eurobedragen bij extras
- “details volgen na reservering”
- “populair”
- “snel vol”
- “nog maar”
- countdown
- badges
- statusbalkjes die schaarste of capaciteit suggereren

Gebruik veilige formuleringen:

- Kies een dag voor uw bezoek.
- Kies een tijd.
- Gekozen dag: [dag datum].
- Gekozen tijd: [tijd].
- Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]

11. QA-check na correctie

Controleer en rapporteer kort:

Responsive:
- Mobiele datumselector is horizontaal scrollbaar.
- Mobiele tijdselector is horizontaal scrollbaar.
- Alleen de selectorrails scrollen horizontaal; de pagina zelf niet.
- Desktop gebruikt geen horizontale scroll voor datums.
- Desktop gebruikt geen horizontale scroll voor tijden.
- Desktop toont datums en tijden als grid of rustige lijst.

Plannerstructuur:
- Planner heeft nog exact vier stappen.
- Datum/dag kiezen staat in stap 1.
- Tijd kiezen staat in stap 2.
- Gegevens staan in stap 3.
- Bevestiging staat in stap 4.
- Er is geen extra stap voor extras toegevoegd.

Copy/UI:
- “← Scroll →” staat niet als klanttekst in de UI.
- Cadeau-iconen zijn verwijderd uit datum- en tijdselectors.
- “+2 extra” of vergelijkbare voordeelregels staan niet in de selector.
- Extras staan alleen als rustige daginformatie.
- Extras hebben geen bedragen.
- Extras hebben geen t.w.v.-claim.
- Geen “meeste voordeel”.
- Geen “belevingspakket” klantgericht.
- Geen urgency.
- Geen badges.
- Geen pakketvergelijking.

Interne labels:
- Open besluiten staan alleen als interne QA-labels.
- Exacte beschikbare dagen zijn gemarkeerd als besluit nodig.
- Exacte tijdsloten zijn gemarkeerd als besluit nodig.
- Exacte extra’s per dag zijn gemarkeerd als besluit nodig als ze nog niet vastliggen.