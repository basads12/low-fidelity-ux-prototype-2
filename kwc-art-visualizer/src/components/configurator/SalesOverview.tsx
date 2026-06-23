import { formatMoney } from "@/lib/utils";
import Image from "next/image";

type Props = {
  artworkTitle: string;
  artworkArtist: string;
  imageUrl: string;
  typeLabel: string;
  formatLabel: string;
  frameLabel: string;
  artDirectionLabel: string;
  wallSettingLabel: string;
  wallColor: string;
  kwcNumber?: string;
  kwcAppliedCents: number;
  totalBeforeKwcCents: number;
  totalDueCents: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
};

export function SalesOverview(props: Props) {
  return (
    <div className="grid gap-4 rounded border border-zinc-200 p-4 sm:grid-cols-[220px_1fr]">
      <Image
        src={props.imageUrl}
        alt={props.artworkTitle}
        width={440}
        height={320}
        unoptimized
        className="h-56 w-full rounded object-cover"
      />
      <div className="space-y-1 text-sm">
        <p className="text-lg font-semibold">{props.artworkTitle}</p>
        <p>Kunstenaar: {props.artworkArtist}</p>
        <p>Type: {props.typeLabel}</p>
        <p>Formaat: {props.formatLabel}</p>
        <p>Lijst: {props.frameLabel}</p>
        <p>Art direction: {props.artDirectionLabel}</p>
        <p>Setting: {props.wallSettingLabel}</p>
        <p className="flex items-center gap-2">Wandkleur: <span className="inline-block h-4 w-4 rounded border" style={{ background: props.wallColor }} /></p>
        <p>KWC-nummer: {props.kwcNumber || "Geen"}</p>
        <p>KWC toegepast: {formatMoney(props.kwcAppliedCents)}</p>
        <p>Totaal vóór KWC: {formatMoney(props.totalBeforeKwcCents)}</p>
        <p className="font-semibold">Te betalen: {formatMoney(props.totalDueCents)}</p>
        <p className="mt-2 border-t pt-2">Klant: {props.customer.firstName} {props.customer.lastName} · {props.customer.email} · {props.customer.phone}</p>
      </div>
    </div>
  );
}
