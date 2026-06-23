"use client";

import { FORMATEN } from "@/lib/constants";

type Props = {
  value: string;
  availableFormatIds: string[];
  onChange: (value: string) => void;
};

export function FormatSelector({ value, availableFormatIds, onChange }: Props) {
  const filtered = FORMATEN.filter((f) => availableFormatIds.includes(f.id));
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {filtered.map((format) => (
        <button
          key={format.id}
          type="button"
          onClick={() => onChange(format.id)}
          className={`rounded border p-2 text-left ${value === format.id ? "border-zinc-900 bg-zinc-50" : "border-zinc-200"}`}
        >
          {format.label}
        </button>
      ))}
    </div>
  );
}
