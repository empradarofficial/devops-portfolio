"use client";

import { cn } from "@/lib/utils";
import { GradientBlob } from "@/components/common/gradient-blob";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.5 0 0 / 6%) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.5 0 0 / 6%) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
        }}
      />

      <GradientBlob
        color="primary"
        className="top-[-12%] left-[-8%] h-[420px] w-[420px]"
      />
      <GradientBlob
        color="secondary"
        className="top-[18%] right-[-10%] h-[360px] w-[360px]"
      />
      <GradientBlob
        color="accent"
        className="bottom-[-8%] left-[28%] h-[320px] w-[320px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
    </div>
  );
}
