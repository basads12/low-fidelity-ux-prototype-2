"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SETTINGS, FRAME_OPTIONS, FORMATEN } from "@/lib/constants";
import { getArtworkPxSize, getPxPerCm } from "./scaleUtils";
import { hexToRgba } from "./colorUtils";
import { FrameObject } from "./FrameObject";
import { TwinsFrameObject } from "@/components/configurator/TwinsFrameObject";

type Props = {
  settingKey: string;
  wallColor: string;
  wallIntensity: number;
  uploadedImage?: string;
  artworkImageUrl: string;
  type: string;
  formatId: string;
  frameOptionId: string;
  twinsGapCm: number;
  presetId?: ArtDirectionPresetId;
  onPresetChange?: (presetId: ArtDirectionPresetId) => void;
};

export type ArtDirectionPresetId = "classic" | "modern" | "contrast";

export const ART_DIRECTION_PRESETS = {
  classic: {
    label: "Classic Galerie",
    description: "Warm, tijdloos en gebalanceerd",
    wallGradient: "from-stone-50 via-stone-100 to-zinc-200",
    overlayBoost: 1,
    floorTint: "from-zinc-300/20 to-zinc-400/55",
    furnitureBg: "bg-zinc-700/58",
    furnitureShadow: "shadow-[0_14px_24px_rgba(0,0,0,0.22)]",
    hairline: "#AC9166",
    mood: "classic" as const,
  },
  modern: {
    label: "Modern Warm",
    description: "Lichter, strakker en sereen",
    wallGradient: "from-stone-50 via-stone-100 to-stone-200",
    overlayBoost: 0.82,
    floorTint: "from-zinc-200/20 to-zinc-300/45",
    furnitureBg: "bg-zinc-600/48",
    furnitureShadow: "shadow-[0_10px_18px_rgba(0,0,0,0.16)]",
    hairline: "#c89a47",
    mood: "modern" as const,
  },
  contrast: {
    label: "Luxe Contrast",
    description: "Dieper, dramatischer en premium",
    wallGradient: "from-zinc-100 via-stone-200 to-zinc-300",
    overlayBoost: 1.16,
    floorTint: "from-zinc-400/22 to-zinc-600/62",
    furnitureBg: "bg-zinc-800/65",
    furnitureShadow: "shadow-[0_18px_30px_rgba(0,0,0,0.28)]",
    hairline: "#7d3833",
    mood: "contrast" as const,
  },
};

const DEFAULT_WALL_MASK = {
  left: "8%",
  top: "8%",
  width: "84%",
  height: "58%",
  borderRadius: "8px",
};

const SETTING_SCENE_CONFIG: Record<
  string,
  {
    imageUrl: string;
    wallMask?: {
      left: string;
      top: string;
      width: string;
      height: string;
      borderRadius?: string;
    };
  }
> = {
  boven_bank: { imageUrl: "/settings/hq/boven-bank.jpg" },
  boven_bed: { imageUrl: "/settings/hq/boven-bed.jpg" },
  boven_dressoir: { imageUrl: "/settings/hq/boven-dressoir.jpg" },
  boven_eettafel: { imageUrl: "/settings/hq/boven-eettafel.jpg" },
  boven_bureau: { imageUrl: "/settings/hq/boven-bureau.jpg" },
  boven_open_haard: { imageUrl: "/settings/hq/boven-open-haard.jpg" },
  hal_entree: { imageUrl: "/settings/hq/hal-entree.jpg" },
  naast_trap: { imageUrl: "/settings/hq/naast-trap.jpg" },
  boven_sidetable: { imageUrl: "/settings/hq/boven-sidetable.jpg" },
  boven_sideboard: { imageUrl: "/settings/hq/boven-sideboard.jpg" },
  keuken_wand: { imageUrl: "/settings/hq/keuken-wand.jpg" },
  badkamer_wand: { imageUrl: "/settings/hq/badkamer-wand.jpg" },
  boven_kinderbed: { imageUrl: "/settings/hq/boven-kinderbed.jpg" },
  lege_wand: {
    imageUrl: "/settings/hq/lege-wand.jpg",
    wallMask: { left: "5%", top: "6%", width: "90%", height: "70%", borderRadius: "8px" },
  },
};

