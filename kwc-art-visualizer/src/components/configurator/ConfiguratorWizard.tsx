"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useConfiguratorStore } from "./useConfiguratorStore";
import { SettingSelector } from "./SettingSelector";
import { WallUploader } from "./WallUploader";
import { WallPhotoEditor } from "@/features/visualizer/WallPhotoEditor";
import { WallColorPicker } from "./WallColorPicker";
import { ArtworkScannerStep } from "./ArtworkScannerStep";
import { ArtworkTypeSelector } from "./ArtworkTypeSelector";
import { FormatSelector } from "./FormatSelector";
import { FrameSelector } from "./FrameSelector";
import { KwcScannerStep } from "./KwcScannerStep";
import { CustomerForm } from "./CustomerForm";
import { SalesOverview } from "./SalesOverview";
import { PriceSummary } from "./PriceSummary";
import { ART_DIRECTION_PRESETS, VisualizerCanvas } from "@/features/visualizer/VisualizerCanvas";
import { FRAME_OPTIONS, FORMATEN, PAINTING_TYPES, SETTINGS } from "@/lib/constants";
import { calculatePricing } from "@/features/pricing/pricing";
import { QRCodeDisplay } from "@/components/qr/QRCodeDisplay";

type Props = {
  embedMode?: boolean;
  initialConfig?: {
    artworkToken?: string;
    setting?: string;
    format?: string;
    frame?: string;
  };
};

