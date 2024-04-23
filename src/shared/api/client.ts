import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  // projectId: "j7glk57c",
  // dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
