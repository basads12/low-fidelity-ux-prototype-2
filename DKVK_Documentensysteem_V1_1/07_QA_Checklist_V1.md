# QA-checklist V1 — De Kunst van Kunst

**Status**: Publicatiefilter voor alle uitingen.

---

Onderwerp
Invulling
Documentnaam
QA-checklist V1 — De Kunst van Kunst
Doel
Vast publicatiefilter voor elke uiting, pagina, plannerstap, mail, brief, script, serviceflow en AI-output vóór livegang
Gebruikers
QA-controle, copywriters, marketeers, websitebouwers, plannerbouwers, e-mailbouwers, drukwerkproductie, partners, adviseurs, directie, AI-copy-controle
Gebruikt voor
Afkeuren van verkeerde frames, blacklist-hits, feitelijke fouten, ongedragen claims; markeren van bronconflicten en open beslispunten
Niet bedoeld voor
Strategie, copywriting, UX-ontwerp, technische architectuur
Bronnen
Positionerings-DNA V4.1; Fact Sheet V1.1 (en V1 als historische cross-check); Message Rules & Copy Blacklist V1.1; Website & Planner Blueprint V1.1; Operationeel Script V1; Kanaal- en Copyplaybook V1
Status
V1 (april 2026); leidend bij conflict is V4.1, daarna Fact Sheet V1.1, daarna Message Rules V1.1, daarna Blueprint V1.1, daarna Operationeel Script V1, daarna Copyplaybook V1

2. QA-principe
Deze checklist is een afkeurfilter, geen inspiratiedocument. Eén zware fout volstaat om publicatie tegen te houden. Meerdere kleine afwijkingen kunnen samen ook leiden tot afkeur, omdat het concept structureel breekt door cumulatie van kleine signalen — niet door één grote fout. Bij twijfel volgt geen publicatie maar een besluit. Open beslispunten worden nooit als feit gepubliceerd.
De checklist geldt voor alle uitingen: copy, design, UX, planner, e-mail, drukwerk, galeriegesprek, adviseursinstructies, servicepagina's, error states, AI-gegenereerde output. Een uiting komt pas door de filter als alle relevante secties met "ja" of "Goedgekeurd" beantwoord kunnen worden.
De controle gebeurt vóór livegang, niet erna. Wat eenmaal gepubliceerd is, drukt op de positionering — corrigeren is duurder dan eerst toetsen. De QA-controle is een eigenstandige stap in elk uitingsproces, gescheiden van schrijven en bouwen.

3. Beslisregels
Uitkomst
Betekenis
Actie
Goedgekeurd
Geen fouten gevonden
Mag door naar publicatie of bouw
Goedgekeurd met correctie
Kleine feitelijke of taalkundige correctie nodig
Corrigeren en opnieuw kort controleren
Afgekeurd
Eén of meer harde failcriteria geraakt
Niet publiceren; herschrijven of opnieuw ontwerpen
Besluit nodig
Bron ontbreekt of conflict bestaat
Directie / eigenaar moet besluit nemen vóór publicatie
Buiten scope
Niet relevant voor deze checklist
Verwijzen naar juiste document
Harde regels:
	•	Letterlijke hit op de copy-blacklist (Message Rules V1.1 §4) = altijd afkeuren.
	•	Activatie van een verkeerd frame (V4.1 §6, vijf frames) = altijd afkeuren.
	•	Feitelijk conflict tussen uiting en Fact Sheet V1.1 = besluit nodig, niet publiceren.
	•	Open beslispunt mag niet als feit worden gepubliceerd.
	•	Een fout kan niet worden "gladgestreken" door een goede zin elders in dezelfde uiting.

4. Master fail-test — tien criteria
Nr.
Criterium
QA-vraag
Goedgekeurd als
Fail als
Actie bij fail
1
Categorie-eenduidigheid
Activeert de uiting de juiste categorie (galerie waar men met Kunst-Waardecheque een origineel kiest)?
Categorie is helder en eenduidig
Categorie is dubbelzinnig of activeert klassieke galerie / waardebon / actie / dagje uit / interieurproduct
S2 — herschrijven
2
Partnerzichtbaarheid
Is partner uitsluitend individueel zichtbaar?
Alleen de eigen partner van de klant zichtbaar (op brief, mail, welkomstscherm)
Logomuur, partnerlijst, "mede mogelijk gemaakt door", "netwerk van partnerbedrijven", meervoudige verwijzing, andere partners zichtbaar
S1 — afkeuren
3
€ 500-gebruik
Wordt € 500 als bewijs gebruikt, niet als verkoopclaim?
Op cheque, persoonlijke chequevisualisatie of bevestigingspagina prominent; in mails klein-functioneel in details-blok
Als hero-claim, USP, slogan, hero-tekst of mail-onderwerp ("€ 500 voor u", "Uw € 500 cadeau")
S2 — herschrijven
4
Korting-taal
Is alle korting-taal verwijderd?
Geen percentages, geen "korting", geen "voordeel", geen "deal", geen "extra korting", geen "u betaalt niets"
Eén kortingstaal-fragment of percentage publiek
S1 — afkeuren
5
Uitje-frame
Is alle uitje- en belevingstaal verwijderd?
Geen "middag", "dagje weg", "uitje", "beleving", "arrangement", "ontdekken", "ervaren", "verwennen", "trakteren"
Eén woord uit dit cluster in publieke uiting
S1 — afkeuren
6
Urgency
Is alle urgency- en schaarste-taal verwijderd?
Datum als feit zonder druk; geen visuele timers/badges
"Nog maar", "laatste kans", "verloopt binnen", "snel", countdown, "beperkte tijd", "alleen deze maand"
S1 — afkeuren
7
Klant-als-reclame-instrument
Wordt de klant nergens als reclamekanaal gepositioneerd?
Geen verzoek, suggestie of toon die klant tot drager van reclame maakt
"Mond-tot-mond reclame", "blikvanger", "positief onder de aandacht", "deel uw ervaring", "vertel het verder", referral verpakt als dankbaarheid
S1 — afkeuren
8
Legacy-blacklist
Komen geen woorden uit de complete blacklist (Message Rules V1.1 §4) voor?
Geen letterlijke hit
Eén letterlijke hit op blacklist
S1 — afkeuren
9
Drie-seconden-categorie
Maakt de uiting binnen drie seconden duidelijk dat dit géén klassieke galerie / waardebon / actie / dagje uit is?
Categorie is binnen 3 seconden helder
Drie-seconden-test wijst de verkeerde categorie aan, of laat het ambigu
S2 — herschrijven
10
Stilte-compatibiliteit
Past de uiting binnen de regel "geen commerciële opvolging na aankoop"?
Functioneel (omruilen, bezorging, afspraak wijzigen) of vóór-aankoopuiting zonder retentielogica
Aftercare-mail, nieuwsbrief, reviewverzoek per mail, tweede-werk-prompt, retargeting, retentie-sequence
S1 — afkeuren
Hard: één fail = niet publiceren tot correctie. Meerdere "Goedgekeurd met correctie"-meldingen op één uiting = behandelen als afkeur.

