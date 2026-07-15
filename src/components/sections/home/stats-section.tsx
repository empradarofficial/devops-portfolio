import { SectionWrapper } from "@/components/common/section-wrapper";
import { StatisticCard } from "@/components/common/statistic-card";
import { ScrollReveal } from "@/components/common/scroll-reveal";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <SectionWrapper className="border-y border-border/60 bg-muted/20 py-12 sm:py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.08}>
            <StatisticCard
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
