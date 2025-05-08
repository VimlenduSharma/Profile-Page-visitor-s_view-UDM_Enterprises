import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { cn } from "@/lib/utils";
import { MapPin, Mail, Phone, User } from "lucide-react";
import { BrandCard } from "@/components/ui/BrandCard";   // ← NEW

interface ProfileInfo {
  gender: string;
  address: string;
  email: string;
  phone: string;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
}

interface Connection {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface ProfileTabsProps {
  info: ProfileInfo;
  brands: Brand[];
  connections: Connection[];
}

export function ProfileTabs({ info, brands, connections }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState("about");

  /* how many brands to show before the “+N more” tile */
  const DISPLAY_BRANDS = 4;

  return (
    <div className="mt-8 px-12 pb-16 animate-fade-in">
      <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
          <TabsTrigger value="about" className="text-base py-3">
            About
          </TabsTrigger>
          <TabsTrigger value="brands" className="text-base py-3">
            Associated Brands
          </TabsTrigger>
          <TabsTrigger value="connections" className="text-base py-3">
            Connections
          </TabsTrigger>
        </TabsList>

        {/* ──────────────── ABOUT ──────────────── */}
        <TabsContent
          value="about"
          className={cn(
            "bg-white rounded-xl shadow-sm p-8 border border-gray-100",
            activeTab === "about" ? "animate-fade-in" : ""
          )}
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">About</h3>

          <div className="space-y-4">
            {[
              {
                Icon: User,
                label: "Gender",
                value: info.gender,
              },
              {
                Icon: MapPin,
                label: "Address",
                value: info.address,
              },
              {
                Icon: Mail,
                label: "Email",
                value: info.email,
              },
              {
                Icon: Phone,
                label: "Phone",
                value: info.phone,
              },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* ──────────── ASSOCIATED BRANDS ──────────── */}
        <TabsContent
          value="brands"
          className={cn(
            "bg-white rounded-xl shadow-sm p-8 border border-gray-100",
            activeTab === "brands" ? "animate-fade-in" : ""
          )}
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">Associated Brands</h3>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* render the first N brands */}
            {brands.slice(0, DISPLAY_BRANDS).map((b) => (
              <BrandCard key={b.id} name={b.name} logo={b.logo} />
            ))}

            {/* “+N more” tile if there are additional brands */}
            {brands.length > DISPLAY_BRANDS && (
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all">
                <p className="text-2xl font-semibold text-primary">
                  +{brands.length - DISPLAY_BRANDS} more
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* ─────────────── CONNECTIONS ─────────────── */}
        <TabsContent
          value="connections"
          className={cn(
            "bg-white rounded-xl shadow-sm p-8 border border-gray-100",
            activeTab === "connections" ? "animate-fade-in" : ""
          )}
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">You might know</h3>

          <div className="space-y-4">
            {connections.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
              >
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.email}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
