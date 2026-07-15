"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBackground } from "@/components/common/animated-background";
import { Container } from "@/components/common/container";
import { RippleButton } from "@/components/common/ripple-button";
import { TechnologyPill } from "@/components/common/technology-pill";
import {
  blurReveal,
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  name: string;
  roles: string[];
  badges: string[];
  resumePath: string;
}

const ROLE_INTERVAL_MS = 3200;

export function HeroSection({
  name,
  roles,
  badges,
  resumePath,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const container = prefersReducedMotion ? reducedMotionVariants : staggerContainer;
  const item = prefersReducedMotion ? reducedMotionVariants : fadeUp;
  const title = prefersReducedMotion ? reducedMotionVariants : blurReveal;

  useEffect(() => {
    if (roles.length <= 1 || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, ROLE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, roles.length]);

  const activeRole = roles[roleIndex] ?? roles[0] ?? "";

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-24">
      <AnimatedBackground />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative mx-auto max-w-5xl"
        >
          <motion.p
            variants={item}
            className="mb-4 text-sm font-medium tracking-wide text-primary uppercase"
          >
            Available for architecture consulting
          </motion.p>

          <motion.h1
            variants={title}
            className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-tight text-balance"
          >
            {name}
          </motion.h1>

          <div
            className="mt-5 h-[2.75rem] overflow-hidden sm:mt-6 sm:h-[3.25rem]"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={activeRole}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, y: -12, filter: "blur(6px)" }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl lg:text-4xl"
              >
                {activeRole}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
          >
            Twelve years of enterprise delivery across .NET, ETL, DevOps,
            blockchain, Rust, Solidity, AI automations, and cloud platforms.
            Systems built for correctness under load and maintainability over
            years—not quarters.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          >
            <RippleButton href="/portfolio" size="lg">
              View Portfolio
              <ArrowRight className="size-4" aria-hidden />
            </RippleButton>
            <RippleButton href={resumePath} variant="outline" size="lg">
              Download Resume
              <Download className="size-4" aria-hidden />
            </RippleButton>
            <RippleButton href="/contact" variant="secondary" size="lg">
              Contact Me
            </RippleButton>
          </motion.div>

          <motion.div variants={item} className="mt-12 sm:mt-14">
            <p className="mb-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.4 + index * 0.04,
                    duration: 0.35,
                  }}
                >
                  <TechnologyPill name={badge} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {!prefersReducedMotion && roles.length > 1 ? (
            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-2"
              aria-hidden
            >
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    index === roleIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border",
                  )}
                />
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}
