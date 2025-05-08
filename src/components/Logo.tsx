import { useTheme } from "./ThemeContext";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`font-display font-bold text-2xl text-white ${className}`}>
      UDM
      <span className="text-white/70 font-normal text-sm ml-1">logo</span>
    </div>
  );
}
