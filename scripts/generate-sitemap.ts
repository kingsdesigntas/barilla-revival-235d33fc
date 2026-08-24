import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.barilla.com.au";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/accommodation", changefreq: "weekly", priority: "0.8" },
  { path: "/accommodation/cabins", changefreq: "weekly", priority: "0.8" },
  { path: "/accommodation/caravans", changefreq: "weekly", priority: "0.8" },
  { path: "/accommodation/camping", changefreq: "weekly", priority: "0.8" },
  { path: "/accommodation/airport", changefreq: "weekly", priority: "0.8" },
  { path: "/things-to-do/at-barilla", changefreq: "weekly", priority: "0.8" },
  { path: "/things-to-do/attractions", changefreq: "weekly", priority: "0.8" },
  { path: "/things-to-do/mini-golf", changefreq: "weekly", priority: "0.8" },
  { path: "/things-to-do/day-trips", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/customer-feedback", changefreq: "monthly", priority: "0.6" },
  { path: "/cabin-accommodation-hobart", changefreq: "monthly", priority: "0.7" },
  { path: "/caravan-parks-hobart", changefreq: "monthly", priority: "0.7" },
  { path: "/family-friendly-holiday-park-accommodation-in-hobart", changefreq: "monthly", priority: "0.7" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
