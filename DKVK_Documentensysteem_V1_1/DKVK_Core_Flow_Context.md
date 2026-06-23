DKVK_Core_Flow_Context.md
Doel van dit Make-bestand
Wireframes voor de algemene website-route, van homepage tot bevestigde afspraak. Negen schermen low-fidelity. Website is een rustige verificatieplek; de planner is functioneel, geen propositiepagina. Vóór de planner komt altijd een persoonlijk welkomstscherm. Geen webshopgevoel, geen verkoopframe.
Flow / schermen
	1	Homepage
	2	Activeer uw cheque (chequeinvoer)
	3	Persoonlijk welkomstscherm
	4	Planner — stap 1: dag kiezen
	5	Planner — stap 2: tijd kiezen
	6	Planner — stap 3: gegevens
	7	Planner — stap 4: bevestiging
	8	Afspraak bevestigd
Verplichte inhoud per scherm
1. Homepage — Hero met rustige feitelijke introductie van galerie + Kunst-Waardecheque, geen € 500 als hoofdclaim. Korte uitleg "Hoe het werkt" in drie stappen. Praktische legitimiteit: adres, telefoon, "galerie sinds 2005" alleen bij logo. Eén primaire CTA: Activeer uw cheque.
2. Chequeinvoer — Twee invoervelden: chequenummer, postcode. Korte uitleg. Eén primaire CTA: Activeer uw cheque. Foutmelding-zone (rustig).
3. Persoonlijk welkomstscherm — Goedgekeurde kop: "Welkom [voornaam]. Uw Kunst-Waardecheque is herkend." Partner-vermelding individueel: "Namens [partner]" (alleen logo en naam van de specifieke partner). Chequevisualisatie: chequenummer, € 500,—, geldig tot [datum]. Korte uitleg twee routes als structuur (geen percentages, geen voordeel). Primair: Plan uw bezoek. Secundair: Kies uw bezoekmoment.
4. Planner stap 1 — dag kiezen — Beschikbare dagen rustig getoond. Eventuele dag-extras feitelijk met partnernaam, zonder bedragen. CTA: "Verder" — Besluit nodig.
5. Planner stap 2 — tijd kiezen — Beschikbare tijdsloten op gekozen dag. CTA: "Verder" — Besluit nodig.
6. Planner stap 3 — gegevens — Velden: naam, e-mail, telefoonnummer. Korte privacy-verwijzing — Besluit nodig: privacytekst. CTA: "Bevestig afspraak" — Besluit nodig.
7. Planner stap 4 — bevestiging — Dag, tijd, adres, parkeren zonder kosten voor de deur, gemiddelde duur 60–90 min, chequenummer, eventuele dag-extras met partnernaam zonder bedragen. Telefoonnummer voor vragen. CTA: "Voeg toe aan agenda" — Besluit nodig.
8. Afspraak bevestigd — Functionele samenvatting + verwijzing naar bevestigingsmail.
Vaste feiten
Galerie De Kunst van Kunst · Kunst-Waardecheque (koppelteken, K en W kapitaal) · Waarde € 500,— · Geerdinksweg 2, 7555 DM Hengelo (OV) · 074 - 291 48 57 · Bezoekduur 60–90 min · Bezoek uitsluitend op afspraak · Minimaal vijftig werken volledig binnen de cheque, in verschillende formaten en stijlen · Certificaat altijd inbegrepen · Parkeren zonder kosten voor de deur · Maximaal twee bezoekers per cheque, vanaf 12 jaar · Geldigheidsduur 3 maanden · Galerie sinds 2005 (alleen bij logo).
Toegestane CTA's
	•	Activeer uw cheque (homepage + chequeinvoer)
	•	Plan uw bezoek (welkomstscherm primair)
	•	Kies uw bezoekmoment (variant)
	•	Maak een afspraak (variant)
	•	"Verder" / "Bevestig afspraak" / "Voeg toe aan agenda" — Besluit nodig
