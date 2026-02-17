import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StarIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12.25 12.25" fill="none">
      <path
        d="M6.125 0l-2.81 6.376L0 9.187l3.315 1.435L6.125 12.25l2.812-1.628 3.313-1.435-3.313-1.435L6.125 0z"
        stroke="currentColor"
        strokeWidth={1}
      />
    </svg>
  );
}

interface Client {
  initials: string;
  name: string;
  nationality: string;
  visaType: string;
  status: string;
  statusVariant: "success" | "warning" | "violet" | "secondary";
  statusIcon?: boolean;
  dueDate: string;
}

const clients: Client[] = [
  {
    initials: "EM",
    name: "Elena Morozova",
    nationality: "Russian",
    visaType: "Investor EB-5",
    status: "Approved",
    statusVariant: "success",
    dueDate: "Mar 15",
  },
  {
    initials: "KT",
    name: "Kenji Tanaka",
    nationality: "Japanese",
    visaType: "H-1B Specialty",
    status: "In Review",
    statusVariant: "warning",
    dueDate: "Mar 22",
  },
  {
    initials: "SA",
    name: "Sofia Alvarez",
    nationality: "Brazilian",
    visaType: "L-1 Transfer",
    status: "Processing",
    statusVariant: "violet",
    statusIcon: true,
    dueDate: "Apr 02",
  },
  {
    initials: "LC",
    name: "Li Chen Wei",
    nationality: "Chinese",
    visaType: "O-1 Extraordinary",
    status: "Approved",
    statusVariant: "success",
    dueDate: "Feb 28",
  },
  {
    initials: "AP",
    name: "Amir Patel",
    nationality: "Indian",
    visaType: "EB-2 NIW",
    status: "Submitted",
    statusVariant: "secondary",
    dueDate: "Apr 10",
  },
];

const statusStyles: Record<string, string> = {
  success: "bg-[#222924] text-[#B6FFCE] border-transparent hover:bg-[#222924]",
  warning: "bg-[#291C0F] text-[#FF8400] border-transparent hover:bg-[#291C0F]",
  violet: "bg-[#222229] text-[#B2B2FF] border-transparent hover:bg-[#222229]",
  secondary: "bg-[#1A1A1A] text-[#888888] border-transparent hover:bg-[#1A1A1A]",
};

export function RecentClientsTable() {
  return (
    <div className="flex flex-1 flex-col border border-border">
      {/* Table Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="font-serif text-[22px] text-foreground">
          Recent Clients
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-border text-foreground">
            Filter
          </Button>
          <Button variant="outline" size="sm" className="border-border text-foreground">
            Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="w-[180px] px-6 text-[11px] font-semibold tracking-wide text-primary">
              CLIENT
            </TableHead>
            <TableHead className="w-[120px] text-[11px] font-semibold tracking-wide text-primary">
              NATIONALITY
            </TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wide text-primary">
              VISA TYPE
            </TableHead>
            <TableHead className="w-[120px] text-[11px] font-semibold tracking-wide text-primary">
              STATUS
            </TableHead>
            <TableHead className="w-[100px] text-[11px] font-semibold tracking-wide text-primary">
              DUE DATE
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.initials}
              className="border-border hover:bg-muted/50"
            >
              <TableCell className="px-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-muted text-[11px] text-muted-foreground">
                      {client.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[13px] font-medium text-foreground">
                    {client.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-[13px] text-muted-foreground">
                {client.nationality}
              </TableCell>
              <TableCell className="text-[13px] text-foreground">
                {client.visaType}
              </TableCell>
              <TableCell>
                <Badge
                  className={statusStyles[client.statusVariant]}
                >
                  {client.statusIcon && <StarIcon />}
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell className="text-[13px] text-muted-foreground">
                {client.dueDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
