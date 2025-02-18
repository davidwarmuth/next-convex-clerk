"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Monitor, Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost" disabled>
        <Monitor className="size-4" />
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => {
        const theme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(theme);
        toast("Changed theme to: " + theme);
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4 text-orange-300" />
      ) : (
        <Moon className="size-4 text-sky-950" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
