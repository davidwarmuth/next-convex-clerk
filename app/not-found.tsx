"use client";

import { Icons } from "@/components/custom/icons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Überprüfe, ob die Seite direkt aufgerufen wurde (kein Referrer)
    if (typeof document !== "undefined") {
      setShowHome(!document.referrer);
    }
  }, []);

  const handleButtonClick = () => {
    if (showHome) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <div className="px-4 py-20 grow flex flex-col gap-4 items-center justify-center">
      <Icons.notFound className="size-24 fill-zinc-400 dark:fill-zinc-500" />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">404 | Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Die angeforderte Ressource konnte nicht gefunden werden.
        </p>
      </div>
      <Button variant="outline" className="mt-2" onClick={handleButtonClick}>
        <ArrowLeft className="size-5" />
        {showHome ? "Home" : "Zurück"}
      </Button>
    </div>
  );
}
