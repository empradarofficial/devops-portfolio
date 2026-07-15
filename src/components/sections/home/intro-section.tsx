import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ScrollReveal } from "@/components/common/scroll-reveal";

interface IntroSectionProps {
  paragraphs: string[];
}

export function IntroSection({ paragraphs }: IntroSectionProps) {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        eyebrow="About"
        title="Architecture grounded in delivery"
        description="Technical leadership for systems that must perform under real constraints—regulation, scale, and long operational lifetimes."
      />

      <div className="max-w-3xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <ScrollReveal key={index} delay={index * 0.06}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
