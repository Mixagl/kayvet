import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kayvet.ru";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/equipment`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/appointment`, lastModified: new Date(), priority: 0.9 },
  ];
}
