import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-serif text-4xl text-foreground">
          Client Overview
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage visa applications and client portfolios
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
        <Link href="/clients/new">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Client
          </Button>
        </Link>
      </div>
    </div>
  );
}
