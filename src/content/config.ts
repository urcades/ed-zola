// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const writingCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      foregroundColor: z.string().optional(),
      foregroundColorDark: z.string().optional(),
      backgroundColor: z.string().optional(),
      backgroundColorDark: z.string().optional(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  writing: writingCollection,
};