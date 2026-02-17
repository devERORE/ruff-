import { TrendingUp, Clock, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  label: string;
  value: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
}

function MetricCard({ label, value, badge, badgeColor, icon }: MetricCardProps) {
  return (
    <Card className="flex-1 rounded-none border-border bg-card py-0">
      <CardContent className="flex flex-col gap-1 p-6">
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
        <div className="flex items-end gap-3">
          <span className="font-serif text-[32px] text-foreground">
            {value}
          </span>
          <div className="mb-1 flex items-center gap-1" style={{ color: badgeColor }}>
            {icon}
            <span className="text-xs font-medium">{badge}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MetricsRow() {
  return (
    <div className="flex gap-5">
      <MetricCard
        label="Active Clients"
        value="1,247"
        badge="+12.5%"
        badgeColor="#4ADE80"
        icon={<TrendingUp className="h-3.5 w-3.5" />}
      />
      <MetricCard
        label="Pending Visas"
        value="342"
        badge="28 urgent"
        badgeColor="#C9A962"
        icon={<Clock className="h-3.5 w-3.5" />}
      />
      <MetricCard
        label="Approved This Month"
        value="89"
        badge="94% rate"
        badgeColor="#4ADE80"
        icon={<Check className="h-3.5 w-3.5" />}
      />
      <MetricCard
        label="Revenue (YTD)"
        value="$2.4M"
        badge="+18.3%"
        badgeColor="#4ADE80"
        icon={<TrendingUp className="h-3.5 w-3.5" />}
      />
    </div>
  );
}
