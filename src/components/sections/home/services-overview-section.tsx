import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ServiceCard } from "@/components/services/service-card";
import type { Service } from "@/types";

interface ServicesOverviewSectionProps {
  services: Service[];
}

export function ServicesOverviewSection({
  services,
}: ServicesOverviewSectionProps) {
  const visibleServices = services.slice(0, 6);

  return (
    <SectionWrapper id="services">
      <SectionHeader
        eyebrow="Services"
        title="What I deliver"
        description="Architecture, implementation, and platform work for teams that need systems designed to last."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleServices.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.06}>
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all services
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  );
}
