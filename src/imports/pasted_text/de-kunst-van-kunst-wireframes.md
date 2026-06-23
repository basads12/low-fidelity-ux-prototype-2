Voer een gerichte correctieronde uit op de Figma Make low-fidelity wireframes voor De Kunst van Kunst.

Belangrijke correctie op eerdere instructie:
De extras moeten WEL in de planner blijven, maar alleen in de juiste vorm.

Ze mogen niet worden gepresenteerd als:
- belevingspakket
- pakketkeuze
- voordeelvergelijking
- cadeau-stapel
- dagarrangement
- waarde-optimalisatie
- verkoopargument

Ze moeten worden gepresenteerd als:
dag-specifieke, feitelijke onderdelen die bij een bepaalde bezoekdag horen.

Gebruik dus:
“Bij uw bezoek op deze dag inbegrepen: …”

Niet gebruiken:
“Ontvang …”
“Extra cadeaus”
“Meeste voordeel”
“t.w.v.”
“ter waarde van”
“Belevingspakket”
“Reserveer”
“Details volgen na reservering”

1. Functionele referentie uit externe planner

Gebruik de losse externe appointment planner alleen als functionele referentie voor:
- persoonlijke QR/link-route
- chequenummer
- partner/issuer
- vooraf ingevulde naam/e-mail/telefoon
- voorgeselecteerde datum
- voorgeselecteerde tijd
- dag-specifieke extras
- interne technische datavelden zoals package_id en hash

Gebruik deze wireframe-data:
- Chequenummer: 12345688
- Partner/issuer: BEDRIJF
- Datum uit link: maandag 4 mei 2026
- Tijd uit link: 14:15
- Naam: [naam]
- E-mail: [e-mail]
- Telefoonnummer: [telefoonnummer]

Toon nooit echte persoonsgegevens uit de aangeleverde URL.
Gebruik placeholders.

Toon package_id en hash nooit klantgericht.
Gebruik ze alleen als interne annotatie:

Intern: technische herkenningsdata uit persoonlijke link.
Intern: package_id kan intern bepalen of dag-specifieke extras van toepassing zijn.
Intern: hash/token is alleen voor herkenning en validatie.
Intern: Besluit nodig: exacte technische QR/link-datavelden.
Intern: Besluit nodig: betekenis package_id.
Intern: Besluit nodig: token/hash-validatie.

2. Routevolgorde herstellen

De persoonlijke QR/link-route moet zijn:

1. Entry via persoonlijke QR/link
2. Automatische chequeherkenning / rustige loadstate
3. Persoonlijk welkomstscherm
4. Planner stap 1 — Dag kiezen
5. Planner stap 2 — Tijd kiezen
6. Planner stap 3 — Gegevens controleren
7. Planner stap 4 — Afspraak controleren
8. Afspraak bevestigd

Belangrijk:
- QR/link gaat nooit direct naar de planner.
- Vóór de planner staat altijd het persoonlijke welkomstscherm.
- Geen chequenummer opnieuw vragen in persoonlijke route.
- Geen postcode opnieuw vragen in persoonlijke route.
- Geen login.
- Geen account.
- Geen chequeinvoer in deze persoonlijke route.

3. Automatische chequeherkenning

Schermnaam:
Automatische chequeherkenning

Klanttekst:
Een moment alstublieft. Uw cheque wordt opgehaald.

Interne labels:
Intern: Besluit nodig: exacte laadtekst.
Intern: Besluit nodig: technische QR/link-datavelden.
Intern: Besluit nodig: matchlogica voor token/hash/package_id.

Niet tonen:
- package_id
- hash
- volledige URL
- verzilveren
- voucher
- waardebon
- geactiveerd
- gefeliciteerd

4. Persoonlijk welkomstscherm

Maak vóór de planner een apart persoonlijk welkomstscherm.

Gebruik deze structuur:

Eyebrow:
NAMENS BEDRIJF

H1:
Welkom [voornaam]. Uw Kunst-Waardecheque is herkend.

