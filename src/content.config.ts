import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const ratingsTotal = defineCollection({
  loader: file("src/data/ratingsTotal.json"),
  schema: z.object({
    attendance: z.number(),
    returns: z.number(),
    excellent: z.number(),
    good: z.number(),
    average: z.number(),
    disappointing: z.number(),
    awful: z.number(),
    ratingsAverage: z.number(),
  }),
});

const pastRatings = defineCollection({
  loader: file("src/data/pastReactions.json"),
  schema: z.array(
    z.object({
      title: z.string(),
      films: z.array(
        z.object({
          title: z.string(),
          attendance: z.string(),
          reactionsReturned: z.string(),
          fiveStars: z.string(),
          fourStars: z.string(),
          threeStars: z.string(),
          twoStars: z.string(),
          oneStars: z.string(),
          percentageTotal: z.string(),
        })
      ),
    })
  ),
});

export const collections = {
  ratingsTotal,
  pastRatings,
};
