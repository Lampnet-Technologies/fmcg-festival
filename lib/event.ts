export const EVENT_DETAILS = {
  name: "FMCG Festival",
  year: "2026",
  dateRange: "November 09-11, 2026",
  displayDate: "November 09-11, 2026",
  heroDate: "November 09-11, 2026",
  startsAt: "2026-11-09T09:00:00+01:00",
  venue: "Oriental Hotel",
  venueFull: "Oriental Hotel, Victoria Island, Lagos",
  city: "Lagos",
  country: "Nigeria",
  organizer: "MABA",
  supportEmail: "support@thefmcgfestival.com",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://thefmcgfestival.com",
} as const;

export const PRICING = {
  visitor: 0,
  exhibitor: 25000000,
  exhibitor_4sqm: 70000000,
  exhibitor_6sqm: 140000000,
  exhibitor_9sqm: 210000000,
  exhibitor_15sqm: 300000000,
  sponsorship_bronze: 500000000,
  sponsorship_silver: 1000000000,
  sponsorship_gold: 2000000000,
  sponsorship_category: 3000000000,
  sponsorship_headline: 4000000000,
} as const;

export type TicketTier = keyof typeof PRICING;

export const TIER_DETAILS: Record<
  TicketTier,
  {
    type: string;
    title: string;
    description: string;
    price: string;
  }
> = {
  visitor: {
    type: "Visitor Pass",
    title: "Visitor Pass",
    description: "Access all sessions, networking areas, and event content at no cost.",
    price: "Free Registration",
  },
  exhibitor: {
    type: "Exhibitor Booth",
    title: "Exhibitor Booth",
    description: "Includes 3x3m booth, 2 staff passes, and branding visibility.",
    price: "$450.00 / NGN 250,000",
  },
  exhibitor_15sqm: {
    type: "Exhibitor Booth",
    title: "15 sqm Exhibitor Booth",
    description: "Includes 15 sqm booth space, 2 staff passes, and exhibition listing.",
    price: "$2,000.00 / NGN 3,000,000",
  },
  exhibitor_9sqm: {
    type: "Exhibitor Booth",
    title: "9 sqm Exhibitor Booth",
    description: "Includes 9 sqm booth space, 2 staff passes, and enhanced branding visibility.",
    price: "$1,500.00 / NGN 2,100,000",
  },
  exhibitor_6sqm: {
    type: "Exhibitor Booth",
    title: "6 sqm Exhibitor Booth",
    description: "Includes 6 sqm booth space, 2 staff passes, and enhanced branding visibility.",
    price: "$1,000.00 / NGN 1,400,000",
  },
  exhibitor_4sqm: {
    type: "Exhibitor Booth",
    title: "4 sqm Exhibitor Booth",
    description: "Includes 4 sqm booth space and premium placement with extra exposure.",
    price: "$500.00 / NGN 700,000",
  },
  sponsorship_bronze: {
    type: "Bronze Sponsorship",
    title: "Bronze Sponsorship",
    description: "Logo placement, exhibition space, and 2 delegate passes.",
    price: "NGN 5M / $5,000",
  },
  sponsorship_silver: {
    type: "Silver Sponsorship",
    title: "Silver Sponsorship",
    description: "Standard booth, media coverage, and logo exposure.",
    price: "NGN 10M / $10,000",
  },
  sponsorship_gold: {
    type: "Gold Sponsorship",
    title: "Gold Sponsorship",
    description: "Prime booth, keynote visibility, and premium branding.",
    price: "NGN 20M / $20,000",
  },
  sponsorship_category: {
    type: "Category Sponsorship",
    title: "Category Sponsorship",
    description: "Exclusive category sponsor credit, billboards, and premium event exposure.",
    price: "NGN 30M / $30,000",
  },
  sponsorship_headline: {
    type: "Headline / Category Sponsorship",
    title: "Headline / Category Sponsorship",
    description: "Exclusive headline sponsor credit, billboards, private networking slots, and keynote visibility.",
    price: "NGN 40M / $40,000",
  },
};

export const BOOTH_TIERS = [
  {
    title: "Exhibitor Booth (Blue)",
    desc: "Includes 15 sqm booth",
    desc2: "6 units",
    tier: "exhibitor_15sqm",
    bgClass: "bg-blue-100",
  },
  {
    title: "Exhibitor Booth (Orange)",
    desc: "Includes 9 sqm booth",
    desc2: "14 units",
    tier: "exhibitor_9sqm",
    bgClass: "bg-orange-100",
  },
  {
    title: "Exhibitor Booth (Green)",
    desc: "Includes 6 sqm booth",
    desc2: "17 units",
    tier: "exhibitor_6sqm",
    bgClass: "bg-green-100",
  },
  {
    title: "Exhibitor Booth (Purple)",
    desc: "Includes 4 sqm booth",
    desc2: "25 units",
    tier: "exhibitor_4sqm",
    bgClass: "bg-purple-100",
  },
] satisfies Array<{
  title: string;
  desc: string;
  desc2: string;
  tier: TicketTier;
  bgClass: string;
}>;

