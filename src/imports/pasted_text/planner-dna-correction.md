Voer een tekstuele en informationele DNA-correctie uit op de huidige plannerfunctionaliteit.

Belangrijk:
Behoud de bestaande functionaliteiten uit de Netlify-planner zoveel mogelijk. Verander dus niet primair de interactie, maar corrigeer de publieke taal, labels, informatiehiërarchie en framing zodat alles voldoet aan het DNA van De Kunst van Kunst.

Te behouden functionaliteiten:
- chequecontext bovenaan
- dag-/datumselectie
- tijdselectie
- horizontale datumscroll op mobiel
- horizontale tijdscroll op mobiel
- geselecteerde datum- en tijdstaat
- extras per bezoekdag
- info-icoontjes bij onderdelen
- detail-popups / modalvensters met “Sluiten”
- afspraak-samenvatting
- bevestigactie
- mobiele compacte plannerervaring

Niet behouden:
- huidige publieke woorden die het verkeerde frame activeren
- voordeel-/pakket-/cadeau-/kortingstaal
- bedragen bij extras
- belevingspakket als klantterm
- reserveringstaal
- directe route naar planner zonder persoonlijk welkomstscherm

1. Route blijft DNA-conform

De functionaliteit mag blijven, maar de route moet zijn:

Algemene route:
Homepage
→ Activeer uw cheque
→ Chequeinvoer
→ Persoonlijk welkomstscherm
→ Planner stap 1 — Dag kiezen
→ Planner stap 2 — Tijd kiezen
→ Planner stap 3 — Gegevens
→ Planner stap 4 — Bevestiging
→ Afspraak bevestigd

Persoonlijke QR/link-route:
Automatische chequeherkenning
→ Persoonlijk welkomstscherm
→ Planner stap 1 — Dag kiezen
→ Planner stap 2 — Tijd kiezen
→ Planner stap 3 — Gegevens
→ Planner stap 4 — Bevestiging
→ Afspraak bevestigd

Belangrijk:
- QR/link mag nooit direct naar de planner.
- Vóór de planner staat altijd persoonlijk welkomstscherm.
- De huidige Netlify-plannerfunctionaliteit mag dus niet als eerste scherm verschijnen.
- De planner blijft exact vier stappen.
- Datum- en tijdselectie mogen in stap 1 compact zichtbaar zijn als preview, maar stap 2 Tijd kiezen blijft bestaan.

2. Chequecontext bovenaan corrigeren

Huidig:
Cheque nr: 12345678 actief · Belevingspakket ☒ Ja ☐ Nee

Vervang door klantgericht:

Chequenummer: [chequenummer]

Of, als dit in het persoonlijke welkomstscherm staat:

Uw Kunst-Waardecheque is herkend.
Chequenummer: [chequenummer]
Geldig tot: [datum]

Verwijder klantgericht:
- actief
- Belevingspakket
- Ja/Nee-toggle
- pakketstatus
- package_id
- hash
- technische status

Als eligibility voor extras technisch nodig is:
toon alleen intern:

Intern: package_id / chequenummer bepaalt of dag-specifieke extras van toepassing zijn.
Intern: Besluit nodig: eligibility-logica extras.

3. Titel en eerste plannertekst corrigeren

Huidig:
PLAN UW BEZOEK
Kies een dag om verder te gaan

Vervang door:

Stap 1 van 4 — Dag kiezen
Kies een dag voor uw bezoek.

Gebruik niet:
- reserveer
- reserveren
- verzilveren
- boek
- claim
- beleving
- dagje
- middag
- arrangement

4. Mobiele datum- en tijdscroll behouden

Behoud de horizontaal scrollbare datum- en tijdcomponenten voor mobiel.

Maar vervang:

Kies een datum
← Scroll →

Door:

Kies een datum.

En plaats alleen intern:
Intern: horizontaal scrollbaar op mobiel.

Vervang:

Kies een tijd
← Scroll →

Door:

Kies een tijd.

En plaats alleen intern:
Intern: horizontaal scrollbaar op mobiel.

Mobiel:
- datumrail horizontaal scrollbaar
- tijdrail horizontaal scrollbaar
- alleen rails scrollen horizontaal
- pagina zelf niet horizontaal scrollen
- geen publieke scrolltekst
- geen badges
- geen statusbalken
- geen schaarste-indicatoren

