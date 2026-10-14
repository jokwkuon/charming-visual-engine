import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  LayoutDashboard, Building2, Users, HandCoins, CalendarCheck, Sparkles,
  GraduationCap, HeartHandshake, IdCard, FileText, BarChart3, Settings, Search, Bell, CalendarDays,
} from "lucide-react";

export const NAV = [
  { to: "/organizations", label: "Organizations", icon: Building2 },
  { to: "/contacts", label: "Contacts", icon: Users },
  { to: "/giving", label: "Sponsorship & Giving", icon: HandCoins },
  { to: "/activities", label: "Activities & Follow-Ups", icon: CalendarCheck },
  { to: "/interests", label: "Sponsor Interests", icon: Sparkles },
  { to: "/programs", label: "Programs & Recipients", icon: GraduationCap },
  { to: "/mentorship", label: "Mentorship", icon: HeartHandshake },
  { to: "/membership", label: "Membership", icon: IdCard },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/reports", label: "Reports", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

function NavItem({ to, label, icon: Icon, active }: { to: string; label: string; icon: typeof Building2; active: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/30"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto bg-sidebar p-4 lg:flex">
        <div className="mb-8 flex items-center gap-3 px-2 pt-2">
          <span className="text-3xl font-extrabold tracking-tight text-sidebar-foreground">CBC</span>
          <span className="text-[10px] font-bold uppercase leading-tight tracking-wider text-sidebar-foreground/90">
            Calgary<br />Black<br />Chambers
          </span>
        </div>
        <NavItem to="/" label="Dashboard" icon={LayoutDashboard} active={path === "/"} />
        <p className="mb-2 mt-6 px-3 text-[11px] font-semibold uppercase tracking-widest text-sidebar-muted">Database</p>
        <nav className="flex flex-col gap-1">
          {NAV.map((n) => (
            <NavItem key={n.to} {...n} active={path.startsWith(n.to)} />
          ))}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b bg-card/90 px-6 py-3 backdrop-blur">
          <div className="relative max-w-xl flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search organizations, contacts, tags..."
              className="w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div className="ml-auto flex items-center gap-4 text-muted-foreground">
            <Bell className="h-5 w-5" />
            <CalendarDays className="h-5 w-5" />
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">JS</div>
              <div className="hidden text-xs leading-tight sm:block">
                <div>Welcome,</div>
                <div className="font-semibold text-foreground">John Smith</div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
