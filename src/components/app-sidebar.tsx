"use client";

import {
  LayoutDashboard,
  Users,
  FileText,
  Folder,
  Calendar,
  Settings,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const managementItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Clients", icon: Users, href: "/clients" },
  { label: "Applications", icon: FileText, href: "/applications" },
  { label: "Documents", icon: Folder, href: "/documents" },
];

const settingsItems = [
  { label: "Calendar", icon: Calendar, href: "/calendar" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-[88px] items-center gap-2 border-b border-sidebar-border px-8">
        <svg
          className="h-8 w-8 shrink-0 fill-primary"
          viewBox="0 0 32 32"
        >
          <path d="M16 0c8.83656 0 16 7.16344 16 16 0 8.83656-7.16344 16-16 16-8.83656 0-16-7.16344-16-16 0-8.83656 7.16344-16 16-16z m1.86035 8.71777c-0.66585-1.68829-3.05485-1.68829-3.7207 0l-1.21485 3.08008c-0.20329 0.51544-0.61151 0.92366-1.12695 1.12695l-3.08008 1.21485c-1.68829 0.66585-1.68829 3.05485 0 3.7207l3.08008 1.21485c0.51544 0.20329 0.92366 0.61151 1.12695 1.12695l1.21485 3.08008c0.66585 1.68829 3.05485 1.68829 3.7207 0l1.21485-3.08008c0.20329-0.51544 0.61151-0.92366 1.12695-1.12695l3.08008-1.21485c1.68829-0.66585 1.68829-3.05485 0-3.7207l-3.08008-1.21485c-0.51544-0.20329-0.92366-0.61151-1.12695-1.12695l-1.21485-3.08008z" />
        </svg>
        <span className="font-serif text-lg font-bold text-primary">
          RUFF
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-0">
        {/* Management Section */}
        <div className="px-4 pt-4 pb-2">
          <span className="font-serif text-sm text-sidebar-foreground">
            MANAGEMENT
          </span>
        </div>
        {managementItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-6 w-6" strokeWidth={1} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Settings Section */}
        <div className="px-4 pt-4 pb-2">
          <span className="font-serif text-sm text-sidebar-foreground">
            SETTINGS
          </span>
        </div>
        {settingsItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-6 w-6" strokeWidth={1} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile */}
      <div className="flex items-center gap-2 border-t border-sidebar-border px-8 py-6">
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-base text-sidebar-accent-foreground">
            Eren Tarakci
          </span>
          <span className="text-base text-sidebar-foreground">
            erentrkcc@gmail.com
          </span>
        </div>
        <ChevronDown className="h-6 w-6 text-sidebar-foreground" />
      </div>
    </aside>
  );
}