Desktop:
- geen horizontale scroll verplicht
- toon datum als grid of rustige lijst
- toon tijden als grid of rustige lijst

5. Eén scherm met meerdere datums en tijden behouden als usability-patroon

Behoud het functionele patroon waarin een klant meteen meerdere datums ziet en daaronder tijden ziet die bij de gekozen datum horen.

Maar structureer het DNA-conform:

Stap 1 — Dag kiezen

Titel:
Kies een dag voor uw bezoek.

Weekdagselector:
[Maandag] [Vrijdag] [Zaterdag]

Als Maandag gekozen is:
Kies een maandag.

Beschikbare maandagen:
MA 04 mei
MA 11 mei
MA 18 mei
MA 25 mei

Gekozen datum:
Maandag 4 mei 2026

Beschikbare tijden voor deze datum:
14:00
14:15
14:30
14:45
15:00

Belangrijk:
- De tijden in stap 1 zijn een preview / quick-select.
- Klik op een tijd mag de tijd alvast selecteren.
- Stap 2 blijft bestaan als formele tijdkeuze.
- Stap 2 mag niet worden overgeslagen.
- Afspraak is pas definitief na stap 4.

Interne annotatie:
Intern: tijdpreview in stap 1 is usability-patroon; stap 2 blijft formele tijdkeuze.
Intern: Besluit nodig: exacte beschikbare dagen.
Intern: Besluit nodig: exacte tijdsloten.
Intern: Besluit nodig: capaciteit per slot.

6. “Inbegrepen tijdens uw bezoek” corrigeren

Huidig:
Inbegrepen tijdens uw bezoek
Details volgen na reservering

Vervang door:

Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Of bij gekozen maandag:

Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Voor vrijdag:
Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]
- Autowasbeurt bij [partnernaam]

Voor zaterdag:
Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]

Als partnernamen nog niet vastliggen:
toon niet als definitieve klanttekst, maar als wireframe-placeholder:
- [extra met concrete partnernaam]

Interne labels:
Intern: Besluit nodig: definitieve extra’s per weekdag.
Intern: Besluit nodig: concrete partnernamen bij extras.
Intern: Besluit nodig: praktische voorwaarden per extra.

Niet gebruiken:
- Details volgen na reservering
- extra cadeaus
- t.w.v.
- bedragen
- meeste voordeel
- belevingspakket
- pakket
- cadeauwaarde
- ontvang
- gratis
- voordeel

7. Info-icoontjes en detail-popups behouden

Behoud de info-icoontjes en detail-popups/modalvensters.

Maar herschrijf de inhoud van alle popups naar rustige, feitelijke tekst.

Algemene popupregel:
- kort
- feitelijk
- geen verkooptekst
- geen bedragen
- geen voordeel
- geen beleving
- geen luxe
- geen reserveringstaal
- geen “details volgen na reservering”

Gebruik onderaan eventueel:

De praktische gegevens bij deze onderdelen staan in uw bevestiging.

Of:

Gebruik van dit onderdeel is niet verplicht.

Knop:
Sluiten

8. Popup “Schilderij naar keuze tot € 500,00” corrigeren

Huidig:
Schilderij naar keuze tot € 500,00
Min. 50 schilderijen binnen deze waarde
Uitsluitend werken van Nederlandse kunstenaars
Certificaat van echtheid
Magazine met toelichting op kunstenaar
Direct mee te nemen
Kiest u een schilderij boven deze waarde, dan wordt uw cheque volledig verrekend en ontvangt u 25% tot 50% korting op het nog te betalen bedrag.

Vervang door:

Titel:
Uw Kunst-Waardecheque

Tekst:
In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende formaten en stijlen. Bij elk gekozen werk hoort een certificaat van echtheid.

Vervolg:
Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe.

Optioneel:
Uitgangspunt is dat u het gekozen werk direct kunt meenemen.

Niet gebruiken:
- Schilderij naar keuze tot € 500,00 als pakketregel
- binnen deze waarde
- 25% tot 50% korting
- korting
- voordeel
- boven deze waarde
- magazine met kunstenaar tenzij formeel besloten
- uitsluitend Nederlandse kunstenaars tenzij formeel besloten
- exacte maten
- u betaalt niets
- gratis

Als “Magazine met toelichting op kunstenaar” functioneel gewenst is:
verplaats naar intern label:
Intern: Besluit nodig: magazine / toelichting op kunstenaar inbegrepen ja/nee.

