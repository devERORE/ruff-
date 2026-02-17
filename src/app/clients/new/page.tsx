"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function NewClientPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Back Link */}
        <Link
          href="/clients"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-[13px]">Back to Clients</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl text-foreground">New Client</h1>
          <p className="text-sm text-muted-foreground">
            Add a new client to your portfolio
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 border border-border p-7">
          {/* Personal Information Section */}
          <h3 className="font-serif text-lg text-foreground">
            Personal Information
          </h3>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                First Name
              </Label>
              <Input
                placeholder="Enter first name"
                className="bg-transparent border-border"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Last Name
              </Label>
              <Input
                placeholder="Enter last name"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Email Address
              </Label>
              <Input
                placeholder="Enter email address"
                className="bg-transparent border-border"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Phone Number
              </Label>
              <Input
                placeholder="Enter phone number"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Nationality
              </Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="cn">China</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                  <SelectItem value="ru">Russia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Passport Number
              </Label>
              <Input
                placeholder="Enter passport number"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          {/* Visa Details Section */}
          <h3 className="font-serif text-lg text-foreground">Visa Details</h3>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">Visa Type</Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Select visa category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eb5">EB-5 Investor</SelectItem>
                  <SelectItem value="h1b">H-1B Specialty</SelectItem>
                  <SelectItem value="l1">L-1 Transfer</SelectItem>
                  <SelectItem value="o1">O-1 Extraordinary</SelectItem>
                  <SelectItem value="eb2">EB-2 NIW</SelectItem>
                  <SelectItem value="e2">E-2 Treaty</SelectItem>
                  <SelectItem value="eb1a">EB-1A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Priority Level
              </Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-xs text-muted-foreground">Notes</Label>
            <Textarea
              placeholder="Add any additional notes about this client..."
              className="min-h-[100px] bg-transparent border-border"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Link href="/clients">
              <Button
                variant="outline"
                className="border-border text-foreground"
              >
                Cancel
              </Button>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create Client
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
