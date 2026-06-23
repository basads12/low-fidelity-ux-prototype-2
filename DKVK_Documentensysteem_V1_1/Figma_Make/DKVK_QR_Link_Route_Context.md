# DKVK_QR_Link_Route_Context.md

## Doel van dit Make-bestand

Wireframes voor de persoonlijke route via QR-code op de cheque-achterkant of via persoonlijke link in partnermail. Klant arriveert via automatische chequeherkenning op het persoonlijk welkomstscherm en doorloopt daarna de planner. Geen invoer van chequenummer of postcode in deze route. Geen login. Geen account.

## Flow / schermen

1. Entry: QR-scan of klik op persoonlijke link
2. Automatische chequeherkenning (technische tussenstap; geen interactieve UI vereist anders dan loadstate)
3. Persoonlijk welkomstscherm (verplichte tussenstap vóór planner)
4. Planner — vier stappen (zie Core Flow): dag → tijd → gegevens → bevestiging
5. Bevestigingsscherm + bevestigingsmail (apart)

Edge-states (verplicht apart wireframen):

- **Successtate** — cheque herkend, welkomstscherm laadt direct.
- **Ongeldige link/QR** — chequenummer of token niet herkend.
- **Verlopen cheque** — cheque is buiten de drie maanden geldigheid.
- **Cheque al gebruikt** — visit_completed event al geregistreerd.
- **Afspraak al gepland** — appointment_created al actief op deze cheque.

## Verschil met algemene website-route

| Aspect | Persoonlijke QR/link-route | Algemene website-route |
|---|---|---|
| Entry | QR op cheque of link in mail | Homepage → "Activeer uw cheque" |
| Chequeinvoer | Niet zichtbaar; automatische herkenning | Chequenummer + postcode invoeren |
| Eerste interactieve scherm | Persoonlijk welkomstscherm | Chequeinvoer-scherm |
| Velden in plannerscherm 3 | Naam, e-mail, telefoon — waar mogelijk vooraf ingevuld | Klant vult zelf in |
| Welkomstscherm | Verplicht | Verplicht |

## Verplichte inhoud per scherm

**Loadstate / herkenning**
- Korte rustige melding: "Een moment alstublieft, uw cheque wordt opgehaald" — *Besluit nodig: exacte tekst*.
- Geen celebratiepagina ("Gefeliciteerd!").
- Geen marketingbeeld.

**Persoonlijk welkomstscherm (zelfde als Core Flow)**
- Goedgekeurde kop: "Welkom [voornaam]. Uw Kunst-Waardecheque is herkend."
- Partner-vermelding individueel: "Namens [partner]".
- Chequevisualisatie: chequenummer, € 500,—, geldig tot [datum].
- Korte uitleg twee routes als structuur (geen percentages, geen voordeel).
- Eén primaire CTA: **Plan uw bezoek**. Secundair: **Kies uw bezoekmoment**.

**Planner-stappen** — identiek aan Core Flow, met persoonlijke gegevens vooraf ingevuld waar mogelijk. Klant kan corrigeren.

**Edge-states (lege wireframes met copyzones)**

- *Ongeldige link/QR*: rustige foutmelding; service-optie (telefoon 074 - 291 48 57); geen beschuldigende taal — *Besluit nodig: exacte errorcopy*.
- *Verlopen cheque*: feitelijke melding zonder automatische coulance-belofte; verwijzing naar contact — *Besluit nodig: errorcopy + procedure*.
- *Cheque al gebruikt*: feitelijke melding + service-optie — *Besluit nodig: exacte tekst*.
- *Afspraak al gepland*: verwijzing naar bestaande afspraak; mogelijkheid tot wijzigen — *Besluit nodig: procedure*.

## Vaste feiten

- Kunst-Waardecheque met chequenummer, waarde € 500,—, geldigheidsduur 3 maanden.
- Persoonlijke link en QR leiden via automatische herkenning naar persoonlijk welkomstscherm.
- Telefoon voor service: 074 - 291 48 57.
- Adres: Geerdinksweg 2, 7555 DM Hengelo (OV).

## Toegestane CTA's

- **Plan uw bezoek** (welkomstscherm primair)
- **Kies uw bezoekmoment** (welkomstscherm secundair)
- **Maak een afspraak** (variant)
- Service-optie / contact bij foutscherm — *Besluit nodig: exacte tekst*

## Wat absoluut niet mag

- Directe route van QR of persoonlijke link naar de agenda — altijd via welkomstscherm.
- Chequenummer of postcode opnieuw vragen in persoonlijke route.
- Login- of account-stap.
- Andere partners zichtbaar maken; geen "een van onze partners".
- Partneroverzicht of partnerlijst.
- Celebratiepagina ("Gefeliciteerd, uw cheque is geactiveerd!").
- € 500 als hero-claim of slogan.
- Kortingstaal of percentages.
- Urgency op geldigheidsdatum.
- Verzilver-/voucher-/coupon-taal.
- Automatische coulance-belofte op website bij verlopen cheque.
- Beschuldigende foutmeldingen ("u heeft fout ingevoerd").
- Marketing-opt-in of nieuwsbrief.
- Retargeting-pixel op de herkenningstap zonder besluit.
- Cross-sell of "bekijk ook"-blokken.

## Open besluiten

- Besluit nodig: technische datavelden persoonlijke link / QR (chequenummer, token, postcode-of-niet)
- Besluit nodig: matchlogica automatische herkenning
- Besluit nodig: exacte errorcopy QR/link ongeldig
- Besluit nodig: exacte errorcopy verlopen cheque
- Besluit nodig: procedure verlopen cheque (publiek)
- Besluit nodig: coulanceprocedure publiek (op website tonen ja/nee)
- Besluit nodig: procedure cheque al gebruikt
- Besluit nodig: procedure afspraak al gepland (verwijzing of nieuwe afspraak)
- Besluit nodig: link-geldigheid (token-expiry, eenmalig of meermaals bruikbaar)
- Besluit nodig: laadtekst tijdens herkenning
- Besluit nodig: privacytekst plannerscherm 3
- Besluit nodig: papieren cheque meenemen ja/nee

## QA-check voor Figma Make

- QR/link gaat nooit direct naar planner — altijd via welkomstscherm.
- Geen chequenummer- of postcode-invoer in persoonlijke route.
- Geen login of account.
- Welkomstscherm toont alleen de eigen partner van de klant.
- Edge-states (ongeldig, verlopen, gebruikt, al gepland) zijn als aparte schermen aanwezig.
- Geen automatische coulance op website beloofd.
- Geen celebratie-toon.
- € 500 nergens als hero.
- Foutmeldingen zonder beschuldigende taal en zonder urgency.
- Service-optie (telefoon) zichtbaar bij elke foutscherm.
- Alle "besluit nodig"-items expliciet gemarkeerd in wireframes; nooit als feit getoond.
