import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ArticleCard } from "@/components/blog/article-card";
import type { Article } from "@/types";

interface ArticlesSectionProps {
  articles: Article[];
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <SectionWrapper id="articles">
      <SectionHeader
        eyebrow="Writing"
        title="Latest articles"
        description="Technical notes on architecture, platform engineering, and systems design. Full articles coming soon."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <ScrollReveal key={article.id} delay={index * 0.08}>
            <ArticleCard article={article} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
