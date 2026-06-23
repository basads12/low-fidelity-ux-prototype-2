Voer een design-update uit op de huidige mobiele en desktop schermen van Galerie De Kunst van Kunst.

Doel:
Maak het ontwerp productiegeschikt, rustiger en fysieker. De site moet voelen als een rustige verificatieplek van een gevestigde galerie sinds 2005. Niet als webshop, niet als actiepagina, niet als reviewsite, niet als luxe/premium merk en niet als dagje-uit-pagina.

Behoud de kernflow:
Homepage → Activeer uw cheque → Persoonlijk welkomstscherm → Planner stap 1 dag kiezen → Planner stap 2 tijd kiezen → Planner stap 3 gegevens → Planner stap 4 bevestiging.

Harde regels:
- Vóór de planner komt altijd het persoonlijk welkomstscherm.
- QR/persoonlijke link mag nooit direct naar de agenda.
- Bij persoonlijke route geen chequenummer/postcode opnieuw vragen.
- Partner is alleen individueel zichtbaar op het persoonlijk welkomstscherm.
- Geen partnerlogomuur, nergens.
- Geen kortingstaal, actietaal, voordeelretoriek, urgency, uitje-taal of webshoptaal.
- Planner blijft functioneel: dag → tijd → gegevens → bevestiging.
- Geen nieuwsbrief, cross-sell, reviewverzoek, “bekijk ook”, badges of schaarste.

DESIGN TOKENS
Gebruik exact:
--background: #FAF8F5
--card: #FFFFFF
--muted: #F2EFEA
--text: #221E1F
--text-muted: #5A544F
--border: #E6E1D9
--primary: #6F172F
--accent: #DB9A4A
--destructive: #8A2A2A

Gebruik Inter als font.
Gebruik JetBrains Mono alleen voor chequenummers.
Geen serif-, script- of display-fonts.
Geen gradients behalve de donkere foto-overlay in de hero.
Geen zware shadows, geen glows.

HERO-AFBEELDING HOMEPAGE
Gebruik de aangeleverde gevel-/galeriefoto als herobeeld of legitimiteitsbeeld.

Belangrijk:
- De foto toont de fysieke galerie/signage en geeft vertrouwen.
- Gebruik geen stockfoto’s.
- Gebruik geen mensen met schilderij.
- Gebruik geen productgrid.
- Gebruik geen AI-achtige of generieke galerievisual als vervanging.
- Als deze afbeelding te laag in resolutie is voor full-width desktop, gebruik hem tijdelijk als placeholder en markeer:
  [BEELD NODIG: hoge resolutie gevelbeeld]
- Voor live: gebruik een scherpe versie van hetzelfde beeld, minimaal breed genoeg voor desktop hero.

Desktop hero:
- Full-width hero, hoogte 680–760px.
- Foto rechts gepositioneerd, zodat de gevel en vlaggen zichtbaar blijven.
- Links ruimte voor tekst.
- Plaats een donkere gradient-overlay over de foto:
  links rgba(34,30,31,0.88)
  midden rgba(34,30,31,0.58)
  rechts rgba(34,30,31,0.05)
- Tekst links in max-width 520px.
- CTA’s onder de tekst.
- Geen € 500 in hero.
- Geen reviewscore in hero.
- Geen sterren in hero.

Mobile hero:
- Hoogte 560–640px.
- Crop foto zodat minimaal één galerie-vlag/signage zichtbaar blijft.
- Overlay sterker maken voor leesbaarheid.
- Tekst onderin of midden-laag.
- CTA’s onder elkaar.
- Geen horizontale overflow.

Hero-copy:
Eyebrow:
BIJ GALERIE DE KUNST VAN KUNST

H1:
Voor wie een Kunst-Waardecheque ontving — uw bezoek aan onze galerie in Hengelo, op uw eigen moment.

