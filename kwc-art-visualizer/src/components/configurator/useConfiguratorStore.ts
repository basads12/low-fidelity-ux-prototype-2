import { create } from "zustand";

type ConfiguratorState = {
  step: number;
  setting: string;
  wallColor: string;
  wallIntensity: number;
  bankColor: string;
  artworkId: string | null;
  artworkImageUrl: string;
  artworkTitle: string;
  artworkArtist: string;
  type: string;
  formatId: string;
  frameOptionId: string;
  twinsGapCm: number;
  artDirectionPreset: "classic" | "modern" | "contrast";
  kwcNumber: string;
  kwcRemainingCents: number;
  uploadedWallImageDataUrl?: string;
  cleanedWallImageDataUrl?: string;
  previewDataUrl?: string;
  setField: <K extends keyof Omit<ConfiguratorState, "setField" | "nextStep" | "prevStep" | "reset">>(
    key: K,
    value: ConfiguratorState[K]
  ) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
};

const initialState = {
  step: 1,
  setting: "boven_bank",
  wallColor: "#efe7da",
  wallIntensity: 45,
  bankColor: "#ba8c71",
  artworkId: null,
  artworkImageUrl: "/demo/artwork-placeholder.svg",
  artworkTitle: "Kleurrijke vogel",
  artworkArtist: "Galerie demo",
  type: "staand",
  formatId: "60x80",
  frameOptionId: "zwart_zwart",
  twinsGapCm: 10,
  artDirectionPreset: "classic" as const,
  kwcNumber: "",
  kwcRemainingCents: 0,
};

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  ...initialState,
  setField: (key, value) => set({ [key]: value } as Partial<ConfiguratorState>),
  nextStep: () => set((s) => ({ step: Math.min(10, s.step + 1) })),
  prevStep: () => set((s) => ({ step: Math.max(1, s.step - 1) })),
  reset: () => set(initialState),
}));