9. Popup “Auto Carwash” corrigeren

Huidig:
Auto Carwash
Inbegrepen Ja/Nee
Executive-pakket
Blob Protection Shield
Overdekt stofzuigen
Details volgen na reservering

Vervang door:

Titel:
Autowasbeurt bij [partnernaam]

Tekst:
Bij uw bezoek op deze dag hoort een autowasbeurt bij [partnernaam]. Gebruik ervan is niet verplicht.

Praktische regel:
De praktische gegevens staan in uw bevestiging.

Niet gebruiken:
- Executive-pakket
- Blob Protection Shield
- meest uitgebreid
- kosteloos als claim
- gratis
- voordeel
- details volgen na reservering
- pakket
- cadeau

Als afstand nodig is:
Alleen tonen als feitelijk vastgesteld:
Afstand vanaf galerie: [afstand — besluit nodig]

Intern:
Intern: Besluit nodig: partnernaam autowasbeurt.
Intern: Besluit nodig: praktische instructie autowasbeurt.
Intern: Besluit nodig: afstand wel/niet tonen.

10. Popup “Koffie met gebak” corrigeren

Huidig:
Geniet van cappuccino, koffie of thee met gesorteerd gebak voor twee personen.
Of kies voor € 15,- lunchvoordeel.

Vervang door:

Titel:
Koffie of thee met gebak bij [partnernaam]

Tekst:
Bij uw bezoek op deze dag hoort koffie of thee met gebak bij [partnernaam]. Gebruik ervan is niet verplicht.

Praktische regel:
De praktische gegevens staan in uw bevestiging.

Niet gebruiken:
- geniet van
- lunchvoordeel
- € 15,-
- voordeel
- gratis
- traktatie
- beleving
- arrangement
- horecazaak in de buurt zonder partnernaam

Intern:
Intern: Besluit nodig: partnernaam koffie/thee met gebak.
Intern: Besluit nodig: praktische instructie koffie/thee met gebak.

11. Popup “Wellness” corrigeren

Huidig:
Wellness
Ontspan bij de meest luxe wellnesslocaties van Twente
3 uur toegang
Te combineren vóór of na uw galeriebezoek
Openingstijden: 10:00 – 22:30 uur
Niet geldig in laatste 2 weken december / eerste 2 weken januari
Aanvullende details ontvangt u na reservering

Vervang door:

Titel:
Wellness bij [partnernaam]

Tekst:
Bij uw bezoek op deze dag hoort wellness bij [partnernaam]. Gebruik ervan is niet verplicht.

Praktische regel:
Houd rekening met uw afspraak in de galerie.

Als voorwaarden feitelijk vastgesteld zijn:
Praktische voorwaarden: [voorwaarde — besluit nodig]

Niet gebruiken:
- ontspan
- meest luxe
- wellnesslocaties van Twente
- beleving
- arrangement
- 3 uur toegang als verkoopclaim
- openingstijden als publiek detail zolang niet vastgesteld
- details na reservering
- gratis
- voordeel

Intern:
Intern: Besluit nodig: partnernaam wellness.
Intern: Besluit nodig: voorwaarden wellness.
Intern: Besluit nodig: geldigheidsbeperkingen wellness.
Intern: Besluit nodig: openingstijden partnerextra publiek tonen ja/nee.

12. Popup “Verrassingscadeau” corrigeren

Huidig:
Verrassingscadeau
Na uw galeriebezoek ontvangt u een origineel cadeau t.w.v. € 25,-

Vervang door:

Titel:
Kleine attentie in de galerie

Tekst:
Bij uw bezoek op deze dag hoort een kleine attentie in de galerie.

Niet gebruiken:
- Verrassingscadeau
- cadeau t.w.v.
- € 25,-
- origineel cadeau
- minimale waarde
- mysterieus
- extra cadeau
- gratis
- voordeel

13. Popup “Belevingspakket” corrigeren

Huidig:
Belevingspakket
Indien inbegrepen biedt uw cheque toegang tot extra's afhankelijk van uw bezoekdag.
U kunt één of meerdere extra’s vrij gebruiken op de dag van uw galeriebezoek, zowel vóór als na uw afspraak.
Gebruik is niet verplicht.
Details volgen na reservering.

Vervang klantgericht door:

Titel:
Inbegrepen onderdelen bij deze bezoekdag

