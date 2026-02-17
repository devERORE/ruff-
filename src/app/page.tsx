import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { MetricsRow } from "@/components/metrics-row";
import { RecentClientsTable } from "@/components/recent-clients-table";
import { ActivityFeed } from "@/components/activity-feed";

export default function DashboardPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-12 overflow-y-auto px-14 py-12">
        <DashboardHeader />
        <MetricsRow />
        <div className="flex gap-6">
          <RecentClientsTable />
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
}
