"use client";

import { HexColorPicker } from "react-colorful";

type Props = {
  color: string;
  intensity: number;
  onColorChange: (value: string) => void;
  onIntensityChange: (value: number) => void;
};

export function WallColorPicker({ color, intensity, onColorChange, onIntensityChange }: Props) {
  return (
    <div className="space-y-3 rounded border border-zinc-200 p-3">
      <HexColorPicker color={color} onChange={onColorChange} />
      <label className="block text-sm">
        Hex kleur
        <input
          className="mt-1 w-full rounded border border-zinc-300 px-2 py-1"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </label>
      <label className="block text-sm">
        Kleurintensiteit ({intensity}%)
        <input
          type="range"
          min={0}
          max={100}
          value={intensity}
          onChange={(e) => onIntensityChange(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </label>
    </div>
  );
}
