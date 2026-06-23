"use client";

import { ObjectRemovalTool } from "./ObjectRemovalTool";

type Props = {
  imageDataUrl: string;
  wallColor: string;
  onUpdated: (dataUrl: string) => void;
};

export function WallPhotoEditor({ imageDataUrl, wallColor, onUpdated }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-zinc-600">
        Hangt er nog iets aan de muur dat verwijderd moet worden? Kies handmatig gebied selecteren.
      </p>
      <ObjectRemovalTool imageDataUrl={imageDataUrl} wallColor={wallColor} onApply={onUpdated} />
    </div>
  );
}
