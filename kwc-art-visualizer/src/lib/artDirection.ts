export const ART_DIRECTION_LABELS: Record<string, string> = {
  classic: "Classic Galerie",
  modern: "Modern Warm",
  contrast: "Luxe Contrast",
};

export function getArtDirectionLabel(value?: string | null) {
  if (!value) return "Classic Galerie";
  return ART_DIRECTION_LABELS[value] ?? value;
}

export function withArtDirectionLabel<T extends { artDirectionPreset?: string | null }>(item: T) {
  return {
    ...item,
    artDirectionLabel: getArtDirectionLabel(item.artDirectionPreset),
  };
}