Tekst:
Sommige bezoekdagen hebben aanvullende onderdelen bij omliggende bedrijven. Deze onderdelen horen bij de gekozen bezoekdag. Gebruik ervan is niet verplicht.

Praktische regel:
De praktische gegevens staan in uw bevestiging.

Niet gebruiken:
- Belevingspakket
- toegang tot extra’s
- details volgen na reservering
- pakket
- arrangement
- voordeel
- gratis
- cadeau

Intern:
Intern: belevingspakket is alleen interne term, niet klantgericht.
Intern: package_id bepaalt of deze onderdelen van toepassing zijn.
Intern: Besluit nodig: definitieve naamgeving extras intern/extern.

14. Stap 2 — Tijd kiezen behouden

Stap 2 blijft bestaan, ook als stap 1 al tijdpreview toont.

Titel:
Kies een tijd.

Toon:
Gekozen dag: [datum]

Tijdsloten:
[tijd]
[tijd geselecteerd]
[tijd]

Als tijd in stap 1 is geselecteerd:
toon deze tijd als geselecteerd, maar wijzigbaar.

Niet tonen:
- nog 1 plek
- populair
- snel vol
- countdown
- badges
- capaciteit
- voordeel
- pakketinfo

CTA:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 2.

15. Stap 3 — Gegevens

Titel:
Controleer uw gegevens.

Intro:
Controleer onderstaande gegevens en pas deze aan als dat nodig is.

Toon alleen deze invoervelden:
- Naam
- E-mail
- Telefoonnummer

Toon niet-bewerkbaar:
Chequenummer: [chequenummer]

Bezoekersinformatie als rustige regel:
Maximaal twee bezoekers per cheque, vanaf 12 jaar.

Niet toevoegen:
- aantal personen als definitief formulier tenzij besloten
- nieuwsbrief
- marketing opt-in
- stijlvoorkeur
- collectievoorkeur
- kunstenaarvoorkeur
- opmerkingenveld
- akkoord commerciële opvolging

Privacy:
[Privacytekst — besluit nodig]
Intern: Besluit nodig: privacytekst.

