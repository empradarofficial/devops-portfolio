import { ArrowRight } from "lucide-react";
import { RippleButton } from "@/components/common/ripple-button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionWrapper } from "@/components/common/section-wrapper";

export function CtaSection() {
  return (
    <SectionWrapper className="pb-20 sm:pb-24 lg:pb-28">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.18), transparent 45%), radial-gradient(circle at 85% 30%, rgba(124,58,237,0.14), transparent 40%)",
            }}
          />

          <div className="relative max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Work together
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Need an architect for complex systems?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I take on architecture consulting, platform design, and
              high-stakes delivery where system boundaries, operational
              reliability, and long-term maintainability are non-negotiable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <RippleButton href="/contact" size="lg">
                Start a conversation
                <ArrowRight className="size-4" aria-hidden />
              </RippleButton>
              <RippleButton href="/resume" variant="outline" size="lg">
                View resume
              </RippleButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
