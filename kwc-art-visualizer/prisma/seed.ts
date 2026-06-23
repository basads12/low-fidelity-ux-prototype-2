import { PrismaClient } from "@prisma/client";
import { readdir } from "node:fs/promises";
import path from "node:path";

const prisma = new PrismaClient();

async function main() {
  const basePrices = {
    "40x50": 29500,
    "30x60": 32500,
    "30x120": 49500,
    "60x60": 45000,
    "60x80": 59500,
    "60x120": 89500,
    "60x160": 119500,
    "80x80": 79500,
    "80x100": 99500,
    "80x160": 149500,
    "90x90": 109500,
    "50x150": 129500,
    "100x150": 179500,
  };

  const catalogDir = path.join(process.cwd(), "public", "demo", "catalog");
  const catalogFiles = (await readdir(catalogDir))
    .filter((file) => file.toLowerCase().endsWith(".png"))
    .sort((a, b) => a.localeCompare(b));

  for (const [index, file] of catalogFiles.entries()) {
    const token = `CAT-${String(index + 1).padStart(3, "0")}`;
    const withoutExt = file.replace(/\.png$/i, "");
    const withoutPrefix = withoutExt.replace(/^enhanced_/, "");
    const withoutUuid = withoutPrefix.replace(/-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i, "");
    const title = withoutUuid.replace(/[-_]+/g, " ").trim() || `Kunstwerk ${index + 1}`;
    const defaultType = title.toLowerCase().includes("60x120") ? "liggend" : "staand";

    await prisma.artwork.upsert({
      where: { qrToken: token },
      update: {
        title,
        artist: "Galerie collectie",
        imageUrl: `/demo/catalog/${file}`,
        defaultType,
        availableFormats: Object.keys(basePrices),
        basePrices,
        inventoryStatus: "BESCHIKBAAR",
      },
      create: {
        title,
        artist: "Galerie collectie",
        imageUrl: `/demo/catalog/${file}`,
        defaultType,
        availableFormats: Object.keys(basePrices),
        basePrices,
        inventoryStatus: "BESCHIKBAAR",
        qrToken: token,
      },
    });
  }

  const cheques = [
    { number: "KWC-TEST-100", cents: 10000 },
    { number: "KWC-TEST-250", cents: 25000 },
    { number: "KWC-TEST-500", cents: 50000 },
  ];

  for (const cheque of cheques) {
    await prisma.kwcCheque.upsert({
      where: { number: cheque.number },
      update: {},
      create: {
        number: cheque.number,
        initialValueCents: cheque.cents,
        remainingValueCents: cheque.cents,
        status: "ACTIVE",
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
