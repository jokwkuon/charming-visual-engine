import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Card, Kpi, KpiGrid, Pill } from "@/components/kit";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Executive Dashboard", "Live view of CBC funding, relationships, programs, membership and community impact."),
  component: Dashboard,
});

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between border-b py-2.5 text-sm last:border-0">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

function Dashboard() {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Executive Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Live view of CBC funding, relationships, programs, membership and community impact</p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-lg border bg-card px-3 py-2 text-sm font-medium">2026 YTD</span>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Download className="h-4 w-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <Kpi label="Sponsorship Revenue" value="$425K" hint="85% of target" tone="success" />
        <Kpi label="Active Sponsors" value="34" hint="+6 new" tone="success" />
        <Kpi label="Sponsor Pipeline" value="$175K" hint="Future funding" />
        <Kpi label="Renewal Rate" value="87%" hint="3 at risk" tone="danger" />
        <Kpi label="Active Members" value="312" hint="+12% YoY" tone="success" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <h3 className="mb-3 font-semibold">Sponsor & Donor Relationships</h3>
          <div className="grid grid-cols-2 gap-3">
            {[["Active", "34", "success"], ["Prospects", "18", "info"], ["Proposal", "9", "primary"], ["At Risk", "3", "danger"]].map(([l, v, t]) => (
              <div key={l} className="rounded-xl bg-muted p-3">
                <Pill tone={t as "success"}>{l}</Pill>
                <p className="mt-2 text-2xl font-bold">{v}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">Funding & Financial Health</h3>
          <p className="text-sm text-muted-foreground">$425K raised vs. $500K goal</p>
          <div className="my-3 h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[85%] rounded-full bg-primary" />
          </div>
          <div className="mb-3 flex justify-between text-xs text-muted-foreground"><span>85% funded</span><span>$75K remaining</span></div>
          <Stat label="Pipeline" value="$175K" />
          <Stat label="Outstanding" value="$75K" />
          <Stat label="Event ROI" value="1.8x" />
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">Action Queue — Next 7 Days</h3>
          {[["HIGH", "ATB Financial", "Renewal", "Aug 28"], ["HIGH", "XYZ Energy", "Proposal", "Aug 29"], ["MED", "BMO", "Impact report", "Aug 30"], ["MED", "ABC Foundation", "Follow up", "Sep 02"]].map(([p, e, a, d]) => (
            <div key={e} className="flex items-center gap-3 border-b py-2.5 text-sm last:border-0">
              <Pill tone={p === "HIGH" ? "danger" : "warning"}>{p}</Pill>
              <div className="flex-1"><div className="font-medium">{e}</div><div className="text-xs text-muted-foreground">{a}</div></div>
              <span className="text-xs text-muted-foreground">{d}</span>
            </div>
          ))}
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">Scholarship & Education Impact</h3>
          <Stat label="Awarded" value="125" />
          <Stat label="Funds" value="$250K" />
          <Stat label="Graduation" value="92%" />
          <Stat label="Employed in field" value="74%" />
          <Stat label="Engaged alumni" value="38" />
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">Mentorship & Membership</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mentorship</p>
          <Stat label="Active pairs" value="86" />
          <Stat label="Pair health" value="88%" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Membership</p>
          <Stat label="Active members" value="312" />
          <Stat label="Retention" value="84%" />
          <Stat label="Industry sectors" value="72" />
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">CBC Community Impact</h3>
          <Stat label="People reached" value="428" />
          <Stat label="Volunteer hours" value="1,420" />
          <Stat label="Alumni giving" value="$18K" />
          <div className="mt-4 rounded-xl bg-secondary p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">Executive View</p>
            <p className="mt-1 text-sm text-muted-foreground">Are resources translating into measurable community outcomes?</p>
            <p className="mt-2 text-sm font-semibold">Funding on track; renewal risk needs attention.</p>
          </div>
        </Card>
      </div>
    </>
  );
}
