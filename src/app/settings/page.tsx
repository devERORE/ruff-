"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const notifications = [
  {
    title: "Email Notifications",
    description: "Receive email updates on visa status changes",
    defaultChecked: true,
  },
  {
    title: "Deadline Reminders",
    description: "Get notified 7 days before application deadlines",
    defaultChecked: true,
  },
  {
    title: "Client Activity Alerts",
    description: "Notifications when clients upload documents",
    defaultChecked: false,
  },
];

export default function SettingsPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-10 overflow-y-auto px-14 py-12">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Manage your account and application preferences
          </p>
        </div>

        {/* Profile Information */}
        <div className="flex flex-col gap-6 border border-border p-7">
          <h2 className="font-serif text-[22px] text-foreground">
            Profile Information
          </h2>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">Full Name</Label>
              <Input
                defaultValue="Eren Tarakci"
                className="bg-transparent border-border"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Email Address
              </Label>
              <Input
                defaultValue="erentrkcc@gmail.com"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Phone Number
              </Label>
              <Input
                defaultValue="+1 (555) 042-8891"
                className="bg-transparent border-border"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">Role</Label>
              <Select defaultValue="senior">
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="senior">Senior Consultant</SelectItem>
                  <SelectItem value="junior">Junior Consultant</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
            Save Changes
          </Button>
        </div>

        {/* Notifications */}
        <div className="flex flex-col gap-6 border border-border p-7">
          <h2 className="font-serif text-[22px] text-foreground">
            Notifications
          </h2>

          {notifications.map((notif) => (
            <div
              key={notif.title}
              className="flex items-center justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground">
                  {notif.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {notif.description}
                </span>
              </div>
              <Switch defaultChecked={notif.defaultChecked} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
