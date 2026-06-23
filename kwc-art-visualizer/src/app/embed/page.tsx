import { ConfiguratorWizard } from "@/components/configurator/ConfiguratorWizard";

type Props = {
  searchParams: Promise<{
    artworkToken?: string;
    setting?: string;
    format?: string;
    frame?: string;
  }>;
};

export default async function EmbedPage({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-white p-4">
      <ConfiguratorWizard embedMode initialConfig={params} />
    </main>
  );
}