Body:
Uw cheque geeft u recht op een werk uit onze galerie. U kiest een dag die u uitkomt. U wordt persoonlijk ontvangen. U kiest zelf een werk dat bij u past.

CTA primair:
Activeer uw cheque

CTA secundair:
Meer over de galerie

CTA-stijl:
- Primair: bordeaux #6F172F, witte tekst.
- Secundair: transparant, witte border op fotohero.
- Geen oranje knopvulling.
- Geen zwarte, groene of standaard conversieknoppen.
- Geen “Bekijk aanbod”.
- Geen “Plan je bezoek”.
- Geen “Ontdek collectie”.
- Geen “Kunst die inspireert”.

LEGITIMITEITSBLOK DIRECT ONDER HERO
Plaats direct onder de hero een rustige trust-row of vier kleine cards:

- Sinds 2005
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- Bezoek uitsluitend op afspraak
- 074 - 291 48 57

Stijl:
- Achtergrond #FFFFFF of #FAF8F5.
- Border-bottom 1px #E6E1D9.
- Geen badges.
- Geen sterren.
- Geen reviewscore.
- Geen partnerlogo’s.
- “Sinds 2005” klein en feitelijk, niet als grote claim.

VERWIJDER ALLE PROTOTYPE-LABELS
Verwijder uit live UI:
- SCHERM x/8
- SECTIE:
- BLOK:
- QA-BLOK
- DUMMYDATA
- ROUTECONTEXT
- interne notities
- “Besluit nodig” als zichtbare bezoekerstekst
- uitleg over wat na submit gebeurt

Besluitnotities mogen alleen als Figma annotation-layer of hidden dev-note blijven.

CTA-CONSISTENTIE
Gebruik deze CTA-lijn:

Homepage:
Activeer uw cheque

Chequeinvoer:
Activeer uw cheque

Persoonlijk welkomstscherm:
Plan uw bezoek

Planner stap 1 dag kiezen:
Kies uw bezoekmoment

Planner stap 2 tijd kiezen:
Kies uw bezoekmoment

Planner stap 3 gegevens:
Bevestig afspraak
Markeer deze als:
[BESLUIT NODIG: CTA stap 3 — voorgesteld definitief label]

Service:
Cheque overdragen

Niet gebruiken:
- Controleer mijn cheque
- Start planning
- Bevestig keuze
- Bekijk aanbod
- Plan je bezoek
- Claim
- Verzilver
- Reserveer
- Plan uw middag
- Boek uw dag
- Kies uw dagje

CHEQUEINVOER
Maak het scherm rustig en compact.

Titel:
Activeer uw cheque

Body:
Vul uw chequenummer en postcode in. Daarna herkent de website uw Kunst-Waardecheque.

Velden:
- Chequenummer
- Postcode

CTA:
Activeer uw cheque

Helpblok:
Lukt het niet? Neem rustig contact met ons op.
074 - 291 48 57

Verwijder:
- “Controleer mijn cheque”
- “chequecode”
- routecontext
- dummydata
- technische uitleg
- Route B-uitleg
- reviews
- partnerlogo’s

PERSOONLIJK WELKOMSTSCHERM
Maak dit scherm sterker, compacter en belangrijker.

Layout:
- Max-width desktop 640px.
- Centrale card.
- Galerie-logo bovenaan.
- Partner alleen hier zichtbaar.
- CTA zichtbaar zonder lang scrollen.

Eyebrow:
NAMENS [PARTNER]

H1:
Welkom [voornaam]. Uw Kunst-Waardecheque is herkend.

Body:
In onze galerie hangen altijd minimaal vijftig werken die volledig binnen uw cheque vallen, in verschillende formaten en stijlen. Valt uw keuze op een ander werk, dan wordt uw cheque daarmee verrekend. Een eventuele meerprijs lichten wij in de galerie rustig toe.

Praktische punten:
- Bezoek op afspraak
- Gemiddeld 60–90 minuten
- Geerdinksweg 2, 7555 DM Hengelo (OV)

