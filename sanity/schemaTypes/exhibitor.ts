import { defineField, defineType } from 'sanity';

export const exhibitorSchema = defineType({
    name: 'exhibitor',
    title: 'Exhibitor',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Food & Beverages', value: 'FOOD_&_BEVERAGES' },
                    { title: 'Packaging', value: 'PACKAGING' },
                    { title: 'Personal Care', value: 'PERSONAL_CARE' },
                    { title: 'Processing Tech', value: 'PROCESSING_TECH' },
                ],
            },
        }),
        defineField({
            name: 'boothLocation',
            title: 'Booth Location',
            type: 'string',
            description: 'e.g., Booth #42B - Hall 1',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured on Homepage?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
});