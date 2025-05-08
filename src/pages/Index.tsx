import { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar.tsx";
import { SearchBar } from "@/components/SearchBar.tsx";
import { ProfileHeader } from "@/components/ProfileHeader.tsx";
import { ProfileTabs } from "@/components/ProfileTabs.tsx";
import {
  ThemeProvider,
  useRandomTheme,
} from "@/components/ThemeContext.tsx";

/* ─────────────────────── profile mock ─────────────────────── */
const profileData = {
  name: "Amritansh Srivastava",
  title: "Influencer @UDM",
  description:
    "We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.",
  coverImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
  avatar: "/avatar/amritansh.png", // put the PNG in public/avatar/
  info: {
    gender: "Male",
    address: "2239 Hog Camp Road, Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
  },
  brands: [
    { id: 1, name: "Matt Look",     logo: "/brands/matt-look.png" },
    { id: 2, name: "Sole Threads",  logo: "/brands/sole-threads.png" },
    { id: 3, name: "Green Protein", logo: "/brands/green-protein.png" },
    { id: 4, name: "Kalaalam",      logo: "/brands/kalaalam.png" },
  ],
  connections: [
    {
      id: 1,
      name: "Eddie Lobanovskiy",
      email: "lobanovskiy@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Alexey Stave",
      email: "alexeyst@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Anton Tkacheve",
      email: "tkacheveanton@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ],
};

/* ───────────────────────── page ────────────────────────────── */
function ProfilePage() {
  useRandomTheme();

  useEffect(() => {
    document.title = `${profileData.name} - Profile | UDM`;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pl-64">
      {/* top bar */}
      <header className="bg-white sticky top-0 z-10 p-4 flex items-center border-b">
        <div className="w-full px-4">
          <SearchBar />
        </div>
      </header>

      {/* main content */}
      <main className="p-6">
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          description={profileData.description}
          coverImage={profileData.coverImage}
          avatar={profileData.avatar}
        />

        <ProfileTabs
          info={profileData.info}
          brands={profileData.brands}
          connections={profileData.connections}
        />
      </main>
    </div>
  );
}

/* ─────────────────────── wrapper with sidebar / theme ──────── */
export default function Index() {
  return (
    <ThemeProvider>
      <Sidebar />
      <ProfilePage />
    </ThemeProvider>
  );
}
