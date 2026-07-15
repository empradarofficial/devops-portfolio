import {
  Clock,
  Code2,
  Mail,
  MapPin,
  Share2,
} from "lucide-react";
import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import {
  getFaqs,
  getSiteConfig,
} from "@/lib/data";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch for architecture consulting, modernization programs, and select technical engagements.",
  path: "/contact",
});

export default async function ContactPage() {
  const [siteConfig, faqs] = await Promise.all([
    getSiteConfig(),
    getFaqs(),
  ]);

  const linkedIn = siteConfig.socials.find((s) => s.name === "LinkedIn");
  const github = siteConfig.socials.find((s) => s.name === "GitHub");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="relative">
        <AnimatedBackground />
        <SectionWrapper className="pt-8 sm:pt-12">
          <SectionHeader
            eyebrow="Reach Out"
            title="Contact"
            description="Architecture reviews, modernization roadmaps, and delivery leadership for systems that must perform under load."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-lg font-semibold tracking-tight">
                    Direct
                  </h2>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/40">
                          <Mail className="size-4 text-primary" aria-hidden />
                        </span>
                        {siteConfig.email}
                      </a>
                    </li>
                    {linkedIn && (
                      <li>
                        <a
                          href={linkedIn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/40">
                            <Share2
                              className="size-4 text-primary"
                              aria-hidden
                            />
                          </span>
                          LinkedIn
                        </a>
                      </li>
                    )}
                    {github && (
                      <li>
                        <a
                          href={github.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/40">
                            <Code2
                              className="size-4 text-primary"
                              aria-hidden
                            />
                          </span>
                          GitHub
                        </a>
                      </li>
                    )}
                    <li className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/40">
                        <MapPin className="size-4 text-primary" aria-hidden />
                      </span>
                      {siteConfig.location}
                    </li>
                    <li className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/40">
                        <Clock className="size-4 text-primary" aria-hidden />
                      </span>
                      {siteConfig.availability}
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-lg font-semibold tracking-tight">
                    FAQ
                  </h2>
                  <dl className="mt-4 space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-sm font-medium text-foreground">
                          {faq.question}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
                <h2 className="font-heading text-lg font-semibold tracking-tight">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Typical response within two business days.
                </p>
                <ContactForm className="mt-6" />
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
