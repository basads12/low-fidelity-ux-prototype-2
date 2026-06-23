"use client";

import Image from "next/image";
import { FRAME_OPTIONS } from "@/lib/constants";

type Props = {
  value: string;
  twinsGapCm: number;
  onChange: (value: string) => void;
  onGapChange: (value: number) => void;
  type: string;
};

export function FrameSelector({ value, onChange, type, twinsGapCm, onGapChange }: Props) {
  return (
    <div className="space-y-3">
      <div className="grid gap-2">
        {FRAME_OPTIONS.map((frame) => (
          <button
            key={frame.id}
            type="button"
            onClick={() => onChange(frame.id)}
            className={`rounded border p-3 text-left ${value === frame.id ? "border-zinc-900 bg-zinc-50" : "border-zinc-200"}`}
          >
            <div className="flex items-center gap-3">
              <Image src={frame.thumbnailUrl} alt={frame.label} width={64} height={64} className="h-14 w-14 rounded object-cover" />
              <div>
                <p className="font-medium">{frame.label}</p>
                <p className="text-xs text-zinc-600">{frame.description}</p>
                <p className="text-sm text-zinc-600">Meerprijs: €{(frame.surchargeCents / 100).toFixed(2)}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {type === "twins" ? (
        <label className="block text-sm">
          Tussenruimte TWINS ({twinsGapCm} cm)
          <input
            type="range"
            min={2}
            max={40}
            step={1}
            value={twinsGapCm}
            className="mt-1 w-full"
            onChange={(e) => onGapChange(Number(e.target.value))}
          />
          <span className="mt-1 block text-xs text-zinc-500">
            Advies galerie: 6-14 cm voor een rustige, luxe uitstraling.
          </span>
        </label>
      ) : null}
    </div>
  );
}