Wat absoluut niet mag
Directe route chequeinvoer → planner zonder welkomstscherm. € 500 als hero. Partnerlogomuur of meerdere partners. "Mede mogelijk gemaakt door". Kortingstaal, percentages, "voordeel", "deal". "Plan uw middag", "Boek uw beleving", "Plan uw dagje". "Reserveren" als primaire CTA. "Verzilver uw voucher", "Claim uw cheque". Urgency: "nog maar", "laatste kans", countdown, badges. "Erkenningsgebaar" als publieke merkmond. Exacte maten in publieke copy. "Ruimere collectie", "duurder werk", "upgrade". Reviewscore als hoofdclaim. Stockfoto's, GIF, dame-met-schilderij. Nieuwsbrief-opt-in. Cross-sell of "bekijk ook". Celebratie-toon. Tweede primaire CTA naast de eerste.
Open besluiten
Besluit nodig: openingstijden · exacte beschikbare dagen · exacte tijdsloten · duur per slot · capaciteit per slot · CTA "Verder" plannerscherm 1/2 · CTA "Bevestig afspraak" plannerscherm 3 · CTA "Voeg toe aan agenda" plannerscherm 4 · CTA "Meer over de galerie" homepage secundair · privacytekst plannerscherm 3 · papieren cheque meenemen ja/nee · errorcopy chequeinvoer · beleid geen tijdsloten beschikbaar · reviewfragmenten op homepage · reviewscore en reviewaantal publiek tonen ja/nee.
QA-check voor Figma Make
	•	Categorie binnen 3 seconden helder.
	•	Welkomstscherm staat altijd vóór de planner.
	•	Maximaal één primaire CTA per scherm.
	•	Partner alleen individueel zichtbaar op welkomstscherm; nergens anders.
	•	€ 500 nergens als hero.
	•	Geen percentages, kortingstaal of urgency.
	•	Geen e-commerce-elementen.
	•	Plannerflow heeft exact vier stappen.
	•	Bevestigingsscherm functioneel, geen verkoopinformatie.
	•	Alle "besluit nodig"-items expliciet gemarkeerd in wireframe.

DKVK_QR_Link_Route_Context.md
Doel van dit Make-bestand
Wireframes voor de persoonlijke route via QR-code op de cheque-achterkant of via persoonlijke link in partnermail. Klant arriveert via automatische chequeherkenning op het persoonlijk welkomstscherm en doorloopt daarna de planner. Geen invoer van chequenummer of postcode in deze route. Geen login. Geen account.
Flow / schermen
	1	Entry: QR-scan of klik op persoonlijke link
	2	Automatische chequeherkenning (technische tussenstap; loadstate)
	3	Persoonlijk welkomstscherm (verplichte tussenstap vóór planner)
	4	Planner — vier stappen: dag → tijd → gegevens → bevestiging
	5	Bevestigingsscherm + bevestigingsmail (apart)
Edge-states (verplicht apart wireframen): Successtate · Ongeldige link/QR · Verlopen cheque · Cheque al gebruikt · Afspraak al gepland.
Verplichte inhoud
Loadstate / herkenning — Korte rustige melding ("Een moment alstublieft, uw cheque wordt opgehaald") — Besluit nodig: exacte tekst. Geen celebratiepagina, geen marketingbeeld.
Persoonlijk welkomstscherm — "Welkom [voornaam]. Uw Kunst-Waardecheque is herkend." Partner-vermelding individueel: "Namens [partner]". Chequevisualisatie: chequenummer, € 500,—, geldig tot [datum]. Korte uitleg twee routes als structuur. Primair: Plan uw bezoek. Secundair: Kies uw bezoekmoment.
Planner-stappen — Identiek aan Core Flow, met persoonlijke gegevens vooraf ingevuld waar mogelijk. Klant kan corrigeren.
Edge-states:
	•	Ongeldige link/QR: rustige foutmelding; service-optie (074 - 291 48 57) — Besluit nodig: errorcopy.
	•	Verlopen cheque: feitelijke melding zonder automatische coulance-belofte; verwijzing naar contact — Besluit nodig: errorcopy + procedure.
	•	Cheque al gebruikt: feitelijke melding + service-optie — Besluit nodig.
	•	Afspraak al gepland: verwijzing naar bestaande afspraak; mogelijkheid wijzigen — Besluit nodig: procedure.
