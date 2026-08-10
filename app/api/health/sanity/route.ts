import { NextResponse } from "next/server"
import { isSanityConfigured, projectIdOrFallback, datasetOrFallback } from "@/sanity/env"

export const dynamic = "force-static"

export async function GET() {
  // Return minimal info — only expose project/dataset when configured
  if (isSanityConfigured) {
    return NextResponse.json({ sanityConfigured: true })
  }

  return NextResponse.json({
    sanityConfigured: false,
    message: "Sanity env not set",
    projectId: projectIdOrFallback,
    dataset: datasetOrFallback,
  })
}
