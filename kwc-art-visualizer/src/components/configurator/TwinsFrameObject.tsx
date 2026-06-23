"use client";

import { FrameObject } from "@/features/visualizer/FrameObject";

type Props = {
  artworkImageUrl: string;
  widthPx: number;
  heightPx: number;
  frameOuterColor: string;
  frameInnerColor: string;
  frameOverlayUrl?: string;
  gapPx: number;
  position: { x: number; y: number };
  onPositionChange: (next: { x: number; y: number }) => void;
  bounds?: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  };
  mood?: "classic" | "modern" | "contrast";
};

export function TwinsFrameObject({
  artworkImageUrl,
  widthPx,
  heightPx,
  frameOuterColor,
  frameInnerColor,
  frameOverlayUrl,
  gapPx,
  position,
  onPositionChange,
  bounds,
  mood = "classic",
}: Props) {
  return (
    <>
      <FrameObject
        artworkImageUrl={artworkImageUrl}
        widthPx={widthPx}
        heightPx={heightPx}
        frameOuterColor={frameOuterColor}
        frameInnerColor={frameInnerColor}
        frameOverlayUrl={frameOverlayUrl}
        position={position}
        onPositionChange={onPositionChange}
        bounds={bounds}
        mood={mood}
      />
      <FrameObject
        artworkImageUrl={artworkImageUrl}
        widthPx={widthPx}
        heightPx={heightPx}
        frameOuterColor={frameOuterColor}
        frameInnerColor={frameInnerColor}
        frameOverlayUrl={frameOverlayUrl}
        position={{ x: position.x + widthPx + gapPx, y: position.y }}
        onPositionChange={(next) => onPositionChange({ x: next.x - widthPx - gapPx, y: next.y })}
        bounds={
          bounds
            ? {
                minX: bounds.minX + widthPx + gapPx,
                maxX: bounds.maxX + widthPx + gapPx,
                minY: bounds.minY,
                maxY: bounds.maxY,
              }
            : undefined
        }
        mood={mood}
      />
    </>
  );
}