5. Verkeerde-frame check
Frame
Signalen die dit frame activeren
Fail als
Correcte richting
1. Klassieke galerie voor kenners
Kunstenaarsnamen prominent; "vernissage", "openingsavond", "tentoonstellingsperiode", "kunstliefhebber", "kunstkenner", "curated", "stijlperiode" als framing; salonpresentatie
Eén signaal voldoende
"Galerie" (zonder museumtaal); "werk", "schilderij", "collectie" rustig; klant centraal, niet kunstenaar
2. Waardebon / kortingsactie
"Waardebon", "voucher", "coupon", "bon", "tegoed"; percentages; "actie", "aanbieding", "deal", "promo", "korting", "verzilveren"; "u betaalt niets" als claim
Eén signaal voldoende
"Kunst-Waardecheque" (volledig, met koppelteken); "uw cheque wordt verrekend"; feitelijke taal
3. Commerciële funnel / CRM
Nieuwsbrief-opt-in, abandoned-cart-mails, countdown, badges, "claim uw", "bekijk ook", "meest gekozen", "100% tevredenheidsgarantie", "bekroond", "award-winning"; aftercare-mail; retentie-sequence
Eén signaal voldoende
Rustige feitelijke mededeling; één duidelijke CTA in merkkleur; functionele service
4. Dagje uit / beleving
"Middag", "dagje", "dagje weg", "dagje uit", "uitje", "beleving", "belevingspakket" user-facing, "arrangement", "ontdekken", "ervaren", "beleven", "verwennen", "trakteren", "Plan uw middag"
Eén signaal voldoende
"Uw bezoek", "galeriebezoek", "Plan uw bezoek", "Kies uw bezoekmoment"
5. Interieurproduct / decoratieconcept
Vergelijking met woonwinkels, posters of prints; "iets aan de muur" als hoofdframe; productrasters als hoofdstructuur; webshopgevoel
Eén signaal voldoende
Origineel handgeschilderd werk met certificaat als kerneigenschap; klant kiest in galerie op afspraak

6. Harde feiten-check
Feit
Moet exact zo zijn
Fail als
Officiële naam galerie
Galerie De Kunst van Kunst (altijd volledig)
Afkortingen, varianten, "DKvK", "De Kunst" alleen
Officiële naam cheque
Kunst-Waardecheque (koppelteken, K en W kapitaal)
"Kunst Waardecheque", "kunstwaardecheque", "voucher", "waardebon", "coupon"
Waarde cheque
€ 500,— (exact deze notatie)
"500 euro", "€500", "€ 500 (zonder ,—)", "vijfhonderd euro"
Geldigheidsduur
3 maanden vanaf uitgiftedatum
Andere termijn
Galerieadres
Geerdinksweg 2, 7555 DM Hengelo (OV)
Onvolledig; afwijkende postcode; afwijkende plaatsaanduiding
Telefoonnummer
074 - 291 48 57
Andere notatie / nummer
Website
dekunstvankunst.nl
Andere variant
Aantal werken volledig binnen cheque
Minimaal 50, altijd beschikbaar; verschillende formaten en stijlen
Lager getal; specifieke maten publiek
Certificaat
Standaard inbegrepen bij elk werk, ook Route A
"Exclusief", "extra", "alleen bij...", "tegen meerprijs"
Overdraagbaarheid
Overdraagbaar, niet verkoopbaar
"Niet overdraagbaar"; "verkoopbaar"
Inwisselbaar voor geld
Nee
Suggereren dat het kan
Maximaal aantal bezoekers
2 per cheque, vanaf 12 jaar
Hoger getal zonder besluit; geen leeftijdsgrens
Bezoek
Uitsluitend op afspraak
Inloop
Persoonlijk welkomstscherm vóór planner
Altijd, in QR-route, link-route en algemene route
Directe route QR/link → agenda
Route A
Werken die volledig binnen de cheque vallen
"Basiscollectie", "instapwerken", "goedkope selectie"
Route B
Ander werk buiten deze selectie; cheque wordt verrekend met galerieprijs
"Ruimere collectie", "duurder schilderij", "upgrade", "korting"
Geen commerciële opvolging na aankoop
Geen aftercare-mail, geen nieuwsbrief, geen reviewmail, geen tweede-werk-prompt
Een van deze elementen aanwezig
Bezoekduur
Gemiddeld 60 tot 90 minuten
"Een middag", "een hele dag", "uitje van een dag"
Galerie bestaat sinds
2005 (alleen bij logo, niet als claim)
"Sinds 2005" als hero-claim
Reviewscore / aantal
4,4 / 1.683 (intern; publiek gebruik = besluit nodig)
4,5 / 1700+ als opgehoogd cijfer
Conflict-regel: bij conflict tussen uiting en Fact Sheet V1.1 → besluit nodig, niet publiceren. Bij conflict tussen Fact Sheet V1.1 en V4.1 → V4.1 leidend.

