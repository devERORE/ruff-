import { Check, UserPlus, FileText, CircleAlert } from "lucide-react";

interface ActivityItem {
  icon: React.ReactNode;
  iconColor: string;
  iconBorderColor: string;
  title: string;
  description: string;
  time: string;
  timeColor: string;
}

const activities: ActivityItem[] = [
  {
    icon: <Check className="h-3.5 w-3.5" />,
    iconColor: "#4ADE80",
    iconBorderColor: "#4ADE8040",
    title: "Visa Approved",
    description: "Elena Morozova - EB-5 Investor",
    time: "2h ago",
    timeColor: "#4ADE80",
  },
  {
    icon: <UserPlus className="h-3.5 w-3.5" />,
    iconColor: "#60A5FA",
    iconBorderColor: "#60A5FA40",
    title: "New Client Added",
    description: "Amir Patel - EB-2 NIW",
    time: "5h ago",
    timeColor: "#60A5FA",
  },
  {
    icon: <FileText className="h-3.5 w-3.5" />,
    iconColor: "#C9A962",
    iconBorderColor: "#C9A96240",
    title: "Document Uploaded",
    description: "Kenji Tanaka - Passport scan",
    time: "1d ago",
    timeColor: "#C9A962",
  },
  {
    icon: <Check className="h-3.5 w-3.5" />,
    iconColor: "#4ADE80",
    iconBorderColor: "#4ADE8040",
    title: "Interview Scheduled",
    description: "Sofia Alvarez - Consulate NYC",
    time: "2d ago",
    timeColor: "#4ADE80",
  },
  {
    icon: <CircleAlert className="h-3.5 w-3.5" />,
    iconColor: "#F87171",
    iconBorderColor: "#F8717140",
    title: "Deadline Alert",
    description: "Li Chen Wei - Renewal due",
    time: "3d ago",
    timeColor: "#F87171",
  },
];

export function ActivityFeed() {
  return (
    <div className="flex w-[340px] shrink-0 flex-col border border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="font-serif text-[22px] text-foreground">
          Activity Feed
        </h2>
        <span className="cursor-pointer text-xs font-medium text-primary hover:underline">
          View All
        </span>
      </div>

      {/* Activity Items */}
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center gap-3.5 border-t border-border px-6 py-4"
        >
          {/* Icon */}
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
            style={{
              color: activity.iconColor,
              borderWidth: 1,
              borderColor: activity.iconBorderColor,
            }}
          >
            {activity.icon}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-[13px] font-medium text-foreground">
              {activity.title}
            </span>
            <span className="text-xs text-[#666666]">
              {activity.description}
            </span>
          </div>

          {/* Time */}
          <span
            className="shrink-0 text-[10px] font-medium"
            style={{ color: activity.timeColor }}
          >
            {activity.time}
          </span>
        </div>
      ))}
    </div>
  );
}
