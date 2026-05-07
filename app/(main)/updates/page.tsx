import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { updatesQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

interface Update {
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
}

export default async function UpdatesPage() {
    const updates: Update[] = await client.fetch(updatesQuery);

    const getTagColor = (tag: string) => {
        switch (tag) {
            case "PRESS RELEASE":
                return "text-gray-500";
            case "SPEAKER SPOTLIGHT":
                return "text-blue-600";
            case "ANNOUNCEMENT":
                return "text-green-600";
            case "SOCIAL FEED":
                return "text-purple-600";
            default:
                return "text-gray-500";
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).toUpperCase();
    };

    return (
        <main className="flex-1 bg-[#F2F4EF] min-h-screen">
            {/* Editorial Hero */}
            <section className="bg-[#0A2E1F] pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Festival <span className="text-[#C5FA00]">News</span> & Updates
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Stay informed with the latest press releases, speaker announcements, and industry insights.
                    </p>
                </div>
            </section>

            {/* Grid Layout */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {updates.length > 0 ? (
                        updates.map((update) => (
                            <Link
                                key={update._id}
                                href={`/updates/${update.slug.current}`}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            >
                                {update.mainImage && (
                                    <div className="relative h-48 overflow-hidden bg-gray-200">
                                        <Image
                                            src={urlFor(update.mainImage).url()}
                                            alt={update.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            loading="eager"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold uppercase tracking-widest ${getTagColor(update.tag)}`}>
                                            {update.tag}
                                        </span>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                                            {formatDate(update.publishedAt)}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black text-[#0A2E1F] mb-3 line-clamp-2 group-hover:text-[#C5FA00] transition-colors">
                                        {update.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {update.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center py-10">
                            No updates yet. Check back soon!
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
