import { defineField, defineType } from "sanity";

export const exhibitor = defineType({
  name: "exhibitor",
  title: "Exhibitor",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Sector Category",
      type: "string",
      options: {
        list: [
          { title: "Food & Bev", value: "food_bev" },
          { title: "Personal Care", value: "personal_care" },
          { title: "Household", value: "household" },
          { title: "Tech", value: "tech" },
          { title: "Packaging", value: "packaging" },
        ],
      },
    }),
    defineField({
      name: "boothLocation",
      title: "Booth Location",
      type: "string",
      description: "e.g., Booth #428 - Hall 1",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Exhibitor?",
      type: "boolean",
      description: "Toggle on to show large card at top of Exhibitor page",
      initialValue: false,
    }),
  ],
});