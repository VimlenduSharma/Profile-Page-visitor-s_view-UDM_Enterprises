import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "purple" | "blue" | "green" | "orange" | "pink";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("purple");
  
  // Effect to apply theme class to body
  useEffect(() => {
    const oldThemeClasses = ["theme-purple", "theme-blue", "theme-green", "theme-orange", "theme-pink"];
    document.body.classList.remove(...oldThemeClasses);
    
    if (theme !== "purple") {
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Generate random theme for visitor
export function useRandomTheme() {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    const themes: Theme[] = ["purple", "blue", "green", "orange", "pink"];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(randomTheme);
  }, [setTheme]);
}
