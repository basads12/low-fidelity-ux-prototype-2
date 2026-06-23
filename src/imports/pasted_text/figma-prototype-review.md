Voer een volledige correctieronde uit op de huidige Figma Make low-fidelity prototype voor De Kunst van Kunst.

Doel:
Maak het prototype geschikt voor UX-review én voorkom dat interne QA-informatie als publieke klantcontent zichtbaar is. Behoud de goede structuur, maar corrigeer flow, planner, reviews, video, bevestiging, copy en interne labels.

Belangrijk:
De website is een rustige verificatieplek, geen verkoopomgeving.
De planner is functioneel, geen propositiepagina.
QR/link gaat nooit direct naar planner.
Vóór planner staat altijd een persoonlijk welkomstscherm.
Planner heeft exact vier stappen:
1. Dag kiezen
2. Tijd kiezen
3. Gegevens
4. Bevestiging

1. Scheid klantinterface en interne QA

Verplaats alle QA-blokken, interne notities, “Besluit nodig”-teksten, DUMMYDATA-labels en verboden-taal-checks uit de normale klantframes.

Nu staan er onder veel schermen zichtbare blokken zoals:
- QA-BLOK: WAT ABSOLUUT NIET MAG
- Besluit nodig: ...
- Intern: ...
- [DUMMYDATA: ...]
- Verboden taal:
- Open besluiten:

Deze mogen niet als klantinterface meelopen.

Maak hiervoor één van deze oplossingen:

Oplossing A:
Plaats alle interne QA-notities in aparte QA-frames naast de klantframes.

Oplossing B:
Maak per scherm een duidelijk gescheiden intern annotatieblok met label:
[INTERN QA — niet publiceren]
en zorg dat dit niet in de normale klantflow staat.

Oplossing C:
Maak een aparte pagina/sectie “Interne QA-notities” buiten de publieke route.

Klantframes mogen alleen klantcontent bevatten.

2. Homepage corrigeren

Behoud:
- primaire CTA: Activeer uw cheque
- secundaire CTA: Meer over de galerie
- rustige hero zonder € 500
- fysieke legitimiteit
- adres
- sinds 2005 klein bij logo
- bezoek uitsluitend op afspraak

Verwijder uit de klantinterface:
- Test: Persoonlijke QR/Link Route
- QR-testknop op homepage
- alle QA-blokken
- zichtbare DUMMYDATA-labels
- zichtbare “Besluit nodig”-labels

Reviewblok:
Vervang de huidige drie reviewfragmenten door maximaal één rustig fragment.

Verwijder:
- kop “Wat anderen ervaren”
- drie reviewkaarten
- alle conceptnamen als Sophie M., Mark van der H., Linda K.
- datums bij conceptreviews
- link “Alle ervaringen op review-dekunstvankunst.nl”
- aparte reviewpagina-link zolang reviews-/ervaringenpagina besluit nodig is

Gebruik:
[Reviewfragment — besluit nodig]

Of, als een placeholder nodig is:
“De uitleg was rustig en duidelijk. We konden op ons gemak rondkijken.”

Geen sterren.
Geen score.
Geen reviewaantal.
Geen carousel.
Geen reviewlabel.
Geen reviewlink.

3. Algemene en QR-planner samenvoegen

De goede plannerstructuur staat nu vooral in de QR-route. Maak deze structuur leidend voor beide routes.

Gebruik één gedeelde plannerlogica voor:
- algemene route na chequeinvoer
- persoonlijke QR/link-route

Planner stap 1 moet worden:

Titel:
Kies een dag voor uw bezoek.

Structuur:
Weekdagselector:
[Maandag] [Vrijdag] [Zaterdag]

Daaronder, afhankelijk van gekozen weekdag:
Kies een maandag.
Beschikbare maandagen:
MA 04 mei
MA 11 mei
MA 18 mei
MA 25 mei
MA 01 jun
MA 08 jun

Onder gekozen datum:
Gekozen datum: maandag 4 mei 2026

Beschikbare tijden voor deze datum:
14:00
14:15
14:30
14:45
15:00
15:15

Belangrijk:
- tijdpreview in stap 1 mag zichtbaar blijven
- tijdclick in stap 1 mag tijd alvast selecteren
- stap 2 blijft verplicht
- stap 2 wordt niet overgeslagen
- afspraak is pas definitief na stap 4

Mobiel:
- weekdagselector horizontaal indien nodig
- datumrail horizontaal scrollbaar
- tijdrail horizontaal scrollbaar
- alleen rails scrollen horizontaal, niet de pagina
- geen publieke tekst “← Scroll →”

Desktop:
- geen horizontale scroll
- datumgrid
- tijdgrid
- eventueel tweekoloms layout: links datums, rechts tijden en extras

4. Preselectie uit QR/link herstellen

In de persoonlijke QR/link-route bevat de testdata:
- selectedDay: maandag 4 mei 2026
- selectedTime: 14:15

Zorg dat Planner stap 1 deze data initieel overneemt:
- geselecteerde datum = maandag 4 mei 2026
- geselecteerde tijd = 14:15

