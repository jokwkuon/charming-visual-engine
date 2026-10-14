import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () => seo("Programs & Recipients", "Manage participants and measure outcomes across CBC programs."),
  component: () => (
    <TablePage
      title="Programs & Recipients" subtitle="Manage participants and measure outcomes across CBC programs"
      kpis={[["Participants", "210"], ["Scholarships", "125"], ["Graduation Rate", "92%"], ["Employed in Field", "74%"]]}
      cols={[{ key: "r", label: "Recipient", strong: true }, { key: "p", label: "Program" }, { key: "c", label: "Cohort" }, { key: "l", label: "Level" }, { key: "f", label: "Field" }, { key: "o", label: "Outcome", badge: true }]}
      rows={[
        { r: "Student 104", p: "Scholarship", c: "2026", l: "Post-Secondary", f: "Business", o: "Graduated" },
        { r: "Student 118", p: "Scholarship", c: "2026", l: "Post-Secondary", f: "Engineering", o: "In Progress" },
        { r: "Student 121", p: "Youth", c: "2026", l: "High School", f: "Leadership", o: "In Progress" },
        { r: "Student 133", p: "Scholarship", c: "2025", l: "Post-Secondary", f: "Finance", o: "Employed" },
        { r: "Student 141", p: "Mentorship", c: "2025", l: "Post-Secondary", f: "Technology", o: "Employed" },
      ]}
      flow="Enroll recipient → record support and education → update outcomes → system calculates graduation, employment, alignment and alumni engagement KPIs."
    />
  ),
});
