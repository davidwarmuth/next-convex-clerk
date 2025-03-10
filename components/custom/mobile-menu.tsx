"use client";

import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function MobileMenu({
  isOpen,
  toggleMenu,
  closeMenu,
}: MobileMenuProps) {
  return (
    <div className="transition-all duration-500 ease-in-out">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background bg-opacity-100 z-50 border-b">
          <ul className="container flex flex-col gap-4 py-4">
            <li>
              <Link
                href="/tasks"
                className="text-lg font-medium"
                onClick={closeMenu}
              >
                Tasks
              </Link>
            </li>
          </ul>
          <div className="container p-4">
            <Separator className="mb-4" />
            <div className="flex gap-4 justify-between">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button>Sign in</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