Zorg dat stap 2 daarna toont:
- gekozen dag: maandag 4 mei 2026
- 14:15 geselecteerd

De klant moet datum en tijd kunnen wijzigen.
De afspraak is pas definitief na stap 4.

Voorkom dat Planner stap 1 selectedTime leeg overschrijft wanneer de gebruiker alleen op “Verder” klikt.

5. Extras behouden, maar rustig

Extras blijven zichtbaar in de planner.

Gebruik:

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

Als concrete partnernamen niet vastliggen:
toon placeholders alleen in wireframe of intern QA.
Niet als definitieve klanttekst publiceren.

Niet gebruiken:
- belevingspakket
- extra cadeaus
- cadeau-iconen
- +2 extra
- +3 extra’s
- bedragen
- t.w.v.
- ter waarde van
- meeste voordeel
- ontvang
- gratis
- voordeel
- korting
- pakketvergelijking

6. Algemene planner stap 4 corrigeren

Vervang de huidige algemene bevestigingsstap door een volledige afspraakcontrole.

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
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren: zonder kosten voor de deur
- Gemiddelde duur: 60 tot 90 minuten
- Bezoek uitsluitend op afspraak
- Bezoekersinformatie: maximaal twee bezoekers per cheque, vanaf 12 jaar
- Vragen? 074 - 291 48 57

Toon eventuele dag-extras:
Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

