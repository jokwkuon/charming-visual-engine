import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Pill } from "@/components/kit";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/settings")({
  head: () => seo("Settings", "Manage users, roles and field options for the CBC database."),
  component: Page,
});

const users = [["John Smith", "Administrator"], ["Sarah Johnson", "Relationship Owner"], ["James Carter", "Relationship Owner"], ["Aisha Khan", "Program Lead"]];
const lists: [string, string[]][] = [
  ["Relationship Status", ["Prospect", "Cultivate", "Proposal", "Committed", "Active", "Lapsed"]],
  ["Organization Type", ["Sponsor", "Donor", "Prospect", "Community Partner", "Corporate Partner"]],
  ["Sponsorship Level", ["Platinum", "Gold", "Silver", "Bronze", "Friend"]],
];

function Page() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Users, permissions and field options" action={null} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 font-semibold">Users & Roles</h3>
          {users.map(([n, r]) => (
            <div key={n} className="flex items-center justify-between border-b py-3 text-sm last:border-0">
              <span className="font-medium">{n}</span><Pill tone="primary">{r}</Pill>
            </div>
          ))}
        </Card>
        <Card>
          <h3 className="mb-3 font-semibold">Field Options</h3>
          {lists.map(([k, vs]) => (
            <div key={k} className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</p>
              <div className="flex flex-wrap gap-2">{vs.map((v) => <Pill key={v}>{v}</Pill>)}</div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