export function ConfiguratorWizard({ embedMode = false, initialConfig }: Props) {
  const brand = {
    ink: "#1c1a16",
    inkSoft: "#5a544a",
    stone200: "#e1d5c2",
    bordeaux: "#7d3833",
    cream: "#f5f0e8",
  };
  const store = useConfiguratorStore();
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [customer, setCustomer] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    consent: boolean;
  } | null>(null);
  const [employeeLink, setEmployeeLink] = useState<string>("");
  const [lastOrderId, setLastOrderId] = useState<string>("");
  const [creating, setCreating] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [loadingArtwork, setLoadingArtwork] = useState(Boolean(initialConfig?.artworkToken));
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const availableFormatIds = useMemo(() => FORMATEN.map((f) => f.id), []);
  const typeLabel = PAINTING_TYPES.find((t) => t.id === store.type)?.label ?? store.type;
  const formatLabel = FORMATEN.find((f) => f.id === store.formatId)?.label ?? store.formatId;
  const frameLabel = FRAME_OPTIONS.find((f) => f.id === store.frameOptionId)?.label ?? store.frameOptionId;
  const wallSettingLabel = SETTINGS.find((s) => s.key === store.setting)?.label ?? store.setting;
  const artDirectionLabel =
    ART_DIRECTION_PRESETS[store.artDirectionPreset]?.label ?? ART_DIRECTION_PRESETS.classic.label;

  const pricing = useMemo(
    () =>
      calculatePricing({
        artwork: { basePrices: Object.fromEntries(FORMATEN.map((f) => [f.id, 59500])) },
        formatId: store.formatId,
        type: store.type,
        frameOptionId: store.frameOptionId,
        kwcRemainingCents: store.kwcRemainingCents,
      }),
    [store.formatId, store.type, store.frameOptionId, store.kwcRemainingCents]
  );

  const postEmbedEvent = (type: string, payload: unknown) => {
    if (!embedMode || typeof window === "undefined" || !window.parent) return;
    window.parent.postMessage({ type, payload }, "*");
  };

  useEffect(() => {
    if (!initialConfig) return;
    if (initialConfig.setting) store.setField("setting", initialConfig.setting);
    if (initialConfig.format) store.setField("formatId", initialConfig.format);
    if (initialConfig.frame) store.setField("frameOptionId", initialConfig.frame);
    if (initialConfig.artworkToken) {
      void fetch("/api/qr/artwork", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: initialConfig.artworkToken }),
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (!data?.artwork) {
            setErrorMessage("Het kunstwerk uit de embed-link kon niet worden gevonden.");
            return;
          }
          store.setField("artworkId", data.artwork.id);
          store.setField("artworkTitle", data.artwork.title);
          store.setField("artworkArtist", data.artwork.artist);
          store.setField("artworkImageUrl", data.artwork.imageUrl);
        })
        .finally(() => setLoadingArtwork(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!embedMode || typeof window === "undefined" || !window.parent) return;
    window.parent.postMessage(
      {
        type: "CONFIG_UPDATED",
        payload: {
          setting: store.setting,
          formatId: store.formatId,
          frameOptionId: store.frameOptionId,
          type: store.type,
          wallColor: store.wallColor,
          artDirectionPreset: store.artDirectionPreset,
        },
      },
      "*"
    );
  }, [embedMode, store.setting, store.formatId, store.frameOptionId, store.type, store.wallColor, store.artDirectionPreset]);

  const createOrder = async () => {
    if (!customer) return;
    setErrorMessage("");
    setSuccessMessage("");
    setCreating(true);
    let previewDataUrl = "";
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, { backgroundColor: null });
      previewDataUrl = canvas.toDataURL("image/png");
      store.setField("previewDataUrl", previewDataUrl);
    }

    if (!store.artworkId) {
      setErrorMessage("Kies eerst een kunstwerk (via QR of handmatige selectie) voordat u het overzicht opslaat.");
      setCreating(false);
      return;
    }

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artworkId: store.artworkId,
        customer,
        type: store.type,
        formatId: store.formatId,
        frameOptionId: store.frameOptionId,
        quantity: 1,
        wallSetting: store.setting,
        wallColor: store.wallColor,
        artDirectionPreset: store.artDirectionPreset,
        kwcNumber: store.kwcNumber || undefined,
        previewImageDataUrl: previewDataUrl,
        pricing,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      setErrorMessage("Het verkoopoverzicht kon niet worden opgeslagen. Controleer de ingevoerde gegevens.");
      setCreating(false);
      return;
    }

    const toWaitingResponse = await fetch(`/api/orders/${data.order.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "WAITING_FOR_EMPLOYEE_APPROVAL" }),
    });
    if (!toWaitingResponse.ok) {
      setErrorMessage("De order is als concept bewaard, maar nog niet doorgestuurd voor medewerkercontrole.");
      setCreating(false);
      return;
    }

    const waitingOrder = await toWaitingResponse.json();
    setLastOrderId(waitingOrder.id);
    setEmployeeLink(data.employeeLink);
    setSuccessMessage("Het verkoopoverzicht is opgeslagen en doorgestuurd voor medewerkergoedkeuring.");
    setCreating(false);
    postEmbedEvent("ORDER_CREATED", waitingOrder);
  };

  const exportPreviewImage = async () => {
    if (!previewRef.current) {
      setErrorMessage("De preview is nog niet beschikbaar om te exporteren.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");
    setExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, { backgroundColor: null, useCORS: true });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `kwc-preview-${Date.now()}.png`;
      link.click();
      setSuccessMessage("Preview is als afbeelding opgeslagen.");
    } catch {
      setErrorMessage("Exporteren is mislukt. Probeer het nogmaals.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div ref={previewRef}>
          <VisualizerCanvas
            settingKey={store.setting}
            wallColor={store.wallColor}
            wallIntensity={store.wallIntensity}
            uploadedImage={store.cleanedWallImageDataUrl || store.uploadedWallImageDataUrl}
            artworkImageUrl={store.artworkImageUrl}
            type={store.type}
            formatId={store.formatId}
            frameOptionId={store.frameOptionId}
            twinsGapCm={store.twinsGapCm}
            presetId={store.artDirectionPreset}
            onPresetChange={(presetId) => store.setField("artDirectionPreset", presetId)}
          />
        </div>
        <div className="space-y-3 rounded-lg border p-4" style={{ borderColor: brand.stone200, backgroundColor: "#fff" }}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold" style={{ color: brand.ink }}>
              Stap {store.step} van 10
            </h2>
            <button
              type="button"
              className="rounded border px-3 py-1.5 text-xs disabled:opacity-50"
              style={{ borderColor: brand.stone200, color: brand.inkSoft, backgroundColor: brand.cream }}
              onClick={exportPreviewImage}
              disabled={exporting}
            >
              {exporting ? "Exporteren..." : "Preview exporteren"}
            </button>
          </div>
          <p className="text-xs" style={{ color: brand.inkSoft }}>
            De Kunst van Kunst: warme materialen, rustige compositie en schaalgetrouwe presentatie.
          </p>
          <div className="space-y-3">
            {store.step === 1 ? (
              <>
                <SettingSelector value={store.setting} onChange={(v) => store.setField("setting", v)} />
                <WallUploader onUploaded={(dataUrl) => store.setField("uploadedWallImageDataUrl", dataUrl)} />
              </>
            ) : null}
            {store.step === 2 && store.uploadedWallImageDataUrl ? (
              <WallPhotoEditor
                imageDataUrl={store.uploadedWallImageDataUrl}
                wallColor={store.wallColor}
                onUpdated={(dataUrl) => store.setField("cleanedWallImageDataUrl", dataUrl)}
              />
            ) : null}
            {store.step === 2 && !store.uploadedWallImageDataUrl ? (
              <p className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                Upload eerst een eigen muurfoto bij stap 1 om object removal te gebruiken.
              </p>
            ) : null}
            {store.step === 3 ? (
              <WallColorPicker
                color={store.wallColor}
                intensity={store.wallIntensity}
                onColorChange={(v) => store.setField("wallColor", v)}
                onIntensityChange={(v) => store.setField("wallIntensity", v)}
              />
            ) : null}
            {store.step === 4 ? (
              <ArtworkScannerStep
                onArtworkLoaded={(artwork) => {
                  store.setField("artworkId", artwork.id);
                  store.setField("artworkTitle", artwork.title);
                  store.setField("artworkArtist", artwork.artist);
                  store.setField("artworkImageUrl", artwork.imageUrl);
                  store.setField("type", artwork.defaultType);
                  postEmbedEvent("ARTWORK_SELECTED", artwork);
                }}
              />
            ) : null}
            {loadingArtwork ? (
              <p className="text-sm text-zinc-600">Kunstwerk laden...</p>
            ) : null}
            {store.step === 5 ? <ArtworkTypeSelector value={store.type} onChange={(v) => store.setField("type", v)} /> : null}
            {store.step === 6 ? (
              <FormatSelector value={store.formatId} availableFormatIds={availableFormatIds} onChange={(v) => store.setField("formatId", v)} />
            ) : null}
            {store.step === 7 ? (
              <FrameSelector
                value={store.frameOptionId}
                onChange={(v) => store.setField("frameOptionId", v)}
                twinsGapCm={store.twinsGapCm}
                onGapChange={(v) => store.setField("twinsGapCm", v)}
                type={store.type}
              />
            ) : null}
            {store.step === 8 ? (
              <KwcScannerStep
                number={store.kwcNumber}
                remainingCents={store.kwcRemainingCents}
                onValidated={(number, remainingCents) => {
                  store.setField("kwcNumber", number);
                  store.setField("kwcRemainingCents", remainingCents);
                }}
              />
            ) : null}
            {store.step === 9 ? (
              <CustomerForm
                onSubmit={(data) => {
                  setCustomer(data);
                }}
              />
            ) : null}
            {store.step === 10 ? (
              <div className="space-y-3">
                {customer ? (
                  <SalesOverview
                    artworkTitle={store.artworkTitle}
                    artworkArtist={store.artworkArtist}
                    imageUrl={store.artworkImageUrl}
                    typeLabel={typeLabel}
                    formatLabel={formatLabel}
                    frameLabel={frameLabel}
                    artDirectionLabel={artDirectionLabel}
                    wallSettingLabel={wallSettingLabel}
                    wallColor={store.wallColor}
                    kwcNumber={store.kwcNumber}
                    kwcAppliedCents={pricing.kwcAppliedCents}
                    totalBeforeKwcCents={pricing.totalBeforeKwcCents}
                    totalDueCents={pricing.totalDueCents}
                    customer={customer}
                  />
                ) : (
                  <p className="text-sm text-zinc-600">Vul eerst klantgegevens in bij stap 9.</p>
                )}
                <PriceSummary {...pricing} />
                <button
                  type="button"
                  className="rounded px-3 py-2 text-sm text-white disabled:opacity-50"
                  style={{ backgroundColor: brand.bordeaux }}
                  disabled={!customer || creating}
                  onClick={createOrder}
                >
                  {creating ? "Overzicht wordt opgesteld..." : "Verkoopoverzicht opstellen"}
                </button>
                {employeeLink ? (
                  <>
                    <p className="text-sm">Medewerkerlink: {employeeLink}</p>
                    <QRCodeDisplay
                      value={`${typeof window !== "undefined" ? window.location.origin : ""}${employeeLink}`}
                      label="Scan voor medewerkerflow"
                    />
                    <p className="text-xs text-zinc-500">Order ID: {lastOrderId}</p>
                  </>
                ) : null}
              </div>
            ) : null}
            {errorMessage ? (
              <p className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">{errorMessage}</p>
            ) : null}
            {successMessage ? (
              <p className="rounded border p-2 text-sm" style={{ borderColor: "#d8c9b6", backgroundColor: "#f8f2e8", color: brand.ink }}>
                {successMessage}
              </p>
            ) : null}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              className="rounded border border-zinc-300 px-3 py-2 text-sm disabled:opacity-50"
              onClick={store.prevStep}
              disabled={store.step <= 1}
            >
              Terug
            </button>
            <button
              className="rounded bg-zinc-900 px-3 py-2 text-sm text-white disabled:opacity-50"
              onClick={store.nextStep}
              disabled={store.step >= 10}
            >
              Volgende
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
