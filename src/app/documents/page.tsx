import { AppSidebar } from "@/components/app-sidebar";
import { Plus, Search, Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Document {
  name: string;
  client: string;
  type: string;
  uploaded: string;
  size: string;
}

const documents: Document[] = [
  {
    name: "Passport_Morozova.pdf",
    client: "Elena Morozova",
    type: "Passport",
    uploaded: "Mar 12",
    size: "2.4 MB",
  },
  {
    name: "I-129_Petition_Tanaka.pdf",
    client: "Kenji Tanaka",
    type: "Form",
    uploaded: "Mar 18",
    size: "1.8 MB",
  },
  {
    name: "Employment_Contract_Alvarez.pdf",
    client: "Sofia Alvarez",
    type: "Contract",
    uploaded: "Mar 20",
    size: "3.1 MB",
  },
  {
    name: "Tax_Returns_ChenWei.pdf",
    client: "Li Chen Wei",
    type: "Financial",
    uploaded: "Mar 25",
    size: "5.2 MB",
  },
  {
    name: "Degree_Certificate_Patel.pdf",
    client: "Amir Patel",
    type: "Education",
    uploaded: "Apr 02",
    size: "1.1 MB",
  },
];

const tabs = ["All Files", "Passports", "Forms", "Contracts"];

export default function DocumentsPage() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-14 py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-4xl text-foreground">Documents</h1>
            <p className="text-sm text-muted-foreground">
              Securely manage client documents and files
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
            <Link href="/documents/upload">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Upload File
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
            <span className="flex-1 text-[11px] font-semibold tracking-wide text-primary">
              DOCUMENT
            </span>
            <span className="w-[180px] text-[11px] font-semibold tracking-wide text-primary">
              CLIENT
            </span>
            <span className="w-[120px] text-[11px] font-semibold tracking-wide text-primary">
              TYPE
            </span>
            <span className="w-[100px] text-[11px] font-semibold tracking-wide text-primary">
              UPLOADED
            </span>
            <span className="w-[80px] text-[11px] font-semibold tracking-wide text-primary">
              SIZE
            </span>
            <span className="w-[80px] text-[11px] font-semibold tracking-wide text-primary">
              ACTIONS
            </span>
          </div>

          {/* Table Rows */}
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center border-b border-border px-6 py-4 last:border-b-0"
            >
              <div className="flex flex-1 items-center gap-3">
                <FileText className="h-[18px] w-[18px] text-primary" />
                <span className="text-[13px] font-medium text-foreground">
                  {doc.name}
                </span>
              </div>
              <span className="w-[180px] text-[13px] text-muted-foreground">
                {doc.client}
              </span>
              <span className="w-[120px] text-[13px] text-foreground">
                {doc.type}
              </span>
              <span className="w-[100px] text-[13px] text-muted-foreground">
                {doc.uploaded}
              </span>
              <span className="w-[80px] text-[13px] text-muted-foreground">
                {doc.size}
              </span>
              <div className="flex w-[80px] items-center gap-2">
                <button className="text-muted-foreground hover:text-foreground">
                  <Download className="h-4 w-4" />
                </button>
                <button className="text-muted-foreground hover:text-foreground">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
