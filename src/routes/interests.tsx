import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/interests")({
  head: () => seo("Sponsor Interests", "Match sponsor priorities with CBC programs and funding opportunities."),
  component: () => (
    <TablePage
      title="Sponsor Interests" subtitle="Match sponsor priorities with CBC programs and funding opportunities"
      cols={[{ key: "org", label: "Organization", strong: true }, { key: "interest", label: "Interest" }, { key: "strength", label: "Strength", badge: true }, { key: "program", label: "Program Alignment" }, { key: "opp", label: "Opportunity", strong: true }, { key: "owner", label: "Owner" }]}
      rows={[
        { org: "ATB Financial", interest: "Scholarships", strength: "High", program: "Scholarship Program", opp: "$50,000", owner: "Sarah" },
        { org: "BMO", interest: "Mentorship", strength: "High", program: "Mentorship Program", opp: "$25,000", owner: "James" },
        { org: "TD Bank", interest: "Youth", strength: "Medium", program: "Youth Leadership", opp: "$15,000", owner: "Mike" },
        { org: "XYZ Energy", interest: "Entrepreneurship", strength: "High", program: "Business Accelerator", opp: "$40,000", owner: "Sarah" },
        { org: "ABC Foundation", interest: "Professional Development", strength: "Medium", program: "Speaker Series", opp: "$20,000", owner: "Aisha" },
      ]}
      flow="Capture interest during a conversation → match it to programs → connect proposals/actions → dashboard reveals sponsor-program alignment."
    />
  ),
});
