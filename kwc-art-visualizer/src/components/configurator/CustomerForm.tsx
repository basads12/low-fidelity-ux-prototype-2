"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { customerFormSchema } from "@/lib/validations";

type FormData = z.infer<typeof customerFormSchema>;

type Props = {
  initial?: Partial<FormData>;
  onSubmit: (data: FormData) => void;
};

export function CustomerForm({ initial, onSubmit }: Props) {
  const form = useForm<FormData>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      firstName: initial?.firstName ?? "",
      lastName: initial?.lastName ?? "",
      email: initial?.email ?? "",
      phone: initial?.phone ?? "",
      address: initial?.address ?? "",
      consent: initial?.consent ?? false,
    },
  });

  return (
    <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
      <input className="rounded border p-2" placeholder="Voornaam" {...form.register("firstName")} />
      <input className="rounded border p-2" placeholder="Achternaam" {...form.register("lastName")} />
      <input className="rounded border p-2" placeholder="E-mail" {...form.register("email")} />
      <input className="rounded border p-2" placeholder="Telefoon" {...form.register("phone")} />
      <input className="rounded border p-2" placeholder="Adres (optioneel)" {...form.register("address")} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...form.register("consent")} />
        Ik geef toestemming voor verwerking van gegevens.
      </label>
      <button className="rounded bg-zinc-900 px-3 py-2 text-sm text-white" type="submit">
        Gegevens opslaan
      </button>
    </form>
  );
}
