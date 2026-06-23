Voer een gerichte correctie uit op de plannerselectie voor De Kunst van Kunst.

Doel:
Bewaar het mobiele scrollpatroon uit de losse planner, maar maak de dag- en datumkeuze slimmer: de gebruiker kiest eerst een weekdagtype, bijvoorbeeld maandag, vrijdag of zaterdag. Daarna ziet hij direct meerdere beschikbare datums voor die weekdag. Onder de gekozen datum ziet hij de beschikbare tijden die specifiek bij die datum horen.

Belangrijk:
De planner blijft exact vier stappen:
1. Dag kiezen
2. Tijd kiezen
3. Gegevens
4. Bevestiging

Deze correctie gaat alleen over stap 1 en de overgang naar stap 2.

Stap 1 mag dus meer beschikbaarheidsinformatie tonen, maar stap 2 blijft bestaan als formele tijdkeuze / tijdbevestiging.

1. Planner stap 1 — nieuwe structuur

Maak Planner stap 1 als volgt:

Schermtitel:
Kies een dag voor uw bezoek.

Daaronder een rustige weekdagselector:

[Maandag] [Vrijdag] [Zaterdag]

Gebruik geen oude labels zoals:
- Reserveer maandag
- Reserveer vrijdag
- Reserveer zaterdag

Gebruik alleen neutrale daglabels:
- Maandag
- Vrijdag
- Zaterdag

Als maandag geselecteerd is, toon:

Subtitel:
Kies een maandag.

Daaronder:
Beschikbare maandagen

Toon meerdere datums voor maandagen, bijvoorbeeld als datumkaarten:

MA
04
mei

MA
11
mei

MA
18
mei

MA
25
mei

MA
01
jun

MA
08
jun

Gebruik voorbeelddata als wireframe-data.
Markeer intern:
Intern: Besluit nodig: exacte beschikbare dagen en datums.

2. Beschikbare tijden tonen binnen stap 1

Onder de datumkaarten komt een tijdpreview voor de geselecteerde datum.

Voorbeeld:

Gekozen datum:
Maandag 4 mei 2026

Beschikbare tijden voor deze datum:
14:00
14:15
14:30
14:45
15:00
15:15

Belangrijk:
- De tijden die hier worden getoond horen alleen bij de geselecteerde datum.
- Als de gebruiker een andere datum kiest, verandert de tijdenrij mee.
- Toon geen tijden van andere datums.
- Toon geen capaciteitstekst.
- Toon geen “nog 1 plek”.
- Toon geen “populaire tijd”.
- Toon geen “snel vol”.
- Toon geen badges.
- Toon geen statusbalkjes die drukte, schaarste of capaciteit suggereren.

Interactie:
- Klik op een datum selecteert die datum en vernieuwt de tijdenpreview.
- Klik op een tijd mag de tijd alvast selecteren.
- De gebruiker gaat daarna nog steeds naar Planner stap 2 — Tijd kiezen, met die tijd vooraf geselecteerd.
- Stap 2 blijft verplicht in de flow.
- De afspraak is pas definitief na stap 4.

Interne annotatie:
Intern: tijdpreview in stap 1 is een usability-variant; stap 2 blijft formele tijdkeuze.
Intern: Besluit nodig: exacte interactie bij klikken op tijd in stap 1.
Intern: Besluit nodig: exacte tijdsloten per datum.

3. Planner stap 2 — tijd kiezen behouden

Planner stap 2 blijft bestaan.

Titel:
Kies een tijd.

Toon:
Gekozen dag: maandag 4 mei 2026

Toon tijdsloten:
14:00
14:15 geselecteerd
14:30
14:45
15:00
15:15

Als de gebruiker in stap 1 al een tijd heeft aangeklikt:
- toon deze tijd in stap 2 als vooraf geselecteerd
- laat de gebruiker de tijd nog kunnen wijzigen
- CTA blijft onderaan

Gebruik:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 2.

Niet doen:
- stap 2 overslaan
- datum en tijd definitief maken in stap 1
- direct naar gegevens gaan na tijdklik in stap 1
- afspraak bevestigen vóór stap 4

