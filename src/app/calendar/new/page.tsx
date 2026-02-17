"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { createEvent } from "./actions";

const eventColors = [
  { color: "#C9A962", label: "Gold" },
  { color: "#4ADE80", label: "Green" },
  { color: "#F87171", label: "Red" },
  { color: "#60A5FA", label: "Blue" },
  { color: "#A78BFA", label: "Purple" },
];

function formatDate(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const y = date.getFullYear();
  return `${m}/${d}/${y}`;
}

function parseDate(value: string): Date | undefined {
  const match = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return undefined;
  const date = new Date(
    Number(match[3]),
    Number(match[1]) - 1,
    Number(match[2])
  );
  if (isNaN(date.getTime())) return undefined;
  return date;
}

export default function NewEventPage() {
  const [selectedColor, setSelectedColor] = useState("#C9A962");
  const [date, setDate] = useState<Date | undefined>();
  const [dateInput, setDateInput] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [eventType, setEventType] = useState("");
  const [clientName, setClientName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    formData.set("date", dateInput);
    formData.set("eventType", eventType);
    formData.set("color", selectedColor);
    if (clientName) formData.set("clientName", clientName);
    setSubmitting(true);
    await createEvent(formData);
  }

  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Back Link */}
        <Link
          href="/calendar"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-[13px]">Back to Calendar</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl text-foreground">Add Event</h1>
          <p className="text-sm text-muted-foreground">
            Schedule a new meeting, deadline, or appointment
          </p>
        </div>

        {/* Form */}
        <form action={handleSubmit}>
          <div className="flex flex-col gap-6 border border-border p-7">
            {/* Event Details */}
            <h3 className="font-serif text-lg text-foreground">
              Event Details
            </h3>

            <div className="flex flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Event Title
              </Label>
              <Input
                name="title"
                placeholder="Enter event name"
                className="bg-transparent border-border"
                required
              />
            </div>

            <div className="flex gap-5">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                  Event Type
                </Label>
                <Select value={eventType} onValueChange={setEventType} required>
                  <SelectTrigger className="bg-transparent border-border">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting">Client Meeting</SelectItem>
                    <SelectItem value="interview">
                      Consulate Interview
                    </SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="filing">Filing Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                  Related Client
                </Label>
                <Select value={clientName} onValueChange={setClientName}>
                  <SelectTrigger className="bg-transparent border-border">
                    <SelectValue placeholder="Select client (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Elena Morozova">
                      Elena Morozova
                    </SelectItem>
                    <SelectItem value="Kenji Tanaka">Kenji Tanaka</SelectItem>
                    <SelectItem value="Sofia Alvarez">Sofia Alvarez</SelectItem>
                    <SelectItem value="Li Chen Wei">Li Chen Wei</SelectItem>
                    <SelectItem value="Amir Patel">Amir Patel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date & Time */}
            <h3 className="font-serif text-lg text-foreground">Date & Time</h3>

            <div className="flex gap-5">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">Date</Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Input
                        placeholder="MM/DD/YYYY"
                        value={dateInput}
                        onChange={(e) => {
                          setDateInput(e.target.value);
                          const parsed = parseDate(e.target.value);
                          if (parsed) setDate(parsed);
                        }}
                        className="bg-transparent border-border pr-10"
                        required
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(day) => {
                        setDate(day);
                        if (day) setDateInput(formatDate(day));
                        setCalendarOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                  Start Time
                </Label>
                <Input
                  name="startTime"
                  placeholder="HH:MM AM/PM"
                  className="bg-transparent border-border"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                  End Time
                </Label>
                <Input
                  name="endTime"
                  placeholder="HH:MM AM/PM"
                  className="bg-transparent border-border"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                  Location
                </Label>
                <Input
                  name="location"
                  placeholder="Office, virtual, or address"
                  className="bg-transparent border-border"
                />
              </div>
            </div>

            {/* Event Color */}
            <h3 className="font-serif text-lg text-foreground">Event Color</h3>

            <div className="flex items-center gap-3">
              {eventColors.map((c) => (
                <button
                  key={c.color}
                  type="button"
                  onClick={() => setSelectedColor(c.color)}
                  className="h-7 w-7 rounded-full transition-all"
                  style={{
                    backgroundColor: c.color,
                    boxShadow:
                      selectedColor === c.color
                        ? `0 0 0 2px #0F0F0F, 0 0 0 4px ${c.color}`
                        : "none",
                  }}
                  aria-label={c.label}
                />
              ))}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Description
              </Label>
              <Textarea
                name="description"
                placeholder="Add details about the event..."
                className="min-h-[100px] bg-transparent border-border"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <Link href="/calendar">
                <Button
                  type="button"
                  variant="outline"
                  className="border-border text-foreground"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitting ? "Creating..." : "Create Event"}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
