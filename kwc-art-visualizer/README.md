# KWC Art Visualizer (MVP)

Nederlandstalige Next.js MVP voor:
- muurvisualisatie (settings + eigen upload),
- object-removal demo,
- wandkleur aanpassen,
- kunstwerk QR laden,
- type/formaat/lijst configureren,
- KWC-cheque valideren,
- order aanmaken + medewerkerflow,
- admin overzicht.

> Let op: productieonderdelen zoals echte betaalprovider, echte KWC-koppeling en echte AI-inpainting zijn in deze MVP als mock/adapters voorbereid.

## Installatie

```bash
npm install
```

## Database setup

```bash
npm run db:push
npm run db:seed
```

Dit maakt lokaal SQLite (`prisma/dev.db`) en vult demo-data.

## Starten

```bash
npm run dev
```

Open:
- `http://localhost:3000` → hoofdconfigurator
- `http://localhost:3000/admin` → admin dashboard
- `http://localhost:3000/embed` → embed/plugin variant
- `http://localhost:3000/admin/artworks`
- `http://localhost:3000/admin/orders`

## Beschikbare scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run db:push`
- `npm run db:seed`

## Demo KWC-cheques

- `KWC-TEST-100` (€100)
- `KWC-TEST-250` (€250)
- `KWC-TEST-500` (€500)

## Demo QR payloads

### Kunstwerk QR
JSON:
```json
{ "type": "ARTWORK", "token": "7iK7r5qHALHijcgIliEXfA" }
```

URL:
`http://localhost:3000/scan/artwork/7iK7r5qHALHijcgIliEXfA`

### KWC QR
JSON:
```json
{ "type": "KWC_CHEQUE", "number": "KWC-TEST-250" }
```

Tekst:
`KWC-TEST-250`

## Hoe kunstwerk QR werkt

1. Scanner leest payload.
2. Parser detecteert `ARTWORK`.
3. Frontend roept `POST /api/qr/artwork` aan.
4. API zoekt artwork op `qrToken`.
5. Configurator vult titel/artist/afbeelding/defaults in.

## Hoe KWC QR werkt

1. Scanner leest payload.
2. Parser detecteert `KWC_CHEQUE`.
3. Frontend roept `POST /api/kwc/validate`.
4. API controleert status + saldo.
5. Prijsberekening past korting automatisch toe.
6. Bij `POST /api/orders/[id]/pay` wordt saldo definitief afgeschreven.

## Wat is mock in deze MVP?

- **Betaling**: “Markeer als betaald” (geen PSP)
- **AI object removal**: fallback/handmatige demo (`aiObjectRemovalService.ts`)
- **KWC-backend**: lokale SQLite dataset
- **Auth/Rollen**: admin/employee zonder login (alleen structuur)

## Uitbreiden naar productie

### Echte betaalprovider koppelen
Vervang `POST /api/orders/[id]/pay` met:
- payment intent creation,
- webhook verwerking,
- idempotente status-update + KWC afschrijving.

### Echte AI object removal koppelen
Implementeer in:
- `src/features/visualizer/aiObjectRemovalService.ts`

vervanging voor:
```ts
removeObjectWithAI(input: { imageDataUrl: string; maskDataUrl: string }): Promise<string>
```

### Productie-auth
Voeg role-based auth toe voor:
- `/admin/*`
- `/employee/*`

## Embed / plugin gebruik

Gebruik in iframe:

```html
<iframe src="http://localhost:3000/embed?artworkToken=7iK7r5qHALHijcgIliEXfA&setting=boven_bank&format=60x80&frame=zwart_zwart" />
```

Events via `postMessage`:
- `ARTWORK_SELECTED`
- `CONFIG_UPDATED`
- `ORDER_CREATED`

## API order response (preset key + label)

Voor integraties geeft de order API zowel technische key als leesbare presetnaam terug:

```json
{
  "id": "cmojxxxx",
  "orderNumber": "KWC-20260428-1234",
  "artDirectionPreset": "classic",
  "artDirectionLabel": "Classic Galerie"
}
```

## QA smoke flow

1. Open `/` en doorloop stappen 1 t/m 10.
2. Gebruik in QR-modal handmatige payloads (plakken) om fallback te testen.
3. Maak order aan via stap 10.
4. Open medewerkerlink `/employee/order/[id]`.
5. Doorloop status:
   - `DRAFT` (na create)
   - `WAITING_FOR_EMPLOYEE_APPROVAL` (na submit)
   - `APPROVED` (na akkoord)
   - `PAID` (na markeer als betaald)
6. Controleer cheque vóór/na betalen met:
   - `POST /api/kwc/validate`
7. Controleer admin overzichten in `/admin/artworks` en `/admin/orders`.
