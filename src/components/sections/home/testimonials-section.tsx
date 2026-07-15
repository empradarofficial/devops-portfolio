import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { TestimonialCard } from "@/components/common/testimonial-card";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" className="bg-muted/15">
      <SectionHeader
        eyebrow="Testimonials"
        title="What clients and colleagues say"
        description="Feedback from engineering leaders and stakeholders on delivery, architecture, and technical direction."
        align="center"
        className="mx-auto text-center"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.id} delay={index * 0.08}>
            <TestimonialCard testimonial={testimonial} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
