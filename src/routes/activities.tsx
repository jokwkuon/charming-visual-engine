import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/activities")({
  head: () => seo("Activities & Follow-Ups", "Log every relationship interaction and turn it into a clear next action."),
  component: () => (
    <TablePage
      title="Activities & Follow-Ups" subtitle="Log every relationship interaction and turn it into a clear next action"
      kpis={[["Due This Week", "8"], ["Overdue", "3"], ["Upcoming Meetings", "12"]]}
      cols={[{ key: "date", label: "Date" }, { key: "type", label: "Type", badge: {} }, { key: "org", label: "Organization", strong: true }, { key: "purpose", label: "Purpose" }, { key: "next", label: "Next Action" }, { key: "owner", label: "Owner" }]}
      rows={[
        { date: "Jul 15", type: "Meeting", org: "ATB Financial", purpose: "Quarterly check-in", next: "Renewal meeting", owner: "Sarah" },
        { date: "Jun 28", type: "Email", org: "BMO", purpose: "Impact report", next: "Send proposal", owner: "James" },
        { date: "Jun 10", type: "Lunch", org: "TD Bank", purpose: "Relationship building", next: "Follow up", owner: "Mike" },
        { date: "May 20", type: "Call", org: "XYZ Energy", purpose: "Sponsorship renewal", next: "Prepare proposal", owner: "Sarah" },
        { date: "Apr 05", type: "Event", org: "ATB Financial", purpose: "Networking Mixer", next: "Thank-you note", owner: "Aisha" },
      ]}
      flow="Log meeting, call, lunch, coffee, golf, email or event → set next action and owner → Last Contact and action queues update automatically."
    />
  ),
});
