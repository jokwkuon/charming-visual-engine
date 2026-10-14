import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/documents")({
  head: () => seo("Documents", "Controlled document library linked to organizations, contacts, sponsorships and programs."),
  component: () => (
    <TablePage
      title="Documents" subtitle="Upload once • Link to records • Control access • Maintain versions"
      cols={[{ key: "d", label: "Document", strong: true }, { key: "t", label: "Type", badge: {} }, { key: "r", label: "Related To" }, { key: "u", label: "Updated" }, { key: "o", label: "Owner" }]}
      rows={[
        { d: "2026 Sponsorship Agreement", t: "Agreement", r: "ATB Financial", u: "Jul 01", o: "Sarah Johnson" },
        { d: "Scholarship Impact Report", t: "Impact Report", r: "Scholarship Program", u: "Jun 28", o: "Aisha Khan" },
        { d: "BMO Sponsorship Proposal", t: "Proposal", r: "BMO", u: "Jun 15", o: "James Brown" },
        { d: "Annual Gala Invoice", t: "Invoice", r: "XYZ Energy", u: "May 20", o: "Sarah Johnson" },
        { d: "2026 Sponsorship Package", t: "Package", r: "CBC", u: "Jan 05", o: "Admin" },
      ]}
      flow="Upload once → link to appropriate records → permissions control access → related pages display the document automatically."
    />
  ),
});