7. Copy-blacklist check
Cluster
Afkeuren bij aanwezigheid van
Veilige richting
1. Actie / korting / voordeel
actie, aanbieding, deal, promo, korting, kortingscoupon, 25 tot 50 procent korting, extra korting, profiteer, grijp uw kans, pak uw voordeel, meeste voordeel, maximaal voordeel, meer voordeel
"Uw Kunst-Waardecheque"; "uw cheque wordt verrekend"; neutrale feitelijke taal
2. Waardebon / voucher / ruil
waardebon, voucher, verzilveren (in klantcommunicatie), inwisselen (in klantcommunicatie), weggeefactie
"Kunst-Waardecheque"; "Activeer uw cheque"; "gebruiken"; "uitvoering van de cheque"
3. Uitje / beleving / arrangement
middag, dagje, dagje weg, dagje uit, gezellig dagje, uitje, beleving, belevingspakket (user-facing), arrangement, ontdekken, ervaren, beleven, verwennen, trakteren
"Uw bezoek", "galeriebezoek", "Plan uw bezoek", "Kies uw bezoekmoment"
4. Luxe / exclusiviteit / premium
exclusief, speciaal voor u, alleen voor u, premium, luxe, high-end, curated, voor kunstliefhebbers, voor fijnproevers, voor de bewuste klant
"Voor wie een Kunst-Waardecheque ontving"; "persoonlijk ontvangen"; neutrale formuleringen
5. Urgency / tijdsdruk
laatste kans, nog maar, verloopt binnen, opschieten, snel, beperkte tijd, momenten kunnen snel vollopen, alleen deze maand, tijdelijk
"Uw cheque is nog geldig tot [datum]"; feitelijke mededeling
6. Collectieve partnercommunicatie
mede mogelijk gemaakt door, gezamenlijke actie, ondersteund door een groot aantal bedrijven, netwerk van partnerbedrijven, in samenwerking met (meervoud), ondersteunende bedrijven
"Namens [partner]"; alleen specifieke partnerlogo
7. Klant als reclame-instrument
mond-tot-mond reclame, positief onder de aandacht, blikvanger voor ons bedrijf, deel uw ervaring, vertel het verder, laat anderen weten
Persoonlijke afsluiting zonder verwachting van tegenprestatie
8. E-commerce / CRM / funneltaal
abandoned cart, verzilveren (e-commerce-register), countdown-timers, badges, conversieschreeuwende knoppen, nieuwsbrief inschrijven, volg ons, claim uw, bekijk ook, meest gekozen, top-verkocht, 100 procent tevredenheidsgarantie, bekroond, award-winning
Rustige feitelijke mededeling; één duidelijke CTA in merkkleur
9. Klassieke galerie / kunstkennerstaal
kunstliefhebber, kunstkenner, curated, openingsavond, vernissage, tentoonstellingsperiode, stijlperiode als framing, kunstenaarsnamen als hoofdelement
"Galerie", "werk", "schilderij", "collectie" zonder museumtaal
10. Route B als upsell / ruimere collectie
ruimere collectie, uitgebreidere collectie, hogere galerieprijs (publieke frase), duurder schilderij, duurder werk, premium-collectie, top-collectie, upgrade
"Ander werk", "andere werken in de galerie", "buiten deze selectie", "eventuele meerprijs"
11. Gratis-claims
gratis, gratis cadeau, gratis extra's, tijdelijk gratis extra's, gratis meegenomen, u betaalt niets (als hoofdclaim), meer dan gratis
"Inbegrepen", "hoort bij uw bezoek", feitelijke vermelding
12. Marketing- / promotietaal
uniek (als lege claim), bijzonder (als marketingtaal), mooiste, allerbeste, meest gekozen, exclusief aanbod, onmisbaar, onvergetelijk
Feitelijke beschrijving; concrete woorden
Letterlijke hit op de copy-blacklist = automatisch afkeuren.
Specifieke legacy-zinnen die nooit live mogen (Message Rules V1.1 §4):
	•	"Valt uw keuze op een duurder schilderij, dan ontvangt u op de meerprijs 25 tot 50% extra korting"
	•	"Mond tot mond reclame van tevreden klanten is voor ons altijd de beste reclame"
	•	"Tijdens het omzetten van het automatische herinneringprogramma..."
	•	"Verrassend genoeg nog geen gebruik van gemaakt"
	•	"Vrijblijvend • persoonlijk advies • geen verplichtingen"
	•	"U betaalt niets voor het schilderij tot € 500"
	•	"Gezellig dagje weg met leuke aangeboden extra's"
	•	"100 procent tevredenheidsgarantie"
	•	"Speciaal voor u" / "alleen voor u"
	•	"Plan uw middag" als CTA
	•	"O.A. DE ONDERSTAANDE BEDRIJVEN HEBBEN DE KUNST-WAARDECHEQUE MEDE MOGELIJK GEMAAKT"

8. CTA-check
Context
Toegestane CTA
Verboden CTA
Besluit nodig
Homepage
Activeer uw cheque
Reserveren / Reserveer uw afspraak (niet als primaire CTA); Verzilver uw voucher; Plan uw middag; Boek uw beleving; Profiteer nu; Grijp uw kans; Shop nu; Koop direct
"Meer over de galerie" als secundaire CTA
Chequeinvoer
Activeer uw cheque
Verzilver uw voucher; Claim uw cheque
—
Persoonlijk welkomstscherm
Plan uw bezoek; Kies uw bezoekmoment
Plan uw middag; Reserveer uw middag; Boek uw dag; Kies uw dagje; Boek uw beleving
—
Planner — dag kiezen
—
Plan uw middag
"Verder" / "Volgende stap" — exact niet vastgelegd
Planner — tijd kiezen
—
"Nog 1 plek" als CTA-accent
"Verder" / "Volgende stap" — exact niet vastgelegd
Planner — gegevens
— (alternatieven uit Fact Sheet V1.1: Plan uw bezoek / Kies uw bezoekmoment / Maak een afspraak)
Bevestig uw deal; Claim nu
"Bevestig afspraak" — exact niet vastgelegd
Planner — bevestiging
—
"Bekijk alvast"; "Deel met vrienden"
"Voeg toe aan agenda" — exact niet vastgelegd
Servicepagina
Cheque overdragen (waar van toepassing)
"Geef uw cheque weg"; cross-sell-CTA's
Overige service-CTA's per flow — niet vastgelegd
Reviews / ervaringen (indien gebouwd)
—
"Bekijk testimonials"; "Lees klantrecensies"
"Lees reviews" / "Bekijk ervaringen" — niet vastgelegd
Contact
—
—
Niet van toepassing
Hard: CTA niet in bron = besluit nodig vóór bouw. Niet zelf bedenken; niet uit andere webshops kopiëren.

