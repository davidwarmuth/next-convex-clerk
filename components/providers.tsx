"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "./ui/sonner";
import { useEffect, useState } from "react";
import { dark } from "@clerk/themes";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { BaseThemeTaggedType } from "@clerk/types";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemedClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
          <ToasterProvider />
        </ConvexProviderWithClerk>
      </ThemedClerkProvider>
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      richColors
      closeButton
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      className="mt-16"
      duration={2000}
    />
  );
}

function ThemedClerkProvider({ children }: { children: React.ReactNode }) {
  const [clerkTheme, setClerkTheme] = useState<BaseThemeTaggedType | undefined>(
    undefined
  );
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setClerkTheme(dark);
    } else {
      setClerkTheme(undefined);
    }
  }, [resolvedTheme]);
  return (
    <ClerkProvider
      appearance={{
        baseTheme: clerkTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
