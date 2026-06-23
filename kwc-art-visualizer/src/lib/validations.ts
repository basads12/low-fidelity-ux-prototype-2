import { z } from "zod";
import { FORMATEN, FRAME_OPTIONS, PAINTING_TYPES, SETTINGS } from "./constants";

export const orderStatusEnum = z.enum([
  "DRAFT",
  "WAITING_FOR_EMPLOYEE_APPROVAL",
  "APPROVED",
  "PAID",
  "CANCELLED",
]);

export const customerFormSchema = z.object({
  firstName: z.string().min(2, "Voornaam is verplicht"),
  lastName: z.string().min(2, "Achternaam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(8, "Telefoonnummer is verplicht"),
  address: z.string().optional(),
  consent: z.boolean().refine((v) => v, "Toestemming is verplicht"),
});

export const createArtworkSchema = z.object({
  title: z.string().min(2),
  artist: z.string().min(2),
  imageUrl: z.string().min(1),
  defaultType: z.enum(PAINTING_TYPES.map((t) => t.id) as [string, ...string[]]),
  availableFormats: z.array(z.enum(FORMATEN.map((f) => f.id) as [string, ...string[]])).min(1),
  basePrices: z.record(z.string(), z.number().int().nonnegative()),
  inventoryStatus: z.string().min(1),
  qrToken: z.string().min(6),
});

export const createOrderSchema = z.object({
  artworkId: z.string(),
  customer: customerFormSchema.optional(),
  type: z.enum(PAINTING_TYPES.map((t) => t.id) as [string, ...string[]]),
  formatId: z.enum(FORMATEN.map((f) => f.id) as [string, ...string[]]),
  frameOptionId: z.enum(FRAME_OPTIONS.map((f) => f.id) as [string, ...string[]]),
  quantity: z.number().int().positive().default(1),
  wallSetting: z.enum(SETTINGS.map((s) => s.key) as [string, ...string[]]),
  wallColor: z.string().min(4),
  artDirectionPreset: z.enum(["classic", "modern", "contrast"]).default("classic"),
  kwcNumber: z.string().optional(),
  previewImageDataUrl: z.string().optional(),
  pricing: z.object({
    basePriceCents: z.number().int().nonnegative(),
    framePriceCents: z.number().int().nonnegative(),
    totalBeforeKwcCents: z.number().int().nonnegative(),
    kwcAppliedCents: z.number().int().nonnegative(),
    totalDueCents: z.number().int().nonnegative(),
  }),
});

export const approveOrderSchema = z.object({
  employeeName: z.string().min(2),
});

export const kwcValidateSchema = z.object({
  number: z.string().min(3),
});

export const qrArtworkSchema = z.object({
  token: z.string().min(3),
});