9. Partnercommunicatie-check
Controlepunt
Goedgekeurd als
Fail als
Partner is alleen individueel zichtbaar
Uitsluitend de eigen partner van de klant
Andere partners zichtbaar; "een van onze partners"; meervoudige verwijzing
Brief toont alleen specifieke partner
Alleen het logo van de cheque-verstrekkende partner; partner-briefpapier; partner-handtekening
Logobalk; "Onze partners"-rij
Mail komt uit partnercontext
Afzender naambedrijf@vanons-vooru.nl met partner-branding in header
Galerie als afzender; algemene noreply
Cheque toont alleen specifieke partner
Logo eigen partner
Andere partnerlogo's; verwijzing naar andere partners
Welkomstscherm toont alleen specifieke partner
Logo en naam van de eigen partner; "Namens [partner]"
"Een van onze partners"; meerdere partners
Homepage toont geen partnerlogo
Geen partnerlogo aanwezig
Eén of meer partnerlogo's, ook individueel
Planner toont geen partnerlogo
Geen partnerlogo aanwezig
Eén of meer partnerlogo's
Voorwaardenpagina
Sobere rolverdeling: "De cheque is verstrekt door het bedrijf dat op uw cheque staat vermeld. Galerie De Kunst van Kunst verzorgt het galeriebezoek en de uitvoering van de cheque."
"Netwerk van partnerbedrijven"; lijst met partnernamen; logomuur
Aantal partners noemen
Niet noemen in klantcommunicatie
"Wij werken met X bedrijven"; "49 partners"; getal genoemd
Galerie-aankomst (mondeling)
Korte mondelinge verwijzing toegestaan: "Uw cheque van [partner] staat genoteerd" — Operationeel Script V1 §7
Partner-branding fysiek in galerie zichtbaar; herhaaldelijk noemen
Afscheid (mondeling)
Korte partnerverwijzing toegestaan: "Mogelijk gemaakt door [partner]" — Operationeel Script V1 §15, §16
Doorverwijzing als commercieel vervolg ("Denk aan ons bij..."); "Onze andere partners maken dit ook mogelijk"
"Mede mogelijk gemaakt door"
Niet aanwezig
Aanwezig in welke vorm dan ook
"Gezamenlijke actie"
Niet aanwezig
Aanwezig in welke vorm dan ook
"Netwerk van partnerbedrijven"
Niet aanwezig (ook niet op voorwaardenpagina)
Aanwezig in welke vorm dan ook

10. Website-check
Onderdeel
Goedgekeurd als
Fail als
Homepage — categorie binnen 3 sec
Galerie waar men met Kunst-Waardecheque een origineel kiest, op afspraak
Klassieke galerie / waardebon / actie / dagje uit / interieurproduct
Hero
Rustige feitelijke welkomstregel
€ 500 in hero; "u betaalt niets"; partnerlogomuur; dame-met-schilderij-stockfoto; GIF; "100% tevredenheidsgarantie"; urgency; "8 verbonden kunstenaars"
Reviewblok / legitimiteitsblok
Reviewfragmenten met citaat, naam, woonplaats, datum (terloops); fysieke legitimiteit (adres, sinds 2005 bij logo)
Reviewscore prominent als hoofdclaim zonder besluit; reviewscore opwaarts afgerond (4,5 / 1700+); jubel-curatie alleen 5★; "100% tevredenheid"-claim
Hoe-het-werkt
Drie rustige stappen (cheque → bezoek plannen → werk kiezen)
Kortingsuitleg; Route B als voordeel; percentages; kunstwereldtaal
Cheque-uitleg
Publieke omschrijving uit Fact Sheet V1.1 §2; "Als dank voor uw vertrouwen in [partner]" of "verstrekt door het bedrijf dat op uw cheque staat"
"Erkenningsgebaar" als publieke merkmond; exacte maten; percentages; "ruimere collectie"; "u betaalt niets"
Praktische informatie
Adres, telefoon, sinds 2005 (bij logo), bezoek op afspraak, parkeren zonder kosten
Openingstijden zonder besluit; nieuwsbrief-inschrijfformulier
Footer
Adres, telefoon, link voorwaarden, link contact
Logomuur partners; nieuwsbrief-prompt; social-share-icons zonder besluit
FAQ
Feitelijk; per vraag binnen Fact Sheet V1.1; geen ongedragen claims
Marketing-toon; kortingstaal; voucher-taal; uitje-taal; "papieren cheque meenemen" als definitieve instructie
Voorwaardenpagina
Sobere rolverdeling partner/galerie; juridische feiten
"Netwerk van partnerbedrijven"; partnerlijst; "in samenwerking met"; logomuur; kortingstaal
Servicepagina
Functioneel; per flow procedure (besluit nodig)
Cross-sell; nieuwe werken tonen; "bekijk ook"; nieuwsbrief; retentie-flow
Reviews / ervaringen-pagina
Optioneel — alleen na expliciet besluit; reviewfragmenten met citaat, naam, woonplaats; verwijzing naar reviewsite
Score als hero; sterrenfiltering; partnerfiltering; curatie alleen 5★; "100% tevredenheid"-claim
Contactpagina
Adres, telefoon, e-mail (Niet vastgelegd), openingstijden (besluit nodig)
Marketing-toon; "bekijk ook"-blokken
Webshopgevoel
Geen productrasters als hoofdstructuur; geen "voeg toe"-taal; geen prijzen prominent
Productgrid als kerncontainer; e-commerce-codes
GIF / stockfoto
Geen GIF; geen stockfotografie; alleen reële beelden
GIF met model; dame-met-schilderij-stockfoto; lifestyle-stockfoto
Exacte maten publiek
Niet aanwezig — "verschillende formaten en stijlen"
Eén exacte maat genoemd publiek (40×50, 50×40, 60×80)
"Ruimere collectie"
Niet aanwezig
"Ruimere collectie", "uitgebreidere collectie" gebruikt
"Erkenningsgebaar"
Niet als publieke merkmond
"Erkenningsgebaar" als hero, USP, kop of merkclaim publiek