export const SPONSORSHIP_TIERS = [
  {
    name: "Bronze",
    tier: "sponsorship_bronze",
    features: [
      "Logo on official website",
      "9 sqm exhibition booth",
      "Logo on official visitor bag to be given to 5,000 visitors at the event",
    ],
    popular: false,
    dark: false,
  },
  {
    name: "Category",
    tier: "sponsorship_category",
    features: [
      "20 sqm exhibition booth",
      "Exclusive category sponsor credit",
      "Company logo on billboards and outdoor adverts",
      "Keynote speech opportunity",
    ],
    popular: true,
    dark: true,
  },
  {
    name: "Silver",
    tier: "sponsorship_silver",
    features: [
      "Logo on official website",
      "12 sqm exhibition booth",
      "Private networking activation during the event",
      "Logo on official visitor bag to be given to 5,000 visitors at the event",
    ],
    popular: false,
    dark: false,
  },
  {
    name: "Headline / Category",
    tier: "sponsorship_headline",
    features: [
      "20 sqm exhibition booth",
      "Exclusive headline sponsor credit",
      "Company logo on billboards and outdoor adverts",
      "Private networking activation during the event",
      "Keynote speech opportunity",
    ],
    popular: true,
    dark: true,
  },
  {
    name: "Gold",
    tier: "sponsorship_gold",
    features: [
      "Logo on official website",
      "15 sqm exhibition booth",
      "Gold sponsor credit on all event communications",
      "Private networking activation during the event",
      "Logo on official visitor bag to be given to 5,000 visitors at the event",
    ],
    popular: false,
    dark: false,
  },
] satisfies Array<{
  name: string;
  tier: TicketTier;
  features: string[];
  popular: boolean;
  dark: boolean;
}>;

export interface Partner {
  name: string;
  src: string;
  alt: string;
  type: "international" | "local";
  description: string;
}

export const HOMEPAGE_INTERNATIONAL_PARTNERS: Partner[] = [
  {
    name: "inAfrica",
    src: "/partner5.png",
    alt: "inAfrica Logo",
    type: "international",
    description: "inAfrica is an impact enterprise focused on building strategic local value chains, aggregating high-quality wholesale products for export and domestic retail distribution."
  },
  {
    name: "GG Group",
    src: "/partner7.png",
    alt: "GG Group Logo",
    type: "international",
    description: "GG Group is a multi-sector international enterprise focused on supply chain optimization, import-export facilitation, and strategic distribution partnerships."
  },
  /*   {
      name: "GOVA",
      src: "/partner2.png",
      alt: "GOVA Logo",
      type: "international",
      description: "GOVA is a global trading and brand distribution company, connecting major consumer goods brands with emerging and international retail markets."
    } */
  {
    name: "Opay",
    src: "/partner9.png",
    alt: "Opay Logo",
    type: "international",
    description: "Opay becomes the Fintech Headline Sponsor for The FMCG Festival 2026\n\nNigeria's leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry.\n\nA B2B exhibition organized by MABA in partnership with the Nigerian-Indonesian Chamber of Commerce and Industry and reGenesis, a US based Agri-tech company alongside other local and international partners.\n\nThe FMCG Festival, Africa's premier B2B and consumer goods exhibition will be hosting over 5000 visitors and over 100 local and international exhibitors including manufacturing companies, consumer goods companies, distributors, suppliers technology brands and global buyers at the prestigious Oriental hotel Victoria Island Lagos Nigeria from 9-11th November 2026."
  },
];

export const HOMEPAGE_LOCAL_PARTNERS: Partner[] = [
  /*   {
      name: "AfroPack Engineering",
      src: "/partner4.png",
      alt: "AfroPack Engineering Logo",
      type: "local",
      description: "AfroPack Engineering is a premier packaging solutions provider, specializing in custom machinery, sustainable wrapping designs, and manufacturing equipment for FMCG companies."
    }, */
  {
    name: "Nigerian Indonesian Chamber of Commerce and Industry",
    src: "/partner8.jpeg",
    alt: "Nigerian Indonesian Chamber of Commerce and Industry Logo",
    type: "local",
    description: "The Nigerian Indonesian Chamber of Commerce and Industry (NICCI) is dedicated to promoting bilateral trade, investment, and economic cooperation between Nigeria and Indonesia."
  },
  /*   {
      name: "Sinbol",
      src: "/partner3.png",
      alt: "Sinbol Logo",
      type: "local",
      description: "Sinbol is a leading company specializing in the production and distribution of high-quality edible oils and related products, providing nutritious and sustainable cooking solutions across Africa."
    } */
];

export const DISTINGUISHED_PARTNERS: Partner[] = [
  {
    name: "inAfrica",
    src: "/partner5.png",
    alt: "inAfrica Logo",
    type: "international",
    description: "inAfrica is an impact enterprise focused on building strategic local value chains, aggregating high-quality wholesale products for export and domestic retail distribution."
  },
  {
    name: "GG Group",
    src: "/partner7.png",
    alt: "GG Group Logo",
    type: "international",
    description: "GG Group is a multi-sector international enterprise focused on supply chain optimization, import-export facilitation, and strategic distribution partnerships."
  },
  {
    name: "Nigerian Indonesian Chamber of Commerce and Industry",
    src: "/partner8.jpeg",
    alt: "Nigerian Indonesian Chamber of Commerce and Industry Logo",
    type: "local",
    description: "The Nigerian Indonesian Chamber of Commerce and Industry (NICCI) is dedicated to promoting bilateral trade, investment, and economic cooperation between Nigeria and Indonesia."
  },
  {
    name: "Opay",
    src: "/partner9.png",
    alt: "Opay Logo",
    type: "international",
    description: "Opay becomes the Fintech Headline Sponsor for The FMCG Festival 2026\n\nNigeria's leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry.\n\nA B2B exhibition organized by MABA in partnership with the Nigerian-Indonesian Chamber of Commerce and Industry and reGenesis, a US based Agri-tech company alongside other local and international partners.\n\nThe FMCG Festival, Africa's premier B2B and consumer goods exhibition will be hosting over 5000 visitors and over 100 local and international exhibitors including manufacturing companies, consumer goods companies, distributors, suppliers technology brands and global buyers at the prestigious Oriental hotel Victoria Island Lagos Nigeria from 9-11th November 2026."
  },
];

