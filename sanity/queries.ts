import { groq } from "next-sanity";

// Fetch the first 4 speakers for the Homepage
export const featuredSpeakersQuery = groq`
  *[_type == "speaker"][0...4] | order(_createdAt asc) {
    _id,
    name,
    role,
    company,
    image
  }
`;

// Fetch all exhibitors for the Directory
export const exhibitorsQuery = groq`
  *[_type == "exhibitor"] | order(companyName asc) {
    _id,
    companyName,
    category,
    boothLocation,
    description,
    logo,
    isFeatured
  }
`;

// Fetch all updates/blog posts for the Updates page
export const updatesQuery = groq`
  *[_type == "update"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    tag,
    publishedAt,
    excerpt,
    mainImage,
    body
  }
`;

// Fetch a single update by slug
export const singleUpdateQuery = groq`
  *[_type == "update" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    tag,
    publishedAt,
    excerpt,
    mainImage,
    body
  }
`;