11. Planner-check
Planneronderdeel
Goedgekeurd als
Fail als
QR-route
QR scan → automatische herkenning → persoonlijk welkomstscherm → planner
QR direct naar agenda; chequenummer/postcode opnieuw vragen
Persoonlijke link-route
Klik → automatische herkenning → persoonlijk welkomstscherm → planner
Link direct naar agenda; chequenummer/postcode opnieuw vragen
Algemene website-route
"Activeer uw cheque" → chequeinvoer (chequenummer + postcode) → persoonlijk welkomstscherm → planner
Agenda direct na chequeinvoer zonder welkomstscherm
Chequeinvoer
Velden: chequenummer + postcode; één primaire CTA "Activeer uw cheque"; rustige foutmelding
Verzilver-taal; nieuwsbrief-opt-in; pre-fill-aanbieding
Persoonlijk welkomstscherm
"Welkom [voornaam]. Uw Kunst-Waardecheque is herkend." (Copyplaybook §3); partner-naam individueel; chequevisualisatie; Route A/B als structuur; CTA "Plan uw bezoek"
Celebratie-taal "Gefeliciteerd, uw cheque is geactiveerd"; € 500 als hero; percentages; andere partners; exacte maten; "ruimere collectie"
Dag kiezen
Beschikbare dagen rustig; eventuele extras feitelijk met partnernaam zonder bedragen
"Plan uw middag"; bedragen extras; "meeste voordeel"; "rustigste dag" tenzij feitelijk; urgency; badges
Tijd kiezen
Beschikbare tijdsloten rustig
"Nog 1 plek"; countdown; "populairste tijd"; e-commerce-taal
Gegevens
Naam, e-mail, telefoonnummer; persoonlijke route vooraf ingevuld
Marketing-opt-in; nieuwsbrief-opt-in; voorkeur stijl/collectie; voorkeur kunstenaar
Bevestiging
Dag, tijd, adres, parkeren, duur (60–90 min), chequenummer, eventuele extras met partnernaam zonder bedragen
€ 500 als hero; "u betaalt niets"; reviewverzoek; "bekijk ook"; commerciële teaser
Bevestigingsmail
Functioneel; één primaire CTA; partnerafzender klopt
Aftercare-marketing; nieuwsbrief-prompt; reviewverzoek per mail; tips-content als push
Datumbevestigingsmail
Maximaal één, één dag ervoor (Fact Sheet V1.1 §6); zelfde stijl; geen nieuwe info
Twee of meer; nieuwe content; cross-sell

12. Route A / Route B-check
Onderdeel
Goedgekeurd als
Fail als
Route A definitie
Werken die volledig binnen de cheque vallen
"Basiscollectie"; "instapwerken"; "goedkope selectie"
Aantal werken Route A
Minimaal 50, altijd beschikbaar
Lager getal; getal niet genoemd; "tot 50"; "ongeveer 50"
Verschillende formaten en stijlen
Aanwezig in publieke uiting
Exacte maten genoemd publiek (40×50, 50×40, 60×80)
Route A-toon
Volwaardig en gelijkwaardig aan Route B
Route A geframed als secundair, basis of inferieur
Route B definitie
Ander werk buiten deze selectie; cheque wordt verrekend met galerieprijs
"Ruimere collectie"; "uitgebreidere collectie"; "duurder werk"; "upgrade"
Meerprijs publiek
"Een eventuele meerprijs lichten wij in de galerie rustig toe"
Percentage publiek; rekenvoorbeeld publiek; "korting op de meerprijs"
Meerprijs in galerie
"De galerieprijs is X, uw cheque wordt verrekend, u betaalt Y"
"U krijgt X procent korting"; "Dat is een mooi voordeel"
Percentages publiek
Niet aanwezig
Elk percentage in brief, mail, cheque, website, planner
Voordeelretoriek rond Route B
Niet aanwezig
"U kunt meer krijgen"; "meer waarde"; "meeste voordeel"
Route-indeling
Twee routes als structuur
Routes als "goedkoop versus duur"

13. E-mail-check
E-mailtype
Goedgekeurd als
Fail als
Partnermail (vóór bezoek)
Partner-afzender naambedrijf@vanons-vooru.nl met partner-branding; partner-context; één primaire CTA "Plan uw bezoek"
Galerie als afzender; "u betaalt niets tot € 500"; gestapelde trustline; zwarte conversieknop zonder merkkleur
Afspraakbevestiging
Functioneel; dag, tijd, adres, parkeren, duur, chequenummer, eventuele extras met partnernaam
€ 500 als headline; "u betaalt niets"; reviewverzoek; tips-content als content-push; "bekijk ook"
Datumbevestiging (één dag ervoor)
Eén kort functioneel bericht (Fact Sheet V1.1 §6)
Twee of meer; nieuwe content; cross-sell
Herinnering dag +21
Feitelijk; partner-afzender; chequenummer; CTA "Plan uw bezoek"; overdragen als alternatief
Urgency; "verrassend genoeg"; "uit coulance" richting klant
Herinnering dag +45
Idem
Idem
Herinnering dag +60
Idem; reviewfolder mag als bijlage (Fact Sheet V1.1 §13)
Idem; reviewverzoek als push
Verlopen-cheque / coulance-mail
Maximaal één keer per klantdossier (Fact Sheet V1.1 §11); "In overleg met [partner] kunnen wij u nog eenmaal ontvangen tot [nieuwe datum]"; partner & galerie als co-afzender (Fact Sheet V1.1 §16.A)
"Eenmalig" vaker dan één keer; "uit coulance" richting klant; "u laat geld liggen"; urgency
Servicecommunicatie
Functioneel (omruilen, bezorging, afspraak wijzigen)
Cross-sell; "bekijk ook"; nieuwsbrief; commerciële teaser
Na aankoop
Geen mail tenzij operationeel noodzakelijk (bezorging)
Aftercare-mail; nieuwsbrief; reviewverzoek per mail; tweede-werk-prompt; retentie-sequence

14. Drukwerk-check
Middel
Goedgekeurd als
Fail als
Partnerbrief
Persoonlijke opening; alleen specifieke partner; partner-briefpapier, partner-handtekening; Route A/B als structuur; cheque-vermelding
Logobalk met meerdere partners; "gezamenlijke actie"; mond-tot-mond-vraag; "25–50% korting"; "blikvanger"
Cheque voorkant
Partnerlogo groot (eigen partner); "Kunst-Waardecheque"; chequenummer; geldig tot [datum]; waarde € 500,—
Kortings-typografie; streepjescodes; "excl. lijst"-vermeldingen in hero; meerdere partnerlogo's
Cheque achterkant
Drie-stappen-afspraakroute; QR naar welkomstscherm (niet naar agenda); Route A/B als structuur; sobere voorwaarden
Kortings-percentages; gedraaide tekst; belevingspakket-uitleg; voucher-frame
Envelop
Standaard zakenformaat; partner-logo; geen reclame-uitstraling
Felle kleuren; plakaat-letter op voorkant; venster-envelop met factuurgevoel zonder besluit
Reviewfolder
Bijlage bij dag +60 herinnering en coulance-mail (Fact Sheet V1.1 §13); 48 ondertekende reacties als fysiek bewijsobject
Marketingfolder-herschrijving; jubel-curatie; opgehoogde score
Bijlage
Functioneel
Marketingmateriaal als bijlage

