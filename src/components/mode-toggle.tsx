import { useTheme } from "@/components/theme-provider";
import { Win98Button } from "./win98-button";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Win98Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Moon className="size-4" />
          Тёмная тема
        </>
      ) : (
        <>
          <Sun className="size-4" />
          Светлая тема
        </>
      )}
    </Win98Button>
  );
}