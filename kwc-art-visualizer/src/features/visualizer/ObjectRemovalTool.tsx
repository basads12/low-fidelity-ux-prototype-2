"use client";

import { useEffect, useRef, useState } from "react";

type Rect = { x: number; y: number; w: number; h: number };

type Props = {
  imageDataUrl: string;
  wallColor: string;
  onApply: (dataUrl: string) => void;
};

export function ObjectRemovalTool({ imageDataUrl, wallColor, onApply }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

  const drawBase = (withRect = true) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      if (withRect && rect) {
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
      }
    };
    img.src = imageDataUrl;
  };

  const handlePointerDown: React.PointerEventHandler<HTMLCanvasElement> = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    setDragStart({ x: e.clientX - box.left, y: e.clientY - box.top });
  };

  const handlePointerMove: React.PointerEventHandler<HTMLCanvasElement> = (e) => {
    if (!dragStart) return;
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    setRect({
      x: Math.min(dragStart.x, x),
      y: Math.min(dragStart.y, y),
      w: Math.abs(x - dragStart.x),
      h: Math.abs(y - dragStart.y),
    });
  };

  const handlePointerUp = () => setDragStart(null);

  const handleRemove = () => {
    const canvas = canvasRef.current;
    if (!canvas || !rect) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = wallColor;
    ctx.filter = "blur(6px)";
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    ctx.filter = "none";
    onApply(canvas.toDataURL("image/png"));
  };

  useEffect(() => {
    drawBase(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageDataUrl, rect]);

  return (
    <div className="space-y-3 rounded-lg border border-zinc-200 p-4">
      <p className="text-sm text-zinc-600">
        Teken een rechthoek en klik op verwijderen. Verwijderen is een benadering in de demo.
      </p>
      <canvas
        ref={canvasRef}
        className="max-h-[340px] w-full rounded border border-zinc-200 bg-zinc-50 object-contain"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
      <div className="flex gap-2">
        <button className="rounded bg-zinc-900 px-3 py-2 text-sm text-white" onClick={() => drawBase(true)}>
          Opnieuw laden
        </button>
        <button className="rounded bg-emerald-600 px-3 py-2 text-sm text-white" onClick={handleRemove}>
          Gebied verwijderen
        </button>
      </div>
    </div>
  );
}