Verschil met algemene website-route
Aspect
Persoonlijke QR/link
Algemene website
Entry
QR of mail-link
Homepage → "Activeer uw cheque"
Chequeinvoer
Niet zichtbaar; auto-herkenning
Chequenummer + postcode
Eerste interactieve scherm
Welkomstscherm
Chequeinvoer-scherm
Plannerscherm 3 velden
Vooraf ingevuld waar mogelijk
Klant vult zelf in
Welkomstscherm
Verplicht
Verplicht
Vaste feiten
Kunst-Waardecheque met chequenummer, waarde € 500,—, geldigheidsduur 3 maanden. Persoonlijke link en QR leiden via automatische herkenning naar persoonlijk welkomstscherm. Telefoon voor service: 074 - 291 48 57. Adres: Geerdinksweg 2, 7555 DM Hengelo (OV).
Toegestane CTA's
	•	Plan uw bezoek (welkomstscherm primair)
	•	Kies uw bezoekmoment (secundair)
	•	Maak een afspraak (variant)
	•	Service-optie / contact bij foutscherm — Besluit nodig
Wat absoluut niet mag
Directe route QR/link → agenda zonder welkomstscherm. Chequenummer of postcode opnieuw vragen. Login of account. Andere partners zichtbaar; "een van onze partners". Partneroverzicht. Celebratiepagina ("Gefeliciteerd, uw cheque is geactiveerd!"). € 500 als hero. Kortingstaal of percentages. Urgency op geldigheidsdatum. Verzilver-/voucher-/coupon-taal. Automatische coulance-belofte op website. Beschuldigende foutmeldingen. Marketing-opt-in of nieuwsbrief. Retargeting-pixel zonder besluit. Cross-sell of "bekijk ook".
Open besluiten
Besluit nodig: technische datavelden persoonlijke link / QR · matchlogica auto-herkenning · errorcopy QR/link ongeldig · errorcopy verlopen cheque · procedure verlopen cheque (publiek) · coulanceprocedure publiek · procedure cheque al gebruikt · procedure afspraak al gepland · link-geldigheid (token-expiry) · laadtekst tijdens herkenning · privacytekst plannerscherm 3 · papieren cheque meenemen ja/nee.
QA-check voor Figma Make
	•	QR/link gaat nooit direct naar planner — altijd via welkomstscherm.
	•	Geen chequenummer- of postcode-invoer in persoonlijke route.
	•	Geen login of account.
	•	Welkomstscherm toont alleen de eigen partner.
	•	Edge-states (ongeldig, verlopen, gebruikt, al gepland) als aparte schermen.
	•	Geen automatische coulance op website.
	•	Geen celebratie-toon.
	•	€ 500 nergens als hero.
	•	Foutmeldingen zonder beschuldigende taal en zonder urgency.
	•	Service-optie (telefoon) zichtbaar bij elke foutscherm.
	•	Alle "besluit nodig"-items expliciet gemarkeerd.

