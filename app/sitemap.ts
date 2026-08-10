import type { MetadataRoute } from "next";
import { EVENT_DETAILS } from "@/lib/event";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/contact",
  "/exhibitors",
  "/line-up",
  "/press",
  "/privacy",
  "/register",
  "/sponsorship",
  "/terms",
  "/updates",
  "/visitor-profile",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${EVENT_DETAILS.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