15. Galeriegesprek / operationele check
Moment
Goedgekeurd als
Fail als
Ontvangst
"Hallo [naam], welkom. Leuk dat u er bent. Uw cheque van [partner] staat genoteerd." (Operationeel Script V1 §7)
"Mag ik u adviseren?"; "Waar bent u naar op zoek?"; "Komt u voor het gratis schilderij?"; verkoopopening
Koffie / thee
Aanbieden; rust zetten
Hospitality-show; "U gaat een mooie middag tegemoet"; arrangement-toon
Route A
"Aan deze wand hangen de werken die volledig binnen uw cheque vallen. Neemt u gerust de tijd." (Operationeel Script V1 §9; Message Rules V1.1 §6, §12)
"Dit is de basiscollectie"; "Voor iets mooiers..."; "Dit zijn de gratis werken"
Route B
Eenmalig: "Als er een werk is dat u aanspreekt en buiten deze selectie valt, kan dat ook — de cheque wordt dan verrekend met de galerieprijs. Dit hoeft u niet te beslissen. Ik vertel het alleen even, zodat u het weet." (Operationeel Script V1 §10)
Herhaalde benoeming na afwijzing; "U kunt upgraden"; "Met wat bijbetaling..."; "Deze is mooier"
Meerprijs
"De galerieprijs is X, uw cheque wordt verrekend, u betaalt Y" (Operationeel Script V1 §11; Message Rules V1.1 §6, §10)
"U krijgt X procent korting"; "Dat is een mooi voordeel"; "Normaal kost dit..."
Twijfel
Feitelijk; ruimte geven; "Neemt u gerust de tijd"
Verdedigen; bagatelliseren; overuitleggen; "weggaan zonder werk" als route markeren
Smaak / keuze
"Wat spreekt u aan?"; "Wat zou thuis goed voelen?"
"Dit past beter bij uw interieur"; "Ik zou deze nemen"; "Deze wordt vaak gekozen"
Lijst / vernis / bezorging
Op klantvraag; rustig; geen tarief noemen tenzij Fact Sheet vastlegt (open beslispunt)
Proactief pushen bij elke klant; "Voor een klein bedrag extra ziet het werk meteen veel mooier uit"
Certificaat
"Hier is uw certificaat. Veel plezier ermee thuis. En nogmaals — het is mogelijk gemaakt door [partner]." (Operationeel Script V1 §15; Message Rules V1.1 §6, §12)
"Dit krijgt u er gratis bij"; "Normaal kost dit extra"; "Dit is een exclusief certificaat"
Afscheid
Korte vriendelijke afsluiting met partnerverwijzing
"Kom gerust nog eens terug voor"; "Wij sturen u nieuws"; "Denk aan ons bij"
Na aankoop
Stilte; alleen functionele service bij vraag
Aftercare-mail; nieuwsbrief; reviewmail; tweede-werk-prompt; retentie-sequence

16. Design / UX-check
Controlepunt
Goedgekeurd als
Fail als
Vormgeving
Rustig; merkkleur in CTA's; warme neutrale palet
Schreeuwerige knoppen; felle accentkleuren als hoofd; zwarte conversieknoppen zonder merkkleur
E-commercebadges
Niet aanwezig
"Populairste"; "topkeuze"; "meest gekozen" badges
Countdown
Niet aanwezig
Timers, klokken, "nog X dagen!"-elementen
Popups
Niet aanwezig zonder besluit
Cookie-walls als marketing; exit-intent-modals
Urgency UI
Niet aanwezig
Rode highlight; "snel boeken"; visuele urgentie
Partnerlogomuur
Niet aanwezig
Logobalken op homepage, voorwaardenpagina, planner
Webshopraster
Niet als hoofdstructuur
Productgrid als kerncontainer
Luxe-hotelgevoel
Niet aanwezig
Marmer; premium-typografie; "exclusief"-codes
Art-fair-esthetiek
Niet aanwezig
Salonpresentatie; vernissage-codes; kunstenaarsnamen prominent
Stockfoto
Niet aanwezig
Dame-met-schilderij-stockfoto; lifestyle-stockfoto's; "tevreden stelletje"
GIF / bewegend beeld
Niet aanwezig in hero
Bewegende beelden; GIF met model
Hoofdactie per scherm
Eén primaire CTA
Meerdere primaire CTA's naast elkaar
Keuzes per scherm
Beperkt; één beslissing per scherm
Lange forms; meerdere paden naast elkaar
Hiërarchie
Duidelijk; categorie binnen 3 sec; legitimiteit binnen 10 sec
Onduidelijk; categorie ambigu
Mobiele flow
Rustig; werkt op 360px
Te dichte typografie; CTA's onbereikbaar; partnerlogomuur op mobiel
Chatbot / popup-chat
Niet proactief; functionele rustige contactoptie alleen na besluit
Proactieve chatwidget met "Hoi! Kan ik helpen?"; commerciële chatbot

