export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "" // !! WE DO NOT HAVE A PROD BASE_URL YET

// POST STATUS
export const DRAFT = false
export const PUBLISHED = true