DKVK_Service_Error_Context.md
Doel van dit Make-bestand
Wireframes voor servicepagina's en error states. Service is uitsluitend functioneel: rustig probleem oplossen zonder cross-sell, marketing of commerciële opvolging. Foutmeldingen rustig en niet-beschuldigend, met altijd een service-optie.
Flow / schermen
Servicepagina's: Service-overzicht · Afspraak wijzigen · Cheque overdragen · Bezorging · Omruilen · Cheque kwijt · Verlopen cheque · Contact. Error states: Cheque niet gevonden · Postcode klopt niet · Afspraak al gepland · Geen tijdsloten beschikbaar.
Verplichte inhoud
Service-overzicht — Korte feitelijke uitleg + lijst servicevragen met links + telefoon 074 - 291 48 57.
Afspraak wijzigen — Klantvraag: ik wil verzetten. Tonen: bestaande afspraak (datum, tijd, chequenummer); nieuwe dag/tijd kiezen. CTA "Bevestig wijziging" — Besluit nodig. Besluit nodig: wijzigingstermijn, kosten, procedure.
Cheque overdragen — Klantvraag: doorgeven aan iemand anders. Tonen: cheque is overdraagbaar maar niet verkoopbaar. Besluit nodig: procedure.
Bezorging — Klantvraag: thuisbezorging. Tonen: bezorging bestaat tegen passend tarief. Besluit nodig: bezorgtarief.
Omruilen — Klantvraag: werk omruilen. Tonen: bij vernisde werken 5-jaars omruilgarantie. Besluit nodig: procedure.
Cheque kwijt — Klantvraag: cheque niet vinden. Tonen: rustige uitleg, verwijzing naar partner of galerie. Besluit nodig: procedure.
Verlopen cheque — Klantvraag: cheque over geldigheidsdatum. Tonen: feitelijke melding, verwijzing naar contact. Geen automatische coulance-belofte op website. Besluit nodig: procedure, coulance publiek.
Contact — Adres, 074 - 291 48 57, e-mail (Besluit nodig), openingstijden (Besluit nodig).
Errors — Cheque niet gevonden / postcode klopt niet: rustige foutmelding + controle-instructie + telefoon. Afspraak al gepland: verwijzing + wijzigen — Besluit nodig: procedure. Geen tijdsloten beschikbaar: rustige melding + alternatief of contact, geen wachtlijst zonder besluit, geen urgency — Besluit nodig: beleid.
Vaste feiten
Cheque is overdraagbaar, niet verkoopbaar. Niet inwisselbaar voor geld. 3 maanden geldig. Coulance: maximaal éénmaal per klantdossier (intern). Bezorging bestaat (tarief besluit nodig). Vernis activeert 5-jaars omruilgarantie. Telefoon: 074 - 291 48 57.
Toegestane CTA's
	•	"Cheque overdragen"
	•	"Bevestig wijziging" — Besluit nodig
	•	"Neem contact op" / telefoonweergave
	•	Overige service-CTA's: Besluit nodig
Wat absoluut niet mag
Cross-sell, "bekijk ook", andere werken tonen. Nieuwe werken of collectie op servicepagina. Nieuwsbrief- of marketing-opt-in. Aftercare-marketing. Reviewverzoek per mail. Beschuldigende foutmeldingen. Urgency: "snel boeken!", countdown, "nog X plekken". Automatische coulance-belofte op website. Doorverwijzing naar partneroverzicht. "Verrassend genoeg nog geen gebruik van gemaakt"-toon. "Uit coulance bieden wij u" richting klant. Marketing-doorlink ("Denk aan ons bij uw volgende verbouwing"). Procedure beloven die niet operationeel vastligt.
Open besluiten
Besluit nodig: annuleringsregels · wijzigingstermijn · procedure cheque overdragen · procedure cheque kwijt · procedure verlopen cheque · coulanceprocedure publiek · bezorgtarief · tarief lijsten · tarief vernis · procedure omruilen · procedure bij klacht · exacte errorcopy per foutscherm · beleid geen tijdsloten beschikbaar · privacytekst · openingstijden contactpagina · e-mailadres galerie publiek · functionele rustige contactoptie / chat ja of nee · MVP-bereik servicepagina's.
QA-check voor Figma Make
	•	Servicepagina's bevatten geen cross-sell, "bekijk ook" of nieuwe werken.
	•	Foutmeldingen rustig, niet-beschuldigend.
	•	Telefoon 074 - 291 48 57 zichtbaar bij elke service- en error-scherm.
	•	Geen automatische coulance-belofte op verlopen-cheque-scherm.
	•	Geen urgency of schaarste-indicatoren.
	•	Geen marketing-opt-in of nieuwsbrief.
	•	Partner alleen individueel benoemd waar relevant.
	•	Alle "besluit nodig"-items expliciet gemarkeerd.
	•	Geen procedurebeloften zonder operationele basis.
	•	Tone of voice in foutmeldingen feitelijk en rustig.

