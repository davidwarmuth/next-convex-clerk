"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="py-4 border-b">
      <nav className="container flex gap-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-semibold">
            <Link href="/" onClick={closeMenu}>
              Next-Convex-Clerk
            </Link>
          </h1>
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            <li>
              <Link href="/tasks">Tasks</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="md:hidden">
          <MobileMenu
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
          />
        </div>
      </nav>
    </header>
  );
}