Chequevisualisatie:
Kunst-Waardecheque
Chequenummer: 12345688
Waarde: € 500,—
Geldig tot: [datum]

Body:
In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende formaten en stijlen. Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe.

Praktische regel:
Bezoek uitsluitend op afspraak.

Primaire CTA:
Plan uw bezoek

Secundaire CTA, indien nodig:
Kies uw bezoekmoment

Belangrijk:
Toon de dag-specifieke extras nog niet als hoofdonderdeel op het welkomstscherm. Die horen bij de dagkeuze in de planner.

Niet tonen op welkomstscherm:
- belevingspakket
- extra cadeaus
- meeste voordeel
- bedragen bij extras
- package_id
- hash
- Aangeboden door BEDRIJF
- Gefeliciteerd
- Uw cheque is geactiveerd
- Speciaal voor u
- Persoonlijk voor u
- Verzilveren
- Voucher
- Waardebon
- Korting
- Voordeel
- Deal
- Gratis
- Reserveer
- Arrangement
- Dagje
- Middag
- Beleving

5. Planner stap 1 — Dag kiezen MET extras

Maak een apart scherm voor dagkeuze.

Titel:
Kies een dag voor uw bezoek.

Toon:
- beschikbare dagen in rustige kalender- of lijstweergave
- indien aanwezig uit persoonlijke link: maandag 4 mei 2026 als geselecteerde dag
- dag-specifieke extras per dag, klein en feitelijk
- één beslissing: dag kiezen

Gebruik niet langer pakketkaarten met waardeverschillen.
Gebruik wel rustige dagkaarten met feitelijke extra-informatie.

Voorbeeldstructuur dagkaart:

MAANDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

[Veldstatus: geselecteerd indien datum uit link overeenkomt]

VRIJDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]
- Autowasbeurt bij [partnernaam]

ZATERDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]

Als de exacte inhoud of partnernamen nog niet vastliggen:
Gebruik klantgericht geen definitieve partnernamen.
Toon dan placeholders en een intern QA-label:

Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Intern: Besluit nodig: exacte dag-specifieke extras per dag.
Intern: Besluit nodig: concrete partnernamen bij extras.
Intern: Besluit nodig: geldigheid en praktische voorwaarden per extra.

Belangrijk:
De extras mogen zichtbaar zijn, maar niet als keuzecriterium met waarde of voordeel.
Gebruik geen rangorde waarin maandag “beter” lijkt dan vrijdag of zaterdag.

Niet tonen:
- Ontvang € 97,50 aan extra cadeaus
- Ontvang € 35,50 aan extra cadeaus
- Ontvang € 15,00 aan een extra cadeau
- + 3 extra’s t.w.v. …
- + 2 extra’s t.w.v. …
- + 1 extra t.w.v. …
- Meeste voordeel
- Cadeau-iconen als voordeelindicator
- Badges
- Pakketwaarde
- Belevingspakket
- Reserveer Maandag
- Reserveer Vrijdag
- Reserveer Zaterdag
- Populair
- Snel vol
- Nog maar
- Countdown
- Urgency

Gebruik geen eurobedragen bij extras.

CTA:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 1.

6. Info-icoon bij extras

Als er een info-icoon nodig is bij dag-specifieke extras, gebruik dan een rustige toelichting.

Toegestane tooltiptekst:
Deze onderdelen horen bij uw bezoek op deze dag. Gebruik ervan is niet verplicht.

Alternatieve tooltiptekst:
De praktische gegevens bij deze onderdelen staan in uw bevestiging.

Niet gebruiken:
- Wat is een belevingspakket?
- Meer info inbegrepen extra’s ontvangt u per e-mail na reservering
- Details volgen na reservering
- Ontvang extra cadeaus
- Gebruik uw voordeel
- Gratis extra’s
- Pakketvoorwaarden

7. Planner stap 2 — Tijd kiezen

Maak een apart scherm voor tijdkeuze.

Titel:
Kies een tijd.