DKVK_Admin_Backoffice_Context.md
Doel van dit Make-bestand
Wireframes voor admin/backoffice. Admin is functioneel: beheer van partners, cheques, afspraken, tijdsloten, servicevragen en logs. Geen CRM-features, geen marketingmodules, geen verkoopdashboards. Interne KPI's mogen worden getoond zonder verkoopdruk.
Flow / schermen
	1	Admin login
	2	Admin dashboard
	3	Cheques overzicht
	4	Cheque detail
	5	Afspraken overzicht
	6	Afspraak detail
	7	Partners overzicht
	8	Partner detail
	9	Tijdslotenbeheer
	10	Servicevragen (overzicht + detail)
	11	E-maillogs
	12	Auditlog
Verplichte inhoud
Admin login — E-mail + wachtwoord; eventueel 2FA. Geen "onthoud mij" zonder besluit. Besluit nodig: admin-auth.
Dashboard — Functioneel: openstaande afspraken vandaag, openstaande servicevragen, recent verlopen cheques, afspraken deze week. Geen verkoopdruk-widgets. Geen Route B-targetbalk.
Cheques overzicht / detail — Lijst met chequenummer, partner, status (issued, recognized, planned, attended, completed, expired, transferred, extended_once), uitgiftedatum, geldig tot. Detail: chequehouder, partnercontext, planner-status, gekoppelde afspraak, bezoek, route_choice, eventuele meerprijs, factuur. Acties: status muteren, notitie toevoegen, cheque overdragen.
Afspraken overzicht / detail — Lijst per dag/week/partner met status (created, confirmed, attended, no_show, changed, cancelled). Detail: chequenummer, klantgegevens, dag, tijd, eventuele extras. Acties: wijzigen, annuleren, no-show markeren.
Partners overzicht / detail — Lijst met partner, contact, aantal uitgegeven cheques, aantal verzilverde cheques (intern KPI). Detail: gegevens, cheques, performance (intern, geen ranking publiek), uitgiftegeschiedenis. Besluit nodig: partnerdashboard ja/nee.
Tijdslotenbeheer — Beheer beschikbare dagen, tijdsloten, capaciteit per slot, uitzonderingen. Besluit nodig: tijdsloten, capaciteit, openingstijden.
Servicevragen — Lijst openstaande tickets (afspraak wijzigen, overdragen, kwijt, verlopen, bezorging, omruilen, klacht, privacy). Detail: klantgegevens, vraag, status, intern logboek. Acties: toewijzen, beantwoorden, sluiten.
E-maillogs — Verstuurde mails (bevestiging, datumbevestiging, dag +21/+45/+60, coulance). Status: sent, opened, clicked, bounced. Besluit nodig: e-mailprovider.
Auditlog — Beheersacties met gebruiker, tijdstip, actietype, object. Besluit nodig: auditlogbeleid.
Vaste feiten
Hoofdobjecten: Partner · Cheque · Customer · Appointment · TimeSlot · Visit · RouteChoice · Payment · Review · Reminder · EmailLog · ServiceRequest · DayExtra · AdminUser · AuditLog. Cheque-statusmodel: issued → recognized → (planned) → attended → completed | expired | transferred | extended_once. Coulance: max 1× per dossier. Reminders: dag +21, +45, +60. Bezoekduur: 60–90 min.
Toegestane CTA's en acties
	•	"Bewerken" / "Opslaan" / "Annuleren" voor record-mutaties
	•	"Status muteren" binnen vastgelegd model
	•	"Cheque overdragen-actie" — Besluit nodig: procedure
	•	"Mail handmatig versturen" voor functionele service
	•	"Servicevraag toewijzen / beantwoorden / sluiten"