CTA:
[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA plannerscherm 3.

16. Stap 4 — Bevestiging

Titel:
Controleer uw afspraak.

Toon:
- Dag: [datum]
- Tijd: [tijd]
- Naam: [naam]
- E-mail: [e-mail]
- Telefoonnummer: [telefoonnummer]
- Chequenummer: [chequenummer]
- Galerie De Kunst van Kunst
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren: zonder kosten voor de deur
- Gemiddelde duur: 60 tot 90 minuten
- Bezoek uitsluitend op afspraak
- Maximaal twee bezoekers per cheque, vanaf 12 jaar
- Vragen? 074 - 291 48 57

Toon rustig:
Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Eventueel:
Tijdens uw bezoek staat koffie of thee voor u klaar.

Niet tonen:
- € 500 als hero
- korting
- voordeel
- t.w.v.
- cadeauwaarde
- belevingspakket
- details volgen na reservering
- reviewverzoek
- nieuwsbrief
- bekijk ook
- cross-sell

CTA’s:
[CTA: Ga terug]
[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA bevestigingsactie.

17. Afspraak bevestigd

Titel:
Uw afspraak is bevestigd.

Body:
Uw afspraak bij Galerie De Kunst van Kunst is bevestigd voor [datum] om [tijd].

Toon:
- Galerie De Kunst van Kunst
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren: zonder kosten voor de deur
- Gemiddelde duur: 60 tot 90 minuten
- Chequenummer: [chequenummer]
- Bezoek uitsluitend op afspraak
- Maximaal twee bezoekers per cheque, vanaf 12 jaar
- U ontvangt een bevestiging per e-mail.
- Vragen over uw afspraak? Bel 074 - 291 48 57.

Toon rustig:
Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Optioneel:
U kunt eventueel een foto van uw interieur meenemen.

Niet als opvallende “Tip!” tonen.

CTA:
[CTA: Voeg toe aan agenda]
Intern: Besluit nodig: CTA “Voeg toe aan agenda” en eventuele .ics-oplossing.

18. Woordenlijst — direct vervangen

Vervang overal:

“Cheque nr”
door:
“Chequenummer”

“Kunst Waardecheque”
door:
“Kunst-Waardecheque”

“€ 500,00”
door:
“€ 500,—”

“reservering”
door:
“afspraak” of “bevestiging”

“Details volgen na reservering”
door:
“De praktische gegevens staan in uw bevestiging.”

“Belevingspakket”
door klantgericht:
“Inbegrepen onderdelen bij deze bezoekdag”

“Verrassingscadeau”
door:
“Kleine attentie in de galerie”

“Koffie met gebak”
door:
“Koffie of thee met gebak bij [partnernaam]”

“Auto Carwash”
door:
“Autowasbeurt bij [partnernaam]”

“Wellness”
door:
“Wellness bij [partnernaam]”

19. Verboden woorden/patronen uit deze planner verwijderen

Verwijder klantgericht overal:

- belevingspakket
- reservering
- verzilveren
- voucher
- waardebon
- korting
- 25% tot 50%
- voordeel
- lunchvoordeel
- deal
- actie
- gratis
- u betaalt niets
- t.w.v.
- ter waarde van bij extras
- cadeau t.w.v.
- extra cadeaus
- meest luxe
- geniet van
- arrangement
- beleving
- dagje
- middag
- populair
- snel vol
- nog maar
- badges
- countdown
- details volgen na reservering
- executive-pakket
- Blob Protection Shield
- meest uitgebreid
- ruimere collectie
- duurder werk
- upgrade

20. Functionele elementen die NIET verwijderd mogen worden

Niet verwijderen:
- datumselectie
- tijdselectie
- mobiele horizontale scrollrails
- geselecteerde datum/tijd
- extras per gekozen dag
- info-iconen
- detailpopups
- afspraakoverzicht
- bevestigknop
- sluitknop in modal
- technische eligibility intern
- prefill van persoonlijke gegevens in QR/link-route

Wel corrigeren:
- labels
- klanttekst
- modalcopy
- informatievolgorde
- positie binnen vierstappenplanner
- interne/public scheiding

21. Interne QA-labels

Open besluiten mogen alleen in interne QA-laag staan, niet als publieke klanttekst.

Gebruik:
Intern: Besluit nodig: exacte beschikbare dagen.
Intern: Besluit nodig: exacte tijdsloten.
Intern: Besluit nodig: capaciteit per slot.
Intern: Besluit nodig: definitieve extra’s per weekdag.
Intern: Besluit nodig: concrete partnernamen bij extras.
Intern: Besluit nodig: praktische voorwaarden per extra.
Intern: Besluit nodig: privacytekst.
Intern: Besluit nodig: CTA “Verder”.
Intern: Besluit nodig: CTA “Bevestig afspraak”.
Intern: Besluit nodig: CTA “Voeg toe aan agenda”.
Intern: Besluit nodig: papieren cheque meenemen ja/nee.
Intern: Besluit nodig: package_id / eligibility-logica extras.

Deze labels mogen niet aanvoelen als klantinterface.

22. QA-check na correctie

Controleer en rapporteer kort:

Functionaliteit behouden:
- Chequecontext is behouden.
- Datumselectie is behouden.
- Tijdselectie is behouden.
- Mobiele datumscroll is behouden.
- Mobiele tijdscroll is behouden.
- Extras zijn behouden.
- Info-iconen zijn behouden.
- Detailpopups zijn behouden.
- Afspraakoverzicht is behouden.
- Bevestigactie is behouden.

DNA-conform:
- Planner staat niet direct vóór persoonlijk welkomstscherm.
- Planner heeft exact vier stappen.
- Stap 1 is Dag kiezen.
- Stap 2 is Tijd kiezen.
- Stap 3 is Gegevens.
- Stap 4 is Bevestiging.
- Geen “Belevingspakket” klantgericht.
- Geen “Details volgen na reservering”.
- Geen korting of percentages.
- Geen voordeel.
- Geen t.w.v.
- Geen cadeauwaarde.
- Geen lunchvoordeel.
- Geen luxe-/belevingstaal.
- Geen urgency.
- Geen badges.
- Geen nieuwsbrief.
- Geen cross-sell.
- Geen partnerlogomuur.
- Geen exacte maten.
- Geen € 500 als hero of pakketclaim.
- Extras staan feitelijk bij gekozen bezoekdag.
- Extras hebben concrete partnernaam of intern besluitlabel.
- “Bezoek uitsluitend op afspraak” staat in praktische informatie.
- Telefoonnummer staat als 074 - 291 48 57.
- Open besluiten staan alleen als interne QA-labels.