17. Data / status / technische flow-check
Flow / status
Goedgekeurd als
Fail als
Chequenummer wordt herkend
Algemene route: chequenummer + postcode → match → welkomstscherm
Geen herkenning; foutmelding zonder service-optie
Algemene route velden
Chequenummer + postcode (Fact Sheet V1.1 §6)
Andere of extra velden zonder besluit
Persoonlijke route invoer
Geen invoer vereist; automatische herkenning
Chequenummer of postcode opnieuw invragen
Cheque leidt naar juiste partnercontext
Welkomstscherm toont eigen partner van klant
Andere partner; "een van onze partners"
Verlopen cheque
Wordt niet automatisch als geldig behandeld; klant ziet rustige melding; geen automatische coulance-belofte
Verlopen cheque opent planner; coulance automatisch aangeboden zonder besluit
Afspraakstatus
Klopt met daadwerkelijke boeking
Status afwijkend; dubbele boeking
Bevestigingsmail
Eén keer verstuurd na afspraak
Meerdere bevestigingen; ontbrekende bevestiging
Datumbevestigingsmail
Maximaal één, één dag ervoor (Fact Sheet V1.1 §6)
Meerdere; te vroeg; te laat
Herinneringen
Volgen vastgelegde regels: dag +21, +45, +60 (Fact Sheet V1.1 §6)
Andere cadans; extra mails; sequencer-gedrag
No-show-beleid
Niet geïmproviseerd; volgens vastgelegd beleid
Improvisatie — Niet vastgelegd in bron, technisch besluit nodig
Na aankoop
Geen commerciële triggers starten
Aftercare-flow start automatisch; nieuwsbrief-opt-in actief
Servicecommunicatie
Functioneel
Marketing-trigger als servicemail vermomd
Statussen niet in bron = Technisch besluit nodig.

18. AI-output check
Check
Vraag
Fail als
Nieuwe feiten
Heeft AI feiten toegevoegd die niet in Fact Sheet V1.1 staan?
Ja — afkeuren
Verboden woorden
Heeft AI woorden uit Message Rules V1.1 §3, §4 gebruikt?
Eén hit — afkeuren
Marketingtaal
Heeft AI hyperbool, superlatief, lege claim toegevoegd?
Ja — afkeuren
CTA verzonnen
Heeft AI een CTA gebruikt die niet in toegestane lijst (Fact Sheet V1.1 §6, Message Rules V1.1 §7) staat?
Ja — besluit nodig of afkeuren
Route B als korting
Heeft AI Route B geframed als korting, voordeel of upgrade?
Ja — afkeuren
Partnercollectiviteit
Heeft AI "mede mogelijk gemaakt door", "netwerk", "onze partners" of meervoud toegevoegd?
Ja — afkeuren
Extra funnelstap
Heeft AI een tussenstap of pagina bedacht die niet in Blueprint V1.1 staat?
Ja — afkeuren of besluit nodig
Aftercare / nieuwsbrief
Heeft AI aftercare-mail, nieuwsbrief, reviewverzoek per mail of retentieflow voorgesteld?
Ja — afkeuren
Verboden registers
Heeft AI "gratis", "voordeel", "actie", "exclusief", "beleving", "uitje", "premium" toegevoegd?
Ja — afkeuren
Open beslispunten als feit
Heeft AI een open beslispunt (privacytekst, openingstijden, bezorgtarief, lijst-/vernistarief, no-show-beleid, papieren cheque meenemen) als feit behandeld?
Ja — afkeuren
Erkenningsgebaar publiek
Heeft AI "erkenningsgebaar" als publieke merkmond gebruikt?
Ja — afkeuren
Reviewscore prominent
Heeft AI reviewscore of reviewaantal als hoofdclaim gebruikt zonder besluit?
Ja — besluit nodig
Hard: elke AI-output moet langs deze check vóór gebruik. Geen output zonder QA.

19. Livegangcheck per onderdeel
Onderdeel
Eigenaar
QA-status
Laatste check
Go / No-go
Homepage
Niet vastgelegd in bron
—
—
—
Chequeinvoer
Niet vastgelegd in bron
—
—
—
Persoonlijk welkomstscherm
Niet vastgelegd in bron
—
—
—
Planner — dag
Niet vastgelegd in bron
—
—
—
Planner — tijd
Niet vastgelegd in bron
—
—
—
Planner — gegevens
Niet vastgelegd in bron
—
—
—
Planner — bevestiging
Niet vastgelegd in bron
—
—
—
Afspraakbevestigingsmail
Niet vastgelegd in bron
—
—
—
Datumbevestigingsmail
Niet vastgelegd in bron
—
—
—
Herinneringsmails (dag +21, +45, +60)
Niet vastgelegd in bron
—
—
—
Coulance-mail
Niet vastgelegd in bron
—
—
—
Servicepagina's
Niet vastgelegd in bron
—
—
—
Voorwaardenpagina
Niet vastgelegd in bron
—
—
—
FAQ
Niet vastgelegd in bron
—
—
—
Reviews / ervaringen-pagina (optioneel)
Niet vastgelegd in bron
—
—
—
Partnerbrief
Niet vastgelegd in bron
—
—
—
Partnermail
Niet vastgelegd in bron
—
—
—
Cheque voorkant
Niet vastgelegd in bron
—
—
—
Cheque achterkant
Niet vastgelegd in bron
—
—
—
Envelop
Niet vastgelegd in bron
—
—
—
Reviewfolder
Niet vastgelegd in bron
—
—
—
Operationeel script (galerie)
Niet vastgelegd in bron
—
—
—
Error states
Niet vastgelegd in bron
—
—
—
Analytics / events
Niet vastgelegd in bron
—
—
—
Admin / backoffice
Niet vastgelegd in bron
—
—
—
Eigenaar per onderdeel en go/no-go-beslisser = Open beslispunt; vastleggen vóór livegang.

20. Severity-model
Severity
Betekenis
Voorbeeld
Actie
S1
Directe positioneringsbreuk
Kortingstaal; partnerlogomuur; directe QR/link naar planner; aftercare-mail na aankoop; "mede mogelijk gemaakt door"; klant-als-reclame-instrument; "100% tevredenheidsgarantie"
Direct afkeuren; niet publiceren tot herschreven; root-cause review
S2
Trustbreuk / verkeerd frame
Uitje-taal; Route B als upgrade; "u betaalt niets" als headline; "erkenningsgebaar" als publieke merkmond; reviewscore opwaarts afgerond; GIF met model
Afkeuren; herschrijven; QA nogmaals
S3
Feitelijke fout
Fout adres; fout geldigheidsduur; fout aantal werken; fout chequewaarde-notatie; fout telefoonnummer
Corrigeren volgens Fact Sheet V1.1; opnieuw kort controleren
S4
Taal- of consistentiefout
Verkeerde CTA; kleine toonafwijking; "Reserveren" als primaire CTA; "ruimere collectie" als slip; tweede primaire CTA naast elkaar
Corrigeren; opnieuw kort controleren
S5
Open beslispunt / ontbrekende bron
Onbekende privacytekst; onbekend bezorgtarief; onbekend no-showbeleid; CTA niet vastgelegd; openingstijden niet vastgelegd; meenemen papieren cheque onbekend
Niet als feit publiceren; besluit aanvragen vóór livegang
Combinatieregel: drie of meer S4-meldingen op één uiting = behandelen als S2 (afkeuren). Eén S1 = altijd afkeur, ongeacht andere meldingen.

