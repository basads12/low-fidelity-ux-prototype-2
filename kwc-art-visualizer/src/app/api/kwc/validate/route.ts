import { NextResponse } from "next/server";
import { kwcValidateSchema } from "@/lib/validations";
import { validateKwcCheque } from "@/features/kwc/kwcService";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = kwcValidateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const result = await validateKwcCheque(parsed.data.number);
  return NextResponse.json(result);
}
