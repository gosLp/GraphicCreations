import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  portfolio: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      category: z.enum([
        "magazine",
        "menu",
        "calender",
        "brochure",
        "newsletter",
        "report",
      ]),
      mainImage: z.string(),
      additionalImages: z.array(z.string()).optional(),
      pdfUrl: z.string().optional(),
      featured: z.boolean().default(false),
      publishDate: z.date(),
    }),
  }),
};
