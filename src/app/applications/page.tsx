import { AppSidebar } from "@/components/app-sidebar";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

interface ApplicationMetric {
  label: string;
  value: string;
  valueColor: string;
}

const metrics: ApplicationMetric[] = [
  { label: "Total Applications", value: "486", valueColor: "#FAF8F5" },
  { label: "In Progress", value: "142", valueColor: "#C9A962" },
  { label: "Approved", value: "298", valueColor: "#4ADE80" },
  { label: "Rejected", value: "46", valueColor: "#F87171" },
];

interface Application {
  name: string;
  visaType: string;
  stage: string;
  stageColor: string;
  progress: number;
  status: string;
  statusVariant: "success" | "warning" | "violet" | "secondary";
}

const applications: Application[] = [
  {
    name: "Elena Morozova",
    visaType: "EB-5 Investor Visa",
    stage: "Final Review",
    stageColor: "#C9A962",
    progress: 90,
    status: "Approved",
    statusVariant: "success",
  },
  {
    name: "Kenji Tanaka",
    visaType: "H-1B Specialty Occupation",
    stage: "Document Collection",
    stageColor: "#C9A962",
    progress: 45,
    status: "In Review",
    statusVariant: "warning",
  },
  {
    name: "Sofia Alvarez",
    visaType: "L-1 Intracompany Transfer",
    stage: "Interview Prep",
    stageColor: "#C9A962",
    progress: 65,
    status: "Processing",
    statusVariant: "violet",
  },
  {
    name: "Amir Patel",
    visaType: "EB-2 National Interest Waiver",
    stage: "Initial Filing",
    stageColor: "#C9A962",
    progress: 20,
    status: "Submitted",
    statusVariant: "secondary",
  },
  {
    name: "Li Chen Wei",
    visaType: "O-1 Extraordinary Ability",
    stage: "Completed",
    stageColor: "#4ADE80",
    progress: 100,
    status: "Approved",
    statusVariant: "success",
  },
];

const statusStyles: Record<string, string> = {
  success: "bg-[#222924] text-[#B6FFCE] border-transparent hover:bg-[#222924]",
  warning: "bg-[#291C0F] text-[#FF8400] border-transparent hover:bg-[#291C0F]",
  violet: "bg-[#222229] text-[#B2B2FF] border-transparent hover:bg-[#222229]",
  secondary: "bg-[#1A1A1A] text-[#888888] border-transparent hover:bg-[#1A1A1A]",
};

export default function ApplicationsPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-4xl text-foreground">
              Applications
            </h1>
            <p className="text-sm text-muted-foreground">
              Track and manage all visa applications
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 bg-transparent border-border"
              />
            </div>
            <Link href="/applications/new">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Application
              </Button>
            </Link>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-1 flex-col gap-2 border border-border p-6"
            >
              <span className="text-xs font-medium text-muted-foreground">
                {metric.label}
              </span>
              <span
                className="font-serif text-[28px]"
                style={{ color: metric.valueColor }}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Application Cards */}
        <div className="flex flex-col gap-4">
          {applications.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-6 border border-border p-6"
            >
              {/* Left - Name & Type */}
              <div className="flex w-[200px] shrink-0 flex-col gap-1">
                <span className="text-sm font-medium text-foreground">
                  {app.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {app.visaType}
                </span>
              </div>

              {/* Middle - Progress */}
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium"
                    style={{ color: app.stageColor }}
                  >
                    {app.stage}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {app.progress}%
                  </span>
                </div>
                <Progress
                  value={app.progress}
                  className="h-2 bg-[#1A1A1A]"
                />
              </div>

              {/* Right - Status & View */}
              <div className="flex items-center gap-3">
                <Badge className={statusStyles[app.statusVariant]}>
                  {app.status}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground"
                >
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
