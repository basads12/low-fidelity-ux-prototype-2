Decision Register V1 — De Kunst van Kunst
Datum: 25 april 2026 Bronbasis: Positionerings-DNA V4.1; Fact Sheet V1.1; Message Rules & Copy Blacklist V1.1; Website & Planner Blueprint V1.1; Operationeel Script V1.1; Kanaal- en Copyplaybook V1; QA-checklist V1; Commercieel KPI-document V1; Technical PRD V1 Doel: Eén lijst met alle open besluiten die invloed hebben op UX, wireframes, website, planner, serviceflows, copy, techniek, operations, privacy, admin/backoffice en livegang.

ID
Besluit
Status
Opties
Aanbevolen keuze
Eigenaar
Deadline
Impact op UX
Impact op techniek
Impact op copy
OB-01
Openingstijden galerie (welke dagen, welke uren)
Bouw-blocker
(a) Bestaande feitelijke openingstijden vastleggen; (b) Aangepast schema voor afsprakenflow
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Plannerflow + contactpagina + bevestigingsmail bouwen erop
TimeSlot-aanmaak en Location-data
Tekst contactpagina, bevestigingsmail, afspraakherinnering
OB-02
Bezorgtarief (één tarief, gestaffeld of zonebased)
Bouw-blocker
(a) Vast tarief; (b) Gestaffeld op afstand/postcode; (c) Vrije offerte per geval
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
FAQ-antwoord, servicepagina bezorging
Payment/bezorging-flow in admin
FAQ, voorwaardenpagina, adviseur-script
OB-03
Tarief lijsten (vast of variabel)
Operationeel besluit nodig
(a) Vast tarief; (b) Tariefbereik per type; (c) Per geval offerte
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect; relevant voor adviseur
Optioneel: registratie in admin
FAQ, voorwaardenpagina, adviseur-script
OB-04
Tarief vernis (vast tarief; activeert 5-jaars omruilgarantie)
Operationeel besluit nodig
(a) Vast tarief; (b) Tariefbereik per formaat
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Optioneel: registratie in admin
FAQ, voorwaardenpagina, certificaattekst
OB-05
No-show-beleid (cheque vervalt ja/nee, opnieuw boekbaar ja/nee, sancties)
Livegang-blocker
(a) Cheque blijft geldig binnen 3 mnd, herplan zonder kosten; (b) Cheque vervalt na X no-shows; (c) Eenmalige herkans
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Foutscherm, herplanflow, toon van bevestigingsmail
Appointment-statusmodel, herinneringsflow
Foutmelding-tekst, bevestigingsmail, herinneringen
OB-06
Annuleringsregels afspraak (termijn voor wijzigen, kosten, last-minute)
Bouw-blocker
(a) Tot X uur vooraf gratis; (b) Geen sanctie; (c) Sanctie bij no-show
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Wijzigingsknop + flow servicepagina
Appointment-status + e-mailflow
Servicepagina-tekst, bevestigingsmail
OB-07
Wijzigingsprocedure afspraak (zelfservice via link, of contact opnemen)
Bouw-blocker
(a) Zelfservice via wijziglink in mail; (b) Servicepagina met formulier; (c) Telefonisch
(a) of (b) — voorkeur zelfservice past bij rust en geen druk; besluit nodig
Nog toe te wijzen
Voor bouw
Servicepagina + flow
E-mailflow + planner-update
Servicepagina-tekst, bevestigingsmail
OB-08
Procedure cheque overdragen (formulier, tenaamstelling, afspraakroute)
Bouw-blocker
(a) Online formulier met nieuwe gegevens; (b) Telefonisch; (c) Per mail
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Servicepagina cheque overdragen
Cheque-statusmodel + transferred-event
Servicepagina-tekst, herinneringsmail (overdragen actief benoemen)
OB-09
Procedure cheque kwijt
Operationeel besluit nodig
(a) Verwijzing naar partner; (b) Galerie zoekt op postcode/naam; (c) Combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Foutscherm bij chequeinvoer + servicepagina
Optioneel: servicedeskticket
Servicepagina-tekst, foutmelding
OB-10
Coulanceprocedure publiek bij verlopen cheque (zichtbaar of niet)
Livegang-blocker
(a) Niet zichtbaar publiek; foutscherm verwijst naar contact; (b) Coulance publiek aangeboden
(a) — geen automatische coulance op website (Blueprint V1.1 §21; QA V1 §6); besluit nodig over publieke uitleg
Nog toe te wijzen
Voor livegang
Foutscherm bij verlopen cheque
Cheque-statusmodel + extended_once-event
Foutmelding-tekst, coulance-mail (interne flow)
OB-11
Procedure bij klacht (onthoudpunt, escalatie, reactietermijn)
Operationeel besluit nodig
(a) Klacht via e-mail/telefoon; (b) Servicepagina-formulier; (c) Beide
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Servicepagina
ServiceRequest-object
Servicepagina, contactpagina
OB-12
Procedure bij geen keuze (klant verlaat galerie zonder werk)
Operationeel besluit nodig
(a) Cheque blijft geldig tot einddatum, herplan mogelijk; (b) Cheque vervalt
Besluit nodig — niet uit bron af te leiden (Wet 14: nuloptie wordt niet als route gemarkeerd)
Nog toe te wijzen
Voor livegang
Adviseur-instructie
Cheque-/afspraak-statusmodel
Adviseur-script (intern)
OB-13
Volledige privacyverklaring (AVG-conform)
Livegang-blocker
(a) Volledige privacyverklaring opstellen op basis van DPIA; (b) Verwijzing naar bestaande tekst
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Footer-link, plannerscherm 3, voorwaardenpagina
Cookie-/consent-flow, e-mailflow
Privacyverklaring zelf, mailfooter
OB-14
Dataretentie (welke data hoe lang bewaard)
Livegang-blocker
(a) Standaardtermijnen per data-object; (b) Onbeperkt voor financiële records, beperkt voor klantdata
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Database retentiebeleid + audit
Privacyverklaring
OB-15
Verwerkers / analytics-tooling (welke tools verwerken klantdata, DPIA)
Livegang-blocker
(a) Eigen hosting + minimal analytics; (b) GA4 + e-mailprovider; (c) Privacy-vriendelijke analytics
Besluit nodig — niet uit bron af te leiden (geen retargeting volgens V4.1 Wet 7)
Nog toe te wijzen
Voor bouw
Geen direct UX-effect; raakt cookie-banner
Tooling-keuze, integratie
Privacyverklaring
OB-16
Betaalmethoden bij Route B (welke methoden in galerie)
Bouw-blocker
(a) Pin + factuur; (b) Pin + factuur + betaallink achteraf; (c) Idem + iDEAL
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect op website; relevant voor afrekening
Payment-object + factuur-template
Adviseur-script, factuurtemplate
OB-17
Verplichting papieren cheque mee te nemen ja/nee
UX-blocker
(a) Niet verplicht; (b) Verplicht; (c) Aanbevolen
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Tekst op bevestigingsscherm + bevestigingsmail
Geen direct effect
Bevestigingsmail, FAQ, voorwaardenpagina
OB-18
Reviewscore en reviewaantal publiek tonen ja/nee
UX-blocker
(a) Niet publiek; (b) Reviewfragmenten zonder score; (c) Score + aantal feitelijk (4,4 / 1.683)
(b) past bij Fact Sheet V1.1 ("alleen intern, tenzij context vraagt"); besluit over (c)
Nog toe te wijzen
Voor wireframe
Homepage reviewblok, eventuele reviewspagina
Reviewdata-binding
Homepagecopy, reviewspagina
OB-19
Reviews-/ervaringen-pagina bouwen ja/nee
UX-blocker
(a) Geen aparte pagina; (b) Pagina met fragmenten + verwijzing naar reviewsite; (c) Volledige eigen reviewspagina
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Sitemap; navigatie
Routes, eventueel filterlogica
Reviewspaginacopy
OB-20
Wie en wanneer reviewformulier op papier wordt gevraagd in galerie
Operationeel besluit nodig
(a) Adviseur na keuze; (b) Adviseur bij afronding; (c) Aparte gastvrouw
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Adviseur-script
Optioneel: scan/registratie folder
Adviseur-script (intern)
OB-21
Technische datavelden persoonlijke link / QR (welke parameters)
Bouw-blocker
(a) Alleen chequenummer; (b) Chequenummer + postcode; (c) Token + chequenummer
Besluit nodig — niet uit bron af te leiden (algemene route gebruikt nummer + postcode; persoonlijke route niet vastgelegd)
Nog toe te wijzen
Voor bouw
Geen invoer bij persoonlijke route — UX moet dit ondersteunen
Recognition-service + URL-schema
Geen — interne specificatie
OB-22
Automatische herkenning QR/link (matchlogica + foutscenario's)
Bouw-blocker
(a) Token-match; (b) Hash-match; (c) Database-lookup met validatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Foutscherm bij mismatch
Recognition-service
Foutmelding-tekst
OB-23
Eigenaar per QA-onderdeel + wie geeft finale go/no-go
Livegang-blocker
(a) Directie als finale go/no-go; (b) QA-lead per domein; (c) Combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Geen direct techniek-effect
Geen — proces
OB-24
Drempelwaarden voor alerts (KPI §18: wanneer triggert een alert)
Operationeel besluit nodig
Per alert te bepalen op basis van baseline-meting na livegang
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Dashboard-alerts
Geen
OB-25
Functionele rustige contactoptie / chat ja/nee
UX-blocker
(a) Geen chat; (b) E-mail- en telefoonblok; (c) Functionele rustige chat zonder proactieve trigger
(b) past bij Wet 10 (geen popups, geen e-commercepatronen); (c) alleen na expliciet besluit; (a) of (b) is veilig
Nog toe te wijzen
Voor wireframe
Contactblok in footer, eventueel widget
Eventueel chatintegratie
Contactpaginacopy
OB-26
Sluitende lijst aanvullende diensten (welke wel, welke niet inbegrepen)
Bouw-blocker
(a) Beperkte lijst (lijst, vernis, bezorging); (b) Uitgebreide lijst
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Voorwaardenpagina
Geen direct techniek-effect
Voorwaardenpagina, FAQ
OB-27
Andere vestigingen / formele bevestiging Hengelo enige vestiging
UX-blocker
(a) Hengelo enige vestiging; (b) Meerdere vestigingen
(a) past bij Fact Sheet V1.1 §5 (impliciet één locatie); formele bevestiging besluit nodig
Nog toe te wijzen
Voor wireframe
Locatieformulering op homepage, contactpagina, bevestigingsmail
Location-data
Homepage, contactpagina, alle copy met locatie
OB-28
Postcode galerie formele bevestiging (7555 DM)
Bouw-blocker
(a) Bevestigen 7555 DM; (b) Andere postcode
(a) past bij Fact Sheet V1.1 §5 vanaf v3.1 consistent; formele bevestiging besluit nodig
Nog toe te wijzen
Voor bouw
Adresvermelding overal
Geen
Adresregel in alle uitingen
OB-29
Exacte beschikbare dagen in planner
Bouw-blocker
(a) Woensdag t/m zaterdag (huidige praktijk); (b) Andere combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Plannerscherm 1
Plannerconfiguratie
Geen
OB-30
Exacte tijdsloten (start/duur per dag)
Bouw-blocker
(a) Vaste blokken (bv. 10:00, 11:30, 13:00, 14:30, 16:00); (b) Variabel per dag
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Plannerscherm 2
Plannerconfiguratie
Geen
OB-31
Duur per slot
Bouw-blocker
(a) 60 min; (b) 90 min; (c) 120 min (incl. uitloop)
Slot-duur in lijn met bezoekduur 60–90 min (Fact Sheet V1.1 §7) — besluit nodig
Nog toe te wijzen
Voor bouw
Plannerscherm 2 + capaciteit
Plannerconfiguratie
Bevestigingsmail (duur-vermelding)
OB-32
Maximale bezoekers per slot (capaciteitsplanning)
Bouw-blocker
(a) Hard maximum X; (b) Adviseurgebonden
Besluit nodig — niet uit bron af te leiden (Wet 11: rust eerst)
Nog toe te wijzen
Voor bouw
Plannerscherm 1/2 (volle dagen tonen)
Capacity-logica
Geen
OB-33
Maximale bezoekers per cheque bij uitzonderingen (>2)
Operationeel besluit nodig
(a) Strikt max 2; (b) Telefonische afstemming bij meer
Strikt max 2 conform Fact Sheet V1.1 §3; uitzondering bij contact — besluit nodig over afstemmingsroute
Nog toe te wijzen
Voor livegang
Plannerscherm 3 (veld aantal bezoekers)
Validatie
Servicetekst, contactpagina
OB-34
Error handling bij verlopen cheque (foutschermtekst en flow)
Bouw-blocker
(a) Rustige melding zonder coulance-belofte; (b) Met coulance-uitleg
(a) conform Blueprint V1.1 §21 en QA V1
Nog toe te wijzen
Voor bouw
Foutscherm bij chequeinvoer/QR/link
Cheque-statusmodel
Foutmelding-tekst
OB-35
CTA "Verder" / "Volgende stap" plannerscherm 1 en 2
Copy-blocker
(a) "Verder"; (b) "Volgende stap"; (c) "Naar tijd kiezen" / "Naar gegevens"
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Knopontwerp planner
Geen
Knopcopy planner
OB-36
CTA plannerscherm 3 (gegevens-bevestigingsknop)
Copy-blocker
(a) "Bevestig afspraak"; (b) "Plan uw bezoek"; (c) "Maak een afspraak"
Variant uit Fact Sheet V1.1 §6 (a/b/c allemaal toegestaan) — besluit op één formulering
Nog toe te wijzen
Voor bouw
Knop plannerscherm 3
Geen
Knopcopy planner
OB-37
CTA "Voeg toe aan agenda" plannerscherm 4
Copy-blocker
(a) "Voeg toe aan agenda"; (b) Geen knop, .ics-bijlage in mail; (c) Beide
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Plannerscherm 4
.ics-generatie
Knopcopy + bevestigingsmail
OB-38
CTA reviewspagina ("Lees reviews" / "Bekijk ervaringen")
Copy-blocker
(a) "Lees reviews"; (b) "Bekijk ervaringen"; (c) Geen aparte CTA
Afhankelijk van OB-19 (pagina ja/nee)
Nog toe te wijzen
Voor bouw
Homepage + eventuele reviewspagina
Geen
Knopcopy homepage
OB-39
CTA "Bevestig wijziging" servicepagina afspraak wijzigen
Copy-blocker
(a) "Bevestig wijziging"; (b) "Verzet afspraak"; (c) "Sla nieuwe datum op"
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Servicepagina
Geen
Knopcopy servicepagina
OB-40
CTA "Meer over de galerie" homepage secundair
Copy-blocker
(a) "Meer over de galerie"; (b) Geen secundaire CTA; (c) Andere formulering
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Homepage
Geen
Homepagecopy
OB-41
E-mailadres galerie publiek (welk adres op contactpagina)
Bouw-blocker
(a) Functioneel adres bij galerie; (b) Algemeen contactadres
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Contactpagina
Mail-routering
Contactpaginacopy, footer
OB-42
MVP-bereik servicepagina's (welke flows wel, welke later)
Bouw-blocker
(a) MVP: contactformulier + bellen; (b) MVP: zelfserviceflows alle; (c) MVP: alleen afspraak wijzigen + contact
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Sitemap + servicepagina-architectuur
Servicedesk-objecten
Servicepaginacopy
OB-43
Geluidsniveau / muziek in galerie
Operationeel besluit nodig
(a) Stilte; (b) Rustige achtergrondmuziek
Besluit nodig — niet uit bron af te leiden (Wet 11: rust)
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Geen
Geen
OB-44
Aanwezigheid en gedrag tweede adviseur
Operationeel besluit nodig
(a) Eén adviseur per bezoek; (b) Tweede adviseur op afstand; (c) Twee adviseurs gelijktijdig bij meer bezoekers
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect op website
Capaciteitsplanning
Adviseur-script (intern)
OB-45
Hoe drukte / wachttijd operationeel wordt opgelost (Wet 11)
Operationeel besluit nodig
(a) Capaciteit eerst uitbreiden, dan volume; (b) Volume cap
(a) conform V4.1 Wet 11; concrete drempel besluit nodig
Nog toe te wijzen
Voor livegang
Plannerbeschikbaarheid
Capacity-logica
Geen
OB-46
Exacte opbouw adviseurstraining (modulen, frequentie, mystery-visit)
Operationeel besluit nodig
(a) Initiële training + jaarlijkse refresh; (b) Continu coachingsritme; (c) Combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Geen
Trainingsmateriaal (intern)
K1
Exacte KPI-definities en formules per KPI
Bouw-blocker
(a) Volgens voorstellen in KPI-document §5–§15 vaststellen; (b) Aangepaste definities
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
Event-tracking + dashboardfilters
Geen
K2
Dashboardtool / BI-platform
Livegang-blocker
(a) Eigen dashboard; (b) Externe BI-tool (Looker Studio, Metabase, andere)
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect (intern)
Tooling-integratie + databron
Geen
K3
Rapportagefrequentie en cadens
Operationeel besluit nodig
(a) Volgens voorstellen in KPI §21; (b) Aangepaste cadens
Voorstel KPI §21; formele bevestiging besluit nodig
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Geen
Geen
K5
Dataverzameling in planner (welke events, welke velden)
Bouw-blocker
(a) Volgens KPI §20 events; (b) Beperktere set
Voorstel KPI §20 (event_list); besluit nodig op finalisering
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
Event-tracking + database
Geen
K6
Dataverzameling in galerie (visit, route, meerprijs, folder)
Bouw-blocker
(a) Adviseur registreert via tablet; (b) Backoffice na bezoek; (c) Combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect op website
Backoffice-formulier + Visit-object
Geen
K7
Route A/B-registratie door adviseur (proces)
Operationeel besluit nodig
(a) Adviseur registreert direct; (b) Backoffice achteraf
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect op website
Adviseur-tool + Visit-object
Geen
K8
Meerprijsregistratie (welk veld, koppeling met factuur)
Bouw-blocker
(a) Bedrag in Visit-object; (b) Apart Payment-object
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
Payment/RouteChoice-object
Geen
K11
Remindertracking (open/click rates) — afhankelijk van e-mailprovider
Bouw-blocker
(a) Volledige tracking; (b) Alleen click; (c) Geen tracking (privacy)
Besluit nodig — afhankelijk van OB-15 en PRD-09
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
E-mailprovider-keuze + integratie
Geen
K12
Partnerdashboard / partnerportaal ja/nee
Bouw-blocker
(a) Geen partnerportaal; (b) Besloten partner-dashboard; (c) Maandelijks rapport per mail
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Eventueel partner-login UX
Auth + rolmodel + dashboard-domein
Eventuele partnerinterfacecopy
K18
Gebruik adviseurdata in segmentatie ja/nee
Operationeel besluit nodig
(a) Geen adviseur-segmentatie; (b) Voorzichtig intern; (c) Volledige segmentatie
(a) of (b) past bij V4.1 Wet 8 (geen verkoopdruk); (c) afgeraden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Datamodel-keuze
Geen
K19
Partnerbenchmarking intern ja/nee
Operationeel besluit nodig
(a) Geen ranking; (b) Interne benchmark voor partneroverhandiging-coaching
(b) toegestaan intern (V4.1 Wet 4); ranking publiek verboden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Dashboard-domein
Geen
PRD-01
Rol "Bezoeker zonder cheque" — toegestaan in systeem ja/nee
UX-blocker
(a) Geen aparte route; bezoeker zonder cheque ziet enkel homepage; (b) Aparte intake-route
(a) past bij Concept (entry-route via cheque); besluit nodig
Nog toe te wijzen
Voor wireframe
Sitemap, homepage-CTA
Routes + access-control
Homepagecopy
PRD-02
Super-admin rol / rechten / partnerportaal
Bouw-blocker
(a) Eén super-admin + galeriemedewerker; (b) Uitgebreid rolmodel; (c) Inclusief partner-rol
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Admin-UX
Auth, RBAC
Adminteksten
PRD-03
Mobile-first viewport target (≤380px ondersteunen ja/nee)
UX-blocker
(a) Vanaf 360px; (b) Vanaf 320px; (c) Vanaf 380px
(a) past bij standaard; besluit nodig
Nog toe te wijzen
Voor wireframe
Wireframe-breakpoints
Responsive bouw
Geen direct effect
PRD-04
Accessibility niveau (WCAG A / AA / AAA)
Livegang-blocker
(a) WCAG 2.1 AA; (b) AAA waar haalbaar; (c) A
Besluit nodig — niet uit bron af te leiden (AA is gebruikelijk standaard)
Nog toe te wijzen
Voor bouw
Wireframes en designreview
Toegankelijkheidsbouw, audits
Alt-teksten, knopcopy
PRD-05
Tech stack / framework (front-end, back-end, security)
Bouw-blocker
(a) Stack X; (b) Stack Y
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
Volledige bouw
Geen
PRD-06
Hosting-stack
Livegang-blocker
(a) NL-hosting (AVG); (b) EU-hosting
(a) of (b) — voorkeur EU/NL voor AVG; besluit nodig
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Hosting + DNS
Geen
PRD-07
Backup/recovery beleid
Livegang-blocker
(a) Dagelijkse backups + maandelijkse archieven; (b) Andere combinatie
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor livegang
Geen direct UX-effect
Backup-systeem
Geen
PRD-08
Scalability target (verwacht volume per dag/maand)
Bouw-blocker
(a) Schaal voor huidige volume; (b) 2× / 5× / 10× headroom
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
Hosting + database-keuze
Geen
PRD-09
E-mailprovider (transactioneel + reminders)
Bouw-blocker
(a) Provider X; (b) Provider Y; (c) Combinatie
Besluit nodig — niet uit bron af te leiden; geen marketing-/CRM-features activeren
Nog toe te wijzen
Voor bouw
Geen direct UX-effect
E-mailtemplates + sending-API
Mail-templates
PRD-10
Stijlgids / visuele richtlijn (kleur, typografie, beeldlogica)
UX-blocker
(a) Bestaande stijl voortzetten; (b) Nieuwe rustige stijlgids
Besluit nodig — niet uit bron af te leiden
Nog toe te wijzen
Voor wireframe
Volledige design
Tokens, design-systeem
Visuele tone — niet copy
PRD-11
Beleid "geen slots beschikbaar" (wachtlijst, alternatieven)
UX-blocker
(a) Melding + contactoptie; (b) Wachtlijst-formulier; (c) Slots verder vooruit tonen
(a) past bij Wet 9 (geen urgency); (b) besluit nodig of dit een retentieflow wordt
Nog toe te wijzen
Voor wireframe
Plannerscherm 1/2 alternatief flow
Plannerlogica
Foutmelding-tekst

1. Eerst beslissen vóór wireframes
	•	OB-17 Verplichting papieren cheque mee te nemen
	•	OB-18 Reviewscore en reviewaantal publiek tonen ja/nee
	•	OB-19 Reviews-/ervaringen-pagina ja/nee
	•	OB-25 Functionele rustige contactoptie / chat ja/nee
	•	OB-27 Andere vestigingen / formele bevestiging Hengelo enige vestiging
	•	OB-29 Exacte beschikbare dagen
	•	OB-30 Exacte tijdsloten
	•	PRD-01 Rol "Bezoeker zonder cheque" ja/nee
	•	PRD-03 Mobile-first viewport target
	•	PRD-10 Stijlgids / visuele richtlijn
	•	PRD-11 Beleid "geen slots beschikbaar"

2. Eerst beslissen vóór technische bouw
	•	OB-01 Openingstijden galerie
	•	OB-02 Bezorgtarief
	•	OB-05 No-show-beleid
	•	OB-06 Annuleringsregels
	•	OB-07 Wijzigingsprocedure
	•	OB-08 Procedure cheque overdragen
	•	OB-15 Verwerkers / analytics-tooling
	•	OB-21 Technische datavelden persoonlijke link / QR
	•	OB-22 Automatische herkenning QR/link
	•	OB-26 Sluitende lijst aanvullende diensten
	•	OB-28 Postcode galerie formele bevestiging
	•	OB-31 Duur per slot
	•	OB-32 Maximale bezoekers per slot
	•	OB-34 Error handling bij verlopen cheque
	•	OB-35 CTA "Verder" / "Volgende stap" plannerscherm 1 en 2
	•	OB-36 CTA plannerscherm 3
	•	OB-37 CTA "Voeg toe aan agenda" plannerscherm 4
	•	OB-38 CTA reviewspagina (afhankelijk van OB-19)
	•	OB-39 CTA "Bevestig wijziging" servicepagina
	•	OB-40 CTA "Meer over de galerie" homepage
	•	OB-41 E-mailadres galerie publiek
	•	OB-42 MVP-bereik servicepagina's
	•	K1, K5, K6, K7, K8, K11, K12 — KPI-/dataverzamelings-besluiten
	•	PRD-02 Super-admin rol / rechten
	•	PRD-04 Accessibility niveau (raakt bouw)
	•	PRD-05 Tech stack / framework
	•	PRD-08 Scalability target
	•	PRD-09 E-mailprovider

3. Eerst beslissen vóór livegang
	•	OB-03 Tarief lijsten
	•	OB-04 Tarief vernis
	•	OB-09 Procedure cheque kwijt
	•	OB-10 Coulanceprocedure publiek bij verlopen cheque
	•	OB-11 Procedure bij klacht
	•	OB-12 Procedure bij geen keuze
	•	OB-13 Volledige privacyverklaring (AVG)
	•	OB-14 Dataretentie
	•	OB-16 Betaalmethoden bij Route B
	•	OB-20 Wie / wanneer reviewformulier op papier in galerie
	•	OB-23 Eigenaar per QA-onderdeel + finale go/no-go
	•	OB-24 Drempelwaarden voor alerts
	•	OB-33 Maximale bezoekers per cheque bij uitzonderingen
	•	OB-43 Geluidsniveau / muziek in galerie
	•	OB-44 Aanwezigheid en gedrag tweede adviseur
	•	OB-45 Hoe drukte/wachttijd operationeel wordt opgelost
	•	OB-46 Exacte opbouw adviseurstraining
	•	K2 Dashboardtool
	•	K3 Rapportagefrequentie
	•	K18 Gebruik adviseurdata
	•	K19 Partnerbenchmarking intern
	•	PRD-06 Hosting-stack
	•	PRD-07 Backup/recovery beleid

4. Kan voorlopig als placeholder in wireframes
	•	OB-01 Openingstijden — placeholder "Woe–Za, tijden volgen" mits OB-29/30 nog open zijn
	•	OB-30 Tijdsloten — placeholder generieke blokken (zonder echte uren)
	•	OB-35–OB-40 CTA-teksten — placeholderknoppen met duidelijke "TBD" markering
	•	OB-37 "Voeg toe aan agenda" — placeholder of weglaten in wireframe
	•	OB-41 E-mailadres — placeholder "info@dekunstvankunst.nl" tot besluit
	•	PRD-10 Stijlgids — placeholder met grijstinten en systeemfont tot definitieve stijlgids
	•	Reviews op homepage — placeholder reviewfragmenten zonder score (lijn met OB-18)
	•	Foutmeldingen-copy — placeholder rustige toon met markering "Definitieve copy besluit nodig"
Let op: placeholder mag uitsluitend met expliciet markeerlabel "Concept — besluit nodig". Geen placeholder-claim die per ongeluk als feit kan landen (geen verzonnen openingstijden, geen verzonnen bezorgtarief, geen verzonnen privacytekst).

5. Waarschuwing — wat AI / Claude / developer NIET zelf mag invullen
De volgende besluiten raken positionering, juridisch risico, AVG, financieel beleid of operationele rust en mogen niet door AI of een individuele developer worden ingevuld:
	•	OB-13 Volledige privacyverklaring (juridisch / AVG)
	•	OB-14 Dataretentie
	•	OB-15 Verwerkers / analytics-tooling (DPIA verplicht)
	•	OB-02 / OB-03 / OB-04 / OB-16 Tarieven en betaalmethoden (financieel beleid)
	•	OB-05 / OB-06 / OB-08 / OB-10 / OB-11 No-show-, annuleer-, overdracht-, coulance- en klachtprocedures (juridisch + operationeel beleid)
	•	OB-09 Procedure cheque kwijt (verbonden aan partnercommunicatie)
	•	OB-18 Reviewscore en reviewaantal publiek tonen (raakt Trust v2 + Wet 14)
	•	OB-19 Reviews-/ervaringen-pagina (raakt curatierisico)
	•	OB-20 / OB-46 Reviewproces in galerie en adviseurstraining (operationeel beleid)
	•	OB-21 / OB-22 Technische datavelden en herkenning (security + privacy)
	•	OB-23 Eigenaar per QA-onderdeel + finale go/no-go (governance)
	•	OB-32 / OB-45 Capaciteit en operationele rust (Wet 11)
	•	K12 Partnerdashboard (juridisch + relationeel)
	•	K18 / K19 Adviseurdata-gebruik en partnerbenchmarking (positioneringsrisico)
	•	PRD-04 Accessibility-niveau (juridisch)
	•	PRD-06 / PRD-07 Hosting / backup (juridisch + AVG)
	•	PRD-09 E-mailprovider (privacy-impact)
Algemeen verbod (uit V4.1, Message Rules V1.1, QA V1): AI of developer mag geen open beslispunten als feit publiceren, geen copy verzinnen voor juridische teksten, geen kortingstaal of urgency toevoegen, geen publieke partnerlogomuur ontwerpen, geen retentie-/cross-sellflow toevoegen, geen reviewscore opwaarts afronden, geen "erkenningsgebaar" als publieke merkmond hanteren. Bij twijfel: niet uitvoeren — terug naar besluitnemer.
