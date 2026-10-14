import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Play } from "lucide-react";
import { Card, PageHeader } from "@/components/kit";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/reports")({
  head: () => seo("Reports", "Run executive, sponsor, scholarship, mentorship, membership and financial reports."),
  component: Page,
});

const REPORTS = [
  ["Executive Performance Report", "Funding, sponsorship, membership and program KPIs"],
  ["Sponsor Relationship Report", "Pipeline, renewals, interactions and opportunities"],
  ["Scholarship Impact Report", "Awards, graduation, employment and alumni engagement"],
  ["Mentorship Report", "Pairings, check-ins, satisfaction and at-risk relationships"],
  ["Membership Report", "Growth, retention, engagement and renewal risk"],
  ["Financial Report", "Revenue, commitments, giving history and event ROI"],
];

function Page() {
  return (
    <>
      <PageHeader title="Reports" subtitle="Pre-built reports drawn from every database page" action={null} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {REPORTS.map(([name, desc]) => (
          <Card key={name} className="flex flex-col">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><BarChart3 className="h-5 w-5" /></div>
            <h3 className="font-semibold">{name}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{desc}</p>
            <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary">
              <Play className="h-3.5 w-3.5" /> Run Report
            </button>
          </Card>
        ))}
      </div>
    </>
  );
}
