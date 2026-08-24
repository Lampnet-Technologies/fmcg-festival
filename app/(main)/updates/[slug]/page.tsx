/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { singleUpdateQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

interface UpdatePost {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    tag: string;
    publishedAt: string;
    excerpt: string;
    mainImage?: {
        asset: {
            _ref: string;
        };
    };
    body: any[];
}

const portableTextComponents = {
    block: {
        normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
        h1: ({ children }: any) => <h1 className="text-3xl font-black text-[#0A2E1F] my-6">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-black text-[#0A2E1F] my-4">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-black text-[#0A2E1F] my-4">{children}</h3>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#C5FA00] pl-4 italic text-gray-600 my-4">{children}</blockquote>
        ),
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ value, children }: any) => (
            <a href={value?.href} className="text-[#84A900] font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;
            return (
                <figure className="my-6">
                    <Image
                        src={urlFor(value).url()}
                        alt={value?.alt || "Update image"}
                        width={800}
                        height={400}
                        className="w-full rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {value?.alt && <figcaption className="text-sm text-gray-600 mt-2">{value.alt}</figcaption>}
                </figure>
            );
        },
    },
};

const formatDate = (dateString?: string) => {
    if (!dateString) return "RECENT";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "RECENT";
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).toUpperCase();
};

export default async function SingleUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post: UpdatePost | null = null;

    if (slug === "opay-fintech-headline-sponsor-fmcg-festival-2026") {
        post = {
            _id: "static-opay-post",
            title: "Opay becomes the Fintech Headline Sponsor for The FMCG Festival 2026",
            slug: { current: "opay-fintech-headline-sponsor-fmcg-festival-2026" },
            tag: "PRESS RELEASE",
            publishedAt: "2026-08-24T12:00:00.000Z",
            excerpt: "Nigeria's leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry.",
            body: [
                {
                    _key: "block1",
                    _type: "block",
                    children: [
                        {
                            _key: "span1",
                            _type: "span",
                            text: "Nigeria's leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry. A B2B exhibition organized by MABA in partnership with the Nigerian-Indonesian Chamber of Commerce and Industry and reGenesis, a US based Agri-tech company alongside other local and international partners.",
                            marks: []
                        }
                    ],
                    style: "normal"
                },
                {
                    _key: "block2",
                    _type: "block",
                    children: [
                        {
                            _key: "span2",
                            _type: "span",
                            text: "The FMCG Festival, Africa's premier B2B and consumer goods exhibition will be hosting over 5000 visitors and over 100 local and international exhibitors including manufacturing companies, consumer goods companies, distributors, suppliers technology brands and global buyers at the prestigious Oriental hotel Victoria Island Lagos Nigeria from 9-11th November 2026.",
                            marks: []
                        }
                    ],
                    style: "normal"
                }
            ]
        };
    } else {
        post = await client.fetch(singleUpdateQuery, { slug }).catch((error) => {
            console.error("Failed to fetch update from Sanity:", error);
            return null;
        });
    }

    if (!post) {
        return (
            <main className="flex-1 bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-black text-[#0A2E1F] mb-4">Update not found</h1>
                    <Link href="/updates" className="text-[#84A900] font-bold hover:underline">
                        Back to all updates
                    </Link>
                </div>
            </main>
        );
    }

    const isStaticPost = post._id === "static-opay-post";
    const imageUrl = isStaticPost ? "/partner9.png" : post.mainImage ? urlFor(post.mainImage).url() : null;

    return (
        <main className="flex-1 bg-white min-h-screen pb-20">

            {/* Back Button Container */}
            <div className="mx-auto px-6 pt-10 pb-6">
                <Link href="/updates" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#0A2E1F] transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to all updates
                </Link>
            </div>

            {/* Article Header */}
            <header className="max-w-7xl mx-auto px-6 mb-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#EBEBE8] text-[#0A2E1F] text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-sm">
                        {post.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        {formatDate(post.publishedAt)}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-[#0A2E1F] leading-[1.1] mb-6">
                    {post.title}
                </h1>

                <p className="text-xl text-gray-500 leading-relaxed">
                    {post.excerpt}
                </p>
            </header>

            {/* Main Feature Image */}
            {imageUrl && (
                <div className="max-w-5xl mx-auto px-6 mb-12">
                    <div className="relative w-full h-100 md:h-150 rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Portable Text Content (The actual blog body) */}
            <article className="max-w-7xl mx-auto px-6 text-gray-700">
                {post.body && post.body.length > 0 ? (
                    <PortableText value={post.body} components={portableTextComponents} />
                ) : (
                    <p className="text-gray-500">No content available for this update.</p>
                )}
            </article>

        </main>
    );
}
