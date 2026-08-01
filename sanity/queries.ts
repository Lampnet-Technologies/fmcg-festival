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
  *[_type == "update"] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    slug,
    tag,
    publishedAt,
    _createdAt,
    excerpt,
    mainImage,
    body
  }
`;

// Fetch the latest 3 updates/blog posts for the Homepage preview
export const latestUpdatesQuery = groq`
  *[_type == "update"] | order(coalesce(publishedAt, _createdAt) desc)[0...3] {
    _id,
    title,
    slug,
    tag,
    publishedAt,
    _createdAt,
    excerpt,
    mainImage
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
    _createdAt,
    excerpt,
    mainImage,
    body
  }
`;