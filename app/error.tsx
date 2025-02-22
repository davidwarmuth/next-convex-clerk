"use client";
import { BugIcon } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grow flex flex-col items-center justify-center">
      <div className="space-y-4 flex flex-col items-center">
        <BugIcon className="size-24 text-zinc-400 dark:text-zinc-500" />
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Oops! Something went wrong.
          </h2>
          <p className="text-lg text-muted-foreground">
            This is an error page. Please try again later.
          </p>
        </div>
        <p className="text-red-800 italic mt-2">{error.message}</p>
      </div>
    </div>
  );
}
