import { Search } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
      <Input 
        type="search" 
        placeholder="Search..." 
        className="pl-10 bg-white border border-gray-200 rounded-full"
      />
    </div>
  );
}