export function VisualizerCanvas(props: Props) {
  const brand = {
    ink: "#1c1a16",
    inkSoft: "#5a544a",
    stone50: "#fbf8f3",
    stone100: "#f5efe6",
    stone200: "#e1d5c2",
    bordeaux: "#7d3833",
    ochre: "#c89a47",
    gold: "#AC9166",
  };
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 190, y: 120 });
  const [scaleFactor, setScaleFactor] = useState(1);
  const [stageSize, setStageSize] = useState({ width: 900, height: 500 });
  const [localPresetId, setLocalPresetId] = useState<ArtDirectionPresetId>("classic");

  const setting = SETTINGS.find((s) => s.key === props.settingKey) ?? SETTINGS[0];
  const format = FORMATEN.find((f) => f.id === props.formatId) ?? FORMATEN[0];
  const frame = FRAME_OPTIONS.find((f) => f.id === props.frameOptionId) ?? FRAME_OPTIONS[0];

  const stageWidth = 900;
  const pxPerCm = getPxPerCm(stageSize.width * 0.75, setting.wallWidthCm);
  const size = getArtworkPxSize(format.widthCm, format.heightCm, pxPerCm * scaleFactor, 380, 260);
  const gapPx = props.twinsGapCm * pxPerCm;
  const artworkGroupWidth = props.type === "twins" ? size.widthPx * 2 + gapPx : size.widthPx;

  const hasUpload = Boolean(props.uploadedImage);
  const presetId = props.presetId ?? localPresetId;
  const activePreset = ART_DIRECTION_PRESETS[presetId];
  const activeScene = SETTING_SCENE_CONFIG[props.settingKey];
  const stageBackgroundUrl = activeScene?.imageUrl;
  const wallMask = activeScene?.wallMask ?? DEFAULT_WALL_MASK;
  const wallOverlay = useMemo(
    () => hexToRgba(props.wallColor, Math.min(1, Math.max(0, props.wallIntensity / 100))),
    [props.wallColor, props.wallIntensity]
  );
  const dragBounds = useMemo(
    () => ({
      minX: 8,
      minY: 12,
      maxX: Math.max(8, stageSize.width - artworkGroupWidth - 8),
      maxY: Math.max(12, stageSize.height - size.heightPx - 18),
    }),
    [artworkGroupWidth, size.heightPx, stageSize.height, stageSize.width]
  );
  const clampToBounds = (next: { x: number; y: number }) => ({
    x: Math.max(dragBounds.minX, Math.min(dragBounds.maxX, next.x)),
    y: Math.max(dragBounds.minY, Math.min(dragBounds.maxY, next.y)),
  });
  const currentPosition = clampToBounds(position);

  useEffect(() => {
    if (!stageRef.current) return;
    const update = () => {
      if (!stageRef.current) return;
      setStageSize({
        width: stageRef.current.clientWidth || 900,
        height: stageRef.current.clientHeight || 500,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  const nudge = (dx: number, dy: number) => {
    setPosition((prev) => clampToBounds({ x: prev.x + dx, y: prev.y + dy }));
  };

  return (
    <div className="rounded-lg border p-3" style={{ borderColor: brand.stone200, backgroundColor: "#fff" }}>
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium" style={{ color: brand.ink }}>
            Galerie-preview
          </p>
          <p className="text-xs" style={{ color: brand.inkSoft }}>
            Plaats het werk op ooghoogte voor een rustige, luxe galerie-uitstraling.
          </p>
        </div>
        <input
          aria-label="Schaalcorrectie visualizer"
          type="range"
          min={0.7}
          max={1.4}
          step={0.01}
          value={scaleFactor}
          onChange={(e) => setScaleFactor(Number(e.target.value))}
          className="w-full sm:w-44"
        />
      </div>
      <div className="mb-3 grid gap-2 sm:grid-cols-3">
        {(Object.keys(ART_DIRECTION_PRESETS) as ArtDirectionPresetId[]).map((id) => {
          const preset = ART_DIRECTION_PRESETS[id];
          const selected = presetId === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                if (props.onPresetChange) {
                  props.onPresetChange(id);
                  return;
                }
                setLocalPresetId(id);
              }}
              className="rounded border px-2 py-2 text-left"
              style={{
                borderColor: selected ? brand.bordeaux : brand.stone200,
                backgroundColor: selected ? "#f8f2e8" : "#fff",
              }}
            >
              <p className="text-xs font-medium" style={{ color: brand.ink }}>
                {preset.label}
              </p>
              <p className="text-[11px]" style={{ color: brand.inkSoft }}>
                {preset.description}
              </p>
            </button>
          );
        })}
      </div>
      <div
        ref={stageRef}
        className="relative h-[320px] w-full overflow-hidden rounded-md border sm:h-[420px] lg:h-[500px]"
        style={{ maxWidth: stageWidth, borderColor: brand.stone200 }}
      >
        {!hasUpload ? (
          <div className="absolute inset-0">
            {stageBackgroundUrl ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${stageBackgroundUrl})` }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-100 to-zinc-200" />
            )}
            <div
              className="absolute"
              style={{
                left: wallMask.left,
                top: wallMask.top,
                width: wallMask.width,
                height: wallMask.height,
                borderRadius: wallMask.borderRadius ?? "0px",
                background: wallOverlay,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/8" />
          </div>
        ) : (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${props.uploadedImage})` }}
            />
            <div className="absolute inset-0" style={{ background: wallOverlay }} />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/10" />
          </div>
        )}

        {props.type === "twins" ? (
          <TwinsFrameObject
            artworkImageUrl={props.artworkImageUrl}
            widthPx={size.widthPx}
            heightPx={size.heightPx}
            frameOuterColor={frame.outerColor}
            frameInnerColor={frame.innerColor}
            frameOverlayUrl={frame.overlayUrl}
            gapPx={gapPx}
            position={currentPosition}
            onPositionChange={(next) => setPosition(clampToBounds(next))}
            bounds={dragBounds}
            mood={activePreset.mood}
          />
        ) : (
          <FrameObject
            artworkImageUrl={props.artworkImageUrl}
            widthPx={size.widthPx}
            heightPx={size.heightPx}
            frameOuterColor={frame.outerColor}
            frameInnerColor={frame.innerColor}
            frameOverlayUrl={frame.overlayUrl}
            position={currentPosition}
            onPositionChange={(next) => setPosition(clampToBounds(next))}
            bounds={dragBounds}
            mood={activePreset.mood}
          />
        )}
        {props.type === "twins" ? (
          <div
            className="pointer-events-none absolute left-3 top-3 rounded px-2 py-1 text-[11px]"
            style={{ backgroundColor: "rgba(245, 240, 232, 0.92)", color: brand.ink }}
          >
            TWINS tussenruimte: {props.twinsGapCm} cm
          </div>
        ) : null}
      </div>
      <div className="mt-3 flex items-center gap-2 sm:hidden">
        <button
          type="button"
          className="rounded border px-2 py-1 text-xs"
          style={{ borderColor: brand.stone200, color: brand.ink }}
          onClick={() => nudge(-12, 0)}
        >
          ←
        </button>
        <button
          type="button"
          className="rounded border px-2 py-1 text-xs"
          style={{ borderColor: brand.stone200, color: brand.ink }}
          onClick={() => nudge(12, 0)}
        >
          →
        </button>
        <button
          type="button"
          className="rounded border px-2 py-1 text-xs"
          style={{ borderColor: brand.stone200, color: brand.ink }}
          onClick={() => nudge(0, -12)}
        >
          ↑
        </button>
        <button
          type="button"
          className="rounded border px-2 py-1 text-xs"
          style={{ borderColor: brand.stone200, color: brand.ink }}
          onClick={() => nudge(0, 12)}
        >
          ↓
        </button>
        <button
          type="button"
          className="rounded border px-2 py-1 text-xs"
          style={{ borderColor: brand.bordeaux, color: brand.bordeaux }}
          onClick={() => setPosition({ x: dragBounds.minX + 24, y: dragBounds.minY + 20 })}
        >
          Reset positie
        </button>
      </div>
    </div>
  );
}
