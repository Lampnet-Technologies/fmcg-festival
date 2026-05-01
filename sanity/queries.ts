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

// Fetch all sessions for the Schedule
export const sessionsQuery = groq`
  *[_type == "session"] | order(time asc) {
    _id,
    title,
    day,
    time,
    stage,
    description,
    speakers[]->{
      _id,
      name,
      role,
      image
    }
  }
`;