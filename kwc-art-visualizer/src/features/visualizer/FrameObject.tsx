"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Position = { x: number; y: number };

type Props = {
  artworkImageUrl: string;
  widthPx: number;
  heightPx: number;
  frameOuterColor: string;
  frameInnerColor: string;
  frameOverlayUrl?: string;
  position: Position;
  onPositionChange: (next: Position) => void;
  bounds?: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  };
  mood?: "classic" | "modern" | "contrast";
};

export function FrameObject({
  artworkImageUrl,
  widthPx,
  heightPx,
  frameOuterColor,
  frameInnerColor,
  frameOverlayUrl,
  position,
  onPositionChange,
  bounds,
  mood = "classic",
}: Props) {
  const brand = {
    warmHighlight: "rgba(200,154,71,0.18)",
  };
  const dragging = useRef<{ startX: number; startY: number; x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const moodStyle =
    mood === "contrast"
      ? {
          tilt: 0.5,
          shadow: "rgba(18,17,15,0.42)",
          shadowSoft: "rgba(18,17,15,0.24)",
          highlight: "rgba(255,255,255,0.34)",
        }
      : mood === "modern"
        ? {
            tilt: 0.35,
            shadow: "rgba(28,26,22,0.24)",
            shadowSoft: "rgba(28,26,22,0.13)",
            highlight: "rgba(200,154,71,0.14)",
          }
        : {
            tilt: 0.9,
            shadow: "rgba(28,26,22,0.32)",
            shadowSoft: "rgba(28,26,22,0.18)",
            highlight: "rgba(200,154,71,0.18)",
          };

  const clamp = (next: Position) => {
    if (!bounds) return next;
    return {
      x: Math.min(bounds.maxX, Math.max(bounds.minX, next.x)),
      y: Math.min(bounds.maxY, Math.max(bounds.minY, next.y)),
    };
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    dragging.current = {
      startX: event.clientX,
      startY: event.clientY,
      x: position.x,
      y: position.y,
    };
    setIsDragging(true);
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!dragging.current) return;
    const dx = event.clientX - dragging.current.startX;
    const dy = event.clientY - dragging.current.startY;
    const next = clamp({ x: dragging.current.x + dx, y: dragging.current.y + dy });
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      onPositionChange(next);
    });
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = () => {
    dragging.current = null;
    setIsDragging(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  return (
    <div
      className={cn(
        "absolute cursor-grab active:cursor-grabbing select-none touch-none",
        "touch-none select-none will-change-transform",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      style={{
        left: position.x,
        top: position.y,
        width: widthPx,
        height: heightPx,
        backgroundColor: frameOuterColor,
        padding: 10,
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: isDragging
          ? `0 22px 36px ${moodStyle.shadow}, 0 7px 18px ${moodStyle.shadowSoft}`
          : `0 14px 26px ${moodStyle.shadowSoft}, 0 4px 10px rgba(28,26,22,0.14)`,
        transform: `perspective(980px) rotateX(${isDragging ? 0.5 : moodStyle.tilt}deg) translateZ(0)`,
        transition: isDragging ? "none" : "box-shadow 180ms ease, transform 180ms ease",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="pointer-events-none absolute left-[6px] right-[6px] top-[6px] h-[7px] rounded-sm"
        style={{
          background: `linear-gradient(180deg, ${moodStyle.highlight}, ${brand.warmHighlight})`,
        }}
      />
      <div
        style={{
          backgroundColor: frameInnerColor,
          padding: 8,
          height: "100%",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.32), inset 0 0 0 1px rgba(255,255,255,0.2)",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${artworkImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
          }}
        />
      </div>
      {frameOverlayUrl ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${frameOverlayUrl})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : null}
    </div>
  );
}
