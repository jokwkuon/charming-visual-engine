import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacts")({
  head: () => seo("Contacts", "People connected to CBC organizations, sponsors, donors, members and programs."),
  component: () => (
    <TablePage
      title="Contacts" subtitle="People connected to CBC organizations, sponsors, donors, members and programs"
      kpis={[["Total Contacts", "428"], ["Decision Makers", "86"], ["Recently Contacted", "214"]]}
      cols={[{ key: "contact", label: "Contact", strong: true }, { key: "title", label: "Title" }, { key: "org", label: "Organization" }, { key: "type", label: "Type" }, { key: "influence", label: "Influence", badge: true }, { key: "last", label: "Last Contact" }]}
      rows={[
        { contact: "James Carter", title: "VP Corporate Affairs", org: "ATB Financial", type: "Decision Maker", influence: "High", last: "Jul 15" },
        { contact: "Michelle Brown", title: "CEO", org: "ABC Foundation", type: "Executive", influence: "High", last: "Jul 12" },
        { contact: "David Grant", title: "Director", org: "TD Bank", type: "Relationship", influence: "Medium", last: "Jul 10" },
        { contact: "Sarah Williams", title: "HR Director", org: "XYZ Energy", type: "Decision Maker", influence: "High", last: "Jul 08" },
        { contact: "Mark Johnson", title: "Partner", org: "Community Futures", type: "Partner", influence: "Medium", last: "Jul 03" },
      ]}
    />
  ),
});
