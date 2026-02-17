import { AppSidebar } from "@/components/app-sidebar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface CalendarEvent {
  label: string;
  textColor: string;
  bgColor: string;
}

interface CalendarDay {
  day: number;
  isWeekend: boolean;
  isToday?: boolean;
  event?: CalendarEvent;
}

const weeks: CalendarDay[][] = [
  [
    { day: 1, isWeekend: true },
    { day: 2, isWeekend: false },
    {
      day: 3,
      isWeekend: false,
      event: {
        label: "Tanaka mtg",
        textColor: "#0A0A0A",
        bgColor: "#C9A962",
      },
    },
    { day: 4, isWeekend: false },
    { day: 5, isWeekend: false },
    { day: 6, isWeekend: false },
    { day: 7, isWeekend: true },
  ],
  [
    { day: 8, isWeekend: true },
    { day: 9, isWeekend: false },
    { day: 10, isWeekend: false },
    { day: 11, isWeekend: false },
    {
      day: 12,
      isWeekend: false,
      event: {
        label: "Alvarez int.",
        textColor: "#4ADE80",
        bgColor: "#4ADE8030",
      },
    },
    { day: 13, isWeekend: false },
    { day: 14, isWeekend: true },
  ],
  [
    { day: 15, isWeekend: true },
    { day: 16, isWeekend: false },
    {
      day: 17,
      isWeekend: false,
      isToday: true,
      event: {
        label: "Deadline: Wei",
        textColor: "#F87171",
        bgColor: "#F8717130",
      },
    },
    { day: 18, isWeekend: false },
    { day: 19, isWeekend: false },
    {
      day: 20,
      isWeekend: false,
      event: {
        label: "Patel consult",
        textColor: "#60A5FA",
        bgColor: "#60A5FA30",
      },
    },
    { day: 21, isWeekend: true },
  ],
];

interface UpcomingEvent {
  title: string;
  description: string;
  date: string;
  dotColor: string;
}

const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Client Meeting",
    description: "Kenji Tanaka - H-1B Review",
    date: "Mar 3",
    dotColor: "#C9A962",
  },
  {
    title: "Consulate Interview",
    description: "Sofia Alvarez - L-1 Visa",
    date: "Mar 12",
    dotColor: "#4ADE80",
  },
  {
    title: "Renewal Deadline",
    description: "Li Chen Wei - O-1 Visa",
    date: "Mar 17",
    dotColor: "#F87171",
  },
  {
    title: "Strategy Consultation",
    description: "Amir Patel - EB-2 NIW",
    date: "Mar 20",
    dotColor: "#60A5FA",
  },
];

export default function CalendarPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-4xl text-foreground">Calendar</h1>
            <p className="text-sm text-muted-foreground">
              Schedule meetings, deadlines, and appointments
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <button className="text-muted-foreground hover:text-foreground">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-serif text-lg text-foreground">
                March 2026
              </span>
              <button className="text-muted-foreground hover:text-foreground">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <Link href="/calendar/new">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </Link>
          </div>
        </div>

        {/* Calendar Body */}
        <div className="flex gap-6">
          {/* Calendar Grid */}
          <div className="flex flex-1 flex-col border border-border">
            {/* Day Headers */}
            <div className="flex border-b border-border">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="flex-1 py-3 text-center text-[11px] font-semibold tracking-wide text-primary"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex border-b border-border last:border-b-0"
              >
                {week.map((cell) => (
                  <div
                    key={cell.day}
                    className="flex h-20 flex-1 flex-col gap-1 border-r border-border p-2 last:border-r-0"
                    style={
                      cell.isToday
                        ? { backgroundColor: "#C9A96210" }
                        : undefined
                    }
                  >
                    <span
                      className={`text-xs ${
                        cell.isToday
                          ? "font-semibold text-primary"
                          : cell.isWeekend
                            ? "text-[#666666]"
                            : "text-foreground"
                      }`}
                    >
                      {cell.day}
                    </span>
                    {cell.event && (
                      <div
                        className="px-1.5 py-0.5"
                        style={{ backgroundColor: cell.event.bgColor }}
                      >
                        <span
                          className="text-[9px] font-medium"
                          style={{ color: cell.event.textColor }}
                        >
                          {cell.event.label}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Upcoming Events Panel */}
          <div className="flex w-[320px] shrink-0 flex-col border border-border">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <h2 className="font-serif text-[22px] text-foreground">
                Upcoming
              </h2>
              <span className="cursor-pointer text-xs font-medium text-primary hover:underline">
                View All
              </span>
            </div>

            {/* Events */}
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-3.5 border-t border-border px-6 py-4"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: event.dotColor }}
                />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-[13px] font-medium text-foreground">
                    {event.title}
                  </span>
                  <span className="text-xs text-[#666666]">
                    {event.description}
                  </span>
                </div>
                <span
                  className="shrink-0 text-[10px] font-medium"
                  style={{ color: event.dotColor }}
                >
                  {event.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