4. Mobiele versie

Voor mobiel moet dit compact en scrollbaar blijven.

Mobiele Planner stap 1:

Bovenaan:
Stap 1 van 4 — Dag kiezen

Titel:
Kies een dag voor uw bezoek.

Weekdagselector:
[Maandag] [Vrijdag] [Zaterdag]

Als Maandag geselecteerd is:
Kies een maandag.

Datumrail:
Horizontaal scrollbare rij met datumkaartjes.

Datumkaartje bevat alleen:
- dagafkorting
- dagnummer
- maand
- geselecteerde staat

Voorbeeld:
MA
04
mei

Daaronder:
Beschikbare tijden voor maandag 4 mei

Tijdrail:
Horizontaal scrollbare rij met tijdchips.

Voorbeeld:
14:00
14:15
14:30
14:45
15:00
15:15

Mobiel gedrag:
- Alleen de datumrail scrollt horizontaal.
- Alleen de tijdrail scrollt horizontaal.
- De hele pagina mag niet horizontaal scrollen.
- Laat eventueel een halve volgende kaart/chip zien als visuele hint.
- Gebruik geen publieke tekst “← Scroll →”.
- Gebruik eventueel intern:
  Intern: horizontaal scrollbaar op mobiel.

5. Desktopversie

Voor desktop hoeft dit niet horizontaal te scrollen.

Desktop Planner stap 1:

Gebruik een rustige tweekoloms layout.

Linkerkolom:
- weekdagselector
- beschikbare datums voor gekozen weekdag als grid

Rechterkolom:
- gekozen datum
- beschikbare tijden voor die datum
- dag-specifieke extra’s
- CTA

Voorbeeld desktopstructuur:

Links:
Kies een dag voor uw bezoek.
[Maandag] [Vrijdag] [Zaterdag]

Beschikbare maandagen:
[MA 04 mei] [MA 11 mei] [MA 18 mei]
[MA 25 mei] [MA 01 jun] [MA 08 jun]

Rechts:
Gekozen datum:
Maandag 4 mei 2026

Beschikbare tijden voor deze datum:
[14:00] [14:15] [14:30] [14:45] [15:00] [15:15]

Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 1.

Desktop gedrag:
- Geen horizontale scroll.
- Datums als grid.
- Tijden als grid.
- Geen carousel.
- Geen scrolllabel.

6. Extra’s bij deze structuur

Extra’s blijven zichtbaar, maar alleen als rustige daginformatie.

Toon extra’s niet in de datumkaartjes.
Toon extra’s niet als badge.
Toon extra’s niet met cadeau-iconen.
Toon extra’s niet als “+2 extra”.
Toon extra’s niet met bedragen.

Gebruik onder de gekozen datum of naast de tijdpreview:

Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Voor maandag, vrijdag en zaterdag mag de inhoud verschillen.

Voorbeeld als wireframe-placeholder:

Maandag:
Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Vrijdag:
Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]
- Autowasbeurt bij [partnernaam]

Zaterdag:
Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]

Als de exacte extra’s of partnernamen nog niet vastliggen:
Gebruik placeholders en interne labels.

Intern: Besluit nodig: definitieve extra’s per weekdag.
Intern: Besluit nodig: concrete partnernamen bij extra’s.
Intern: Besluit nodig: voorwaarden per extra.
Intern: Besluit nodig: praktische instructies per extra.

7. Copycorrecties

Gebruik wel:
- Kies een dag voor uw bezoek.
- Kies een maandag.
- Beschikbare maandagen.
- Gekozen datum: maandag 4 mei 2026.
- Beschikbare tijden voor deze datum.
- Bij uw bezoek op deze dag inbegrepen:
- Plan uw bezoek.
- Kies uw bezoekmoment.

