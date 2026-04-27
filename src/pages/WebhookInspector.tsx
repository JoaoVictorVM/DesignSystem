import { useState } from "react";
import {
  CopyIcon,
  Trash2Icon,
  WandSparklesIcon,
  Loader2Icon,
  ChevronDownIcon,
} from "lucide-react";
import { Badge } from "../components/webhookinspector/badge";
import { Checkbox } from "../components/webhookinspector/checkbox";
import { IconButton } from "../components/webhookinspector/icon-button";
import { CodeBlock } from "../components/webhookinspector/code-block";
import { SectionTitle } from "../components/webhookinspector/section-title";
import { SectionDataTable } from "../components/webhookinspector/section-data-table";
import { WebhookDetailHeader } from "../components/webhookinspector/webhook-detail-header";

const colors = [
  { token: "zinc-950", hex: "#0f0f11", label: "Fundo principal" },
  { token: "zinc-900", hex: "#131316", label: "Fundo sidebar" },
  { token: "zinc-800", hex: "#18181b", label: "Fundo elevado / cards" },
  { token: "zinc-700", hex: "#27272a", label: "Bordas" },
  { token: "zinc-600", hex: "#3f3f46", label: "Estados hover" },
  { token: "zinc-500", hex: "#52525b", label: "Interativo ativo" },
  { token: "zinc-400", hex: "#a1a1aa", label: "Texto silenciado" },
  { token: "zinc-300", hex: "#d4d4d8", label: "Texto secundário" },
  { token: "zinc-200", hex: "#e4e4e7", label: "Texto primário" },
  { token: "zinc-100", hex: "#f4f4f5", label: "Texto brilhante" },
  { token: "zinc-50", hex: "#fafafa", label: "Destaque máximo" },
  { token: "indigo-400", hex: "#818cf8", label: "CTA primário" },
];

const typographyScales = [
  { token: "text-xs", size: "12px", weight: "400", label: "Extra Small" },
  { token: "text-sm", size: "14px", weight: "400", label: "Small" },
  { token: "text-base", size: "16px", weight: "400", label: "Base" },
  { token: "text-lg", size: "18px", weight: "500", label: "Large" },
];

const spacingScale = [
  { token: "gap-1 / p-1", px: "4px", usage: "Ícones inline, gaps mínimos" },
  { token: "gap-2 / p-2", px: "8px", usage: "Separadores, gaps de ícone" },
  {
    token: "gap-3 / p-3",
    px: "12px",
    usage: "Células de tabela, itens de lista",
  },
  { token: "gap-4 / p-4", px: "16px", usage: "Blocos internos, code padding" },
  {
    token: "space-y-4",
    px: "16px",
    usage: "Espaçamento vertical entre elementos",
  },
  { token: "gap-6 / p-6", px: "24px", usage: "Padding de seções e headers" },
  {
    token: "space-y-6",
    px: "24px",
    usage: "Espaçamento vertical entre seções",
  },
];

const httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

const mockTableData = [
  { key: "content-type", value: "application/json" },
  { key: "authorization", value: "Bearer eyJhbGciOiJIUzI1NiJ9..." },
  { key: "x-request-id", value: "a1b2c3d4-e5f6-7890-abcd-ef1234567890" },
  { key: "user-agent", value: "WebhookInspector/1.0" },
];

const mockCodeJson = `{
  "event": "payment.completed",
  "id": "evt_01JKWMZ9X8Y2Q4R5T6U7V8W9",
  "data": {
    "amount": 4990,
    "currency": "BRL",
    "status": "paid"
  },
  "created_at": "2026-04-20T14:32:00Z"
}`;

const mockCodeTs = `import type { IncomingMessage } from 'node:http'

export async function handler(req: IncomingMessage) {
  const body = await readBody(req)
  const event = JSON.parse(body)

  if (event.type === 'payment.completed') {
    await processPayment(event.data)
  }
}`;

function Divider() {
  return <hr className="border-zinc-700" />;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
      <Divider />
    </div>
  );
}

