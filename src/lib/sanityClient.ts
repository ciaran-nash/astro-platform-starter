import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2024-08-05', // Use current UTC date
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