21. Correctieprocedure
Situatie
Actie
Blacklist-hit (Message Rules V1.1 §4)
Tekst afkeuren en herschrijven; geen "milde versie" toegestaan
Feitelijke fout (Fact Sheet V1.1)
Corrigeren volgens Fact Sheet V1.1; opnieuw kort controleren
Bronconflict
Niet publiceren; besluit nodig — leidend bij conflict is V4.1, daarna Fact Sheet V1.1, daarna Message Rules V1.1
Open beslispunt
Niet als feit publiceren; uiting in concept houden tot besluit
Verkeerd frame
Terug naar V4.1 §6 en Message Rules V1.1 §3; opnieuw schrijven vanuit juiste categorie
Technische flowfout
Niet live tot flow klopt; technisch besluit aanvragen
Operationele fout
Training of script aanpassen volgens Operationeel Script V1; mystery-visit-controle daarna
AI-output afgekeurd
AI niet opnieuw vragen "vrijer" te schrijven; corrigeren handmatig op basis van Message Rules V1.1 en Copyplaybook V1

22. Open beslispunten
Beslispunt
Waarom nodig
Impact als onbekend
Exacte privacytekst
Plannerscherm 3, voorwaardenpagina, mailfooter
Juridisch (AVG) ongedekt
Exacte openingstijden
Plannerconfiguratie, contactpagina, bevestigingsmail
Plannerflow kan niet feitelijk worden ingericht
Exacte plannerbeschikbaarheid
Plannerscherm 1
Plannerscherm 1 niet bouwbaar
Exacte tijdsloten
Plannerscherm 2
Plannerscherm 2 niet bouwbaar
Duur per slot
Plannerconfiguratie
Plannerflow onvolledig
Maximale bezoekers per slot
Plannerconfiguratie en capaciteitsbeleid
Wet 11 (operationele rust) niet bewaakt
No-show-beleid
Beleid bij niet-verschijnen; herinneringsflow
Geen consistent beleid; cheque vervalt of wordt opnieuw boekbaar onduidelijk
Annuleringsregels (termijn, kosten)
Servicepagina afspraak wijzigen; plannerflow
Servicepagina onvolledig
Bezorgtarief
Servicepagina bezorging; FAQ; adviseur
Adviseur kan tarief niet noemen
Tarief lijsten
Servicepagina; FAQ; adviseur
Adviseur-communicatie onvolledig
Tarief vernis
Servicepagina; FAQ; adviseur
Activatie 5-jaars omruilgarantie zonder bekend tarief
Procedure cheque overdragen
Servicepagina
Overdrachtsroute niet bouwbaar
Procedure verlopen cheque (publiek)
Foutscherm; coulance ja/nee
Geen consistente afhandeling
Procedure cheque kwijt
Servicepagina
Geen consistente afhandeling
Verplichting papieren cheque mee te nemen
Bevestigingspagina; FAQ; bevestigingsmail; ontvangst-instructie
Niet eenduidig te communiceren
Reviewscore en reviewaantal publiek
Homepage; reviews-pagina
Curatie-/marketing-frame zonder besluit
Reviews / ervaringen-pagina ja/nee
Website-architectuur
Pagina optioneel; bouwen alleen na besluit
Eigenaar per QA-onderdeel
Livegangcheck §19
Geen go/no-go-helderheid; QA blijft hangen
Wie geeft finale go/no-go
Beslisstructuur
Verantwoordelijkheid niet belegd
Betaalmethoden Route B
Galerie-afrekening
Adviseur-script onvolledig
Sluitende lijst aanvullende diensten
Voorwaardenpagina
Niet uitputtend communiceerbaar
Technische datavelden persoonlijke link/QR
Welkomstscherm-herkenning
Persoonlijke route niet betrouwbaar bouwbaar
Functionele rustige contactoptie (chat ja/nee)
Service-architectuur
Onduidelijk wat wel/niet mag
MVP-bereik servicepagina's
Servicearchitectuur
Bouwomvang onduidelijk

23. Definitieve QA-lock
#
Regel
1
Eén verkeerd frame is genoeg voor afkeur.
2
Eén blacklist-hit is genoeg voor afkeur.
3
De cheque is geen waardebon, voucher, kortingscoupon of actie — in welke vorm dan ook.
4
Geen kortingstaal, geen percentages, geen voordeelretoriek in publieke uiting of in galerie.
5
Geen uitje-, middag-, dagje-weg- of belevingstaal.
6
Geen urgency, schaarste of tijdsdruk.
7
Partner is uitsluitend individueel zichtbaar — nooit collectief.
8
Geen partnerlogomuur, nergens.
9
Geen "mede mogelijk gemaakt door", "gezamenlijke actie", "netwerk van partnerbedrijven".
10
€ 500 is bewijs op cheque/welkomstscherm, geen verkoopclaim in hero of mail-onderwerp.
11
Vóór de planner komt altijd een persoonlijk welkomstscherm.
12
QR en persoonlijke link mogen nooit direct naar de agenda leiden.
13
Bij persoonlijke route geen herinvoer chequenummer of postcode.
14
Route B is verrekening, geen korting, geen voordeel, geen upgrade.
15
CTA's komen uitsluitend uit de toegestane lijst (Fact Sheet V1.1 §6, Message Rules V1.1 §7); afwijkingen vereisen besluit.
16
"Plan uw middag" en alle varianten zijn verboden; "Reserveren" is geen primaire CTA.
17
Website is verificatieplek, geen verkoopomgeving.
18
Planner is functioneel, geen propositiepagina, geen salesflow.
19
Adviseur is gastheer, geen verkoper.
20
Na aankoop geldt stilte; uitsluitend functionele service bij vraag van klant.
21
Reviewscore en reviewaantal zijn geen automatische publieke hoofdclaim — besluit nodig.
22
"Erkenningsgebaar" is intern begrip — niet als publieke merkmond.
23
Open beslispunten worden nooit als feit gepubliceerd.
24
Bij twijfel: niet live.

