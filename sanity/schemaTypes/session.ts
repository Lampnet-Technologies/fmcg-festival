import { defineField, defineType } from "sanity";

export const session = defineType({
  name: "session",
  title: "Event Session",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Session Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "day",
      title: "Festival Day",
      type: "string",
      options: {
        list: [
          { title: "Day 01: Future of FMCG", value: "day_1" },
          { title: "Day 02: Sustainability", value: "day_2" },
          { title: "Day 03: Global Market", value: "day_3" },
        ],
      },
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: "e.g., 09:00 AM",
    }),
    defineField({
      name: "stage",
      title: "Stage/Location",
      type: "string",
      description: "e.g., Main Stage, Strategy Room, Innovation Hub",
    }),
    defineField({
      name: "description",
      title: "Session Description",
      type: "text",
    }),
    defineField({
      name: "speakers",
      title: "Associated Speakers",
      type: "array",
      of: [{ type: "reference", to: { type: "speaker" } }],
    }),
  ],
});