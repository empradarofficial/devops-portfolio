"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`article-${article.id}-title`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-border sm:p-7",
        className,
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <time dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3" aria-hidden />
          {article.readingTime}
        </span>
        <span className="text-muted-foreground/60">· Coming soon</span>
      </div>

      <h3
        id={`article-${article.id}-title`}
        className="font-heading text-lg font-semibold tracking-tight text-balance"
      >
        <span
          id={article.slug}
          aria-describedby={`article-${article.id}-status`}
          className="cursor-default"
        >
          {article.title}
        </span>
      </h3>

      <p
        id={`article-${article.id}-status`}
        className="sr-only"
      >
        Full article page coming soon
      </p>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {article.summary}
      </p>

      {article.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="border border-border/60 bg-background/50 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </motion.article>
  );
}
