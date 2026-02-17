"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ArrowLeft, Upload } from "lucide-react";
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

export default function NewApplicationPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Back Link */}
        <Link
          href="/applications"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-[13px]">Back to Applications</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl text-foreground">
            New Application
          </h1>
          <p className="text-sm text-muted-foreground">
            Submit a new visa application for a client
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 border border-border p-7">
          {/* Client Information */}
          <h3 className="font-serif text-lg text-foreground">
            Client Information
          </h3>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Select Client
              </Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Choose an existing client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elena">Elena Morozova</SelectItem>
                  <SelectItem value="kenji">Kenji Tanaka</SelectItem>
                  <SelectItem value="sofia">Sofia Alvarez</SelectItem>
                  <SelectItem value="li">Li Chen Wei</SelectItem>
                  <SelectItem value="amir">Amir Patel</SelectItem>
                  <SelectItem value="maria">Maria Bergstrom</SelectItem>
                  <SelectItem value="omar">Omar Diallo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Client Email
              </Label>
              <Input
                placeholder="Auto-filled from selection"
                disabled
                className="bg-transparent border-border"
              />
            </div>
          </div>

          {/* Visa Details */}
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
                Destination Country
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
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-5">
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
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Expected Decision Date
              </Label>
              <Input
                placeholder="MM/DD/YYYY"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          {/* Supporting Documents */}
          <h3 className="font-serif text-lg text-foreground">
            Supporting Documents
          </h3>

          <div className="flex h-[120px] flex-col items-center justify-center gap-3 border border-border">
            <Upload className="h-6 w-6 text-muted-foreground" />
            <span className="text-[13px] text-muted-foreground">
              Drag & drop files here or click to browse
            </span>
            <span className="text-[11px] text-[#555555]">
              PDF, JPG, PNG up to 10MB
            </span>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <Label className="text-xs text-muted-foreground">
              Additional Notes
            </Label>
            <Textarea
              placeholder="Provide any additional details about this application..."
              className="min-h-[100px] bg-transparent border-border"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Link href="/applications">
              <Button
                variant="outline"
                className="border-border text-foreground"
              >
                Cancel
              </Button>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Application
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
