import { defineField, defineType } from "sanity";

export const speaker = defineType({
  name: "speaker",
  title: "Speaker",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Job Role",
      type: "string",
      description: "e.g., CEO, Global Consumer Dynamics",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});