Toon:
Gekozen dag: maandag 4 mei 2026

Toon klein, als context:
Bij uw bezoek op deze dag inbegrepen:
Autowasbeurt bij [partnernaam], Wellness bij [partnernaam], Kleine attentie in de galerie.

Daaronder:
Beschikbare tijdsloten:
14:00
14:15 geselecteerd
14:30
14:45
15:00
15:15

Belangrijk:
De extras zijn hier alleen een samenvatting van de gekozen dag.
De gebruiker kiest hier alleen een tijd.

Niet tonen:
- pakketinformatie
- bedragen
- cadeau-iconen
- meeste voordeel
- urgency
- populaire tijd
- nog 1 plek
- countdown
- badge

CTA:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 2.

8. Planner stap 3 — Gegevens controleren

Maak een apart scherm voor gegevenscontrole.

Titel:
Controleer uw gegevens.

Intro:
Controleer onderstaande gegevens en pas deze aan als dat nodig is.

Toon alleen deze drie invoervelden:
- Naam: [naam]
- E-mail: [e-mail]
- Telefoonnummer: [telefoonnummer]

Bij persoonlijke link-route:
- velden zijn vooraf ingevuld waar mogelijk
- velden blijven aanpasbaar
- telefoonnummer blijft zichtbaar als veld

Toon daarnaast als niet-bewerkbare referentie:
Chequenummer: 12345688

Toon eventueel compacte samenvatting:
Afspraak: maandag 4 mei 2026 om 14:15

Geen uitgebreide extras hier tonen.
De gebruiker moet hier alleen gegevens controleren.

Bezoekersinformatie als rustige informatieregel:
Maximaal twee bezoekers per cheque, vanaf 12 jaar.

Niet toevoegen:
- aantal personen als definitief formulier
- nieuwsbrief
- marketing opt-in
- stijlvoorkeur
- collectievoorkeur
- kunstenaarvoorkeur
- opmerkingenveld
- akkoord commerciële opvolging

Als een keuze 1/2 personen toch nodig lijkt:
Niet als definitieve klantinterface tonen.
Gebruik intern:
Intern: Besluit nodig: aantal bezoekers als functioneel veld ja/nee; bron zegt geen extra velden buiten naam, e-mail en telefoonnummer.

Privacy:
Intern: Besluit nodig: privacytekst.

