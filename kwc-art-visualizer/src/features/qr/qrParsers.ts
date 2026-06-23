export type ParsedQrResult =
  | { kind: "ARTWORK"; token: string }
  | { kind: "KWC_CHEQUE"; number: string }
  | { kind: "UNKNOWN"; raw: string };

export function parseQrPayload(payload: string): ParsedQrResult {
  const raw = payload.trim();

  try {
    const json = JSON.parse(raw) as { type?: string; token?: string; number?: string };
    if (json.type === "ARTWORK" && json.token) return { kind: "ARTWORK", token: json.token };
    if (json.type === "KWC_CHEQUE" && json.number) {
      return { kind: "KWC_CHEQUE", number: json.number };
    }
  } catch {
    // noop
  }

  if (/\/scan\/artwork\/([A-Za-z0-9_-]+)/.test(raw)) {
    const token = raw.split("/scan/artwork/")[1]?.split("?")[0];
    if (token) return { kind: "ARTWORK", token };
  }

  if (/^KWC-[A-Z0-9-]+$/.test(raw)) {
    return { kind: "KWC_CHEQUE", number: raw };
  }

  return { kind: "UNKNOWN", raw };
}