CTA:
Plan uw bezoek

Partner:
- Toon alleen de specifieke partner, bijvoorbeeld Warmtestore.
- Partnerlogo klein en rustig.
- Geen partnerlogomuur.
- Geen andere partners.
- Geen “een van onze partners”.

Chequevisualisatie:
- Witte card
- Border 1px #E6E1D9
- Radius 6px
- Bovenaan dun okerlijntje 2px #DB9A4A
- Chequenummer in JetBrains Mono
- Naam ontvanger groot maar rustig
- Waarde € 500,— alleen functioneel in details
- Geldig tot functioneel
- Geen voucherlook
- Geen stippellijn
- Geen knip-icoon
- Geen confetti
- Geen “geactiveerd”
- Geen “gefeliciteerd”

PLANNER
Verwijder het aparte planner-startscherm met “Start planning”.
De planner begint direct met stap 1: dag kiezen.

Stepper:
Dag → Tijd → Gegevens → Bevestiging

Regels:
- Vier schermen, niet meer.
- Geen extra propositie-uitleg.
- Geen partnerlogo’s.
- Geen nieuwsbrief.
- Geen voorkeurvelden.
- Geen collectie-/stijlvragen.
- Geen “nog 1 plek”.
- Geen “populair”.
- Geen badges.
- Geen cross-sell.

Planner stap 1 — Dag kiezen:
Titel:
Kies een dag voor uw bezoek.

Toon alleen dag/datumkeuze.
Toon nog geen tijdsloten.

Dagspecifieke extra mag feitelijk:
Bij uw bezoek op deze dag inbegrepen: koffie of thee met gebak bij Lust Bakkerij & Bistro.

Regels:
- Geen bedragen.
- Geen “gratis”.
- Geen voordeeltaal.
- Geen “meeste voordeel”.
- Geen zichtbare horizontale scrollbar.
- Selected state:
  border #6F172F
  background #F2EFEA
  tekst #221E1F

CTA:
Kies uw bezoekmoment

Planner stap 2 — Tijd kiezen:
Titel:
Kies een tijd.

Toon alleen beschikbare tijdsloten.
Geen schaarste-indicatie.
Geen “meest gekozen”.
Geen “nog 1 plek”.

CTA:
Kies uw bezoekmoment

Planner stap 3 — Gegevens:
Titel:
Vul uw gegevens in voor de persoonlijke ontvangst in de galerie.

Velden:
- Naam
- E-mail
- Telefoonnummer

Bij persoonlijke route:
- Velden vooraf ingevuld waar mogelijk.
- Klant kan corrigeren.
- Geen zichtbare uitleg “[vooraf ingevuld]”.

Privacyregel:
Plaats als kleine functionele regel onder de velden, niet als opvallend blok:

Uw gegevens worden gebruikt om uw afspraak te bevestigen. Afmelden voor partnercommunicatie kan via www.vanons-vooru.nl.

Als volledige privacyverklaring nog niet bestaat:
markeer in annotation:
[BESLUIT NODIG: volledige privacyverklaring publiceren]

CTA:
Bevestig afspraak
Annotation:
[BESLUIT NODIG: CTA stap 3 definitief vastleggen]

Niet toevoegen:
- nieuwsbrief-opt-in
- marketingtoestemming
- akkoord commerciële opvolging
- voorkeur stijl/collectie/kunstenaar
- partnerlogo
- reviews

Planner stap 4 — Bevestiging:
Maak dit scherm als het nog ontbreekt.

Titel:
Uw afspraak is bevestigd.

Toon:
- Dag en datum
- Tijd
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV)
- Parkeren zonder kosten voor de deur
- Gemiddelde duur 60–90 minuten
- Chequenummer
- Eventuele dag-specifieke extra, feitelijk en zonder bedrag

CTA/utility:
Voeg toe aan agenda
Annotation:
[BESLUIT NODIG: CTA na bevestiging]