Wat absoluut niet mag
Nieuwsbriefmodule. Aftercaremodule of retentie-sequence-builder. Marketingprofielen, smaakprofielen, kunstvoorkeuren. Retargetingdata of pixel-management. Partnerlogomuur of publieke partnerlijst genereren. Commerciële opvolgingsmodule. Route B-verkoopdashboard richting adviseurs. Bonus-/target-instellingen op Route B per adviseur. Reviewscore-aanpassen / cureren (geen "filter alleen 5★"-export). Massamail-tooling met marketingdoel. Klantsegmentatie voor retargeting. Partnerranking als publieke output.
Open besluiten
Besluit nodig: rollen en rechten · admin-auth (SSO, 2FA, wachtwoordbeleid) · openingstijden · tijdsloten en capaciteit per slot · no-showbeleid · annuleringsregels · procedure cheque overdragen · e-mailprovider en trackingstatussen · dataretentie per object · verwerkers / analytics-tooling · auditlogbeleid · partnerdashboard ja/nee · gebruik adviseurdata in segmentatie · partnerbenchmarking intern · drempelwaarden alerts · meerprijsregistratie · dataverzameling in galerie.
QA-check voor Figma Make
	•	Geen nieuwsbrief-, aftercare- of marketingmodule.
	•	Geen partnerlogomuur of publieke partnerlijst-export.
	•	Cheque-statusmodel consistent door alle schermen.
	•	Servicevragen blijven functioneel.
	•	Auditlog en e-maillog read-only voor gewone admins.
	•	Reviewscore nooit als hoofdclaim of marketing-element.
	•	Route B-data zonder druk- of target-mechanismen.
	•	Geen export-functie voor retargeting of marketingprofielen.
	•	Alle "besluit nodig"-items zichtbaar; geen verzonnen waarden.
	•	Auth-scherm zonder marketingelement.

