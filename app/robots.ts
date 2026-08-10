import type { MetadataRoute } from "next";
import { EVENT_DETAILS } from "@/lib/event";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/dashboard"],
    },
    sitemap: `${EVENT_DETAILS.baseUrl}/sitemap.xml`,
  };
}
