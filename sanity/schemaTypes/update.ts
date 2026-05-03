import { defineField, defineType } from 'sanity';

export const updateSchema = defineType({
    name: 'update',
    title: 'Festival Update',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tag',
            title: 'Category Tag',
            type: 'string',
            options: {
                list: ['PRESS RELEASE', 'SPEAKER SPOTLIGHT', 'ANNOUNCEMENT', 'SOCIAL FEED'],
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'A short summary for the preview card',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
    },
});