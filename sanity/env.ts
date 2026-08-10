const SANITY_PROJECT_ID_FALLBACK = 'placeholder-project-id'
const SANITY_DATASET_FALLBACK = 'placeholder-dataset'

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-27'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const isSanityConfigured = Boolean(
  dataset &&
  projectId &&
  projectId !== SANITY_PROJECT_ID_FALLBACK &&
  dataset !== SANITY_DATASET_FALLBACK
)

export const datasetOrFallback = dataset || SANITY_DATASET_FALLBACK
export const projectIdOrFallback = projectId || SANITY_PROJECT_ID_FALLBACK
