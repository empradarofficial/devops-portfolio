import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedBackground } from "@/components/common/animated-background";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <SectionWrapper className="flex min-h-[60vh] items-center pt-8 sm:pt-12">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            404
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The resource you requested does not exist or has been moved. Return
            to the homepage to continue browsing the portfolio.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/">
              <ArrowLeft aria-hidden />
              Back to Home
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
