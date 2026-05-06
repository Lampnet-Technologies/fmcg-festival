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
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'tier',
            title: 'Booth Tier',
            type: 'string',
            options: {
                list: [
                    { title: 'Bronze', value: 'bronze' },
                    { title: 'Silver', value: 'silver' },
                    { title: 'Gold', value: 'gold' },
                    { title: 'Platinum', value: 'platinum' },
                ],
            },
        }),
    ],
});