Gebruik niet:
- Reserveer maandag
- Reserveer vrijdag
- Reserveer zaterdag
- Ontvang
- Extra cadeaus
- +2 extra
- +3 extra’s
- Meeste voordeel
- Belevingspakket
- t.w.v.
- ter waarde van
- gratis
- voordeel
- korting
- pakket
- dagje
- middag
- beleving
- arrangement
- populair
- snel vol
- nog maar
- laatste kans
- badge
- countdown
- cadeau-iconen als voordeelindicator
- statusbalkjes onder datums

8. Selectiestates

Gebruik duidelijke, rustige selectiestates.

Weekdag geselecteerd:
Maandag is zichtbaar geselecteerd.

Datum geselecteerd:
Maandag 4 mei is zichtbaar geselecteerd.

Tijd geselecteerd:
14:15 is zichtbaar geselecteerd.

Niet gebruiken:
- cadeau-iconen
- “meeste voordeel”-labels
- groene statusstreepjes
- schaarste-indicatoren
- drukte-indicatoren
- capaciteitstekst
- opvallende marketingkleur

9. State-varianten maken

Maak minimaal deze wireframe-varianten:

Mobiel — Planner stap 1:
- Maandag geselecteerd
- meerdere maandagen zichtbaar in horizontale datumrail
- maandag 4 mei geselecteerd
- beschikbare tijden voor maandag 4 mei zichtbaar in horizontale tijdrail
- dag-extra’s rustig onder de selector

Mobiel — Planner stap 2:
- maandag 4 mei geselecteerd
- 14:15 vooraf geselecteerd
- gebruiker kan tijd wijzigen

Desktop — Planner stap 1:
- weekdagselector
- datumgrid
- rechterpaneel met tijden voor gekozen datum
- dag-extra’s rustig in rechterpaneel

Desktop — Planner stap 2:
- tijdgrid voor gekozen datum
- eventueel vooraf geselecteerde tijd

10. Belangrijke flowregels behouden

Behoud:
- QR/link gaat nooit direct naar planner.
- Vóór planner staat altijd persoonlijk welkomstscherm.
- Planner heeft exact vier stappen.
- Stap 1 blijft Dag kiezen.
- Stap 2 blijft Tijd kiezen.
- Stap 3 blijft Gegevens.
- Stap 4 blijft Bevestiging.
- Geen chequenummer/postcode-invoer in persoonlijke QR/link-route.
- Geen login.
- Geen account.
- Geen nieuwsbrief.
- Geen cross-sell.
- Geen partnerlogomuur.
- Geen voorwaardenpagina in deze flowcorrectie.
- Geen CTA “Schilderij omruilen” in de core flow.

11. QA-check na correctie

Controleer en rapporteer kort:

Responsive:
- Mobiel toont weekdagselector.
- Mobiel toont meerdere datums voor gekozen weekdag.
- Mobiel toont beschikbare tijden voor geselecteerde datum.
- Mobiele datumrail is horizontaal scrollbaar.
- Mobiele tijdrail is horizontaal scrollbaar.
- Alleen de rails scrollen horizontaal; de pagina zelf niet.
- Desktop gebruikt datumgrid, geen horizontale scroll.
- Desktop gebruikt tijdgrid, geen horizontale scroll.

Plannerstructuur:
- Planner heeft nog exact vier stappen.
- Stap 1 is nog Dag kiezen.
- Stap 2 is nog Tijd kiezen.
- Tijdpreview in stap 1 slaat stap 2 niet over.
- Stap 3 bevat alleen naam, e-mail en telefoonnummer.
- Stap 4 bevat afspraakcontrole.

Inhoud:
- Bij gekozen weekdag staan meerdere datums.
- Bij gekozen datum staan alleen tijden voor die datum.
- Extra’s zijn zichtbaar als rustige daginformatie.
- Extra’s staan niet als badges of cadeau-iconen.
- Extra’s hebben geen bedragen.
- Geen “t.w.v.”.
- Geen “Meeste voordeel”.
- Geen “Belevingspakket”.
- Geen “Reserveer”.
- Geen “Ontvang”.
- Geen urgency.
- Geen schaarste.
- Geen statusbalkjes onder datums.
- Geen publieke “← Scroll →”-tekst.
- Open besluiten staan alleen als interne QA-labels.