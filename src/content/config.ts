import { z, defineCollection } from "astro:content";

const locationCollection = defineCollection({
  type: "content",
  schema: z.object({
    thePlace: z.string(),
    location: z.string(),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    pagePath: z.string(),
    bookPath: z.record(z.string()), 
    staff: z.array(z.string()),
    hours: z.array(z.object({ day: z.string(), time: z.string() })),
  }),
});

const staffCollection = defineCollection({
  type: "content",
  schema: z.object({
    staffName: z.optional(z.string()),
    bookEmPath: z.optional(z.string()),
    imagePath: z.optional(z.string()),
  }),
});

export const collections = {
  locations: locationCollection,
  staff: staffCollection,
};