export default function WebhookInspector() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="max-w-5xl mx-auto bg-zinc-950">
      <header className="border-b border-zinc-700 px-8 py-6">
        <h1 className="text-3xl font-semibold text-zinc-100">Design System</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Tokens e componentes do WebhookInspector
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-12 space-y-16">
        {/* ── CORES ── */}
        <section className="space-y-6">
          <SectionHeader title="Cores" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {colors.map(({ token, hex, label }) => (
              <div
                key={token}
                className="overflow-hidden rounded-lg border border-zinc-700"
              >
                <div className="h-16 w-full" style={{ backgroundColor: hex }} />
                <div className="bg-zinc-800 p-3 space-y-1">
                  <p className="text-sm font-mono font-semibold text-zinc-100">
                    {token}
                  </p>
                  <p className="text-xs font-mono text-zinc-400">{hex}</p>
                  <p className="text-xs text-zinc-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPOGRAFIA ── */}
        <section className="space-y-6">
          <SectionHeader title="Tipografia" />

          <div className="space-y-4">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Geist — fonte padrão
            </p>
            <div className="space-y-3">
              {typographyScales.map(({ token, size, weight, label }) => (
                <div
                  key={token}
                  className="flex items-baseline gap-6 rounded-lg border border-zinc-700 bg-zinc-800 p-4"
                >
                  <span
                    className="text-zinc-100 min-w-[180px]"
                    style={{ fontSize: size, fontWeight: weight }}
                  >
                    {label}
                  </span>
                  <div className="flex gap-4 text-xs font-mono text-zinc-500">
                    <span>{token}</span>
                    <span>{size}</span>
                    <span>weight {weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              JetBrains Mono — fonte mono
            </p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4 space-y-2">
              <p className="font-mono text-sm text-zinc-300">
                application/json · Bearer eyJhbGc... · x-request-id
              </p>
              <p className="text-xs font-mono text-zinc-500">
                font-mono · text-sm · text-zinc-300
              </p>
            </div>
          </div>
        </section>

        {/* ── ESPAÇAMENTOS ── */}
        <section className="space-y-6">
          <SectionHeader title="Espaçamentos" />
          <div className="space-y-3">
            {spacingScale.map(({ token, px, usage }) => (
              <div
                key={token}
                className="flex items-center gap-6 rounded-lg border border-zinc-700 bg-zinc-800 p-4"
              >
                <div
                  className="shrink-0 bg-indigo-400/30 border border-indigo-400/50 rounded"
                  style={{ width: px, height: "20px", minWidth: px }}
                />
                <div className="flex gap-6 text-sm min-w-0">
                  <span className="font-mono text-zinc-200 shrink-0">
                    {token}
                  </span>
                  <span className="font-mono text-zinc-400 shrink-0">{px}</span>
                  <span className="text-zinc-500 truncate">{usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPONENTES ── */}
        <section className="space-y-10">
          <SectionHeader title="Componentes" />

          {/* Badge */}
          <div className="space-y-4">
            <SectionTitle>Badge</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {httpMethods.map((method) => (
                <Badge key={method}>{method}</Badge>
              ))}
            </div>
          </div>

          <Divider />

          {/* Checkbox */}
          <div className="space-y-4">
            <SectionTitle>Checkbox</SectionTitle>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Checkbox checked={false} />
                <span className="text-sm text-zinc-400">Desmarcado</span>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox checked={true} />
                <span className="text-sm text-zinc-400">Marcado</span>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) => setChecked(v === true)}
                />
                <span className="text-sm text-zinc-400">Interativo</span>
              </div>
            </div>
          </div>

          <Divider />

          {/* IconButton */}
          <div className="space-y-4">
            <SectionTitle>IconButton</SectionTitle>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <IconButton
                    icon={<CopyIcon className="size-3.5" />}
                    size="sm"
                  />
                  <span className="text-sm text-zinc-400">size="sm"</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconButton
                    icon={<CopyIcon className="size-4" />}
                    size="md"
                  />
                  <span className="text-sm text-zinc-400">
                    size="md" (padrão)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IconButton
                  icon={<Trash2Icon className="size-4" />}
                  size="md"
                />
                <IconButton
                  icon={<WandSparklesIcon className="size-4" />}
                  size="md"
                />
                <IconButton
                  icon={<ChevronDownIcon className="size-4" />}
                  size="md"
                />
                <span className="text-sm text-zinc-400">
                  Variações de ícone
                </span>
              </div>
            </div>
          </div>

          <Divider />

          {/* SectionTitle */}
          <div className="space-y-4">
            <SectionTitle>SectionTitle</SectionTitle>
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-6">
              <SectionTitle>Exemplo de título de seção</SectionTitle>
            </div>
          </div>

          <Divider />

          {/* SectionDataTable */}
          <div className="space-y-4">
            <SectionTitle>SectionDataTable</SectionTitle>
            <SectionDataTable data={mockTableData} />
          </div>

          <Divider />

          {/* CodeBlock */}
          <div className="space-y-4">
            <SectionTitle>CodeBlock</SectionTitle>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-500">
                  language="json"
                </p>
                <CodeBlock code={mockCodeJson} language="json" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-500">
                  language="typescript"
                </p>
                <CodeBlock code={mockCodeTs} language="typescript" />
              </div>
            </div>
          </div>

          <Divider />

          {/* WebhookDetailHeader */}
          <div className="space-y-4">
            <SectionTitle>WebhookDetailHeader</SectionTitle>
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 overflow-hidden">
              {httpMethods.slice(0, 3).map((method) => (
                <WebhookDetailHeader
                  key={method}
                  method={method}
                  pathname="/webhooks/payment/completed"
                  ip="192.168.1.42"
                  createdAt={new Date("2026-04-20T14:32:00Z")}
                />
              ))}
            </div>
          </div>

          <Divider />

          {/* Primary CTA Button */}
          <div className="space-y-4">
            <SectionTitle>Botão CTA primário</SectionTitle>
            <div className="flex flex-col gap-3 max-w-xs">
              <button
                type="button"
                className="bg-indigo-400 text-white rounded-lg w-full py-2 font-medium text-sm flex items-center justify-center gap-3"
              >
                <WandSparklesIcon className="size-4" />
                Gerar handler
              </button>
              <button
                type="button"
                disabled
                className="bg-indigo-400 text-white rounded-lg w-full py-2 font-medium text-sm flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <Loader2Icon className="size-4 animate-spin" />
                Gerando...
              </button>
              <button
                type="button"
                disabled
                className="bg-indigo-400 text-white rounded-lg w-full py-2 font-medium text-sm flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <WandSparklesIcon className="size-4" />
                Desabilitado
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
