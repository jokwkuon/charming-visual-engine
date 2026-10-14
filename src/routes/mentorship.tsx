import { createFileRoute } from "@tanstack/react-router";
import { TablePage } from "@/components/TablePage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/mentorship")({
  head: () => seo("Mentorship", "Monitor mentor-mentee pairings, check-ins and relationship health."),
  component: () => (
    <TablePage
      title="Mentorship" subtitle="Monitor mentor-mentee pairings, check-ins and relationship health"
      kpis={[["Active Pairs", "86"], ["Pair Health", "88%"], ["Check-ins This Month", "142"]]}
      cols={[{ key: "m", label: "Mentor", strong: true }, { key: "e", label: "Mentee" }, { key: "s", label: "Status", badge: true }, { key: "f", label: "Frequency" }, { key: "l", label: "Last Check-in" }, { key: "h", label: "Pair Health", badge: true }]}
      rows={[
        { m: "A. Brown", e: "Student 104", s: "Active", f: "Monthly", l: "Jul 22", h: "Healthy" },
        { m: "M. Smith", e: "Student 118", s: "Active", f: "Monthly", l: "Jul 20", h: "Healthy" },
        { m: "J. Carter", e: "Student 121", s: "Active", f: "Biweekly", l: "Jul 18", h: "Watch" },
        { m: "S. Williams", e: "Student 133", s: "Active", f: "Monthly", l: "Jul 15", h: "Healthy" },
        { m: "D. Grant", e: "Student 141", s: "Paused", f: "Monthly", l: "Jun 10", h: "At Risk" },
      ]}
      flow="Create pairing → log check-ins/feedback → system calculates pair health → dashboard highlights pairs needing intervention."
    />
  ),
});
