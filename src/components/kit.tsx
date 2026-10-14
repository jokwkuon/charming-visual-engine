import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export type Tone = "success" | "warning" | "danger" | "info" | "neutral" | "primary";

const toneCls: Record<Tone, string> = {
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  info: "bg-info-soft text-info",
  primary: "bg-secondary text-secondary-foreground",
  neutral: "bg-muted text-muted-foreground",
};

const DEFAULT_TONES: Record<string, Tone> = {
  Active: "success", Received: "success", Healthy: "success", Graduated: "success", Employed: "success", High: "success",
  Committed: "info", "In Progress": "info", Medium: "warning", Watch: "warning", "In-Kind": "primary",
  Low: "neutral", Paused: "warning", "At Risk": "danger", Lapsed: "danger", Overdue: "danger",
};
export const RISK_TONES: Record<string, Tone> = { Low: "success", Medium: "warning", High: "danger" };

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${toneCls[tone]}`}>{children}</span>;
}

export function PageHeader({ title, subtitle, action = "Add New", icon }: { title: string; subtitle?: string; action?: string | null; icon?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon && <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">{icon}</div>}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {action && (
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90">
          <Plus className="h-4 w-4" /> {action}
        </button>
      )}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-card p-5 shadow-sm ${className}`}>{children}</div>;
}

export function Kpi({ label, value, hint, tone }: { label: string; value: string; hint?: string | undefined; tone?: Tone | undefined }) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
      {hint && <p className={`mt-1 text-xs font-medium ${tone === "danger" ? "text-danger" : tone === "success" ? "text-success" : "text-muted-foreground"}`}>{hint}</p>}
    </Card>
  );
}

export function KpiGrid({ children }: { children: ReactNode }) {
  return <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">{children}</div>;
}

export type Col<T> = { key: keyof T & string; label: string; badge?: boolean | Record<string, Tone>; strong?: boolean };

export function DataTable<T extends Record<string, string | number>>({ cols, rows, title }: { cols: Col<T>[]; rows: T[]; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      {title && <div className="border-b px-5 py-4 font-semibold">{title}</div>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/60">
            <tr>
              {cols.map((c) => (
                <th key={c.key} className="whitespace-nowrap px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t transition-colors hover:bg-accent/40">
                {cols.map((c) => {
                  const v = String(r[c.key]);
                  const tones = c.badge === true ? DEFAULT_TONES : c.badge;
                  return (
                    <td key={c.key} className={`whitespace-nowrap px-5 py-3.5 ${c.strong ? "font-semibold" : "text-foreground/80"}`}>
                      {tones ? <Pill tone={tones[v] ?? "neutral"}>{v}</Pill> : v}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Explainer({ flow }: { flow: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed bg-secondary/50 px-5 py-4 text-sm">
      <span className="mr-2 font-semibold text-secondary-foreground">How this page works:</span>
      <span className="text-muted-foreground">{flow}</span>
    </div>
  );
}
