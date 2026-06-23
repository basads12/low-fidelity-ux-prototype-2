"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

type Props = {
  value: string;
  label?: string;
};

export function QRCodeDisplay({ value, label }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(value, { margin: 1, width: 200 }).then(setUrl);
  }, [value]);

  return (
    <div className="rounded border border-zinc-200 p-3">
      {label ? <p className="mb-2 text-sm text-zinc-600">{label}</p> : null}
      {url ? <Image src={url} alt="QR code" width={160} height={160} unoptimized className="h-40 w-40" /> : null}
    </div>
  );
}
