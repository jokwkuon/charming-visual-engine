import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Globe } from "lucide-react";
import { Card, DataTable, Explainer, PageHeader, Pill } from "@/components/kit";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/organizations")({
  head: () => seo("Organizations", "Master record for every company, foundation and partner CBC works with."),
  component: Page,
});

const TABS = ["Overview", "Contacts (2)", "Giving History (6)", "Activities (14)", "Interests (5)", "Documents (8)"];

const details: [string, string][] = [
  ["Organization Name", "ATB Financial"], ["Relationship Type", "Sponsor"], ["Relationship Status", "Active"],
  ["Industry", "Financial Services"], ["Website", "www.atb.com"], ["Primary Contact", "James Carter"],
  ["Priority Level", "High"], ["Estimated Opportunity", "$50,000"], ["Current Contribution", "$25,000"],
  ["Lifetime Giving", "$140,000"], ["Next Action", "Renewal meeting · Aug 28"], ["Renewal Date", "Sep 30, 2026"],
];

const activity = [
  { date: "Jul 15, 2025", type: "Meeting", activity: "Quarterly check-in meeting", person: "Sarah Johnson" },
  { date: "Jun 28, 2025", type: "Email", activity: "Provided impact report", person: "Sarah Johnson" },
  { date: "Jun 10, 2025", type: "Lunch", activity: "Lunch with James and team", person: "Sarah Johnson" },
  { date: "May 20, 2025", type: "Call", activity: "Discussed sponsorship renewal", person: "Sarah Johnson" },
  { date: "Apr 05, 2025", type: "Event", activity: "CBC Networking Mixer", person: "James Carter" },
];

function Page() {
  const [tab, setTab] = useState(TABS[0]);
  return (
    <>
      <PageHeader title="Organizations" action="Add Organization" icon={<Building2 className="h-5 w-5" />} />
      <Card className="p-0">
        <div className="flex flex-wrap gap-6 p-6">
          <div className="grid h-20 w-20 place-items-center rounded-xl bg-info text-2xl font-extrabold text-primary-foreground">ATB</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">ATB Financial</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <Pill tone="primary">Sponsor</Pill><Pill>Corporate Partner</Pill><Pill tone="success">Active</Pill>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" /> www.atb.com <span>|</span> Calgary, AB, Canada
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-l pl-6 text-sm">
            <span className="text-muted-foreground">Relationship Owner</span><span className="font-medium">Sarah Johnson</span>
            <span className="text-muted-foreground">Relationship Strength</span><span className="font-medium text-success">● High</span>
            <span className="text-muted-foreground">Potential</span><span className="font-medium text-success">● High</span>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto border-y px-6">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`whitespace-nowrap border-b-2 py-3 text-sm font-medium ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="grid gap-6 p-6 lg:grid-cols-[2fr_3fr]">
          <div>
            <h3 className="mb-3 font-semibold">Organization Details</h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-sm">
              {details.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className={k === "Relationship Status" ? "font-medium text-success" : k === "Website" ? "text-primary" : ""}>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted-foreground">Notes</p>
            <p className="text-sm">Strong supporter of youth programs and scholarship initiatives.</p>
          </div>
          <DataTable title="Recent Activity" rows={activity}
            cols={[{ key: "date", label: "Date" }, { key: "type", label: "Type" }, { key: "activity", label: "Activity", strong: true }, { key: "person", label: "Person" }]} />
        </div>
      </Card>
      <Explainer flow="Create organization → assign Relationship Owner → add contacts → record giving → log activities → dashboard updates automatically." />
    </>
  );
}
