import { AppSidebar } from "@/components/app-sidebar";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const visaInfo = [
  { label: "Visa Type", value: "EB-5 Investor" },
  { label: "Case Number", value: "EAC-26-041-52890" },
  { label: "Filing Date", value: "Jan 12, 2026" },
  { label: "Priority Date", value: "Mar 15, 2026" },
];

const personalDetails = [
  { label: "Date of Birth", value: "Aug 14, 1988" },
  { label: "Passport No.", value: "75 2849102" },
  { label: "Phone", value: "+7 (495) 891-2034" },
  { label: "Address", value: "Moscow, Russia" },
];

const documents = [
  {
    name: "Passport_Morozova.pdf",
    meta: "2.4 MB - Uploaded Mar 12, 2026",
  },
  {
    name: "Investment_Proof_I-526.pdf",
    meta: "8.1 MB - Uploaded Feb 28, 2026",
  },
  {
    name: "Business_Plan_EB5.pdf",
    meta: "4.7 MB - Uploaded Jan 20, 2026",
  },
];

export default function ClientDetailPage() {
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

        {/* Client Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-muted text-xl text-muted-foreground">
                EM
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h1 className="font-serif text-[28px] text-foreground">
                Elena Morozova
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-[13px] text-muted-foreground">
                  Russian Federation
                </span>
                <span className="h-1 w-1 rounded-full bg-[#666666]" />
                <span className="text-[13px] text-muted-foreground">
                  elena.m@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-[#222924] text-[#B6FFCE] border-transparent hover:bg-[#222924]">
              Approved
            </Badge>
            <Button
              variant="outline"
              className="border-border text-foreground"
            >
              Edit Client
            </Button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="flex gap-5">
          {/* Visa Information */}
          <div className="flex flex-1 flex-col gap-4 border border-border p-6">
            <h3 className="font-serif text-lg text-foreground">
              Visa Information
            </h3>
            {visaInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-[13px] text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-[13px] font-medium text-foreground">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Personal Details */}
          <div className="flex flex-1 flex-col gap-4 border border-border p-6">
            <h3 className="font-serif text-lg text-foreground">
              Personal Details
            </h3>
            {personalDetails.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-[13px] text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-[13px] font-medium text-foreground">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Documents */}
        <div className="flex flex-col border border-border">
          <div className="flex items-center justify-between px-6 py-5">
            <h2 className="font-serif text-[22px] text-foreground">
              Client Documents
            </h2>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Upload
            </Button>
          </div>

          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center gap-3 border-t border-border px-6 py-4"
            >
              <FileText className="h-[18px] w-[18px] shrink-0 text-primary" />
              <div className="flex flex-1 flex-col gap-0.5 px-3">
                <span className="text-[13px] font-medium text-foreground">
                  {doc.name}
                </span>
                <span className="text-[11px] text-[#666666]">{doc.meta}</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
