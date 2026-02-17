"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ArrowLeft, CloudUpload } from "lucide-react";
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

export default function UploadFilePage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Back Link */}
        <Link
          href="/documents"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-[13px]">Back to Documents</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl text-foreground">Upload File</h1>
          <p className="text-sm text-muted-foreground">
            Upload and categorize client documents
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 border border-border p-7">
          {/* Drop Zone */}
          <div className="flex h-[200px] flex-col items-center justify-center gap-4 border border-[#C9A96240]">
            <CloudUpload className="h-10 w-10 text-primary" />
            <span className="text-base font-medium text-foreground">
              Drop files here to upload
            </span>
            <span className="text-[13px] text-muted-foreground">
              or click to browse from your computer
            </span>
            <span className="text-[11px] text-[#555555]">
              Supports PDF, JPG, PNG, DOCX — Max 25MB per file
            </span>
            <Button
              variant="outline"
              className="border-border text-foreground"
            >
              Browse Files
            </Button>
          </div>

          {/* File Details */}
          <h3 className="font-serif text-lg text-foreground">File Details</h3>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Assign to Client
              </Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Select client" />
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
                Document Type
              </Label>
              <Select>
                <SelectTrigger className="bg-transparent border-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="form">Form</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Document Name
              </Label>
              <Input
                placeholder="Enter document name"
                className="bg-transparent border-border"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="text-xs text-muted-foreground">
                Expiry Date (if applicable)
              </Label>
              <Input
                placeholder="MM/DD/YYYY"
                className="bg-transparent border-border"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label className="text-xs text-muted-foreground">Description</Label>
            <Textarea
              placeholder="Add a description for this document..."
              className="min-h-[100px] bg-transparent border-border"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Link href="/documents">
              <Button
                variant="outline"
                className="border-border text-foreground"
              >
                Cancel
              </Button>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Upload File
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
