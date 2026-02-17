import { AppSidebar } from "@/components/app-sidebar";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Client {
  initials: string;
  name: string;
  email: string;
  nationality: string;
  visaType: string;
  status: string;
  statusVariant: "success" | "warning" | "violet" | "secondary";
  joined: string;
}

const clients: Client[] = [
  {
    initials: "EM",
    name: "Elena Morozova",
    email: "elena.m@gmail.com",
    nationality: "Russian",
    visaType: "Investor EB-5",
    status: "Approved",
    statusVariant: "success",
    joined: "Jan 12",
  },
  {
    initials: "KT",
    name: "Kenji Tanaka",
    email: "kenji.t@outlook.jp",
    nationality: "Japanese",
    visaType: "H-1B Specialty",
    status: "In Review",
    statusVariant: "warning",
    joined: "Feb 03",
  },
  {
    initials: "SA",
    name: "Sofia Alvarez",
    email: "sofia.a@corp.br",
    nationality: "Brazilian",
    visaType: "L-1 Transfer",
    status: "Processing",
    statusVariant: "violet",
    joined: "Feb 18",
  },
  {
    initials: "LC",
    name: "Li Chen Wei",
    email: "li.chen@tech.cn",
    nationality: "Chinese",
    visaType: "O-1 Extraord.",
    status: "Approved",
    statusVariant: "success",
    joined: "Mar 05",
  },
  {
    initials: "AP",
    name: "Amir Patel",
    email: "amir.p@corp.in",
    nationality: "Indian",
    visaType: "EB-2 NIW",
    status: "Submitted",
    statusVariant: "secondary",
    joined: "Mar 22",
  },
  {
    initials: "MB",
    name: "Maria Bergstrom",
    email: "maria.b@mail.se",
    nationality: "Swedish",
    visaType: "E-2 Treaty",
    status: "Approved",
    statusVariant: "success",
    joined: "Apr 01",
  },
  {
    initials: "OD",
    name: "Omar Diallo",
    email: "omar.d@mail.sn",
    nationality: "Senegalese",
    visaType: "EB-1A",
    status: "In Review",
    statusVariant: "warning",
    joined: "Apr 08",
  },
];

const statusStyles: Record<string, string> = {
  success: "bg-[#222924] text-[#B6FFCE] border-transparent hover:bg-[#222924]",
  warning: "bg-[#291C0F] text-[#FF8400] border-transparent hover:bg-[#291C0F]",
  violet: "bg-[#222229] text-[#B2B2FF] border-transparent hover:bg-[#222229]",
  secondary: "bg-[#1A1A1A] text-[#888888] border-transparent hover:bg-[#1A1A1A]",
};

const tabs = ["All Clients", "Active", "Pending", "Archived"];

export default function ClientsPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-4xl text-foreground">Clients</h1>
            <p className="text-sm text-muted-foreground">
              Manage your complete client portfolio
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-[240px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 bg-transparent border-border"
              />
            </div>
            <Button variant="outline" className="border-border text-foreground">
              Filter
            </Button>
            <Link href="/clients/new">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Client
              </Button>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0 bg-[#1A1A1A] p-1 w-fit">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="flex flex-col border border-border">
          {/* Table Header */}
          <div className="flex items-center border-b border-border px-6 py-3.5">
            <span className="w-[200px] text-[11px] font-semibold tracking-wide text-primary">
              CLIENT
            </span>
            <span className="flex-1 text-[11px] font-semibold tracking-wide text-primary">
              EMAIL
            </span>
            <span className="w-[120px] text-[11px] font-semibold tracking-wide text-primary">
              NATIONALITY
            </span>
            <span className="w-[130px] text-[11px] font-semibold tracking-wide text-primary">
              VISA TYPE
            </span>
            <span className="w-[110px] text-[11px] font-semibold tracking-wide text-primary">
              STATUS
            </span>
            <span className="w-[80px] text-[11px] font-semibold tracking-wide text-primary">
              JOINED
            </span>
          </div>

          {/* Table Rows */}
          {clients.map((client) => (
            <Link
              key={client.initials}
              href="/clients/1"
              className="flex items-center border-b border-border px-6 py-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex w-[200px] items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-muted text-[11px] text-muted-foreground">
                    {client.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[13px] font-medium text-foreground">
                  {client.name}
                </span>
              </div>
              <span className="flex-1 text-[13px] text-muted-foreground">
                {client.email}
              </span>
              <span className="w-[120px] text-[13px] text-muted-foreground">
                {client.nationality}
              </span>
              <span className="w-[130px] text-[13px] text-foreground">
                {client.visaType}
              </span>
              <div className="w-[110px]">
                <Badge className={statusStyles[client.statusVariant]}>
                  {client.status}
                </Badge>
              </div>
              <span className="w-[80px] text-[13px] text-muted-foreground">
                {client.joined}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-muted-foreground">
            Showing 7 of 1,247 clients
          </span>
          <div className="flex items-center gap-1">
            <button className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:bg-muted/50">
              &lsaquo;
            </button>
            <button className="flex h-8 w-8 items-center justify-center border border-border bg-foreground text-background">
              1
            </button>
            <button className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:bg-muted/50">
              2
            </button>
            <button className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:bg-muted/50">
              &rsaquo;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
