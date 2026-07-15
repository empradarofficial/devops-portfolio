"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Code2, ExternalLink, Mail, Share2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { BIO } from "@/constants/bio";
import { cn } from "@/lib/utils";
import type { NavItem, SocialLink } from "@/types";

interface FooterProps {
  name: string;
  links: NavItem[];
  socials: SocialLink[];
  className?: string;
}

function getSocialIcon(name: string) {
  switch (name) {
    case "GitHub":
      return Code2;
    case "LinkedIn":
      return Share2;
    case "Email":
      return Mail;
    default:
      return ExternalLink;
  }
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 size-10 rounded-full border-border/70 bg-background/85 shadow-lg backdrop-blur-md transition-all duration-300 supports-backdrop-filter:bg-background/70",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}

export function Footer({ name, links, socials, className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className={cn(
          "border-t border-border/60 bg-background/80 backdrop-blur-sm",
          className,
        )}
      >
        <Container className="py-12 sm:py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`${name} home`}
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-sm font-semibold tracking-tight text-white shadow-sm">
                  {BIO.shortName}
                </span>
                <span className="font-heading text-sm font-semibold tracking-tight">
                  {name}
                </span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Senior Software Architect building enterprise-grade systems with
                clarity, performance, and long-term maintainability.
              </p>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-sm font-semibold tracking-tight">
                Quick links
              </h2>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-sm font-semibold tracking-tight">
                Connect
              </h2>
              <ul className="mt-4 space-y-2">
                {socials.map((social) => {
                  const Icon = getSocialIcon(social.name);

                  return (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target={social.name === "Email" ? undefined : "_blank"}
                        rel={
                          social.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={social.label}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Icon className="size-4" />
                        {social.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {name}. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm">
              Crafted with precision for enterprise-grade experiences.
            </p>
          </div>
        </Container>
      </footer>

      <BackToTopButton />
    </>
  );
}
