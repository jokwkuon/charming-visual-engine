import type { ReactNode } from "react";
import { DataTable, Explainer, Kpi, KpiGrid, PageHeader, type Col } from "./kit";

export function TablePage<T extends Record<string, string | number>>(p: {
  title: string; subtitle: string; kpis?: [string, string, string?][]; cols: Col<T>[]; rows: T[]; flow?: string; extra?: ReactNode;
}) {
  return (
    <>
      <PageHeader title={p.title} subtitle={p.subtitle} />
      {p.kpis && (
        <KpiGrid>
          {p.kpis.map(([l, v, h]) => <Kpi key={l} label={l} value={v} hint={h} />)}
        </KpiGrid>
      )}
      <DataTable cols={p.cols} rows={p.rows} />
      {p.extra}
      {p.flow && <Explainer flow={p.flow} />}
    </>
  );
}
