import { Footer } from "@/components/layout/footer";
import { getFooterLinks, getSiteConfig } from "@/lib/data";

export async function SiteFooter() {
  const [links, siteConfig] = await Promise.all([
    getFooterLinks(),
    getSiteConfig(),
  ]);

  return (
    <Footer
      name={siteConfig.name}
      links={links}
      socials={siteConfig.socials}
    />
  );
}