CTA’s:
[CTA: Ga terug]
[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA bevestigingsactie.

Verwijder:
Bevestig en ga verder

7. Algemene afspraakbevestiging corrigeren

Maak algemene AppointmentConfirmed gelijkwaardig aan QR AppointmentConfirmed.

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

Toon eventuele dag-extras:
Bij uw bezoek op deze dag inbegrepen:
- [extra met concrete partnernaam]
- [extra met concrete partnernaam]

Optioneel rustig:
U kunt eventueel een foto van uw interieur meenemen.

CTA:
[CTA: Voeg toe aan agenda]
Intern: Besluit nodig: CTA “Voeg toe aan agenda” en eventuele .ics-oplossing.

Niet toevoegen:
- reviewverzoek
- nieuwsbrief
- bekijk ook
- nieuwe werken
- partneroverzicht
- commerciële opvolging
- extra aanbiedingen
- belevingspakketinformatie
- bedragen bij extras

8. Telefoonnotatie corrigeren

Vervang overal:

074 - 291 48 57

Door exact:

074 - 291 48 57

Controleer:
- homepage
- chequeinvoer
- welkomstscherm
- plannerbevestiging
- afspraak bevestigd
- QR-route
- AboutGallery
- bevestigingsmailreferentie
- interne QA indien zichtbaar

9. Afspraaktaal corrigeren

Vervang overal:

Bezoek op afspraak

Door:

Bezoek uitsluitend op afspraak

Gebruik geen publieke openingstijden.

Als openingstijden nodig lijken:
alleen intern:
Intern: openingstijden niet publiek tonen; klantgericht alleen “Bezoek uitsluitend op afspraak”.

10. Privacytekst in gegevensstap corrigeren

Verwijder uit klantgerichte plannertekst:

Korte verwijzing naar voorwaardenpagina.
Afmelding via www.vanons-vooru.nl voor partnercommunicatie.

Gebruik alleen:

Intern: Besluit nodig: privacytekst.

Of in wireframe:
[Privacytekst — besluit nodig]

Geen voorwaardenpagina in de core flow verwerken.
Geen publieke afmeldlink in planner zolang privacy/voorwaarden niet definitief zijn.

11. Dummydata corrigeren

Gebruik in klantframes geen echte of echt lijkende persoonsgegevens.

Vervang:
- Jan
- Jan de Vries
- Sophie M.
- Mark van der H.
- Linda K.

Door:
- [voornaam]
- [naam]
- [reviewfragment — besluit nodig]

Gebruik echte reviewnamen alleen als reviewdata feitelijk is goedgekeurd.

Gebruik Warmtestore alleen als expliciete voorbeeldpartner als dat als demo-data is bedoeld.
Anders:
[partner]

12. “Meer over de galerie” behouden, maar video corrigeren

Behoud de pagina:
Meer over de galerie / Uw bezoek aan Galerie De Kunst van Kunst

Behoud:
- hero
- De galerie in Hengelo
- Wat u kunt verwachten
- Impressie van werken in de galerie
- Formaten en verhoudingen
- Uw keuze in de galerie
- Praktisch
- Hoe uw afspraakroute werkt
- Voor uw bezoek

Maar corrigeer de video:

Verwijder de echte Vimeo-embed uit de klantflow zolang video/drone/hosting/privacy nog besluit nodig zijn.

Vervang door:

[Video-placeholder: rustige locatievideo van Galerie De Kunst van Kunst]

Caption:
Locatiebeeld van de galerie in Hengelo.

Interne QA apart:
Intern: Besluit nodig: definitieve locatievideo.
Intern: Besluit nodig: dronebeeld ja/nee.
Intern: Besluit nodig: toestemming/privacy drone-opname.
Intern: Besluit nodig: video-hosting.
Intern: Besluit nodig: posterframe.
Intern: Besluit nodig: fallback-afbeelding.
Intern: Besluit nodig: autoplaybeleid; voorkeur geen autoplay met geluid.

Geen echte video embedden totdat dit besloten is.

13. Formaten en exacte maten corrigeren

Behoud de sectie:
Formaten en verhoudingen

Behoud:
- Staand werk
- Liggend werk
- Langwerpig werk
- visuele schaalindicatie zonder centimeters

Verwijder exacte maten uit klantframes:
- 40 × 50 cm
- 30 × 60 cm
- alle exacte cm-maten
- alle maatbereiken

Als deze maten alleen intern nodig zijn:
plaats ze in aparte interne QA-frame, niet in de publieke scrollpagina.

Publieke tekst blijft:
In de galerie hangen werken in verschillende formaten en verhoudingen. De voorbeelden hieronder geven een indruk van schaal en presentatie. De exacte afmetingen ziet u bij het werk in de galerie.

14. QR/link edge-states toevoegen

Voeg aparte wireframes toe voor:

- Ongeldige link/QR
- Verlopen cheque
- Cheque al gebruikt
- Afspraak al gepland

Algemene regels:
- rustig
- niet beschuldigend
- geen urgency
- geen automatische coulance-belofte
- service-optie zichtbaar
- telefoon: 074 - 291 48 57

Voor elk scherm:
Intern: Besluit nodig: exacte errorcopy.
Intern: Besluit nodig: procedure.

15. Geen publieke testknoppen

Verwijder van homepage:
Test: Persoonlijke QR/Link Route

Maak QR/link-route alleen bereikbaar als interne prototype-route of apart QA-startframe:

[INTERN QA START — persoonlijke QR/link-route]

Niet tonen als klant-CTA op homepage.

16. CTA’s en labels

Gebruik klantgericht:
- Activeer uw cheque
- Plan uw bezoek
- Kies uw bezoekmoment
- Maak een afspraak

Voor plannerknoppen:
[CTA: Verder]
Intern: Besluit nodig: exacte CTA plannerscherm 1/2.

[CTA: Bevestig afspraak]
Intern: Besluit nodig: exacte CTA plannerscherm 3/4.

[CTA: Voeg toe aan agenda]
Intern: Besluit nodig: CTA na bevestiging en .ics-oplossing.

Verwijder:
- Bevestig en ga verder
- Reserveer
- Verzilver
- Claim
- Boek
- Plan uw middag
- Kies uw dagje

17. QA-check na correctie

Controleer en rapporteer kort:

Publieke klantframes:
- Geen QA-blokken zichtbaar in de klantflow.
- Geen “Besluit nodig” zichtbaar als klanttekst.
- Geen DUMMYDATA-labels zichtbaar als klanttekst.
- Geen testknop QR/link op homepage.

Homepage:
- Primaire CTA “Activeer uw cheque”.
- Secundaire CTA “Meer over de galerie”.
- Maximaal één rustig reviewfragment.
- Geen reviewscore.
- Geen reviewlink zolang reviews-/ervaringenpagina besluit nodig is.
- Geen € 500 in hero.
- Geen partnerlogomuur.
- Geen openingstijden publiek.

Meer over de galerie:
- Video is placeholder, geen echte embed zolang besluit nodig.
- Impressie van werken aanwezig.
- Formaten en verhoudingen aanwezig.
- Geen exacte maten publiek.
- Geen productgrid.
- Geen collectiecatalogus.
- CTA blijft “Activeer uw cheque”.
- Pagina leidt niet direct naar planner.

Planner:
- Algemene route en QR/link-route gebruiken dezelfde plannerlogica.
- Planner heeft exact vier stappen.
- Stap 1 toont weekdagselector, meerdere datums, tijdenpreview en dag-extras.
- Stap 2 blijft bestaan en toont gekozen/voorgeselecteerde tijd.
- Stap 3 toont alleen naam, e-mail, telefoonnummer als invoervelden.
- Stap 4 toont volledige afspraakcontrole.
- QR/link datum/tijd worden correct voorgeselecteerd en blijven wijzigbaar.

Extras:
- Extras zichtbaar.
- Extras dag-specifiek.
- Geen bedragen.
- Geen t.w.v.
- Geen cadeau-iconen.
- Geen “meeste voordeel”.
- Geen “belevingspakket” klantgericht.

Bevestiging:
- Algemene en QR-bevestiging tonen dezelfde vaste praktische gegevens.
- Telefoon overal: 074 - 291 48 57.
- “Bezoek uitsluitend op afspraak” staat correct.
- Bezoekersinformatie staat correct.
- Geen reviewverzoek.
- Geen nieuwsbrief.
- Geen cross-sell.
- Geen bekijk-ook.

Edge-states:
- Ongeldige link/QR aanwezig.
- Verlopen cheque aanwezig.
- Cheque al gebruikt aanwezig.
- Afspraak al gepland aanwezig.
- Service-optie met telefoon zichtbaar.