"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          {/* {if screen width is less than 768px, hide the text} */}
          <span className="hidden md:inline text-xl font-bold font-mono">
            Neo<span className="text-primary">Fit</span>.ai
          </span>
        </Link>
        {/* Navigation Links */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors "
              >
                <HomeIcon size={16} />
                <span className="hidden md:inline">Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                {/* {when hover text is shown for screen width < 768px} */}
                <span
                  className="absolute left-0 top-full mt-1 text-sm font-semibold text-white bg-black px-2 py-1 rounded shadow 
                   opacity-0 group-hover:opacity-100 transition duration-300 md:hidden"
                >
                  Generate
                </span>
                <span className="hidden md:inline">Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span className="hidden md:inline">Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
