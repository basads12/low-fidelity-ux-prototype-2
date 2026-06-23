# DKVK_Admin_Backoffice_Context.md

## Doel van dit Make-bestand

Wireframes voor admin/backoffice. Admin is uitsluitend functioneel: beheer van partners, cheques, afspraken, tijdsloten, servicevragen en logs. Geen CRM-features, geen marketingmodules, geen verkoopdashboards die druk creëren. Interne KPI's mogen worden getoond (zie KPI-document V1) maar zonder verkoopdruk-mechanismen.

## Flow / schermen

1. Admin login
2. Admin dashboard
3. Cheques overzicht
4. Cheque detail
5. Afspraken overzicht
6. Afspraak detail
7. Partners overzicht
8. Partner detail
9. Tijdslotenbeheer
10. Servicevragen (overzicht + detail)
11. E-maillogs
12. Auditlog

## Verplichte inhoud per scherm

**Admin login**
- E-mail- en wachtwoordveld; eventuele 2FA.
- Geen "onthoud mij"-checkbox zonder besluit.
- *Besluit nodig: admin-auth (SSO, 2FA, passwordless)*.

**Admin dashboard**
- Functioneel overzicht: aantal openstaande afspraken vandaag, openstaande servicevragen, aantal verlopen cheques recent, aantal afspraken deze week.
- Geen verkoopdruk-widgets.
- Geen Route B-targetbalk.

**Cheques overzicht / detail**
- Lijst van cheques met chequenummer, partner, status (issued, recognized, planned, attended, completed, expired, transferred, extended_once), uitgiftedatum, geldig tot.
- Detail: chequehouder (naam, e-mail, telefoon), partnercontext, planner-status, gekoppelde afspraak, gekoppeld bezoek, route_choice, eventuele meerprijs, eventuele factuur.
- Acties: status muteren (binnen vastgelegd statusmodel), notitie toevoegen, cheque overdragen-actie.

**Afspraken overzicht / detail**
- Lijst per dag/week/partner met status (created, confirmed, attended, no_show, changed, cancelled).
- Detail: chequenummer, klantgegevens, dag, tijd, gegevens, eventuele dag-extras.
- Acties: wijzigen, annuleren, no-show markeren.

**Partners overzicht / detail**
- Lijst partners met naam, contact, aantal uitgegeven cheques, aantal verzilverde cheques (intern KPI).
- Detail: partnergegevens, cheques per partner, performance (intern, geen ranking publiek), uitgiftegeschiedenis.
- *Besluit nodig: partnerdashboard / partnerportaal ja/nee*.

**Tijdslotenbeheer**
- Beheer van beschikbare dagen, tijdsloten, capaciteit per slot.
- Mogelijkheid uitzonderingen vast te leggen (vakantie, evenement).
- *Besluit nodig: tijdsloten, capaciteit per slot, openingstijden*.

**Servicevragen**
- Lijst openstaande tickets met type (afspraak wijzigen, cheque overdragen, cheque kwijt, verlopen, bezorging, omruilen, klacht, privacy).
- Detail: klantgegevens, vraag, status, intern logboek.
- Acties: toewijzen, beantwoorden, sluiten.

**E-maillogs**
- Lijst verstuurde mails: bevestiging, datumbevestiging, reminder dag +21/+45/+60, coulance-mail.
- Status per mail: sent, opened (indien provider), clicked (indien provider), bounced.
- *Besluit nodig: e-mailprovider en welke statussen worden bijgehouden*.

**Auditlog**
- Lijst beheersacties met gebruiker, tijdstip, actietype, betrokken object.
- *Besluit nodig: auditlogbeleid (welke acties, retentietermijn)*.

## Vaste feiten

- Hoofdobjecten: Partner, Cheque, Customer / chequehouder, Appointment, TimeSlot, Visit, RouteChoice, Payment, Review, Reminder, EmailLog, ServiceRequest, DayExtra, AdminUser, AuditLog.
- Cheque-statusmodel: issued → recognized → (planned) → attended → completed | expired | transferred | extended_once.
- Coulance: maximaal éénmaal per klantdossier.
- Reminders: dag +21, +45, +60.
- Bezoekduur: 60–90 min als verwachting.

## Toegestane CTA's en acties

- "Bewerken" / "Opslaan" / "Annuleren" voor record-mutaties
- "Status muteren" binnen vastgelegd model
- "Cheque overdragen-actie" — *Besluit nodig: procedure*
- "Mail handmatig versturen" alleen voor functionele service
- "Servicevraag toewijzen / beantwoorden / sluiten"

## Wat absoluut niet mag

- Nieuwsbriefmodule.
- Aftercaremodule of retentie-sequence-builder.
- Marketingprofielen, smaakprofielen, kunstvoorkeuren.
- Retargetingdata of pixel-management.
- Partnerlogomuur of publieke partnerlijst genereren.
- Commerciële opvolgingsmodule (cross-sell, upsell-flows).
- Route B-verkoopdashboard richting adviseurs.
- Bonus-/target-instellingen op Route B per adviseur.
- Reviewscore-aanpassen / cureren (geen "filter alleen 5★"-export).
- Massamail-tooling met marketingdoel.
- Klantsegmentatie voor retargeting.
- Partnerranking als publieke output.

## Open besluiten

- Besluit nodig: rollen en rechten (super-admin, galeriemedewerker, partner-rol)
- Besluit nodig: admin-auth (SSO, 2FA, passwordless, wachtwoordbeleid)
- Besluit nodig: openingstijden
- Besluit nodig: tijdsloten en capaciteit per slot
- Besluit nodig: no-showbeleid (cheque vervalt of opnieuw boekbaar)
- Besluit nodig: annuleringsregels en wijzigingstermijn
- Besluit nodig: procedure cheque overdragen
- Besluit nodig: e-mailprovider en welke trackingstatussen
- Besluit nodig: dataretentie per object
- Besluit nodig: verwerkers / analytics-tooling (DPIA)
- Besluit nodig: auditlogbeleid (welke acties, retentie)
- Besluit nodig: partnerdashboard ja/nee
- Besluit nodig: gebruik adviseurdata in segmentatie
- Besluit nodig: partnerbenchmarking intern ja/nee
- Besluit nodig: drempelwaarden voor alerts
- Besluit nodig: meerprijsregistratie (Visit-veld of Payment-object)
- Besluit nodig: dataverzameling in galerie (tablet, backoffice)

## QA-check voor Figma Make

- Geen nieuwsbrief-, aftercare- of marketingmodule zichtbaar.
- Geen partnerlogomuur of publieke partnerlijst-export.
- Cheque-statusmodel consistent door alle schermen.
- Servicevragen blijven functioneel; geen verkoopopvolging.
- Auditlog en e-maillog zijn read-only voor gewone admins.
- Reviewscore wordt nooit als hoofdclaim of marketing-element gepresenteerd.
- Route B-data tonen geen druk- of target-mechanismen.
- Geen export-functie voor retargeting of marketingprofielen.
- Alle "besluit nodig"-items zichtbaar in wireframes; geen verzonnen waarden.
- Auth-scherm bevat geen marketingelement.
