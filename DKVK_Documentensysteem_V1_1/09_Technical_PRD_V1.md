# Technical PRD V1 — De Kunst van Kunst

**Status**: Technische bouwspecificatie voor website, planner, e-mailflows, serviceflows en backoffice.

---


1. Documentstatus
Onderwerp
Invulling
Documentnaam
Technical PRD V1 — De Kunst van Kunst
Doel
Technische bouwspecificatie voor website, planner, chequeherkenning, e-mailflows, serviceflows en backoffice
Bronnen
Positionerings-DNA V4.1; Fact Sheet V1.1; Message Rules & Copy Blacklist V1.1; Operationeel Script V1.1; Kanaal- en Copyplaybook V1
Gebruikers
Developers, Cursor-agent, product owner, UX, QA, backofficebouwer
Wel gebruiken voor
Requirements, tickets, database blueprint, admin blueprint, QA, Cursor project setup
Niet gebruiken voor
Strategie, nieuwe copy, juridische uitwerking, visueel design, campagne
Bronhiërarchie
DNA V4.1 → Fact Sheet V1.1 → Message Rules V1.1 → afgeleide blueprints (Operationeel Script, Copyplaybook)
Status
V1 (april 2026)
Lock-regel
PRD mag geen nieuwe feiten of regels introduceren; bij conflict is de bronhiërarchie leidend
2. Productvisie in technische termen
Het systeem ondersteunt klanten met een Kunst-Waardecheque op de route van uitreiking tot afspraak in de galerie. Klanten met een persoonlijke QR of persoonlijke link komen na automatische chequeherkenning op een persoonlijk welkomstscherm; klanten via de algemene website-route komen na het invullen van chequenummer en postcode op datzelfde welkomstscherm. Vanaf het welkomstscherm kan de klant een afspraak plannen via een planner met vier stappen: dag kiezen, tijd kiezen, gegevens, bevestiging.
Bij bevestiging wordt een functionele bevestigingsmail verstuurd met dag, tijd, adres, parkeerinformatie, gemiddelde duur en chequenummer. Een datumbevestigingsmail één dag vooraf is toegestaan. Reminders worden verstuurd op dag +21, +45 en +60. Een coulance-mail na verloop is maximaal eenmaal per klantdossier toegestaan.
Een admin-omgeving ondersteunt het beheer van partners, cheques, afspraken, tijdsloten, capaciteit en servicevragen. Servicepagina’s zijn uitsluitend functioneel: afspraak wijzigen, cheque overdragen, bezorging, omruilen. Na aankoop volgt geen commerciële opvolging — geen aftercare-mail, geen nieuwsbrief, geen reviewverzoek per e-mail, geen tweede-werk-prompt. Functionele servicecommunicatie blijft mogelijk bij vraag van de klant.
3. Scope-overzicht
3.1 MVP 1 — eerste fase
Functionaliteit
Toelichting
Homepage
Publieke verificatieplek; primaire CTA „Activeer uw cheque”
Cheque activeren / chequeinvoer
Algemene website-route met chequenummer en postcode
Persoonlijke QR-route
Automatische chequeherkenning naar welkomstscherm
Persoonlijke link-route
Automatische chequeherkenning vanuit partnermail
Persoonlijk welkomstscherm
Verplichte tussenstap vóór planner
Planner met vier stappen
Dag, tijd, gegevens, bevestiging
Afspraakbevestiging (pagina)
Functionele bevestigingscontent
Functionele bevestigingsmail
Eenmalig, na boeking
Basis admin
Partners, cheques en afspraken bekijken en bewerken
Basis servicecontact
Eenvoudige servicepagina met functionele opties
Basis QA tegen Message Rules
Pre-publicatiecheck op blacklist-termen in copy
Basis statuslogica
Cheque- en appointment-statussen volgens sectie 13
3.2 MVP 2 — operationele uitbreiding
Functionaliteit
Toelichting
Cheques importeren
Bulk-import door admin
Partners beheren
Aanmaken, bewerken, status actief/inactief
Tijdsloten beheren
Dagen, tijdsloten, blokkades
Dagcapaciteit beheren
Capaciteit per slot
Afspraak wijzigen
Functionele wijziging via servicepagina
Cheque overdragen
Procedure: zie open besluiten
Verlopen cheque / coulance
Maximaal één coulance-verlenging per klantdossier
Reminderflow dag +21
Eerste herinnering
Reminderflow dag +45
Tweede herinnering
Reminderflow dag +60
Derde herinnering met reviewfolder als bijlage
Datumbevestiging één dag vooraf
Eenmalige functionele bevestiging
No-showstatus
Beleid: zie open besluiten
Dag-specifieke extras beheren
Concrete partnernamen, geen bedragen
3.3 MVP 3 — rapportage en optimalisatie
Functionaliteit
Toelichting
Dashboard per partner
Alleen intern; partnerportaal: zie open besluiten
Conversierapportage
Intern KPI-overzicht
Route A / Route B registratie
Alleen intern; geen publieke statistiek
No-showrapportage
Intern overzicht
Partnerperformance
Verzilveringsratio per partner, alleen intern
Reviewfolderworkflow
Bijlage bij dag +60 reminder en coulance-mail
Exports
CSV-export van afspraken en cheques voor admin
Capacity management
Capaciteit-uitbreiding voor groei (Wet 22)
3.4 Explicit out of scope
Buiten scope
Reden
Webshop
Concept is geen webshop (V4.1)
Collectiecatalogus als verkoopomgeving
Activeert verkeerde categorie
Online betaling Route B
Tenzij later besloten — open besluit
Nieuwsbrief
Verboden (V4.1 Wet 7)
Aftercaremodule
Verboden (V4.1 Wet 7)
Retargeting
Verboden (Message Rules §14)
Reviewmail per e-mail
Verboden (V4.1 Wet 7, Wet 8)
Partnerlogomuur
Verboden (V4.1 Wet 12)
Productselectie in planner
Planner is functioneel
Kortingscalculator
Verboden (V4.1 Wet 5)
E-commercebadges
Verboden (V4.1 Wet 17)
Abandoned-cart-mails
Verboden (V4.1 Wet 17)
AI-copygenerator in productie
Open besluit; vereist QA
Chatbot
Niet vastgelegd in bron — besluit nodig
Publieke reviewscore
Alleen intern; publiek gebruik alleen na expliciet besluit
4. Gebruikersrollen
Rol
Doel
Mag doen
Mag niet doen
Besluit nodig
Bezoeker zonder cheque
Verificatie op homepage
Homepage, FAQ, voorwaarden, service bekijken
Planner openen
—
Chequehouder via QR
Afspraak plannen
Welkomstscherm → planner
Direct naar planner zonder welkomstscherm
—
Chequehouder via persoonlijke link
Afspraak plannen
Welkomstscherm → planner; gegevens vooraf ingevuld
Direct naar planner zonder welkomstscherm
—
Chequehouder via algemene route
Afspraak plannen na invoer
Chequeinvoer → welkomstscherm → planner
Planner openen zonder geldige cheque
—
Overdrager van cheque
Cheque doorgeven
Servicepagina cheque overdragen
Cheque verkopen
Procedure overdracht
Ontvanger overgedragen cheque
Afspraak plannen op overgedragen cheque
Welkomstscherm → planner
Cheque doorverkopen
Procedure overdracht
Galerie-adviseur
Klant in galerie ontvangen en begeleiden
Afspraakgegevens raadplegen, status bijwerken
Verkooppush, kortingstaal, tweede-werk-prompt
—
Admin medewerker
Beheer cheques, partners, afspraken
CRUD op kernobjecten via admin
Marketinglogica of CRM-profiling toevoegen
—
Partnerbeheerder
Partner-eigen administratie
Niet vastgelegd in bron
Niet vastgelegd in bron
Partnerportaal: besluit nodig
Super admin
Volledige systeembeheer
Rolbeheer, configuratie, audit log raadplegen
Productieve klantgegevens onnodig benaderen
—
Developer / QA
Bouwen en testen
Code, tests, staging-omgeving
Productiedata onbeperkt benaderen
—
5. Hoofdflows
Flow
Startpunt
Stappen
Eindstatus
Belangrijkste regels
5.1 Persoonlijke QR-route
QR-code op cheque
QR-scan → automatische herkenning → persoonlijk welkomstscherm → planner → bevestiging → bevestigingsmail
appointment_planned + cheque_recognized
Geen invoer; nooit direct naar agenda; alleen specifieke partner zichtbaar
5.2 Persoonlijke link-route
Partnermail
Klik op persoonlijke link → automatische herkenning → welkomstscherm → planner → bevestiging
appointment_planned + cheque_recognized
Gegevens kunnen vooraf ingevuld worden indien beschikbaar; nooit direct naar agenda
5.3 Algemene website-route
Homepage
Activeer uw cheque → chequenummer + postcode invoeren → welkomstscherm → planner → bevestiging
appointment_planned + cheque_recognized
Algemene route vraagt chequenummer + postcode; nooit direct naar agenda
5.4 Service-route
Servicepagina
Functionele vraag kiezen → afhandeling of contactformulier
service_request_created of resolved
Geen cross-sell; uitsluitend functioneel
5.5 Afspraak wijzigen-route
Servicepagina afspraak wijzigen
Bestaande afspraak herkennen → nieuwe dag/tijd kiezen → wijzigingsbevestiging
appointment_changed
Procedure-details: besluit nodig
5.6 Cheque overdragen-route
Servicepagina cheque overdragen
Gegevens nieuwe gebruiker → bevestiging → nieuwe afspraakroute voor ontvanger
cheque_transferred
Procedure (formulier, tenaamstelling, afspraakroute): besluit nodig
5.7 Verlopen cheque-route
Persoonlijke route op verlopen cheque
Rustige melding → keuze: contact of cheque overdragen
cheque_expired (mogelijk extended_once)
Geen automatische verlenging; coulance maximaal éénmaal; procedure: besluit nodig
5.8 Na aankoop
Bezoek voltooid
Geen flow
completed
Geen commerciële opvolging; alleen functionele service bij vraag
6. Pagina’s en schermen
Pagina / scherm
Type
Doel
Primaire actie
Bouwstatus
Homepage
Publieke pagina
Verificatieplek; juiste categorie binnen 3 sec
Activeer uw cheque
MVP 1
Activeer uw cheque / chequeinvoer
Publieke pagina
Chequenummer en postcode invoeren
Cheque herkennen
MVP 1
Uw bezoek
Publieke pagina
Praktische info bezoek (adres, parkeren, bezorging, omruilgarantie)
—
MVP 1
FAQ
Publieke pagina
Antwoorden op veelgestelde vragen, conform Message Rules
—
MVP 1
Voorwaarden
Publieke pagina
Sobere rolverdeling partner / galerie
—
MVP 1
Service
Publieke pagina
Servicepagina met functionele opties
Servicekeuze
MVP 1
Contact
Publieke pagina
Galerieadres, telefoon, openingstijden
—
MVP 1
Reviews / ervaringen
Publieke pagina
Reviewweergave (terloops zichtbaar op homepage)
—
Besluit nodig
Persoonlijk welkomstscherm
Persoonlijke pagina
Brug van partner- naar galerie-context
Plan uw bezoek
MVP 1
Cheque herkend
Persoonlijke pagina
State na succesvolle herkenning
Plan uw bezoek
MVP 1
Cheque verlopen
Persoonlijke pagina
Rustige melding bij verlopen cheque
Servicekeuze
MVP 1 / 2
Cheque niet gevonden
Error state
Rustige melding bij ongeldige invoer
Servicekeuze
MVP 1
Afspraak al gepland
Persoonlijke pagina
Toon bestaande afspraak
Wijzigen of contact
MVP 2
Planner stap 1 — Dag
Planner
Dag kiezen
Verder
MVP 1
Planner stap 2 — Tijd
Planner
Tijd kiezen
Verder
MVP 1
Planner stap 3 — Gegevens
Planner
Naam, e-mail, telefoonnummer
Verder
MVP 1
Planner stap 4 — Bevestiging
Planner
Afspraak bevestigen
Bevestig afspraak
MVP 1
Afspraak wijzigen
Service
Functionele wijziging
Wijzigen
MVP 2
Cheque overdragen
Service
Cheque doorgeven
Overdragen
MVP 2
Cheque kwijt
Service
Functionele afhandeling
Contactkeuze
MVP 2
Bezorging
Service
Functionele bezorgvraag
Contactkeuze
MVP 2
Omruilen
Service
Functioneel binnen omruilgarantie
Contactkeuze
MVP 2
Verlopen cheque
Service
Functionele afhandeling
Contactkeuze
MVP 2
Contact
Service
Algemeen contactformulier
Verzenden
MVP 1
Admin login
Admin
Inloggen als admin
Inloggen
MVP 1
Admin dashboard
Admin
Overzicht recente afspraken / cheques
—
MVP 1
Admin partners
Admin
Partners beheren
CRUD
MVP 2
Admin cheques
Admin
Cheques beheren en importeren
CRUD
MVP 1 / 2
Admin afspraken
Admin
Afspraken raadplegen en bijwerken
CRUD
MVP 1
Admin tijdsloten
Admin
Slots en capaciteit beheren
CRUD
MVP 2
Admin servicevragen
Admin
Servicevragen afhandelen
Status bijwerken
MVP 2
Admin reminderstatus
Admin
Reminders monitoren
—
MVP 2
Admin e-mail logs
Admin
Verzendstatus en foutlogs
—
MVP 2
Admin audit logs
Admin
Wijzigingen traceren
—
MVP 1
Admin instellingen
Admin
Configuratie
—
MVP 2
Bevestigingsmail
E-mail
Functionele bevestiging
—
MVP 1
Datumbevestigingsmail
E-mail
Bevestiging één dag vooraf
—
MVP 2
Reminders dag +21 / +45 / +60
E-mail
Functionele reminders
—
MVP 2
Coulance-mail
E-mail
Eénmalige verlenging
—
MVP 2
7. Functionele requirements — publieke website
ID
Requirement
Prioriteit
Bron
Acceptatiecriterium
WEB-001
Homepage toont € 500 niet als hero of USP
P0
V4.1 Wet 4; Message Rules §9
Visuele inspectie + copy-grep: “€ 500” niet aanwezig in hero-sectie
WEB-002
Homepage bevat primaire CTA „Activeer uw cheque”
P0
Copyplaybook §10
CTA-knop met exact deze tekst aanwezig in hero
WEB-003
Homepage bevat geen partnerlogo’s
P0
V4.1 Wet 12; Message Rules §8
Geen <img>-elementen met partnerlogo’s of „onze partners”-sectie
WEB-004
Website gebruikt geen verboden taalclusters uit Message Rules §3
P0
Message Rules §3, §4
Pre-publicatie-grep tegen blacklist; nul hits
WEB-005
Chequeinvoer vraagt chequenummer en postcode bij algemene route
P0
Fact Sheet 6
Twee inputvelden zichtbaar vóór herkenning
WEB-006
Chequeinvoer leidt nooit direct naar planner
P0
V4.1 Wet 16
Welkomstscherm verschijnt altijd tussen invoer en planner
WEB-007
Voorwaardenpagina bevat sobere rolverdeling partner / galerie
P0
V4.1 Wet 21; Fact Sheet 4
Tekst conform exact citaat in Fact Sheet 4 aanwezig
WEB-008
Voorwaardenpagina bevat geen „netwerk van partnerbedrijven”
P0
V4.1 Wet 21
Grep op exacte string: nul hits
WEB-009
FAQ gebruikt geen „waardebon”, „verzilveren”, „gratis schilderij”, „uitje”
P0
Message Rules §3, §4
Grep op blacklist-termen: nul hits
WEB-010
Servicepagina’s bevatten geen cross-sell of „bekijk ook”
P0
Copyplaybook §18
Geen widgets of links naar productselectie of nieuwe werken
WEB-011
Homepage bevat geen e-commercebadges („100 procent tevreden”, „bekroond”)
P0
V4.1 Wet 17
Geen badges aanwezig
WEB-012
Homepage toont reviews terloops zonder sterrengemiddelde als hero-claim
P0
Fact Sheet 5.13
Reviewweergave aanwezig zonder sterren-gemiddelde in hero
WEB-013
Reviews-pagina is alleen aanwezig na expliciet besluit
Decision needed
Fact Sheet 14.2 lock-update
Pagina niet bouwen tot besluit
WEB-014
Site is mobile-first responsive
P0
Niet vastgelegd in bron — besluit nodig
Layout test op viewport ≤ 380px
WEB-015
Geen analytics-tracking voor advertenties zonder besluit
P0
Privacy lock
Geen externe tracking-scripts in productie
8. Functionele requirements — persoonlijk welkomstscherm
ID
Requirement
Prioriteit
Acceptatiecriterium
WEL-001
Toont expliciet dat de cheque is herkend
P0
Tekst „Uw Kunst-Waardecheque is herkend” aanwezig
WEL-002
Toont voornaam van klant indien beschikbaar
P0
Begroeting met [voornaam] gerenderd indien data aanwezig
WEL-003
Toont uitsluitend de specifieke partner (logo en naam)
P0
Eén partnerlogo zichtbaar; geen andere partners
WEL-004
Toont chequenummer
P0
Veld zichtbaar in chequevisualisatie
WEL-005
Toont geldigheidsdatum
P0
Datum feitelijk weergegeven, geen urgency
WEL-006
Toont waarde € 500,— in chequevisualisatie
P0
Bedrag in visualisatie, niet als hero-claim
WEL-007
Toont Route A-uitleg („minimaal vijftig werken volledig binnen uw cheque”)
P0
Tekst aanwezig conform Copyplaybook §11
WEL-008
Toont Route B-uitleg („ander werk → cheque verrekend”)
P0
Tekst aanwezig conform Copyplaybook §11
WEL-009
CTA is „Plan uw bezoek” of „Kies uw bezoekmoment”
P0
CTA-knop bevat exact één van beide formuleringen
WEL-010
Bevat geen andere partners of partneroverzicht
P0
Geen elementen van andere partners aanwezig
WEL-011
Bevat geen kortingspercentages
P0
Grep: nul hits op „%”, „procent”, „korting”
WEL-012
Bevat geen „gefeliciteerd” of celebratie-taal
P0
Grep: nul hits
WEL-013
Bevat geen „uw cheque is geactiveerd” als celebratie
P0
Grep: nul hits in celebratie-context
WEL-014
Bevat geen extras met bedragen
P0
Indien extras genoemd: alleen partnernamen, geen euro-getallen
WEL-015
Bevat geen nieuwsbrief-opt-in
P0
Geen formulier voor nieuwsbrief
WEL-016
Bevat geen „persoonlijk voor u”, „speciaal voor u”
P0
Grep: nul hits
WEL-017
Bevat geen exacte maten
P0
Geen „60 bij 80”-formuleringen
WEL-018
Verschijnt altijd vóór de planner
P0
Routing-test: geen URL-pad direct van QR/link naar planner
9. Functionele requirements — planner
ID
Requirement
Prioriteit
Acceptatiecriterium
PLN-001
Planner heeft exact vier stappen: dag, tijd, gegevens, bevestiging
P0
Geen extra stappen aanwezig
PLN-002
Stap 3 vraagt naam, e-mail, telefoonnummer
P0
Drie velden zichtbaar; geen extra velden
PLN-003
Persoonlijke route vult gegevens vooraf in indien beschikbaar
P0
Bij QR/persoonlijke link zijn velden voor-ingevuld
PLN-004
Dag-specifieke extras worden alleen feitelijk getoond zonder bedragen
P0
Geen euro-getallen in dagkeuze-blok; concrete partnernamen toegestaan
PLN-005
Geen nieuwsbrief-opt-in
P0
Geen checkbox of formulier voor nieuwsbrief
PLN-006
Geen productselectie
P0
Geen werken te kiezen in planner
PLN-007
Geen cross-sell-widgets
P0
Geen „bekijk ook”-blokken
PLN-008
Geen urgency-elementen
P0
Geen „nog 1 plek”, geen countdown
PLN-009
Geen e-commercebadges
P0
Geen badges of trustpilot-widgets
PLN-010
Geen countdown-timer
P0
Geen tijdsdruk-elementen
PLN-011
Knop is „Plan uw bezoek” of „Kies uw bezoekmoment” — nooit „Plan uw middag”
P0
Grep CTA-tekst: nul hits op „middag”
PLN-012
Bevestiging bevat dag, tijd, adres, parkeren, gemiddelde duur, chequenummer
P0
Alle zes velden gerenderd
PLN-013
Bevestiging toont € 500 niet als hero-claim
P0
Grep in hero/H1: geen € 500
PLN-014
Bevestiging triggert functionele bevestigingsmail
P0
EmailLog bevat status „sent” na succesvolle boeking
PLN-015
Exacte CTA-teksten „Verder”, „Bevestig afspraak”, „Voeg toe aan agenda”
Decision needed
Niet bouwen tot besluit
PLN-016
Exacte tijdsloten en duur per slot
Decision needed
Niet bouwen tot besluit
PLN-017
Openingstijden
Decision needed
Niet bouwen tot besluit
PLN-018
Capaciteit per slot
Decision needed
Niet bouwen tot besluit
PLN-019
No-showbeleid
Decision needed
Niet bouwen tot besluit
10. Functionele requirements — e-mailflows
E-mail
Trigger
Afzender
Doel
Toegestaan?
Opmerking
Partnermail
Cheque uitgegeven
naambedrijf@vanons-vooru.nl met partner-branding
Digitale bevestiging dat cheque bestaat
Ja
Persoonlijke link naar welkomstscherm; geen € 500 als hero
Afspraakbevestiging
Boeking voltooid
Galerie De Kunst van Kunst
Functionele bevestiging
Ja
Eén mail per boeking
Datumbevestiging één dag vooraf
T-1 vóór afspraak
Galerie De Kunst van Kunst
Functionele herinnering
Ja
Eén mail; geen teaser-content
Reminder dag +21
21 dagen na uitgifte zonder afspraak
Partner als afzender
Rustige eerste herinnering
Ja
Chequenummer expliciet
Reminder dag +45
45 dagen na uitgifte zonder afspraak
Partner als afzender
Tweede herinnering
Ja
Chequenummer + overdracht-optie
Reminder dag +60
60 dagen na uitgifte zonder afspraak
Partner als afzender
Derde herinnering
Ja
Inclusief Reviewfolder als bijlage
Coulance-mail na verloop
Cheque verlopen, geen afspraak gemaakt
[Partner] & Galerie De Kunst van Kunst
Eénmalige verlenging
Ja
Maximaal één keer per klantdossier
Servicecommunicatie
Servicevraag van klant
Galerie De Kunst van Kunst
Functionele afhandeling
Ja
Geen cross-sell
Bezorgcommunicatie
Bezorgafspraak
Galerie De Kunst van Kunst
Functionele bezorgbevestiging
Ja
Geen marketing
Omruilcommunicatie
Omruilverzoek
Galerie De Kunst van Kunst
Functionele afhandeling
Ja
Geen marketing
Aftercare-mail
—
—
—
Verboden
V4.1 Wet 7
Nieuwsbrief
—
—
—
Verboden
V4.1 Wet 7
Reviewverzoek per e-mail
—
—
—
Verboden
V4.1 Wet 7, Wet 8
Tweede-werk-prompt
—
—
—
Verboden
V4.1 Wet 7
Commerciële retentie
—
—
—
Verboden
V4.1 Wet 7
Abandoned-cart-mail
—
—
—
Verboden
V4.1 Wet 17
E-mail content-requirements
ID
Requirement
Acceptatiecriterium
MAIL-001
E-mails bevatten geen kortingstaal
Grep tegen kortings-blacklist: nul hits
MAIL-002
E-mails bevatten geen urgency-taal
Grep tegen urgency-blacklist: nul hits
MAIL-003
E-mails bevatten € 500 niet als headline
Onderwerp en H1: geen € 500
MAIL-004
Reminders herhalen chequenummer
Veld [chequenummer] aanwezig in template
MAIL-005
Reminders gebruiken feitelijke geldigheidsdatum
Veld [geldigheidsdatum] aanwezig; geen „nog X dagen”
MAIL-006
Dag +60 mag Reviewfolder meesturen als bijlage
Bijlage aanwezig op dag +60 trigger
MAIL-007
Coulance-mail wordt maximaal één keer per klantdossier verstuurd
Database-flag voorkomt tweede coulance
MAIL-008
Geen „uit coulance”-formulering richting klant
Grep: nul hits
MAIL-009
Geen „verrassend genoeg”-formulering
Grep: nul hits
MAIL-010
Bevestigingsmail toont parkeren als „zonder kosten”, niet „gratis”
Grep op „gratis” in parkeer-context: nul hits
11. Functionele requirements — admin / backoffice
11.1 Partnerbeheer
Functionaliteit
Prioriteit
Status
Partner aanmaken
P1
MVP 2
Partner bewerken
P1
MVP 2
Partnerlogo beheren
P1
MVP 2
Afzender e-mailstructuur beheren (naambedrijf@vanons-vooru.nl)
P1
MVP 2
Partnerstatus actief / inactief
P1
MVP 2
Geen publieke partnerlijst
P0
Niet bouwen
11.2 Chequebeheer
Functionaliteit
Prioriteit
Status
Cheque aanmaken
P0
MVP 1
Cheque importeren (bulk)
P1
MVP 2
Chequenummer uniek (constraint)
P0
MVP 1
Klantnaam vastleggen
P0
MVP 1
Partnerkoppeling vastleggen
P0
MVP 1
Geldigheidsdatum vastleggen
P0
MVP 1
Cheque-status bijwerken
P0
MVP 1
QR / persoonlijke link genereren
P0
MVP 1
Overdraagbaar-vlag (default true)
P0
MVP 1
Verkoopbaar-vlag (default false)
P0
MVP 1
Functionele notities
P1
MVP 2
11.3 Afsprakenbeheer
Functionaliteit
Prioriteit
Status
Afspraken bekijken
P0
MVP 1
Afspraak zoeken
P0
MVP 1
Afspraak wijzigen
P1
MVP 2
Afspraak annuleren
P1
MVP 2
Afspraakstatus bijwerken
P0
MVP 1
No-show markeren
P1
MVP 2
Bezocht markeren
P0
MVP 1
Werk gekozen ja/nee
P0
MVP 1
Route A / Route B registratie (alleen intern)
P1
MVP 2
Meerprijs registreren
P1
MVP 2
Geen publieke verkoopstatistiek
P0
Niet bouwen
11.4 Tijdslotbeheer
Functionaliteit
Prioriteit
Status
Dagen beheren
P1
MVP 2
Tijdsloten beheren
P1
MVP 2
Capaciteit per slot
P1
MVP 2
Blokkades
P1
MVP 2
Beschikbaarheid berekenen
P1
MVP 2
Dag-specifieke extras beheren
P1
MVP 2
Rustigheidslabel
Decision needed
Alleen als feitelijk besloten
11.5 Servicevragen
Functionaliteit
Prioriteit
Status
Afspraak wijzigen
P1
MVP 2
Cheque overdragen
P1
MVP 2; procedure besluit nodig
Cheque kwijt
P1
MVP 2; procedure besluit nodig
Verlopen cheque
P1
MVP 2
Bezorging
P1
MVP 2
Omruilen
P1
MVP 2
Klacht
P1
MVP 2; procedure besluit nodig
Privacyvraag
P1
MVP 2; privacyverklaring besluit nodig
11.6 E-mailbeheer
Functionaliteit
Prioriteit
Status
Verzendstatus
P0
MVP 1
Reminderstatus
P1
MVP 2
Foutmeldingen
P0
MVP 1
Logs
P0
MVP 1
Geen nieuwsbriefmodule
P0
Niet bouwen
Geen aftercaremodule
P0
Niet bouwen
11.7 Audit log
Functionaliteit
Prioriteit
Status
Wie wijzigde wat
P0
MVP 1
Wanneer
P0
MVP 1
Oude waarde
P0
MVP 1
Nieuwe waarde
P0
MVP 1
Audit log alleen-lezen voor reguliere admins
P0
MVP 1
12. Datamodel — conceptueel
Entiteit
Doel
Belangrijke velden
Relaties
Status
Partner
Verstrekkende organisatie van een cheque
id, naam, logo_url, e-mail-afzender, status (active/inactive)
1:N met Cheque
P0
Cheque
Uniek cadeau-document toegekend aan een klant
id, chequenummer (uniek), waarde, geldigheidsdatum, status, overdraagbaar (bool), QR-token, persoonlijke-link-token
N:1 met Partner; 1:1 met Customer; 1:N met Appointment (max 1 actief); 1:N met TransferRequest
P0
Customer
Chequehouder
id, voornaam, achternaam, e-mail, telefoonnummer, postcode (optioneel)
1:1 met Cheque (huidige houder); CRM-profiling expliciet niet gebouwd
P0
Appointment
Geplande afspraak in de galerie
id, cheque_id, datum, tijd, status, notities (functioneel)
N:1 met Cheque; N:1 met TimeSlot; 1:1 met GalleryVisit (na bezoek)
P0
TimeSlot
Beschikbaarheidsslot
id, datum, starttijd, duur, capaciteit, blokkade (bool)
1:N met Appointment
P1
GalleryVisit
Bezoek-uitkomst
id, appointment_id, bezocht (bool), werk_gekozen (bool), route (A/B — intern), meerprijs (intern)
1:1 met Appointment
P1
ArtworkChoice
Geregistreerde werkkeuze
id, gallery_visit_id, route_type (A/B), galerieprijs, verrekening, factuurnummer (intern)
1:1 met GalleryVisit
P1
ServiceRequest
Servicevraag van klant
id, cheque_id (optioneel), type, beschrijving, status, aangemaakt_op
N:1 met Cheque
P1
EmailLog
Verzonden of geplande e-mails
id, type, ontvanger, status, verzonden_op, foutmelding
N:1 met Cheque (optioneel)
P0
ReminderSchedule
Geplande reminders
id, cheque_id, type (day_21/day_45/day_60/coulance), gepland_op, verzonden_op, status
N:1 met Cheque
P1
TransferRequest
Cheque-overdracht naar nieuwe ontvanger
id, cheque_id, nieuwe_voornaam, nieuwe_achternaam, nieuwe_e-mail, status
N:1 met Cheque
P1; procedure besluit nodig
AdminUser
Beheerder
id, naam, e-mail, rol, status
N:1 met AuditLog (acteur)
P0
AuditLog
Wijzigingsregistratie
id, acteur_id, entiteit, entiteit_id, oude_waarde, nieuwe_waarde, tijdstip
N:1 met AdminUser
P0
DayExtra
Dag-specifieke extras (concrete partnernamen, geen bedragen)
id, datum, beschrijving, partnernaam (optioneel)
—
P1
Location
Galerielocatie (Hengelo)
id, naam, adres, telefoonnummer, openingstijden
—
P1; openingstijden besluit nodig
Expliciet niet in datamodel
Niet bouwen
Reden
Smaakprofiel of kunstvoorkeuren
Concept verwerpt CRM-profiling
Marketingsegmenten
Geen retargeting (V4.1 Wet 7)
Nieuwsbriefstatus / opt-in-veld
Nieuwsbrief verboden
Aftercare-trigger-velden
Aftercare verboden
Loyalty-punten
Activeert waardebon-frame
Aankoopgeschiedenis-overzicht voor klant
Concept onderhoudt geen klantdossier voor herhaalverkoop
13. Statusmodel
Cheque-statussen
Status
Betekenis
Overgang toegestaan naar
issued
Aangemaakt en verstrekt door partner
recognized, expired, transferred, lost_reported, cancelled
recognized
Klant heeft cheque herkend (welkomstscherm geladen)
appointment_planned, expired, transferred, lost_reported
appointment_planned
Afspraak geboekt
appointment_changed, visited, used, expired
appointment_changed
Afspraak gewijzigd
appointment_planned, visited, used, expired
visited
Bezoek voltooid
used
used
Werk gekozen en meegenomen
(eindstatus)
transferred
Cheque overgedragen
issued (nieuwe houder), recognized
expired
Geldigheid verstreken
extended_once, cancelled
extended_once
Eénmalig verlengd via coulance
appointment_planned, expired
cancelled
Cheque geannuleerd door admin
(eindstatus)
lost_reported
Verlies gemeld door klant
issued (vervangen), cancelled
Bovenstaand statusmodel is een technisch voorstel afgeleid uit de bron — exacte transitie-regels zijn besluit nodig.
Appointment-statussen
Status
Betekenis
Overgang toegestaan naar
planned
Afspraak ingepland
changed, cancelled, attended, no_show
changed
Afspraak gewijzigd
planned (nieuw moment), cancelled, attended, no_show
cancelled
Afspraak geannuleerd
(eindstatus)
attended
Klant aanwezig geweest
completed
no_show
Klant niet verschenen
(eindstatus); no-showbeleid besluit nodig
completed
Bezoek voltooid
(eindstatus)
ServiceRequest-statussen
Status
Betekenis
Overgang toegestaan naar
new
Nieuw verzoek
in_progress, rejected, needs_decision
in_progress
In behandeling
resolved, rejected, needs_decision
resolved
Afgehandeld
(eindstatus)
rejected
Afgewezen (functioneel)
(eindstatus)
needs_decision
Wacht op beleidsbesluit
in_progress, resolved, rejected
Email-statussen
Status
Betekenis
Overgang toegestaan naar
scheduled
Gepland
sent, cancelled, suppressed
sent
Verzonden
failed (bij bounce)
failed
Verzending mislukt
scheduled (retry), cancelled
suppressed
Onderdrukt (bv. afmelding)
(eindstatus)
cancelled
Geannuleerd vóór verzending
(eindstatus)
Commerciële e-mailstatussen zoals „newsletter_subscribed”, „aftercare_pending” of „retargeting_active” worden niet gebouwd.
14. Business rules
ID
Business rule
Bron
Fail als
BR-001
Eén cheque per afspraak
V4.1 Wet 10
Twee actieve afspraken aan één cheque
BR-002
Eén werk per cheque
V4.1 Wet 10
Meerdere ArtworkChoice-records per cheque
BR-003
Maximaal twee bezoekers per cheque
Fact Sheet 3
Boeking met >2 bezoekers
BR-004
Bezoekers vanaf 12 jaar
Fact Sheet 3
Boeking met bezoeker <12 jaar
BR-005
Cheque drie maanden geldig vanaf uitgifte
Fact Sheet 3
Geldigheid afwijkt van drie maanden zonder coulance
BR-006
Persoonlijke QR/link → welkomstscherm, niet planner
V4.1 Wet 16
Routing test toont directe doorgang naar planner
BR-007
Algemene route vraagt chequenummer + postcode
Fact Sheet 6
Welkomstscherm bereikbaar zonder dubbele invoer
BR-008
€ 500 niet als hero op homepage of in bevestigingsmail
V4.1 Wet 4
Grep € 500 in hero/onderwerp: hits
BR-009
Minimaal 50 werken in Route A altijd beschikbaar
Fact Sheet 8
Operationele check: <50 werken in galerie
BR-010
Route B = verrekening, geen kortingspercentage publiek
V4.1 Wet 5
Percentage in publieke copy
BR-011
Geen kortingstaal
Message Rules §3
Hit op kortings-blacklist
BR-012
Geen percentages publiek
V4.1 Wet 5
Hit op „procent”, „%” in publieke copy
BR-013
Geen nieuwsbrief
V4.1 Wet 7
Nieuwsbrief-formulier of -mail aanwezig
BR-014
Geen aftercare-mail
V4.1 Wet 7
Mail met aftercare-trigger aanwezig
BR-015
Reviewmail per e-mail verboden
V4.1 Wet 7, Wet 8
Reviewverzoek-mail aanwezig
BR-016
Servicepagina’s bevatten geen cross-sell
Copyplaybook §18
„Bekijk ook”-blok aanwezig
BR-017
Partner alleen individueel zichtbaar
V4.1 Wet 2, Wet 3
Meerdere partners in één klantuiting
BR-018
Geen partnerlogomuur, nergens
V4.1 Wet 12
Logomuur of „onze partners”-sectie aanwezig
BR-019
Bij aankoop geen automatische commerciële flow
V4.1 Wet 7
Trigger naar marketing-flow na aankoop
BR-020
Open besluiten niet als feit gebouwd
PRD-lock
Hard-coded waarde uit „besluit nodig”-lijst
BR-021
Coulance-mail max één keer per klantdossier
V4.1 Wet 19
Tweede coulance-verzending in EmailLog
BR-022
Adviseur is gastheer, geen verkoper
V4.1 Wet 13
Adminmodule pusht verkooptools (closing-script, upsell-prompt)
15. Error states en edge cases
Situatie
Systeemgedrag
Wat niet mag
Besluit nodig
Chequenummer niet gevonden
Rustige melding + servicekeuze (contact)
Beschuldigende taal; „U heeft fout ingevoerd”
Exacte errorcopy
Postcode klopt niet
Rustige melding + opnieuw proberen
Urgency; meerdere pogingen blokkeren zonder uitleg
Exacte errorcopy
Cheque verlopen
Rustige melding + service-route
Automatische coulance-belofte
Procedure verlopen cheque
Cheque al gebruikt
Status tonen + contactoptie
Stappen-suggestie als ware verkoopfunnel
Exacte errorcopy
Cheque al gepland
Bestaande afspraak tonen + wijzigopties
Tweede afspraak op dezelfde cheque toelaten
Procedure dubbele afspraak
Cheque overgedragen
Status „overgedragen” tonen
Suggestie nieuwe cheque te kopen
Exacte errorcopy
Cheque kwijt
Service-route
Cross-sell of vervang-suggestie als product
Procedure kwijt
Afspraak al gepland
Bestaande afspraak tonen
Tweede afspraak forceren
—
Geen tijdsloten beschikbaar
Rustige melding + alternatief moment voorstellen
Urgency-taal („snel vol!”); wachtlijst zonder besluit
Beleid „geen slots”
Tijdslot net vol
Rustige melding + andere slot voorstellen
„Nog 1 plek over” — false-urgency vermijden
—
Afspraak wijzigen buiten termijn
Service-route
Boete-taal of „u heeft te lang gewacht”
Termijn voor wijziging
No-show
Status bijwerken; geen automatische verkoopvervolg
Verkoopcampagne starten
No-showbeleid
Klant wil meer dan twee bezoekers
Rustige melding van limiet
Verbergen van limiet of stiekem toestaan
—
Klant jonger dan 12
Rustige melding van limiet
—
—
Partner inactief
Cheque blijft geldig; partnerverwijzing functioneel
Klant met fouten of vage taal afwijzen
Procedure inactieve partner
E-mail bounced
EmailLog status „failed”; admin-alert
Stille negeren
Retry-beleid
QR-link ongeldig
Rustige foutmelding + service-route
Stack-trace tonen
Exacte errorcopy
Persoonlijke link verlopen
Rustige foutmelding + service-route
—
Termijn link-geldigheid
Servicevraag na aankoop
Functionele afhandeling
Cross-sell of marketing-fallback
—
Klant wil review plaatsen
Verwijzen naar papieren reviewverzoek in galerie of eigen reviewsite
Reviewmail beloven
Procedure papieren review
Klant wil nieuwsbrief
Beleefd functioneel: „wij hebben geen nieuwsbrief”
Inschrijvingsformulier tonen
Exacte tekst
16. Non-functional requirements
Categorie
Requirement
Prioriteit
Opmerking
Performance
Pagina’s laden snel op trage verbinding
P0
Exacte target besluit nodig
Mobile-first
Site werkt op viewport ≤ 380px
P0
Doelgroep gebruikt vaak mobiel
Accessibility
WCAG-conformiteit basisniveau
P0
Niveau (A/AA/AAA) besluit nodig
Security
Formulieren beschermd tegen CSRF; inputvalidatie server-side
P0
Stack besluit nodig
Privacy / AVG
Klantgegevens alleen functioneel verzamelen
P0
Privacyverklaring besluit nodig
Privacy / AVG
Geen marketingprofielen, geen nieuwsbriefdatabase
P0
—
Maintainability
Code volgens vastgestelde stijlgids
P1
Stijlgids besluit nodig
Scalability
Capaciteit-schaalbaar bij groei chequevolume
P1
Wet 22
Auditability
Adminwijzigingen worden gelogd
P0
AuditLog (sectie 12)
Reliability
Bevestigingsmail moet altijd verzonden worden of als failed gemarkeerd
P0
EmailLog
Content governance
Alle copy gaat door QA-blacklist-check vóór publicatie
P0
Message Rules §17 / Copyplaybook §22
Email deliverability
Afzenderdomein vanons-vooru.nl moet correct geconfigureerd zijn (SPF, DKIM)
P0
Hosting-stack besluit nodig
Backup / recovery
Reguliere backups van database
P1
Beleid besluit nodig
Admin usability
Admin-omgeving werkt op desktop
P1
Mobiel admin: niet bouwen tot besluit
Roles & permissions
Rollen scheiden lees-/schrijfrechten
P0
Zie sectie 21
Dataminimalisatie
Velden alleen vragen als ze functioneel nodig zijn
P0
Bij twijfel: weglaten
17. Privacy en AVG
Onderwerp
Requirement
Status
Besluit nodig
Klantgegevens algemeen
Naam, e-mail, telefoonnummer; postcode bij algemene route
Vastgelegd in Fact Sheet 6
—
Chequenummer
Verplicht; uniek; gekoppeld aan partner en klant
Vastgelegd
—
Partnerkoppeling
Verplicht in datamodel
Vastgelegd
—
Afspraakgegevens
Datum, tijd, locatie, eventuele dag-extras
Vastgelegd
—
Servicevragen
Type, beschrijving, status
Vastgelegd
Retentietermijn besluit nodig
E-mail logs
Verzendstatus en foutmeldingen
Vastgelegd
Retentietermijn besluit nodig
Afmeld-URL partnercommunicatie
www.vanons-vooru.nl
Vastgelegd in Fact Sheet 5
—
Volledige privacyverklaring
Ontbreekt
Niet vastgelegd in bron
Besluit nodig vóór livegang
Nieuwsbrief
Niet bouwen
Verboden (V4.1 Wet 7)
—
Commerciële profiling
Niet bouwen
Verboden
—
Smaakprofiel
Niet bouwen
Verboden (CRM-frame)
—
Onnodige velden
Niet vragen
Dataminimalisatie
—
Dataretentie
Termijnen per entiteit
Niet vastgelegd in bron
Besluit nodig
Verwerkers
E-mailprovider, hosting, error logging
Niet vastgelegd in bron
Besluit nodig
Verwerkersovereenkomsten
Vereist per verwerker
Niet vastgelegd
Besluit nodig
Cookiebeleid
Beleid en banner
Niet vastgelegd
Besluit nodig vóór livegang
Recht op inzage / wissing
Procedure
Niet vastgelegd
Besluit nodig
18. Integraties
Integratie
Doel
Nodig in MVP
Status
Besluit nodig
E-mailprovider
Verzending van transactionele en functionele e-mails
MVP 1
Niet gekozen
Technische keuze nodig
SMS-provider
Eventuele SMS-bevestigingen
—
Niet vastgelegd
Wel/niet besluit nodig
Kalender / agenda
Beschikbaarheid en plannerlogica
MVP 2
Niet gekozen
Technische keuze nodig
Database
Persistentie van datamodel
MVP 1
Niet gekozen
Technische keuze nodig
Hosting
Productie-omgeving
MVP 1
Niet gekozen
Technische keuze nodig
Analytics
Eventregistratie (intern)
MVP 1 / 2
Niet gekozen
Tool besluit nodig; geen advertentietracking
QR / link-generator
Persoonlijke chequetokens genereren
MVP 1
Niet gekozen
Technische keuze nodig
Importbestand partners/cheques
Bulk-import
MVP 2
Format niet vastgelegd
Importformaat besluit nodig
Betaalprovider Route B
Online betaling meerprijs
—
Niet vastgelegd
Wel/niet besluit nodig
Reviewsite / reviewfolder
Bijlage Reviewfolder bij reminders
MVP 2
Bron Fact Sheet 14.2
—
Privacy / cookie-tooling
Banner en consent
MVP 1
Niet gekozen
Technische keuze nodig
Error logging
Productie-fouten
MVP 1
Niet gekozen
Technische keuze nodig
Admin-auth
Inloggen admin
MVP 1
Niet gekozen
Technische keuze nodig
19. Analytics en event requirements
Event
Trigger
Doel
Intern / extern
Besluit nodig
homepage_viewed
Pageview homepage
Verkeer monitoren
Intern
—
cheque_activation_started
Klik op „Activeer uw cheque”
Funnel-startpunt
Intern
—
cheque_lookup_submitted
Submit chequenummer + postcode
Funnel-stap
Intern
—
cheque_recognized
Welkomstscherm geladen na herkenning
Funnel-conversie
Intern
—
welcome_screen_viewed
Pageview welkomstscherm
Funnel-stap
Intern
—
planner_started
Welkomstscherm → planner
Funnel-stap
Intern
—
planner_day_selected
Stap 1 voltooid
Funnel-stap
Intern
—
planner_time_selected
Stap 2 voltooid
Funnel-stap
Intern
—
customer_details_submitted
Stap 3 voltooid
Funnel-stap
Intern
—
appointment_created
Boeking voltooid
Funnel-conversie
Intern
—
confirmation_email_sent
Bevestigingsmail verzonden
Mail-status
Intern
—
reminder_sent_day_21
Reminder dag +21 verzonden
Reminder-status
Intern
—
reminder_sent_day_45
Reminder dag +45 verzonden
Reminder-status
Intern
—
reminder_sent_day_60
Reminder dag +60 verzonden
Reminder-status
Intern
—
appointment_changed
Afspraak gewijzigd
Service-event
Intern
—
appointment_cancelled
Afspraak geannuleerd
Service-event
Intern
—
appointment_attended
Bezoek voltooid
Operationeel event
Intern
—
appointment_no_show
No-show vastgelegd
Operationeel event
Intern
No-showbeleid besluit nodig
cheque_transferred
Cheque overgedragen
Service-event
Intern
Procedure besluit nodig
cheque_expired
Cheque verlopen
Operationeel event
Intern
—
cheque_extended_once
Coulance-verlenging toegekend
Operationeel event
Intern
—
service_request_created
Servicevraag ingediend
Service-event
Intern
—
route_a_selected
Werk uit Route A gekozen
Operationeel event
Intern
—
route_b_selected
Werk uit Route B gekozen
Operationeel event
Intern
—
Alle events zijn intern. Geen advertentietracking, geen retargeting-pixels in productie zonder expliciet besluit.
20. Content governance
Contenttype
Mag worden beheerd door
Publicatiecheck
Mag niet
Homepagecopy
Content editor + QA
Message Rules pre-publicatie-check
Geen € 500 in hero; geen partnerlogo’s
FAQ
Content editor + QA
Message Rules pre-publicatie-check
Geen kortings-, uitje- of urgency-taal
Voorwaarden
Juridische review + QA
Bron-referentie Fact Sheet en V4.1
Geen „netwerk van partnerbedrijven”
Servicepagina’s
Content editor + QA
Message Rules pre-publicatie-check
Geen cross-sell, geen „bekijk ook”
Welkomstschermcopy
Content editor + QA
Message Rules pre-publicatie-check
Geen celebratie-taal, geen „persoonlijk voor u”
Plannerlabels en CTA’s
Content editor + QA
Toegestane CTA-lijst (Message Rules §7)
„Plan uw middag”, „Boek uw beleving”
E-mailtemplates
Content editor + QA
Message Rules pre-publicatie-check
Geen kortings- of urgency-taal
Reminderteksten
Content editor + QA
Brongetrouw aan Copyplaybook §12
Geen „verrassend genoeg”, geen „uit coulance”
Dag-specifieke extras
Admin
Concrete partnernamen, geen bedragen
Geen voordeelretoriek
Partnergegevens
Admin
Logo en afzender per partner
Geen collectieve weergave
Reviewfragmenten
Content editor + QA
Geen sterren-gemiddelde als hero
Geen marketingclaim
Error states
Content editor + QA
Rustige functionele formuleringen
Geen beschuldigende taal
21. Admin permissions
Rol
Rechten
Niet toegestaan
Besluit nodig
Super admin
Volledige toegang; rolbeheer; configuratie; audit log raadplegen
Productiedata onnodig benaderen voor analyse-doeleinden buiten beleid
—
Galerie admin
Cheques, afspraken, partners, tijdsloten, servicevragen
Privacy-instellingen wijzigen; rolbeheer
—
Adviseur
Eigen-afspraken raadplegen; status bijwerken (bezocht / werk gekozen / Route A-B)
Cheques aanmaken; partners bewerken
—
Partner admin
Eigen partner-cheques en -reminders raadplegen
Andere partners bekijken; algemene admin
Partnerportaal: besluit nodig
Content editor
Copy bewerken in CMS; voorstellen indienen
Direct publiceren zonder QA
Workflow besluit nodig
QA reviewer
Voorstellen reviewen tegen Message Rules; goedkeuren of afwijzen
Eigen content schrijven
—
Developer
Toegang tot staging; productie-deploys met procedure
Productiedata onbeperkt benaderen
Procedure besluit nodig
Algemene principes: AVG-minimale toegang per rol; audit log verplicht voor alle wijzigingen; content editor mag niet zonder QA-goedkeuring publiceren; adviseur ziet alleen operationeel relevante velden.
22. Acceptance criteria per MVP
22.1 MVP 1
Acceptatiecriterium
Go / No-go
Persoonlijke QR-route werkt zonder extra invoer
No-go als invoer vereist
Algemene route werkt met chequenummer + postcode
No-go als andere velden vereist
Welkomstscherm verschijnt altijd vóór planner
No-go bij directe doorgang
Planner heeft exact vier stappen
No-go bij meer of minder stappen
Afspraak wordt aangemaakt en opgeslagen
No-go bij verlies
Functionele bevestigingsmail wordt verstuurd of als failed gelogd
No-go bij stille fout
Admin kan cheque en afspraak terugvinden
No-go bij ontbrekende zoekfunctie
Geen verboden CTA’s in publieke uitingen
No-go bij hits
Geen kortingstaal in publieke uitingen
No-go bij hits
Geen nieuwsbrief-opt-in in planner of welkomstscherm
No-go bij aanwezigheid
Geen directe QR/link → planner
No-go bij directe doorgang
Error states geven rustige serviceoptie
No-go bij beschuldigende of urgency-taal
Audit log registreert alle adminwijzigingen
No-go bij ontbrekende logs
22.2 MVP 2
Acceptatiecriterium
Go / No-go
Tijdsloten beheerbaar door admin
No-go bij hard-coded slots
Reminders dag +21, +45, +60 verstuurd volgens regels
No-go bij urgency-taal
Afspraak wijzigen werkt functioneel
No-go bij cross-sell
Cheque overdragen werkt (na procedure-besluit)
No-go bij ontbrekend besluit
Servicevragen worden geregistreerd
No-go bij ontbrekende registratie
No-showstatus kan worden vastgelegd (na beleid-besluit)
No-go bij ontbrekend besluit
Coulance-mail wordt maximaal eenmaal per klantdossier verstuurd
No-go bij dubbele verzending
22.3 MVP 3
Acceptatiecriterium
Go / No-go
Rapportage toont conversie en verzilveringsratio per partner
No-go bij publieke vertoning zonder besluit
Analytics-events worden intern verzameld
No-go bij externe tracking
Partnerdashboard alleen na besluit
No-go zonder besluit
CSV-exports beschikbaar voor admin
No-go bij ontbreken
23. QA requirements
QA-type
Requirement
Fail als
Copy QA
Alle copy is gecontroleerd tegen Message Rules-blacklist
Eén blacklist-hit
Copy QA
Alle CTA’s komen uit toegestane lijst
CTA niet in toegestane lijst
UX QA
Mobiele weergave werkt op viewport ≤ 380px
Layout breekt
UX QA
Welkomstscherm verschijnt altijd vóór planner
Directe QR/link → planner
Planner QA
Vier stappen aanwezig, niet meer, niet minder
Extra of ontbrekende stap
Planner QA
Geen nieuwsbrief-opt-in, geen cross-sell
Aanwezigheid
E-mail QA
E-mails bevatten geen kortings- of urgency-taal
Hit op blacklist
E-mail QA
Reminders bevatten chequenummer
Veld ontbreekt
Partner QA
Alleen specifieke partner zichtbaar in klantcommunicatie
Meerdere partners getoond
Partner QA
Geen partnerlogomuur
Logomuur aanwezig
Route A/B QA
Route B in copy als verrekening, niet als korting
Kortingspercentage in copy
Privacy QA
Geen onnodige velden in formulieren
Onnodig veld aanwezig
Privacy QA
Privacyverklaring aanwezig vóór livegang
Pagina ontbreekt
Admin QA
Audit log werkt voor alle wijzigingen
Wijziging zonder log
Admin QA
Adviseur ziet alleen operationeel relevante velden
Te brede toegang
Technical QA
Cheque-status-transities volgen statusmodel
Ongeldige overgang
Regression QA
Bestaande flows blijven werken na wijzigingen
Bestaande tests falen
Cursor-output QA
Cursor-gegenereerde code bevat geen verzonnen copy of CTA’s
Nieuwe copy buiten goedgekeurde bron
Cursor-output QA
Cursor-gegenereerde code vult geen open besluiten in
Hard-coded waarde uit besluitenlijst
24. Cursor build rules
Deze sectie kan direct worden overgenomen in Cursor Rules of AGENTS.md. Cursor moet bij elke build-actie de bronhiërarchie respecteren: DNA V4.1 → Fact Sheet V1.1 → Message Rules V1.1 → afgeleide blueprints.
Regel
Cursor mag
Cursor mag niet
Requirements
Requirements uit deze PRD vertalen naar code
Nieuwe requirements verzinnen
Componenten
Componenten bouwen volgens PRD-secties 6–12
Componenten bouwen die niet in PRD staan
Open besluiten
Vragen markeren als „besluit nodig” en stoppen
Open besluiten zelf invullen
Tests
Unit en integratie-tests schrijven op acceptatiecriteria
Tests verzinnen die buiten requirements vallen
Copy
Bestaande copy uit Copyplaybook V1, Fact Sheet V1.1 en Message Rules V1.1 gebruiken
Nieuwe CTA’s of copy verzinnen
CTA’s
CTA’s gebruiken uit toegestane lijst (Message Rules §7)
Nieuwe CTA’s verzinnen
Kortingstaal
—
Kortings-, uitje- of urgency-taal toevoegen
Partnerlogomuur
—
Logomuur of „onze partners”-sectie bouwen
Nieuwsbriefmodule
—
Nieuwsbrief- of opt-in-formulier bouwen
Aftercaremodule
—
Aftercare-mailflow bouwen
Routing
Welkomstscherm tussenstap respecteren
Directe QR/link → planner bouwen
Route B
Route B implementeren als verrekening
Route B framen als korting of upsell
Reviewscore
Reviewweergave terloops zonder hero-claim
Publieke reviewscore tonen zonder besluit
Privacy
Verwijzen naar privacyverklaring zodra deze besluit-vastgelegd is
Privacytekst zelf schrijven
Betalingsflow
—
Betalingsflow bouwen zonder besluit
No-showbeleid
—
No-showbeleid zelf verzinnen
25. Build tickets
25.1 MVP 1 tickets
Ticket ID
Titel
Scope
Prioriteit
Afhankelijkheden
Acceptatiecriteria
PRD-001
Project setup
Repo, CI/CD, hosting, omgevingen, basisstijlgids
P0
Stack-besluit
Build draait op staging; lint en test gaan groen
PRD-002
Public homepage shell
Hero, body, CTA „Activeer uw cheque”
P0
PRD-001
WEB-001 t/m WEB-004 voldoen
PRD-003
Cheque lookup
Algemene route met chequenummer + postcode
P0
PRD-002, datamodel Cheque
WEB-005, WEB-006 voldoen
PRD-004
Personal welcome screen
Welkomstscherm met partner, cheque, routes, CTA
P0
PRD-003
WEL-001 t/m WEL-018 voldoen
PRD-005
Planner step 1 — day
Dagkeuze, neutrale extras-mededeling
P0
PRD-004, TimeSlot-data
PLN-001, PLN-004 voldoen
PRD-006
Planner step 2 — time
Tijdkeuze
P0
PRD-005
PLN-001, PLN-008 voldoen
PRD-007
Planner step 3 — customer details
Naam, e-mail, telefoonnummer
P0
PRD-006
PLN-002, PLN-003 voldoen
PRD-008
Planner step 4 — confirmation
Bevestigingspagina
P0
PRD-007
PLN-012, PLN-013 voldoen
PRD-009
Confirmation email
Functionele bevestigingsmail-template + verzending
P0
PRD-008, e-mailprovider
MAIL-001 t/m MAIL-010 voldoen
PRD-010
Admin login
Inloggen voor admin-rollen
P0
Admin-auth-besluit
Rol-gebaseerde toegang werkt
PRD-011
Cheque admin
CRUD op cheques, QR/link genereren
P0
PRD-010, datamodel
11.2-functies werken; audit log gevuld
PRD-012
Appointment admin
Afspraken raadplegen en bijwerken
P0
PRD-011
11.3-functies werken
PRD-013
Error states
Pagina’s en componenten voor sectie 15
P0
PRD-002 t/m PRD-008
Rustige functionele formuleringen, geen urgency
PRD-014
QA copy guard
Pre-publicatie-check tegen Message Rules-blacklist
P0
Message Rules-data
Blacklist-grep faalt CI bij hits
PRD-015
Audit log base
Loggingsysteem voor admin-mutaties
P0
Datamodel AuditLog
Alle mutaties uit 11.x leiden tot logregel
25.2 MVP 2 tickets
Ticket ID
Titel
Prioriteit
PRD-101
Cheque-import (bulk)
P1
PRD-102
Partner admin
P1
PRD-103
Tijdsloten en capaciteit
P1
PRD-104
Reminderflow dag +21 / +45 / +60
P1
PRD-105
Coulance-mail (maximaal één)
P1
PRD-106
Datumbevestiging T-1
P1
PRD-107
Afspraak wijzigen-flow
P1
PRD-108
Cheque overdragen-flow
P1, na procedure-besluit
PRD-109
Verlopen cheque-flow
P1, na procedure-besluit
PRD-110
No-showstatus en -registratie
P1, na beleid-besluit
PRD-111
Servicevragen-module
P1
PRD-112
Dag-specifieke extras-beheer
P1
25.3 MVP 3 tickets
Ticket ID
Titel
Prioriteit
PRD-201
Conversierapportage
P2
PRD-202
Verzilveringsratio per partner (intern)
P2
PRD-203
No-showrapportage
P2
PRD-204
Reviewfolder-workflow
P2
PRD-205
CSV-exports
P2
PRD-206
Capacity management dashboard
P2
PRD-207
Partnerdashboard
Decision needed
26. Open technische besluiten
ID
Besluit
Waarom nodig
Impact als onbekend
Voorgestelde eigenaar
Deadline
DEC-001
Techstack frontend en backend
Bouw kan niet starten zonder
Project staat stil
—
—
DEC-002
Hosting
Productie-omgeving
Niet deployable
—
—
DEC-003
Database
Persistentie datamodel
Datamodel niet realiseerbaar
—
—
DEC-004
E-mailprovider en domeinconfiguratie (SPF/DKIM)
E-mails verzendbaar
Geen e-mails
—
—
DEC-005
SMS wel/niet
Eventuele SMS-bevestigingen
Onduidelijke kanaalmix
—
—
DEC-006
Kalenderintegratie
Plannerlogica
Slots zijn niet beheerbaar
—
—
DEC-007
Admin-auth (provider/methode)
Admin-toegang
Geen veilige login
—
—
DEC-008
Privacyverklaring volledig
AVG-vereiste
Niet livegang-klaar
—
—
DEC-009
Cookiebeleid en banner
AVG-vereiste
Niet livegang-klaar
—
—
DEC-010
Dataretentie per entiteit
AVG-vereiste
Niet compliant
—
—
DEC-011
Verwerkers- en verwerkersovereenkomsten
AVG-vereiste
Niet compliant
—
—
DEC-012
Openingstijden galerie
Plannerconfiguratie
Slots niet correct
—
—
DEC-013
Tijdsloten (start, duur)
Plannerconfiguratie
Slots ontbreken
—
—
DEC-014
Capaciteit per slot
Plannerconfiguratie
Overbezetting risico
—
—
DEC-015
No-showbeleid
Operationele afhandeling
Inconsistente afhandeling
—
—
DEC-016
Annuleringsregels (termijn, kosten)
Servicepagina afspraak wijzigen
Onduidelijke regels
—
—
DEC-017
Termijn voor wijziging afspraak
Service-route
Geen procedure
—
—
DEC-018
Procedure cheque overdragen
Service-route
Service onmogelijk
—
—
DEC-019
Betaalmethoden Route B
Galerie-afrekening
Geen consistent kassa-flow
—
—
DEC-020
Bezorgtarief
Servicepagina bezorging
Vaag antwoord activeert wantrouwen
—
—
DEC-021
Tarieven lijst en vernis
Adviseur-communicatie
Adviseur improviseert
—
—
DEC-022
Technische datavelden persoonlijke link en QR (chequenummer alleen of + postcode)
Welkomstscherm-bouw
Ontwikkelteam werkt met aannames
—
—
DEC-023
Exacte errorcopy
Error states
Inconsistente foutmeldingen
—
—
DEC-024
CTA „Voeg toe aan agenda” wel/niet
Bevestigingsstap
Functionaliteit onzeker
—
—
DEC-025
Reviewscore publiek wel/niet
Reviewsweergave
Pagina kan niet bouwen
—
—
DEC-026
Partnerdashboard wel/niet
MVP 3 scope
Onduidelijke scope
—
—
DEC-027
Online betaling wel/niet
Route B-afhandeling
Onduidelijk kassa-traject
—
—
DEC-028
Volledige privacyverklaring
AVG-vereiste
Niet livegang-klaar
—
—
27. Risks & safeguards
Risico
Type
Impact
Safeguard
Systeem voelt als kortingsactie
Positionering
Hoog — vernietigt cadeau-frame
QA copy guard tegen kortings-blacklist; verbod op € 500 hero (BR-008)
Directe route naar planner gebouwd
Architectuur
Hoog — breekt vertrouwenskeen
Routing-test in CI: QR/link → planner = fail (BR-006)
Partnercollectiviteit verschijnt
UI
Hoog — breekt vertrouwenstransfer
Component-check: meerdere partnerlogo’s in één view = fail (BR-017)
Planner wordt te commercieel
UX
Middel — activeert e-commerce-frame
Audit op planner-componenten (PLN-005 t/m PLN-010)
Nieuwsbriefmodule sluipt erin
Scope
Hoog — verboden
Code-grep op „newsletter” / „subscribe” in CI (BR-013)
Route B wordt upsell
Positionering
Hoog — vernietigt cadeau-frame
Copy QA op „korting”, „upgrade” (BR-010)
Open besluit wordt als feit gebouwd
PRD-lock
Hoog — onomkeerbare aannames
BR-020; pull-request-template vraagt expliciet bevestiging
Privacytekst ontbreekt
Compliance
Hoog — livegang-blocker
DEC-008 op release-checklist
Admin krijgt te veel CRM-functionaliteit
Scope
Middel — activeert verkeerde architectuur
Datamodel-review tegen „niet-bouwen”-lijst (sectie 12)
Analytics wordt marketingretargeting
Privacy
Hoog — verboden
Sectie 19: alleen interne events; pixel-check in CI
E-mails worden te veel of te commercieel
Positionering
Middel — activeert funnel-frame
E-mailtemplates langs Message Rules; verboden mailtypen op blacklist
Error states klinken beschuldigend
UX
Middel — schaadt vertrouwen
Copy QA op error-templates; rustige functionele formuleringen
Reviewscore wordt marketingclaim
Positionering
Middel — activeert AI-verdenking
Hero-checks; sterren-gemiddelde niet als hoofdelement
Servicepagina’s worden verkooproutes
Positionering
Middel — herlabelt traject als funnel
Component-audit: geen „bekijk ook”, geen cross-sell (BR-016)
28. Definitieve PRD-lock
Vijfentwintig regels die nooit mogen breken. Overtreding vereist directie-besluit en nieuwe PRD-versie.
Nr.
Regel
1
PRD introduceert geen nieuwe waarheid.
2
Afgeleide bouwdocumenten volgen de bronhiërarchie: DNA V4.1 → Fact Sheet V1.1 → Message Rules V1.1 → afgeleide blueprints.
3
Vóór planner altijd persoonlijk welkomstscherm.
4
QR / persoonlijke link nooit direct naar agenda.
5
Planner heeft exact vier stappen.
6
Geen nieuwsbriefmodule.
7
Geen aftercaremodule.
8
Geen commerciële opvolging na aankoop.
9
Geen partnerlogomuur, nergens.
10
Geen collectieve partnercommunicatie.
11
Route B is verrekening, geen korting.
12
Geen percentages publiek.
13
Geen e-commercepatronen.
14
Geen kortings-, uitje-, urgency- of luxe-taal.
15
CTA’s alleen uit Message Rules toegestane lijst.
16
Fact Sheet V1.1 is leidend voor feiten.
17
Message Rules V1.1 is leidend voor taal.
18
DNA V4.1 is leidend voor positionering.
19
Open besluiten niet bouwen tot besluit is genomen.
20
Cursor mag niets invullen dat niet besloten is.
21
Admin bouwt geen CRM- of marketingtool.
22
Data wordt minimaal verzameld.
23
Privacybesluiten moeten vóór livegang zijn genomen.
24
QA is verplicht vóór publicatie.
25
Bij twijfel: niet live.

