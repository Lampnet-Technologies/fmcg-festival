import { createClient } from 'next-sanity'

import {
  apiVersion,
  datasetOrFallback,
  projectIdOrFallback,
  isSanityConfigured,
} from '../env'

export const client = createClient({
  projectId: projectIdOrFallback,
  dataset: datasetOrFallback,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const sanityConfigured = isSanityConfigured
