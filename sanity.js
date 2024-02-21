// import sanityClient from '@sanity/client'
import { createClient } from '@sanity/client'
import {TOKEN} from '@env'

export const client = createClient({
  projectId: 'eee9vwny',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token:TOKEN,
})


