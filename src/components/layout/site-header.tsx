import { Navbar } from "@/components/layout/navbar";
import { getNavigation, getSiteConfig } from "@/lib/data";

export async function SiteHeader() {
  const [items, siteConfig] = await Promise.all([
    getNavigation(),
    getSiteConfig(),
  ]);

  return <Navbar items={items} siteName={siteConfig.name} />;
}
