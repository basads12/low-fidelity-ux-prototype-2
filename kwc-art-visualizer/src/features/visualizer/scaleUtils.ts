export function getPxPerCm(stageWidthPx: number, wallWidthCm: number) {
  return stageWidthPx / Math.max(1, wallWidthCm);
}

export function getArtworkPxSize(
  widthCm: number,
  heightCm: number,
  pxPerCm: number,
  maxWidthPx: number,
  maxHeightPx: number
) {
  let widthPx = widthCm * pxPerCm;
  let heightPx = heightCm * pxPerCm;

  const widthScale = maxWidthPx / Math.max(1, widthPx);
  const heightScale = maxHeightPx / Math.max(1, heightPx);
  const scale = Math.min(1, widthScale, heightScale);

  widthPx *= scale;
  heightPx *= scale;

  return { widthPx, heightPx };
}
