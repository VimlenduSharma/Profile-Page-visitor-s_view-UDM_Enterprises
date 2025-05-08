import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import {
  Home,
  User,
  Settings,
  MessageSquare,
  Bookmark,
  Bell,
  Share,
  Heart
} from "lucide-react";

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
}

function SidebarLink({ icon: Icon, label, to, active = false }: SidebarLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all 
        ${active 
          ? "bg-sidebar-accent text-sidebar-foreground" 
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"}`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 px-3 py-4 flex flex-col gap-1">
        <SidebarLink icon={Home} label="Home" to="/" />
        <SidebarLink icon={User} label="Profile" to="/profile" active={true} />
        <SidebarLink icon={MessageSquare} label="Services" to="/services" />
        <SidebarLink icon={Bookmark} label="Brands" to="/brands" />
        <SidebarLink icon={Bell} label="Campaigns" to="/campaigns" />
        <SidebarLink icon={Heart} label="About Us" to="/about" />
        <SidebarLink icon={Share} label="Contact Us" to="/contact" />
      </div>
      
      <div className="mt-auto px-3 py-4">
        <SidebarLink icon={Settings} label="Settings" to="/settings" />
      </div>
    </aside>
  );
}
