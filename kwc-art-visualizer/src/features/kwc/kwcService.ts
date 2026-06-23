import { prisma } from "@/lib/prisma";

export async function validateKwcCheque(number: string) {
  const cheque = await prisma.kwcCheque.findUnique({ where: { number } });
  if (!cheque) {
    return {
      valid: false,
      number,
      remainingValueCents: 0,
      status: "BLOCKED",
      message: "Cheque niet gevonden.",
    };
  }

  if (cheque.status === "EXPIRED" || cheque.status === "BLOCKED") {
    return {
      valid: false,
      number: cheque.number,
      remainingValueCents: cheque.remainingValueCents,
      status: cheque.status,
      message: "Cheque is niet bruikbaar.",
    };
  }

  return {
    valid: cheque.remainingValueCents > 0,
    number: cheque.number,
    remainingValueCents: cheque.remainingValueCents,
    status: cheque.status,
    message:
      cheque.remainingValueCents > 0 ? "Cheque geldig." : "Cheque heeft geen saldo meer.",
  };
}
