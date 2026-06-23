"use client";

type Props = {
  onUploaded: (dataUrl: string) => void;
};

export function WallUploader({ onUploaded }: Props) {
  return (
    <label className="inline-flex cursor-pointer rounded border border-zinc-300 px-3 py-2 text-sm">
      Foto maken / uploaden
      <input
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = () => onUploaded(String(reader.result ?? ""));
          reader.readAsDataURL(file);
        }}
      />
    </label>
  );
}
