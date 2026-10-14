import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/giving")({
  head: () => seo("Sponsorship & Giving", "Track commitments, contributions, agreements and funding history."),
  component: () => (
    <TablePage
      title="Sponsorship & Giving" subtitle="Track commitments, contributions, agreements and funding history"
      kpis={[["Revenue YTD", "$425,000"], ["Committed", "$175,000"], ["Outstanding", "$75,000"]]}
      cols={[{ key: "date", label: "Date" }, { key: "org", label: "Organization", strong: true }, { key: "amount", label: "Amount", strong: true }, { key: "level", label: "Level" }, { key: "program", label: "Program / Event" }, { key: "status", label: "Status", badge: true }]}
      rows={[
        { date: "Jul 01", org: "ATB Financial", amount: "$25,000", level: "Gold", program: "Scholarship", status: "Received" },
        { date: "Jun 15", org: "BMO", amount: "$15,000", level: "Silver", program: "Mentorship", status: "Received" },
        { date: "May 20", org: "TD Bank", amount: "$10,000", level: "Bronze", program: "BHM", status: "Committed" },
        { date: "Apr 05", org: "XYZ Energy", amount: "$50,000", level: "Platinum", program: "Annual Gala", status: "Received" },
        { date: "Mar 10", org: "123 Logistics", amount: "$5,000", level: "Friend", program: "Youth", status: "In-Kind" },
      ]}
      flow="Each contribution is recorded once and reused throughout the system — organization totals, renewals and dashboard figures update automatically."
    />
  ),
});
