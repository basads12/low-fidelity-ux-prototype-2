"use client";

import { SETTINGS } from "@/lib/constants";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SettingSelector({ value, onChange }: Props) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {SETTINGS.map((setting) => (
        <button
          key={setting.key}
          className={`rounded border p-3 text-left ${value === setting.key ? "border-zinc-900 bg-zinc-50" : "border-zinc-200"}`}
          onClick={() => onChange(setting.key)}
          type="button"
        >
          <p className="font-medium">{setting.label}</p>
          <p className="text-xs text-zinc-600">{setting.description}</p>
        </button>
      ))}
    </div>
  );
}
