"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Menu } from "lucide-react";
import { Container } from "@/components/common/container";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BIO } from "@/constants/bio";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface NavbarProps {
  items: NavItem[];
  siteName: string;
}

function NavLink({
  item,
  onNavigate,
  className,
}: {
  item: NavItem;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const linkClassName = cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground",
    className,
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        onClick={onNavigate}
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link href={item.href} className={linkClassName} onClick={onNavigate}>
      {item.title}
    </Link>
  );
}

export function Navbar({ items, siteName }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const desktopItems = items.filter((item) => item.href !== "/resume");

  return (
    <motion.header
      initial={false}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              boxShadow: isScrolled
                ? "0 1px 0 0 oklch(0.5 0 0 / 8%), 0 8px 30px -12px oklch(0.2 0 0 / 18%)"
                : "0 0 0 0 transparent",
            }
      }
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border/60 bg-background/75 backdrop-blur-xl supports-backdrop-filter:bg-background/65"
          : "border-transparent bg-background/55 backdrop-blur-md supports-backdrop-filter:bg-background/45",
      )}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`${siteName} home`}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-sm font-semibold tracking-tight text-white shadow-sm">
              {BIO.shortName}
            </span>
            <span className="hidden font-heading text-sm font-semibold tracking-tight md:inline">
              {siteName}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {desktopItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/resume" aria-label="View resume">
                <FileText className="size-4" />
                Resume
              </Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle className="font-heading">{siteName}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4 pb-6">
                  {items.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        item={item}
                        onNavigate={closeMobileMenu}
                        className="w-full text-left"
                      />
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/resume" onClick={closeMobileMenu}>
                        <FileText className="size-4" />
                        Resume
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
