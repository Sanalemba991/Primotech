import { z, defineCollection } from 'astro:content';

const tipsCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    name: z.string(),
    title: z.string(),
    subTitle: z.string(),
    description: z.string(),
    location: z.string(),
    authorImage: z.string(),
    authorImageAlt: z.string(),
    videoClip: z.string().url(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    eventImage: z.string(),
    eventImageAlt: z.string(),
    readTime: z.number(),
    titleOne: z.string(),
    descriptionOne: z.string(),
    imageOne: z.string(),
    titleTwo: z.string(),
    descriptionTwo: z.string(),
    imageTwo: z.string(),
    titleThree: z.string(),
    descriptionThree: z.string(),
    imageThree: z.string(),
    titleFour: z.string(),
    descriptionFour: z.string(),
    imageFour: z.string(),
    tags: z.array(z.string()),
    address: z.array(z.string()),
    contents: z.array(z.string()),
  }),
});
export const collections = {
     tips: tipsCollection,
};