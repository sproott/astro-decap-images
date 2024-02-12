// https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			draft: z.boolean(),
			date: z.date(),
			image: z
				.string()
				.transform((path) => `/public/${path}`)
				.pipe(image()),
		}),
})

export const collections = {
	posts: postCollection,
}
