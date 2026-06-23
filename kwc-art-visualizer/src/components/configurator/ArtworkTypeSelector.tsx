"use client";

import { PAINTING_TYPES } from "@/lib/constants";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function ArtworkTypeSelector({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {PAINTING_TYPES.map((type) => (
        <button
          key={type.id}
          type="button"
          onClick={() => onChange(type.id)}
          className={`rounded border p-3 text-left ${value === type.id ? "border-zinc-900 bg-zinc-50" : "border-zinc-200"}`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
