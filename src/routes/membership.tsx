import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { RISK_TONES } from "@/components/kit";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/membership")({
  head: () => seo("Membership", "Manage individual, student and corporate members and renewal activity."),
  component: () => (
    <TablePage
      title="Membership" subtitle="Manage individual, student and corporate members and renewal activity"
      kpis={[["Active Members", "312"], ["Renewal Rate", "84%"], ["New This Year", "38"], ["At Renewal Risk", "21"]]}
      cols={[{ key: "m", label: "Member", strong: true }, { key: "t", label: "Type" }, { key: "i", label: "Industry" }, { key: "s", label: "Status", badge: true }, { key: "r", label: "Renewal" }, { key: "k", label: "Renewal Risk", badge: RISK_TONES }]}
      rows={[
        { m: "Jane Smith", t: "Individual", i: "Finance", s: "Active", r: "Sep 30", k: "Low" },
        { m: "David Grant", t: "Corporate", i: "Energy", s: "Active", r: "Oct 15", k: "Low" },
        { m: "Lisa White", t: "Student", i: "Technology", s: "Active", r: "Sep 05", k: "Medium" },
        { m: "Mark Johnson", t: "Corporate", i: "Professional", s: "Active", r: "Aug 31", k: "High" },
        { m: "Aisha Khan", t: "Individual", i: "Healthcare", s: "Lapsed", r: "Jul 31", k: "High" },
      ]}
    />
  ),
});
