"use client"

import { useEffect, useState } from "react"

export default function SanityNotice() {
  const [configured, setConfigured] = useState<boolean | null>(null)

  useEffect(() => {
    let mounted = true
    fetch("/api/health/sanity")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setConfigured(Boolean(data?.sanityConfigured))
      })
      .catch(() => {
        if (mounted) setConfigured(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (configured === null) return null
  if (configured) return null

  return (
    <div className="bg-yellow-50 border-t border-yellow-200 text-yellow-800 text-sm px-4 py-2 text-center">
      Sanity is not configured for this environment — public content is disabled. To enable,
      set <strong>NEXT_PUBLIC_SANITY_PROJECT_ID</strong> and <strong>NEXT_PUBLIC_SANITY_DATASET</strong> and rebuild. 
      <a
        href="https://github.com/Lampnet-Technologies/fmcg-festival#readme"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 font-semibold underline"
      >
        See setup instructions
      </a>
    </div>
  )
}
