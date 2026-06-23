import { FRAME_OPTIONS, FORMATEN } from "@/lib/constants";

export type PricingInput = {
  artwork: {
    basePrices: Record<string, number>;
  };
  formatId: string;
  type: string;
  frameOptionId: string;
  kwcRemainingCents?: number;
};

export type PricingResult = {
  basePriceCents: number;
  framePriceCents: number;
  totalBeforeKwcCents: number;
  kwcAppliedCents: number;
  totalDueCents: number;
  widthCm: number;
  heightCm: number;
};

export function calculatePricing(input: PricingInput): PricingResult {
  const format = FORMATEN.find((f) => f.id === input.formatId);
  if (!format) throw new Error("Onbekend formaat");

  const frame = FRAME_OPTIONS.find((f) => f.id === input.frameOptionId);
  if (!frame) throw new Error("Onbekende lijstoptie");

  const base = input.artwork.basePrices[input.formatId] ?? 0;
  const twinsMultiplier = input.type === "twins" ? 2 : 1;

  const basePriceCents = base * twinsMultiplier;
  const framePriceCents = frame.surchargeCents * twinsMultiplier;
  const totalBeforeKwcCents = basePriceCents + framePriceCents;
  const kwcAppliedCents = Math.min(input.kwcRemainingCents ?? 0, totalBeforeKwcCents);
  const totalDueCents = totalBeforeKwcCents - kwcAppliedCents;

  return {
    basePriceCents,
    framePriceCents,
    totalBeforeKwcCents,
    kwcAppliedCents,
    totalDueCents,
    widthCm: format.widthCm,
    heightCm: format.heightCm,
  };
}
