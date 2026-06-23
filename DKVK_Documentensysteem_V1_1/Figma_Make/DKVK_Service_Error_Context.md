# DKVK_Service_Error_Context.md

## Doel van dit Make-bestand

Wireframes voor servicepagina's en error states. Service is uitsluitend functioneel: de klant moet een vraag of probleem rustig kunnen oplossen, zonder cross-sell, marketing of commerciële opvolging. Foutmeldingen zijn rustig, niet beschuldigend, en bieden altijd een service-optie.

## Flow / schermen

**Servicepagina's**
1. Service-overzicht (instappagina)
2. Afspraak wijzigen
3. Cheque overdragen
4. Bezorging
5. Omruilen
6. Cheque kwijt
7. Verlopen cheque
8. Contact

**Error states**
9. Cheque niet gevonden (chequenummer match faalt)
10. Postcode klopt niet
11. Afspraak al gepland
12. Geen tijdsloten beschikbaar

## Verplichte inhoud per scherm

**Service-overzicht**
- Korte feitelijke uitleg: hier kunt u een vraag stellen of iets aanpassen.
- Lijst van servicevragen met directe links: afspraak wijzigen, cheque overdragen, bezorging, omruilen, cheque kwijt, contact.
- Telefoon: 074 - 291 48 57.

**Afspraak wijzigen**
- Klantvraag: ik wil mijn afspraak verzetten.
- Tonen: bestaande afspraak (datum, tijd, chequenummer); mogelijkheid nieuwe dag/tijd te kiezen.
- CTA: "Bevestig wijziging" — *Besluit nodig: exacte tekst*.
- *Besluit nodig: wijzigingstermijn, kosten, procedure*.

**Cheque overdragen**
- Klantvraag: ik wil de cheque doorgeven aan iemand anders.
- Tonen: korte uitleg dat de cheque overdraagbaar maar niet verkoopbaar is.
- *Besluit nodig: procedure (formulier, tenaamstelling, afspraakroute)*.

**Bezorging**
- Klantvraag: kan het werk thuisbezorgd worden?
- Tonen: bezorging bestaat tegen passend tarief.
- *Besluit nodig: bezorgtarief*.

**Omruilen**
- Klantvraag: kan ik mijn werk omruilen?
- Tonen: bij vernisde werken geldt een omruilgarantie van vijf jaar.
- *Besluit nodig: procedure*.

**Cheque kwijt**
- Klantvraag: ik kan mijn cheque niet vinden.
- Tonen: rustige uitleg; verwijzing naar partner of galerie.
- *Besluit nodig: procedure*.

**Verlopen cheque**
- Klantvraag: mijn cheque is over de geldigheidsdatum.
- Tonen: feitelijke melding; verwijzing naar contact.
- **Geen automatische coulance-belofte op website.**
- *Besluit nodig: procedure verlopen cheque, coulanceprocedure publiek*.

**Contact**
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV).
- Telefoon: 074 - 291 48 57.
- E-mailadres galerie publiek — *Besluit nodig*.
- Openingstijden — *Besluit nodig*.

**Error: cheque niet gevonden / postcode klopt niet**
- Rustige foutmelding; controleer-instructie.
- Telefoonnummer voor hulp.
- Geen "u heeft fout ingevoerd"-toon.

**Error: afspraak al gepland**
- Verwijzing naar bestaande afspraak; mogelijkheid wijzigen.
- *Besluit nodig: procedure*.

**Error: geen tijdsloten beschikbaar**
- Rustige melding; mogelijkheid alternatieve dag of contact.
- Geen wachtlijst zonder besluit; geen urgency.
- *Besluit nodig: beleid en alternatieve flow*.

## Vaste feiten

- Cheque is overdraagbaar, niet verkoopbaar.
- Cheque is niet inwisselbaar voor geld.
- Cheque is 3 maanden geldig.
- Coulance: maximaal éénmaal per klantdossier (intern; publieke procedure besluit nodig).
- Bezorging bestaat (tarief besluit nodig).
- Vernis activeert 5-jaars omruilgarantie.
- Telefoon: 074 - 291 48 57.

## Toegestane CTA's

- "Cheque overdragen"
- "Bevestig wijziging" — *Besluit nodig*
- "Neem contact op" / telefoonweergave
- *Overige service-CTA's: Besluit nodig*

## Wat absoluut niet mag

- Cross-sell, "bekijk ook"-blokken, andere werken tonen.
- Nieuwe werken of collectie tonen op servicepagina.
- Nieuwsbrief- of marketing-opt-in.
- Aftercare-marketing.
- Reviewverzoek per mail.
- Beschuldigende foutmeldingen ("u heeft fout ingevoerd").
- Urgency: "snel boeken!", countdown, "nog X plekken".
- Automatische coulance-belofte op website.
- Doorverwijzing naar partneroverzicht; partner is altijd de specifieke partner op de cheque.
- "Verrassend genoeg nog geen gebruik van gemaakt"-toon.
- "Uit coulance bieden wij u" richting klant.
- Marketing-doorlink ("Denk aan ons bij uw volgende verbouwing").
- Procedure beloven die niet operationeel vastligt.

## Open besluiten

- Besluit nodig: annuleringsregels (termijn, kosten)
- Besluit nodig: wijzigingstermijn afspraak
- Besluit nodig: procedure cheque overdragen
- Besluit nodig: procedure cheque kwijt
- Besluit nodig: procedure verlopen cheque
- Besluit nodig: coulanceprocedure publiek
- Besluit nodig: bezorgtarief
- Besluit nodig: tarief lijsten
- Besluit nodig: tarief vernis
- Besluit nodig: procedure omruilen
- Besluit nodig: procedure bij klacht
- Besluit nodig: exacte errorcopy per foutscherm
- Besluit nodig: beleid geen tijdsloten beschikbaar (alternatieve dag of wachtlijst)
- Besluit nodig: privacytekst
- Besluit nodig: openingstijden contactpagina
- Besluit nodig: e-mailadres galerie publiek
- Besluit nodig: functionele rustige contactoptie / chat ja of nee
- Besluit nodig: MVP-bereik servicepagina's (welke flows zelfservice, welke contactformulier)

## QA-check voor Figma Make

- Servicepagina's bevatten geen cross-sell, geen "bekijk ook", geen nieuwe werken.
- Foutmeldingen zijn rustig, niet beschuldigend.
- Telefoonnummer 074 - 291 48 57 is zichtbaar bij elke service- en errorscherm.
- Geen automatische coulance-belofte op verlopen-cheque-scherm.
- Geen urgency of schaarste-indicatoren.
- Geen marketing-opt-in of nieuwsbrief.
- Partner alleen individueel benoemd waar relevant; nooit collectief.
- Alle "besluit nodig"-items zichtbaar gemarkeerd in het wireframe.
- Geen procedurebeloften zonder operationele basis.
- Tone of voice in foutmeldingen is feitelijk en rustig.