Niet tonen:
- € 500 als headline
- “u betaalt niets”
- reviewverzoek
- nieuwsbrief
- bekijk ook
- tips-content
- partnerlogo’s
- social share
- “deel uw ervaring”

REVIEWS OP HOMEPAGE
Vervang het reviewfragment met:
- “promotie”
- “actie”
- “voordeel”
- “uitje”
- “dagje”
- “gratis”
- “5 jaar omruilgarantie” als verkoopargument

Gebruik maximaal één sober reviewfragment dat gaat over ontvangst, rust of duidelijkheid.

Stijl:
- Klein citaat
- Italic
- Naam + woonplaats
- Geen sterren
- Geen score
- Geen carousel
- Geen reviewaantal als claim

Reviewpagina mag letterlijke klantwoorden tonen, maar homepage niet gebruiken als plek waar risicowoorden prominent terugkomen.

PRAKTISCHE INFO
Gebruik de nieuwe gevel-/galeriefoto ook lager op de pagina als fysieke legitimiteitslaag als de hero op mobile te zwaar wordt.

Sectie-inhoud:
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- Bezoek uitsluitend op afspraak
- Parkeren zonder kosten voor de deur
- Gemiddeld 60–90 minuten
- 074 - 291 48 57

Geen openingstijden tonen tenzij vastgesteld.
Geen extra vestigingen noemen.

FOOTER
Maak footer volledig maar sober:

- Galerie-logo klein
- Galerie De Kunst van Kunst
- Geerdinksweg 2, 7555 DM Hengelo (OV)
- 074 - 291 48 57
- Voorwaarden
- Contact
- Privacyverklaring alleen als pagina bestaat

Niet tonen:
- nieuwsbrief
- social icons
- partnerlogo’s
- reviewscore
- “onze partners”
- “mede mogelijk gemaakt door”

VERBODEN WOORDEN EN FRAMES
Gebruik nergens in merktekst:
waardebon, voucher, korting, actie, aanbieding, deal, voordeel, profiteer, claim, grijp uw kans, gratis als claim, u betaalt niets, verzilveren, dagje, middag, uitje, beleving, arrangement, premium, luxe, exclusief, curated, ruimere collectie, duurder schilderij, laatste kans, nog maar, snel vol, netwerk van partners, mede mogelijk gemaakt door, bekijk ook, nieuwsbrief, shop nu, koop direct.

Uitzondering:
Deze woorden mogen alleen in letterlijke klantcitaten op de reviewpagina voorkomen, niet in homepagecopy, knoppen, labels of uitlegtekst.

QA VOOR OPLEVERING
Controleer:
1. Is de homepage binnen 3 seconden herkenbaar als rustige verificatieplek?
2. Wordt de nieuwe gevel-/galeriefoto gebruikt als fysieke legitimiteitslaag?
3. Staat € 500 nergens in de homepage-hero?
4. Zijn alle prototype-labels uit de live UI verwijderd?
5. Is “Controleer mijn cheque” vervangen door “Activeer uw cheque”?
6. Is het planner-startscherm verwijderd?
7. Heeft de planner exact vier stappen: dag, tijd, gegevens, bevestiging?
8. Zijn dag en tijd niet meer samengevoegd?
9. Komt het persoonlijk welkomstscherm altijd vóór de planner?
10. Is de partner alleen zichtbaar op het persoonlijk welkomstscherm?
11. Staat er nergens een partnerlogomuur?
12. Is het reviewfragment met “promotie” vervangen?
13. Is de privacyregel klein en functioneel, niet dominant?
14. Is “Bevestig afspraak” gemarkeerd als besluitpunt of formeel vastgelegd?
15. Zijn er geen nieuwsbrief, cross-sell, urgency, badges, sterrenhero of reviewscorehero?
16. Voelt het geheel niet als webshop, actiepagina, premium merk of uitje-site?

Bij twijfel: kies de meest sobere optie.