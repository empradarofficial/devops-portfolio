"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { type VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps
  extends Omit<React.ComponentProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function RippleButton({
  children,
  className,
  href,
  onClick,
  variant,
  size,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      const id = Date.now();

      setRipples((current) => [...current, { id, x, y, size }]);

      window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
      }, 600);
    },
    [],
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    createRipple(event);
    onClick?.(event);
  };

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      >
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/25"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </span>
    </>
  );

  const sharedClassName = cn(
    buttonVariants({ variant, size }),
    "relative overflow-hidden",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={sharedClassName}
        onClick={handleClick}
        aria-label={props["aria-label"]}
      >
        {content}
      </Link>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
      {...props}
    >
      {content}
    </Button>
  );
}