CTA:
[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA plannerscherm 3.

9. Planner stap 4 — Afspraak controleren MET extras

Maak een apart scherm voor afspraakcontrole.
Gebruik geen pop-up/modal.

Titel:
Controleer uw afspraak.

Toon:
- Dag: maandag 4 mei 2026
- Tijd: 14:15
- Naam: [naam]
- E-mail: [e-mail]
- Telefoonnummer: [telefoonnummer]
- Chequenummer: 12345688
- Galerie De Kunst van Kunst
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren: zonder kosten voor de deur
- Gemiddelde duur: 60 tot 90 minuten
- Bezoek uitsluitend op afspraak
- Bezoekersinformatie: maximaal twee bezoekers per cheque, vanaf 12 jaar
- Vragen? 074 - 291 48 57

Voeg daarna een apart rustig blok toe:

Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Als de klant een vrijdag of zaterdag koos:
toon alleen de extras die bij die gekozen dag horen.

Toon eventueel:
Tijdens uw bezoek staat koffie of thee voor u klaar.

Papieren cheque:
Niet als klantregel publiceren.
Gebruik alleen:
Intern: Besluit nodig: papieren cheque meenemen ja/nee.

Niet tonen:
- belevingspakket
- extra cadeaus
- t.w.v.-bedragen
- eurobedragen bij extras
- Schilderij naar keuze € 500,00 als pakketregel
- € 500 als hero
- u betaalt niets
- korting
- voordeel
- meeste voordeel
- details volgen na reservering
- reviewverzoek
- nieuwsbrief
- cross-sell
- bekijk ook
- partnerlogomuur

CTA’s:
[CTA: Ga terug]
[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA bevestigingsactie.

10. Afspraak bevestigd-scherm MET extras

Maak na stap 4 een apart bevestigingsscherm.

Titel:
Uw afspraak is bevestigd.

Body:
Uw afspraak bij Galerie De Kunst van Kunst is bevestigd voor maandag 4 mei 2026 om 14:15.

Toon:
- Galerie De Kunst van Kunst
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren: zonder kosten voor de deur
- Gemiddelde duur: 60 tot 90 minuten
- Chequenummer: 12345688
- Bezoek uitsluitend op afspraak
- Maximaal twee bezoekers per cheque, vanaf 12 jaar
- U ontvangt een bevestiging per e-mail.
- Vragen over uw afspraak? Bel 074 - 291 48 57.

Voeg een rustig blok toe:

Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Daaronder eventueel klein:
De praktische gegevens bij deze onderdelen staan in uw bevestiging.

Optionele rustige voorbereidingsregel:
U kunt eventueel een foto van uw interieur meenemen.

Gebruik deze regel niet als opvallende “Tip!” en zet hem niet bovenaan de planner.

CTA:
[CTA: Voeg toe aan agenda]
Intern: Besluit nodig: CTA “Voeg toe aan agenda” en eventuele .ics-oplossing.

Niet toevoegen:
- pop-up
- reviewverzoek
- nieuwsbrief
- bekijk ook
- nieuwe werken
- partneroverzicht
- commerciële opvolging
- extra aanbiedingen
- belevingspakketinformatie
- waardestapels
- bedragen bij extras

11. Correcte klanttekst voor de huidige extras

Gebruik de huidige legacy-onderdelen alleen in rustige, feitelijke vorm.

Legacy:
Auto Carwash

Klanttekst:
Autowasbeurt bij [partnernaam]

Niet gebruiken:
Executive-pakket
Blob Protection Shield
diepe glans
optimale vuilafstoting
kosteloos overdekt stofzuigen als verkooptekst

Legacy:
Koffie met gebak

Klanttekst:
Koffie of thee met gebak bij [partnernaam]

Niet gebruiken:
Geniet van
lunchvoordeel
€ 15,—
horecazaak in de buurt zonder partnernaam

Legacy:
Wellness & Thermen

Klanttekst:
Wellness bij [partnernaam]

Niet gebruiken:
Geniet van
3 uur toegang als verkoopclaim
maximaal 2 personen als voordeelregel
openingstijden als publiek detail tenzij operationeel vastgesteld
informatie volgt na reservering
uitje-/belevingstaal

Legacy:
Mystery Gift / Verrassingsgeschenk

Klanttekst:
Kleine attentie in de galerie

Niet gebruiken:
Mystery Gift
Verrassingsgeschenk t.w.v.
minimale waarde
cadeauwaarde
mysterieus
extra cadeau

12. Lange extra-beschrijvingen niet in de planner

Verplaats de lange beschrijvingen van Auto Carwash, Koffie met gebak, Wellness & Thermen en Mystery Gift niet naar de plannerstappen.

In de vier plannerstappen mag alleen staan:
- naam van de extra
- concrete partnernaam
- eventueel korte praktische regel
- geen bedragen
- geen verkooptekst
- geen afstanden als dagplanning

Als praktische details nodig zijn, gebruik na bevestiging of in de bevestigingsmail een rustig detailblok:

Praktische gegevens bij inbegrepen onderdelen:
- Autowasbeurt bij [partnernaam]: [adres / instructie — besluit nodig]
- Koffie of thee met gebak bij [partnernaam]: [adres / instructie — besluit nodig]
- Wellness bij [partnernaam]: [adres / instructie — besluit nodig]
- Kleine attentie in de galerie

Interne labels:
Intern: Besluit nodig: exacte partnernaam autowasbeurt.
Intern: Besluit nodig: exacte partnernaam koffie/thee met gebak.
Intern: Besluit nodig: exacte partnernaam wellness.
Intern: Besluit nodig: voorwaarden per extra.
Intern: Besluit nodig: geldigheid per extra.
Intern: Besluit nodig: praktische instructie per extra.
Intern: Besluit nodig: of afstanden naar extra-partners publiek nodig zijn.

13. Dagkaarten corrigeren

Vervang de huidige dagkaarten:

Oud:
RESERVEER MAANDAG
Ontvang € 97,50 aan extra cadeaus
Meeste voordeel

Nieuw:
MAANDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Oud:
RESERVEER VRIJDAG
Ontvang € 35,50 aan extra cadeaus

Nieuw:
VRIJDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]
- Autowasbeurt bij [partnernaam]

Oud:
RESERVEER ZATERDAG
Ontvang € 15,00 aan een extra cadeau

Nieuw:
ZATERDAG
[datum]

Bij uw bezoek op deze dag inbegrepen:
- Koffie of thee met gebak bij [partnernaam]

Let op:
Deze verdeling is wireframe-voorbeelddata op basis van de losse planner.
Markeer als intern open besluit als de definitieve dagverdeling nog niet vastligt:

Intern: Besluit nodig: definitieve extra-verdeling per dag.
Intern: Besluit nodig: exacte beschikbare dagen.
Intern: Besluit nodig: exacte partnernamen.

14. “Inbegrepen tijdens uw bezoek”-blok corrigeren

Vervang het huidige waardestapelblok:

Oud:
Inbegrepen tijdens uw bezoek
✓ Schilderij naar keuze € 500,00
✓ Wellness € 52,00
✓ Verrassingsgeschenk € 25,00
✓ Auto Carwash € 20,50
Details volgen na reservering

Nieuw:
Bij uw bezoek op deze dag inbegrepen:
- Autowasbeurt bij [partnernaam]
- Wellness bij [partnernaam]
- Kleine attentie in de galerie

Daarnaast, los van dag-extras:
Tijdens uw bezoek staat koffie of thee voor u klaar.
Bij het gekozen werk hoort een certificaat van echtheid.

Niet in dit blok zetten:
- schilderij als pakketregel
- cheque-waarde als pakketwaarde
- bedragen
- t.w.v.
- details volgen na reservering
- cadeau-iconen
- meeste voordeel
- voordeelvergelijking

15. Cheque-informatie apart houden van extras

De Kunst-Waardecheque blijft zichtbaar als chequevisualisatie op het welkomstscherm en als functioneel detail in de bevestiging.

Gebruik:
Kunst-Waardecheque
Chequenummer: 12345688
Waarde: € 500,—
Geldig tot: [datum]

Niet gebruiken als onderdeel van de extras-lijst:
- Schilderij naar keuze € 500,00
- Waardecheque t.w.v. € 500,-
- Inbegrepen pakketwaarde
- U betaalt niets
- Gratis schilderij

16. Partnerzichtbaarheid corrigeren

Partner/issuer BEDRIJF:
Alleen tonen op persoonlijk welkomstscherm als:

NAMENS BEDRIJF

Niet tonen:
- Aangeboden door BEDRIJF
- partnerlogo in plannerheader
- partner in dagkaarten
- partnerlogomuur
- onze partners
- mede mogelijk gemaakt door

Let op:
De partnernamen van dag-specifieke extras mogen wél bij de betreffende extra staan, mits concreet en functioneel.
Voorbeeld:
Autowasbeurt bij [partnernaam wasstraat]
Koffie of thee met gebak bij [partnernaam horeca]

Geen collectieve partnerpresentatie maken.

17. CTA’s corrigeren

Niet gebruiken:
- Reserveer maandag
- Reserveer vrijdag
- Reserveer zaterdag
- Bevestig uw deal
- Claim
- Verzilver
- Boek uw beleving
- Plan uw middag
- Kies uw dagje

Gebruik:
- Plan uw bezoek
- Kies uw bezoekmoment
- Maak een afspraak

Voor plannerknoppen die nog niet definitief zijn:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 1.

[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 2.

[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA plannerscherm 3.

[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA bevestigingsactie.

[CTA: Voeg toe aan agenda]
Intern: Besluit nodig: exacte CTA na bevestiging.

18. Geen extra plannerstap toevoegen

De extras mogen geen vijfde plannerstap worden.

Planner blijft exact vier stappen:
1. Dag kiezen
2. Tijd kiezen
3. Gegevens
4. Bevestiging

Extras verschijnen alleen:
- klein bij dagkeuze
- als samenvatting bij gekozen dag/tijd
- in afspraakcontrole
- op afspraak bevestigd-scherm
- eventueel in bevestigingsmail/detailblok

Niet maken:
- aparte “extras kiezen”-stap
- pakketkeuzestap
- belevingspakketstap
- partnerselectiestap
- “meer info extras”-pagina in de planner

19. Geen keuze van extras

De klant kiest geen losse extras.
De klant kiest alleen een dag en tijd.

De extras horen bij de gekozen bezoekdag.

Niet toevoegen:
- checkboxes per extra
- toggle “extra belevingspakket: ja/nee”
- upgrade-optie
- keuze voor wellness/carwash/koffie
- mogelijkheid om extras bij te kopen
- vergelijkingstabel tussen dagen

Als eligibility technisch nodig is:
Gebruik intern:
Intern: package_id / chequenummer bepaalt of dag-specifieke extras van toepassing zijn.
Intern: Besluit nodig: eligibility-logica extras.

20. QA-check na correctie

Controleer en rapporteer kort:

Route:
- Persoonlijke QR/link-route start niet direct in planner.
- Automatische chequeherkenning staat vóór het welkomstscherm.
- Persoonlijk welkomstscherm staat vóór planner.
- Geen chequenummer/postcode-invoer in persoonlijke route.
- Geen login of account.

Data:
- Chequenummer 12345688 staat in chequevisualisatie en bevestiging.
- Partner/issuer BEDRIJF staat alleen als “Namens BEDRIJF” op welkomstscherm.
- Naam/e-mail/telefoon zijn placeholders.
- Datum maandag 4 mei 2026 kan voorgeselecteerd zijn.
- Tijd 14:15 kan voorgeselecteerd zijn.
- package_id en hash staan alleen intern.

Planner:
- Planner heeft exact vier stappen: dag, tijd, gegevens, bevestiging.
- Stap 1 toont dag-specifieke extras.
- Stap 1 toont geen bedragen bij extras.
- Stap 1 toont geen pakketvergelijking.
- Stap 1 toont geen “Meeste voordeel”.
- Stap 2 toont tijdsloten zonder urgency.
- Stap 3 toont alleen naam, e-mail en telefoonnummer als invoervelden.
- Stap 4 toont afspraakdetails én de extras van de gekozen dag.
- Afspraak bevestigd-scherm toont de extras van de gekozen dag.

Extras:
- Extras zijn zichtbaar.
- Extras zijn gekoppeld aan bezoekdag.
- Extras zijn feitelijk geformuleerd.
- Extras hebben concrete partnernaam of placeholder met intern besluitlabel.
- Geen eurobedragen bij extras.
- Geen “t.w.v.”.
- Geen “extra cadeaus”.
- Geen “belevingspakket” klantgericht.
- Geen “Details volgen na reservering”.
- Geen cadeau-iconen als voordeelindicator.
- Geen badges.
- Geen voordeelretoriek.

Taal:
- Geen “Aangeboden door BEDRIJF”.
- Geen “Reserveer”.
- Geen “Ontvang”.
- Geen “Meeste voordeel”.
- Geen “verzilveren” als klanttekst.
- Geen kortingstaal.
- Geen voordeeltaal.
- Geen uitje-/belevingstaal.
- Geen urgency.
- Geen nieuwsbrief.
- Geen cross-sell.
- Geen partnerlogomuur.
- Geen € 500 als hero.
- “Bezoek uitsluitend op afspraak” staat in praktische informatie.
- Open besluiten staan alleen als interne QA-labels.