export type SettingOption = {
  key: string;
  label: string;
  description: string;
  wallWidthCm: number;
};

export type PaintingType = {
  id: "staand" | "liggend" | "staand_xl" | "twins";
  label: string;
};

export type FormatOption = {
  id: string;
  label: string;
  widthCm: number;
  heightCm: number;
};

export type FrameOption = {
  id: "zwart_zwart" | "zwart_rood" | "zwart_wit";
  label: string;
  description: string;
  outerColor: string;
  innerColor: string;
  thumbnailUrl: string;
  overlayUrl: string;
  surchargeCents: number;
};

export const SETTINGS: SettingOption[] = [
  { key: "boven_bank", label: "Boven bank", description: "Wand boven een zitbank.", wallWidthCm: 280 },
  { key: "boven_bed", label: "Boven bed", description: "Wand boven hoofdbord van bed.", wallWidthCm: 240 },
  { key: "boven_dressoir", label: "Boven dressoir", description: "Wand boven een laag meubel.", wallWidthCm: 220 },
  { key: "boven_eettafel", label: "Boven eettafel", description: "Wand naast of boven eethoek.", wallWidthCm: 300 },
  { key: "boven_bureau", label: "Boven bureau", description: "Wand in werkhoek.", wallWidthCm: 200 },
  { key: "boven_open_haard", label: "Boven open haard", description: "Wand met schouw.", wallWidthCm: 180 },
  { key: "hal_entree", label: "In hal / entree", description: "Smalle wand in entree.", wallWidthCm: 160 },
  { key: "naast_trap", label: "Naast trap", description: "Wand langs trapgat.", wallWidthCm: 170 },
  { key: "boven_sidetable", label: "Boven sidetable / consoletafel", description: "Wand boven sidetable.", wallWidthCm: 190 },
  { key: "boven_sideboard", label: "Boven sideboard", description: "Wand boven sideboard.", wallWidthCm: 210 },
  { key: "keuken_wand", label: "In keuken tegen wand", description: "Vrije keukenwand.", wallWidthCm: 160 },
  { key: "badkamer_wand", label: "In badkamer tegen wand", description: "Droge wandzone.", wallWidthCm: 140 },
  { key: "boven_kinderbed", label: "Boven kinderbed", description: "Wand boven kinderbed.", wallWidthCm: 170 },
  { key: "lege_wand", label: "Op een lege wand zonder meubel", description: "Vrije grote muur.", wallWidthCm: 320 },
];

export const PAINTING_TYPES: PaintingType[] = [
  { id: "staand", label: "Staand werk" },
  { id: "liggend", label: "Liggend werk" },
  { id: "staand_xl", label: "Staand werk XL" },
  { id: "twins", label: "TWINS" },
];

export const FORMATEN: FormatOption[] = [
  { id: "40x50", label: "40 × 50 cm", widthCm: 40, heightCm: 50 },
  { id: "30x60", label: "30 × 60 cm", widthCm: 30, heightCm: 60 },
  { id: "30x120", label: "30 × 120 cm", widthCm: 30, heightCm: 120 },
  { id: "60x60", label: "60 × 60 cm", widthCm: 60, heightCm: 60 },
  { id: "60x80", label: "60 × 80 cm", widthCm: 60, heightCm: 80 },
  { id: "60x120", label: "60 × 120 cm", widthCm: 60, heightCm: 120 },
  { id: "60x160", label: "60 × 160 cm", widthCm: 60, heightCm: 160 },
  { id: "80x80", label: "80 × 80 cm", widthCm: 80, heightCm: 80 },
  { id: "80x100", label: "80 × 100 cm", widthCm: 80, heightCm: 100 },
  { id: "80x160", label: "80 × 160 cm", widthCm: 80, heightCm: 160 },
  { id: "90x90", label: "90 × 90 cm", widthCm: 90, heightCm: 90 },
  { id: "50x150", label: "50 × 150 cm", widthCm: 50, heightCm: 150 },
  { id: "100x150", label: "100 × 150 cm", widthCm: 100, heightCm: 150 },
];

export const FRAME_OPTIONS: FrameOption[] = [
  {
    id: "zwart_zwart",
    label: "Zwart",
    description: "Volledig zwarte baklijst.",
    outerColor: "#101010",
    innerColor: "#111111",
    thumbnailUrl: "/frames/lijst_02_zwart_zwart_thumbnail.png",
    overlayUrl: "/frames/lijst_02_zwart_zwart_frame_overlay_transparant.png",
    surchargeCents: 0,
  },
  {
    id: "zwart_rood",
    label: "Zwart + rood",
    description: "Zwarte buitenlijst met rode binnenlijst.",
    outerColor: "#101010",
    innerColor: "#8a1f24",
    thumbnailUrl: "/frames/lijst_03_zwart_rood_thumbnail.png",
    overlayUrl: "/frames/lijst_03_zwart_rood_frame_overlay_transparant.png",
    surchargeCents: 2500,
  },
  {
    id: "zwart_wit",
    label: "Zwart + wit/zilver",
    description: "Zwarte buitenlijst met witte/zilveren binnenlijst.",
    outerColor: "#101010",
    innerColor: "#efefef",
    thumbnailUrl: "/frames/lijst_01_zwart_wit_thumbnail.png",
    overlayUrl: "/frames/lijst_01_zwart_wit_frame_overlay_transparant.png",
    surchargeCents: 2500,
  },
];

export const DEMO_CHEQUES = ["KWC-TEST-100", "KWC-TEST-250", "KWC-TEST-500"];