DKVK_UI_Wireframe_Context.md
Doel van dit Make-bestand
Algemene UI- en wireframe-richting voor alle low-fidelity prototypes. Geen finale visuele stijl, geen kleurpalet, geen typografiekeuze. Alleen layout-, component- en interactieprincipes die de positionering bewaken: rust, verificatie, geen webshopgevoel, geen verkoopframe, geen luxe-codes.
Flow / schermen
Niet van toepassing — dit bestand levert principes voor alle wireframes (Core Flow, QR/Link, Service/Error, Admin).
Verplichte inhoud (principes)
Visueel — Low-fidelity. Grijswaarden of zeer beperkte tonale schaal. Veel witruimte; rust prevaleert. Eén primaire CTA per scherm. Geen finale kleurcodes, geen finale typografie, geen finale logo-uitvoering.
Layout — Duidelijke hiërarchie: één hoofdactie, één hoofdboodschap per scherm. Eén kolom als basisgrid. Categorie binnen 3 seconden helder. Legitimiteit binnen 10 seconden zichtbaar (adres, "sinds 2005" bij logo, eventueel reviewfragmenten terloops). Mobile-first — Besluit nodig: breakpoint (≤360px / ≤380px).
CTA — Eén primaire CTA per scherm in rustige stijl. Geen schreeuwerige knoppen. Geen zwarte conversieknoppen zonder merkkleur. Geen badges. Knoptekst uit toegestane lijst.
Formulieren — Minimaal aantal velden. Plannerscherm 3: naam, e-mail, telefoonnummer. Geen marketing-opt-in, geen voorkeur stijl/kunstenaar. Foutmeldingen rustig en niet-beschuldigend. Vooraf invullen waar mogelijk bij persoonlijke route. Privacy-verwijzing klein en functioneel — Besluit nodig.
Beeldgebruik — Geen stockfotografie, lifestylebeelden, GIF, modellen met schilderijen, premium-interieurs, "tevreden stelletje"-fotografie. Reëel beeld of placeholder zonder verzonnen invulling. Besluit nodig: definitief fotografie-/beeldbeleid.
Componenten — Chequevisualisatie als rustig gestileerde kaart op welkomstscherm en bevestigingspagina. Reviewfragmenten als rustige citaten met naam, woonplaats, datum (geen sterrenfilter, geen partnerfilter). Foutmelding inline of kleine modal — geen volledige overlay. Plannerstappen progress-arm — Besluit nodig: progress-indicator ja/nee. Footer met praktische gegevens (adres, telefoon, link voorwaarden, link contact); geen logomuur, geen nieuwsbrief.
Vaste feiten
Eén primaire CTA per scherm. Welkomstscherm verplicht vóór planner. Planner heeft exact vier stappen. Adres en telefoon altijd in footer. Maximaal vijf navigatie-items in hoofdmenu.
Toegestane CTA's (overzicht)
	•	Activeer uw cheque (homepage + chequeinvoer)
	•	Plan uw bezoek (welkomstscherm primair)
	•	Kies uw bezoekmoment (variant)
	•	Maak een afspraak (variant)
	•	Cheque overdragen (servicepagina)
	•	Verder, Bevestig afspraak, Voeg toe aan agenda, Lees reviews, Bevestig wijziging, Meer over de galerie: Besluit nodig
Wat visueel verboden is
Stockfoto's en lifestylebeelden. Bewegende hero (video, GIF, autoplay-carousel). Productgrid of webshopraster als hoofdstructuur. Badges. Countdown of timer. Popups en exit-intent-modals. Partnerlogomuur of meerdere partnerlogo's. Luxe-hotelgevoel: marmer, premium-typografie, "exclusief"-codes. Art-fair-esthetiek: salonpresentatie, vernissage-codes, kunstenaarsnamen prominent. Conversieschreeuwende knoppen. Marketingdecoratie: linten, sterren, "nieuw!"-flags. Cookie-walls die als marketing voelen. Proactieve chatwidgets. Reviewscore prominent als hero. € 500 als grote claim. Felle accentkleuren in dominante vlakken.
Open besluiten
Besluit nodig: definitieve visuele stijl · finale kleurcodes · typografiekeuze · fotografie-/beeldbeleid · reviewfragmenten op homepage · reviewscore en reviewaantal publiek tonen ja/nee · secundaire CTA "Meer over de galerie" · progress-indicator in planner · mobile-first breakpoint · accessibility-niveau (WCAG A/AA/AAA) · stijlgids / design tokens · functionele rustige chatwidget · cookie-banner-vorm.
QA-check voor Figma Make
	•	Layout heeft één primaire CTA per scherm.
	•	Geen webshop- of e-commerce-elementen.
	•	Geen stockfoto's of GIF's.
	•	Geen badges, countdown of urgency-elementen.
	•	Geen partnerlogomuur of collectieve partnerweergave.
	•	Geen popups; geen proactieve chat zonder besluit.
	•	Reviewfragmenten (indien zichtbaar) zonder sterrenfilter, partnerfilter of curatie naar 5★.
	•	€ 500 nergens als hero of slogan.
	•	Foutmeldingen rustig en functioneel.
	•	Voettekst bevat adres en telefoon; geen nieuwsbrief-prompt.
	•	Alle "besluit nodig"-items zichtbaar in elk wireframe.
	•	Wireframes voelen als verificatieplek, niet als verkoopomgeving.
