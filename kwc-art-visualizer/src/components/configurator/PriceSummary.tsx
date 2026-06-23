import { formatMoney } from "@/lib/utils";

type Props = {
  basePriceCents: number;
  framePriceCents: number;
  totalBeforeKwcCents: number;
  kwcAppliedCents: number;
  totalDueCents: number;
};

export function PriceSummary(props: Props) {
  return (
    <div className="rounded border border-zinc-200 p-3 text-sm">
      <div className="flex justify-between"><span>Basisprijs</span><span>{formatMoney(props.basePriceCents)}</span></div>
      <div className="flex justify-between"><span>Lijstprijs</span><span>{formatMoney(props.framePriceCents)}</span></div>
      <div className="flex justify-between"><span>Totaal vóór KWC</span><span>{formatMoney(props.totalBeforeKwcCents)}</span></div>
      <div className="flex justify-between"><span>KWC toegepast</span><span>- {formatMoney(props.kwcAppliedCents)}</span></div>
      <div className="mt-2 flex justify-between border-t pt-2 font-semibold"><span>Te betalen</span><span>{formatMoney(props.totalDueCents)}</span></div>
    </div>
  );
}
