import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
